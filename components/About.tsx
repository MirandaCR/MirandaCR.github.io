"use client";

import { Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import SectionTag from "@/components/SectionTag";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16">
      <SectionTag icon={Sparkles}>{t("about.kicker")}</SectionTag>
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground-bright mb-6">
        {t("about.title")}
      </h2>
      <p className="text-base md:text-lg leading-relaxed text-foreground max-w-2xl mb-6">
        {t("about.paragraph")}
      </p>
      <p className="text-base md:text-lg leading-relaxed text-accent-cyan max-w-2xl">
        {t("about.closing")}
      </p>
    </section>
  );
}
