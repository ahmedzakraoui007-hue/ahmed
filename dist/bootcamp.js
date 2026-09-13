const languageCodes = ["fr", "en", "ar"];
const storageKey = "ahmed-growth-ai-bootcamp-v1";
const siteBaseUrl = "https://ahmedzakraoui.com";
const bootcampPaths = {
  fr: "/bootcamp",
  en: "/en/bootcamp",
  ar: "/ar/bootcamp",
};
const languageLocales = {
  fr: "fr_FR",
  en: "en_US",
  ar: "ar_AR",
};

const bootcampCopy = {
  fr: {
    dir: "ltr",
    meta: {
      title: "Bootcamp gratuit Growth Marketing with AI | Ahmed Zakraoui",
      description:
        "Bootcamp gratuit Growth Marketing with AI par Ahmed Zakraoui : modules pratiques, quiz, checkpoints, prompts et ressources pour construire un système marketing IA.",
    },
    ui: {
      brandSmall: "Systèmes Marketing IA",
      navHome: "Accueil",
      navServices: "Services",
      navWork: "Projets",
      navBootcamp: "Bootcamp",
      navContact: "Contact",
      heroKicker: "Bootcamp gratuit - avec quiz et checkpoints",
      heroTitle: "Growth Marketing with AI",
      heroText:
        "Un parcours pratique pour transformer l'IA en système d'acquisition : stratégie, contenu, SEO/GEO, ads, UGC, automation et mesure.",
      heroPrimary: "Faire le diagnostic gratuit",
      heroSecondary: "Télécharger le workbook",
      statModules: "modules pratiques",
      statQuiz: "questions de quiz",
      statChecks: "checkpoints actionnables",
      heroPathLabel: "Parcours conseillé",
      heroPathTitle: "Commence par diagnostiquer ton moteur growth.",
      heroPathText: "Chaque module se termine par un quiz, des checkpoints et un prompt prêt à utiliser.",
      searchLabel: "Trouver un module",
      searchPlaceholder: "Rechercher...",
      progressLabel: "Progression",
      progressModules: "Modules",
      progressChecks: "Checks",
      progressQuiz: "Quiz",
      resetProgress: "Réinitialiser",
      resetConfirm: "Réinitialiser toute ta progression ?",
      tabCourse: "Cours",
      tabQuiz: "Quiz",
      tabResources: "Ressources",
      seoEyebrow: "Programme SEO-ready",
      seoTitle: "Un bootcamp gratuit pour apprendre le growth marketing avec l'IA.",
      seoText:
        "Ce programme aide les entrepreneurs, PME et startups en Tunisie, Afrique du Nord et MENA à structurer un système marketing plus visible, mesurable et orienté conversion.",
      faqEyebrow: "Questions fréquentes",
      faqTitle: "Avant de commencer le bootcamp.",
      finalTitle: "Tu veux l'appliquer plus vite sur ton business ?",
      finalText:
        "Le bootcamp est gratuit. Si tu veux aller plus vite, on peut transformer ces checkpoints en plan d'action pour ton entreprise.",
      finalCta: "Lancer mon système IA",
      schemaLevel: "Débutant à intermédiaire",
      schemaPrerequisites: "Avoir un projet, une offre ou un site à améliorer.",
      moduleLabel: "Module",
      duration: "Durée",
      moduleProgress: "Progression du module",
      moduleInProgress: "En cours",
      moduleComplete: "Validé",
      checkpointMini: "checks",
      quizMini: "quiz",
      courseFlowHint: "Quand tu as compris le module, valide-le avec le quiz.",
      courseNext: "Passer au quiz",
      courseResources: "Voir les ressources",
      nextModule: "Module suivant",
      finishBootcamp: "Terminer le bootcamp",
      stickyLabel: "Bootcamp",
      stickyCta: "Continuer",
      stickyComplete: "Certificat prêt",
      diagnosticEyebrow: "AI Growth Score",
      diagnosticTitle: "Diagnostique ton système marketing avant de commencer.",
      diagnosticText:
        "Réponds à 8 questions rapides pour voir où ton moteur growth bloque et quel module suivre en priorité.",
      diagnosticStep: "Question",
      diagnosticOf: "sur",
      diagnosticScore: "Score AI Growth",
      diagnosticReset: "Refaire le diagnostic",
      diagnosticStartCourse: "Commencer le module conseillé",
      diagnosticContact: "Transformer ça en plan d'action",
      outcomesEyebrow: "Résultats attendus",
      outcomesTitle: "Ce que tu construis pendant le bootcamp.",
      outcomesText: "Pas de théorie décorative : chaque étape produit un actif que tu peux utiliser pour vendre, publier, mesurer ou automatiser.",
      assetsEyebrow: "Outils gratuits",
      assetsTitle: "Workbook, certificat et ressources pour passer à l'action.",
      assetsText: "Le bootcamp devient plus utile quand tu gardes une trace de tes décisions, de tes scores et de tes prochains tests.",
      workbookTitle: "AI Growth Workbook",
      workbookText: "Un PDF simple pour noter ton ICP, ton offre, tes prompts, tes pages SEO/GEO, tes scripts UGC et ton dashboard.",
      workbookDownload: "Télécharger le workbook PDF",
      certificateTitle: "Certificat de complétion",
      certificateLocked: "Valide les 6 modules, les checkpoints et les quiz pour débloquer ton certificat.",
      certificateUnlocked: "Bravo. Ton certificat est prêt à partager.",
      certificateNameLabel: "Nom à afficher",
      certificateNamePlaceholder: "Ahmed Zakraoui",
      certificateCopy: "Copier le texte LinkedIn",
      certificateShare: "Partager sur LinkedIn",
      certificateFallbackName: "Participant",
      certificateAchievement: "a complété le Growth Marketing with AI Bootcamp gratuit d'Ahmed Zakraoui.",
      certificateIssued: "Certificat généré localement - gratuit - AhmedZakraoui.com",
      lessons: "Leçons",
      promptTitle: "Prompt atelier",
      copyPrompt: "Copier le prompt",
      copied: "Copié",
      checkpoints: "Checkpoints",
      quizIntro: "Réponds au quiz pour valider ce module.",
      quizSubmit: "Valider mes réponses",
      quizRetry: "Recommencer le quiz",
      quizMissing: "Réponds à toutes les questions avant de valider.",
      quizResult: "Score : {score}/{total}.",
      resourcesIntro: "Templates rapides pour appliquer le module dès aujourd'hui.",
      noResult: "Aucun module trouvé.",
      menuOpen: "Ouvrir le menu",
      menuClose: "Fermer le menu",
    },
    modules: [
      {
        id: "foundations",
        title: "Fondations growth + IA",
        short: "Comprendre le système avant les outils.",
        duration: "35 min",
        objective:
          "Identifier ton moteur de croissance et les points où l'IA peut accélérer le travail sans créer du chaos.",
        lessons: [
          "Définir le growth loop : acquisition, activation, conversion, rétention.",
          "Séparer les tâches à automatiser des tâches à mieux décider.",
          "Choisir une North Star Metric simple pour mesurer le progrès.",
        ],
        prompt:
          "Agis comme un consultant growth. Pose-moi 7 questions pour cartographier mon business, mon offre, mes canaux actuels, mes blocages et mes objectifs. Ensuite, propose un growth loop clair en 5 étapes.",
        checkpoints: [
          "J'ai défini mon objectif business prioritaire.",
          "J'ai identifié mes 3 plus gros blocages marketing.",
          "J'ai choisi un workflow où l'IA peut gagner du temps dès cette semaine.",
        ],
        quiz: [
          {
            q: "Pourquoi commencer par le growth loop ?",
            options: [
              "Pour choisir les outils avant la stratégie.",
              "Pour relier acquisition, conversion et revenus.",
              "Pour publier plus de contenu sans mesure.",
            ],
            answer: 1,
            explanation: "Le growth loop clarifie comment chaque action nourrit la croissance mesurable.",
          },
          {
            q: "Une bonne North Star Metric doit être...",
            options: ["Visible chaque année seulement.", "Simple, suivie souvent et liée à la valeur.", "Basée uniquement sur les likes."],
            answer: 1,
            explanation: "Elle doit guider les décisions régulières, pas seulement décorer un reporting.",
          },
        ],
      },
      {
        id: "offer",
        title: "Offre, ICP et positionnement",
        short: "Dire clairement qui tu aides et pourquoi.",
        duration: "40 min",
        objective:
          "Transformer une offre vague en message clair pour un segment précis, avec bénéfices, preuves et objections.",
        lessons: [
          "Définir l'ICP : contexte, douleur, urgence et budget.",
          "Écrire une promesse orientée résultat plutôt qu'une liste d'outils.",
          "Construire une matrice objections, preuves et réponses.",
        ],
        prompt:
          "Analyse mon offre comme un strategist B2B. Donne-moi 3 ICP possibles, leurs douleurs, leurs objections, les preuves nécessaires et une proposition de valeur en une phrase pour chaque segment.",
        checkpoints: [
          "J'ai choisi un ICP principal pour ce mois.",
          "J'ai écrit une promesse claire en une phrase.",
          "J'ai préparé 5 objections clients avec réponses.",
        ],
        quiz: [
          {
            q: "Quel message convertit le mieux ?",
            options: ["Une liste complète d'outils.", "Une promesse claire reliée à un résultat.", "Un slogan abstrait sans preuve."],
            answer: 1,
            explanation: "Le prospect achète un progrès concret, pas une pile d'outils.",
          },
          {
            q: "L'ICP sert surtout à...",
            options: ["Exclure les mauvais messages.", "Réduire le budget marketing à zéro.", "Faire une page plus longue."],
            answer: 0,
            explanation: "Un ICP net permet de choisir les bons angles, canaux et preuves.",
          },
        ],
      },
      {
        id: "content",
        title: "Content engine avec IA",
        short: "Produire mieux, plus vite et plus régulier.",
        duration: "45 min",
        objective:
          "Créer un système de contenu hebdomadaire : idées, briefs, posts, vidéos courtes, réutilisation et validation qualité.",
        lessons: [
          "Construire 4 piliers de contenu liés au parcours client.",
          "Créer un workflow IA : recherche, angle, brouillon, édition, publication.",
          "Recycler une idée en post, carousel, reel, newsletter et script UGC.",
        ],
        prompt:
          "À partir de mon offre et mon ICP, génère un calendrier de contenu sur 14 jours avec 4 piliers, hooks, formats, CTA et une idée de réutilisation pour chaque contenu.",
        checkpoints: [
          "J'ai défini mes 4 piliers de contenu.",
          "J'ai créé 10 hooks orientés douleur ou bénéfice.",
          "J'ai transformé une idée en 3 formats différents.",
        ],
        quiz: [
          {
            q: "Un bon content engine doit optimiser...",
            options: ["Seulement le volume.", "Régularité, qualité et lien avec le business.", "Uniquement les tendances."],
            answer: 1,
            explanation: "La cadence compte, mais le contenu doit servir l'offre et la conversion.",
          },
          {
            q: "Le meilleur usage de l'IA dans le contenu est...",
            options: ["Remplacer tout jugement humain.", "Accélérer les brouillons et garder une édition stratégique.", "Publier sans relecture."],
            answer: 1,
            explanation: "L'IA accélère le système, mais la direction éditoriale reste humaine.",
          },
        ],
      },
      {
        id: "seo",
        title: "SEO/GEO et visibilité IA",
        short: "Être trouvé par Google et les moteurs IA.",
        duration: "45 min",
        objective:
          "Construire une architecture de visibilité qui répond aux vraies questions clients sur Google, ChatGPT et moteurs IA.",
        lessons: [
          "Trouver les requêtes informationnelles, commerciales et locales.",
          "Créer des pages qui répondent clairement aux intentions de recherche.",
          "Structurer FAQ, preuves, entités et maillage interne pour le GEO.",
        ],
        prompt:
          "Agis comme expert SEO/GEO. Donne-moi une architecture de contenu pour mon offre avec mots-clés, questions fréquentes, pages prioritaires, entités à mentionner et plan de maillage interne.",
        checkpoints: [
          "J'ai listé 20 questions que mes clients posent avant d'acheter.",
          "J'ai choisi 5 pages ou articles prioritaires.",
          "J'ai ajouté une FAQ claire à une page stratégique.",
        ],
        quiz: [
          {
            q: "Le GEO vise à améliorer...",
            options: ["La visibilité dans les réponses générées par IA.", "La couleur des boutons.", "La taille des images uniquement."],
            answer: 0,
            explanation: "Le GEO aide les moteurs IA à comprendre et citer ton expertise.",
          },
          {
            q: "Une page SEO solide doit répondre à...",
            options: ["Une intention claire.", "Tous les sujets en même temps.", "Aucune question précise."],
            answer: 0,
            explanation: "Chaque page doit avoir une intention de recherche nette.",
          },
        ],
      },
      {
        id: "paid-ugc",
        title: "Paid social + UGC",
        short: "Tester des angles créatifs qui vendent.",
        duration: "50 min",
        objective:
          "Construire des tests publicitaires plus intelligents avec hooks, scripts UGC, angles d'objection et apprentissage rapide.",
        lessons: [
          "Transformer douleurs et objections en angles de publicité.",
          "Écrire des scripts UGC naturels : hook, problème, preuve, CTA.",
          "Lire les premiers signaux : CTR, CPA, conversion, commentaires.",
        ],
        prompt:
          "Crée 12 angles publicitaires pour mon offre : 4 orientés douleur, 4 orientés désir, 4 orientés preuve. Pour chaque angle, propose un script UGC de 20 secondes et un CTA.",
        checkpoints: [
          "J'ai créé 6 hooks vidéo testables.",
          "J'ai préparé 3 scripts UGC courts.",
          "J'ai défini le signal qui décidera si je garde ou coupe une créa.",
        ],
        quiz: [
          {
            q: "Un bon test paid social compare d'abord...",
            options: ["Des angles créatifs clairs.", "La police du logo.", "Dix objectifs différents en même temps."],
            answer: 0,
            explanation: "Les angles montrent quel message attire et convertit le mieux.",
          },
          {
            q: "L'UGC est utile parce qu'il apporte...",
            options: ["Un ton naturel et crédible.", "Plus de texte juridique.", "Moins de preuve sociale."],
            answer: 0,
            explanation: "L'UGC rapproche la marque d'une conversation humaine et crédible.",
          },
        ],
      },
      {
        id: "automation",
        title: "Automation, CRM et analytics",
        short: "Piloter le système sans perdre le signal.",
        duration: "55 min",
        objective:
          "Mettre en place une routine simple : capture des leads, nurturing, reporting et amélioration continue.",
        lessons: [
          "Cartographier les étapes du lead : source, besoin, urgence, prochaine action.",
          "Automatiser les relances sans perdre la personnalisation.",
          "Créer un dashboard minimum : trafic, leads, conversion, coût, revenu.",
        ],
        prompt:
          "Dessine mon système marketing minimum : formulaires, CRM, emails, WhatsApp, dashboard, responsabilités de l'équipe et routine hebdomadaire d'optimisation.",
        checkpoints: [
          "J'ai défini les champs essentiels de mon formulaire lead.",
          "J'ai écrit une séquence de relance en 3 messages.",
          "J'ai choisi 5 métriques à suivre chaque semaine.",
        ],
        quiz: [
          {
            q: "Une automation utile doit...",
            options: ["Supprimer toute relation humaine.", "Clarifier la prochaine action et gagner du temps.", "Envoyer le même message partout."],
            answer: 1,
            explanation: "L'objectif est de rendre le suivi plus fiable, pas plus froid.",
          },
          {
            q: "Un dashboard minimum doit montrer...",
            options: ["Le signal utile pour décider.", "Tous les chiffres possibles.", "Seulement des impressions."],
            answer: 0,
            explanation: "Un bon dashboard aide à décider quoi améliorer cette semaine.",
          },
        ],
      },
    ],
    resources: [
      {
        type: "Canvas",
        title: "Growth Loop Canvas",
        text: "Résumé en 7 champs : ICP, promesse, canal, activation, conversion, rétention, métrique.",
        copy: "Growth Loop Canvas : ICP | Promesse | Canal d'acquisition | Activation | Conversion | Rétention | North Star Metric.",
      },
      {
        type: "Checklist",
        title: "Checklist SEO/GEO",
        text: "Questions clients, FAQ, entités, preuves, maillage interne et pages prioritaires.",
        copy: "Checklist SEO/GEO : 20 questions clients, 5 pages prioritaires, FAQ, entités, preuves, maillage interne.",
      },
      {
        type: "Prompt",
        title: "Content Sprint 14 jours",
        text: "Une base pour générer un calendrier orienté conversion, pas seulement visibilité.",
        copy: "Crée un content sprint de 14 jours avec pilier, hook, format, CTA, objectif et réutilisation.",
      },
      {
        type: "Dashboard",
        title: "Dashboard minimum",
        text: "Les 5 métriques qui gardent le système lisible : trafic, leads, conversion, coût, revenu.",
        copy: "Dashboard minimum : trafic qualifié, leads, taux de conversion, coût par lead, revenu attribué.",
      },
    ],
    diagnostic: {
      levels: [
        {
          min: 0,
          title: "Mode manuel",
          text: "Ton marketing dépend encore beaucoup d'efforts isolés. Commence par clarifier le loop, l'offre et les prochains workflows à automatiser.",
        },
        {
          min: 46,
          title: "Système en construction",
          text: "Tu as déjà des bases solides. Le plus gros gain vient maintenant de la mesure, de la répétition et des assets réutilisables.",
        },
        {
          min: 76,
          title: "Growth engine prêt à scaler",
          text: "Ton système est lisible. Utilise le bootcamp pour renforcer les tests créatifs, le SEO/GEO et les routines d'amélioration.",
        },
      ],
      questions: [
        {
          moduleId: "foundations",
          category: "Stratégie",
          q: "Ton équipe connaît-elle le growth loop qui relie acquisition, conversion et revenus ?",
          options: [
            ["Pas encore clairement", 0],
            ["Oui, mais il n'est pas suivi chaque semaine", 1],
            ["Oui, avec une métrique centrale et une routine", 2],
          ],
        },
        {
          moduleId: "offer",
          category: "Offre",
          q: "Ton message explique-t-il le résultat business avant de parler des outils ?",
          options: [
            ["Il reste très général", 0],
            ["Il est clair pour un segment", 1],
            ["Il cible un ICP précis avec preuve et objections", 2],
          ],
        },
        {
          moduleId: "content",
          category: "Contenu",
          q: "As-tu un système régulier pour produire, recycler et valider ton contenu ?",
          options: [
            ["Je publie quand j'ai le temps", 0],
            ["J'ai un calendrier mais peu de réutilisation", 1],
            ["J'ai un workflow complet avec IA et validation humaine", 2],
          ],
        },
        {
          moduleId: "seo",
          category: "SEO/GEO",
          q: "Tes pages répondent-elles aux questions que tes clients posent sur Google et les moteurs IA ?",
          options: [
            ["Pas vraiment", 0],
            ["Quelques pages répondent aux intentions principales", 1],
            ["Oui, avec FAQ, preuves, entités et maillage interne", 2],
          ],
        },
        {
          moduleId: "paid-ugc",
          category: "Paid + UGC",
          q: "Testes-tu des angles créatifs UGC avec une lecture claire des premiers signaux ?",
          options: [
            ["Non, les créas sont décidées au feeling", 0],
            ["Oui, mais les apprentissages restent dispersés", 1],
            ["Oui, chaque test a hook, objection, KPI et décision", 2],
          ],
        },
        {
          moduleId: "automation",
          category: "Automation",
          q: "Les leads entrants sont-ils suivis automatiquement sans perdre la personnalisation ?",
          options: [
            ["Non, tout est manuel", 0],
            ["Une partie est automatisée", 1],
            ["Oui, formulaire, CRM, relance et dashboard sont connectés", 2],
          ],
        },
        {
          moduleId: "automation",
          category: "Analytics",
          q: "Sais-tu chaque semaine quel canal apporte le meilleur signal business ?",
          options: [
            ["Je regarde surtout les impressions ou les likes", 0],
            ["Je suis quelques métriques mais sans routine fixe", 1],
            ["Oui, trafic, leads, coût, conversion et revenu sont visibles", 2],
          ],
        },
        {
          moduleId: "foundations",
          category: "Équipe",
          q: "Ton équipe sait-elle utiliser l'IA avec des prompts et règles qualité partagés ?",
          options: [
            ["Chacun teste de son côté", 0],
            ["Nous avons quelques prompts utiles", 1],
            ["Nous avons playbooks, prompts et critères de validation", 2],
          ],
        },
      ],
    },
    outcomes: [
      ["01", "Growth Loop clair", "Un schéma simple qui relie audience, offre, acquisition, conversion et revenus."],
      ["02", "Message qui vend", "Une promesse orientée résultat avec ICP, preuves et réponses aux objections."],
      ["03", "Content engine IA", "Un workflow pour produire posts, Reels, UGC scripts, FAQ et contenus SEO sans perdre la qualité."],
      ["04", "Architecture SEO/GEO", "Une liste de pages, questions, entités et liens internes pour mieux apparaître dans Google et les moteurs IA."],
      ["05", "Tests paid + UGC", "Des hooks, angles créatifs et KPI pour apprendre plus vite sans gaspiller le budget."],
      ["06", "Dashboard minimum", "Une routine hebdomadaire pour suivre le signal : trafic, leads, conversion, coût et revenu."],
    ],
    faq: [
      {
        q: "Le Growth Marketing with AI Bootcamp est-il vraiment gratuit ?",
        a: "Oui. Le bootcamp est accessible gratuitement, sans compte obligatoire. La progression, les quiz et les checkpoints sont sauvegardés localement dans ton navigateur.",
      },
      {
        q: "À qui s'adresse cette formation marketing IA ?",
        a: "Elle s'adresse aux entrepreneurs, PME, startups et équipes marketing qui veulent utiliser l'IA pour améliorer acquisition, contenu, SEO/GEO, publicités, UGC, automatisation et analytics.",
      },
      {
        q: "Combien de temps faut-il pour terminer le bootcamp ?",
        a: "Le parcours complet prend environ 4 à 5 heures. Chaque module peut être suivi séparément avec ses propres checkpoints et questions de validation.",
      },
      {
        q: "Est-ce adapté aux entreprises en Tunisie et dans la région MENA ?",
        a: "Oui. Les exemples et workflows sont pensés pour des PME, startups et marques en Tunisie, Afrique du Nord et MENA, avec une logique orientée conversion et exécution.",
      },
      {
        q: "Puis-je appliquer les exercices à mon site WordPress ou e-commerce ?",
        a: "Oui. Les prompts et checkpoints peuvent être utilisés pour un site WordPress, une boutique e-commerce, une landing page, une stratégie social media ou un système de génération de leads.",
      },
    ],
  },
  en: {
    dir: "ltr",
    meta: {
      title: "Free Growth Marketing with AI Bootcamp | Ahmed Zakraoui",
      description:
        "Free Growth Marketing with AI bootcamp by Ahmed Zakraoui with practical modules, quizzes, checkpoints, prompts, and resources.",
    },
    ui: {
      brandSmall: "AI Marketing Systems",
      navHome: "Home",
      navServices: "Services",
      navWork: "Work",
      navBootcamp: "Bootcamp",
      navContact: "Contact",
      heroKicker: "Free bootcamp - quizzes and checkpoints",
      heroTitle: "Growth Marketing with AI",
      heroText:
        "A practical path to turn AI into an acquisition system: strategy, content, SEO/GEO, ads, UGC, automation, and measurement.",
      heroPrimary: "Take the free diagnostic",
      heroSecondary: "Download the workbook",
      statModules: "practical modules",
      statQuiz: "quiz questions",
      statChecks: "action checkpoints",
      heroPathLabel: "Recommended path",
      heroPathTitle: "Start by diagnosing your growth engine.",
      heroPathText: "Each module ends with a quiz, checkpoints, and a ready-to-use prompt.",
      searchLabel: "Find a module",
      searchPlaceholder: "Search...",
      progressLabel: "Progress",
      progressModules: "Modules",
      progressChecks: "Checks",
      progressQuiz: "Quiz",
      resetProgress: "Reset",
      resetConfirm: "Reset all your progress?",
      tabCourse: "Course",
      tabQuiz: "Quiz",
      tabResources: "Resources",
      seoEyebrow: "SEO-ready program",
      seoTitle: "A free bootcamp to learn growth marketing with AI.",
      seoText:
        "This program helps entrepreneurs, SMEs, and startups in Tunisia, North Africa, and MENA build a more visible, measurable, conversion-focused marketing system.",
      faqEyebrow: "FAQ",
      faqTitle: "Before you start the bootcamp.",
      finalTitle: "Want to apply it faster to your business?",
      finalText: "The bootcamp is free. If you want speed, we can turn these checkpoints into an action plan for your company.",
      finalCta: "Launch my AI system",
      schemaLevel: "Beginner to intermediate",
      schemaPrerequisites: "Have a project, offer, or website to improve.",
      moduleLabel: "Module",
      duration: "Duration",
      moduleProgress: "Module progress",
      moduleInProgress: "In progress",
      moduleComplete: "Validated",
      checkpointMini: "checks",
      quizMini: "quiz",
      courseFlowHint: "Once the module is clear, validate it with the quiz.",
      courseNext: "Go to quiz",
      courseResources: "View resources",
      nextModule: "Next module",
      finishBootcamp: "Finish bootcamp",
      stickyLabel: "Bootcamp",
      stickyCta: "Continue",
      stickyComplete: "Certificate ready",
      diagnosticEyebrow: "AI Growth Score",
      diagnosticTitle: "Diagnose your marketing system before you start.",
      diagnosticText: "Answer 8 quick questions to find where your growth engine is blocked and which module to follow first.",
      diagnosticStep: "Question",
      diagnosticOf: "of",
      diagnosticScore: "AI Growth Score",
      diagnosticReset: "Retake diagnostic",
      diagnosticStartCourse: "Start the recommended module",
      diagnosticContact: "Turn this into an action plan",
      outcomesEyebrow: "Expected outcomes",
      outcomesTitle: "What you build during the bootcamp.",
      outcomesText: "No decorative theory: every step produces an asset you can use to sell, publish, measure, or automate.",
      assetsEyebrow: "Free tools",
      assetsTitle: "Workbook, certificate, and resources to move into action.",
      assetsText: "The bootcamp becomes more useful when you keep track of your decisions, scores, and next tests.",
      workbookTitle: "AI Growth Workbook",
      workbookText: "A simple PDF to map your ICP, offer, prompts, SEO/GEO pages, UGC scripts, and dashboard.",
      workbookDownload: "Download the PDF workbook",
      certificateTitle: "Completion certificate",
      certificateLocked: "Validate all 6 modules, checkpoints, and quizzes to unlock your certificate.",
      certificateUnlocked: "Nice work. Your certificate is ready to share.",
      certificateNameLabel: "Display name",
      certificateNamePlaceholder: "Ahmed Zakraoui",
      certificateCopy: "Copy LinkedIn text",
      certificateShare: "Share on LinkedIn",
      certificateFallbackName: "Participant",
      certificateAchievement: "completed Ahmed Zakraoui's free Growth Marketing with AI Bootcamp.",
      certificateIssued: "Certificate generated locally - free - AhmedZakraoui.com",
      lessons: "Lessons",
      promptTitle: "Workshop prompt",
      copyPrompt: "Copy prompt",
      copied: "Copied",
      checkpoints: "Checkpoints",
      quizIntro: "Answer the quiz to validate this module.",
      quizSubmit: "Validate answers",
      quizRetry: "Retake quiz",
      quizMissing: "Answer every question before validating.",
      quizResult: "Score: {score}/{total}.",
      resourcesIntro: "Fast templates to apply the module today.",
      noResult: "No module found.",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },
    modules: [],
    resources: [],
    faq: [
      {
        q: "Is the Growth Marketing with AI Bootcamp really free?",
        a: "Yes. The bootcamp is free to access with no mandatory account. Progress, quizzes, and checkpoints are saved locally in your browser.",
      },
      {
        q: "Who is this AI marketing training for?",
        a: "It is for entrepreneurs, SMEs, startups, and marketing teams that want to use AI to improve acquisition, content, SEO/GEO, ads, UGC, automation, and analytics.",
      },
      {
        q: "How long does the bootcamp take?",
        a: "The full path takes around 4 to 5 hours. Each module can be completed separately with its own checkpoints and validation questions.",
      },
      {
        q: "Is it adapted to Tunisia and the MENA region?",
        a: "Yes. The examples and workflows are designed for SMEs, startups, and brands in Tunisia, North Africa, and MENA, with a focus on conversion and execution.",
      },
      {
        q: "Can I apply the exercises to WordPress or e-commerce?",
        a: "Yes. The prompts and checkpoints can be used for a WordPress site, e-commerce store, landing page, social media strategy, or lead generation system.",
      },
    ],
  },
  ar: {
    dir: "rtl",
    meta: {
      title: "بوتكامب مجاني Growth Marketing with AI | أحمد زكراوي",
      description:
        "بوتكامب مجاني لتعلم التسويق والنمو بالذكاء الاصطناعي مع وحدات عملية، اختبارات، نقاط تحقق، Prompts وموارد.",
    },
    ui: {
      brandSmall: "أنظمة تسويق بالذكاء الاصطناعي",
      navHome: "الرئيسية",
      navServices: "الخدمات",
      navWork: "المشاريع",
      navBootcamp: "البوتكامب",
      navContact: "التواصل",
      heroKicker: "بوتكامب مجاني - اختبارات ونقاط تحقق",
      heroTitle: "Growth Marketing with AI",
      heroText:
        "مسار عملي لتحويل الذكاء الاصطناعي إلى نظام اكتساب: استراتيجية، محتوى، SEO/GEO، إعلانات، UGC، أتمتة وقياس.",
      heroPrimary: "ابدأ التشخيص المجاني",
      heroSecondary: "حمّل الWorkbook",
      statModules: "وحدات عملية",
      statQuiz: "أسئلة اختبار",
      statChecks: "نقاط تحقق",
      heroPathLabel: "المسار المقترح",
      heroPathTitle: "ابدأ بتشخيص محرك النمو.",
      heroPathText: "كل وحدة تنتهي باختبار، نقاط تحقق وPrompt جاهز للاستخدام.",
      searchLabel: "ابحث عن وحدة",
      searchPlaceholder: "بحث...",
      progressLabel: "التقدم",
      progressModules: "الوحدات",
      progressChecks: "النقاط",
      progressQuiz: "الاختبار",
      resetProgress: "إعادة",
      resetConfirm: "هل تريد حذف كل التقدم؟",
      tabCourse: "الدروس",
      tabQuiz: "الاختبار",
      tabResources: "الموارد",
      seoEyebrow: "برنامج جاهز للسيو",
      seoTitle: "بوتكامب مجاني لتعلم Growth Marketing بالذكاء الاصطناعي.",
      seoText:
        "يساعد هذا البرنامج رواد الأعمال، الشركات الصغيرة والمتوسطة والستارتابس في تونس، شمال أفريقيا ومنطقة MENA على بناء نظام تسويق أوضح، قابل للقياس وموجه للتحويل.",
      faqEyebrow: "أسئلة متكررة",
      faqTitle: "قبل أن تبدأ البوتكامب.",
      finalTitle: "تريد تطبيقه أسرع على مشروعك؟",
      finalText: "البوتكامب مجاني. وإذا أردت السرعة، يمكننا تحويل هذه النقاط إلى خطة تنفيذ لشركتك.",
      finalCta: "أطلق نظامي بالذكاء الاصطناعي",
      schemaLevel: "مبتدئ إلى متوسط",
      schemaPrerequisites: "امتلاك مشروع، عرض أو موقع تريد تحسينه.",
      moduleLabel: "الوحدة",
      duration: "المدة",
      moduleProgress: "تقدم الوحدة",
      moduleInProgress: "قيد الإنجاز",
      moduleComplete: "تم التحقق",
      checkpointMini: "نقاط",
      quizMini: "اختبار",
      courseFlowHint: "عندما تصبح الوحدة واضحة، ثبّتها بالاختبار.",
      courseNext: "انتقل إلى الاختبار",
      courseResources: "شاهد الموارد",
      nextModule: "الوحدة التالية",
      finishBootcamp: "إنهاء البوتكامب",
      stickyLabel: "البوتكامب",
      stickyCta: "واصل",
      stickyComplete: "الشهادة جاهزة",
      diagnosticEyebrow: "AI Growth Score",
      diagnosticTitle: "شخّص نظام التسويق قبل أن تبدأ.",
      diagnosticText: "أجب عن 8 أسئلة سريعة لتعرف أين يتعطل محرك النمو وأي وحدة تبدأ بها.",
      diagnosticStep: "السؤال",
      diagnosticOf: "من",
      diagnosticScore: "AI Growth Score",
      diagnosticReset: "إعادة التشخيص",
      diagnosticStartCourse: "ابدأ الوحدة المقترحة",
      diagnosticContact: "حوّل النتيجة إلى خطة عمل",
      outcomesEyebrow: "النتائج المتوقعة",
      outcomesTitle: "ما الذي ستبنيه أثناء البوتكامب.",
      outcomesText: "ليست نظرية للعرض فقط: كل خطوة تنتج أصلا عمليا تستعمله للبيع، النشر، القياس أو الأتمتة.",
      assetsEyebrow: "أدوات مجانية",
      assetsTitle: "Workbook، شهادة وموارد للانتقال إلى التنفيذ.",
      assetsText: "يصبح البوتكامب أكثر فائدة عندما تحتفظ بقراراتك، نتائجك والاختبارات القادمة.",
      workbookTitle: "AI Growth Workbook",
      workbookText: "PDF بسيط لتدوين ICP، العرض، الPrompts، صفحات SEO/GEO، سكريبتات UGC والDashboard.",
      workbookDownload: "تحميل الWorkbook PDF",
      certificateTitle: "شهادة الإكمال",
      certificateLocked: "أكمل الوحدات الست، نقاط التحقق والاختبارات لفتح الشهادة.",
      certificateUnlocked: "أحسنت. شهادتك جاهزة للمشاركة.",
      certificateNameLabel: "الاسم المعروض",
      certificateNamePlaceholder: "Ahmed Zakraoui",
      certificateCopy: "نسخ نص LinkedIn",
      certificateShare: "مشاركة على LinkedIn",
      certificateFallbackName: "مشارك",
      certificateAchievement: "أكمل بوتكامب Growth Marketing with AI المجاني من أحمد زكراوي.",
      certificateIssued: "شهادة منشأة محليا - مجانية - AhmedZakraoui.com",
      lessons: "الدروس",
      promptTitle: "Prompt عملي",
      copyPrompt: "نسخ الPrompt",
      copied: "تم النسخ",
      checkpoints: "نقاط التحقق",
      quizIntro: "أجب عن الاختبار لتأكيد هذه الوحدة.",
      quizSubmit: "تأكيد الإجابات",
      quizRetry: "إعادة الاختبار",
      quizMissing: "أجب عن كل الأسئلة قبل التأكيد.",
      quizResult: "النتيجة: {score}/{total}.",
      resourcesIntro: "قوالب سريعة لتطبيق الوحدة اليوم.",
      noResult: "لم يتم العثور على وحدة.",
      menuOpen: "فتح القائمة",
      menuClose: "إغلاق القائمة",
    },
    modules: [],
    resources: [],
    faq: [
      {
        q: "هل بوتكامب Growth Marketing with AI مجاني فعلا؟",
        a: "نعم. البوتكامب مجاني ويمكن الدخول إليه بدون حساب إجباري. يتم حفظ التقدم، الاختبارات ونقاط التحقق محليا في المتصفح.",
      },
      {
        q: "لمن تناسب هذه الدورة في التسويق بالذكاء الاصطناعي؟",
        a: "تناسب رواد الأعمال، الشركات الصغيرة والمتوسطة، الستارتابس وفرق التسويق التي تريد تحسين الاكتساب، المحتوى، SEO/GEO، الإعلانات، UGC، الأتمتة والتحليلات.",
      },
      {
        q: "كم يستغرق إنهاء البوتكامب؟",
        a: "يمكن إنهاء المسار الكامل في حوالي 4 إلى 5 ساعات. كل وحدة يمكن متابعتها وحدها مع نقاط تحقق وأسئلة اختبار.",
      },
      {
        q: "هل المحتوى مناسب لتونس ومنطقة MENA؟",
        a: "نعم. الأمثلة والWorkflows مصممة للشركات في تونس، شمال أفريقيا ومنطقة MENA، مع تركيز على التحويل والتنفيذ.",
      },
      {
        q: "هل يمكن تطبيق التمارين على WordPress أو e-commerce؟",
        a: "نعم. يمكن استخدام الPrompts ونقاط التحقق لموقع WordPress، متجر e-commerce، landing page، استراتيجية social media أو نظام lead generation.",
      },
    ],
  },
};

