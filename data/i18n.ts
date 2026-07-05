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
        "I've spent the last few years turning Generative AI from a demo into something that actually moves business metrics — first in telco, now in banking-adjacent work. The three areas below are where that shows up day to day.",
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
      toggleChart: "View as timeline",
      toggleList: "View as list",
      breakdownTitle: "Time by focus area",
    },
    focus: {
      kicker: "Focus Areas",
      title: "What I actually spend my time on",
    },
    skills: {
      kicker: "Skills",
      title: "Tools I reach for",
      chartTitle: "Skill focus by area",
      certsTitle: "Certifications",
      certsMoreLabel: "more on LinkedIn",
      certsChartTitle: "Certifications per year",
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
      langChartTitle: "Language breakdown (live)",
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
        "En los últimos años he llevado la IA Generativa de ser una demo a algo que realmente mueve métricas de negocio — primero en telco, ahora en proyectos cercanos a la banca. Las tres áreas de abajo son donde eso se nota en el día a día.",
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
      toggleChart: "Ver como timeline",
      toggleList: "Ver como lista",
      breakdownTitle: "Tiempo por área de enfoque",
    },
    focus: {
      kicker: "Áreas de enfoque",
      title: "En qué invierto realmente mi tiempo",
    },
    skills: {
      kicker: "Habilidades",
      title: "Herramientas que uso",
      chartTitle: "Enfoque de habilidades por área",
      certsTitle: "Certificaciones",
      certsMoreLabel: "más en LinkedIn",
      certsChartTitle: "Certificaciones por año",
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
      langChartTitle: "Distribución por lenguaje (en vivo)",
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
