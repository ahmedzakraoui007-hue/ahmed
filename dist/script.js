const menuButton = document.querySelector("#menuButton");
const nav = document.querySelector("#nav");
const header = document.querySelector("#siteHeader");
const progress = document.querySelector("#scrollProgress");
const hero = document.querySelector(".hero");
const neuralCanvas = document.querySelector("#neuralCanvas");
const cursorAura = document.querySelector("#cursorAura");
const storyNav = document.querySelector("#scrollStory");
const storyLinks = document.querySelectorAll("[data-story-link]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const enableDecorativeCanvas = false;
const enableCardTilt = false;

if (!prefersReducedMotion) {
  document.body.classList.add("motion-ready");
}

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? getCopy().aria.menuClose : getCopy().aria.menuOpen);
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", getCopy().aria.menuOpen);
  });
});

const languageCodes = ["fr", "en", "ar"];
const serviceKeys = ["strategy", "automation", "content", "growth", "training", "wordpress", "ugc"];
const maxAssistantHistoryItems = 8;
const siteBaseUrl = "https://ahmedzakraoui.com";
const languagePaths = {
  fr: "/",
  en: "/en/",
  ar: "/ar/",
};
const languageLocales = {
  en: "en_US",
  fr: "fr_FR",
  ar: "ar_AR",
};