bootcampCopy.en.modules = bootcampCopy.fr.modules.map((module) => ({
  ...module,
  title:
    {
      foundations: "Growth + AI foundations",
      offer: "Offer, ICP and positioning",
      content: "AI content engine",
      seo: "SEO/GEO and AI visibility",
      "paid-ugc": "Paid social + UGC",
      automation: "Automation, CRM and analytics",
    }[module.id] || module.title,
  short:
    {
      foundations: "Understand the system before the tools.",
      offer: "Make it clear who you help and why.",
      content: "Produce better, faster, and more consistently.",
      seo: "Get found by Google and AI engines.",
      "paid-ugc": "Test creative angles that sell.",
      automation: "Run the system without losing the signal.",
    }[module.id] || module.short,
}));

bootcampCopy.en.resources = bootcampCopy.fr.resources.map((resource) => ({ ...resource }));
bootcampCopy.ar.modules = bootcampCopy.fr.modules.map((module) => ({
  ...module,
  title:
    {
      foundations: "أساسيات النمو والذكاء الاصطناعي",
      offer: "العرض، العميل المثالي والتموقع",
      content: "نظام محتوى بالذكاء الاصطناعي",
      seo: "SEO/GEO والظهور في محركات الذكاء الاصطناعي",
      "paid-ugc": "إعلانات ممولة + UGC",
      automation: "أتمتة، CRM وتحليلات",
    }[module.id] || module.title,
  short:
    {
      foundations: "افهم النظام قبل الأدوات.",
      offer: "وضح من تساعد ولماذا.",
      content: "أنشئ محتوى أفضل وبوتيرة ثابتة.",
      seo: "اجعل العملاء يجدونك عبر Google ومحركات AI.",
      "paid-ugc": "اختبر زوايا إبداعية تبيع.",
      automation: "قد النظام بدون فقدان الإشارة.",
    }[module.id] || module.short,
}));
bootcampCopy.ar.resources = bootcampCopy.fr.resources.map((resource) => ({ ...resource }));

