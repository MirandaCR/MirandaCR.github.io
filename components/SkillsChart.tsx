"use client";

import { BarChart3 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { skillGroups } from "@/data/skills";

const chartColor: Record<string, string> = {
  green: "var(--color-chart-green)",
  purple: "var(--color-chart-purple)",
  blue: "var(--color-chart-blue)",
  orange: "var(--color-chart-orange)",
  cyan: "var(--color-chart-cyan)",
};

export default function SkillsChart() {
  const { t, lang } = useLanguage();
  const max = Math.max(...skillGroups.map((g) => g.items.length));

  return (
    <div className="mb-10 rounded-2xl bg-surface/60 border border-foreground/10 p-5">
      <p className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-foreground/50 mb-4">
        <BarChart3 size={14} className="text-accent-blue" />
        {t("skills.chartTitle")}
      </p>
      <div className="space-y-3">
        {skillGroups.map((group) => {
          const pct = (group.items.length / max) * 100;
          return (
            <div key={group.id} className="flex items-center gap-3">
              <div className="w-24 sm:w-28 shrink-0 text-xs text-foreground/70">
                {group.label[lang]}
              </div>
              <div className="relative flex-1 h-5 rounded-full bg-chart-grid/60 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${Math.max(pct, 10)}%`,
                    background: chartColor[group.accent],
                  }}
                />
              </div>
              <div className="w-5 shrink-0 text-xs font-mono text-foreground/50 text-right">
                {group.items.length}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