const translations = {
  en: {
    dir: "ltr",
    name: "English",
    meta: {
      homeTitle: "Ahmed Zakraoui | AI Growth Systems for MENA Teams",
      homeDescription:
        "Ahmed Zakraoui builds AI growth systems for MENA teams: strategy, content, acquisition, automation, WordPress, and measurement.",
      thanksTitle: "Message sent | Ahmed Zakraoui",
      thanksDescription:
        "Thank you for contacting Ahmed Zakraoui about AI marketing strategy, automation, content systems, UGC video production, team training, or WordPress.",
    },
    brandSmall: "AI Growth Systems",
    aria: {
      home: "Ahmed Zakraoui home",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      nav: "Primary navigation",
      languages: "Language selector",
      signal: "Growth system signals",
      hook: "Marketing system map",
      cockpit: "AI marketing growth cockpit",
      portrait: "Ahmed Zakraoui portrait",
      salesWorkflow: "AI growth sales workflow",
      ugcWorkflow: "UGC video production workflow",
      trainingTopics: "Training topics",
      quickContact: "Quick contact options",
      footerNav: "Footer navigation",
      dropyScope: "Dropy work scope",
      paraScope: "ParaHealth work scope",
      workImpact: "Public ParaHealth project scope",
      dropyMetrics: "Dropy execution metrics",
      paraMetrics: "Public ParaHealth scope indicators",
    },
    nav: {
      services: "System",
      offers: "Offers",
      ugc: "UGC",
      sprint: "Sprint",
      proof: "Proof",
      work: "Projects",
      training: "Training",
      bootcamp: "Learn",
      cta: "Build",
    },
    story: {
      aria: "Page journey",
      labels: ["Intro", "Offers", "System", "Proof", "Contact"],
    },
    hero: {
      rail: ["Tunis", "North Africa", "MENA"],
      eyebrow: "Ahmed Zakraoui - AI Growth Systems",
      title: ["Turn fragmented marketing", "into a growth system."],
      statement: {
        before: "I connect ",
        strong: "strategy, content, traffic, WordPress, and automation",
        after: " into one measurable growth system.",
      },
      signals: ["Offer", "Content", "Traffic", "Measurement"],
      primary: "Build the system",
      secondary: "Learn for free",
      availability: "Selected MENA projects",
      cards: [
        ["Build", "Growth systems"],
        ["Learn", "Free Academy"],
      ],
      proof: ["Learn", "Build", "Measure"],
    },
    marquee: [
      "SMEs",
      "Startups",
      "Corporations",
      "Marketing teams",
      "E-commerce growth",
      "UGC creators",
      "Founders",
      "North Africa",
      "MENA region",
    ],
    hook: {
      eyebrow: "Signature system",
      title: "The growth system.",
      text: "Diagnose, align, build, automate, measure.",
      label: "Growth Operating System",
      summary: "5 movements",
      layers: [
        ["01", "Diagnose", "Goals, channels, blockers."],
        ["02", "Align", "ICP, offer, message."],
        ["03", "Build", "Pages, content, ads."],
        ["04", "Automate", "Prompts, CRM, routines."],
        ["05", "Measure", "Signal, tests, decisions."],
      ],
      metrics: ["Signal", "Offer", "Assets", "Ops", "Learning"],
    },
    servicesHead: {
      eyebrow: "What I do",
      title: "Systems I build.",
    },
    serviceTabs: {
      strategy: "AI Strategy",
      automation: "Automation",
      content: "Content",
      growth: "SEO/GEO + Ads",
      training: "Training",
      wordpress: "WordPress",
      ugc: "UGC Video",
    },
    services: {
      strategy: {
        index: "01",
        title: "Growth Strategy",
        text: "Find the real blockage before adding tools.",
        items: ["Diagnosis", "Use cases", "90-day roadmap"],
      },
      automation: {
        index: "02",
        title: "Automation Setup",
        text: "Tools and workflows your team can run.",
        items: ["CRM", "Prompts", "Routines"],
      },
      content: {
        index: "03",
        title: "Content System",
        text: "Ideas, UGC, SEO pages, and posts in one flow.",
        items: ["Pillars", "Briefs", "Review"],
      },
      growth: {
        index: "04",
        title: "SEO/GEO & Media Buying",
        text: "Search, AI discovery, paid campaigns, and pages.",
        items: ["Search", "Meta ads", "Landing tests"],
      },
      training: {
        index: "05",
        title: "Team Training",
        text: "Practical AI routines for the team.",
        items: ["Prompting", "Content ops", "Analytics"],
      },
      wordpress: {
        index: "06",
        title: "WordPress Development",
        text: "Clean sites and landing pages built to convert.",
        items: ["Websites", "Lead capture", "SEO structure"],
      },
      ugc: {
        index: "07",
        title: "UGC Video Production",
        text: "Short videos for trust, launch, and ad tests.",
        items: ["Brief", "Creators", "Ad-ready videos"],
      },
    },
    sales: {
      eyebrow: "AI growth offers",
      title: "A journey that turns attention into project requests.",
      text: "Like an augmented marketing team: capture, qualify, convince, follow up, and measure.",
      demoLabel: "Growth journey",
      demoTitle: "From the first click to the next booked conversation.",
      demoRows: [
        ["Lead", "Form / WhatsApp"],
        ["Message", "Offer + objections"],
        ["Action", "Page, content, ads"],
        ["Signal", "Dashboard & decisions"],
      ],
      flow: [
        ["01", "Capture", "Pages, SEO/GEO, content, and paid traffic create demand."],
        ["02", "Qualify", "Forms, WhatsApp, and CRM reveal buying intent."],
        ["03", "Convince", "UGC, proof, pages, and emails reduce friction."],
        ["04", "Follow up", "Automation and routines keep opportunities alive."],
        ["05", "Measure", "A simple dashboard shows what sells and what to improve."],
      ],
      offers: [
        {
          index: "01",
          title: "Growth System Diagnostic",
          text: "Clarify the blockage, channels, and priorities before investing more.",
          items: ["Fast audit", "Customer journey map", "30-day priorities"],
          cta: "Request the diagnostic",
        },
        {
          index: "02",
          title: "AI Growth Sprint",
          text: "Build the essential assets, workflows, and dashboards in 5 focused days.",
          items: ["AI roadmap", "Pages, content, UGC, ads", "Dashboard + team routine"],
          cta: "Book the Sprint",
        },
        {
          index: "03",
          title: "Managed Growth System",
          text: "Monthly support to run content, acquisition, and optimization.",
          items: ["SEO/GEO + content", "Paid media + UGC", "Reporting and iterations"],
          cta: "Discuss monthly support",
        },
      ],
    },
    ugcSection: {
      eyebrow: "UGC video partners",
      title: "UGC that earns trust.",
      text: "Brief. Creators. Assets ready to test.",
      cta: "Start a UGC video project",
      featureLabel: "UGC format preview",
      featureTitle: "Hook. Proof. CTA.",
      featureText: "Angles for Reels, TikTok, Shorts, and Meta Ads.",
      preview: [
        ["01", "Hook", "0-3 sec"],
        ["02", "Proof", "Product trust"],
        ["03", "CTA", "Ad test"],
      ],
      steps: [
        ["01", "Brief", "Hooks and angles."],
        ["02", "Create", "Partner creators."],
        ["03", "Deploy", "Organic and paid tests."],
      ],
    },
    sprint: {
      eyebrow: "Signature system",
      title: "AI Growth Sprint",
      text: "Five focused days to install the system.",
      cta: "Book my AI Growth Sprint",
      steps: [
        ["Day 01", "Diagnose", "Map the blockers."],
        ["Day 02", "Architect", "Design the roadmap."],
        ["Day 03", "Build", "Create the core assets."],
        ["Day 04", "Train", "Hand the system to the team."],
        ["Day 05", "Launch", "Start the weekly rhythm."],
      ],
    },
    proof: {
      eyebrow: "Proof of work",
      title: "Built. Taught. Shipped.",
      link: "Discuss it",
      cards: [
        ["Instructor", "GoMyCode", "Digital marketing training."],
        ["Founder", "Alpha Tech", "Tech and growth systems."],
        ["Creator", "DAY30 Bootcamp", "Structured execution."],
      ],
    },
    work: {
      eyebrow: "Real projects",
      title: "Projects you can inspect.",
      text: "Real scope. No invented numbers.",
      impact: [
        ["Before", "Fragmented channels"],
        ["Built", "Web, SEO/GEO, paid, social"],
        ["Proof", "Live public projects"],
        ["Trust", "Private metrics protected"],
      ],
      impactNote: "Public proof only. Private numbers stay private.",
      preview: "Project preview",
      link: "View project",
      cards: [
        {
          title: "Dropy growth stack.",
          text: "Website, SEO/GEO, UGC, paid and social connected.",
          metrics: [
            ["Mapped", "sellers + ads"],
            ["Built", "website"],
            ["Connected", "UGC + paid"],
            ["Managed", "SEO/GEO + social"],
          ],
          tags: ["Website creation", "SEO/GEO", "Media buying", "Social media"],
        },
        {
          title: "ParaHealth visibility stack.",
          text: "SEO/GEO, paid media and social content connected around e-commerce.",
          metrics: [
            ["Mapped", "search + social"],
            ["Built", "visibility"],
            ["Managed", "ads + content"],
            ["Impact", "public scope"],
          ],
          tags: ["E-commerce website", "SEO/GEO", "Paid ads", "Social content"],
        },
      ],
    },
    training: {
      eyebrow: "Team training",
      title: "Train the team that executes.",
      text: "Prompt libraries, workflows and dashboards.",
      format: "On-site or remote - teams of 2 to 10",
      cta: "Train my team",
      stack: [
        "Prompts",
        "Content ops",
        "Automation",
        "SEO/GEO",
        "UGC briefs",
        "Dashboards",
      ],
    },
    homeBootcamp: {
      eyebrow: "Free Academy",
      title: "Learn free. Build next.",
      text: "A free entry point before the paid Sprint.",
      pointsAria: "Bootcamp content",
      points: ["Diagnostic", "6 modules", "Sprint checkpoints"],
      previewRows: [
        ["Growth Loop + AI", "Checkpoint"],
        ["Content + SEO/GEO", "Quiz"],
        ["Ads, UGC + Analytics", "Score"],
      ],
      primary: "Learn for free",
      secondary: "See the modules",
    },
    demoLab: {
      aria: "AI demo lab",
      eyebrow: "AI Demo Lab",
      title: "Let prospects feel the system.",
      text: "Two lightweight simulations show how AI can qualify, reassure, and hand off the next action.",
      note: "MVP preview: no real call or WhatsApp message is sent. The diagnostic only uses the text you type.",
      caller: {
        badge: "AI Caller",
        pill: "Simulation",
        title: "AI qualification call.",
        text: "A mock inbound call: the agent listens, qualifies intent, and prepares a clean sales summary.",
        idleStatus: "Ready to simulate",
        idleTitle: "Inbound lead",
        doneStatus: "Summary ready",
        button: "Run voice call",
        buttonAgain: "Replay voice call",
        reset: "Reset",
        cta: "Book the real demo",
        voiceUnavailable: "Voice unavailable in this browser",
        liveLabel: "Live analysis",
        initialScore: "Lead score 0%",
        initialInsight: "Waiting for the first buying signal.",
        summaryLabel: "Lead summary",
        summaryTitle: "Diagnostic recommended",
        summaryText: "Need qualified, gap identified, and next action ready.",
        summaryChips: ["High intent", "Clear gap", "Call advised"],
        steps: [
          { speaker: "Prospect", text: "We need more qualified leads without adding more disconnected tools.", status: "Listening", score: "Lead score 42%", insight: "Need detected: more qualified demand." },
          { speaker: "AI agent", text: "I’ll map your offer, channels, tracking, and follow-up gaps first.", status: "Qualifying", score: "Lead score 64%", insight: "The agent is framing the growth system audit." },
          { speaker: "Prospect", text: "Our content, ads, and website are not connected.", status: "Finding the gap", score: "Lead score 78%", insight: "Core pain confirmed: fragmented channels." },
          { speaker: "AI agent", text: "Next step: a 30-minute Growth System Diagnostic with a clear build map.", status: "Next action", score: "Lead score 92%", insight: "Ready to book: send the diagnostic CTA." },
        ],
      },
      whatsapp: {
        badge: "WhatsApp AI",
        pill: "Interactive",
        title: "WhatsApp lead assistant.",
        text: "Choose a scenario and see how the assistant can guide a prospect without overwhelming them.",
        scenariosLabel: "WhatsApp scenarios",
        contactName: "Ahmed AI Assistant",
        online: "online",
        direct: "Open WhatsApp",
        cta: "Request the integration",
        scenarios: [
          {
            key: "lead",
            label: "New lead",
            messages: [
              { role: "bot", text: "Hi, I’m Ahmed’s AI assistant. What growth blockage do you want to fix first?" },
              { role: "user", text: "We have traffic but few project requests." },
              { role: "bot", text: "Got it. I would check offer clarity, landing page friction, follow-up speed, and proof. Want a diagnostic call?" },
            ],
          },
          {
            key: "content",
            label: "Content",
            messages: [
              { role: "bot", text: "Tell me your audience, offer, and current content rhythm." },
              { role: "user", text: "We post often, but it does not create demand." },
              { role: "bot", text: "Then we need a content system: pain points, proof, UGC angles, SEO/GEO pages, and a weekly review loop." },
            ],
          },
          {
            key: "sprint",
            label: "Sprint",
            messages: [
              { role: "bot", text: "The AI Growth Sprint is built for teams that need a working system fast." },
              { role: "user", text: "What happens during the sprint?" },
              { role: "bot", text: "We diagnose, design the roadmap, build assets, train the team, and launch the first weekly growth rhythm." },
            ],
          },
        ],
      },
      diagnostic: {
        badge: "Gemini diagnostic",
        title: "Get an instant growth map.",
        text: "Describe the marketing bottleneck. The assistant prepares a system-first mini-audit without inventing numbers.",
        fields: {
          stage: "Business stage",
          bottleneck: "Current bottleneck",
        },
        stages: ["SME", "Startup", "E-commerce", "Corporate"],
        placeholder: "Ex: we get traffic, but not enough qualified project requests.",
        button: "Generate mini-audit",
        loading: "Mapping the growth system...",
        resultLabel: "Result",
        empty: "The diagnostic will appear here after your message.",
        error: "I could not generate the diagnostic right now. Try again in a moment.",
        fallbackLabel: "Local preview",
        cta: "Use this as a first map, then book a diagnostic call to build the real system.",
      },
      liveAssistant: {
        badge: "Live AI assistant",
        title: "Talk with Ahmed's Growth assistant.",
        text: "Ask a question or start a web audio exchange. The assistant answers through the system lens: offer, content, acquisition, automation, and measurement.",
        statusReady: "Ready for chat",
        statusThinking: "Thinking through the system...",
        statusListening: "Listening now...",
        statusSpeaking: "Speaking response...",
        statusUnsupported: "Voice input is not supported in this browser",
        modeLabel: "AI assistant mode",
        modes: ["Chat", "Audio call"],
        greeting: "Hi, I’m Ahmed’s Growth assistant. What bottleneck should we analyze?",
        assistantLabel: "Assistant",
        youLabel: "You",
        quickLabel: "Quick questions",
        quickPrompts: [
          "Why are my visitors not converting?",
          "How can I automate my leads?",
          "What AI system does my team need?",
        ],
        placeholder: "Write your question...",
        send: "Send",
        voiceTitle: "Web AI audio call",
        voiceText: "Click, speak, then listen to the assistant reply. Your microphone stays in the browser.",
        voiceStart: "Start audio call",
        voiceStop: "End",
        voiceNote: "Not a phone call: this is browser audio conversation.",
        fallbackReply: "I would start by mapping your offer, page friction, proof, follow-up, and weekly measurement. Then we decide the smallest system to build first.",
        error: "The assistant could not answer right now. Try again in a moment.",
      },
    },
    contact: {
      eyebrow: "Work with Ahmed",
      title: "Let’s connect the pieces.",
      text: "Tell me the bottleneck. I’ll map the next build.",
      labels: ["Name", "Email", "Company", "Service", "Message"],
      servicePlaceholder: "Choose one",
      serviceOptions: [
        "AI Growth System",
        "Marketing Automation",
        "Content Strategy",
        "SEO/GEO & Media Buying",
        "Team Training",
        "WordPress Development",
        "UGC Video Production",
      ],
      placeholder: "What do you want to improve?",
      submit: "Send project request",
      note: "Reply within 24 business hours - 15-minute call with no obligation.",
      linkedin: "Profile",
    },
    footer: {
      text: "AI growth systems for MENA teams.",
      nav: ["System", "Offers", "UGC Video", "Projects", "AI Growth Sprint", "Team Training", "Free Academy", "Contact"],
      whatsapp: "Book a call",
      linkedin: "LinkedIn profile",
      bottom: ["Tunis, Tunisia", "AI Strategy - SEO/GEO - Ads - UGC - WordPress"],
      floating: "WhatsApp",
    },
    thanks: {
      eyebrow: "Message sent",
      title: "Thank you. I’ll read it soon.",
      text: "Your project request is on its way. For anything urgent, you can also reach me directly on WhatsApp.",
      back: "Back to site",
      whatsapp: "WhatsApp",
    },
  },
  fr: {
    dir: "ltr",
    name: "Français",
    meta: {
      homeTitle: "Ahmed Zakraoui | Systèmes de croissance IA",
      homeDescription:
        "Ahmed Zakraoui construit des systèmes de croissance IA pour équipes MENA : stratégie, contenu, acquisition, automation, WordPress et mesure.",
      thanksTitle: "Message envoyé | Ahmed Zakraoui",
      thanksDescription:
        "Merci d'avoir contacté Ahmed Zakraoui pour une stratégie marketing IA, l'automatisation, les systèmes de contenu, la vidéo UGC, la formation d'équipe ou WordPress.",
    },
    brandSmall: "Systèmes de croissance IA",
    aria: {
      home: "Accueil Ahmed Zakraoui",
      menuOpen: "Ouvrir le menu",
      menuClose: "Fermer le menu",
      nav: "Navigation principale",
      languages: "Sélecteur de langue",
      signal: "Signaux du système de croissance",
      hook: "Carte du système marketing",
      cockpit: "Cockpit de croissance marketing IA",
      portrait: "Portrait d'Ahmed Zakraoui",
      salesWorkflow: "Workflow commercial de croissance IA",
      ugcWorkflow: "Processus de production vidéo UGC",
      trainingTopics: "Sujets de formation",
      quickContact: "Options de contact rapide",
      footerNav: "Navigation du pied de page",
      dropyScope: "Périmètre du projet Dropy",
      paraScope: "Périmètre du projet ParaHealth",
      workImpact: "Périmètre public du projet Parahealth",
      dropyMetrics: "Indicateurs d'exécution Dropy",
      paraMetrics: "Périmètre public ParaHealth",
    },
    nav: {
      services: "Système",
      offers: "Offres",
      ugc: "UGC",
      sprint: "Sprint",
      proof: "Preuves",
      work: "Projets",
      training: "Formation",
      bootcamp: "Apprendre",
      cta: "Construire",
    },
    story: {
      aria: "Parcours de la page",
      labels: ["Intro", "Offres", "Système", "Preuve", "Contact"],
    },
    hero: {
      rail: ["Tunis", "Afrique du Nord", "MENA"],
      eyebrow: "Ahmed Zakraoui - AI Growth Systems",
      title: ["Transformer un marketing fragmenté", "en système de croissance."],
      statement: {
        before: "Je connecte ",
        strong: "stratégie, contenu, acquisition, WordPress et automation",
        after: " dans un système de croissance mesurable.",
      },
      signals: ["Offre", "Contenu", "Trafic", "Mesure"],
      primary: "Construire le système",
      secondary: "Apprendre gratuit",
      availability: "Projets MENA sélectionnés",
      cards: [
        ["Build", "Systèmes growth"],
        ["Learn", "Academy gratuite"],
      ],
      proof: ["Apprendre", "Construire", "Mesurer"],
    },
    marquee: [
      "PME",
      "Startups",
      "Entreprises",
      "Équipes marketing",
      "Croissance e-commerce",
      "Créateurs UGC",
      "Fondateurs",
      "Afrique du Nord",
      "Région MENA",
    ],
    hook: {
      eyebrow: "Système signature",
      title: "Le système de croissance.",
      text: "Diagnostiquer, aligner, construire, automatiser, mesurer.",
      label: "Growth Operating System",
      summary: "5 mouvements",
      layers: [
        ["01", "Diagnostiquer", "Objectifs, canaux, blocages."],
        ["02", "Aligner", "ICP, offre, message."],
        ["03", "Construire", "Pages, contenu, ads."],
        ["04", "Automatiser", "Prompts, CRM, routines."],
        ["05", "Mesurer", "Signal, tests, décisions."],
      ],
      metrics: ["Signal", "Offre", "Assets", "Ops", "Learning"],
    },
    servicesHead: {
      eyebrow: "Ce que je fais",
      title: "Systèmes construits.",
    },
    serviceTabs: {
      strategy: "Stratégie IA",
      automation: "Automatisation",
      content: "Contenu",
      growth: "SEO/GEO + Ads",
      training: "Formation",
      wordpress: "WordPress",
      ugc: "Vidéo UGC",
    },
    services: {
      strategy: {
        index: "01",
        title: "Stratégie Growth",
        text: "Trouver le vrai blocage avant les outils.",
        items: ["Diagnostic", "Cas d'usage", "Roadmap 90 jours"],
      },
      automation: {
        index: "02",
        title: "Setup Automation",
        text: "Outils et workflows que l'équipe peut piloter.",
        items: ["CRM", "Prompts", "Routines"],
      },
      content: {
        index: "03",
        title: "Système Contenu",
        text: "Idées, UGC, SEO et posts dans un même flow.",
        items: ["Piliers", "Briefs", "Validation"],
      },
      growth: {
        index: "04",
        title: "SEO/GEO & Media Buying",
        text: "Search, IA, campagnes paid et pages.",
        items: ["Search", "Meta ads", "Landing tests"],
      },
      training: {
        index: "05",
        title: "Formation d'Équipe",
        text: "Routines IA pratiques pour l'équipe.",
        items: ["Prompting", "Content ops", "Analytics"],
      },
      wordpress: {
        index: "06",
        title: "Développement WordPress",
        text: "Sites et landing pages propres, pensés conversion.",
        items: ["Sites", "Leads", "Structure SEO"],
      },
      ugc: {
        index: "07",
        title: "Production Vidéo UGC",
        text: "Vidéos courtes pour confiance, lancement et tests ads.",
        items: ["Brief", "Créateurs", "Vidéos ads"],
      },
    },
    sales: {
      eyebrow: "Offres de croissance IA",
      title: "Un parcours qui transforme l'attention en demandes.",
      text: "Comme une équipe marketing augmentée : capter, qualifier, convaincre, relancer et mesurer.",
      demoLabel: "Growth journey",
      demoTitle: "Du premier clic au prochain rendez-vous.",
      demoRows: [
        ["Lead", "Formulaire / WhatsApp"],
        ["Message", "Offre + objections"],
        ["Action", "Page, contenu, ads"],
        ["Signal", "Dashboard & décisions"],
      ],
      flow: [
        ["01", "Capter", "Pages, SEO/GEO, contenu et paid pour générer la demande."],
        ["02", "Qualifier", "Formulaires, WhatsApp et CRM pour comprendre l'intention."],
        ["03", "Convaincre", "UGC, preuve, pages et emails qui réduisent la friction."],
        ["04", "Relancer", "Automation et routines pour ne pas perdre les opportunités."],
        ["05", "Mesurer", "Dashboard simple pour voir ce qui vend et quoi améliorer."],
      ],
      offers: [
        {
          index: "01",
          title: "Growth System Diagnostic",
          text: "Clarifier le blocage, les canaux et les priorités avant d'investir plus.",
          items: ["Audit rapide", "Carte du parcours client", "Priorités 30 jours"],
          cta: "Demander le diagnostic",
        },
        {
          index: "02",
          title: "AI Growth Sprint",
          text: "Construire en 5 jours les actifs, workflows et dashboards essentiels.",
          items: ["Roadmap IA", "Pages, contenu, UGC et ads", "Dashboard + routine équipe"],
          cta: "Réserver le Sprint",
        },
        {
          index: "03",
          title: "Managed Growth System",
          text: "Accompagnement mensuel pour piloter contenu, acquisition et optimisation.",
          items: ["SEO/GEO + contenu", "Paid media + UGC", "Reporting et itérations"],
          cta: "Parler de l'accompagnement",
        },
      ],
    },
    ugcSection: {
      eyebrow: "Partenaires vidéo UGC",
      title: "UGC qui crée la confiance.",
      text: "Brief. Créateurs. Assets prêts à tester.",
      cta: "Lancer un projet vidéo UGC",
      featureLabel: "Aperçu formats UGC",
      featureTitle: "Hook. Preuve. CTA.",
      featureText: "Angles courts pour Reels, TikTok, Shorts et Meta Ads.",
      preview: [
        ["01", "Hook", "0-3 sec"],
        ["02", "Preuve", "Produit"],
        ["03", "CTA", "Test ads"],
      ],
      steps: [
        ["01", "Brief", "Hooks et angles."],
        ["02", "Créer", "Créateurs partenaires."],
        ["03", "Déployer", "Tests organiques et paid."],
      ],
    },
    sprint: {
      eyebrow: "Système signature",
      title: "L'AI Growth Sprint",
      text: "Cinq jours concentrés pour installer le système.",
      cta: "Réserver mon AI Growth Sprint",
      steps: [
        ["Jour 01", "Diagnostiquer", "Cartographier les blocages."],
        ["Jour 02", "Architecturer", "Dessiner la roadmap."],
        ["Jour 03", "Construire", "Créer les assets clés."],
        ["Jour 04", "Former", "Passer le système à l'équipe."],
        ["Jour 05", "Lancer", "Installer le rythme hebdo."],
      ],
    },
    proof: {
      eyebrow: "Preuves de travail",
      title: "Construit. Enseigné. Déployé.",
      link: "En parler",
      cards: [
        ["Instructeur", "GoMyCode", "Formation marketing digital."],
        ["Fondateur", "Alpha Tech", "Tech et systèmes growth."],
        ["Créateur", "DAY30 Bootcamp", "Exécution structurée."],
      ],
    },
    work: {
      eyebrow: "Projets réels",
      title: "Projets inspectables.",
      text: "Périmètre réel. Aucun chiffre inventé.",
      impact: [
        ["Avant", "Canaux fragmentés"],
        ["Construit", "Web, SEO/GEO, paid, social"],
        ["Preuve", "Projets publics live"],
        ["Confiance", "Métriques privées protégées"],
      ],
      impactNote: "Preuve publique uniquement. Les chiffres privés restent privés.",
      preview: "Aperçu projet",
      link: "Voir le projet",
      cards: [
        {
          title: "Stack growth Dropy.",
          text: "Site, SEO/GEO, UGC, paid et social connectés.",
          metrics: [
            ["Map", "vendeurs + ads"],
            ["Build", "site web"],
            ["Connecté", "UGC + paid"],
            ["Piloté", "SEO/GEO + social"],
          ],
          tags: ["Création site web", "SEO/GEO", "Media buying", "Social media"],
        },
        {
          title: "Stack visibilité ParaHealth.",
          text: "SEO/GEO, paid media et contenu social connectés autour de l'e-commerce.",
          metrics: [
            ["Map", "search + social"],
            ["Build", "visibilité"],
            ["Piloté", "ads + contenu"],
            ["Impact", "public"],
          ],
          tags: ["Site e-commerce", "SEO/GEO", "Paid ads", "Contenu social"],
        },
      ],
    },
    training: {
      eyebrow: "Formation d'équipe",
      title: "Former l'équipe qui exécute.",
      text: "Bibliothèques de prompts, workflows et dashboards.",
      format: "Présentiel ou remote - équipes de 2 à 10",
      cta: "Former mon équipe",
      stack: [
        "Prompts",
        "Content ops",
        "Automation",
        "SEO/GEO",
        "Briefs UGC",
        "Dashboards",
      ],
    },
    homeBootcamp: {
      eyebrow: "Academy gratuite",
      title: "Apprendre gratuit. Construire ensuite.",
      text: "La porte d'entrée gratuite avant le Sprint payant.",
      pointsAria: "Contenu du bootcamp",
      points: ["Diagnostic", "6 modules", "Checkpoints Sprint"],
      previewRows: [
        ["Growth Loop + IA", "Checkpoint"],
        ["Contenu + SEO/GEO", "Quiz"],
        ["Ads, UGC + Analytics", "Score"],
      ],
      primary: "Apprendre gratuitement",
      secondary: "Voir les modules",
    },
    demoLab: {
      aria: "Démos IA",
      eyebrow: "AI Demo Lab",
      title: "Faire sentir le système avant le rendez-vous.",
      text: "Deux simulations légères montrent comment l'IA peut qualifier, rassurer et envoyer la prochaine action.",
      note: "Aperçu MVP : aucun vrai appel ni WhatsApp n'est lancé. Le diagnostic utilise uniquement le texte saisi.",
      caller: {
        badge: "Appel IA",
        pill: "Simulation",
        title: "Appel IA de qualification.",
        text: "Un appel entrant simulé : l'agent écoute, qualifie l'intention et prépare un résumé commercial propre.",
        idleStatus: "Prêt à simuler",
        idleTitle: "Lead entrant",
        doneStatus: "Résumé prêt",
        button: "Lancer l'appel vocal",
        buttonAgain: "Rejouer l'appel vocal",
        reset: "Réinitialiser",
        cta: "Réserver la vraie démo",
        voiceUnavailable: "Voix indisponible sur ce navigateur",
        liveLabel: "Analyse live",
        initialScore: "Score lead 0%",
        initialInsight: "En attente du premier signal.",
        summaryLabel: "Résumé lead",
        summaryTitle: "Diagnostic recommandé",
        summaryText: "Besoin qualifié, blocage identifié et prochaine action prête.",
        summaryChips: ["Intent haut", "Blocage clair", "RDV conseillé"],
        steps: [
          { speaker: "Prospect", text: "Nous voulons plus de leads qualifiés sans ajouter encore des outils séparés.", status: "Écoute du besoin", score: "Score lead 42%", insight: "Besoin détecté : plus de demandes qualifiées." },
          { speaker: "Agent IA", text: "Je vais d'abord mapper votre offre, vos canaux, le tracking et les relances.", status: "Qualification", score: "Score lead 64%", insight: "L'agent cadre le diagnostic du système growth." },
          { speaker: "Prospect", text: "Notre contenu, nos ads et notre site ne sont pas connectés.", status: "Blocage identifié", score: "Score lead 78%", insight: "Douleur confirmée : canaux marketing fragmentés." },
          { speaker: "Agent IA", text: "Prochaine étape : un diagnostic Growth System de 30 minutes avec une carte de build claire.", status: "Action suivante", score: "Score lead 92%", insight: "Prêt à convertir : proposer le diagnostic." },
        ],
      },
      whatsapp: {
        badge: "WhatsApp IA",
        pill: "Interactif",
        title: "Assistant WhatsApp pour leads.",
        text: "Choisissez un scénario et voyez comment l'assistant peut guider un prospect sans l'étouffer.",
        scenariosLabel: "Scénarios WhatsApp",
        contactName: "Ahmed AI Assistant",
        online: "en ligne",
        direct: "Ouvrir WhatsApp",
        cta: "Demander l'intégration",
        scenarios: [
          {
            key: "lead",
            label: "Nouveau lead",
            messages: [
              { role: "bot", text: "Bonjour, je suis l'assistant IA d'Ahmed. Quel blocage growth voulez-vous régler en premier ?" },
              { role: "user", text: "Nous avons du trafic, mais peu de demandes de projet." },
              { role: "bot", text: "Compris. Je vérifierais l'offre, la page, la vitesse de relance et les preuves. On planifie un diagnostic ?" },
            ],
          },
          {
            key: "content",
            label: "Contenu",
            messages: [
              { role: "bot", text: "Dites-moi votre audience, votre offre et votre rythme de contenu actuel." },
              { role: "user", text: "On publie souvent, mais ça ne crée pas de demande." },
              { role: "bot", text: "Il faut un système contenu : douleurs, preuves, angles UGC, pages SEO/GEO et revue hebdomadaire." },
            ],
          },
          {
            key: "sprint",
            label: "Sprint",
            messages: [
              { role: "bot", text: "L'AI Growth Sprint est pensé pour les équipes qui veulent un système fonctionnel rapidement." },
              { role: "user", text: "Qu'est-ce qui se passe pendant le sprint ?" },
              { role: "bot", text: "On diagnostique, on dessine la roadmap, on construit les assets, on forme l'équipe et on lance le rythme growth." },
            ],
          },
        ],
      },
      diagnostic: {
        badge: "Diagnostic Gemini",
        title: "Obtenir une carte de croissance instantanée.",
        text: "Décrivez votre blocage marketing. L'assistant prépare un mini-audit orienté système, sans inventer de chiffres.",
        fields: {
          stage: "Étape business",
          bottleneck: "Blocage actuel",
        },
        stages: ["PME", "Startup", "E-commerce", "Corporate"],
        placeholder: "Ex: nous avons du trafic mais peu de demandes qualifiées.",
        button: "Générer le mini-audit",
        loading: "Cartographie du système growth...",
        resultLabel: "Résultat",
        empty: "Le diagnostic apparaîtra ici après votre message.",
        error: "Je n'ai pas pu générer le diagnostic maintenant. Réessayez dans un instant.",
        fallbackLabel: "Aperçu local",
        cta: "Utilisez ceci comme première carte, puis réservez un diagnostic pour construire le vrai système.",
      },
      liveAssistant: {
        badge: "Assistant IA live",
        title: "Discutez avec l'assistant Growth d'Ahmed.",
        text: "Posez une question ou lancez un échange audio web. L'assistant répond avec une logique système : offre, contenu, acquisition, automation et mesure.",
        statusReady: "Prêt pour le chat",
        statusThinking: "Analyse du système...",
        statusListening: "Écoute en cours...",
        statusSpeaking: "Réponse vocale...",
        statusUnsupported: "L'entrée vocale n'est pas supportée sur ce navigateur",
        modeLabel: "Mode assistant IA",
        modes: ["Chat", "Audio call"],
        greeting: "Bonjour, je suis l'assistant Growth d'Ahmed. Quel blocage voulez-vous analyser ?",
        assistantLabel: "Assistant",
        youLabel: "Vous",
        quickLabel: "Questions rapides",
        quickPrompts: [
          "Pourquoi mes visiteurs ne convertissent pas ?",
          "Comment automatiser mes leads ?",
          "Quel système IA pour mon équipe ?",
        ],
        placeholder: "Écrivez votre question...",
        send: "Envoyer",
        voiceTitle: "Appel audio IA web",
        voiceText: "Cliquez, parlez, puis écoutez la réponse de l'assistant. Le micro reste dans votre navigateur.",
        voiceStart: "Démarrer l'appel audio",
        voiceStop: "Terminer",
        voiceNote: "Pas un vrai appel téléphonique : conversation audio dans le navigateur.",
        fallbackReply: "Je commencerais par cartographier l'offre, la friction de page, les preuves, les relances et la mesure hebdomadaire. Ensuite on choisit le plus petit système à construire.",
        error: "L'assistant ne peut pas répondre maintenant. Réessayez dans un instant.",
      },
    },
    contact: {
      eyebrow: "Travailler avec Ahmed",
      title: "Connectons les pièces.",
      text: "Envoyez le blocage. Je cartographie le prochain build.",
      labels: ["Nom", "Email", "Entreprise", "Service", "Message"],
      servicePlaceholder: "Choisir un service",
      serviceOptions: [
        "Système de croissance IA",
        "Automatisation Marketing",
        "Stratégie de Contenu",
        "SEO/GEO & Media Buying",
        "Formation d'Équipe",
        "Développement WordPress",
        "Production Vidéo UGC",
      ],
      placeholder: "Qu'est-ce que vous voulez améliorer ?",
      submit: "Envoyer la demande",
      note: "Réponse sous 24h ouvrées - Échange de 15 min sans engagement.",
      linkedin: "Profil",
    },
    footer: {
      text: "Systèmes de croissance IA pour équipes MENA.",
      nav: ["Système", "Offres", "Vidéo UGC", "Projets", "AI Growth Sprint", "Formation", "Academy gratuite", "Contact"],
      whatsapp: "Prendre RDV",
      linkedin: "Profil LinkedIn",
      bottom: ["Tunis, Tunisie", "Stratégie IA - SEO/GEO - Ads - UGC - WordPress"],
      floating: "WhatsApp",
    },
    thanks: {
      eyebrow: "Message envoyé",
      title: "Merci. Je vais le lire très bientôt.",
      text: "Votre demande de projet est en route. Pour toute urgence, vous pouvez aussi me contacter directement sur WhatsApp.",
      back: "Retour au site",
      whatsapp: "WhatsApp",
    },
  },
  ar: {
    dir: "rtl",
    name: "العربية",
    meta: {
      homeTitle: "أحمد زكراوي | أنظمة نمو بالذكاء الاصطناعي",
      homeDescription:
        "أحمد زكراوي يبني أنظمة نمو بالذكاء الاصطناعي لفرق MENA: استراتيجية، محتوى، اكتساب، أتمتة، WordPress وقياس.",
      thanksTitle: "تم إرسال الرسالة | أحمد زكراوي",
      thanksDescription:
        "شكرا لتواصلك مع أحمد زكراوي حول التسويق الرقمي، الذكاء الاصطناعي، SEO/GEO، الإعلانات الممولة، فيديو UGC، تدريب الفرق أو تطوير WordPress.",
    },
    brandSmall: "أنظمة نمو بالذكاء الاصطناعي",
    aria: {
      home: "الرئيسية أحمد زكراوي",
      menuOpen: "فتح القائمة",
      menuClose: "إغلاق القائمة",
      nav: "التنقل الرئيسي",
      languages: "اختيار اللغة",
      signal: "إشارات نظام النمو",
      hook: "خريطة النظام التسويقي",
      cockpit: "لوحة نمو التسويق بالذكاء الاصطناعي",
      portrait: "صورة أحمد زكراوي",
      salesWorkflow: "مسار بيع نظام النمو بالذكاء الاصطناعي",
      ugcWorkflow: "سير عمل إنتاج فيديو UGC",
      trainingTopics: "مواضيع التدريب",
      quickContact: "خيارات التواصل السريع",
      footerNav: "تنقل التذييل",
      dropyScope: "نطاق عمل Dropy",
      paraScope: "نطاق عمل ParaHealth",
      workImpact: "نطاق عام لمشروع ParaHealth",
      dropyMetrics: "مؤشرات تنفيذ Dropy",
      paraMetrics: "نطاق عام لعمل ParaHealth",
    },
    nav: {
      services: "النظام",
      offers: "العروض",
      ugc: "فيديو UGC",
      sprint: "Sprint النمو",
      proof: "الأعمال",
      work: "المشاريع",
      training: "التدريب",
      bootcamp: "تعلّم",
      cta: "ابن النظام",
    },
    story: {
      aria: "مسار الصفحة",
      labels: ["البداية", "العروض", "النظام", "الدليل", "التواصل"],
    },
    hero: {
      rail: ["تونس", "شمال أفريقيا", "MENA"],
      eyebrow: "أحمد زكراوي - أنظمة نمو بالذكاء الاصطناعي",
      title: ["حوّل التسويق المتفرق", "إلى نظام نمو قابل للقياس."],
      statement: {
        before: "أربط ",
        strong: "الاستراتيجية، المحتوى، الزيارات، WordPress والأتمتة",
        after: " داخل نظام نمو واضح وقابل للقياس.",
      },
      signals: ["العرض", "المحتوى", "الزيارات", "القياس"],
      primary: "ابن النظام",
      secondary: "تعلم مجانا",
      availability: "مشاريع MENA مختارة",
      cards: [
        ["Build", "أنظمة نمو"],
        ["Learn", "أكاديمية مجانية"],
      ],
      proof: ["تعلم", "ابن", "قس"],
    },
    marquee: [
      "الشركات الصغيرة والمتوسطة",
      "الشركات الناشئة",
      "المؤسسات",
      "فرق التسويق",
      "نمو التجارة الإلكترونية",
      "صناع محتوى UGC",
      "المؤسسون",
      "شمال أفريقيا",
      "منطقة MENA",
    ],
    hook: {
      eyebrow: "النظام الخاص",
      title: "نظام النمو.",
      text: "تشخيص، توحيد، بناء، أتمتة، قياس.",
      label: "Growth Operating System",
      summary: "5 حركات",
      layers: [
        ["01", "تشخيص", "أهداف، قنوات، عوائق."],
        ["02", "توحيد", "عميل، عرض، رسالة."],
        ["03", "بناء", "صفحات، محتوى، إعلانات."],
        ["04", "أتمتة", "Prompts، CRM، روتين."],
        ["05", "قياس", "إشارة، اختبارات، قرارات."],
      ],
      metrics: ["إشارة", "عرض", "Assets", "Ops", "تعلم"],
    },
    servicesHead: {
      eyebrow: "ماذا أقدم",
      title: "أنظمة أبنيها.",
    },
    serviceTabs: {
      strategy: "استراتيجية الذكاء الاصطناعي",
      automation: "الأتمتة",
      content: "المحتوى",
      growth: "SEO/GEO + إعلانات",
      training: "التدريب",
      wordpress: "WordPress",
      ugc: "فيديو UGC",
    },
    services: {
      strategy: {
        index: "01",
        title: "استراتيجية نمو",
        text: "تحديد العائق الحقيقي قبل الأدوات.",
        items: ["تشخيص", "حالات استخدام", "خارطة 90 يوما"],
      },
      automation: {
        index: "02",
        title: "إعداد الأتمتة",
        text: "أدوات وتدفقات عمل قابلة للتنفيذ.",
        items: ["CRM", "Prompts", "روتينات"],
      },
      content: {
        index: "03",
        title: "نظام محتوى",
        text: "أفكار، UGC، SEO ومنشورات في flow واحد.",
        items: ["محاور", "Briefs", "مراجعة"],
      },
      growth: {
        index: "04",
        title: "SEO/GEO والإعلانات الممولة",
        text: "بحث، ذكاء اصطناعي، إعلانات وصفحات.",
        items: ["بحث", "Meta ads", "Landing tests"],
      },
      training: {
        index: "05",
        title: "تدريب الفرق",
        text: "روتينات ذكاء اصطناعي عملية للفريق.",
        items: ["Prompting", "Content ops", "Analytics"],
      },
      wordpress: {
        index: "06",
        title: "تطوير WordPress",
        text: "مواقع وصفحات هبوط مهيأة للتحويل.",
        items: ["مواقع", "Leads", "SEO"],
      },
      ugc: {
        index: "07",
        title: "إنتاج فيديو UGC",
        text: "فيديوهات قصيرة للثقة والإطلاق والاختبار.",
        items: ["Brief", "صناع محتوى", "فيديوهات Ads"],
      },
    },
    sales: {
      eyebrow: "عروض النمو بالذكاء الاصطناعي",
      title: "مسار يحول الانتباه إلى طلبات حقيقية.",
      text: "مثل فريق تسويق معزز: جذب، تأهيل، إقناع، متابعة وقياس.",
      demoLabel: "Growth journey",
      demoTitle: "من أول نقرة إلى محادثة محجوزة.",
      demoRows: [
        ["Lead", "Form / WhatsApp"],
        ["رسالة", "العرض + الاعتراضات"],
        ["إجراء", "صفحة، محتوى، Ads"],
        ["إشارة", "Dashboard وقرارات"],
      ],
      flow: [
        ["01", "جذب", "صفحات، SEO/GEO، محتوى وإعلانات لتوليد الطلب."],
        ["02", "تأهيل", "Forms، WhatsApp وCRM لفهم نية الشراء."],
        ["03", "إقناع", "UGC، دليل، صفحات ورسائل تقلل التردد."],
        ["04", "متابعة", "أتمتة وروتين حتى لا تضيع الفرص."],
        ["05", "قياس", "Dashboard بسيط يوضح ما يبيع وما يجب تحسينه."],
      ],
      offers: [
        {
          index: "01",
          title: "Growth System Diagnostic",
          text: "توضيح العائق، القنوات والأولويات قبل زيادة الاستثمار.",
          items: ["تدقيق سريع", "خريطة رحلة العميل", "أولويات 30 يوما"],
          cta: "اطلب التشخيص",
        },
        {
          index: "02",
          title: "AI Growth Sprint",
          text: "بناء الأصول، workflows والdashboards الأساسية في 5 أيام.",
          items: ["Roadmap بالذكاء الاصطناعي", "صفحات، محتوى، UGC وAds", "Dashboard + روتين الفريق"],
          cta: "احجز الSprint",
        },
        {
          index: "03",
          title: "Managed Growth System",
          text: "مرافقة شهرية لتسيير المحتوى، الاكتساب والتحسين.",
          items: ["SEO/GEO + محتوى", "Paid media + UGC", "تقارير وتحسينات"],
          cta: "ناقش المرافقة الشهرية",
        },
      ],
    },
    ugcSection: {
      eyebrow: "شركاء فيديو UGC",
      title: "UGC يبني الثقة.",
      text: "Brief. صناع محتوى. Assets جاهزة للاختبار.",
      cta: "ابدأ مشروع فيديو UGC",
      featureLabel: "نماذج UGC قصيرة",
      featureTitle: "Hook. إثبات. CTA.",
      featureText: "زوايا قصيرة لـ Reels وTikTok وShorts وMeta Ads.",
      preview: [
        ["01", "افتتاحية", "0-3 ث"],
        ["02", "إثبات", "ثقة المنتج"],
        ["03", "دعوة", "اختبار إعلان"],
      ],
      steps: [
        ["01", "التخطيط", "Hooks وزوايا."],
        ["02", "الإنتاج", "صناع محتوى شركاء."],
        ["03", "الإطلاق", "اختبار عضوي ومدفوع."],
      ],
    },
    sprint: {
      eyebrow: "النظام الخاص",
      title: "Sprint نمو بالذكاء الاصطناعي",
      text: "خمسة أيام مركزة لتثبيت النظام.",
      cta: "احجز AI Growth Sprint",
      steps: [
        ["اليوم 01", "تشخيص", "رسم العوائق."],
        ["اليوم 02", "تصميم", "تصميم الخارطة."],
        ["اليوم 03", "بناء", "بناء الأصول الأساسية."],
        ["اليوم 04", "تدريب", "تسليم النظام للفريق."],
        ["اليوم 05", "إطلاق", "إيقاع تحسين أسبوعي."],
      ],
    },
    proof: {
      eyebrow: "دليل العمل",
      title: "بناء. تدريب. إطلاق.",
      link: "لنتحدث عنه",
      cards: [
        ["مدرب", "GoMyCode", "تدريب تسويق رقمي."],
        ["مؤسس", "Alpha Tech", "تقنية وأنظمة نمو."],
        ["صانع محتوى", "DAY30 Bootcamp", "تنفيذ منظم."],
      ],
    },
    work: {
      eyebrow: "مشاريع حقيقية",
      title: "مشاريع قابلة للفحص.",
      text: "نطاق حقيقي. بدون أرقام مخترعة.",
      impact: [
        ["قبل", "قنوات متفرقة"],
        ["مبني", "موقع، SEO/GEO، Ads"],
        ["دليل", "مشاريع عامة مباشرة"],
        ["ثقة", "الأرقام الخاصة محمية"],
      ],
      impactNote: "دليل عام فقط. الأرقام الخاصة تبقى خاصة.",
      preview: "معاينة المشروع",
      link: "مشاهدة المشروع",
      cards: [
        {
          title: "Growth stack لـ Dropy.",
          text: "موقع، SEO/GEO، UGC، Ads وSocial متصلة.",
          metrics: [
            ["Map", "بائعون + Ads"],
            ["Build", "موقع"],
            ["متصل", "UGC + Paid"],
            ["مدار", "SEO/GEO + Social"],
          ],
          tags: ["إنشاء الموقع", "SEO/GEO", "إعلانات ممولة", "إدارة السوشيال ميديا"],
        },
        {
          title: "Visibility stack لـ ParaHealth.",
          text: "SEO/GEO، Paid media ومحتوى اجتماعي متصل حول e-commerce.",
          metrics: [
            ["Map", "بحث + Social"],
            ["Build", "ظهور"],
            ["مدار", "Ads + محتوى"],
            ["أثر", "عام"],
          ],
          tags: ["موقع تجارة إلكترونية", "SEO/GEO", "إعلانات ممولة", "محتوى اجتماعي"],
        },
      ],
    },
    training: {
      eyebrow: "تدريب الفرق",
      title: "درّب الفريق الذي ينفذ.",
      text: "مكتبات Prompts، workflows وdashboards.",
      format: "حضوري أو عن بعد - فرق من 2 إلى 10",
      cta: "درّب فريقي",
      stack: [
        "Prompts",
        "Content ops",
        "Automation",
        "SEO/GEO",
        "Briefs UGC",
        "Dashboards",
      ],
    },
    homeBootcamp: {
      eyebrow: "الأكاديمية المجانية",
      title: "تعلّم مجانا. ابن بعدها.",
      text: "مدخل مجاني قبل الـSprint المدفوع.",
      pointsAria: "محتوى البوتكامب",
      points: ["تشخيص", "6 وحدات", "Checkpoints Sprint"],
      previewRows: [
        ["حلقة النمو + الذكاء الاصطناعي", "Checkpoint"],
        ["المحتوى + SEO/GEO", "Quiz"],
        ["الإعلانات، UGC والتحليلات", "Score"],
      ],
      primary: "تعلم مجانا",
      secondary: "شاهد الوحدات",
    },
    demoLab: {
      aria: "تجارب ذكاء اصطناعي",
      eyebrow: "AI Demo Lab",
      title: "اجعل العميل يشعر بالنظام قبل الاجتماع.",
      text: "تجربتان خفيفتان توضّحان كيف يساعد الذكاء الاصطناعي في التأهيل، الطمأنة، وتحديد الخطوة التالية.",
      note: "معاينة MVP: لا مكالمة حقيقية ولا رسالة WhatsApp. التشخيص يستخدم فقط النص الذي تكتبه.",
      caller: {
        badge: "مكالمة IA",
        pill: "محاكاة",
        title: "مكالمة تأهيل بالذكاء الاصطناعي.",
        text: "مكالمة واردة افتراضية: الوكيل يسمع، يؤهل النية، ثم يحضّر ملخصا تجاريا واضحا.",
        idleStatus: "جاهز للمحاكاة",
        idleTitle: "Lead وارد",
        doneStatus: "الملخص جاهز",
        button: "ابدأ المكالمة الصوتية",
        buttonAgain: "إعادة المكالمة الصوتية",
        reset: "إعادة ضبط",
        cta: "احجز الديمو الحقيقي",
        voiceUnavailable: "الصوت غير متاح في هذا المتصفح",
        liveLabel: "تحليل مباشر",
        initialScore: "Score lead 0%",
        initialInsight: "في انتظار أول إشارة شراء.",
        summaryLabel: "ملخص lead",
        summaryTitle: "تشخيص موصى به",
        summaryText: "تم تأهيل الحاجة، تحديد العائق، وتجهيز الخطوة التالية.",
        summaryChips: ["نية عالية", "عائق واضح", "موعد مقترح"],
        steps: [
          { speaker: "العميل", text: "نحتاج Leads مؤهلين أكثر بدون إضافة أدوات منفصلة أخرى.", status: "فهم الحاجة", score: "Score lead 42%", insight: "تم رصد الحاجة: طلبات مؤهلة أكثر." },
          { speaker: "وكيل IA", text: "سأرسم العرض، القنوات، التتبع، ونقاط ضعف المتابعة أولا.", status: "التأهيل", score: "Score lead 64%", insight: "الوكيل يحدد إطار تشخيص نظام النمو." },
          { speaker: "العميل", text: "المحتوى، الإعلانات والموقع غير متصلين مع بعضهم.", status: "تحديد العائق", score: "Score lead 78%", insight: "تم تأكيد المشكلة: قنوات تسويق متفرقة." },
          { speaker: "وكيل IA", text: "الخطوة التالية: تشخيص Growth System لمدة 30 دقيقة مع خريطة بناء واضحة.", status: "الخطوة التالية", score: "Score lead 92%", insight: "جاهز للتحويل: اقترح مكالمة التشخيص." },
        ],
      },
      whatsapp: {
        badge: "WhatsApp IA",
        pill: "تفاعلي",
        title: "مساعد WhatsApp للـ leads.",
        text: "اختر سيناريو وشاهد كيف يمكن للمساعد توجيه العميل بدون إرباكه.",
        scenariosLabel: "سيناريوهات WhatsApp",
        contactName: "Ahmed AI Assistant",
        online: "متصل",
        direct: "افتح WhatsApp",
        cta: "اطلب الربط",
        scenarios: [
          {
            key: "lead",
            label: "Lead جديد",
            messages: [
              { role: "bot", text: "مرحبا، أنا مساعد أحمد بالذكاء الاصطناعي. ما أول عائق نمو تريد إصلاحه؟" },
              { role: "user", text: "لدينا زيارات، لكن طلبات المشاريع قليلة." },
              { role: "bot", text: "واضح. سأراجع وضوح العرض، صفحة الهبوط، سرعة المتابعة والدليل. هل نحدد مكالمة تشخيص؟" },
            ],
          },
          {
            key: "content",
            label: "المحتوى",
            messages: [
              { role: "bot", text: "أخبرني عن الجمهور، العرض، وإيقاع المحتوى الحالي." },
              { role: "user", text: "ننشر كثيرا، لكن لا نصنع طلبا حقيقيا." },
              { role: "bot", text: "نحتاج نظام محتوى: آلام العملاء، إثبات، زوايا UGC، صفحات SEO/GEO ومراجعة أسبوعية." },
            ],
          },
          {
            key: "sprint",
            label: "Sprint",
            messages: [
              { role: "bot", text: "AI Growth Sprint مناسب للفرق التي تريد نظاما عمليا بسرعة." },
              { role: "user", text: "ماذا يحدث داخل السبرينت؟" },
              { role: "bot", text: "نشخّص، نبني roadmap، نجهز assets، ندرب الفريق، ونطلق إيقاع growth أسبوعي." },
            ],
          },
        ],
      },
      diagnostic: {
        badge: "تشخيص Gemini",
        title: "احصل على خريطة نمو فورية.",
        text: "اكتب عائق التسويق الحالي. يحضّر المساعد mini-audit مبني على النظام بدون اختراع أرقام.",
        fields: {
          stage: "مرحلة الشركة",
          bottleneck: "العائق الحالي",
        },
        stages: ["شركة صغيرة", "Startup", "E-commerce", "Corporate"],
        placeholder: "مثال: لدينا زيارات لكن طلبات المشاريع المؤهلة قليلة.",
        button: "أنشئ التشخيص",
        loading: "يتم رسم نظام النمو...",
        resultLabel: "النتيجة",
        empty: "سيظهر التشخيص هنا بعد رسالتك.",
        error: "لم أتمكن من إنشاء التشخيص الآن. حاول مرة أخرى بعد قليل.",
        fallbackLabel: "معاينة محلية",
        cta: "استعمل هذا كخريطة أولية، ثم احجز مكالمة تشخيص لبناء النظام الحقيقي.",
      },
      liveAssistant: {
        badge: "مساعد IA مباشر",
        title: "تحدث مع مساعد النمو الخاص بأحمد.",
        text: "اكتب سؤالا أو ابدأ محادثة صوتية عبر المتصفح. يجيب المساعد بمنطق النظام: العرض، المحتوى، الاكتساب، الأتمتة والقياس.",
        statusReady: "جاهز للدردشة",
        statusThinking: "يحلل النظام...",
        statusListening: "يستمع الآن...",
        statusSpeaking: "يرد صوتيا...",
        statusUnsupported: "الإدخال الصوتي غير مدعوم في هذا المتصفح",
        modeLabel: "وضع مساعد IA",
        modes: ["Chat", "Audio call"],
        greeting: "مرحبا، أنا مساعد النمو الخاص بأحمد. ما العائق الذي تريد تحليله؟",
        assistantLabel: "المساعد",
        youLabel: "أنت",
        quickLabel: "أسئلة سريعة",
        quickPrompts: [
          "لماذا لا يتحول الزوار إلى طلبات؟",
          "كيف أؤتمت متابعة العملاء؟",
          "ما نظام الذكاء الاصطناعي الذي يحتاجه فريقي؟",
        ],
        placeholder: "اكتب سؤالك...",
        send: "إرسال",
        voiceTitle: "مكالمة صوتية IA عبر الويب",
        voiceText: "اضغط، تحدث، ثم استمع إلى رد المساعد. الميكروفون يبقى داخل المتصفح.",
        voiceStart: "ابدأ المكالمة الصوتية",
        voiceStop: "إنهاء",
        voiceNote: "ليست مكالمة هاتفية: هذه محادثة صوتية داخل المتصفح.",
        fallbackReply: "سأبدأ برسم العرض، احتكاك الصفحة، الدليل، المتابعة والقياس الأسبوعي. بعدها نختار أصغر نظام يجب بناؤه أولا.",
        error: "لا يستطيع المساعد الرد الآن. حاول مرة أخرى بعد قليل.",
      },
    },
    contact: {
      eyebrow: "اعمل مع أحمد",
      title: "لنربط القطع.",
      text: "أرسل العائق. أحدد البناء التالي.",
      labels: ["الاسم", "البريد الإلكتروني", "الشركة", "الخدمة", "الرسالة"],
      servicePlaceholder: "اختر خدمة",
      serviceOptions: [
        "نظام نمو بالذكاء الاصطناعي",
        "أتمتة التسويق",
        "استراتيجية المحتوى",
        "SEO/GEO والإعلانات الممولة",
        "تدريب الفريق",
        "تطوير WordPress",
        "إنتاج فيديو UGC",
      ],
      placeholder: "ما الذي تريد تحسينه؟",
      submit: "إرسال الطلب",
      note: "رد خلال 24 ساعة عمل - مكالمة 15 دقيقة بدون التزام.",
      linkedin: "الملف الشخصي",
    },
    footer: {
      text: "أنظمة نمو بالذكاء الاصطناعي لفرق MENA.",
      nav: ["النظام", "العروض", "فيديو UGC", "المشاريع", "AI Growth Sprint", "التدريب", "الأكاديمية المجانية", "التواصل"],
      whatsapp: "احجز موعدا",
      linkedin: "ملف LinkedIn",
      bottom: ["تونس", "استراتيجية AI - SEO/GEO - Ads - UGC - WordPress"],
      floating: "WhatsApp",
    },
    thanks: {
      eyebrow: "تم إرسال الرسالة",
      title: "شكرا لك. سأقرأها قريبا.",
      text: "طلب مشروعك في الطريق. إذا كان الأمر عاجلا، يمكنك أيضا التواصل معي مباشرة عبر WhatsApp.",
      back: "العودة إلى الموقع",
      whatsapp: "WhatsApp",
    },
  },
};