const localizedModules = {
  en: {
    foundations: {
      objective: "Identify your growth engine and the points where AI can speed up the work without creating chaos.",
      lessons: [
        "Define the growth loop: acquisition, activation, conversion, retention.",
        "Separate tasks to automate from decisions that need better thinking.",
        "Choose a simple North Star Metric to measure progress.",
      ],
      prompt:
        "Act as a growth consultant. Ask me 7 questions to map my business, offer, current channels, bottlenecks, and goals. Then propose a clear 5-step growth loop.",
      checkpoints: [
        "I defined my priority business objective.",
        "I identified my 3 biggest marketing bottlenecks.",
        "I chose one workflow where AI can save time this week.",
      ],
      quiz: [
        {
          q: "Why start with the growth loop?",
          options: ["To choose tools before strategy.", "To connect acquisition, conversion, and revenue.", "To publish more content without measurement."],
          answer: 1,
          explanation: "The growth loop clarifies how each action feeds measurable growth.",
        },
        {
          q: "A good North Star Metric should be...",
          options: ["Visible only once a year.", "Simple, tracked often, and linked to value.", "Based only on likes."],
          answer: 1,
          explanation: "It should guide regular decisions, not only decorate a report.",
        },
      ],
    },
    offer: {
      objective: "Turn a vague offer into a clear message for one segment, with benefits, proof, and objection handling.",
      lessons: [
        "Define the ICP: context, pain, urgency, and budget.",
        "Write a result-driven promise instead of a tool list.",
        "Build an objections, proof, and response matrix.",
      ],
      prompt:
        "Analyze my offer as a B2B strategist. Give me 3 possible ICPs, their pains, objections, required proof, and a one-sentence value proposition for each segment.",
      checkpoints: [
        "I chose one main ICP for this month.",
        "I wrote a clear one-sentence promise.",
        "I prepared 5 customer objections with answers.",
      ],
      quiz: [
        {
          q: "Which message converts best?",
          options: ["A complete list of tools.", "A clear promise linked to a result.", "An abstract slogan without proof."],
          answer: 1,
          explanation: "The prospect buys concrete progress, not a pile of tools.",
        },
        {
          q: "The ICP mainly helps you...",
          options: ["Avoid weak messaging.", "Reduce the marketing budget to zero.", "Make the page longer."],
          answer: 0,
          explanation: "A clear ICP helps choose the right angles, channels, and proof.",
        },
      ],
    },
    content: {
      objective: "Create a weekly content system: ideas, briefs, posts, short videos, repurposing, and quality control.",
      lessons: [
        "Build 4 content pillars connected to the customer journey.",
        "Create an AI workflow: research, angle, draft, edit, publish.",
        "Repurpose one idea into a post, carousel, reel, newsletter, and UGC script.",
      ],
      prompt:
        "Based on my offer and ICP, generate a 14-day content calendar with 4 pillars, hooks, formats, CTAs, and one repurposing idea for every content piece.",
      checkpoints: [
        "I defined my 4 content pillars.",
        "I created 10 hooks based on pain or benefit.",
        "I turned one idea into 3 different formats.",
      ],
      quiz: [
        {
          q: "A good content engine optimizes...",
          options: ["Volume only.", "Consistency, quality, and business connection.", "Trends only."],
          answer: 1,
          explanation: "Cadence matters, but content must support the offer and conversion.",
        },
        {
          q: "The best use of AI in content is...",
          options: ["Replacing all human judgment.", "Speeding up drafts while keeping strategic editing.", "Publishing without review."],
          answer: 1,
          explanation: "AI speeds up the system, but editorial direction remains human.",
        },
      ],
    },
    seo: {
      objective: "Build a visibility architecture that answers real customer questions on Google, ChatGPT, and AI engines.",
      lessons: [
        "Find informational, commercial, and local search queries.",
        "Create pages that clearly answer search intent.",
        "Structure FAQs, proof, entities, and internal links for GEO.",
      ],
      prompt:
        "Act as an SEO/GEO expert. Give me a content architecture for my offer with keywords, frequent questions, priority pages, entities to mention, and an internal linking plan.",
      checkpoints: [
        "I listed 20 questions customers ask before buying.",
        "I chose 5 priority pages or articles.",
        "I added a clear FAQ to one strategic page.",
      ],
      quiz: [
        {
          q: "GEO aims to improve...",
          options: ["Visibility in AI-generated answers.", "Button color.", "Only image size."],
          answer: 0,
          explanation: "GEO helps AI engines understand and cite your expertise.",
        },
        {
          q: "A strong SEO page must answer...",
          options: ["One clear intent.", "Every topic at once.", "No precise question."],
          answer: 0,
          explanation: "Each page needs a clear search intent.",
        },
      ],
    },
    "paid-ugc": {
      objective: "Build smarter ad tests with hooks, UGC scripts, objection angles, and faster learning.",
      lessons: [
        "Turn pains and objections into ad angles.",
        "Write natural UGC scripts: hook, problem, proof, CTA.",
        "Read early signals: CTR, CPA, conversion, comments.",
      ],
      prompt:
        "Create 12 ad angles for my offer: 4 pain-led, 4 desire-led, and 4 proof-led. For each angle, propose a 20-second UGC script and a CTA.",
      checkpoints: [
        "I created 6 testable video hooks.",
        "I prepared 3 short UGC scripts.",
        "I defined the signal that decides if I keep or stop a creative.",
      ],
      quiz: [
        {
          q: "A good paid social test first compares...",
          options: ["Clear creative angles.", "The logo font.", "Ten objectives at once."],
          answer: 0,
          explanation: "Angles reveal which message attracts and converts best.",
        },
        {
          q: "UGC is useful because it brings...",
          options: ["A natural and credible tone.", "More legal text.", "Less social proof."],
          answer: 0,
          explanation: "UGC makes the brand feel closer to a human conversation.",
        },
      ],
    },
    automation: {
      objective: "Set up a simple routine: lead capture, nurturing, reporting, and continuous improvement.",
      lessons: [
        "Map the lead stages: source, need, urgency, next action.",
        "Automate follow-ups without losing personalization.",
        "Create a minimum dashboard: traffic, leads, conversion, cost, revenue.",
      ],
      prompt:
        "Design my minimum marketing system: forms, CRM, emails, WhatsApp, dashboard, team responsibilities, and weekly optimization routine.",
      checkpoints: [
        "I defined the essential fields for my lead form.",
        "I wrote a 3-message follow-up sequence.",
        "I chose 5 metrics to review weekly.",
      ],
      quiz: [
        {
          q: "A useful automation should...",
          options: ["Remove all human relationship.", "Clarify the next action and save time.", "Send the same message everywhere."],
          answer: 1,
          explanation: "The goal is to make follow-up more reliable, not colder.",
        },
        {
          q: "A minimum dashboard should show...",
          options: ["The signal needed to decide.", "Every possible metric.", "Only impressions."],
          answer: 0,
          explanation: "A good dashboard helps decide what to improve this week.",
        },
      ],
    },
  },
  ar: {
    foundations: {
      objective: "حدد محرك النمو لديك والنقاط التي يمكن للذكاء الاصطناعي تسريعها بدون خلق فوضى.",
      lessons: [
        "حدد حلقة النمو: الاكتساب، التفعيل، التحويل، والاحتفاظ.",
        "افصل المهام التي يمكن أتمتتها عن القرارات التي تحتاج تفكيرا أفضل.",
        "اختر مؤشرا رئيسيا بسيطا لقياس التقدم.",
      ],
      prompt:
        "تصرف كاستشاري Growth. اسألني 7 أسئلة لفهم مشروعي، العرض، القنوات الحالية، العراقيل والأهداف، ثم اقترح حلقة نمو واضحة من 5 خطوات.",
      checkpoints: [
        "حددت الهدف التجاري الأول لهذا الشهر.",
        "حددت أكبر 3 عراقيل في التسويق.",
        "اخترت Workflow يمكن للذكاء الاصطناعي تسريعه هذا الأسبوع.",
      ],
      quiz: [
        {
          q: "لماذا نبدأ بحلقة النمو؟",
          options: ["لاختيار الأدوات قبل الاستراتيجية.", "لربط الاكتساب والتحويل والإيرادات.", "لنشر محتوى أكثر بدون قياس."],
          answer: 1,
          explanation: "حلقة النمو توضح كيف تخدم كل خطوة نموا قابلا للقياس.",
        },
        {
          q: "المؤشر الرئيسي الجيد يجب أن يكون...",
          options: ["يظهر مرة في السنة فقط.", "بسيطا، متابعا باستمرار ومرتبطا بالقيمة.", "مبنيا فقط على الإعجابات."],
          answer: 1,
          explanation: "يجب أن يساعدك على اتخاذ قرارات منتظمة، لا أن يكون رقما للعرض فقط.",
        },
      ],
    },
    offer: {
      objective: "حوّل عرضا غير واضح إلى رسالة دقيقة لفئة محددة، مع الفوائد، الإثباتات ومعالجة الاعتراضات.",
      lessons: [
        "حدد العميل المثالي: السياق، الألم، الاستعجال والميزانية.",
        "اكتب وعدا مرتبطا بالنتيجة بدل قائمة أدوات.",
        "ابنِ مصفوفة اعتراضات، إثباتات وردود.",
      ],
      prompt:
        "حلل عرضي كخبير B2B. أعطني 3 شرائح ICP ممكنة، آلامها، اعتراضاتها، الإثبات المطلوب، وقيمة العرض في جملة واحدة لكل شريحة.",
      checkpoints: [
        "اخترت ICP رئيسيا لهذا الشهر.",
        "كتبت وعدا واضحا في جملة واحدة.",
        "جهزت 5 اعتراضات عملاء مع الردود.",
      ],
      quiz: [
        {
          q: "أي رسالة تحول أفضل؟",
          options: ["قائمة كاملة بالأدوات.", "وعد واضح مرتبط بنتيجة.", "شعار عام بدون دليل."],
          answer: 1,
          explanation: "العميل يشتري تقدما واضحا، وليس قائمة أدوات.",
        },
        {
          q: "الICP يساعدك أساسا على...",
          options: ["تجنب الرسائل الضعيفة.", "إلغاء ميزانية التسويق.", "إطالة الصفحة فقط."],
          answer: 0,
          explanation: "عندما تكون الشريحة واضحة، تصبح الزوايا والقنوات والإثباتات أوضح.",
        },
      ],
    },
    content: {
      objective: "أنشئ نظام محتوى أسبوعي: أفكار، Briefs، منشورات، فيديوهات قصيرة، إعادة استخدام ومراقبة جودة.",
      lessons: [
        "ابنِ 4 محاور محتوى مرتبطة برحلة العميل.",
        "صمم Workflow بالذكاء الاصطناعي: بحث، زاوية، مسودة، تحرير، نشر.",
        "حوّل فكرة واحدة إلى منشور، كاروسيل، Reel، Newsletter وسكريبت UGC.",
      ],
      prompt:
        "اعتمادا على عرضي وICP، أنشئ رزنامة محتوى لمدة 14 يوما مع المحاور، Hooks، الصيغ، CTA وفكرة إعادة استخدام لكل قطعة محتوى.",
      checkpoints: [
        "حددت 4 محاور محتوى.",
        "كتبت 10 Hooks مرتبطة بالألم أو الفائدة.",
        "حوّلت فكرة واحدة إلى 3 صيغ مختلفة.",
      ],
      quiz: [
        {
          q: "نظام المحتوى الجيد يحسن...",
          options: ["الكمية فقط.", "الاستمرارية، الجودة والربط بالبيزنس.", "الترندات فقط."],
          answer: 1,
          explanation: "الاستمرارية مهمة، لكن المحتوى يجب أن يخدم العرض والتحويل.",
        },
        {
          q: "أفضل استخدام للذكاء الاصطناعي في المحتوى هو...",
          options: ["تعويض كل الحكم البشري.", "تسريع المسودات مع تحرير استراتيجي.", "النشر بدون مراجعة."],
          answer: 1,
          explanation: "الذكاء الاصطناعي يسرّع النظام، لكن الاتجاه التحريري يبقى بشريا.",
        },
      ],
    },
    seo: {
      objective: "ابنِ هندسة ظهور تجيب عن أسئلة العملاء في Google وChatGPT ومحركات الذكاء الاصطناعي.",
      lessons: [
        "استخرج الكلمات والطلبات المعلوماتية، التجارية والمحلية.",
        "أنشئ صفحات تجيب بوضوح عن نية البحث.",
        "نظم FAQ، الإثباتات، الكيانات والروابط الداخلية لخدمة GEO.",
      ],
      prompt:
        "تصرف كخبير SEO/GEO. أعطني هندسة محتوى لعرضي تشمل الكلمات، الأسئلة المتكررة، الصفحات ذات الأولوية، الكيانات التي يجب ذكرها وخطة روابط داخلية.",
      checkpoints: [
        "كتبت 20 سؤالا يطرحه العملاء قبل الشراء.",
        "اخترت 5 صفحات أو مقالات ذات أولوية.",
        "أضفت FAQ واضحا إلى صفحة استراتيجية.",
      ],
      quiz: [
        {
          q: "GEO يهدف إلى تحسين...",
          options: ["الظهور داخل إجابات الذكاء الاصطناعي.", "لون الأزرار.", "حجم الصور فقط."],
          answer: 0,
          explanation: "GEO يساعد محركات الذكاء الاصطناعي على فهم خبرتك والاستشهاد بها.",
        },
        {
          q: "صفحة SEO قوية يجب أن تجيب عن...",
          options: ["نية بحث واضحة.", "كل المواضيع في صفحة واحدة.", "لا شيء محدد."],
          answer: 0,
          explanation: "كل صفحة تحتاج نية بحث واضحة ومحددة.",
        },
      ],
    },
    "paid-ugc": {
      objective: "ابنِ اختبارات إعلانية أذكى باستخدام Hooks، سكريبتات UGC، زوايا اعتراض وتعلم سريع.",
      lessons: [
        "حوّل آلام واعتراضات العملاء إلى زوايا إعلانية.",
        "اكتب سكريبتات UGC طبيعية: Hook، مشكلة، إثبات، CTA.",
        "اقرأ الإشارات الأولى: CTR، CPA، التحويل والتعليقات.",
      ],
      prompt:
        "أنشئ 12 زاوية إعلانية لعرضي: 4 مبنية على الألم، 4 على الرغبة و4 على الإثبات. لكل زاوية، اقترح سكريبت UGC من 20 ثانية وCTA.",
      checkpoints: [
        "كتبت 6 Hooks فيديو قابلة للاختبار.",
        "حضرت 3 سكريبتات UGC قصيرة.",
        "حددت الإشارة التي تجعلني أواصل أو أوقف Creative.",
      ],
      quiz: [
        {
          q: "الاختبار الجيد في Paid Social يقارن أولا...",
          options: ["زوايا إبداعية واضحة.", "خط الشعار.", "10 أهداف في نفس الوقت."],
          answer: 0,
          explanation: "الزوايا تكشف أي رسالة تجذب وتحول أكثر.",
        },
        {
          q: "UGC مفيد لأنه يعطي...",
          options: ["نبرة طبيعية وموثوقة.", "نصوص قانونية أكثر.", "دليلا اجتماعيا أقل."],
          answer: 0,
          explanation: "UGC يجعل العلامة أقرب إلى محادثة إنسانية موثوقة.",
        },
      ],
    },
    automation: {
      objective: "ضع روتينا بسيطا: جمع leads، متابعة، Reporting وتحسين مستمر.",
      lessons: [
        "ارسم مراحل الLead: المصدر، الحاجة، الاستعجال والخطوة التالية.",
        "أتمت المتابعة بدون فقدان التخصيص.",
        "أنشئ Dashboard بسيطا: ترافيك، leads، تحويل، تكلفة وإيراد.",
      ],
      prompt:
        "صمم نظامي التسويقي الأدنى: Forms، CRM، Emails، WhatsApp، Dashboard، مسؤوليات الفريق وروتين تحسين أسبوعي.",
      checkpoints: [
        "حددت الحقول الأساسية في Form الLead.",
        "كتبت سلسلة متابعة من 3 رسائل.",
        "اخترت 5 مؤشرات أراجعها كل أسبوع.",
      ],
      quiz: [
        {
          q: "الأتمتة المفيدة يجب أن...",
          options: ["تلغي العلاقة الإنسانية.", "توضح الخطوة التالية وتوفر الوقت.", "ترسل نفس الرسالة في كل مكان."],
          answer: 1,
          explanation: "الهدف هو جعل المتابعة أكثر انتظاما، لا أكثر برودة.",
        },
        {
          q: "الDashboard الأدنى يجب أن يظهر...",
          options: ["الإشارة التي تساعد على القرار.", "كل الأرقام الممكنة.", "Impressions فقط."],
          answer: 0,
          explanation: "Dashboard الجيد يساعدك على تحديد ما يجب تحسينه هذا الأسبوع.",
        },
      ],
    },
  },
};

