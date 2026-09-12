const menuButton = document.querySelector("#menuButton");
const nav = document.querySelector("#nav");
const header = document.querySelector("#siteHeader");
const progress = document.querySelector("#scrollProgress");
const hero = document.querySelector(".hero");
const neuralCanvas = document.querySelector("#neuralCanvas");
const cursorAura = document.querySelector("#cursorAura");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
const siteBaseUrl = "https://site-personnel-premium.ahmedzakraoui8.chatgpt.site";
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
      homeTitle: "Ahmed Zakraoui | AI Marketing Systems That Sell",
      homeDescription:
        "Ahmed Zakraoui builds AI marketing systems for SMEs, startups, and companies across Tunisia, North Africa, and MENA: SEO/GEO, paid media, UGC, automation, and WordPress.",
      thanksTitle: "Message sent | Ahmed Zakraoui",
      thanksDescription:
        "Thank you for contacting Ahmed Zakraoui about AI marketing strategy, automation, content systems, UGC video production, team training, or WordPress.",
    },
    brandSmall: "AI Marketing Systems",
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
      ugcWorkflow: "UGC video production workflow",
      trainingTopics: "Training topics",
      quickContact: "Quick contact options",
      footerNav: "Footer navigation",
      dropyScope: "Dropy work scope",
      paraScope: "ParaHealth work scope",
      workImpact: "ParaHealth performance metrics",
      dropyMetrics: "Dropy execution metrics",
      paraMetrics: "ParaHealth performance metrics",
    },
    nav: {
      services: "Services",
      ugc: "UGC",
      sprint: "Sprint",
      proof: "Proof",
      work: "Work",
      training: "Training",
      cta: "Start a project",
    },
    hero: {
      rail: ["Tunis", "North Africa", "MENA"],
      eyebrow: "Ahmed Zakraoui - Digital marketing + AI",
      title: ["AI marketing systems", "that sell."],
      statement: {
        before: "I help SMEs, startups, and companies structure growth with ",
        strong: "an automated, measurable, conversion-focused marketing ecosystem",
        after: " that connects SEO/GEO, ads, UGC, WordPress, and AI.",
      },
      signals: ["SEO/GEO", "Paid Social", "UGC Video", "WordPress"],
      primary: "Build my AI marketing system",
      secondary: "See how I work",
      availability: "Available for MENA growth projects",
      cards: [
        ["AI Roadmap", "Clear priorities"],
        ["Marketing Ops", "Ready workflows"],
      ],
      proof: ["AI Strategy", "Automation Setup", "Content Systems", "WordPress Builds", "UGC Video", "SEO/GEO + Ads"],
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
      eyebrow: "Scroll the system",
      title: "Less noise. More sales.",
      text: "Signal, content, ads, and automation move inside one measurable growth loop.",
      label: "Live growth cockpit",
      summary: "4 connected layers",
      layers: [
        ["01", "Strategy", "Offers, audience, and priorities locked."],
        ["02", "Content", "UGC, social, SEO, and landing pages aligned."],
        ["03", "Automation", "Prompts, tools, and workflows saving time."],
        ["04", "Growth", "Paid social, search, and analytics improving weekly."],
      ],
      metrics: ["Signal", "Content", "Acquisition", "Learning"],
    },
    servicesHead: {
      eyebrow: "What I do",
      title: "From AI idea to daily marketing execution.",
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
        title: "AI Marketing Strategy",
        text: "Turn AI from random tools into a focused growth roadmap.",
        items: ["Opportunity audit", "Use-case map", "Prioritized roadmap"],
      },
      automation: {
        index: "02",
        title: "Marketing Automation & AI Tools Setup",
        text: "Set up tools, prompts, and repeatable workflows that teams actually use.",
        items: ["Tool setup", "Prompt library", "Content automations"],
      },
      content: {
        index: "03",
        title: "Social Media & Content Strategy",
        text: "Create a content machine for ideas, planning, production, and repurposing.",
        items: ["Content pillars", "AI production flow", "Review system"],
      },
      growth: {
        index: "04",
        title: "SEO/GEO & Media Buying",
        text: "Connect search, AI discovery, paid campaigns, and landing pages.",
        items: ["Search visibility", "Meta campaigns", "Landing page optimization"],
      },
      training: {
        index: "05",
        title: "Team Training",
        text: "Give your team practical AI workflows they can use immediately.",
        items: ["Prompting foundations", "Content workflows", "Analytics routines"],
      },
      wordpress: {
        index: "06",
        title: "WordPress Development",
        text: "Build clean websites and landing pages designed to convert.",
        items: ["Business websites", "Lead capture", "SEO-ready structure"],
      },
      ugc: {
        index: "07",
        title: "UGC Video Production",
        text: "Produce short-form videos with UGC partners for launches, ads, and trust.",
        items: ["Creator brief", "Partner coordination", "Ready-to-post videos"],
      },
    },
    ugcSection: {
      eyebrow: "UGC video partners",
      title: "Authentic UGC videos that convert faster.",
      text: "A simple process: sharp brief, partner creators, and short-form assets ready for organic and paid testing.",
      cta: "Start a UGC video project",
      featureLabel: "UGC format preview",
      featureTitle: "Hooks, proof, CTA.",
      featureText: "Three short-form angles prepared for Reels, TikTok, Shorts, and Meta Ads.",
      preview: [
        ["01", "Hook", "0-3 sec"],
        ["02", "Proof", "Product trust"],
        ["03", "CTA", "Ad test"],
      ],
      steps: [
        ["01", "Brief", "Define hooks, claims, scripts, and offer angles."],
        ["02", "Create", "Coordinate partner creators to produce credible short-form videos."],
        ["03", "Deploy", "Deliver assets for organic and paid ad testing."],
      ],
    },
    sprint: {
      eyebrow: "Signature system",
      title: "AI Growth Sprint",
      text: "Turn manual marketing chaos into a repeatable system your team can run.",
      cta: "Book my AI Growth Sprint",
      steps: [
        ["Day 01", "Diagnose", "Map goals, offers, tools, and blockers."],
        ["Day 02", "Architect", "Design the roadmap, automations, and content model."],
        ["Day 03", "Build", "Set up prompts, pages, dashboards, ads, and assets."],
        ["Day 04", "Train", "Teach the team to run the system with confidence."],
        ["Day 05", "Launch", "Ship the first workflows and improvement rhythm."],
      ],
    },
    proof: {
      eyebrow: "Proof of work",
      title: "Field-tested expertise across execution and training.",
      link: "Discuss it",
      cards: [
        ["Instructor", "GoMyCode", "Practical digital marketing instruction built around execution."],
        ["Founder", "Alpha Tech", "Marketing systems, technology, and business growth."],
        ["Creator", "DAY30 Bootcamp", "Structured learning for people who want to execute."],
      ],
    },
    work: {
      eyebrow: "Selected work",
      title: "Real e-commerce projects, built and grown from the inside.",
      text: "Website creation, SEO/GEO, media buying, and social media working as one acquisition system.",
      impact: [
        ["99k+", "visitors / 90 days"],
        ["530k TND", "revenue / 12 months"],
        ["+207%", "Google impressions"],
        ["78", "SEO guides published"],
      ],
      impactNote: "Parahealth data - 90 days and 12 months.",
      preview: "Project preview",
      link: "View project",
      cards: [
        {
          title: "E-commerce platform launch and growth system.",
          text: "Created the website and structured the growth engine across sellers, UGC, SEO/GEO, paid media, and social channels.",
          metrics: [
            ["4", "growth levers"],
            ["Site", "built + managed"],
            ["UGC", "creator flow"],
            ["Ads", "acquisition system"],
          ],
          tags: ["Website creation", "SEO/GEO", "Media buying", "Social media"],
        },
        {
          title: "Parapharmacy e-commerce visibility and acquisition.",
          text: "Managed website growth across SEO/GEO, paid media, social content, and search visibility.",
          metrics: [
            ["99k+", "visitors / 90 days"],
            ["530k TND", "revenue / 12 months"],
            ["5 246", "orders delivered"],
            ["+207%", "Google impressions"],
          ],
          tags: ["E-commerce website", "SEO/GEO", "Paid ads", "Social content"],
        },
      ],
    },
    training: {
      eyebrow: "Team training",
      title: "Make AI useful for the people doing the work.",
      text: "Practical sessions on prompts, content workflows, automation, SEO/GEO, WordPress, and analytics.",
      format: "On-site or Remote - Custom workshops - 2 to 10 people",
      cta: "Train my team",
      stack: [
        "Prompt libraries",
        "Content workflows",
        "Automation builders",
        "SEO/GEO routines",
        "UGC video briefs",
        "Team playbooks",
      ],
    },
    contact: {
      eyebrow: "Work with Ahmed",
      title: "Ready to turn your marketing into a smarter system?",
      text: "Tell me what you want to improve: AI strategy, automation, content, UGC, SEO/GEO, ads, or WordPress.",
      labels: ["Name", "Email", "Company", "Service", "Message"],
      servicePlaceholder: "Choose one",
      serviceOptions: [
        "AI Marketing Strategy",
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
      text: "AI marketing systems, e-commerce websites, SEO/GEO, paid social, UGC video, and WordPress for MENA.",
      nav: ["Services", "UGC Video", "Selected Work", "AI Growth Sprint", "Team Training", "Contact"],
      whatsapp: "Book a call",
      linkedin: "LinkedIn profile",
      bottom: ["Tunis, Tunisia", "AI Strategy - SEO/GEO - Media Buying - UGC Video - WordPress"],
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
      homeTitle: "Ahmed Zakraoui | Systèmes Marketing IA qui vendent",
      homeDescription:
        "Ahmed Zakraoui construit des systèmes marketing IA pour PME, startups et entreprises en Tunisie, Afrique du Nord et MENA : SEO/GEO, paid media, UGC, automatisation et WordPress.",
      thanksTitle: "Message envoyé | Ahmed Zakraoui",
      thanksDescription:
        "Merci d'avoir contacté Ahmed Zakraoui pour une stratégie marketing IA, l'automatisation, les systèmes de contenu, la vidéo UGC, la formation d'équipe ou WordPress.",
    },
    brandSmall: "Systèmes Marketing IA",
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
      ugcWorkflow: "Processus de production vidéo UGC",
      trainingTopics: "Sujets de formation",
      quickContact: "Options de contact rapide",
      footerNav: "Navigation du pied de page",
      dropyScope: "Périmètre du projet Dropy",
      paraScope: "Périmètre du projet ParaHealth",
      workImpact: "Chiffres de performance Parahealth",
      dropyMetrics: "Indicateurs d'exécution Dropy",
      paraMetrics: "Chiffres de performance ParaHealth",
    },
    nav: {
      services: "Services",
      ugc: "UGC",
      sprint: "Sprint",
      proof: "Preuves",
      work: "Projets",
      training: "Formation",
      cta: "Lancer un projet",
    },
    hero: {
      rail: ["Tunis", "Afrique du Nord", "MENA"],
      eyebrow: "Ahmed Zakraoui - Marketing digital + IA",
      title: ["Systèmes marketing IA", "qui vendent."],
      statement: {
        before: "J'aide les PME, startups et entreprises à structurer leur croissance avec ",
        strong: "un écosystème marketing automatisé, mesurable et orienté conversion",
        after: " qui relie SEO/GEO, ads, UGC, WordPress et IA.",
      },
      signals: ["SEO/GEO", "Paid Social", "Vidéo UGC", "WordPress"],
      primary: "Construire mon système IA",
      secondary: "Voir ma méthode",
      availability: "Disponible pour des projets de croissance MENA",
      cards: [
        ["Roadmap IA", "Priorités claires"],
        ["Marketing Ops", "Workflows prêts"],
      ],
      proof: ["Stratégie IA", "Automatisation", "Systèmes de contenu", "Sites WordPress", "Vidéo UGC", "SEO/GEO + Ads"],
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
      eyebrow: "Le système visible",
      title: "Moins de bruit. Plus de ventes.",
      text: "Signal, contenu, ads et automatisation avancent dans une boucle de croissance mesurable.",
      label: "Cockpit de croissance",
      summary: "4 couches connectées",
      layers: [
        ["01", "Stratégie", "Offre, audience et priorités clarifiées."],
        ["02", "Contenu", "UGC, social, SEO et landing pages alignés."],
        ["03", "Automatisation", "Prompts, outils et workflows qui gagnent du temps."],
        ["04", "Croissance", "Paid social, search et analytics améliorés chaque semaine."],
      ],
      metrics: ["Signal", "Contenu", "Acquisition", "Apprentissage"],
    },
    servicesHead: {
      eyebrow: "Ce que je fais",
      title: "De l'idée IA à l'exécution marketing quotidienne.",
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
        title: "Stratégie Marketing IA",
        text: "Transformer l'IA en roadmap de croissance claire.",
        items: ["Audit opportunités", "Carte des cas d'usage", "Roadmap priorisée"],
      },
      automation: {
        index: "02",
        title: "Automatisation Marketing & Setup d'Outils IA",
        text: "Installer outils, prompts et workflows que l'équipe utilise vraiment.",
        items: ["Setup outils", "Bibliothèque prompts", "Automatisations contenu"],
      },
      content: {
        index: "03",
        title: "Stratégie Social Media & Contenu",
        text: "Créer une machine de contenu pour idées, planning, production et recyclage.",
        items: ["Piliers de contenu", "Production assistée IA", "Système de validation"],
      },
      growth: {
        index: "04",
        title: "SEO/GEO & Media Buying",
        text: "Connecter search, visibilité IA, campagnes paid et landing pages.",
        items: ["Visibilité search", "Campagnes Meta", "Optimisation landing pages"],
      },
      training: {
        index: "05",
        title: "Formation d'Équipe",
        text: "Donner à l'équipe des workflows IA utilisables immédiatement.",
        items: ["Fondations prompting", "Workflows contenu", "Routines analytics"],
      },
      wordpress: {
        index: "06",
        title: "Développement WordPress",
        text: "Créer des sites et landing pages propres, pensés pour convertir.",
        items: ["Sites business", "Capture de leads", "Structure SEO-ready"],
      },
      ugc: {
        index: "07",
        title: "Production Vidéo UGC",
        text: "Produire des vidéos courtes avec des créateurs UGC pour lancer, vendre et rassurer.",
        items: ["Brief créateur", "Coordination UGC", "Vidéos prêtes à publier"],
      },
    },
    ugcSection: {
      eyebrow: "Partenaires vidéo UGC",
      title: "Des vidéos UGC authentiques pour convertir plus vite.",
      text: "Un process simple : brief clair, créateurs partenaires et assets courts prêts à tester en organique comme en paid.",
      cta: "Lancer un projet vidéo UGC",
      featureLabel: "Aperçu formats UGC",
      featureTitle: "Hooks, preuve produit, CTA.",
      featureText: "Trois angles courts préparés pour Reels, TikTok, Shorts et Meta Ads.",
      preview: [
        ["01", "Hook", "0-3 sec"],
        ["02", "Preuve", "Produit"],
        ["03", "CTA", "Test ads"],
      ],
      steps: [
        ["01", "Brief", "Définir hooks, promesses, scripts et angles d'offre."],
        ["02", "Créer", "Coordonner les créateurs partenaires pour produire des vidéos crédibles."],
        ["03", "Déployer", "Livrer des assets pour l'organique et les tests paid ads."],
      ],
    },
    sprint: {
      eyebrow: "Système signature",
      title: "L'AI Growth Sprint",
      text: "Transformer le chaos marketing manuel en système répétable que l'équipe peut piloter.",
      cta: "Réserver mon AI Growth Sprint",
      steps: [
        ["Jour 01", "Diagnostiquer", "Cartographier objectifs, offres, outils et blocages."],
        ["Jour 02", "Architecturer", "Concevoir roadmap, automatisations et modèle contenu."],
        ["Jour 03", "Construire", "Mettre en place prompts, pages, dashboards, ads et assets."],
        ["Jour 04", "Former", "Apprendre à l'équipe à piloter le système."],
        ["Jour 05", "Lancer", "Déployer les premiers workflows et le rythme d'amélioration."],
      ],
    },
    proof: {
      eyebrow: "Preuves de travail",
      title: "Une expertise éprouvée sur le terrain et en formation.",
      link: "En parler",
      cards: [
        ["Instructeur", "GoMyCode", "Formation marketing digital centrée sur l'exécution."],
        ["Fondateur", "Alpha Tech", "Systèmes marketing, technologie et croissance business."],
        ["Créateur", "DAY30 Bootcamp", "Apprentissage structuré pour passer à l'exécution."],
      ],
    },
    work: {
      eyebrow: "Projets sélectionnés",
      title: "Des projets e-commerce réels, créés et développés de l'intérieur.",
      text: "Création de site, SEO/GEO, media buying et social media dans un même système d'acquisition.",
      impact: [
        ["99k+", "visiteurs / 90 jours"],
        ["530k TND", "CA / 12 mois"],
        ["+207%", "impressions Google"],
        ["78", "guides SEO publiés"],
      ],
      impactNote: "Données Parahealth - 90 jours et 12 mois.",
      preview: "Aperçu projet",
      link: "Voir le projet",
      cards: [
        {
          title: "Lancement d'une plateforme e-commerce et système de croissance.",
          text: "Création du site et structuration du moteur de croissance : vendeurs, UGC, SEO/GEO, media buying et social media.",
          metrics: [
            ["4", "leviers activés"],
            ["Site", "créé + piloté"],
            ["UGC", "flux créateurs"],
            ["Ads", "système acquisition"],
          ],
          tags: ["Création site web", "SEO/GEO", "Media buying", "Social media"],
        },
        {
          title: "Visibilité et acquisition e-commerce pour parapharmacie.",
          text: "Croissance pilotée via SEO/GEO, paid media, contenu social et visibilité search.",
          metrics: [
            ["99k+", "visiteurs / 90 jours"],
            ["530k TND", "CA / 12 mois"],
            ["5 246", "commandes livrées"],
            ["+207%", "impressions Google"],
          ],
          tags: ["Site e-commerce", "SEO/GEO", "Paid ads", "Contenu social"],
        },
      ],
    },
    training: {
      eyebrow: "Formation d'équipe",
      title: "Rendre l'IA utile pour les personnes qui exécutent.",
      text: "Sessions pratiques sur prompts, contenu IA, automation, SEO/GEO, WordPress et analytics.",
      format: "On-site ou Remote - Ateliers sur-mesure - 2 à 10 personnes",
      cta: "Former mon équipe",
      stack: [
        "Bibliothèques de prompts",
        "Workflows contenu",
        "Builders d'automatisation",
        "Routines SEO/GEO",
        "Briefs vidéo UGC",
        "Playbooks équipe",
      ],
    },
    contact: {
      eyebrow: "Travailler avec Ahmed",
      title: "Prêt à transformer votre marketing en système plus intelligent ?",
      text: "Dites-moi quoi améliorer : stratégie IA, automation, contenu, UGC, SEO/GEO, ads ou WordPress.",
      labels: ["Nom", "Email", "Entreprise", "Service", "Message"],
      servicePlaceholder: "Choisir un service",
      serviceOptions: [
        "Stratégie Marketing IA",
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
      text: "Systèmes marketing IA, sites e-commerce, SEO/GEO, paid social, vidéo UGC et WordPress pour la région MENA.",
      nav: ["Services", "Vidéo UGC", "Projets", "AI Growth Sprint", "Formation", "Contact"],
      whatsapp: "Prendre RDV",
      linkedin: "Profil LinkedIn",
      bottom: ["Tunis, Tunisie", "Stratégie IA - SEO/GEO - Media Buying - Vidéo UGC - WordPress"],
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
      homeTitle: "أحمد زكراوي | أنظمة تسويق ذكية تحول الاهتمام إلى نمو",
      homeDescription:
        "أحمد زكراوي يبني أنظمة تسويق ذكية للشركات في تونس، شمال أفريقيا ومنطقة MENA تشمل SEO/GEO، الإعلانات الممولة، UGC، الأتمتة وWordPress.",
      thanksTitle: "تم إرسال الرسالة | أحمد زكراوي",
      thanksDescription:
        "شكرا لتواصلك مع أحمد زكراوي حول التسويق الرقمي، الذكاء الاصطناعي، SEO/GEO، الإعلانات الممولة، فيديو UGC، تدريب الفرق أو تطوير WordPress.",
    },
    brandSmall: "تسويق رقمي + ذكاء اصطناعي",
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
      ugcWorkflow: "سير عمل إنتاج فيديو UGC",
      trainingTopics: "مواضيع التدريب",
      quickContact: "خيارات التواصل السريع",
      footerNav: "تنقل التذييل",
      dropyScope: "نطاق عمل Dropy",
      paraScope: "نطاق عمل ParaHealth",
      workImpact: "أرقام أداء Parahealth",
      dropyMetrics: "مؤشرات تنفيذ Dropy",
      paraMetrics: "أرقام أداء ParaHealth",
    },
    nav: {
      services: "الخدمات",
      ugc: "فيديو UGC",
      sprint: "Sprint النمو",
      proof: "الأعمال",
      work: "المشاريع",
      training: "التدريب",
      cta: "ابدأ مشروعا",
    },
    hero: {
      rail: ["تونس", "شمال أفريقيا", "MENA"],
      eyebrow: "أحمد زكراوي - تسويق رقمي + ذكاء اصطناعي",
      title: ["أنظمة تسويق ذكية", "تحول الاهتمام إلى نمو."],
      statement: {
        before: "أساعد الشركات على بناء نمو أوضح عبر ",
        strong: "نظام تسويق مؤتمت، قابل للقياس وموجه للتحويل",
        after: " يربط SEO/GEO، الإعلانات، UGC، WordPress والذكاء الاصطناعي.",
      },
      signals: ["SEO/GEO", "إعلانات ممولة", "فيديو UGC", "WordPress"],
      primary: "ابن نظامك التسويقي الذكي",
      secondary: "شاهد طريقة عملي",
      availability: "متاح لمشاريع النمو في منطقة MENA",
      cards: [
        ["خارطة الذكاء الاصطناعي", "أولويات واضحة"],
        ["عمليات التسويق", "تدفقات جاهزة"],
      ],
      proof: ["استراتيجية الذكاء الاصطناعي", "إعداد الأتمتة", "أنظمة المحتوى", "مواقع WordPress", "فيديو UGC", "SEO/GEO + إعلانات"],
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
      eyebrow: "النظام بشكل واضح",
      title: "ضجيج أقل. مبيعات أكثر.",
      text: "الإشارة، المحتوى، الإعلانات والأتمتة تتحرك داخل حلقة نمو قابلة للقياس.",
      label: "لوحة نمو مباشرة",
      summary: "4 طبقات مترابطة",
      layers: [
        ["01", "الاستراتيجية", "العرض، الجمهور والأولويات بوضوح."],
        ["02", "المحتوى", "UGC، السوشيال، SEO وصفحات الهبوط في اتجاه واحد."],
        ["03", "الأتمتة", "Prompts، أدوات وتدفقات عمل توفر الوقت."],
        ["04", "النمو", "إعلانات، بحث وتحليلات تتحسن كل أسبوع."],
      ],
      metrics: ["إشارة", "محتوى", "اكتساب", "تعلم"],
    },
    servicesHead: {
      eyebrow: "ماذا أقدم",
      title: "من فكرة الذكاء الاصطناعي إلى تنفيذ تسويقي يومي.",
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
        title: "استراتيجية التسويق بالذكاء الاصطناعي",
        text: "تحويل الذكاء الاصطناعي من أدوات متفرقة إلى خارطة نمو واضحة.",
        items: ["تدقيق الفرص", "خريطة حالات الاستخدام", "خارطة تنفيذ مرتبة"],
      },
      automation: {
        index: "02",
        title: "أتمتة التسويق وإعداد أدوات الذكاء الاصطناعي",
        text: "إعداد أدوات، Prompts وتدفقات عمل يستخدمها الفريق فعلا.",
        items: ["إعداد الأدوات", "مكتبة Prompts", "أتمتة المحتوى"],
      },
      content: {
        index: "03",
        title: "استراتيجية السوشيال ميديا والمحتوى",
        text: "بناء آلة محتوى للأفكار، التخطيط، الإنتاج وإعادة الاستخدام.",
        items: ["محاور المحتوى", "إنتاج بمساعدة الذكاء الاصطناعي", "نظام مراجعة"],
      },
      growth: {
        index: "04",
        title: "SEO/GEO والإعلانات الممولة",
        text: "ربط البحث، الظهور في إجابات الذكاء الاصطناعي، الإعلانات وصفحات الهبوط.",
        items: ["ظهور في البحث", "حملات Meta", "تحسين صفحات الهبوط"],
      },
      training: {
        index: "05",
        title: "تدريب الفرق",
        text: "تدريب الفريق على تدفقات عمل بالذكاء الاصطناعي قابلة للتطبيق فورا.",
        items: ["أساسيات Prompting", "تدفقات محتوى", "روتينات تحليل"],
      },
      wordpress: {
        index: "06",
        title: "تطوير WordPress",
        text: "إنشاء مواقع وصفحات هبوط نظيفة ومبنية للتحويل.",
        items: ["مواقع أعمال", "جمع عملاء محتملين", "بنية SEO جاهزة"],
      },
      ugc: {
        index: "07",
        title: "إنتاج فيديو UGC",
        text: "إنتاج فيديوهات قصيرة مع صناع UGC للإطلاق، البيع وبناء الثقة.",
        items: ["Brief واضح", "تنسيق مع شركاء UGC", "فيديوهات جاهزة للنشر"],
      },
    },
    ugcSection: {
      eyebrow: "شركاء فيديو UGC",
      title: "فيديوهات UGC حقيقية لتحويل أسرع.",
      text: "عملية بسيطة: brief واضح، صناع محتوى شركاء وملفات قصيرة جاهزة للاختبار العضوي والمدفوع.",
      cta: "ابدأ مشروع فيديو UGC",
      featureLabel: "نماذج UGC قصيرة",
      featureTitle: "افتتاحية، إثبات، دعوة للفعل.",
      featureText: "ثلاث زوايا قصيرة جاهزة لـ Reels وTikTok وShorts وMeta Ads.",
      preview: [
        ["01", "افتتاحية", "0-3 ث"],
        ["02", "إثبات", "ثقة المنتج"],
        ["03", "دعوة", "اختبار إعلان"],
      ],
      steps: [
        ["01", "التخطيط", "تحديد الـ hooks، الوعود، السكريبتات وزوايا العرض."],
        ["02", "الإنتاج", "تنسيق العمل مع صناع محتوى شركاء لإنتاج فيديوهات قصيرة موثوقة."],
        ["03", "الإطلاق", "تسليم ملفات للنشر العضوي واختبار الإعلانات."],
      ],
    },
    sprint: {
      eyebrow: "النظام الخاص",
      title: "Sprint نمو بالذكاء الاصطناعي",
      text: "تحويل فوضى التسويق اليدوي إلى نظام نمو قابل للتكرار.",
      cta: "احجز AI Growth Sprint",
      steps: [
        ["اليوم 01", "تشخيص", "رسم الأهداف، العروض، الأدوات والعوائق."],
        ["اليوم 02", "تصميم", "تصميم الخارطة، الأتمتة ونموذج المحتوى."],
        ["اليوم 03", "بناء", "إعداد Prompts، صفحات، لوحات، إعلانات وملفات."],
        ["اليوم 04", "تدريب", "تعليم الفريق كيف يقود النظام بثقة."],
        ["اليوم 05", "إطلاق", "إطلاق أول تدفقات عمل وإيقاع التحسين."],
      ],
    },
    proof: {
      eyebrow: "دليل العمل",
      title: "خبرة عملية مثبتة في التنفيذ والتدريب.",
      link: "لنتحدث عنه",
      cards: [
        ["مدرب", "GoMyCode", "تدريب تسويق رقمي مبني حول التنفيذ."],
        ["مؤسس", "Alpha Tech", "أنظمة تسويق، تكنولوجيا ونمو أعمال."],
        ["صانع محتوى", "DAY30 Bootcamp", "تعلم منظم للأشخاص الذين يريدون التنفيذ."],
      ],
    },
    work: {
      eyebrow: "مشاريع مختارة",
      title: "مشاريع تجارة إلكترونية حقيقية، تم بناؤها وتنميتها من الداخل.",
      text: "إنشاء مواقع، SEO/GEO، إعلانات وسوشيال ميديا ضمن نظام اكتساب واحد.",
      impact: [
        ["+99 ألف", "زائر / 90 يوما"],
        ["530 ألف د.ت", "رقم معاملات / 12 شهرا"],
        ["+207%", "انطباعات Google"],
        ["78", "دليل SEO منشور"],
      ],
      impactNote: "بيانات Parahealth - 90 يوما و12 شهرا.",
      preview: "معاينة المشروع",
      link: "مشاهدة المشروع",
      cards: [
        {
          title: "إطلاق منصة تجارة إلكترونية ونظام نمو.",
          text: "إنشاء الموقع وتنظيم محرك النمو عبر البائعين، UGC، SEO/GEO، الإعلانات والسوشيال ميديا.",
          metrics: [
            ["4", "روافع نمو"],
            ["موقع", "إنشاء + إدارة"],
            ["UGC", "تدفق صناع المحتوى"],
            ["إعلانات", "نظام اكتساب"],
          ],
          tags: ["إنشاء الموقع", "SEO/GEO", "إعلانات ممولة", "إدارة السوشيال ميديا"],
        },
        {
          title: "ظهور واكتساب لمتجر بارافارماسي.",
          text: "نمو عبر SEO/GEO، الإعلانات، المحتوى الاجتماعي والظهور في البحث.",
          metrics: [
            ["+99 ألف", "زائر / 90 يوما"],
            ["530 ألف د.ت", "رقم معاملات / 12 شهرا"],
            ["5 246", "طلبا تم تسليمه"],
            ["+207%", "انطباعات Google"],
          ],
          tags: ["موقع تجارة إلكترونية", "SEO/GEO", "إعلانات ممولة", "محتوى اجتماعي"],
        },
      ],
    },
    training: {
      eyebrow: "تدريب الفرق",
      title: "جعل الذكاء الاصطناعي مفيدا لمن يقومون بالعمل.",
      text: "جلسات عملية حول Prompts، محتوى بالذكاء الاصطناعي، أتمتة، SEO/GEO، WordPress وتحليلات.",
      format: "حضوري أو عن بعد - ورشات مخصصة - من 2 إلى 10 أشخاص",
      cta: "درّب فريقي",
      stack: [
        "مكتبات Prompts",
        "تدفقات محتوى",
        "أدوات أتمتة",
        "روتينات SEO/GEO",
        "Briefs فيديو UGC",
        "Playbooks للفِرق",
      ],
    },
    contact: {
      eyebrow: "اعمل مع أحمد",
      title: "جاهز لتحويل تسويقك إلى نظام أذكى؟",
      text: "أخبرني ما الذي تريد تحسينه: استراتيجية، أتمتة، محتوى، UGC، SEO/GEO، إعلانات أو WordPress.",
      labels: ["الاسم", "البريد الإلكتروني", "الشركة", "الخدمة", "الرسالة"],
      servicePlaceholder: "اختر خدمة",
      serviceOptions: [
        "استراتيجية التسويق بالذكاء الاصطناعي",
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
      text: "أنظمة تسويق بالذكاء الاصطناعي، مواقع تجارة إلكترونية، SEO/GEO، إعلانات ممولة، فيديو UGC وWordPress لمنطقة MENA.",
      nav: ["الخدمات", "فيديو UGC", "المشاريع", "Sprint النمو", "التدريب", "التواصل"],
      whatsapp: "احجز موعدا",
      linkedin: "ملف LinkedIn",
      bottom: ["تونس", "استراتيجية الذكاء الاصطناعي - SEO/GEO - الإعلانات الممولة - فيديو UGC - WordPress"],
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
    return language === "fr" ? "/thanks.html" : `/thanks.html?lang=${language}`;
  }

  return languagePaths[language] || "/";
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
        "الذكاء الاصطناعي في التسويق",
        "SEO/GEO",
        "الإعلانات الممولة",
        "إنتاج فيديو UGC",
        "تطوير WordPress",
        "نمو التجارة الإلكترونية",
      ]
    : currentLanguage === "fr"
      ? [
          "Marketing digital",
          "Intelligence artificielle appliquée au marketing",
          "SEO/GEO",
          "Media buying",
          "Production vidéo UGC",
          "Développement WordPress",
          "Croissance e-commerce",
        ]
      : [
          "Digital marketing",
          "AI marketing strategy",
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
        name: currentLanguage === "ar" ? "خدمات أحمد زكراوي للتسويق الرقمي والذكاء الاصطناعي" : "Ahmed Zakraoui AI Marketing Systems",
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
    nextInput.value = `${siteBaseUrl}/thanks.html${language === "fr" ? "" : `?lang=${language}`}`;
  }

  setText(".brand-copy small", copy.brandSmall);
  setAllAttribute(".brand", "aria-label", copy.aria.home);
  setAllAttribute(".language-switch", "aria-label", copy.aria.languages);

  const menuIsOpen = nav?.classList.contains("is-open");
  menuButton?.setAttribute("aria-label", menuIsOpen ? copy.aria.menuClose : copy.aria.menuOpen);
  nav?.setAttribute("aria-label", copy.aria.nav);

  setText(".thanks-panel .eyebrow", copy.thanks.eyebrow);
  setText(".thanks-panel h1", copy.thanks.title);
  setText(".thanks-panel p:not(.eyebrow)", copy.thanks.text);
  setText(".thanks-actions .button.primary", copy.thanks.back);
  setText(".thanks-actions .button.secondary", copy.thanks.whatsapp);

  if (isThanksPage) {
    return;
  }

  setText('.site-header .nav > a[href="#services"]', copy.nav.services);
  setText('.site-header .nav > a[href="#ugc"]', copy.nav.ugc);
  setText('.site-header .nav > a[href="#sprint"]', copy.nav.sprint);
  setText('.site-header .nav > a[href="#proof"]', copy.nav.proof);
  setText('.site-header .nav > a[href="#work"]', copy.nav.work);
  setText('.site-header .nav > a[href="#training"]', copy.nav.training);
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

const onScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = height > 0 ? (scrollTop / height) * 100 : 0;

  if (progress) {
    progress.style.width = `${Math.min(100, Math.max(0, ratio))}%`;
  }

  header?.classList.toggle("is-scrolled", scrollTop > 18);
  document.body.style.setProperty("--hero-parallax", `${Math.min(92, scrollTop * 0.11)}px`);
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

if (!prefersReducedMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
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
  if (!neuralCanvas || !hero || prefersReducedMotion) {
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
