"use client";

import { useLanguage } from "@/context/LanguageContext";
import { focusAreas } from "@/data/focusAreas";
import SectionTag from "@/components/SectionTag";

const accentText: Record<string, string> = {
  green: "text-accent-green",
  orange: "text-accent-orange",
  purple: "text-accent-purple",
};

const accentBorder: Record<string, string> = {
  green: "hover:border-accent-green/50",
  orange: "hover:border-accent-orange/50",
  purple: "hover:border-accent-purple/50",
};

export default function FocusAreas() {
  const { t, lang } = useLanguage();

  return (
    <section id="focus" className="max-w-4xl mx-auto px-6 py-20">
      <SectionTag>{t("focus.kicker")}</SectionTag>
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground-bright mb-10">
        {t("focus.title")}
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {focusAreas.map((area) => (
          <div
            key={area.id}
            className={`rounded-2xl bg-surface border border-foreground/10 p-6 transition-colors ${accentBorder[area.accent]}`}
          >
            <h3 className={`font-semibold mb-3 ${accentText[area.accent]}`}>
              {area.title[lang]}
            </h3>
            <p className="text-sm leading-relaxed text-foreground/80">
              {area.body[lang]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