const getInitialLanguage = () => {
  const urlLanguage = new URLSearchParams(window.location.search).get("lang");
  const pageLanguage = document.body.dataset.defaultLang;
  const pathLanguage = window.location.pathname.startsWith("/en/")
    ? "en"
    : window.location.pathname.startsWith("/fr/")
      ? "fr"
      : window.location.pathname.startsWith("/ar/")
      ? "ar"
      : "";
  const savedLanguage = window.localStorage.getItem("ahmed-site-language");

  if (languageCodes.includes(urlLanguage)) {
    return urlLanguage;
  }

  if (languageCodes.includes(pageLanguage)) {
    return pageLanguage;
  }

  if (languageCodes.includes(pathLanguage)) {
    return pathLanguage;
  }

  if (languageCodes.includes(savedLanguage)) {
    return savedLanguage;
  }

  return "fr";
};

let currentLanguage = getInitialLanguage();
let activeServiceKey = "strategy";

const serviceDetail = document.querySelector("#serviceDetail");
const serviceIndex = document.querySelector("#serviceIndex");
const serviceTitle = document.querySelector("#serviceTitle");
const serviceText = document.querySelector("#serviceText");
const serviceList = document.querySelector("#serviceList");
const formLanguage = document.querySelector("#formLanguage");
const metaDescription = document.querySelector('meta[name="description"]');
const seoImageUrl = `${siteBaseUrl}/assets/ahmed-hero.jpg`;
const localizedImageAlt = {
  en: {
    portrait: "Ahmed Zakraoui, digital marketing and AI marketing specialist in Tunisia",
    profile: "Ahmed Zakraoui portrait",
    dropy: "Dropy.store e-commerce website homepage created and grown by Ahmed Zakraoui",
    parahealth: "ParaHealth.tn parapharmacy e-commerce homepage managed for SEO, media buying, and social media",
  },
  fr: {
    portrait: "Ahmed Zakraoui, spécialiste marketing digital et marketing IA en Tunisie",
    profile: "Portrait d'Ahmed Zakraoui",
    dropy: "Page d'accueil du site e-commerce Dropy.store créé et développé par Ahmed Zakraoui",
    parahealth: "Page d'accueil ParaHealth.tn optimisée en SEO, media buying et social media",
  },
  ar: {
    portrait: "أحمد زكراوي، متخصص في التسويق الرقمي والذكاء الاصطناعي في تونس",
    profile: "صورة أحمد زكراوي",
    dropy: "واجهة موقع Dropy.store للتجارة الإلكترونية الذي أنشأه وطوره أحمد زكراوي",
    parahealth: "واجهة موقع ParaHealth.tn مع إدارة SEO والإعلانات والسوشيال ميديا",
  },
};

