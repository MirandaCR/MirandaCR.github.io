export interface SkillGroup {
  id: string;
  label: { en: string; es: string };
  accent: "green" | "purple" | "blue" | "orange";
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "ai-ml",
    label: { en: "AI / ML", es: "IA / ML" },
    accent: "green",
    items: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Seaborn",
      "Prompt Engineering",
      "Generative AI / LLMs",
    ],
  },
  {
    id: "quantum",
    label: { en: "Quantum", es: "Quantum" },
    accent: "purple",
    items: ["Qiskit", "Quantum Computing"],
  },
  {
    id: "data-bi",
    label: { en: "Data / BI", es: "Data / BI" },
    accent: "blue",
    items: [
      "SQL (MySQL, PostgreSQL, Oracle, MSSQL)",
      "Power BI",
      "Azure",
      "Apache Hive",
    ],
  },
  {
    id: "other",
    label: { en: "Other", es: "Otros" },
    accent: "orange",
    items: ["Gamification"],
  },
];

export interface Certification {
  title: { en: string; es: string };
}

export const certifications: Certification[] = [
  {
    title: {
      en: "LÍNEA 2024 — High Specialty Certificate: Artificial Intelligence & Machine Learning",
      es: "LÍNEA 2024 — Certificado de Alta Especialidad: Inteligencia Artificial y Aprendizaje Automático",
    },
  },
  {
    title: {
      en: "Exploratory Data Analysis & Statistical Report Automation",
      es: "Análisis Exploratorio de Datos y Automatización de Reportes Estadísticos",
    },
  },
  { title: { en: "Unsupervised Learning in R", es: "Unsupervised Learning in R" } },
  {
    title: {
      en: "Working with Categorical Data in Python",
      es: "Working with Categorical Data in Python",
    },
  },
];