Object.entries(localizedModules).forEach(([language, modules]) => {
  bootcampCopy[language].modules = bootcampCopy[language].modules.map((module) => ({
    ...module,
    ...(modules[module.id] || {}),
  }));
});

bootcampCopy.en.resources = [
  {
    type: "Canvas",
    title: "Growth Loop Canvas",
    text: "A 7-field summary: ICP, promise, channel, activation, conversion, retention, metric.",
    copy: "Growth Loop Canvas: ICP | Promise | Acquisition channel | Activation | Conversion | Retention | North Star Metric.",
  },
  {
    type: "Checklist",
    title: "SEO/GEO Checklist",
    text: "Customer questions, FAQ, entities, proof, internal links, and priority pages.",
    copy: "SEO/GEO Checklist: 20 customer questions, 5 priority pages, FAQ, entities, proof, internal linking.",
  },
  {
    type: "Prompt",
    title: "14-day Content Sprint",
    text: "A base to generate a conversion-driven calendar, not just visibility.",
    copy: "Create a 14-day content sprint with pillar, hook, format, CTA, objective, and repurposing idea.",
  },
  {
    type: "Dashboard",
    title: "Minimum dashboard",
    text: "The 5 metrics that keep the system readable: traffic, leads, conversion, cost, revenue.",
    copy: "Minimum dashboard: qualified traffic, leads, conversion rate, cost per lead, attributed revenue.",
  },
];

