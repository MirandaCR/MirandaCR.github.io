"use client";

import { useLanguage } from "@/context/LanguageContext";
import { skillGroups, certifications } from "@/data/skills";
import SectionTag from "@/components/SectionTag";

const accentBorder: Record<string, string> = {
  green: "border-accent-green/40 text-accent-green",
  purple: "border-accent-purple/40 text-accent-purple",
  blue: "border-accent-blue/40 text-accent-blue",
  orange: "border-accent-orange/40 text-accent-orange",
};

export default function Skills() {
  const { t, lang } = useLanguage();

  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-20">
      <SectionTag>{t("skills.kicker")}</SectionTag>
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground-bright mb-10">
        {t("skills.title")}
      </h2>

      <div className="space-y-8">
        {skillGroups.map((group) => (
          <div key={group.id}>
            <p className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-3">
              {group.label[lang]}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className={`rounded-full border px-3 py-1.5 text-sm ${accentBorder[group.accent]}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="font-mono text-xs uppercase tracking-widest text-foreground/50 mt-12 mb-3">
        {t("skills.certsTitle")}
      </p>
      <ul className="space-y-2 text-sm text-foreground/80 list-disc list-outside pl-4">
        {certifications.map((cert, i) => (
          <li key={i}>{cert.title[lang]}</li>
        ))}
      </ul>
    </section>
  );
}
