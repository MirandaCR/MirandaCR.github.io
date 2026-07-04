export interface SkillGroup {
  id: string;
  label: { en: string; es: string };
  accent: "green" | "purple" | "blue" | "orange" | "cyan";
  icon: "brain-circuit" | "atom" | "database" | "trending-up" | "gamepad";
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "ai-ml",
    label: { en: "AI / ML", es: "IA / ML" },
    accent: "green",
    icon: "brain-circuit",
    items: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Seaborn",
      "Prompt Engineering",
      "Generative AI / LLMs",
      "n8n (AI agents)",
    ],
  },
  {
    id: "quantum",
    label: { en: "Quantum", es: "Quantum" },
    accent: "purple",
    icon: "atom",
    items: ["Qiskit", "Quantum Computing"],
  },
  {
    id: "data-bi",
    label: { en: "Data / BI", es: "Data / BI" },
    accent: "blue",
    icon: "database",
    items: [
      "SQL (MySQL, PostgreSQL, Oracle, MSSQL)",
      "Power BI",
      "Tableau",
      "Azure",
      "Microsoft Fabric",
      "Apache Hive",
    ],
  },
  {
    id: "trading",
    label: { en: "Trading & Quant", es: "Trading & Quant" },
    accent: "orange",
    icon: "trending-up",
    items: [
      "Trading Strategies",
      "Trading Systems",
      "Quantitative Finance",
      "Technical Analysis",
    ],
  },
  {
    id: "other",
    label: { en: "Other", es: "Otros" },
    accent: "cyan",
    icon: "gamepad",
    items: ["Gamification", "Lean Portfolio Management"],
  },
];

export interface FeaturedCertification {
  title: string;
  issuer: string;
  date: string;
}

// Featured subset of ~40 real LinkedIn certifications — picked for relevance
// to AI/GenAI, trading, data viz and banking-adjacent audiences. Full list
// linked out to LinkedIn rather than dumped here (see siteConfig.linkedinCertificationsUrl).
export const featuredCertifications: FeaturedCertification[] = [
  { title: "Trading con IA Generativa", issuer: "Udemy", date: "Nov 2025" },
  {
    title: "Trading Cuantitativo en Python: Ingeniería Financiera e IA",
    issuer: "Udemy",
    date: "Jan 2025",
  },
  {
    title: "AI & Quantum Computing Mastery",
    issuer: "Udemy",
    date: "Jun 2026",
  },
  {
    title: "ChatGPT Prompt Engineering for Developers",
    issuer: "DeepLearning.AI",
    date: "Jan 2025",
  },
  {
    title: "Agentes de IA Avanzados: MCP, WhatsApp, Voz",
    issuer: "Udemy (n8n)",
    date: "Jul 2025",
  },
  {
    title: "LÍNEA 2024 — Alta Especialidad: Visualización de Datos",
    issuer: "Tecnológico de Monterrey",
    date: "Jan 2024",
  },
  {
    title: "LÍNEA 2024 — Alta Especialidad: Ciencia de Datos",
    issuer: "Tecnológico de Monterrey",
    date: "Jan 2024",
  },
  {
    title: "Certified SAFe® 6 Lean Portfolio Manager",
    issuer: "Scaled Agile",
    date: "May 2024",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "Mar 2023",
  },
];

export const totalCertificationsCount = 41;
