"use client";

import { useLanguage } from "@/context/LanguageContext";
import { education } from "@/data/education";
import SectionTag from "@/components/SectionTag";

export default function Education() {
  const { t, lang } = useLanguage();

  return (
    <section id="education" className="max-w-4xl mx-auto px-6 py-20">
      <SectionTag>{t("education.kicker")}</SectionTag>
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground-bright mb-10">
        {t("education.title")}
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {education.map((item) => (
          <div key={item.school} className="rounded-2xl bg-surface border border-foreground/10 p-6">
            <h3 className="font-semibold text-foreground-bright mb-2">
              {item.school}
            </h3>
            <p className="text-sm text-accent-cyan mb-2">{item.degree[lang]}</p>
            <p className="font-mono text-xs text-foreground/50">{item.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