const getCopy = () => translations[currentLanguage] || translations.fr;

const getLanguageHref = (language, isThanksPage = false) => {
  if (isThanksPage) {
    return language === "fr" ? "/merci" : `/merci?lang=${language}`;
  }

  return languagePaths[language] || "/";
};

const getBootcampHref = (language, hash = "") => {
  const path =
    language === "fr"
      ? "/bootcamp"
      : language === "en"
      ? "/en/bootcamp"
      : language === "ar"
      ? "/ar/bootcamp"
      : "/bootcamp";
  return `${path}${hash}`;
};

const upsertMetaName = (name, content) => {
  let element = document.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.append(element);
  }
  element.setAttribute("content", content);
};

const upsertMetaProperty = (property, content) => {
  let element = document.querySelector(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.append(element);
  }
  element.setAttribute("content", content);
};

const upsertLink = (key, attributes) => {
  let element = document.querySelector(`link[data-seo="${key}"]`);
  if (!element) {
    element = document.createElement("link");
    element.dataset.seo = key;
    document.head.append(element);
  }

  Object.entries(attributes).forEach(([attribute, value]) => {
    element.setAttribute(attribute, value);
  });
};

const applySeo = (copy, isThanksPage) => {
  const title = isThanksPage ? copy.meta.thanksTitle : copy.meta.homeTitle;
  const description = isThanksPage ? copy.meta.thanksDescription : copy.meta.homeDescription;
  const canonicalPath = isThanksPage ? getLanguageHref(currentLanguage, true) : getLanguageHref(currentLanguage);
  const canonicalUrl = `${siteBaseUrl}${canonicalPath}`;
  const locale = languageLocales[currentLanguage] || languageLocales.en;

  upsertMetaName("robots", isThanksPage ? "noindex, follow" : "index, follow");
  upsertLink("canonical", { rel: "canonical", href: canonicalUrl });

  languageCodes.forEach((language) => {
    if (!isThanksPage) {
      upsertLink(`alternate-${language}`, {
        rel: "alternate",
        hreflang: language,
        href: `${siteBaseUrl}${getLanguageHref(language)}`,
      });
    }
  });

  if (!isThanksPage) {
    upsertLink("alternate-default", {
      rel: "alternate",
      hreflang: "x-default",
      href: `${siteBaseUrl}/`,
    });
  }

  upsertMetaProperty("og:type", "website");
  upsertMetaProperty("og:site_name", "Ahmed Zakraoui");
  upsertMetaProperty("og:title", title);
  upsertMetaProperty("og:description", description);
  upsertMetaProperty("og:url", canonicalUrl);
  upsertMetaProperty("og:image", seoImageUrl);
  upsertMetaProperty("og:locale", locale);

  Object.entries(languageLocales).forEach(([language, alternateLocale]) => {
    const key = `og-locale-${language}`;
    const existing = document.querySelector(`meta[data-seo="${key}"]`);

    if (alternateLocale === locale) {
      existing?.remove();
      return;
    }

    let element = existing;
    if (!element) {
      element = document.createElement("meta");
      element.dataset.seo = key;
      element.setAttribute("property", "og:locale:alternate");
      document.head.append(element);
    }
    element.setAttribute("content", alternateLocale);
  });

  upsertMetaName("twitter:card", "summary_large_image");
  upsertMetaName("twitter:title", title);
  upsertMetaName("twitter:description", description);
  upsertMetaName("twitter:image", seoImageUrl);

  let schema = document.querySelector('script[type="application/ld+json"][data-schema="identity"]');
  if (!schema) {
    schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.dataset.schema = "identity";
    document.head.append(schema);
  }

  const serviceNames = copy.contact.serviceOptions.filter(Boolean);
  const knowsAbout = currentLanguage === "ar"
    ? [
        "التسويق الرقمي",
        "أنظمة النمو بالذكاء الاصطناعي",
        "SEO/GEO",
        "الإعلانات الممولة",
        "إنتاج فيديو UGC",
        "تطوير WordPress",
        "نمو التجارة الإلكترونية",
      ]
    : currentLanguage === "fr"
      ? [
          "Marketing digital",
          "Systèmes de croissance alimentés par l'IA",
          "SEO/GEO",
          "Media buying",
          "Production vidéo UGC",
          "Développement WordPress",
          "Croissance e-commerce",
        ]
      : [
          "Digital marketing",
          "AI growth systems",
          "SEO/GEO",
          "Media buying",
          "UGC video production",
          "WordPress development",
          "E-commerce growth",
        ];

  schema.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteBaseUrl}/#website`,
        url: siteBaseUrl,
        name: "Ahmed Zakraoui",
        inLanguage: currentLanguage,
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description,
        inLanguage: currentLanguage,
        isPartOf: { "@id": `${siteBaseUrl}/#website` },
        about: { "@id": `${siteBaseUrl}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${siteBaseUrl}/#person`,
        name: currentLanguage === "ar" ? "أحمد زكراوي" : "Ahmed Zakraoui",
        alternateName: ["Ahmed Zakraoui", "أحمد زكراوي"],
        url: canonicalUrl,
        image: seoImageUrl,
        jobTitle: copy.hero.eyebrow,
        sameAs: ["https://www.linkedin.com/in/ahmedzakrawi/"],
        address: {
          "@type": "PostalAddress",
          addressLocality: currentLanguage === "ar" ? "تونس" : currentLanguage === "fr" ? "Tunis" : "Tunis",
          addressCountry: "TN",
        },
        knowsAbout,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteBaseUrl}/#services`,
        name: currentLanguage === "ar" ? "أنظمة نمو أحمد زكراوي بالذكاء الاصطناعي" : "Ahmed Zakraoui AI Growth Systems",
        url: canonicalUrl,
        image: seoImageUrl,
        areaServed: ["Tunisia", "North Africa", "MENA"],
        founder: { "@id": `${siteBaseUrl}/#person` },
        serviceType: serviceNames,
        makesOffer: serviceNames.map((serviceName) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: serviceName,
          },
        })),
      },
    ],
  });
};

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element && typeof value === "string") {
    element.textContent = value;
  }
};

