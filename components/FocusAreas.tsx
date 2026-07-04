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
  green: "border-accent-green/30 hover:border-accent-green",
  orange: "border-accent-orange/30 hover:border-accent-orange",
  purple: "border-accent-purple/30 hover:border-accent-purple",
};

export default function FocusAreas() {
  const { t, lang } = useLanguage();

  return (
    <section id="focus" className="max-w-4xl mx-auto px-6 py-16">
      <SectionTag>{t("focus.kicker")}</SectionTag>
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground-bright mb-10">
        {t("focus.title")}
      </h2>

      <div className="grid gap-8 md:grid-cols-3 items-start">
        {focusAreas.map((area) => (
          <div
            key={area.id}
            className={`border-l-2 pl-5 py-0.5 transition-all duration-200 hover:-translate-y-0.5 hover:pl-6 ${accentBorder[area.accent]}`}
          >
            <h3 className={`font-semibold mb-2 ${accentText[area.accent]}`}>
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
