"use client";

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
  const { lang } = useLanguage();
  const max = Math.max(...skillGroups.map((g) => g.items.length));

  return (
    <div className="space-y-2.5 mb-10">
      {skillGroups.map((group) => {
        const pct = (group.items.length / max) * 100;
        return (
          <div key={group.id} className="flex items-center gap-3">
            <div className="w-24 sm:w-28 shrink-0 text-xs text-foreground/70">
              {group.label[lang]}
            </div>
            <div className="relative flex-1 h-5">
              <div
                className="h-4 rounded-full"
                style={{
                  width: `${Math.max(pct, 8)}%`,
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
  );
}