const setHeroTitle = (values) => {
  const title = document.querySelector(".hero-title");
  if (!title || !Array.isArray(values)) {
    return;
  }

  title.textContent = "";
  values.forEach((value) => {
    const span = document.createElement("span");
    span.textContent = value;
    title.append(span);
  });
};

const setRichText = (selector, value) => {
  const element = document.querySelector(selector);
  if (!element) {
    return;
  }

  if (typeof value === "string") {
    element.textContent = value;
    return;
  }

  if (!value || typeof value !== "object") {
    return;
  }

  element.textContent = "";
  if (typeof value.before === "string") {
    element.append(document.createTextNode(value.before));
  }
  if (typeof value.strong === "string") {
    const strong = document.createElement("strong");
    strong.textContent = value.strong;
    element.append(strong);
  }
  if (typeof value.after === "string") {
    element.append(document.createTextNode(value.after));
  }
};

const setAllText = (selector, values) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    if (typeof values[index] === "string") {
      element.textContent = values[index];
    }
  });
};

const setAttribute = (selector, attribute, value) => {
  const element = document.querySelector(selector);
  if (element && typeof value === "string") {
    element.setAttribute(attribute, value);
  }
};

const setAllAttribute = (selector, attribute, value) => {
  document.querySelectorAll(selector).forEach((element) => {
    if (typeof value === "string") {
      element.setAttribute(attribute, value);
    }
  });
};

const setListItems = (selector, values) => {
  const list = document.querySelector(selector);
  if (!list || !Array.isArray(values)) {
    return;
  }

  list.textContent = "";
  values.forEach((value) => {
    const item = document.createElement("li");
    item.textContent = value;
    list.append(item);
  });
};

let activeCallStep = 0;
let callerDemoTimer = null;
let activeWhatsappScenario = "lead";
let callerVoiceEnabled = true;
let activeAssistantMode = "chat";
let assistantHistory = [];
let voiceRecognition = null;
let isVoiceSessionActive = false;
let voiceRestartTimer = null;

const speechLanguageMap = {
  en: "en-US",
  fr: "fr-FR",
  ar: "ar-SA",
};

const canUseSpeech = () => "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;

const stopSpeech = () => {
  if (canUseSpeech()) {
    window.speechSynthesis.cancel();
  }

  document.querySelector(".caller-demo")?.classList.remove("is-speaking");
  document.querySelector(".ai-live-card")?.classList.remove("is-speaking");
};

const speakCallStep = (step) => {
  if (!callerVoiceEnabled || !step || !canUseSpeech()) {
    return;
  }

  stopSpeech();
  const utterance = new SpeechSynthesisUtterance(`${step.speaker}. ${step.text}`);
  utterance.lang = speechLanguageMap[currentLanguage] || speechLanguageMap.fr;
  utterance.rate = currentLanguage === "ar" ? 0.88 : 0.94;
  utterance.pitch = /agent|وكيل/i.test(step.speaker) ? 1.02 : 0.92;
  const voice = window.speechSynthesis
    .getVoices()
    .find((item) => item.lang.toLowerCase().startsWith(utterance.lang.slice(0, 2).toLowerCase()));

  if (voice) {
    utterance.voice = voice;
  }

  utterance.onstart = () => document.querySelector(".caller-demo")?.classList.add("is-speaking");
  utterance.onend = () => document.querySelector(".caller-demo")?.classList.remove("is-speaking");
  utterance.onerror = () => document.querySelector(".caller-demo")?.classList.remove("is-speaking");
  window.speechSynthesis.speak(utterance);
  window.speechSynthesis.resume?.();
};

const speakAssistantReply = (text) => {
  if (!text || !canUseSpeech()) {
    return;
  }

  stopSpeech();
  const card = document.querySelector(".ai-live-card");
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = speechLanguageMap[currentLanguage] || speechLanguageMap.fr;
  utterance.rate = currentLanguage === "ar" ? 0.88 : 0.94;
  utterance.pitch = 1;
  const voice = window.speechSynthesis
    .getVoices()
    .find((item) => item.lang.toLowerCase().startsWith(utterance.lang.slice(0, 2).toLowerCase()));

  if (voice) {
    utterance.voice = voice;
  }

  utterance.onstart = () => {
    card?.classList.add("is-speaking");
    setLiveAssistantStatus(getCopy(), "speaking");
  };
  utterance.onend = () => {
    card?.classList.remove("is-speaking");
    setLiveAssistantStatus(getCopy(), "ready");

    if (activeAssistantMode === "voice" && isVoiceSessionActive) {
      window.clearTimeout(voiceRestartTimer);
      voiceRestartTimer = window.setTimeout(() => startVoiceAssistant(), 520);
    }
  };
  utterance.onerror = () => {
    card?.classList.remove("is-speaking");
    setLiveAssistantStatus(getCopy(), "ready");
  };
  window.speechSynthesis.speak(utterance);
  window.speechSynthesis.resume?.();
};

const getWhatsappScenario = (copy, key = activeWhatsappScenario) => {
  const scenarios = copy.demoLab?.whatsapp?.scenarios || [];
  return scenarios.find((scenario) => scenario.key === key) || scenarios[0];
};

const renderCallTranscript = (copy, activeIndex = activeCallStep) => {
  const list = document.querySelector(".call-transcript");
  const steps = copy.demoLab?.caller?.steps;

  if (!list || !Array.isArray(steps)) {
    return;
  }

  list.textContent = "";
  steps.forEach((step, index) => {
    const item = document.createElement("li");
    item.className = index === activeIndex ? "is-active" : "";

    const speaker = document.createElement("span");
    speaker.textContent = step.speaker;

    const text = document.createElement("p");
    text.textContent = step.text;

    item.append(speaker, text);
    list.append(item);
  });
};

const setCallSummary = (copy, isReady = false) => {
  const summary = document.querySelector(".call-summary");
  if (!summary || !copy.demoLab?.caller) {
    return;
  }

  summary.classList.toggle("is-ready", isReady);
  setText(".call-summary > span", copy.demoLab.caller.summaryLabel);
  setText(".call-summary > strong", copy.demoLab.caller.summaryTitle);
  setText(".call-summary > p", copy.demoLab.caller.summaryText);
  setAllText(".call-summary-chips small", copy.demoLab.caller.summaryChips);
};

