export interface FocusArea {
  id: string;
  accent: "green" | "orange" | "purple";
  icon: "brain" | "trending-up" | "link";
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
    icon: "brain",
    title: { en: "Applied GenAI", es: "IA Generativa aplicada" },
    body: {
      en: "Taming Generative AI models so they stop being toys and become engines of operational efficiency — from optimizing LLMs in telco to AI solutions that move the needle for the business.",
      es: "Domar modelos de IA Generativa para que dejen de ser juguetes y se conviertan en motores de eficiencia operativa — de optimizar LLMs en telco a soluciones de IA que mueven la aguja del negocio.",
    },
  },
  {
    id: "trading",
    accent: "orange",
    icon: "trending-up",
    title: { en: "Algorithmic Trading", es: "Algorithmic Trading" },
    body: {
      en: "If there's an inefficiency in the market, I want to automate capturing it. Still early in this path — I'd rather say that plainly than oversell it.",
      es: "Si hay una ineficiencia en el mercado, quiero automatizar su captura. Todavía estoy empezando en este camino — prefiero decirlo con claridad antes que exagerarlo.",
    },
  },
  {
    id: "defi",
    accent: "purple",
    icon: "link",
    title: { en: "DeFi & Tokenization", es: "DeFi y Tokenización" },
    body: {
      en: "Lately I've been diving headfirst into DeFi, tokenization, and digital assets — not because it's trendy, but because the future of finance will be programmable, or it won't be at all.",
      es: "Últimamente me he sumergido de cabeza en el ecosistema DeFi, tokenización y activos digitales; no porque sea una moda, sino porque el futuro de las finanzas será programable o no será.",
    },
  },
];
