export interface FeaturedRepo {
  /** Exact GitHub repo name (case-insensitive match). */
  name: string;
  tag: "ai" | "trading" | "quantum" | "data";
  description: { en: string; es: string };
  /** Live deployed demo/analysis, if any — shown as the primary link instead of just GitHub. */
  demoUrl?: string;
  /** Gets the wide, full-detail card treatment even without a live demo. */
  featured?: boolean;
}

// Curated allowlist — only repos relevant to AI, Trading, Quantum Computing
// and Data/Econometrics show up in the Projects section, in this order.
// GitHub descriptions are mostly empty, so most of these are written by hand
// based on repo name/language (not verified line-by-line), kept honest/
// general — el-salvador-sintetico and binary-quant-trader are the exception,
// described from their own READMEs since they're real, verifiable public work.
// To feature a new repo once it's public: add an entry here with its
// exact name — it'll pick up live stars/language/link automatically,
// and simply won't render until the repo exists.
export const featuredRepos: FeaturedRepo[] = [
  {
    name: "el-salvador-sintetico",
    tag: "data",
    demoUrl: "https://mirandacr.github.io/el-salvador-sintetico/",
    featured: true,
    description: {
      en: "An interactive synthetic \"digital twin\" of El Salvador, built on NVIDIA's Nemotron-Personas dataset (148K AI-generated personas). Choropleth maps by department, econometric modeling (OLS, spatial autocorrelation), and a synthetic Human Capital Index — with an explicit section on what the data can and can't claim.",
      es: "Un \"gemelo digital\" sintético de El Salvador, construido sobre el dataset Nemotron-Personas de NVIDIA (148K personas generadas por IA). Mapas coropléticos por departamento, modelado econométrico (OLS, autocorrelación espacial) y un Índice de Capital Humano sintético — con una sección explícita sobre qué sí y qué no puede afirmar el dato.",
    },
  },
  {
    name: "binary-quant-trader",
    tag: "trading",
    featured: true,
    description: {
      en: "A hybrid AI trading system for binary options: LLM agents (DeepSeek/GPT/Gemini/Claude) that write and improve strategies, a traditional ML layer that meta-labels real trade history, a risk manager, and a live Next.js dashboard. Ships with its own honest disclaimer — it proves out the engineering, not a guaranteed edge.",
      es: "Un sistema de trading híbrido con IA para opciones binarias: agentes LLM (DeepSeek/GPT/Gemini/Claude) que escriben y mejoran estrategias, una capa de ML tradicional que evalúa el historial real de operaciones, un gestor de riesgo y un dashboard en vivo con Next.js. Incluye su propio disclaimer honesto — demuestra la ingeniería, no una ventaja garantizada.",
    },
  },
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
];