const setCallStep = (copy, index = 0, options = {}) => {
  const steps = copy.demoLab?.caller?.steps || [];
  const normalizedIndex = Math.min(Math.max(index, 0), Math.max(steps.length - 1, 0));
  const step = steps[normalizedIndex];

  activeCallStep = normalizedIndex;
  renderCallTranscript(copy, normalizedIndex);

  if (step) {
    setText(".call-status", step.status);
    setText(".call-title", step.speaker);
    setText(".call-live-score", step.score || copy.demoLab.caller.initialScore);
    setText(".call-live-text", step.insight || copy.demoLab.caller.initialInsight);
    setCallSummary(copy, normalizedIndex === steps.length - 1);

    if (options.speak) {
      speakCallStep(step);
    }
  }
};

const stopCallerDemo = () => {
  if (callerDemoTimer) {
    window.clearInterval(callerDemoTimer);
    callerDemoTimer = null;
  }
};

const resetCallerDemo = () => {
  const copy = getCopy();

  stopCallerDemo();
  stopSpeech();
  activeCallStep = 0;
  document.querySelector(".caller-demo")?.classList.remove("is-running", "is-complete", "has-voice-error");
  setText(".call-status", copy.demoLab.caller.idleStatus);
  setText(".call-title", copy.demoLab.caller.idleTitle);
  setText(".call-live-label", copy.demoLab.caller.liveLabel);
  setText(".call-live-score", copy.demoLab.caller.initialScore);
  setText(".call-live-text", copy.demoLab.caller.initialInsight);
  setText(".caller-demo-button", copy.demoLab.caller.button);
  setText(".caller-reset-button", copy.demoLab.caller.reset);
  renderCallTranscript(copy, 0);
  setCallSummary(copy, false);
};

const startCallerDemo = () => {
  const copy = getCopy();
  const steps = copy.demoLab?.caller?.steps || [];

  if (!steps.length) {
    return;
  }

  stopCallerDemo();
  stopSpeech();
  const callerCard = document.querySelector(".caller-demo");
  callerCard?.classList.remove("is-complete", "has-voice-error");
  callerCard?.classList.add("is-running");
  if (!canUseSpeech()) {
    callerCard?.classList.add("has-voice-error");
  }
  setCallStep(copy, 0, { speak: true });
  if (!canUseSpeech()) {
    setText(".call-live-label", copy.demoLab.caller.voiceUnavailable);
  }

  let nextStep = 1;
  callerDemoTimer = window.setInterval(() => {
    if (nextStep >= steps.length) {
      stopCallerDemo();
      callerCard?.classList.remove("is-running");
      callerCard?.classList.add("is-complete");
      setText(".call-status", copy.demoLab.caller.doneStatus);
      setText(".caller-demo-button", copy.demoLab.caller.buttonAgain);
      return;
    }

    setCallStep(copy, nextStep, { speak: true });
    nextStep += 1;
  }, 2700);
};

