"use client";

import { PieChart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  experience,
  experienceCategoryMeta,
  monthIndex,
  type ExperienceCategory,
} from "@/data/experience";

export default function ExperienceCategoryBreakdown() {
  const { t, lang } = useLanguage();

  const now = new Date();
  const nowMonth = now.getFullYear() * 12 + now.getMonth();

  const totals: Record<ExperienceCategory, number> = {
    ai: 0,
    banking: 0,
    "data-bi": 0,
  };
  for (const item of experience) {
    const months =
      (item.end ? monthIndex(item.end) : nowMonth) - monthIndex(item.start);
    totals[item.category] += months;
  }
  const grandTotal = Object.values(totals).reduce((a, b) => a + b, 0) || 1;
  const categories = Object.keys(experienceCategoryMeta) as ExperienceCategory[];

  return (
    <div className="mb-8 rounded-2xl bg-surface/60 border border-foreground/10 p-5">
      <p className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-foreground/50 mb-4">
        <PieChart size={14} className="text-accent-purple" />
        {t("experience.breakdownTitle")}
      </p>

      <div className="flex gap-0.5 h-5 mb-4">
        {categories.map((cat) => {
          const pct = (totals[cat] / grandTotal) * 100;
          if (pct <= 0) return null;
          return (
            <div
              key={cat}
              className="h-full first:rounded-l-full last:rounded-r-full transition-all duration-500"
              style={{
                width: `${pct}%`,
                background: experienceCategoryMeta[cat].chartVar,
              }}
              title={`${experienceCategoryMeta[cat].label[lang]}: ${Math.round(pct)}%`}
            />
          );
        })}
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-foreground/70">
        {categories.map((cat) => (
          <span key={cat} className="flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 rounded-full shrink-0"
              style={{ background: experienceCategoryMeta[cat].chartVar }}
            />
            {experienceCategoryMeta[cat].label[lang]} ·{" "}
            {Math.round((totals[cat] / grandTotal) * 100)}%
          </span>
        ))}
      </div>
    </div>
  );
}
