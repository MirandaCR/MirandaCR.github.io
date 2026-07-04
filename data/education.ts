export interface EducationItem {
  school: string;
  degree: { en: string; es: string };
  period: string;
}

export const education: EducationItem[] = [
  {
    school: "Tecnológico de Monterrey",
    degree: { en: "M.Sc., Artificial Intelligence", es: "Maestría, Inteligencia Artificial" },
    period: "Apr 2021 – Jun 2024",
  },
  {
    school: "Tsinghua University",
    degree: {
      en: "Global Exchange Program — Technology Innovation and Entrepreneurship",
      es: "Global Exchange Program — Technology Innovation and Entrepreneurship",
    },
    period: "Apr 2023 – Jul 2023",
  },
  {
    school: "Escuela Politécnica Nacional",
    degree: {
      en: "B.Eng., Economic & Financial Sciences",
      es: "Ingeniería en Ciencias Económicas y Financieras",
    },
    period: "2014 – 2019",
  },
];
