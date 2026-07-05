export interface FeaturedRepo {
  /** Exact GitHub repo name (case-insensitive match). */
  name: string;
  tag: "ai" | "trading" | "quantum";
  description: { en: string; es: string };
}

// Curated allowlist — only repos relevant to AI, Trading and Quantum
// Computing show up in the Projects section, in this order. GitHub
// descriptions are mostly empty, so these are written by hand based on
// repo name/language (not verified line-by-line), kept honest/general.
// To feature a new repo once it's public: add an entry here with its
// exact name — it'll pick up live stars/language/link automatically,
// and simply won't render until the repo exists.
export const featuredRepos: FeaturedRepo[] = [
  {
    name: "AI-QuantumComputer",
    tag: "quantum",
    description: {
      en: "Hands-on notebooks exploring quantum computing (Qiskit) alongside AI/ML — where quantum and machine learning intersect.",
      es: "Notebooks prácticos explorando computación cuántica (Qiskit) junto con IA/ML — donde se cruzan lo cuántico y el machine learning.",
    },
  },
  {
    name: "Polymarket",
    tag: "trading",
    description: {
      en: "Working with Polymarket's prediction-market data — applying a trading lens to on-chain, crowd-sourced probability markets.",
      es: "Trabajando con datos del mercado de predicción Polymarket — aplicando una mirada de trading a mercados on-chain basados en la sabiduría colectiva.",
    },
  },
  {
    name: "n8n",
    tag: "ai",
    description: {
      en: "Automation workflows built on n8n — wiring AI agents into event-driven pipelines instead of one-off scripts.",
      es: "Flujos de automatización construidos con n8n — conectando agentes de IA en pipelines basados en eventos, en vez de scripts sueltos.",
    },
  },
  {
    name: "Project_SaturdayAI",
    tag: "ai",
    description: {
      en: "A weekend AI project — smaller-scope experiments to try new models and techniques outside of work hours.",
      es: "Un proyecto de IA de fin de semana — experimentos de menor escala para probar nuevos modelos y técnicas fuera del horario laboral.",
    },
  },
  {
    name: "AI_PROJECTS",
    tag: "ai",
    description: {
      en: "A running collection of applied AI/ML experiments and notebooks.",
      es: "Una colección en curso de experimentos y notebooks aplicados de IA/ML.",
    },
  },
];
