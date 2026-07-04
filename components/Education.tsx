"use client";

import { useLanguage } from "@/context/LanguageContext";
import { education } from "@/data/education";
import SectionTag from "@/components/SectionTag";

export default function Education() {
  const { t, lang } = useLanguage();

  return (
    <section id="education" className="max-w-4xl mx-auto px-6 py-16">
      <SectionTag>{t("education.kicker")}</SectionTag>
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground-bright mb-10">
        {t("education.title")}
      </h2>

      <div className="divide-y divide-foreground/10 border-t border-b border-foreground/10">
        {education.map((item) => (
          <div
            key={item.school}
            className="group flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-4 transition-colors hover:bg-surface/40 px-2 -mx-2"
          >
            <div>
              <h3 className="font-semibold text-foreground-bright group-hover:text-accent-cyan transition-colors">
                {item.school}
              </h3>
              <p className="text-sm text-foreground/70">{item.degree[lang]}</p>
            </div>
            <p className="font-mono text-xs text-foreground/50 shrink-0">
              {item.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
