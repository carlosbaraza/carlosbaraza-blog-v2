import type { Locale } from "./i18n";

const translations = {
  en: {
    // Navigation
    "nav.blog": "Blog",
    "nav.projects": "Projects",
    "nav.about": "About me",

    // Footer
    "footer.rights": "All rights reserved.",

    // Home - Hero
    "hero.tagline":
      "Writing about agentic coding workflows, AI strategy, and building products. CTO, engineer, and occasional woodworker.",

    // Home - Latest Posts
    "home.latestPosts": "Latest Posts",
    "home.allPosts": "All posts",

    // Home - Featured Projects
    "home.featuredProjects": "Featured Projects",
    "home.allProjects": "All projects",

    // Blog listing
    "blog.title": "Every Post",

    // Tags
    "tags.title": "Tags",
    "tags.tagged": "Tagged",

    // Pagination
    "pagination.previous": "Previous",
    "pagination.next": "Next",
    "pagination.page": "Page",
    "pagination.of": "of",

    // Markdown actions
    "md.view": "View Markdown",
    "md.copy": "Copy Markdown",
    "md.copied": "Copied",

    // Projects
    "projects.title": "Projects",
    "projects.externalLink": "External link",

    // About page
    "about.title": "About",
    "about.occupationAt": "at",
    "about.bio1":
      "I've been writing code since I was a kid. These days, I write it alongside AI agents \u2014 and honestly, I think that's the most exciting shift in software since the internet itself.",
    "about.bio2Prefix": "I'm the CTO at",
    "about.bio2Suffix":
      ", where I've spent years building products with React, Next.js, and Node. Before that, I shipped software at Bloomberg, Expedia, and DAZN. But what I'm most focused on now is how AI agents are changing the way we build \u2014 and how teams can actually adopt them without the hype.",
    "about.bio3":
      "I write about agentic coding workflows, share what works (and what doesn't), and help companies think through their AI and agent strategy. If you're figuring out how to bring agents into your engineering org, that's exactly the kind of problem I love working on.",
    "about.bio4":
      "When I'm not building or writing, I'm probably woodworking, playing music, or being used as a climbing frame by my two little ones.",
    "about.resume": "Resume",
    "about.subtitle": "Senior Full Stack Engineer \u00B7 London, UK",
    "about.skills.leadership": "Leadership",
    "about.skills.webdev": "Web Development",
    "about.skills.ai": "AI & Agents",
    "about.skills.general": "General",
    "about.experience": "Experience",
    "about.education": "Education",
    "about.languages": "Languages",
    "about.present": "Present",

    // About - Experience descriptions
    "about.inpractise.role": "CTO and Lead Engineer",
    "about.inpractise.desc":
      "Architected the tech stack and developed the product. React, Node, Next, Docker, PostgreSQL, GraphQL.",
    "about.bloomberg.role": "Senior Software Engineer \u00B7 London",
    "about.bloomberg.desc":
      "Built web monitoring and management tool for an important financial process. TypeScript, React, Node, Kubernetes, SQL Server.",
    "about.dazn.role":
      "Senior Software Engineer / DevOps / SRE \u00B7 London",
    "about.dazn.desc":
      "Built multiple applications (React, Node, Next, GraphQL, Apollo) hosted on AWS. Golang, TypeScript, Serverless (Lambda).",
    "about.homeaway.role": "Senior Software Engineer \u00B7 London",
    "about.homeaway.desc":
      "Highly optimised and resilient server side rendered React/Node application. Redux, Docker, AWS, SEO/SEM, A/B Testing.",
    "about.hirespace.role": "Senior Software Engineer \u00B7 London",
    "about.kneip.role": "Software Engineer \u00B7 Luxembourg",

    // About - Education
    "about.edu.degree":
      "B.Eng. Industrial Electronics and Automation",
    "about.edu.uni": "University of Castilla-La Mancha, Spain",
    "about.edu.webdev": "Web Development",
    "about.edu.wit":
      "Waterford Institute of Technology (WIT), Ireland",

    // About - Languages
    "about.lang.english": "English",
    "about.lang.englishDesc":
      "Very fluent. Lived in London for 7+ years. C1. First Certificate of Cambridge.",
    "about.lang.french": "French",
    "about.lang.frenchDesc":
      "Fluent. Lived in France for 4 years. B2. DELF.",
    "about.lang.spanish": "Spanish",
    "about.lang.spanishDesc": "Native.",

    // Skills
    "about.skill.techStrategy": "Technical Strategy & Architecture",
    "about.skill.productVision": "Product Vision",
    "about.skill.polyglot": "Polyglot \u2014 whatever my agents can parse",
    "about.skill.cloud": "Cloud & Infrastructure",
    "about.skill.llm": "LLM-Powered Agents",
    "about.skill.agentic": "Agentic Coding Workflows",
    "about.skill.pytorch": "PyTorch",
    "about.skill.deepLearning": "Deep Learning",

    // Language picker
    "locale.switch": "Language",
  },
  es: {
    // Navigation
    "nav.blog": "Blog",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre m\u00ed",

    // Footer
    "footer.rights": "Todos los derechos reservados.",

    // Home - Hero
    "hero.tagline":
      "Escribiendo sobre flujos de trabajo de programaci\u00f3n ag\u00e9ntica, estrategia de IA y creaci\u00f3n de productos. CTO, ingeniero y carpintero ocasional.",

    // Home - Latest Posts
    "home.latestPosts": "\u00daltimas Publicaciones",
    "home.allPosts": "Todas las publicaciones",

    // Home - Featured Projects
    "home.featuredProjects": "Proyectos Destacados",
    "home.allProjects": "Todos los proyectos",

    // Blog listing
    "blog.title": "Todas las Publicaciones",

    // Tags
    "tags.title": "Etiquetas",
    "tags.tagged": "Etiquetado",

    // Pagination
    "pagination.previous": "Anterior",
    "pagination.next": "Siguiente",
    "pagination.page": "P\u00e1gina",
    "pagination.of": "de",

    // Markdown actions
    "md.view": "Ver Markdown",
    "md.copy": "Copiar Markdown",
    "md.copied": "Copiado",

    // Projects
    "projects.title": "Proyectos",
    "projects.externalLink": "Enlace externo",

    // About page
    "about.title": "Sobre m\u00ed",
    "about.occupationAt": "en",
    "about.bio1":
      "He estado escribiendo c\u00f3digo desde que era un ni\u00f1o. Hoy en d\u00eda, lo escribo junto a agentes de IA \u2014 y honestamente, creo que es el cambio m\u00e1s emocionante en software desde el internet mismo.",
    "about.bio2Prefix": "Soy el CTO en",
    "about.bio2Suffix":
      ", donde he pasado a\u00f1os construyendo productos con React, Next.js y Node. Antes de eso, desarroll\u00e9 software en Bloomberg, Expedia y DAZN. Pero en lo que m\u00e1s me enfoco ahora es en c\u00f3mo los agentes de IA est\u00e1n cambiando la forma en que construimos \u2014 y c\u00f3mo los equipos pueden adoptarlos sin la exageraci\u00f3n.",
    "about.bio3":
      "Escribo sobre flujos de trabajo de programaci\u00f3n ag\u00e9ntica, comparto lo que funciona (y lo que no), y ayudo a las empresas a pensar en su estrategia de IA y agentes. Si est\u00e1s tratando de incorporar agentes en tu organizaci\u00f3n de ingenier\u00eda, ese es exactamente el tipo de problema que me encanta resolver.",
    "about.bio4":
      "Cuando no estoy construyendo o escribiendo, probablemente estoy haciendo carpinter\u00eda, tocando m\u00fasica, o siendo usado como estructura de escalada por mis dos peque\u00f1os.",
    "about.resume": "Curr\u00edculum",
    "about.subtitle": "Ingeniero Full Stack Senior \u00B7 Londres, Reino Unido",
    "about.skills.leadership": "Liderazgo",
    "about.skills.webdev": "Desarrollo Web",
    "about.skills.ai": "IA y Agentes",
    "about.skills.general": "General",
    "about.experience": "Experiencia",
    "about.education": "Educaci\u00f3n",
    "about.languages": "Idiomas",
    "about.present": "Presente",

    // About - Experience descriptions
    "about.inpractise.role": "CTO e Ingeniero Principal",
    "about.inpractise.desc":
      "Dise\u00f1\u00e9 la arquitectura tecnol\u00f3gica y desarroll\u00e9 el producto. React, Node, Next, Docker, PostgreSQL, GraphQL.",
    "about.bloomberg.role": "Ingeniero de Software Senior \u00B7 Londres",
    "about.bloomberg.desc":
      "Constru\u00ed herramienta de monitoreo y gesti\u00f3n web para un proceso financiero importante. TypeScript, React, Node, Kubernetes, SQL Server.",
    "about.dazn.role":
      "Ingeniero de Software Senior / DevOps / SRE \u00B7 Londres",
    "about.dazn.desc":
      "Constru\u00ed m\u00faltiples aplicaciones (React, Node, Next, GraphQL, Apollo) alojadas en AWS. Golang, TypeScript, Serverless (Lambda).",
    "about.homeaway.role": "Ingeniero de Software Senior \u00B7 Londres",
    "about.homeaway.desc":
      "Aplicaci\u00f3n React/Node renderizada del lado del servidor, altamente optimizada y resiliente. Redux, Docker, AWS, SEO/SEM, A/B Testing.",
    "about.hirespace.role": "Ingeniero de Software Senior \u00B7 Londres",
    "about.kneip.role": "Ingeniero de Software \u00B7 Luxemburgo",

    // About - Education
    "about.edu.degree":
      "Ing. Electr\u00f3nica Industrial y Automatizaci\u00f3n",
    "about.edu.uni": "Universidad de Castilla-La Mancha, Espa\u00f1a",
    "about.edu.webdev": "Desarrollo Web",
    "about.edu.wit":
      "Waterford Institute of Technology (WIT), Irlanda",

    // About - Languages
    "about.lang.english": "Ingl\u00e9s",
    "about.lang.englishDesc":
      "Muy fluido. Viv\u00ed en Londres m\u00e1s de 7 a\u00f1os. C1. First Certificate de Cambridge.",
    "about.lang.french": "Franc\u00e9s",
    "about.lang.frenchDesc":
      "Fluido. Viv\u00ed en Francia 4 a\u00f1os. B2. DELF.",
    "about.lang.spanish": "Espa\u00f1ol",
    "about.lang.spanishDesc": "Nativo.",

    // Skills
    "about.skill.techStrategy": "Estrategia T\u00e9cnica y Arquitectura",
    "about.skill.productVision": "Visi\u00f3n de Producto",
    "about.skill.polyglot": "Pol\u00edglota \u2014 lo que mis agentes puedan parsear",
    "about.skill.cloud": "Cloud e Infraestructura",
    "about.skill.llm": "Agentes con LLM",
    "about.skill.agentic": "Flujos de Trabajo de Programaci\u00f3n Ag\u00e9ntica",
    "about.skill.pytorch": "PyTorch",
    "about.skill.deepLearning": "Deep Learning",

    // Language picker
    "locale.switch": "Idioma",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["en"];

export function t(locale: Locale, key: TranslationKey): string {
  return translations[locale]?.[key] ?? translations.en[key] ?? key;
}

/** Navigation items translated per locale */
export function getNavigation(locale: Locale) {
  return [
    { href: "/blog", title: t(locale, "nav.blog") },
    { href: "/projects", title: t(locale, "nav.projects") },
    { href: "/about", title: t(locale, "nav.about") },
  ];
}
