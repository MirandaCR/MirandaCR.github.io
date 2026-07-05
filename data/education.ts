export interface EducationItem {
  school: string;
  countryFlag: string;
  countryName: { en: string; es: string };
  degree: { en: string; es: string };
  period: string;
}

export const education: EducationItem[] = [
  {
    school: "Tecnológico de Monterrey",
    countryFlag: "🇲🇽",
    countryName: { en: "Mexico", es: "México" },
    degree: { en: "M.Sc., Artificial Intelligence", es: "Maestría, Inteligencia Artificial" },
    period: "Apr 2021 – Jun 2024",
  },
  {
    school: "Tsinghua University",
    countryFlag: "🇨🇳",
    countryName: { en: "China", es: "China" },
    degree: {
      en: "Global Exchange Program — Technology Innovation and Entrepreneurship",
      es: "Global Exchange Program — Technology Innovation and Entrepreneurship",
    },
    period: "Apr 2023 – Jul 2023",
  },
  {
    school: "Escuela Politécnica Nacional",
    countryFlag: "🇪🇨",
    countryName: { en: "Ecuador", es: "Ecuador" },
    degree: {
      en: "B.Eng., Economic & Financial Sciences",
      es: "Ingeniería en Ciencias Económicas y Financieras",
    },
    period: "2014 – 2019",
  },
];
