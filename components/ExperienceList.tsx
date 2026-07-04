"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { experience } from "@/data/experience";

export default function ExperienceList() {
  const { t, lang } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const visible = showAll
    ? experience
    : experience.filter((item) => !item.collapsedByDefault);
  const hasCollapsed = experience.some((item) => item.collapsedByDefault);

  return (
    <div>
      <ol className="space-y-10 border-l border-foreground/15 pl-6">
        {visible.map((item) => (
          <li key={item.id} className="relative">
            <span
              className={`absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full ${
                item.featured
                  ? "bg-accent-cyan"
                  : item.current
                    ? "bg-accent-green"
                    : "bg-foreground/30"
              }`}
            />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-lg font-semibold text-foreground-bright">
                {item.company}
              </h3>
              {item.featured && (
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent-cyan border border-accent-cyan/40 rounded-full px-2 py-0.5">
                  {t("experience.featuredNote")}
                </span>
              )}
            </div>
            <p className="text-accent-orange text-sm font-medium mt-0.5">
              {item.role}
            </p>
            <p className="font-mono text-xs text-foreground/50 mt-1">
              {item.period[lang]} · {item.location}
            </p>
            {item.highlights[lang].length > 0 && (
              <ul className="mt-3 space-y-1.5 text-sm text-foreground/80 list-disc list-outside pl-4">
                {item.highlights[lang].map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>

      {hasCollapsed && (
        <button
          onClick={() => setShowAll((v) => !v)}
          className="mt-8 font-mono text-xs uppercase tracking-widest text-accent-purple hover:underline underline-offset-4"
        >
          {showAll ? t("experience.showLess") : t("experience.showMore")}
        </button>
      )}
    </div>
  );
}
