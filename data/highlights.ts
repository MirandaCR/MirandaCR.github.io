export interface Highlight {
  value: string;
  icon: "calendar" | "globe" | "graduation-cap" | "landmark";
  accent: "green" | "blue" | "purple" | "cyan";
  label: { en: string; es: string };
}

// Real, literal facts derived from the CV — no invented metrics (years of
// "experience" as a single number is left out deliberately since it's fuzzy;
// these are all directly countable/quotable instead).
export const highlights: Highlight[] = [
  {
    value: "2019",
    icon: "calendar",
    accent: "green",
    label: {
      en: "Building in data & AI since",
      es: "Construyendo en datos e IA desde",
    },
  },
  {
    value: "🇸🇻 🇪🇨 🇨🇳",
    icon: "globe",
    accent: "blue",
    label: {
      en: "3 countries — lived, studied & worked across (7 companies)",
      es: "3 países — viví, estudié y trabajé en (7 empresas)",
    },
  },
  {
    value: "M.Sc.",
    icon: "graduation-cap",
    accent: "purple",
    label: {
      en: "Applied AI — Tecnológico de Monterrey",
      es: "IA Aplicada — Tecnológico de Monterrey",
    },
  },
  {
    value: "9 mo",
    icon: "landmark",
    accent: "cyan",
    label: {
      en: "Inside Banco Pichincha's strategy team",
      es: "Dentro del equipo de estrategia de Banco Pichincha",
    },
  },
];