const renderWhatsappScenario = (copy, key = activeWhatsappScenario) => {
  const scenario = getWhatsappScenario(copy, key);
  const chat = document.querySelector(".whatsapp-chat");

  if (!scenario || !chat) {
    return;
  }

  activeWhatsappScenario = scenario.key;
  chat.textContent = "";

  scenario.messages.forEach((message) => {
    const bubble = document.createElement("div");
    bubble.className = `wa-message ${message.role === "user" ? "user" : "bot"}`;
    bubble.textContent = message.text;
    chat.append(bubble);
  });

  document.querySelectorAll(".whatsapp-scenarios button").forEach((button) => {
    const isActive = button.dataset.waScenario === scenario.key;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const renderDiagnosticResult = (copy, result = null, state = "idle") => {
  const panel = document.querySelector(".ai-diagnostic-result");
  if (!panel || !copy.demoLab?.diagnostic) {
    return;
  }

  const diagnostic = copy.demoLab.diagnostic;
  panel.textContent = "";
  panel.classList.toggle("is-loading", state === "loading");
  panel.classList.toggle("is-ready", Boolean(result));
  panel.classList.toggle("is-error", state === "error");

  const label = document.createElement("span");
  label.textContent = result?.configured === false ? diagnostic.fallbackLabel : diagnostic.resultLabel;
  panel.append(label);

  if (state === "loading") {
    const loading = document.createElement("p");
    loading.textContent = diagnostic.loading;
    panel.append(loading);
    return;
  }

  if (state === "error") {
    const error = document.createElement("p");
    error.textContent = diagnostic.error;
    panel.append(error);
    return;
  }

  if (!result) {
    const empty = document.createElement("p");
    empty.textContent = diagnostic.empty;
    panel.append(empty);
    return;
  }

  const title = document.createElement("strong");
  title.textContent = result.summary || diagnostic.cta;
  panel.append(title);

  const focus = Array.isArray(result.focus) ? result.focus.slice(0, 3) : [];
  if (focus.length) {
    const grid = document.createElement("div");
    grid.className = "ai-diagnostic-focus";
    focus.forEach((item) => {
      const card = document.createElement("div");
      const cardLabel = document.createElement("small");
      cardLabel.textContent = item.label || "";
      const cardValue = document.createElement("p");
      cardValue.textContent = item.value || "";
      card.append(cardLabel, cardValue);
      grid.append(card);
    });
    panel.append(grid);
  }

  const steps = Array.isArray(result.nextSteps) ? result.nextSteps.slice(0, 4) : [];
  if (steps.length) {
    const list = document.createElement("ol");
    list.className = "ai-diagnostic-steps";
    steps.forEach((step) => {
      const item = document.createElement("li");
      item.textContent = step;
      list.append(item);
    });
    panel.append(list);
  }

  const cta = document.createElement("p");
  cta.className = "ai-diagnostic-cta";
  cta.textContent = result.cta || diagnostic.cta;
  panel.append(cta);
};

const setDiagnosticFields = (copy) => {
  const diagnostic = copy.demoLab?.diagnostic;
  const form = document.querySelector(".ai-diagnostic-form");
  const stageSelect = form?.querySelector('select[name="stage"]');
  const bottleneck = form?.querySelector('textarea[name="bottleneck"]');

  if (!diagnostic || !form || !stageSelect || !bottleneck) {
    return;
  }

  setText(".ai-diagnostic-badge", diagnostic.badge);
  setText(".ai-diagnostic-copy h3", diagnostic.title);
  setText(".ai-diagnostic-copy p", diagnostic.text);
  setText('.ai-diagnostic-form label:first-child span', diagnostic.fields.stage);
  setText('.ai-diagnostic-form label:nth-child(2) span', diagnostic.fields.bottleneck);
  setText(".ai-diagnostic-submit", diagnostic.button);

  const previousValue = stageSelect.value;
  stageSelect.textContent = "";
  diagnostic.stages.forEach((stage) => {
    const option = document.createElement("option");
    option.value = stage;
    option.textContent = stage;
    stageSelect.append(option);
  });
  stageSelect.value = diagnostic.stages.includes(previousValue) ? previousValue : diagnostic.stages[0];
  bottleneck.placeholder = diagnostic.placeholder;

  if (!document.querySelector(".ai-diagnostic-result")?.classList.contains("is-ready")) {
    renderDiagnosticResult(copy);
  }
};

const runGrowthDiagnostic = async (event) => {
  event.preventDefault();

  const copy = getCopy();
  const form = event.currentTarget;
  const button = form.querySelector(".ai-diagnostic-submit");
  const formData = new FormData(form);
  const stage = String(formData.get("stage") || "").trim();
  const bottleneck = String(formData.get("bottleneck") || "").trim();

  if (!bottleneck) {
    return;
  }

  button.disabled = true;
  form.classList.add("is-loading");
  renderDiagnosticResult(copy, null, "loading");

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 14000);

  try {
    const response = await fetch("/api/growth-diagnostic", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language: currentLanguage,
        stage,
        bottleneck,
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Diagnostic request failed: ${response.status}`);
    }

    const data = await response.json();
    renderDiagnosticResult(copy, data);
  } catch (error) {
    renderDiagnosticResult(copy, null, "error");
  } finally {
    window.clearTimeout(timeout);
    form.classList.remove("is-loading");
    button.disabled = false;
  }
};

const getLiveAssistantCopy = (copy = getCopy()) => copy.demoLab?.liveAssistant;

const setLiveAssistantStatus = (copy, status = "ready") => {
  const liveCopy = getLiveAssistantCopy(copy);
  const statusText = document.querySelector(".ai-live-status strong");
  const card = document.querySelector(".ai-live-card");

  if (!liveCopy || !statusText) {
    return;
  }

  const statusMap = {
    ready: liveCopy.statusReady,
    thinking: liveCopy.statusThinking,
    listening: liveCopy.statusListening,
    speaking: liveCopy.statusSpeaking,
    unsupported: liveCopy.statusUnsupported,
  };

  statusText.textContent = statusMap[status] || liveCopy.statusReady;
  card?.classList.toggle("is-thinking", status === "thinking");
  card?.classList.toggle("is-listening", status === "listening");
  card?.classList.toggle("is-speaking", status === "speaking");
};

const renderAssistantSuggestions = (suggestions, copy = getCopy()) => {
  const liveCopy = getLiveAssistantCopy(copy);
  const prompts = Array.isArray(suggestions) && suggestions.length ? suggestions : liveCopy?.quickPrompts;

  if (!liveCopy || !Array.isArray(prompts)) {
    return;
  }

  document.querySelectorAll(".ai-quick-prompts button").forEach((button, index) => {
    const prompt = prompts[index] || liveCopy.quickPrompts?.[index] || "";
    button.textContent = prompt;
    button.hidden = !prompt;
  });
};

const appendAssistantMessage = (role, text, copy = getCopy()) => {
  const log = document.querySelector(".ai-chat-log");
  const liveCopy = getLiveAssistantCopy(copy);

  if (!log || !liveCopy || !text) {
    return;
  }

  const item = document.createElement("div");
  item.className = `ai-message ${role === "user" ? "user" : "assistant"}`;
  const label = document.createElement("span");
  label.textContent = role === "user" ? liveCopy.youLabel : liveCopy.assistantLabel;
  const body = document.createElement("p");
  body.textContent = text;
  item.append(label, body);
  log.append(item);
  log.scrollTop = log.scrollHeight;
};

const resetAssistantGreeting = (copy = getCopy()) => {
  const log = document.querySelector(".ai-chat-log");
  const liveCopy = getLiveAssistantCopy(copy);

  if (!log || !liveCopy) {
    return;
  }

  log.textContent = "";
  appendAssistantMessage("assistant", liveCopy.greeting, copy);
};

const setAssistantMode = (mode = "chat") => {
  const nextMode = mode === "voice" ? "voice" : "chat";

  if (nextMode === "chat" && activeAssistantMode === "voice" && isVoiceSessionActive) {
    stopVoiceAssistant();
  }

  activeAssistantMode = nextMode;

  document.querySelectorAll(".ai-live-toolbar button").forEach((button) => {
    const isActive = button.dataset.aiMode === activeAssistantMode;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.querySelector(".ai-live-card")?.classList.toggle("is-voice-mode", activeAssistantMode === "voice");
};

const getSpeechRecognitionConstructor = () => window.webkitSpeechRecognition || window.SpeechRecognition;

const requestAssistantReply = async (message, mode = activeAssistantMode) => {
  const copy = getCopy();
  const liveCopy = getLiveAssistantCopy(copy);
  const card = document.querySelector(".ai-live-card");
  const submit = document.querySelector(".ai-chat-submit");

  if (!liveCopy || !message) {
    return;
  }

  setLiveAssistantStatus(copy, "thinking");
  card?.classList.add("is-thinking");
  if (submit) {
    submit.disabled = true;
  }

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 16000);

  try {
    const response = await fetch("/api/ai-assistant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language: currentLanguage,
        mode,
        message,
        history: assistantHistory.slice(-maxAssistantHistoryItems),
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Assistant request failed: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.reply || liveCopy.fallbackReply;
    assistantHistory.push({ role: "assistant", text: reply });
    assistantHistory = assistantHistory.slice(-maxAssistantHistoryItems);
    appendAssistantMessage("assistant", reply, copy);
    renderAssistantSuggestions(data.suggestions, copy);

    if (mode === "voice" && canUseSpeech()) {
      speakAssistantReply(reply);
    } else {
      setLiveAssistantStatus(copy, "ready");
    }
  } catch (error) {
    appendAssistantMessage("assistant", liveCopy.error, copy);
    setLiveAssistantStatus(copy, "ready");
  } finally {
    window.clearTimeout(timeout);
    card?.classList.remove("is-thinking");
    if (submit) {
      submit.disabled = false;
    }
  }
};

const submitAssistantMessage = (message, mode = activeAssistantMode) => {
  const normalizedMessage = String(message || "").trim();
  if (!normalizedMessage) {
    return;
  }

  const copy = getCopy();
  assistantHistory.push({ role: "user", text: normalizedMessage });
  assistantHistory = assistantHistory.slice(-maxAssistantHistoryItems);
  appendAssistantMessage("user", normalizedMessage, copy);
  requestAssistantReply(normalizedMessage, mode);
};

const handleAssistantSubmit = (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector('input[name="message"]');
  const message = input?.value || "";

  if (input) {
    input.value = "";
  }

  submitAssistantMessage(message, "chat");
};

const startVoiceAssistant = () => {
  const copy = getCopy();
  const liveCopy = getLiveAssistantCopy(copy);
  const Recognition = getSpeechRecognitionConstructor();
  const card = document.querySelector(".ai-live-card");

  window.clearTimeout(voiceRestartTimer);
  voiceRestartTimer = null;
  setAssistantMode("voice");

  if (!Recognition || !canUseSpeech() || !liveCopy) {
    setLiveAssistantStatus(copy, "unsupported");
    appendAssistantMessage("assistant", liveCopy?.statusUnsupported || "", copy);
    return;
  }

  stopSpeech();
  if (voiceRecognition) {
    voiceRecognition.abort();
  }

  voiceRecognition = new Recognition();
  voiceRecognition.lang = speechLanguageMap[currentLanguage] || speechLanguageMap.fr;
  voiceRecognition.continuous = false;
  voiceRecognition.interimResults = false;
  voiceRecognition.maxAlternatives = 1;
  isVoiceSessionActive = true;

  voiceRecognition.onstart = () => {
    card?.classList.add("is-listening");
    setLiveAssistantStatus(copy, "listening");
  };

  voiceRecognition.onresult = (event) => {
    const transcript = event.results?.[0]?.[0]?.transcript || "";
    if (transcript) {
      submitAssistantMessage(transcript, "voice");
    }
  };

  voiceRecognition.onerror = () => {
    isVoiceSessionActive = false;
    card?.classList.remove("is-listening");
    setLiveAssistantStatus(copy, "ready");
  };

  voiceRecognition.onend = () => {
    card?.classList.remove("is-listening");
  };

  try {
    voiceRecognition.start();
  } catch (error) {
    isVoiceSessionActive = false;
    card?.classList.remove("is-listening");
    setLiveAssistantStatus(copy, "unsupported");
  }
};

const stopVoiceAssistant = () => {
  isVoiceSessionActive = false;
  window.clearTimeout(voiceRestartTimer);
  voiceRestartTimer = null;

  if (voiceRecognition) {
    voiceRecognition.abort();
    voiceRecognition = null;
  }

  stopSpeech();
  document.querySelector(".ai-live-card")?.classList.remove("is-listening", "is-speaking", "is-thinking");
  setLiveAssistantStatus(getCopy(), "ready");
};

const renderLiveAssistant = (copy) => {
  const liveCopy = getLiveAssistantCopy(copy);
  if (!liveCopy) {
    return;
  }

  setText(".ai-live-badge", liveCopy.badge);
  setText(".ai-live-copy h3", liveCopy.title);
  setText(".ai-live-copy p", liveCopy.text);
  setAttribute(".ai-live-toolbar", "aria-label", liveCopy.modeLabel);
  setAllText(".ai-live-toolbar button", liveCopy.modes);
  setAttribute(".ai-quick-prompts", "aria-label", liveCopy.quickLabel);
  setAllText(".ai-quick-prompts button", liveCopy.quickPrompts);
  setAttribute('.ai-chat-form input[name="message"]', "placeholder", liveCopy.placeholder);
  setText(".ai-chat-submit", liveCopy.send);
  setText(".ai-voice-panel > strong", liveCopy.voiceTitle);
  setText(".ai-voice-text", liveCopy.voiceText);
  setText(".ai-voice-start", liveCopy.voiceStart);
  setText(".ai-voice-stop", liveCopy.voiceStop);
  setText(".ai-voice-note", liveCopy.voiceNote);
  renderAssistantSuggestions(liveCopy.quickPrompts, copy);
  setLiveAssistantStatus(copy, "ready");
  setAssistantMode(activeAssistantMode);

  if (assistantHistory.length === 0) {
    resetAssistantGreeting(copy);
  }
};

const renderDemoLab = (copy) => {
  if (!copy.demoLab) {
    return;
  }

  setAttribute(".demo-lab", "aria-label", copy.demoLab.aria);
  setText(".demo-lab-head .eyebrow", copy.demoLab.eyebrow);
  setText(".demo-lab-head h2", copy.demoLab.title);
  setText(".demo-lab-head p:not(.eyebrow)", copy.demoLab.text);
  setText(".demo-lab-note", copy.demoLab.note);

  setText(".caller-demo .demo-type", copy.demoLab.caller.badge);
  setText(".caller-demo .demo-pill", copy.demoLab.caller.pill);
  setText(".caller-demo h3", copy.demoLab.caller.title);
  setText(".caller-demo .demo-card-text", copy.demoLab.caller.text);

  const callerCard = document.querySelector(".caller-demo");
  const callerIsRunning = callerCard?.classList.contains("is-running");
  const callerIsComplete = callerCard?.classList.contains("is-complete");
  const currentStep = copy.demoLab.caller.steps?.[activeCallStep];

  if ((callerIsRunning || callerIsComplete) && currentStep) {
    setText(".call-status", callerIsComplete ? copy.demoLab.caller.doneStatus : currentStep.status);
    setText(".call-title", currentStep.speaker);
    setText(".call-live-score", currentStep.score || copy.demoLab.caller.initialScore);
    setText(".call-live-text", currentStep.insight || copy.demoLab.caller.initialInsight);
  } else {
    setText(".call-status", copy.demoLab.caller.idleStatus);
    setText(".call-title", copy.demoLab.caller.idleTitle);
    setText(".call-live-score", copy.demoLab.caller.initialScore);
    setText(".call-live-text", copy.demoLab.caller.initialInsight);
  }

  setText(".call-live-label", copy.demoLab.caller.liveLabel);
  setText(".caller-demo-button", callerIsComplete ? copy.demoLab.caller.buttonAgain : copy.demoLab.caller.button);
  setText(".caller-reset-button", copy.demoLab.caller.reset);
  setText(".caller-demo-cta", copy.demoLab.caller.cta);
  renderCallTranscript(copy, activeCallStep);
  setCallSummary(copy, callerIsComplete);

  setText(".whatsapp-demo .demo-type", copy.demoLab.whatsapp.badge);
  setText(".whatsapp-demo .demo-pill", copy.demoLab.whatsapp.pill);
  setText(".whatsapp-demo h3", copy.demoLab.whatsapp.title);
  setText(".whatsapp-demo .demo-card-text", copy.demoLab.whatsapp.text);
  setText(".whatsapp-top strong", copy.demoLab.whatsapp.contactName);
  setText(".whatsapp-top small", copy.demoLab.whatsapp.online);
  setAttribute(".whatsapp-scenarios", "aria-label", copy.demoLab.whatsapp.scenariosLabel);
  setAllText(
    ".whatsapp-scenarios button",
    copy.demoLab.whatsapp.scenarios.map((scenario) => scenario.label),
  );
  setText(".whatsapp-direct", copy.demoLab.whatsapp.direct);
  setText(".whatsapp-demo-cta", copy.demoLab.whatsapp.cta);
  renderWhatsappScenario(copy, activeWhatsappScenario);
  setDiagnosticFields(copy);
  renderLiveAssistant(copy);
};

const setInlineWithStatusDot = (selector, value) => {
  const element = document.querySelector(selector);
  if (!element) {
    return;
  }

  element.textContent = "";
  const dot = document.createElement("span");
  dot.className = "status-dot";
  element.append(dot, document.createTextNode(value));
};

const setServiceOptions = (copy) => {
  const select = document.querySelector('select[name="service"]');
  if (!select) {
    return;
  }

  const previousIndex = select.selectedIndex;
  select.textContent = "";

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = copy.contact.servicePlaceholder;
  select.append(placeholder);

  copy.contact.serviceOptions.forEach((label, index) => {
    const option = document.createElement("option");
    option.value = serviceKeys[index] || label;
    option.textContent = label;
    select.append(option);
  });

  select.selectedIndex = previousIndex > 0 ? Math.min(previousIndex, select.options.length - 1) : 0;
};

const updateServiceDetail = (key = activeServiceKey, shouldAnimate = true) => {
  const service = getCopy().services[key];

  if (!service || !serviceIndex || !serviceTitle || !serviceText || !serviceList) {
    return;
  }

  activeServiceKey = key;

  if (shouldAnimate) {
    serviceDetail?.animate(
      [
        { opacity: 1, transform: "translateY(8px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 260, easing: "cubic-bezier(.2,.8,.2,1)" },
    );
  }

  serviceIndex.textContent = service.index;
  serviceTitle.textContent = service.title;
  serviceText.textContent = service.text;
  setListItems("#serviceList", service.items);
};

const applyLanguage = (language, shouldPersist = true) => {
  if (!languageCodes.includes(language)) {
    return;
  }

  currentLanguage = language;
  const copy = getCopy();
  const isThanksPage = document.body.dataset.page === "thanks";

  document.documentElement.lang = language;
  document.documentElement.dir = copy.dir;
  document.title = isThanksPage ? copy.meta.thanksTitle : copy.meta.homeTitle;

  if (metaDescription) {
    metaDescription.setAttribute("content", isThanksPage ? copy.meta.thanksDescription : copy.meta.homeDescription);
  }

  applySeo(copy, isThanksPage);

  if (shouldPersist) {
    window.localStorage.setItem("ahmed-site-language", language);
  }

  document.querySelectorAll(".language-option").forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("href", getLanguageHref(button.dataset.lang, isThanksPage));
    if (isActive) {
      button.setAttribute("aria-current", "true");
    } else {
      button.removeAttribute("aria-current");
    }
  });

  document.querySelectorAll(".language-switch").forEach((switcher) => {
    languageCodes
      .map((code) => switcher.querySelector(`.language-option[data-lang="${code}"]`))
      .filter(Boolean)
      .forEach((button) => switcher.append(button));
  });

  if (formLanguage) {
    formLanguage.value = copy.name;
  }

  const nextInput = document.querySelector('input[name="_next"]');
  if (nextInput) {
    nextInput.value = `${siteBaseUrl}/merci${language === "fr" ? "" : `?lang=${language}`}`;
  }

  setText(".brand-copy small", copy.brandSmall);
  setAllAttribute(".brand", "aria-label", copy.aria.home);
  setAllAttribute(".language-switch", "aria-label", copy.aria.languages);

  const menuIsOpen = nav?.classList.contains("is-open");
  menuButton?.setAttribute("aria-label", menuIsOpen ? copy.aria.menuClose : copy.aria.menuOpen);
  nav?.setAttribute("aria-label", copy.aria.nav);
  storyNav?.setAttribute("aria-label", copy.story.aria);
  storyLinks.forEach((link, index) => {
    const label = copy.story.labels[index];
    const labelElement = link.querySelector("strong");
    if (typeof label === "string" && labelElement) {
      labelElement.textContent = label;
    }
  });

  setText(".thanks-panel .eyebrow", copy.thanks.eyebrow);
  setText(".thanks-panel h1", copy.thanks.title);
  setText(".thanks-panel p:not(.eyebrow)", copy.thanks.text);
  setText(".thanks-actions .button.primary", copy.thanks.back);
  setText(".thanks-actions .button.secondary", copy.thanks.whatsapp);

  if (isThanksPage) {
    return;
  }

  setText('.site-header .nav > a[href="#system"]', copy.nav.services);
  setText('.site-header .nav > a[href="#offers"]', copy.nav.offers);
  setText('.site-header .nav > a[href="#ugc"]', copy.nav.ugc);
  setText('.site-header .nav > a[href="#sprint"]', copy.nav.sprint);
  setText('.site-header .nav > a[href="#proof"]', copy.nav.proof);
  setText('.site-header .nav > a[href="#work"]', copy.nav.work);
  setText('.site-header .nav > a[href="#training"]', copy.nav.training);
  setText(".site-header .nav > .bootcamp-link", copy.nav.bootcamp);
  setAllAttribute(".bootcamp-link", "href", getBootcampHref(language));
  setAllAttribute(".bootcamp-modules-link", "href", getBootcampHref(language, "#academy"));
  setText('.site-header .nav > a[href="#contact"]', copy.nav.cta);

  setAllText(".hero-rail span", copy.hero.rail);
  setText(".hero-copy .eyebrow", copy.hero.eyebrow);
  setHeroTitle(copy.hero.title);
  setRichText(".hero-statement", copy.hero.statement);
  setAttribute(".portrait-frame img", "alt", localizedImageAlt[language].portrait);
  setAllText(".signal-bar span", copy.hero.signals);
  setAttribute(".signal-bar", "aria-label", copy.aria.signal);
  setText(".hero-actions .primary", copy.hero.primary);
  setText(".hero-actions .secondary", copy.hero.secondary);
  setAttribute(".hero-actions .secondary", "href", getBootcampHref(language));
  setAttribute(".portrait-system", "aria-label", copy.aria.portrait);
  setInlineWithStatusDot(".availability-card", copy.hero.availability);
  setText(".system-card-a small", copy.hero.cards[0][0]);
  setText(".system-card-a strong", copy.hero.cards[0][1]);
  setText(".system-card-b small", copy.hero.cards[1][0]);
  setText(".system-card-b strong", copy.hero.cards[1][1]);
  setAllText(".hero-proof strong", copy.hero.proof);
  setAllText(".marquee span", copy.marquee);

  setAttribute(".scroll-hook", "aria-label", copy.aria.hook);
  setText(".scroll-hook-copy .eyebrow", copy.hook.eyebrow);
  setText(".scroll-hook-copy h2", copy.hook.title);
  setText(".scroll-hook-copy p:not(.eyebrow)", copy.hook.text);
  setAttribute(".growth-cockpit", "aria-label", copy.aria.cockpit);
  setText(".cockpit-top span", copy.hook.label);
  setText(".cockpit-top strong", copy.hook.summary);
  copy.hook.layers.forEach((layer, index) => {
    const layerNumber = index + 1;
    setText(`.system-node:nth-child(${layerNumber}) span`, layer[0]);
    setText(`.system-node:nth-child(${layerNumber}) strong`, layer[1]);
    setText(`.system-node:nth-child(${layerNumber}) p`, layer[2]);
  });
  setAllText(".cockpit-metrics span", copy.hook.metrics);

  setText(".sales-head .eyebrow", copy.sales.eyebrow);
  setText(".sales-head h2", copy.sales.title);
  setText(".sales-head p:not(.eyebrow)", copy.sales.text);
  setText(".sales-demo-label", copy.sales.demoLabel);
  setText(".sales-demo > strong", copy.sales.demoTitle);
  copy.sales.demoRows.forEach((row, index) => {
    const rowNumber = index + 1;
    setText(`.sales-screen div:nth-child(${rowNumber}) span`, row[0]);
    setText(`.sales-screen div:nth-child(${rowNumber}) b`, row[1]);
  });
  setAttribute(".sales-flow", "aria-label", copy.aria.salesWorkflow);
  copy.sales.flow.forEach((step, index) => {
    const stepNumber = index + 1;
    setText(`.sales-flow article:nth-child(${stepNumber}) span`, step[0]);
    setText(`.sales-flow article:nth-child(${stepNumber}) strong`, step[1]);
    setText(`.sales-flow article:nth-child(${stepNumber}) p`, step[2]);
  });
  copy.sales.offers.forEach((offer, index) => {
    const offerNumber = index + 1;
    setText(`#offerGrid .offer-card:nth-child(${offerNumber}) > span`, offer.index);
    setText(`#offerGrid .offer-card:nth-child(${offerNumber}) h3`, offer.title);
    setText(`#offerGrid .offer-card:nth-child(${offerNumber}) p`, offer.text);
    setListItems(`#offerGrid .offer-card:nth-child(${offerNumber}) ul`, offer.items);
    setText(`#offerGrid .offer-card:nth-child(${offerNumber}) a`, offer.cta);
  });

  setText(".services .section-head .eyebrow", copy.servicesHead.eyebrow);
  setText(".services .section-head h2", copy.servicesHead.title);
  serviceKeys.forEach((key) => {
    setText(`.service-tab[data-service="${key}"]`, copy.serviceTabs[key]);
  });
  updateServiceDetail(activeServiceKey, false);

  setText(".ugc-copy .eyebrow", copy.ugcSection.eyebrow);
  setText(".ugc-copy h2", copy.ugcSection.title);
  setText(".ugc-copy p:not(.eyebrow)", copy.ugcSection.text);
  setText(".ugc-copy .button", copy.ugcSection.cta);
  setAttribute(".ugc-board", "aria-label", copy.aria.ugcWorkflow);
  setText(".ugc-feature-copy > span", copy.ugcSection.featureLabel);
  setText(".ugc-feature-copy > strong", copy.ugcSection.featureTitle);
  setText(".ugc-feature-copy > p", copy.ugcSection.featureText);
  copy.ugcSection.preview.forEach((item, index) => {
    const previewNumber = index + 1;
    setText(`.ugc-reel:nth-child(${previewNumber}) i`, item[0]);
    setText(`.ugc-reel:nth-child(${previewNumber}) b`, item[1]);
    setText(`.ugc-reel:nth-child(${previewNumber}) small`, item[2]);
  });
  copy.ugcSection.steps.forEach((step, index) => {
    const stepNumber = index + 1;
    setText(`.ugc-steps article:nth-child(${stepNumber}) span`, step[0]);
    setText(`.ugc-steps article:nth-child(${stepNumber}) strong`, step[1]);
    setText(`.ugc-steps article:nth-child(${stepNumber}) p`, step[2]);
  });

  setText(".sprint .section-head .eyebrow", copy.sprint.eyebrow);
  setText(".sprint .section-head h2", copy.sprint.title);
  setText(".sprint .section-head p:not(.eyebrow)", copy.sprint.text);
  setText(".sprint-cta", copy.sprint.cta);
  copy.sprint.steps.forEach((step, index) => {
    const stepNumber = index + 1;
    setText(`.sprint-steps article:nth-child(${stepNumber}) span`, step[0]);
    setText(`.sprint-steps article:nth-child(${stepNumber}) strong`, step[1]);
    setText(`.sprint-steps article:nth-child(${stepNumber}) p`, step[2]);
  });

  setText(".proof .section-head .eyebrow", copy.proof.eyebrow);
  setText(".proof .section-head h2", copy.proof.title);
  setAllText(".proof-link", [copy.proof.link, copy.proof.link, copy.proof.link]);
  copy.proof.cards.forEach((card, index) => {
    const cardNumber = index + 1;
    setText(`.proof-card:nth-child(${cardNumber}) span`, card[0]);
    setText(`.proof-card:nth-child(${cardNumber}) h3`, card[1]);
    setText(`.proof-card:nth-child(${cardNumber}) p`, card[2]);
  });

  setText(".selected-work .section-head .eyebrow", copy.work.eyebrow);
  setText(".selected-work .section-head h2", copy.work.title);
  setText(".selected-work .section-head p:not(.eyebrow)", copy.work.text);
  setAttribute(".work-impact", "aria-label", copy.aria.workImpact);
  copy.work.impact.forEach((metric, index) => {
    const metricNumber = index + 1;
    setText(`.work-impact article:nth-child(${metricNumber}) strong`, metric[0]);
    setText(`.work-impact article:nth-child(${metricNumber}) span`, metric[1]);
  });
  setText(".work-data-note", copy.work.impactNote);
  setAllText(".preview-badge", [copy.work.preview, copy.work.preview]);
  setText(".work-card-feature .work-content h3", copy.work.cards[0].title);
  setText(".work-card-feature .work-content > p", copy.work.cards[0].text);
  copy.work.cards[0].metrics.forEach((metric, index) => {
    const metricNumber = index + 1;
    setText(`.work-card-feature .work-kpi:nth-child(${metricNumber}) strong`, metric[0]);
    setText(`.work-card-feature .work-kpi:nth-child(${metricNumber}) span`, metric[1]);
  });
  setAttribute(".work-card-feature .work-kpis", "aria-label", copy.aria.dropyMetrics);
  setText(".work-card-feature .case-link", copy.work.link);
  setAttribute(".work-card-feature .work-visual img", "alt", localizedImageAlt[language].dropy);
  setAllText(".work-card-feature .work-tags span", copy.work.cards[0].tags);
  setAttribute(".work-card-feature .work-tags", "aria-label", copy.aria.dropyScope);
  setText(".work-card-dark .work-content h3", copy.work.cards[1].title);
  setText(".work-card-dark .work-content > p", copy.work.cards[1].text);
  copy.work.cards[1].metrics.forEach((metric, index) => {
    const metricNumber = index + 1;
    setText(`.work-card-dark .work-kpi:nth-child(${metricNumber}) strong`, metric[0]);
    setText(`.work-card-dark .work-kpi:nth-child(${metricNumber}) span`, metric[1]);
  });
  setAttribute(".work-card-dark .work-kpis", "aria-label", copy.aria.paraMetrics);
  setText(".work-card-dark .case-link", copy.work.link);
  setAttribute(".work-card-dark .work-visual img", "alt", localizedImageAlt[language].parahealth);
  setAllText(".work-card-dark .work-tags span", copy.work.cards[1].tags);
  setAttribute(".work-card-dark .work-tags", "aria-label", copy.aria.paraScope);

  setText(".training-card .eyebrow", copy.training.eyebrow);
  setAttribute(".training-card img", "alt", localizedImageAlt[language].profile);
  setText(".training-card h2", copy.training.title);
  setText(".training-card p:not(.eyebrow)", copy.training.text);
  setText(".training-format", copy.training.format);
  setText(".training-cta", copy.training.cta);
  setAllText(".tool-stack span", copy.training.stack);
  setAttribute(".tool-stack", "aria-label", copy.aria.trainingTopics);
  setText(".home-bootcamp .eyebrow", copy.homeBootcamp.eyebrow);
  setText(".home-bootcamp h2", copy.homeBootcamp.title);
  setText(".home-bootcamp-copy > p:not(.eyebrow)", copy.homeBootcamp.text);
  setAttribute(".home-bootcamp-points", "aria-label", copy.homeBootcamp.pointsAria);
  setAllText(".home-bootcamp-points span", copy.homeBootcamp.points);
  setAllText(".bootcamp-preview-row span", copy.homeBootcamp.previewRows.map((row) => row[0]));
  setAllText(".bootcamp-preview-row small", copy.homeBootcamp.previewRows.map((row) => row[1]));
  setText(".home-bootcamp-actions .primary", copy.homeBootcamp.primary);
  setText(".home-bootcamp-actions .secondary", copy.homeBootcamp.secondary);
  renderDemoLab(copy);

  setText(".contact-copy .eyebrow", copy.contact.eyebrow);
  setText(".contact-copy h2", copy.contact.title);
  setText(".contact-copy p:not(.eyebrow)", copy.contact.text);
  setAllText(".form-field > span", copy.contact.labels);
  setServiceOptions(copy);
  setAttribute('textarea[name="message"]', "placeholder", copy.contact.placeholder);
  setText(".form-submit", copy.contact.submit);
  setText(".form-note", copy.contact.note);
  setAttribute(".quick-contact", "aria-label", copy.aria.quickContact);
  setText(".quick-link:not(.whatsapp) strong", copy.contact.linkedin);

  setText(".footer-brand p", copy.footer.text);
  setAllText(".footer-nav a", copy.footer.nav);
  setAttribute(".footer-nav", "aria-label", copy.aria.footerNav);
  setText(".footer-pill.whatsapp", copy.footer.whatsapp);
  setText(".footer-pill:not(.whatsapp)", copy.footer.linkedin);
  setAllText(".footer-bottom span", copy.footer.bottom);
  setText(".floating-cta", copy.footer.floating);
};

document.querySelectorAll(".service-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const key = tab.getAttribute("data-service");
    const service = getCopy().services[key];

    if (!service) {
      return;
    }

    activeServiceKey = key;

    document.querySelectorAll(".service-tab").forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    updateServiceDetail(key);
  });
});

