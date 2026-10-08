const MAX_INPUT_LENGTH = 520;
const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";

const fallbackCopy = {
  fr: {
    summary: "Le système semble manquer d'un lien clair entre acquisition, preuve et relance.",
    focus: [
      { label: "Demande", value: "Clarifier l'offre et le problème prioritaire." },
      { label: "Conversion", value: "Réduire la friction entre trafic et demande." },
      { label: "Suivi", value: "Connecter formulaire, WhatsApp et CRM léger." },
    ],
    nextSteps: [
      "Cartographier les sources de trafic et les points de perte.",
      "Créer une page ou section orientée preuve et objections.",
      "Mettre une relance WhatsApp/email simple après chaque demande.",
      "Suivre chaque semaine les signaux qui avancent vraiment.",
    ],
    cta: "Ceci est un aperçu local. Ajoutez GEMINI_API_KEY dans Vercel pour activer le diagnostic IA live.",
  },
  en: {
    summary: "The growth system likely needs a cleaner link between acquisition, proof, and follow-up.",
    focus: [
      { label: "Demand", value: "Clarify the offer and the priority pain." },
      { label: "Conversion", value: "Reduce friction between traffic and inquiry." },
      { label: "Follow-up", value: "Connect form, WhatsApp, and a light CRM." },
    ],
    nextSteps: [
      "Map traffic sources and drop-off points.",
      "Create a proof-led page or section that handles objections.",
      "Add a simple WhatsApp/email follow-up after each inquiry.",
      "Review the signals that actually move revenue every week.",
    ],
    cta: "This is a local preview. Add GEMINI_API_KEY in Vercel to enable the live AI diagnostic.",
  },
  ar: {
    summary: "يبدو أن نظام النمو يحتاج ربطا أوضح بين الاكتساب، الدليل، والمتابعة.",
    focus: [
      { label: "الطلب", value: "توضيح العرض والمشكلة الأهم." },
      { label: "التحويل", value: "تقليل الاحتكاك بين الزيارات وطلب التواصل." },
      { label: "المتابعة", value: "ربط النموذج وWhatsApp وCRM خفيف." },
    ],
    nextSteps: [
      "رسم مصادر الزيارات ونقاط فقدان العملاء.",
      "بناء قسم أو صفحة تركز على الدليل والاعتراضات.",
      "إضافة متابعة WhatsApp أو email بعد كل طلب.",
      "مراجعة الإشارات المهمة للنمو كل أسبوع.",
    ],
    cta: "هذه معاينة محلية. أضف GEMINI_API_KEY في Vercel لتفعيل التشخيص الحي.",
  },
};

const sendJson = (res, status, payload) => {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(payload));
};

const normalizeLanguage = (language) => (["fr", "en", "ar"].includes(language) ? language : "fr");

const clampText = (value, maxLength = MAX_INPUT_LENGTH) =>
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
    summary: clampText(parsed.summary || fallback.summary, 220),
    focus: Array.isArray(parsed.focus)
      ? parsed.focus.slice(0, 3).map((item, index) => ({
          label: clampText(item.label || fallback.focus[index]?.label || "", 24),
          value: clampText(item.value || fallback.focus[index]?.value || "", 86),
        }))
      : fallback.focus,
    nextSteps: Array.isArray(parsed.nextSteps)
      ? parsed.nextSteps.slice(0, 4).map((step, index) => clampText(step || fallback.nextSteps[index] || "", 120))
      : fallback.nextSteps,
    cta: clampText(parsed.cta || fallback.cta, 180),
    configured: true,
  };
};

const buildPrompt = ({ language, stage, bottleneck }) => {
  const responseLanguage =
    language === "ar" ? "Arabic" : language === "en" ? "English" : "French";

  return [
    `Response language: ${responseLanguage}.`,
    `Business stage: ${stage}.`,
    `Current bottleneck: ${bottleneck}.`,
    "Return only valid JSON with keys: summary, focus, nextSteps, cta.",
    "focus must contain exactly 3 objects with label and value.",
    "nextSteps must contain exactly 4 short practical steps.",
    "Do not invent performance numbers, revenue, traffic, or client metrics.",
    "Position Ahmed Zakraoui as someone who builds AI-powered growth systems connecting strategy, content, acquisition, automation, and measurement.",
    "Keep it concise, practical, premium, and useful for SMEs/startups in North Africa or MENA.",
  ].join("\n");
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
  const stage = clampText(body.stage, 80) || fallbackCopy[language].focus[0].value;
  const bottleneck = clampText(body.bottleneck);

  if (!bottleneck || bottleneck.length < 12) {
    sendJson(res, 400, { error: "Please describe the bottleneck with more detail." });
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
                text: "You are a concise growth marketing diagnostic assistant for Ahmed Zakraoui's personal website. You return useful, honest, JSON-only recommendations.",
              },
            ],
          },
          contents: [
            {
              role: "user",
              parts: [{ text: buildPrompt({ language, stage, bottleneck }) }],
            },
          ],
          generationConfig: {
            temperature: 0.35,
            maxOutputTokens: 720,
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
