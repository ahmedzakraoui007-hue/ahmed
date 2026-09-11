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

const languageCodes = ["en", "fr", "ar"];
const serviceKeys = ["strategy", "automation", "content", "growth", "training", "wordpress", "ugc"];
const siteBaseUrl = "https://site-personnel-premium.ahmedzakraoui8.chatgpt.site";
const languagePaths = {
  en: "/",
  fr: "/fr/",
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
      homeTitle: "Ahmed Zakraoui | AI Marketing Strategist",
      homeDescription:
        "Ahmed Zakraoui helps SMEs, startups, and corporations across North Africa and the MENA region build AI-powered marketing systems, e-commerce websites, SEO/GEO, UGC video campaigns, and paid social growth.",
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
      portrait: "Ahmed Zakraoui portrait",
      ugcWorkflow: "UGC video production workflow",
      trainingTopics: "Training topics",
      quickContact: "Quick contact options",
      footerNav: "Footer navigation",
      dropyScope: "Dropy work scope",
      paraScope: "ParaHealth work scope",
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
      eyebrow: "Digital marketing specialist + AI enthusiast",
      title: ["Ahmed", "Zakraoui"],
      statement:
        "I build AI-powered marketing systems for SMEs, startups, and corporations that want sharper strategy, faster execution, and growth work that connects websites, SEO/GEO, paid media, and content.",
      signals: ["SEO/GEO", "Paid Social", "UGC Video", "WordPress"],
      primary: "Build your AI marketing system",
      secondary: "See how I work",
      availability: "Available for MENA growth projects",
      cards: [
        ["AI Roadmap", "Strategy before tools"],
        ["Marketing Ops", "Automation that teams keep using"],
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
    belief: "Marketing needs systems. AI makes them faster. Teams make them work.",
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
        text: "Build the roadmap for integrating AI into marketing without wasting time on random tools.",
        items: ["AI opportunity audit", "Workflow and use-case mapping", "Prioritized implementation roadmap"],
      },
      automation: {
        index: "02",
        title: "Marketing Automation & AI Tools Setup",
        text: "Implement the right tools, prompt systems, and repeatable workflows so the team can save time and scale faster.",
        items: ["Tool selection and setup", "Prompt libraries and SOPs", "Content and follow-up automations"],
      },
      content: {
        index: "03",
        title: "Social Media & Content Strategy",
        text: "Create a system for consistent content ideas, planning, production, repurposing, and quality control.",
        items: ["Content pillars and calendars", "AI-assisted production flow", "Brand voice and review system"],
      },
      growth: {
        index: "04",
        title: "SEO/GEO & Media Buying",
        text: "Build acquisition across search, AI discovery, paid campaigns, and social channels with a clear measurement loop.",
        items: ["SEO and generative search visibility", "Meta and paid social campaign setup", "Content and landing page optimization"],
      },
      training: {
        index: "05",
        title: "Team Training",
        text: "Upskill your marketing team with practical sessions they can apply immediately in daily work.",
        items: ["Prompting foundations", "AI content workflows", "Automation and analytics routines"],
      },
      wordpress: {
        index: "06",
        title: "WordPress Development",
        text: "Build clean websites and landing pages that strengthen credibility, acquisition, and conversion.",
        items: ["Business and personal websites", "Landing pages and lead capture", "SEO-ready page structure"],
      },
      ugc: {
        index: "07",
        title: "UGC Video Production",
        text: "Plan and produce authentic short-form videos with our UGC content creation partners for launches, ads, and social proof.",
        items: ["Creator brief and script direction", "UGC partner coordination", "Videos ready for organic and paid social"],
      },
    },
    ugcSection: {
      eyebrow: "UGC video partners",
      title: "Authentic creator videos for brands that need trust fast.",
      text:
        "With our UGC content creation partners, we plan, brief, coordinate, and deliver short-form videos for launches, paid social, product demos, testimonials, and organic content.",
      cta: "Start a UGC video project",
      featureLabel: "Partner creator network",
      featureTitle: "Native-feeling content, built around your offer and audience.",
      featureText:
        "Hooks, scripts, creator guidance, filming angles, usage notes, and ready-to-post assets for Reels, TikTok, YouTube Shorts, and Meta Ads.",
      steps: [
        ["01", "Brief", "Define hooks, claims, scripts, offer angles, and brand guidelines."],
        ["02", "Create", "Coordinate partner creators to produce credible short-form videos."],
        ["03", "Deploy", "Deliver clean assets ready for organic posting and paid ad testing."],
      ],
    },
    sprint: {
      eyebrow: "Signature system",
      title: "The AI Growth Sprint",
      text:
        "A practical path for turning manual marketing chaos into a repeatable operating system your team can understand, run, and improve.",
      steps: [
        ["Day 01", "Diagnose", "Map goals, audience, offers, content flow, tools, and blockers."],
        ["Day 02", "Architect", "Design the AI roadmap, automation map, and content operating model."],
        ["Day 03", "Build", "Set up prompts, automations, dashboards, pages, ads, and reusable assets."],
        ["Day 04", "Train", "Teach the team how to use the system confidently in real work."],
        ["Day 05", "Launch", "Ship the first workflows and define the improvement rhythm."],
      ],
    },
    proof: {
      eyebrow: "Proof of work",
      title: "Teaching, building, and creating around marketing, AI, and execution.",
      cards: [
        ["Instructor", "GoMyCode", "Digital marketing instruction with a focus on practical execution and tool confidence."],
        ["Founder", "Alpha Tech", "Building at the intersection of marketing systems, technology, and business growth."],
        ["Creator", "DAY30 Bootcamp", "Structured learning experiences for people who want to execute, not just consume ideas."],
      ],
    },
    work: {
      eyebrow: "Selected work",
      title: "Real e-commerce projects, built and grown from the inside.",
      text:
        "I combine website creation, SEO/GEO, media buying, and social media management so brands can move from launch to repeatable acquisition.",
      cards: [
        {
          title: "E-commerce platform launch and growth system.",
          text: "Created the website and managed the growth engine across SEO/GEO, media buying, and social media.",
          tags: ["Website creation", "SEO/GEO", "Media buying", "Social media"],
        },
        {
          title: "Parapharmacy e-commerce visibility and acquisition.",
          text:
            "Created and managed the website growth system, with SEO/GEO work, paid media execution, and ongoing social content management.",
          tags: ["E-commerce website", "SEO/GEO", "Paid ads", "Social content"],
        },
      ],
    },
    training: {
      eyebrow: "Team training",
      title: "Make AI useful for the people doing the work.",
      text:
        "Practical sessions for marketing teams on prompting, AI content workflows, automation, social media systems, SEO/GEO, WordPress fundamentals, and analytics basics.",
      stack: [
        "Prompt libraries",
        "Content workflows",
        "Automation builders",
        "Social media systems",
        "SEO/GEO routines",
        "UGC video briefs",
        "WordPress pages",
        "Analytics routines",
        "Team playbooks",
        "AI governance",
      ],
    },
    contact: {
      eyebrow: "Work with Ahmed",
      title: "Ready to turn your marketing into a smarter system?",
      text:
        "Tell me what you want to improve: AI strategy, marketing automation, content consistency, team training, UGC video production, SEO/GEO, paid media, or a stronger WordPress presence.",
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
      note: "Prefer a fast reply? WhatsApp is available below.",
      linkedin: "Profile",
    },
    footer: {
      text: "AI marketing systems, e-commerce websites, SEO/GEO, paid social, UGC video, and WordPress for MENA.",
      nav: ["Services", "UGC Video", "Selected Work", "AI Growth Sprint", "Team Training", "Contact"],
      whatsapp: "WhatsApp: +216 54 302 654",
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
      homeTitle: "Ahmed Zakraoui | Stratège Marketing IA",
      homeDescription:
        "Ahmed Zakraoui aide les PME, startups et entreprises en Afrique du Nord et dans la région MENA à construire des systèmes marketing propulsés par l'IA, des sites e-commerce, du SEO/GEO, des campagnes UGC et de la croissance paid social.",
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
      portrait: "Portrait d'Ahmed Zakraoui",
      ugcWorkflow: "Processus de production vidéo UGC",
      trainingTopics: "Sujets de formation",
      quickContact: "Options de contact rapide",
      footerNav: "Navigation du pied de page",
      dropyScope: "Périmètre du projet Dropy",
      paraScope: "Périmètre du projet ParaHealth",
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
      eyebrow: "Spécialiste marketing digital + passionné d'IA",
      title: ["Ahmed", "Zakraoui"],
      statement:
        "Je construis des systèmes marketing propulsés par l'IA pour les PME, startups et entreprises qui veulent une stratégie plus claire, une exécution plus rapide et une croissance connectée entre site web, SEO/GEO, paid media et contenu.",
      signals: ["SEO/GEO", "Paid Social", "Vidéo UGC", "WordPress"],
      primary: "Construire mon système marketing IA",
      secondary: "Voir ma méthode",
      availability: "Disponible pour des projets de croissance MENA",
      cards: [
        ["Roadmap IA", "La stratégie avant les outils"],
        ["Marketing Ops", "Des automatisations que les équipes utilisent vraiment"],
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
    belief: "Le marketing a besoin de systèmes. L'IA les accélère. Les équipes les rendent performants.",
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
        text: "Construire la roadmap pour intégrer l'IA dans votre marketing sans perdre du temps avec des outils choisis au hasard.",
        items: ["Audit des opportunités IA", "Cartographie des workflows et cas d'usage", "Roadmap d'implémentation priorisée"],
      },
      automation: {
        index: "02",
        title: "Automatisation Marketing & Setup d'Outils IA",
        text: "Mettre en place les bons outils, prompts et workflows répétables pour gagner du temps et scaler plus vite.",
        items: ["Sélection et setup des outils", "Bibliothèques de prompts et SOP", "Automatisations de contenu et de suivi"],
      },
      content: {
        index: "03",
        title: "Stratégie Social Media & Contenu",
        text: "Créer un système pour produire des idées, planifier, publier, recycler et garder une qualité constante.",
        items: ["Piliers de contenu et calendriers", "Production assistée par l'IA", "Voix de marque et système de validation"],
      },
      growth: {
        index: "04",
        title: "SEO/GEO & Media Buying",
        text: "Construire l'acquisition via search, visibilité IA, campagnes paid et social avec une boucle de mesure claire.",
        items: ["SEO et visibilité dans la recherche générative", "Setup campagnes Meta et paid social", "Optimisation contenu et landing pages"],
      },
      training: {
        index: "05",
        title: "Formation d'Équipe",
        text: "Faire monter votre équipe marketing en compétence avec des sessions pratiques applicables immédiatement.",
        items: ["Fondations du prompting", "Workflows de contenu IA", "Routines d'automatisation et analytics"],
      },
      wordpress: {
        index: "06",
        title: "Développement WordPress",
        text: "Créer des sites et landing pages propres qui renforcent la crédibilité, l'acquisition et la conversion.",
        items: ["Sites business et personnels", "Landing pages et capture de leads", "Structure SEO-ready"],
      },
      ugc: {
        index: "07",
        title: "Production Vidéo UGC",
        text: "Planifier et produire des vidéos short-form authentiques avec nos partenaires créateurs UGC pour les lancements, ads et preuves sociales.",
        items: ["Brief créateur et direction script", "Coordination des partenaires UGC", "Vidéos prêtes pour organique et paid social"],
      },
    },
    ugcSection: {
      eyebrow: "Partenaires vidéo UGC",
      title: "Des vidéos créateurs authentiques pour les marques qui doivent gagner la confiance vite.",
      text:
        "Avec nos partenaires créateurs UGC, nous planifions, briefons, coordonnons et livrons des vidéos courtes pour lancements, paid social, démos produit, témoignages et contenu organique.",
      cta: "Lancer un projet vidéo UGC",
      featureLabel: "Réseau de créateurs partenaires",
      featureTitle: "Un contenu naturel, construit autour de votre offre et de votre audience.",
      featureText:
        "Hooks, scripts, guidance créateur, angles de tournage, notes d'utilisation et assets prêts à publier pour Reels, TikTok, YouTube Shorts et Meta Ads.",
      steps: [
        ["01", "Brief", "Définir hooks, promesses, scripts, angles d'offre et guidelines de marque."],
        ["02", "Créer", "Coordonner les créateurs partenaires pour produire des vidéos crédibles."],
        ["03", "Déployer", "Livrer des assets propres pour l'organique et les tests paid ads."],
      ],
    },
    sprint: {
      eyebrow: "Système signature",
      title: "Le AI Growth Sprint",
      text:
        "Un chemin pratique pour transformer le chaos marketing manuel en système opérationnel répétable que votre équipe comprend, utilise et améliore.",
      steps: [
        ["Jour 01", "Diagnostiquer", "Cartographier objectifs, audience, offres, flux de contenu, outils et blocages."],
        ["Jour 02", "Architecturer", "Concevoir la roadmap IA, la carte d'automatisation et le modèle opérationnel contenu."],
        ["Jour 03", "Construire", "Mettre en place prompts, automatisations, dashboards, pages, ads et assets réutilisables."],
        ["Jour 04", "Former", "Apprendre à l'équipe à utiliser le système avec confiance dans le vrai travail."],
        ["Jour 05", "Lancer", "Déployer les premiers workflows et définir le rythme d'amélioration."],
      ],
    },
    proof: {
      eyebrow: "Preuves de travail",
      title: "Former, construire et créer autour du marketing, de l'IA et de l'exécution.",
      cards: [
        ["Instructeur", "GoMyCode", "Formation en marketing digital avec un focus sur l'exécution pratique et la maîtrise des outils."],
        ["Fondateur", "Alpha Tech", "Construction à l'intersection des systèmes marketing, de la technologie et de la croissance business."],
        ["Créateur", "DAY30 Bootcamp", "Expériences d'apprentissage structurées pour celles et ceux qui veulent exécuter, pas seulement consommer des idées."],
      ],
    },
    work: {
      eyebrow: "Projets sélectionnés",
      title: "Des projets e-commerce réels, créés et développés de l'intérieur.",
      text:
        "Je combine création de site, SEO/GEO, media buying et gestion social media pour aider les marques à passer du lancement à une acquisition répétable.",
      cards: [
        {
          title: "Lancement d'une plateforme e-commerce et système de croissance.",
          text: "Création du site et gestion du moteur de croissance via SEO/GEO, media buying et social media.",
          tags: ["Création site web", "SEO/GEO", "Media buying", "Social media"],
        },
        {
          title: "Visibilité et acquisition e-commerce pour parapharmacie.",
          text: "Création et pilotage du système de croissance du site avec SEO/GEO, campagnes paid media et gestion continue du contenu social.",
          tags: ["Site e-commerce", "SEO/GEO", "Paid ads", "Contenu social"],
        },
      ],
    },
    training: {
      eyebrow: "Formation d'équipe",
      title: "Rendre l'IA utile pour les personnes qui exécutent.",
      text:
        "Sessions pratiques pour équipes marketing sur prompting, workflows contenu IA, automatisation, systèmes social media, SEO/GEO, fondamentaux WordPress et bases analytics.",
      stack: [
        "Bibliothèques de prompts",
        "Workflows contenu",
        "Builders d'automatisation",
        "Systèmes social media",
        "Routines SEO/GEO",
        "Briefs vidéo UGC",
        "Pages WordPress",
        "Routines analytics",
        "Playbooks équipe",
        "Gouvernance IA",
      ],
    },
    contact: {
      eyebrow: "Travailler avec Ahmed",
      title: "Prêt à transformer votre marketing en système plus intelligent ?",
      text:
        "Dites-moi ce que vous voulez améliorer : stratégie IA, automatisation marketing, régularité du contenu, formation d'équipe, vidéo UGC, SEO/GEO, paid media ou présence WordPress plus forte.",
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
      note: "Besoin d'une réponse rapide ? WhatsApp est disponible ci-dessous.",
      linkedin: "Profil",
    },
    footer: {
      text: "Systèmes marketing IA, sites e-commerce, SEO/GEO, paid social, vidéo UGC et WordPress pour la région MENA.",
      nav: ["Services", "Vidéo UGC", "Projets", "AI Growth Sprint", "Formation", "Contact"],
      whatsapp: "WhatsApp : +216 54 302 654",
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
      homeTitle: "أحمد زكراوي | خبير تسويق رقمي وذكاء اصطناعي في تونس",
      homeDescription:
        "أساعد الشركات في تونس، شمال أفريقيا ومنطقة MENA على بناء أنظمة تسويق رقمية مدعومة بالذكاء الاصطناعي تشمل SEO/GEO، الإعلانات الممولة، محتوى UGC، تطوير WordPress ونمو التجارة الإلكترونية.",
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
      portrait: "صورة أحمد زكراوي",
      ugcWorkflow: "سير عمل إنتاج فيديو UGC",
      trainingTopics: "مواضيع التدريب",
      quickContact: "خيارات التواصل السريع",
      footerNav: "تنقل التذييل",
      dropyScope: "نطاق عمل Dropy",
      paraScope: "نطاق عمل ParaHealth",
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
      eyebrow: "متخصص في التسويق الرقمي + شغوف بالذكاء الاصطناعي",
      title: ["أحمد", "زكراوي"],
      statement:
        "أبني أنظمة تسويق رقمية مدعومة بالذكاء الاصطناعي للشركات الصغيرة والمتوسطة، الشركات الناشئة والمؤسسات التي تريد استراتيجية أوضح، تنفيذا أسرع ونموا يربط بين الموقع الإلكتروني، SEO/GEO، الإعلانات الممولة والمحتوى.",
      signals: ["SEO/GEO", "إعلانات ممولة", "فيديو UGC", "WordPress"],
      primary: "ابن نظامك التسويقي الذكي",
      secondary: "شاهد طريقة عملي",
      availability: "متاح لمشاريع النمو في منطقة MENA",
      cards: [
        ["خارطة طريق الذكاء الاصطناعي", "الاستراتيجية قبل الأدوات"],
        ["عمليات التسويق", "أتمتة تستخدمها الفرق فعلا"],
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
    belief: "التسويق القوي يحتاج إلى أنظمة. الذكاء الاصطناعي يسرعها. والفِرق تجعلها تحقق نتائج.",
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
        text: "بناء خارطة طريق واضحة لإدماج الذكاء الاصطناعي في التسويق بدون تشتيت أو أدوات لا تخدم أهدافك.",
        items: ["تدقيق فرص الذكاء الاصطناعي", "رسم تدفقات العمل وحالات الاستخدام", "خارطة تنفيذ مرتبة حسب الأولوية"],
      },
      automation: {
        index: "02",
        title: "أتمتة التسويق وإعداد أدوات الذكاء الاصطناعي",
        text: "إعداد الأدوات المناسبة، قوالب التعليمات وتدفقات عمل قابلة للتكرار حتى يوفر الفريق الوقت ويتوسع بشكل أسرع.",
        items: ["اختيار وإعداد الأدوات", "مكتبات Prompts وإجراءات عمل واضحة", "أتمتة المحتوى والمتابعة"],
      },
      content: {
        index: "03",
        title: "استراتيجية السوشيال ميديا والمحتوى",
        text: "إنشاء نظام واضح للأفكار، التخطيط، الإنتاج، إعادة الاستخدام ومراقبة الجودة.",
        items: ["محاور المحتوى والرزنامة", "إنتاج محتوى بمساعدة الذكاء الاصطناعي", "صوت العلامة ونظام المراجعة"],
      },
      growth: {
        index: "04",
        title: "SEO/GEO والإعلانات الممولة",
        text: "بناء قنوات اكتساب عبر البحث، الظهور في إجابات الذكاء الاصطناعي، الحملات المدفوعة والسوشيال مع نظام قياس واضح.",
        items: ["SEO والظهور في البحث التوليدي", "إعداد حملات Meta وPaid Social", "تحسين المحتوى وصفحات الهبوط"],
      },
      training: {
        index: "05",
        title: "تدريب الفرق",
        text: "رفع كفاءة فريق التسويق عبر جلسات عملية يمكن تطبيقها مباشرة في العمل اليومي.",
        items: ["أساسيات Prompting", "تدفقات محتوى بالذكاء الاصطناعي", "روتينات الأتمتة والتحليلات"],
      },
      wordpress: {
        index: "06",
        title: "تطوير WordPress",
        text: "إنشاء مواقع وصفحات هبوط قوية تعزز المصداقية، الاكتساب والتحويل.",
        items: ["مواقع أعمال وشخصية", "صفحات هبوط وجمع عملاء محتملين", "بنية جاهزة لمحركات البحث"],
      },
      ugc: {
        index: "07",
        title: "إنتاج فيديو UGC",
        text: "تخطيط وإنتاج فيديوهات قصيرة أصيلة مع شركائنا من صناع محتوى UGC للإطلاقات، الإعلانات والدليل الاجتماعي.",
        items: ["Brief واضح لصانع المحتوى وتوجيه السكريبت", "تنسيق مع شركاء UGC", "فيديوهات جاهزة للنشر العضوي والإعلانات"],
      },
    },
    ugcSection: {
      eyebrow: "شركاء فيديو UGC",
      title: "فيديوهات UGC حقيقية للعلامات التي تحتاج إلى بناء الثقة بسرعة.",
      text:
        "مع شركائنا من صناع محتوى UGC، نخطط للرسائل، نكتب الـ brief، ننسق الإنتاج ونقدم فيديوهات قصيرة للإطلاقات، الإعلانات الممولة، عروض المنتجات، الشهادات والمحتوى العضوي.",
      cta: "ابدأ مشروع فيديو UGC",
      featureLabel: "شبكة صناع محتوى شركاء",
      featureTitle: "محتوى يبدو طبيعيا ومبنيا حول عرضك وجمهورك.",
      featureText:
        "زوايا افتتاحية، سكريبتات، توجيه لصناع المحتوى، زوايا تصوير، ملاحظات استخدام وملفات جاهزة للنشر على Reels وTikTok وYouTube Shorts وMeta Ads.",
      steps: [
        ["01", "التخطيط", "تحديد الزوايا الافتتاحية، الوعود التسويقية، السكريبتات، زوايا العرض وإرشادات العلامة."],
        ["02", "الإنتاج", "تنسيق العمل مع صناع محتوى شركاء لإنتاج فيديوهات قصيرة موثوقة."],
        ["03", "الإطلاق", "تسليم ملفات جاهزة للنشر العضوي واختبار الإعلانات الممولة."],
      ],
    },
    sprint: {
      eyebrow: "النظام الخاص",
      title: "Sprint نمو بالذكاء الاصطناعي",
      text: "مسار عملي لتحويل فوضى التسويق اليدوي إلى نظام تشغيل قابل للتكرار يفهمه فريقك، يستخدمه ويطوره.",
      steps: [
        ["اليوم 01", "تشخيص", "رسم الأهداف، الجمهور، العروض، تدفق المحتوى، الأدوات والعوائق."],
        ["اليوم 02", "تصميم", "تصميم خارطة طريق الذكاء الاصطناعي، خريطة الأتمتة ونموذج تشغيل المحتوى."],
        ["اليوم 03", "بناء", "إعداد Prompts، أتمتة، لوحات متابعة، صفحات، إعلانات وملفات قابلة لإعادة الاستخدام."],
        ["اليوم 04", "تدريب", "تعليم الفريق كيف يستخدم النظام بثقة في العمل اليومي."],
        ["اليوم 05", "إطلاق", "إطلاق أول تدفقات عمل وتحديد إيقاع التحسين."],
      ],
    },
    proof: {
      eyebrow: "دليل العمل",
      title: "تدريب، بناء وصناعة محتوى حول التسويق، الذكاء الاصطناعي والتنفيذ.",
      cards: [
        ["مدرب", "GoMyCode", "تدريب في التسويق الرقمي مع تركيز على التنفيذ العملي والثقة في استخدام الأدوات."],
        ["مؤسس", "Alpha Tech", "بناء عند تقاطع أنظمة التسويق، التكنولوجيا ونمو الأعمال."],
        ["صانع محتوى", "DAY30 Bootcamp", "تجارب تعلم منظمة للأشخاص الذين يريدون التنفيذ، وليس استهلاك الأفكار فقط."],
      ],
    },
    work: {
      eyebrow: "مشاريع مختارة",
      title: "مشاريع تجارة إلكترونية حقيقية، تم بناؤها وتنميتها من الداخل.",
      text:
        "أجمع بين إنشاء المواقع، SEO/GEO، الإعلانات الممولة وإدارة السوشيال ميديا حتى تنتقل العلامات من الإطلاق إلى اكتساب قابل للتكرار.",
      cards: [
        {
          title: "إطلاق منصة تجارة إلكترونية ونظام نمو.",
          text: "إنشاء الموقع وإدارة محرك النمو عبر SEO/GEO، الإعلانات الممولة والسوشيال ميديا.",
          tags: ["إنشاء الموقع", "SEO/GEO", "إعلانات ممولة", "إدارة السوشيال ميديا"],
        },
        {
          title: "ظهور واكتساب لمتجر بارافارماسي.",
          text: "إنشاء وإدارة نظام نمو الموقع عبر SEO/GEO، تنفيذ الحملات الإعلانية وإدارة مستمرة للمحتوى الاجتماعي.",
          tags: ["موقع تجارة إلكترونية", "SEO/GEO", "إعلانات ممولة", "محتوى اجتماعي"],
        },
      ],
    },
    training: {
      eyebrow: "تدريب الفرق",
      title: "جعل الذكاء الاصطناعي مفيدا لمن يقومون بالعمل.",
      text:
        "جلسات عملية لفرق التسويق حول Prompting، تدفقات إنتاج المحتوى بالذكاء الاصطناعي، الأتمتة، أنظمة السوشيال ميديا، SEO/GEO، أساسيات WordPress وقواعد التحليلات.",
      stack: [
        "مكتبات Prompts",
        "تدفقات محتوى",
        "أدوات أتمتة",
        "أنظمة السوشيال ميديا",
        "روتينات SEO/GEO",
        "Briefs فيديو UGC",
        "صفحات WordPress",
        "روتينات التحليلات",
        "Playbooks للفِرق",
        "حوكمة الذكاء الاصطناعي",
      ],
    },
    contact: {
      eyebrow: "اعمل مع أحمد",
      title: "جاهز لتحويل تسويقك إلى نظام أذكى؟",
      text:
        "أخبرني بما تريد تحسينه: استراتيجية الذكاء الاصطناعي، أتمتة التسويق، انتظام المحتوى، تدريب الفريق، فيديو UGC، SEO/GEO، الإعلانات الممولة أو حضور أقوى على WordPress.",
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
      note: "تفضل ردا أسرع؟ WhatsApp متاح أسفله.",
      linkedin: "الملف الشخصي",
    },
    footer: {
      text: "أنظمة تسويق بالذكاء الاصطناعي، مواقع تجارة إلكترونية، SEO/GEO، إعلانات ممولة، فيديو UGC وWordPress لمنطقة MENA.",
      nav: ["الخدمات", "فيديو UGC", "المشاريع", "Sprint النمو", "التدريب", "التواصل"],
      whatsapp: "WhatsApp: +216 54 302 654",
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
  const pathLanguage = window.location.pathname.startsWith("/fr/")
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

  return "en";
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

const getCopy = () => translations[currentLanguage] || translations.en;

const getLanguageHref = (language, isThanksPage = false) => {
  if (isThanksPage) {
    return language === "en" ? "/thanks.html" : `/thanks.html?lang=${language}`;
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

  if (formLanguage) {
    formLanguage.value = copy.name;
  }

  const nextInput = document.querySelector('input[name="_next"]');
  if (nextInput) {
    nextInput.value = `${siteBaseUrl}/thanks.html${language === "en" ? "" : `?lang=${language}`}`;
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
  setAllText(".hero-title span", copy.hero.title);
  setText(".hero-statement", copy.hero.statement);
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
  setText(".belief p", copy.belief);

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
  setText(".ugc-feature span", copy.ugcSection.featureLabel);
  setText(".ugc-feature strong", copy.ugcSection.featureTitle);
  setText(".ugc-feature p", copy.ugcSection.featureText);
  copy.ugcSection.steps.forEach((step, index) => {
    const stepNumber = index + 1;
    setText(`.ugc-steps article:nth-child(${stepNumber}) span`, step[0]);
    setText(`.ugc-steps article:nth-child(${stepNumber}) strong`, step[1]);
    setText(`.ugc-steps article:nth-child(${stepNumber}) p`, step[2]);
  });

  setText(".sprint .section-head .eyebrow", copy.sprint.eyebrow);
  setText(".sprint .section-head h2", copy.sprint.title);
  setText(".sprint .section-head p:not(.eyebrow)", copy.sprint.text);
  copy.sprint.steps.forEach((step, index) => {
    const stepNumber = index + 1;
    setText(`.sprint-steps article:nth-child(${stepNumber}) span`, step[0]);
    setText(`.sprint-steps article:nth-child(${stepNumber}) strong`, step[1]);
    setText(`.sprint-steps article:nth-child(${stepNumber}) p`, step[2]);
  });

  setText(".proof .section-head .eyebrow", copy.proof.eyebrow);
  setText(".proof .section-head h2", copy.proof.title);
  copy.proof.cards.forEach((card, index) => {
    const cardNumber = index + 1;
    setText(`.proof-card:nth-child(${cardNumber}) span`, card[0]);
    setText(`.proof-card:nth-child(${cardNumber}) h3`, card[1]);
    setText(`.proof-card:nth-child(${cardNumber}) p`, card[2]);
  });

  setText(".selected-work .section-head .eyebrow", copy.work.eyebrow);
  setText(".selected-work .section-head h2", copy.work.title);
  setText(".selected-work .section-head p:not(.eyebrow)", copy.work.text);
  setText(".work-card-feature .work-content h3", copy.work.cards[0].title);
  setText(".work-card-feature .work-content p", copy.work.cards[0].text);
  setAttribute(".work-card-feature .work-visual img", "alt", localizedImageAlt[language].dropy);
  setAllText(".work-card-feature .work-tags span", copy.work.cards[0].tags);
  setAttribute(".work-card-feature .work-tags", "aria-label", copy.aria.dropyScope);
  setText(".work-card-dark .work-content h3", copy.work.cards[1].title);
  setText(".work-card-dark .work-content p", copy.work.cards[1].text);
  setAttribute(".work-card-dark .work-visual img", "alt", localizedImageAlt[language].parahealth);
  setAllText(".work-card-dark .work-tags span", copy.work.cards[1].tags);
  setAttribute(".work-card-dark .work-tags", "aria-label", copy.aria.paraScope);

  setText(".training-card .eyebrow", copy.training.eyebrow);
  setAttribute(".training-card img", "alt", localizedImageAlt[language].profile);
  setText(".training-card h2", copy.training.title);
  setText(".training-card p:not(.eyebrow)", copy.training.text);
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
