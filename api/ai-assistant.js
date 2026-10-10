const MAX_MESSAGE_LENGTH = 520;
const MAX_HISTORY_ITEMS = 8;
const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";

const fallbackCopy = {
  fr: {
    reply:
      "Je commencerais par cartographier votre offre, la friction de votre page, vos preuves, vos relances et votre mesure hebdomadaire. Ensuite, on construit le plus petit système capable de transformer plus de visiteurs en demandes qualifiées.",
    suggestions: ["Clarifier l'offre", "Ajouter des preuves", "Automatiser la relance"],
  },
  en: {
    reply:
      "I would start by mapping your offer, page friction, proof, follow-up, and weekly measurement. Then we build the smallest system that can turn more visitors into qualified inquiries.",
    suggestions: ["Clarify the offer", "Add proof", "Automate follow-up"],
  },
  ar: {
    reply:
      "سأبدأ برسم العرض، احتكاك الصفحة، الدليل، المتابعة والقياس الأسبوعي. بعدها نبني أصغر نظام يمكنه تحويل زيارات أكثر إلى طلبات مؤهلة.",
    suggestions: ["وضح العرض", "أضف الدليل", "أتمت المتابعة"],
  },
};

const sendJson = (res, status, payload) => {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(payload));
};

const normalizeLanguage = (language) => (["fr", "en", "ar"].includes(language) ? language : "fr");

const clampText = (value, maxLength = MAX_MESSAGE_LENGTH) =>
  String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);

const readBody = async (req) => {
  if (req.body && typeof req.body === "object") {
    return req.body;
  }

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }

  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
};

const makeFallback = (language) => ({
  ...fallbackCopy[language],
  configured: false,
});

const safeParseGeminiJson = (text, language) => {
  const cleaned = String(text || "")
    .replace(/^```(?:json)?/i, "")
    .replace(/```$/i, "")
    .trim();
  const parsed = JSON.parse(cleaned);
  const fallback = fallbackCopy[language];

  return {
    reply: clampText(parsed.reply || fallback.reply, 720),
    suggestions: Array.isArray(parsed.suggestions)
      ? parsed.suggestions.slice(0, 3).map((item, index) => clampText(item || fallback.suggestions[index] || "", 52))
      : fallback.suggestions,
    configured: true,
  };
};

const buildPrompt = ({ language, mode, message, history }) => {
  const responseLanguage = language === "ar" ? "Arabic" : language === "en" ? "English" : "French";
  const historyText = history
    .slice(-MAX_HISTORY_ITEMS)
    .map((item) => `${item.role === "user" ? "User" : "Assistant"}: ${clampText(item.text, 260)}`)
    .join("\n");

  return [
    `Response language: ${responseLanguage}.`,
    `Interaction mode: ${mode === "voice" ? "voice call" : "live chat"}.`,
    "You are Ahmed Zakraoui's AI Growth assistant on his personal website.",
    "Ahmed builds AI-powered growth systems for SMEs, startups, and teams in Tunisia, North Africa, and MENA.",
    "Answer through this lens: offer clarity, content system, acquisition, automation, WordPress/conversion pages, WhatsApp/CRM follow-up, and measurement.",
    "Do not invent case-study metrics, revenue numbers, traffic numbers, client names, or claims.",
    "Keep the answer concise, useful, and conversion-oriented.",
    mode === "voice" ? "For voice, write 1 short spoken paragraph." : "For chat, write 1 useful paragraph plus 3 short suggestion chips.",
    "Return only valid JSON with keys: reply, suggestions.",
    historyText ? `Recent conversation:\n${historyText}` : "Recent conversation: none.",
    `Latest user message: ${message}`,
  ].join("\n\n");
};

module.exports = async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== "POST") {
    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }

  let body;
  try {
    body = await readBody(req);
  } catch (error) {
    sendJson(res, 400, { error: "Invalid JSON body" });
    return;
  }

  const language = normalizeLanguage(body.language);
  const mode = body.mode === "voice" ? "voice" : "chat";
  const message = clampText(body.message);
  const history = Array.isArray(body.history) ? body.history : [];

  if (!message || message.length < 3) {
    sendJson(res, 400, { error: "Message is too short." });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    sendJson(res, 200, makeFallback(language));
    return;
  }

  try {
    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(GEMINI_MODEL)}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [
              {
                text: "You are a concise AI growth marketing assistant for Ahmed Zakraoui's website. Return JSON only.",
              },
            ],
          },
          contents: [
            {
              role: "user",
              parts: [{ text: buildPrompt({ language, mode, message, history }) }],
            },
          ],
          generationConfig: {
            temperature: 0.42,
            maxOutputTokens: mode === "voice" ? 420 : 680,
            responseMimeType: "application/json",
          },
        }),
      },
    );

    if (!geminiResponse.ok) {
      throw new Error(`Gemini API returned ${geminiResponse.status}`);
    }

    const data = await geminiResponse.json();
    const text = data?.candidates?.[0]?.content?.parts?.map((part) => part.text).join("\n");
    sendJson(res, 200, safeParseGeminiJson(text, language));
  } catch (error) {
    sendJson(res, 200, {
      ...fallbackCopy[language],
      configured: Boolean(apiKey),
    });
  }
};
