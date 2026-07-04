export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: { en: string; es: string };
  current?: boolean;
  featured?: boolean;
  highlights: { en: string[]; es: string[] };
  collapsedByDefault?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    id: "telus",
    company: "TELUS Digital",
    role: "AI Engineer",
    location: "El Salvador",
    period: { en: "Jan 2026 – Present", es: "Ene 2026 – Presente" },
    current: true,
    highlights: {
      en: [
        "Building and shipping Generative AI solutions focused on real operational efficiency, not proof-of-concepts.",
      ],
      es: [
        "Construyendo y llevando a producción soluciones de IA Generativa enfocadas en eficiencia operativa real, no en pruebas de concepto.",
      ],
    },
  },
  {
    id: "movistar",
    company: "Movistar Ecuador",
    role: "Artificial Intelligence (AI) Specialist",
    location: "Provincia Pichincha, Ecuador",
    period: { en: "Sep 2024 – Dec 2025", es: "Sep 2024 – Dic 2025" },
    highlights: {
      en: [
        "Implemented and tracked Generative AI use cases for the company's collections area.",
        "Managed and monitored GenAI use cases through KPIs.",
        "Prompt engineering for production use cases.",
      ],
      es: [
        "Implementación y seguimiento de Inteligencia Artificial Generativa para la Cobranzas de la compañía.",
        "Gestión y seguimiento de casos de uso con Inteligencia Artificial Generativa mediante KPI's.",
        "Prompt Engineering para casos de uso en producción.",
      ],
    },
  },
  {
    id: "banco-pichincha",
    company: "Banco Pichincha",
    role: "Senior Data Analyst – Strategy",
    location: "Quito, Pichincha, Ecuador",
    period: { en: "Dec 2023 – Aug 2024", es: "Dic 2023 – Ago 2024" },
    featured: true,
    highlights: {
      en: [
        "Built dashboards to visualize and capture the value of strategic initiatives, enabling informed, agile decision-making.",
        "Developed models to prioritize strategic initiatives, aligning efforts with corporate objectives and maximizing impact for customers and stakeholders.",
        "Presented and technically defended proposals before committees and bank vice presidents, influencing organizational strategy at the executive level.",
      ],
      es: [
        "Creación de dashboards que permiten visualizar y capturar el valor de iniciativas estratégicas, facilitando una toma de decisiones informada y ágil.",
        "Generación de modelos para priorizar iniciativas estratégicas, asegurando que los esfuerzos se alineen con los objetivos corporativos y maximicen el impacto positivo para clientes y stakeholders.",
        "Presentación y defensa técnica ante comités y vicepresidentes del banco para influir en la estrategia organizacional a nivel ejecutivo.",
      ],
    },
  },
  {
    id: "tdw",
    company: "TDW Group",
    role: "Data Engineer",
    location: "San Salvador, El Salvador",
    period: { en: "Aug 2023 – Dec 2023", es: "Ago 2023 – Dic 2023" },
    highlights: { en: [], es: [] },
  },
  {
    id: "gpf-coordinador",
    company: "Corporación GPF (Grupo Fybeca)",
    role: "Coordinador de Business Intelligence",
    location: "Pichincha, Ecuador",
    period: { en: "Jul 2022 – Feb 2023", es: "Jul 2022 – Feb 2023" },
    highlights: { en: [], es: [] },
    collapsedByDefault: true,
  },
  {
    id: "gpf-analyst",
    company: "Corporación GPF (Grupo Fybeca)",
    role: "Business Intelligence Analyst",
    location: "Pichincha, Ecuador",
    period: { en: "May 2021 – Jul 2022", es: "May 2021 – Jul 2022" },
    highlights: { en: [], es: [] },
    collapsedByDefault: true,
  },
  {
    id: "rochi",
    company: "Rochi Consulting | Knowledge & Insights",
    role: "Data and Visualization Analyst Consultant",
    location: "San Salvador, El Salvador",
    period: { en: "May 2021 – Mar 2022", es: "May 2021 – Mar 2022" },
    highlights: { en: [], es: [] },
    collapsedByDefault: true,
  },
  {
    id: "epn-tech",
    company: "Empresa Pública EPN-TECH E.P.",
    role: "Coordinador de proyecto",
    location: "Quito, Pichincha, Ecuador",
    period: { en: "Dec 2019 – May 2021", es: "Dic 2019 – May 2021" },
    highlights: { en: [], es: [] },
    collapsedByDefault: true,
  },
  {
    id: "produbanco",
    company: "PRODUBANCO – Grupo Promerica",
    role: "Intern",
    location: "Quito, Ecuador",
    period: { en: "Nov 2018 – Dec 2018", es: "Nov 2018 – Dic 2018" },
    highlights: {
      en: ["Data analysis and processing."],
      es: ["Análisis y procesamiento de datos."],
    },
    collapsedByDefault: true,
  },
];