bootcampCopy.en.diagnostic = {
  levels: [
    {
      min: 0,
      title: "Manual mode",
      text: "Your marketing still depends on isolated effort. Start by clarifying the loop, the offer, and the next workflows to automate.",
    },
    {
      min: 46,
      title: "System under construction",
      text: "You already have useful foundations. The biggest gain now comes from measurement, repetition, and reusable assets.",
    },
    {
      min: 76,
      title: "Growth engine ready to scale",
      text: "Your system is readable. Use the bootcamp to strengthen creative testing, SEO/GEO, and improvement routines.",
    },
  ],
  questions: [
    {
      moduleId: "foundations",
      category: "Strategy",
      q: "Does your team know the growth loop connecting acquisition, conversion, and revenue?",
      options: [["Not clearly yet", 0], ["Yes, but it is not reviewed weekly", 1], ["Yes, with one core metric and a routine", 2]],
    },
    {
      moduleId: "offer",
      category: "Offer",
      q: "Does your message explain the business outcome before listing tools?",
      options: [["It is still generic", 0], ["It is clear for one segment", 1], ["It targets one ICP with proof and objections", 2]],
    },
    {
      moduleId: "content",
      category: "Content",
      q: "Do you have a repeatable system to produce, repurpose, and validate content?",
      options: [["I publish when I have time", 0], ["I have a calendar but little repurposing", 1], ["I have a full AI workflow with human validation", 2]],
    },
    {
      moduleId: "seo",
      category: "SEO/GEO",
      q: "Do your pages answer the questions customers ask on Google and AI engines?",
      options: [["Not really", 0], ["Some pages answer core intent", 1], ["Yes, with FAQ, proof, entities, and internal links", 2]],
    },
    {
      moduleId: "paid-ugc",
      category: "Paid + UGC",
      q: "Do you test UGC creative angles with a clear read of early signals?",
      options: [["No, creatives are mostly intuition-led", 0], ["Yes, but learnings are scattered", 1], ["Yes, every test has hook, objection, KPI, and decision", 2]],
    },
    {
      moduleId: "automation",
      category: "Automation",
      q: "Are inbound leads followed up automatically without losing personalization?",
      options: [["No, everything is manual", 0], ["Part of it is automated", 1], ["Yes, form, CRM, follow-up, and dashboard are connected", 2]],
    },
    {
      moduleId: "automation",
      category: "Analytics",
      q: "Do you know every week which channel brings the strongest business signal?",
      options: [["I mostly watch impressions or likes", 0], ["I track some metrics without a fixed routine", 1], ["Yes, traffic, leads, cost, conversion, and revenue are visible", 2]],
    },
    {
      moduleId: "foundations",
      category: "Team",
      q: "Can your team use AI with shared prompts and quality rules?",
      options: [["Everyone experiments separately", 0], ["We have a few useful prompts", 1], ["We have playbooks, prompts, and validation criteria", 2]],
    },
  ],
};

bootcampCopy.en.outcomes = [
  ["01", "Clear growth loop", "A simple map connecting audience, offer, acquisition, conversion, and revenue."],
  ["02", "Message that sells", "A result-led promise with ICP, proof, and objection answers."],
  ["03", "AI content engine", "A workflow to produce posts, Reels, UGC scripts, FAQs, and SEO content without losing quality."],
  ["04", "SEO/GEO architecture", "A list of pages, questions, entities, and internal links to show up better in Google and AI engines."],
  ["05", "Paid + UGC tests", "Hooks, creative angles, and KPIs to learn faster without wasting budget."],
  ["06", "Minimum dashboard", "A weekly routine to track the signal: traffic, leads, conversion, cost, and revenue."],
];

bootcampCopy.ar.resources = [
  {
    type: "Canvas",
    title: "Growth Loop Canvas",
    text: "ملخص من 7 خانات: ICP، الوعد، القناة، التفعيل، التحويل، الاحتفاظ والمؤشر.",
    copy: "Growth Loop Canvas: ICP | الوعد | قناة الاكتساب | التفعيل | التحويل | الاحتفاظ | North Star Metric.",
  },
  {
    type: "Checklist",
    title: "Checklist SEO/GEO",
    text: "أسئلة العملاء، FAQ، الكيانات، الإثباتات، الروابط الداخلية والصفحات ذات الأولوية.",
    copy: "Checklist SEO/GEO: 20 سؤالا من العملاء، 5 صفحات أولوية، FAQ، كيانات، إثباتات وروابط داخلية.",
  },
  {
    type: "Prompt",
    title: "Content Sprint 14 يوم",
    text: "قاعدة لإنشاء رزنامة محتوى موجهة للتحويل وليس فقط الظهور.",
    copy: "أنشئ Content Sprint لمدة 14 يوما مع المحور، Hook، الصيغة، CTA، الهدف وفكرة إعادة استخدام.",
  },
  {
    type: "Dashboard",
    title: "Dashboard الأدنى",
    text: "5 مؤشرات تجعل النظام واضحا: ترافيك، leads، تحويل، تكلفة وإيراد.",
    copy: "Dashboard الأدنى: ترافيك مؤهل، leads، معدل التحويل، تكلفة الlead، الإيراد المنسوب.",
  },
];

