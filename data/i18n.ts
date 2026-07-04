export const dictionary = {
  en: {
    nav: {
      brand: "cristian.miranda",
      langToggle: "ES",
    },
    hero: {
      kicker: "AI Engineer",
      title: "Cristian Miranda",
      role: "AI Engineer · Algorithmic Trading & DeFi enthusiast · Applied AI M.Sc.",
      location: "San Salvador, El Salvador",
      tagline:
        "I'm not interested in technology that just “works” — I'm interested in technology that transforms.",
      cta: "Get in touch",
      secondaryCta: "See GitHub",
    },
    about: {
      kicker: "About",
      title: "A bit about how I think",
      paragraph:
        "As an AI Engineer, my day-to-day is about taming Generative AI models so they stop being toys and become real engines of operational efficiency. I've gone from optimizing LLMs in the telco industry to designing AI solutions that actually move the needle for the business. Outside office hours, my brain doesn't switch off: I use AI for what I enjoy most — Algorithmic Trading. If there's an inefficiency in the market, I want to automate capturing it. Lately I've been diving headfirst into DeFi, tokenization, and digital assets — not because it's trendy, but because the future of finance will be programmable, or it won't be at all.",
      closing:
        "If you're looking for someone who knows the difference between a well-designed prompt and a waste of time — or if you want to debate why decentralized finance is going to break the traditional model — let's talk.",
    },
    experience: {
      kicker: "Experience",
      title: "Where I've worked",
      present: "Present",
      showMore: "Show earlier roles",
      showLess: "Show less",
      featuredNote: "Most relevant for financial services",
    },
    focus: {
      kicker: "Focus Areas",
      title: "What I actually spend my time on",
    },
    skills: {
      kicker: "Skills",
      title: "Tools I reach for",
      certsTitle: "Certifications",
    },
    projects: {
      kicker: "Projects",
      title: "Featured GitHub projects",
      loading: "Loading projects from GitHub…",
      error:
        "Couldn't load projects right now — GitHub's public API allows only 60 unauthenticated requests per hour, so this can happen briefly. Try refreshing in a bit, or view the profile directly.",
      empty: "No public repositories to show yet.",
      viewOnGithub: "View on GitHub",
      viewProfile: "View full GitHub profile",
      footnote:
        "Live data from the GitHub API — may be briefly unavailable if rate-limited.",
    },
    education: {
      kicker: "Education",
      title: "Academic background",
    },
    footer: {
      kicker: "Contact",
      title: "Let's talk",
      builtWith: "Built with Next.js, hosted on GitHub Pages.",
    },
  },
  es: {
    nav: {
      brand: "cristian.miranda",
      langToggle: "EN",
    },
    hero: {
      kicker: "AI Engineer",
      title: "Cristian Miranda",
      role: "AI Engineer · Apasionado por Algorithmic Trading y DeFi · Applied AI M.Sc.",
      location: "San Salvador, El Salvador",
      tagline:
        "No me interesa la tecnología que solo “funciona”, me interesa la que transforma.",
      cta: "Hablemos",
      secondaryCta: "Ver GitHub",
    },
    about: {
      kicker: "Sobre mí",
      title: "Un poco sobre cómo pienso",
      paragraph:
        "Como AI Engineer, mi día a día consiste en domar modelos de IA Generativa para que dejen de ser juguetes y se conviertan en motores de eficiencia operativa. He pasado de optimizar LLMs en el sector telco a diseñar soluciones de IA que realmente mueven la aguja del negocio. Fuera del horario de oficina, mi cerebro no se apaga. Utilizo la IA para lo que más me divierte: el Algorithmic Trading. Si hay una ineficiencia en el mercado, quiero automatizar su captura. Últimamente, me he estado sumergiendo de cabeza en el ecosistema DeFi, tokenización y activos digitales; no porque sea una moda, sino porque el futuro de las finanzas será programable o no será.",
      closing:
        "Si buscas a alguien que sepa la diferencia entre un prompt bien diseñado y una pérdida de tiempo, o si quieres debatir sobre por qué las finanzas descentralizadas van a romper el modelo tradicional, hablemos.",
    },
    experience: {
      kicker: "Experiencia",
      title: "Dónde he trabajado",
      present: "Presente",
      showMore: "Ver roles anteriores",
      showLess: "Ver menos",
      featuredNote: "Lo más relevante para el sector financiero",
    },
    focus: {
      kicker: "Áreas de enfoque",
      title: "En qué invierto realmente mi tiempo",
    },
    skills: {
      kicker: "Habilidades",
      title: "Herramientas que uso",
      certsTitle: "Certificaciones",
    },
    projects: {
      kicker: "Proyectos",
      title: "Proyectos destacados de GitHub",
      loading: "Cargando proyectos desde GitHub…",
      error:
        "No se pudieron cargar los proyectos en este momento — la API pública de GitHub permite solo 60 solicitudes por hora sin autenticación, así que puede pasar brevemente. Intenta refrescar en un momento, o visita el perfil directamente.",
      empty: "Todavía no hay repositorios públicos para mostrar.",
      viewOnGithub: "Ver en GitHub",
      viewProfile: "Ver perfil completo de GitHub",
      footnote:
        "Datos en vivo desde la API de GitHub — puede no estar disponible brevemente por límite de solicitudes.",
    },
    education: {
      kicker: "Educación",
      title: "Formación académica",
    },
    footer: {
      kicker: "Contacto",
      title: "Hablemos",
      builtWith: "Construido con Next.js, alojado en GitHub Pages.",
    },
  },
} as const;

export type Lang = keyof typeof dictionary;
