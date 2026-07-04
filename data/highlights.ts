export interface Highlight {
  value: string;
  icon: "calendar" | "building" | "graduation-cap" | "landmark";
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
    value: "7",
    icon: "building",
    accent: "blue",
    label: {
      en: "Companies across El Salvador & Ecuador",
      es: "Empresas entre El Salvador y Ecuador",
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