bootcampCopy.ar.diagnostic = {
  levels: [
    {
      min: 0,
      title: "وضع يدوي",
      text: "التسويق ما زال يعتمد على مجهودات متفرقة. ابدأ بتوضيح حلقة النمو، العرض والWorkflows التي يجب أتمتتها.",
    },
    {
      min: 46,
      title: "نظام في طور البناء",
      text: "لديك أساس جيد. أكبر ربح الآن يأتي من القياس، التكرار وبناء أصول قابلة لإعادة الاستخدام.",
    },
    {
      min: 76,
      title: "محرك نمو جاهز للتوسع",
      text: "النظام واضح. استعمل البوتكامب لتقوية اختبارات الإعلانات، SEO/GEO وروتين التحسين.",
    },
  ],
  questions: [
    {
      moduleId: "foundations",
      category: "الاستراتيجية",
      q: "هل يعرف فريقك حلقة النمو التي تربط الاكتساب، التحويل والإيرادات؟",
      options: [["ليس بوضوح بعد", 0], ["نعم، لكنها لا تراجع أسبوعيا", 1], ["نعم، مع مؤشر رئيسي وروتين واضح", 2]],
    },
    {
      moduleId: "offer",
      category: "العرض",
      q: "هل تشرح رسالتك النتيجة التجارية قبل الحديث عن الأدوات؟",
      options: [["ما زالت عامة", 0], ["واضحة لشريحة واحدة", 1], ["تستهدف ICP واضحا مع إثبات واعتراضات", 2]],
    },
    {
      moduleId: "content",
      category: "المحتوى",
      q: "هل لديك نظام ثابت لإنتاج المحتوى، إعادة استخدامه والتحقق من جودته؟",
      options: [["أنشر عندما أجد الوقت", 0], ["لدي رزنامة لكن إعادة الاستخدام قليلة", 1], ["لدي Workflow كامل بالذكاء الاصطناعي ومراجعة بشرية", 2]],
    },
    {
      moduleId: "seo",
      category: "SEO/GEO",
      q: "هل تجيب صفحاتك عن أسئلة العملاء في Google ومحركات الذكاء الاصطناعي؟",
      options: [["ليس فعلا", 0], ["بعض الصفحات تجيب عن النوايا الرئيسية", 1], ["نعم، مع FAQ، إثباتات، كيانات وروابط داخلية", 2]],
    },
    {
      moduleId: "paid-ugc",
      category: "Paid + UGC",
      q: "هل تختبر زوايا UGC الإبداعية مع قراءة واضحة للإشارات الأولى؟",
      options: [["لا، الاختيارات غالبا بالحدس", 0], ["نعم، لكن التعلم متفرق", 1], ["نعم، كل اختبار لديه Hook، اعتراض، KPI وقرار", 2]],
    },
    {
      moduleId: "automation",
      category: "الأتمتة",
      q: "هل تتم متابعة الleads آليا بدون فقدان التخصيص؟",
      options: [["لا، كل شيء يدوي", 0], ["جزء منها مؤتمت", 1], ["نعم، Form وCRM ومتابعة وDashboard متصلون", 2]],
    },
    {
      moduleId: "automation",
      category: "Analytics",
      q: "هل تعرف كل أسبوع أي قناة تعطي أفضل إشارة تجارية؟",
      options: [["أراقب غالبا impressions أو likes", 0], ["أتابع بعض المؤشرات بدون روتين ثابت", 1], ["نعم، الترافيك، الleads، التكلفة، التحويل والإيراد واضحة", 2]],
    },
    {
      moduleId: "foundations",
      category: "الفريق",
      q: "هل يستطيع فريقك استعمال الذكاء الاصطناعي بPrompts وقواعد جودة مشتركة؟",
      options: [["كل شخص يجرب وحده", 0], ["لدينا بعض الPrompts المفيدة", 1], ["لدينا Playbooks، Prompts ومعايير تحقق", 2]],
    },
  ],
};

bootcampCopy.ar.outcomes = [
  ["01", "حلقة نمو واضحة", "خريطة بسيطة تربط الجمهور، العرض، الاكتساب، التحويل والإيرادات."],
  ["02", "رسالة تبيع", "وعد مبني على النتيجة مع ICP، إثباتات وردود على الاعتراضات."],
  ["03", "محرك محتوى بالذكاء الاصطناعي", "Workflow لإنتاج Posts، Reels، UGC scripts، FAQ ومحتوى SEO بدون فقدان الجودة."],
  ["04", "هندسة SEO/GEO", "قائمة صفحات، أسئلة، كيانات وروابط داخلية للظهور أفضل في Google ومحركات AI."],
  ["05", "اختبارات Paid + UGC", "Hooks، زوايا إبداعية وKPIs للتعلم أسرع بدون إهدار الميزانية."],
  ["06", "Dashboard أدنى", "روتين أسبوعي لمتابعة الإشارة: ترافيك، leads، تحويل، تكلفة وإيراد."],
];

const menuButton = document.querySelector("#menuButton");
const nav = document.querySelector("#nav");
const header = document.querySelector("#siteHeader");
const progress = document.querySelector("#scrollProgress");
const moduleList = document.querySelector("#moduleList");
const panel = document.querySelector("#bootcampPanel");
const moduleSearch = document.querySelector("#moduleSearch");
const seoProgrammeList = document.querySelector("#seoProgrammeList");
const faqList = document.querySelector("#faqList");
const diagnosticApp = document.querySelector("#diagnosticApp");
const outcomeList = document.querySelector("#outcomeList");
const certificatePanel = document.querySelector("#certificatePanel");
const stickyProgressText = document.querySelector("#stickyProgressText");
const stickyProgressLink = document.querySelector("#stickyProgressLink");
const progressMeter = document.querySelector("#progressMeter");
const progressPercent = document.querySelector("#progressPercent");
const completedModules = document.querySelector("#completedModules");
const checkpointTotal = document.querySelector("#checkpointTotal");
const quizScore = document.querySelector("#quizScore");
const resetProgress = document.querySelector("#resetProgress");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  document.body.classList.add("motion-ready");
}

const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
const pathLanguage = window.location.pathname.startsWith("/en/")
  ? "en"
  : window.location.pathname.startsWith("/ar/")
    ? "ar"
    : document.body.dataset.defaultLang;
const storedLanguage = window.localStorage.getItem("ahmed-site-language");
let currentLanguage = languageCodes.includes(requestedLanguage)
  ? requestedLanguage
  : languageCodes.includes(pathLanguage)
    ? pathLanguage
    : languageCodes.includes(storedLanguage)
      ? storedLanguage
      : "fr";
let state = loadState();
let activeModuleId = state.activeModuleId || "foundations";
let activeTab = state.activeTab || "course";

function getCopy() {
  return bootcampCopy[currentLanguage] || bootcampCopy.fr;
}

function getModules() {
  return getCopy().modules;
}

function getBootcampPath(language = currentLanguage) {
  return bootcampPaths[language] || bootcampPaths.fr;
}

function getBootcampUrl(language = currentLanguage) {
  return `${siteBaseUrl}${getBootcampPath(language)}`;
}

function getHomePath(language = currentLanguage, hash = "") {
  const homePath = language === "fr" ? "/" : `/${language}/`;
  return `${homePath}${hash}`;
}

function loadState() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(storageKey) || "{}");
    return {
      modules: parsed.modules && typeof parsed.modules === "object" ? parsed.modules : {},
      diagnostic:
        parsed.diagnostic && typeof parsed.diagnostic === "object" && Array.isArray(parsed.diagnostic.answers)
          ? parsed.diagnostic
          : { answers: [] },
      certificateName: parsed.certificateName || "",
      activeModuleId: parsed.activeModuleId || "foundations",
      activeTab: parsed.activeTab || "course",
    };
  } catch {
    return { modules: {}, diagnostic: { answers: [] }, certificateName: "", activeModuleId: "foundations", activeTab: "course" };
  }
}

function saveState() {
  state.activeModuleId = activeModuleId;
  state.activeTab = activeTab;
  window.localStorage.setItem(storageKey, JSON.stringify(state));
}

function getModuleState(moduleId) {
  state.modules[moduleId] ||= { checkpoints: [], answers: {}, checked: false, correct: 0 };
  return state.modules[moduleId];
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalize(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
}

function setMeta(selector, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.setAttribute("content", value);
  }
}

function setAttribute(selector, attribute, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
}

function isModuleComplete(module) {
  const moduleState = getModuleState(module.id);
  return (
    moduleState.checkpoints.length === module.checkpoints.length &&
    moduleState.checkpoints.every(Boolean) &&
    moduleState.checked &&
    moduleState.correct === module.quiz.length
  );
}

function getTotals() {
  const modules = getModules();
  const totalChecks = modules.reduce((sum, module) => sum + module.checkpoints.length, 0);
  const doneChecks = modules.reduce(
    (sum, module) => sum + getModuleState(module.id).checkpoints.filter(Boolean).length,
    0,
  );
  const totalQuiz = modules.reduce((sum, module) => sum + module.quiz.length, 0);
  const doneQuiz = modules.reduce((sum, module) => sum + (getModuleState(module.id).correct || 0), 0);
  const completed = modules.filter(isModuleComplete).length;
  const percent = Math.round(((doneChecks + doneQuiz) / (totalChecks + totalQuiz)) * 100);

  return { totalChecks, doneChecks, totalQuiz, doneQuiz, completed, percent };
}

function getDiagnosticAnswers() {
  state.diagnostic ||= { answers: [] };
  state.diagnostic.answers ||= [];
  return state.diagnostic.answers;
}

function getDiagnosticResult() {
  const copy = getCopy();
  const questions = copy.diagnostic?.questions || [];
  const answers = getDiagnosticAnswers();
  const score = answers.reduce((sum, answer) => sum + (Number.isFinite(Number(answer)) ? Number(answer) : 0), 0);
  const max = questions.length * 2;
  const percent = max ? Math.round((score / max) * 100) : 0;
  const level = (copy.diagnostic?.levels || [])
    .filter((item) => percent >= item.min)
    .at(-1) || copy.diagnostic?.levels?.[0];
  const weakQuestion = questions
    .map((question, index) => ({ ...question, score: Number(answers[index] ?? 0), index }))
    .sort((a, b) => a.score - b.score)[0];
  const recommendedModuleId = weakQuestion?.moduleId || "foundations";
  const recommendedModule = getModules().find((module) => module.id === recommendedModuleId) || getModules()[0];

  return { answers, questions, score, max, percent, level, recommendedModule };
}