document.querySelectorAll(".language-option").forEach((button) => {
  button.addEventListener("click", (event) => {
    const language = button.dataset.lang;

    if (!languageCodes.includes(language)) {
      return;
    }

    window.localStorage.setItem("ahmed-site-language", language);

    if (button.tagName.toLowerCase() === "a") {
      event.preventDefault();
      const destination = new URL(button.getAttribute("href"), window.location.origin);
      if (document.body.dataset.page !== "thanks") {
        destination.hash = window.location.hash;
      }
      window.location.assign(destination.href);
      return;
    }

    applyLanguage(language);
  });
});

applyLanguage(currentLanguage, false);

document.querySelector(".caller-demo-button")?.addEventListener("click", startCallerDemo);
document.querySelector(".caller-reset-button")?.addEventListener("click", resetCallerDemo);

document.querySelectorAll(".whatsapp-scenarios button").forEach((button) => {
  button.addEventListener("click", () => {
    const scenario = button.dataset.waScenario;
    if (scenario) {
      renderWhatsappScenario(getCopy(), scenario);
    }
  });
});

document.querySelector(".ai-diagnostic-form")?.addEventListener("submit", runGrowthDiagnostic);
document.querySelector(".ai-chat-form")?.addEventListener("submit", handleAssistantSubmit);

document.addEventListener("click", (event) => {
  const voiceStart = event.target.closest(".ai-voice-start");
  if (voiceStart) {
    startVoiceAssistant();
    return;
  }

  const voiceStop = event.target.closest(".ai-voice-stop");
  if (voiceStop) {
    stopVoiceAssistant();
    return;
  }

  const modeButton = event.target.closest(".ai-live-toolbar button");
  if (modeButton) {
    setAssistantMode(modeButton.dataset.aiMode);
    return;
  }

  const promptButton = event.target.closest(".ai-quick-prompts button");
  if (promptButton) {
    const input = document.querySelector('.ai-chat-form input[name="message"]');
    if (input) {
      input.value = promptButton.textContent.trim();
      input.focus();
    }
  }
});

const scrollFocusTargets = [
  ...document.querySelectorAll(
    ".sales-flow article, .offer-card, .system-node, .sprint-steps article, .work-impact article, .work-card, .proof-card, .training-card, .home-bootcamp-preview, .demo-card",
  ),
];

const updateScrollFocus = () => {
  const viewportFocusLine = window.innerHeight * 0.54;
  let activeTarget = null;
  let activeDistance = Number.POSITIVE_INFINITY;

  scrollFocusTargets.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isCandidate = rect.top < window.innerHeight * 0.84 && rect.bottom > window.innerHeight * 0.16;

    if (!isCandidate) {
      element.classList.remove("is-focus");
      return;
    }

    const distance = Math.abs(rect.top + rect.height * 0.5 - viewportFocusLine);
    if (distance < activeDistance) {
      activeDistance = distance;
      activeTarget = element;
    }
  });

  scrollFocusTargets.forEach((element) => {
    element.classList.toggle("is-focus", element === activeTarget);
  });
};

const onScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = height > 0 ? (scrollTop / height) * 100 : 0;

  if (progress) {
    progress.style.width = `${Math.min(100, Math.max(0, ratio))}%`;
  }

  header?.classList.toggle("is-scrolled", scrollTop > 18);
  document.body.classList.toggle("is-at-top", scrollTop < 80);
  document.body.classList.toggle("is-deep-scroll", ratio > 8);
  document.body.style.setProperty("--page-progress", `${Math.min(1, Math.max(0, ratio / 100)).toFixed(3)}`);
  document.body.style.setProperty("--hero-parallax", `${Math.min(92, scrollTop * 0.11)}px`);
  if (!prefersReducedMotion) {
    updateScrollFocus();
  }
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

if (!prefersReducedMotion && cursorAura && window.matchMedia("(pointer: fine)").matches) {
  document.body.classList.add("has-pointer");

  window.addEventListener(
    "pointermove",
    (event) => {
      document.body.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.body.style.setProperty("--cursor-y", `${event.clientY}px`);
    },
    { passive: true },
  );
}

if (enableCardTilt && !prefersReducedMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  document.querySelectorAll("[data-tilt]").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      card.style.setProperty("--rotate-y", `${((x - 0.5) * 7).toFixed(2)}deg`);
      card.style.setProperty("--rotate-x", `${((0.5 - y) * 5).toFixed(2)}deg`);
      card.style.setProperty("--glow-x", `${(x * 100).toFixed(1)}%`);
      card.style.setProperty("--glow-y", `${(y * 100).toFixed(1)}%`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--rotate-y", "0deg");
      card.style.setProperty("--rotate-x", "0deg");
      card.style.setProperty("--glow-x", "50%");
      card.style.setProperty("--glow-y", "50%");
    });
  });
}

const startNeuralCanvas = () => {
  if (!enableDecorativeCanvas || !neuralCanvas || !hero || prefersReducedMotion) {
    return;
  }

  const context = neuralCanvas.getContext("2d");
  if (!context) {
    return;
  }

  let width = 0;
  let height = 0;
  let dpr = 1;
  let frame = 0;
  let points = [];

  const colors = [
    [255, 90, 20],
    [22, 217, 255],
    [216, 255, 62],
  ];

  const makePoints = () => {
    const count = width < 700 ? 24 : 54;
    points = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.18,
      phase: Math.random() * Math.PI * 2,
      color: colors[index % colors.length],
    }));
  };

  const resize = () => {
    const rect = hero.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    neuralCanvas.width = Math.floor(width * dpr);
    neuralCanvas.height = Math.floor(height * dpr);
    neuralCanvas.style.width = `${width}px`;
    neuralCanvas.style.height = `${height}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    makePoints();
  };

  const draw = (time) => {
    context.clearRect(0, 0, width, height);
    const pulse = Math.sin(time * 0.001) * 0.5 + 0.5;

    points.forEach((point) => {
      point.x += point.vx;
      point.y += point.vy;

      if (point.x < -40) point.x = width + 40;
      if (point.x > width + 40) point.x = -40;
      if (point.y < -40) point.y = height + 40;
      if (point.y > height + 40) point.y = -40;
    });

    for (let i = 0; i < points.length; i += 1) {
      const a = points[i];
      const ax = a.x + Math.sin(time * 0.0008 + a.phase) * 18;
      const ay = a.y + Math.cos(time * 0.0007 + a.phase) * 14;

      for (let j = i + 1; j < points.length; j += 1) {
        const b = points[j];
        const bx = b.x + Math.sin(time * 0.0008 + b.phase) * 18;
        const by = b.y + Math.cos(time * 0.0007 + b.phase) * 14;
        const distance = Math.hypot(ax - bx, ay - by);

        if (distance < 165) {
          const alpha = (1 - distance / 165) * (0.12 + pulse * 0.08);
          context.strokeStyle = `rgba(${a.color[0]}, ${a.color[1]}, ${a.color[2]}, ${alpha})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(ax, ay);
          context.lineTo(bx, by);
          context.stroke();
        }
      }

      context.fillStyle = `rgba(${a.color[0]}, ${a.color[1]}, ${a.color[2]}, 0.55)`;
      context.beginPath();
      context.arc(ax, ay, 1.8, 0, Math.PI * 2);
      context.fill();
    }

    frame = window.requestAnimationFrame(draw);
  };

  if ("ResizeObserver" in window) {
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(hero);
  } else {
    window.addEventListener("resize", resize, { passive: true });
  }

  resize();
  frame = window.requestAnimationFrame(draw);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      window.cancelAnimationFrame(frame);
      return;
    }

    frame = window.requestAnimationFrame(draw);
  });
};

startNeuralCanvas();

const alignHashTarget = () => {
  if (!window.location.hash) {
    return;
  }

  const targetId = decodeURIComponent(window.location.hash.slice(1));
  const target = document.getElementById(targetId);

  if (!target) {
    return;
  }

  const headerOffset = (header?.offsetHeight || 78) + 20;
  const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top: Math.max(0, targetTop), behavior: "auto" });
};

const scheduleHashAlignment = () => {
  [80, 420, 980, 1800, 3000].forEach((delay) => {
    window.setTimeout(alignHashTarget, delay);
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", scheduleHashAlignment, { once: true });
} else {
  scheduleHashAlignment();
}

window.addEventListener("load", scheduleHashAlignment, { once: true });

window.addEventListener("hashchange", () => {
  scheduleHashAlignment();
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 },
);

if (!prefersReducedMotion) {
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}

const activateStoryLink = (key) => {
  storyLinks.forEach((link) => {
    const isActive = link.dataset.storyLink === key;
    link.classList.toggle("is-active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

const storyObserver = new IntersectionObserver(
  (entries) => {
    const visibleEntries = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    if (!visibleEntries.length) {
      return;
    }

    const key = visibleEntries[0].target.getAttribute("data-story-section");
    if (key) {
      activateStoryLink(key);
    }
  },
  {
    threshold: [0.18, 0.36, 0.58],
    rootMargin: "-24% 0px -42% 0px",
  },
);

document.querySelectorAll("[data-story-section]").forEach((section) => storyObserver.observe(section));
activateStoryLink("top");

