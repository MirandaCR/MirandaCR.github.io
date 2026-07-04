"use client";

import { Compass, Brain, TrendingUp, Link as LinkIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { focusAreas } from "@/data/focusAreas";
import SectionTag from "@/components/SectionTag";

const iconFor = {
  brain: Brain,
  "trending-up": TrendingUp,
  link: LinkIcon,
};

const accentText: Record<string, string> = {
  green: "text-accent-green",
  orange: "text-accent-orange",
  purple: "text-accent-purple",
};

const accentBadge: Record<string, string> = {
  green: "bg-accent-green/10 text-accent-green",
  orange: "bg-accent-orange/10 text-accent-orange",
  purple: "bg-accent-purple/10 text-accent-purple",
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
      <SectionTag icon={Compass}>{t("focus.kicker")}</SectionTag>
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground-bright mb-10">
        {t("focus.title")}
      </h2>

      <div className="grid gap-8 md:grid-cols-3 items-start">
        {focusAreas.map((area) => {
          const Icon = iconFor[area.icon];
          return (
            <div
              key={area.id}
              className={`border-l-2 pl-5 py-0.5 transition-all duration-200 hover:-translate-y-0.5 hover:pl-6 ${accentBorder[area.accent]}`}
            >
              <div
                className={`mb-3 flex h-10 w-10 items-center justify-center rounded-full ${accentBadge[area.accent]}`}
              >
                <Icon size={18} strokeWidth={2} />
              </div>
              <h3 className={`font-semibold mb-2 ${accentText[area.accent]}`}>
                {area.title[lang]}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/80">
                {area.body[lang]}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