function renderStaticText() {
  const copy = getCopy();
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = copy.dir;
  document.title = copy.meta.title;
  setMeta('meta[name="description"]', copy.meta.description);
  setAttribute('link[rel="canonical"]', "href", getBootcampUrl(currentLanguage));
  setAttribute('link[hreflang="fr"]', "href", getBootcampUrl("fr"));
  setAttribute('link[hreflang="en"]', "href", getBootcampUrl("en"));
  setAttribute('link[hreflang="ar"]', "href", getBootcampUrl("ar"));
  setAttribute('link[hreflang="x-default"]', "href", getBootcampUrl("fr"));
  setMeta('meta[property="og:title"]', copy.meta.title);
  setMeta('meta[property="og:description"]', copy.meta.description);
  setMeta('meta[property="og:url"]', getBootcampUrl(currentLanguage));
  setMeta('meta[property="og:locale"]', languageLocales[currentLanguage]);
  setMeta('meta[name="twitter:title"]', copy.meta.title);
  setMeta('meta[name="twitter:description"]', copy.meta.description);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (copy.ui[key]) {
      element.textContent = copy.ui[key];
    }
  });

  moduleSearch.placeholder = copy.ui.searchPlaceholder;
  nav?.setAttribute("aria-label", currentLanguage === "ar" ? "تنقل البوتكامب" : "Navigation bootcamp");
  menuButton?.setAttribute("aria-label", nav?.classList.contains("is-open") ? copy.ui.menuClose : copy.ui.menuOpen);
  setAttribute(".brand", "href", getHomePath(currentLanguage));
  setAttribute('[data-i18n="navHome"]', "href", getHomePath(currentLanguage));
  setAttribute('[data-i18n="navServices"]', "href", getHomePath(currentLanguage, "#services"));
  setAttribute('[data-i18n="navWork"]', "href", getHomePath(currentLanguage, "#work"));
  setAttribute('[data-i18n="navBootcamp"]', "href", getBootcampPath(currentLanguage));
  setAttribute('[data-i18n="navContact"]', "href", getHomePath(currentLanguage, "#contact"));

  document.querySelectorAll(".language-option").forEach((link) => {
    const language = link.dataset.lang;
    const href = getBootcampPath(language);
    link.href = href;
    link.classList.toggle("is-active", language === currentLanguage);
    if (language === currentLanguage) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function renderProgress() {
  const copy = getCopy();
  const totals = getTotals();
  progressMeter.style.width = `${totals.percent}%`;
  progressPercent.textContent = `${totals.percent}%`;
  completedModules.textContent = `${totals.completed}/${getModules().length}`;
  checkpointTotal.textContent = `${totals.doneChecks}/${totals.totalChecks}`;
  quizScore.textContent = `${totals.doneQuiz}/${totals.totalQuiz}`;
  resetProgress.textContent = copy.ui.resetProgress;
  if (stickyProgressText) {
    stickyProgressText.textContent =
      totals.completed === getModules().length ? copy.ui.stickyComplete : `${totals.percent}% ${copy.ui.progressLabel.toLowerCase()}`;
  }
  if (stickyProgressLink) {
    stickyProgressLink.href = totals.completed === getModules().length ? "#certificatePanel" : "#academy";
    stickyProgressLink.textContent = totals.completed === getModules().length ? copy.ui.certificateTitle : copy.ui.stickyCta;
  }
}

function renderModules() {
  const copy = getCopy();
  const query = normalize(moduleSearch.value);
  const modules = getModules();
  const filtered = modules.filter((module) => normalize(`${module.title} ${module.short}`).includes(query));

  if (!filtered.length) {
    moduleList.innerHTML = `<p class="checkpoint-note">${escapeHtml(copy.ui.noResult)}</p>`;
    return;
  }

  moduleList.innerHTML = filtered
    .map((module, index) => {
      const complete = isModuleComplete(module);
      const active = module.id === activeModuleId;
      return `
        <button class="bootcamp-module ${active ? "is-active" : ""} ${complete ? "is-complete" : ""}" type="button" data-module="${escapeHtml(module.id)}">
          <span class="bootcamp-module-index">${String(index + 1).padStart(2, "0")}</span>
          <span class="bootcamp-module-copy">
            <strong>${escapeHtml(module.title)}</strong>
            <span>${escapeHtml(module.short)}</span>
          </span>
          <span class="module-dot" aria-hidden="true"></span>
        </button>
      `;
    })
    .join("");
}

function getActiveModule() {
  return getModules().find((module) => module.id === activeModuleId) || getModules()[0];
}

function getNextModule(moduleId) {
  const modules = getModules();
  const index = modules.findIndex((module) => module.id === moduleId);
  return index >= 0 ? modules[index + 1] || null : null;
}

function scrollToWorkspace() {
  document.querySelector(".bootcamp-workspace")?.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });
}

function scrollToFlowActions() {
  panel?.querySelector(".quiz-actions")?.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "center",
  });
}

function goToTab(tab) {
  activeTab = tab;
  saveState();
  renderAll();
  requestAnimationFrame(scrollToWorkspace);
}

function goToModule(moduleId) {
  activeModuleId = moduleId;
  activeTab = "course";
  if (moduleSearch) {
    moduleSearch.value = "";
  }
  saveState();
  renderAll();
  requestAnimationFrame(scrollToWorkspace);
}

function renderPanel() {
  const module = getActiveModule();
  if (!module) {
    return;
  }

  if (activeTab === "quiz") {
    renderQuiz(module);
    return;
  }

  if (activeTab === "resources") {
    renderResources(module);
    return;
  }

  renderCourse(module);
}

function renderCourse(module) {
  const copy = getCopy();
  const moduleState = getModuleState(module.id);
  const moduleIndex = getModules().findIndex((item) => item.id === module.id) + 1;
  const checksDone = moduleState.checkpoints.filter(Boolean).length;
  const quizDone = moduleState.checked ? moduleState.correct : 0;
  const moduleComplete = isModuleComplete(module);

  panel.innerHTML = `
    <div class="module-head">
      <div class="module-head-top">
        <span>${escapeHtml(copy.ui.moduleLabel)} ${String(moduleIndex).padStart(2, "0")} - ${escapeHtml(copy.ui.duration)} ${escapeHtml(module.duration)}</span>
        <strong>${escapeHtml(moduleComplete ? copy.ui.moduleComplete : copy.ui.moduleInProgress)}</strong>
      </div>
      <h2>${escapeHtml(module.title)}</h2>
      <p>${escapeHtml(module.objective)}</p>
      <div class="module-progress-mini" aria-label="${escapeHtml(copy.ui.moduleProgress)}">
        <span><strong>${checksDone}/${module.checkpoints.length}</strong> ${escapeHtml(copy.ui.checkpointMini)}</span>
        <span><strong>${quizDone}/${module.quiz.length}</strong> ${escapeHtml(copy.ui.quizMini)}</span>
      </div>
    </div>

    <div class="lesson-grid" aria-label="${escapeHtml(copy.ui.lessons)}">
      ${module.lessons
        .map(
          (lesson, index) => `
            <div class="bootcamp-lesson">
              <span>${index + 1}</span>
              <strong>${escapeHtml(lesson)}</strong>
            </div>
          `,
        )
        .join("")}
    </div>

    <div class="prompt-lab">
      <strong>${escapeHtml(copy.ui.promptTitle)}</strong>
      <p>${escapeHtml(module.prompt)}</p>
      <button type="button" data-action="copy-prompt">${escapeHtml(copy.ui.copyPrompt)}</button>
    </div>

    <div class="checkpoint-list" aria-label="${escapeHtml(copy.ui.checkpoints)}">
      ${module.checkpoints
        .map(
          (checkpoint, index) => `
            <div class="checkpoint-card">
              <label>
                <input class="checkpoint-input" type="checkbox" data-checkpoint="${index}" ${moduleState.checkpoints[index] ? "checked" : ""}>
                <span>${escapeHtml(checkpoint)}</span>
              </label>
            </div>
          `,
        )
        .join("")}
    </div>

    <div class="bootcamp-flow-actions">
      <span class="flow-hint">${escapeHtml(copy.ui.courseFlowHint)}</span>
      <div>
        <button class="flow-primary" type="button" data-action="go-quiz">${escapeHtml(copy.ui.courseNext)}</button>
        <button class="flow-secondary" type="button" data-action="go-resources">${escapeHtml(copy.ui.courseResources)}</button>
      </div>
    </div>
  `;
}

function renderQuiz(module) {
  const copy = getCopy();
  const moduleState = getModuleState(module.id);
  const allAnswered = module.quiz.every((_, index) => moduleState.answers[index] !== undefined);
  const feedback = moduleState.checked
    ? copy.ui.quizResult.replace("{score}", moduleState.correct).replace("{total}", module.quiz.length)
    : copy.ui.quizIntro;
  const nextModule = getNextModule(module.id);
  const nextAction = nextModule
    ? `
      <button class="flow-primary flow-next-module" type="button" data-action="next-module">
        <span>${escapeHtml(copy.ui.nextModule)}</span>
        <strong>${escapeHtml(nextModule.title)}</strong>
      </button>
    `
    : `<button class="flow-primary" type="button" data-action="finish-bootcamp">${escapeHtml(copy.ui.finishBootcamp)}</button>`;

  panel.innerHTML = `
    <div class="module-head">
      <span>${escapeHtml(copy.ui.tabQuiz)}</span>
      <h2>${escapeHtml(module.title)}</h2>
      <p>${escapeHtml(feedback)}</p>
    </div>
    <div class="quiz-list">
      ${module.quiz
        .map((question, questionIndex) => {
          const selected = Number(moduleState.answers[questionIndex]);
          return `
            <div class="quiz-card">
              <h3>${escapeHtml(question.q)}</h3>
              <div class="quiz-options">
                ${question.options
                  .map((option, optionIndex) => {
                    const selectedClass = selected === optionIndex ? "is-selected" : "";
                    const correctClass = moduleState.checked && question.answer === optionIndex ? "is-correct" : "";
                    const wrongClass =
                      moduleState.checked && selected === optionIndex && selected !== question.answer ? "is-wrong" : "";
                    return `
                      <button class="quiz-option ${selectedClass} ${correctClass} ${wrongClass}" type="button" data-question="${questionIndex}" data-option="${optionIndex}">
                        ${escapeHtml(option)}
                      </button>
                    `;
                  })
                  .join("")}
              </div>
              ${moduleState.checked ? `<p class="quiz-feedback">${escapeHtml(question.explanation)}</p>` : ""}
            </div>
          `;
        })
        .join("")}
    </div>
    <div class="quiz-actions ${moduleState.checked ? "has-next" : ""}">
      ${moduleState.checked ? nextAction : ""}
      <button class="quiz-submit ${moduleState.checked ? "flow-secondary" : ""}" type="button" data-action="submit-quiz">${escapeHtml(moduleState.checked ? copy.ui.quizRetry : copy.ui.quizSubmit)}</button>
      <span class="quiz-feedback">${escapeHtml(allAnswered || moduleState.checked ? feedback : copy.ui.quizMissing)}</span>
    </div>
  `;
}

