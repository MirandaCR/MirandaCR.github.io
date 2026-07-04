export interface FocusArea {
  id: string;
  accent: "green" | "orange" | "purple";
  title: { en: string; es: string };
  body: { en: string; es: string };
}

// NOTE: trading & DeFi framing is deliberately honest about being an early,
// personal pursuit rather than professional experience — confirm wording
// with Cristian before publishing since it's his voice, not marketing copy.
export const focusAreas: FocusArea[] = [
  {
    id: "genai",
    accent: "green",
    title: { en: "Applied GenAI", es: "IA Generativa aplicada" },
    body: {
      en: "My day-to-day: taming Generative AI models so they stop being toys and become real engines of operational efficiency. I've gone from optimizing LLMs in the telco industry to designing AI solutions that actually move the needle for the business.",
      es: "Mi día a día: domar modelos de IA Generativa para que dejen de ser juguetes y se conviertan en motores de eficiencia operativa. He pasado de optimizar LLMs en el sector telco a diseñar soluciones de IA que realmente mueven la aguja del negocio.",
    },
  },
  {
    id: "trading",
    accent: "orange",
    title: { en: "Algorithmic Trading", es: "Algorithmic Trading" },
    body: {
      en: "Outside office hours, my brain doesn't switch off. I use AI for what I enjoy most: if there's an inefficiency in the market, I want to automate capturing it. Still early in this path, and I'd rather say that plainly than oversell it.",
      es: "Fuera del horario de oficina, mi cerebro no se apaga. Uso la IA para lo que más me divierte: si hay una ineficiencia en el mercado, quiero automatizar su captura. Todavía estoy empezando en este camino y prefiero decirlo con claridad antes que exagerarlo.",
    },
  },
  {
    id: "defi",
    accent: "purple",
    title: { en: "DeFi & Tokenization", es: "DeFi y Tokenización" },
    body: {
      en: "Lately I've been diving headfirst into DeFi, tokenization, and digital assets — not because it's trendy, but because the future of finance will be programmable, or it won't be at all.",
      es: "Últimamente me he sumergido de cabeza en el ecosistema DeFi, tokenización y activos digitales; no porque sea una moda, sino porque el futuro de las finanzas será programable o no será.",
    },
  },
];