function renderResources(module) {
  const copy = getCopy();
  panel.innerHTML = `
    <div class="module-head">
      <span>${escapeHtml(copy.ui.tabResources)}</span>
      <h2>${escapeHtml(module.title)}</h2>
      <p>${escapeHtml(copy.ui.resourcesIntro)}</p>
    </div>
    <div class="resource-grid">
      ${copy.resources
        .map(
          (resource, index) => `
            <article class="resource-card">
              <span>${escapeHtml(resource.type)}</span>
              <h3>${escapeHtml(resource.title)}</h3>
              <p>${escapeHtml(resource.text)}</p>
              <button class="resource-copy" type="button" data-resource="${index}">${escapeHtml(copy.ui.copyPrompt)}</button>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderDiagnostic() {
  if (!diagnosticApp) {
    return;
  }

  const copy = getCopy();
  const result = getDiagnosticResult();
  const answeredCount = result.questions.reduce((sum, _, index) => sum + (result.answers[index] !== undefined ? 1 : 0), 0);
  const currentIndex = result.questions.findIndex((_, index) => result.answers[index] === undefined);
  const progressPercent = result.questions.length ? Math.round((answeredCount / result.questions.length) * 100) : 0;

  if (currentIndex === -1 && result.questions.length) {
    const priorities = result.questions
      .map((question, index) => ({ ...question, score: Number(result.answers[index] ?? 0) }))
      .filter((question) => question.score < 2)
      .slice(0, 3);
    const recommendations = priorities.length
      ? priorities
      : [{ category: result.recommendedModule.title, q: result.recommendedModule.short, moduleId: result.recommendedModule.id }];

    diagnosticApp.innerHTML = `
      <div class="diagnostic-result-card">
        <div class="diagnostic-score-ring" style="--score:${result.percent}%">
          <strong>${result.percent}</strong>
          <span>/100</span>
        </div>
        <div class="diagnostic-result-copy">
          <span>${escapeHtml(copy.ui.diagnosticScore)}</span>
          <h3>${escapeHtml(result.level?.title || copy.ui.diagnosticScore)}</h3>
          <p>${escapeHtml(result.level?.text || "")}</p>
          <div class="diagnostic-recommendations">
            ${recommendations
              .map(
                (item) => `
                  <button type="button" data-action="diagnostic-start" data-module="${escapeHtml(item.moduleId || result.recommendedModule.id)}">
                    <strong>${escapeHtml(item.category || result.recommendedModule.title)}</strong>
                    <span>${escapeHtml(item.q || result.recommendedModule.short)}</span>
                  </button>
                `,
              )
              .join("")}
          </div>
          <div class="diagnostic-actions">
            <button class="flow-primary" type="button" data-action="diagnostic-start" data-module="${escapeHtml(result.recommendedModule.id)}">${escapeHtml(copy.ui.diagnosticStartCourse)}</button>
            <a class="flow-secondary" href="${escapeHtml(getHomePath(currentLanguage, "#contact"))}">${escapeHtml(copy.ui.diagnosticContact)}</a>
            <button class="reset-progress" type="button" data-action="diagnostic-reset">${escapeHtml(copy.ui.diagnosticReset)}</button>
          </div>
        </div>
      </div>
    `;
    return;
  }

  const question = result.questions[currentIndex] || result.questions[0];
  diagnosticApp.innerHTML = `
    <div class="diagnostic-question-card">
      <div class="diagnostic-progress">
        <span>${escapeHtml(copy.ui.diagnosticStep)} ${currentIndex + 1} ${escapeHtml(copy.ui.diagnosticOf)} ${result.questions.length}</span>
        <strong>${progressPercent}%</strong>
        <div aria-hidden="true"><i style="width:${progressPercent}%"></i></div>
      </div>
      <span class="diagnostic-category">${escapeHtml(question.category)}</span>
      <h3>${escapeHtml(question.q)}</h3>
      <div class="diagnostic-options">
        ${question.options
          .map(
            ([label, score]) => `
              <button type="button" data-action="diagnostic-answer" data-question="${currentIndex}" data-score="${score}">
                ${escapeHtml(label)}
              </button>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderOutcomes() {
  if (!outcomeList) {
    return;
  }

  const copy = getCopy();
  outcomeList.innerHTML = (copy.outcomes || [])
    .map(
      ([index, title, text]) => `
        <article class="outcome-card">
          <span>${escapeHtml(index)}</span>
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(text)}</p>
        </article>
      `,
    )
    .join("");
}

function renderCertificate() {
  if (!certificatePanel) {
    return;
  }

  const copy = getCopy();
  const totals = getTotals();
  const isUnlocked = totals.completed === getModules().length;
  const displayName = (state.certificateName || "").trim() || copy.ui.certificateFallbackName;
  const locale = currentLanguage === "ar" ? "ar-TN" : currentLanguage === "fr" ? "fr-TN" : "en-US";
  const issuedDate = new Intl.DateTimeFormat(locale, { day: "2-digit", month: "short", year: "numeric" }).format(new Date());
  const shareText = `${displayName} ${copy.ui.certificateAchievement} ${getBootcampUrl(currentLanguage)}#certificatePanel`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${getBootcampUrl(currentLanguage)}#certificatePanel`)}`;

  certificatePanel.classList.toggle("is-unlocked", isUnlocked);
  certificatePanel.innerHTML = `
    <span class="asset-label">${escapeHtml(copy.ui.certificateTitle)}</span>
    <h3>${escapeHtml(isUnlocked ? copy.ui.certificateUnlocked : copy.ui.certificateLocked)}</h3>
    <div class="certificate-preview" aria-hidden="${isUnlocked ? "false" : "true"}">
      <span>Growth Marketing with AI</span>
      <strong>${escapeHtml(displayName)}</strong>
      <p>${escapeHtml(copy.ui.certificateAchievement)}</p>
      <small>${escapeHtml(copy.ui.certificateIssued)} - ${escapeHtml(issuedDate)}</small>
    </div>
    <label class="certificate-name">
      <span>${escapeHtml(copy.ui.certificateNameLabel)}</span>
      <input id="certificateName" type="text" value="${escapeHtml(state.certificateName || "")}" placeholder="${escapeHtml(copy.ui.certificateNamePlaceholder)}" autocomplete="name">
    </label>
    <div class="certificate-actions">
      <button class="flow-primary" type="button" data-action="copy-certificate" data-share="${escapeHtml(shareText)}" ${isUnlocked ? "" : "disabled"}>${escapeHtml(copy.ui.certificateCopy)}</button>
      <a class="flow-secondary ${isUnlocked ? "" : "is-disabled"}" href="${isUnlocked ? escapeHtml(linkedInUrl) : "#academy"}" ${isUnlocked ? 'target="_blank"' : ""} rel="noreferrer" aria-disabled="${isUnlocked ? "false" : "true"}">${escapeHtml(copy.ui.certificateShare)}</a>
    </div>
  `;
}

function renderSeoContent() {
  const copy = getCopy();
  const modules = getModules();

  if (seoProgrammeList) {
    seoProgrammeList.innerHTML = modules
      .map(
        (module, index) => `
          <article class="seo-module-card">
            <span>${escapeHtml(copy.ui.moduleLabel)} ${String(index + 1).padStart(2, "0")}</span>
            <h3>${escapeHtml(module.title)}</h3>
            <p>${escapeHtml(module.objective)}</p>
            <ul>
              ${module.lessons.map((lesson) => `<li>${escapeHtml(lesson)}</li>`).join("")}
            </ul>
          </article>
        `,
      )
      .join("");
  }

  if (faqList) {
    faqList.innerHTML = copy.faq
      .map(
        (item, index) => `
          <details class="faq-item" ${index === 0 ? "open" : ""}>
            <summary>${escapeHtml(item.q)}</summary>
            <p>${escapeHtml(item.a)}</p>
          </details>
        `,
      )
      .join("");
  }
}

function renderSchemas() {
  const copy = getCopy();
  const modules = getModules();
  const url = getBootcampUrl(currentLanguage);
  const courseSchema = document.querySelector("#courseSchema");
  const faqSchema = document.querySelector("#faqSchema");
  const breadcrumbSchema = document.querySelector("#breadcrumbSchema");

  const courseData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: copy.meta.title.replace(" | Ahmed Zakraoui", ""),
    description: copy.meta.description,
    url,
    inLanguage: currentLanguage,
    isAccessibleForFree: true,
    provider: {
      "@type": "Person",
      name: "Ahmed Zakraoui",
      url: siteBaseUrl,
      address: {
        "@type": "PostalAddress",
        addressCountry: "TN",
        addressLocality: "Tunis",
      },
    },
    teaches: modules.map((module) => module.title),
    educationalLevel: copy.ui.schemaLevel,
    coursePrerequisites: copy.ui.schemaPrerequisites,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "TND",
      availability: "https://schema.org/InStock",
      category: "Free",
      url,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT4H30M",
      location: {
        "@type": "VirtualLocation",
        url,
      },
    },
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: copy.ui.navHome,
        item: `${siteBaseUrl}${getHomePath(currentLanguage)}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: copy.ui.navBootcamp,
        item: url,
      },
    ],
  };

  if (courseSchema) {
    courseSchema.textContent = JSON.stringify(courseData);
  }

  if (faqSchema) {
    faqSchema.textContent = JSON.stringify(faqData);
  }

  if (breadcrumbSchema) {
    breadcrumbSchema.textContent = JSON.stringify(breadcrumbData);
  }
}

function updateTabs() {
  document.querySelectorAll(".bootcamp-tab").forEach((tab) => {
    const isActive = tab.dataset.tab === activeTab;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
}

function copyText(text, button) {
  const copy = getCopy();
  const original = button.textContent;
  const markCopied = () => {
    button.textContent = copy.ui.copied;
    window.setTimeout(() => {
      button.textContent = original;
    }, 1200);
  };

  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(markCopied).catch(markCopied);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  markCopied();
}

function renderAll() {
  renderStaticText();
  renderProgress();
  renderModules();
  updateTabs();
  renderPanel();
  renderDiagnostic();
  renderOutcomes();
  renderCertificate();
  renderSeoContent();
  renderSchemas();
}

menuButton?.addEventListener("click", () => {
  const copy = getCopy();
  const isOpen = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? copy.ui.menuClose : copy.ui.menuOpen);
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", getCopy().ui.menuOpen);
  });
});

document.querySelectorAll(".language-option").forEach((link) => {
  link.addEventListener("click", (event) => {
    const language = link.dataset.lang;
    if (!languageCodes.includes(language)) {
      return;
    }
    event.preventDefault();
    currentLanguage = language;
    window.localStorage.setItem("ahmed-site-language", language);
    window.history.replaceState({}, "", getBootcampPath(language));
    renderAll();
  });
});

moduleSearch?.addEventListener("input", renderModules);

moduleList?.addEventListener("click", (event) => {
  const button = event.target.closest(".bootcamp-module");
  if (!button) {
    return;
  }
  goToModule(button.dataset.module);
});

document.querySelectorAll(".bootcamp-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    activeTab = tab.dataset.tab;
    saveState();
    renderAll();
  });
});

panel?.addEventListener("change", (event) => {
  if (!event.target.matches(".checkpoint-input")) {
    return;
  }
  const moduleState = getModuleState(activeModuleId);
  moduleState.checkpoints[Number(event.target.dataset.checkpoint)] = event.target.checked;
  saveState();
  renderPanel();
  renderProgress();
  renderModules();
  renderCertificate();
});

panel?.addEventListener("click", (event) => {
  const copy = getCopy();
  const activeModule = getActiveModule();
  const moduleState = getModuleState(activeModuleId);
  const quizOption = event.target.closest(".quiz-option");
  const actionButton = event.target.closest("[data-action]");
  const resourceButton = event.target.closest("[data-resource]");

  if (quizOption) {
    if (moduleState.checked) {
      return;
    }
    moduleState.answers[Number(quizOption.dataset.question)] = Number(quizOption.dataset.option);
    saveState();
    renderPanel();
    return;
  }

  if (actionButton?.dataset.action === "copy-prompt") {
    copyText(activeModule.prompt, actionButton);
    return;
  }

  if (actionButton?.dataset.action === "go-quiz") {
    goToTab("quiz");
    return;
  }

  if (actionButton?.dataset.action === "go-resources") {
    goToTab("resources");
    return;
  }

  if (actionButton?.dataset.action === "next-module") {
    const nextModule = getNextModule(activeModule.id);
    if (nextModule) {
      goToModule(nextModule.id);
    }
    return;
  }

  if (actionButton?.dataset.action === "finish-bootcamp") {
    document.querySelector("#certificatePanel")?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "center",
    });
    return;
  }

  if (actionButton?.dataset.action === "submit-quiz") {
    if (moduleState.checked) {
      moduleState.checked = false;
      moduleState.correct = 0;
      moduleState.answers = {};
      saveState();
      renderAll();
      return;
    }

    const allAnswered = activeModule.quiz.every((_, index) => moduleState.answers[index] !== undefined);
    if (!allAnswered) {
      const feedback = panel.querySelector(".quiz-actions .quiz-feedback");
      if (feedback) {
        feedback.textContent = copy.ui.quizMissing;
      }
      return;
    }

    moduleState.correct = activeModule.quiz.reduce((score, question, index) => {
      return score + (Number(moduleState.answers[index]) === question.answer ? 1 : 0);
    }, 0);
    moduleState.checked = true;
    saveState();
    renderAll();
    requestAnimationFrame(scrollToFlowActions);
    return;
  }

  if (resourceButton) {
    const resource = getCopy().resources[Number(resourceButton.dataset.resource)];
    if (resource) {
      copyText(resource.copy, resourceButton);
    }
  }
});

diagnosticApp?.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) {
    return;
  }

  if (actionButton.dataset.action === "diagnostic-answer") {
    const answers = getDiagnosticAnswers();
    answers[Number(actionButton.dataset.question)] = Number(actionButton.dataset.score);
    saveState();
    renderDiagnostic();
    return;
  }

  if (actionButton.dataset.action === "diagnostic-reset") {
    state.diagnostic = { answers: [] };
    saveState();
    renderDiagnostic();
    return;
  }

  if (actionButton.dataset.action === "diagnostic-start") {
    const moduleId = actionButton.dataset.module || getDiagnosticResult().recommendedModule.id;
    goToModule(moduleId);
  }
});

certificatePanel?.addEventListener("input", (event) => {
  if (event.target.id !== "certificateName") {
    return;
  }
  state.certificateName = event.target.value;
  saveState();
  const copy = getCopy();
  const displayName = state.certificateName.trim() || copy.ui.certificateFallbackName;
  certificatePanel.querySelector(".certificate-preview strong").textContent = displayName;
  const copyButton = certificatePanel.querySelector('[data-action="copy-certificate"]');
  if (copyButton) {
    copyButton.dataset.share = `${displayName} ${copy.ui.certificateAchievement} ${getBootcampUrl(currentLanguage)}#certificatePanel`;
  }
});

certificatePanel?.addEventListener("click", (event) => {
  const copyButton = event.target.closest('[data-action="copy-certificate"]');
  if (!copyButton || copyButton.disabled) {
    return;
  }
  copyText(copyButton.dataset.share || "", copyButton);
});

resetProgress?.addEventListener("click", () => {
  if (!window.confirm(getCopy().ui.resetConfirm)) {
    return;
  }
  state = { modules: {}, diagnostic: { answers: [] }, certificateName: "", activeModuleId: "foundations", activeTab: "course" };
  activeModuleId = "foundations";
  activeTab = "course";
  saveState();
  renderAll();
});

const onScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = height > 0 ? (scrollTop / height) * 100 : 0;
  if (progress) {
    progress.style.width = `${Math.min(100, Math.max(0, ratio))}%`;
  }
  header?.classList.toggle("is-scrolled", scrollTop > 18);
};

window.addEventListener("scroll", onScroll, { passive: true });
renderAll();
onScroll();
