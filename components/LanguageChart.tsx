"use client";

import { Code2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { GithubRepo } from "@/lib/github";

export default function LanguageChart({ repos }: { repos: GithubRepo[] }) {
  const { t } = useLanguage();

  const counts = new Map<string, number>();
  for (const repo of repos) {
    if (!repo.language) continue;
    counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
  }
  const entries = [...counts.entries()].sort((a, b) => b[1] - a[1]);

  if (entries.length === 0) return null;

  const max = entries[0][1];

  return (
    <div className="mb-8 rounded-2xl bg-surface/60 border border-foreground/10 p-5">
      <p className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-foreground/50 mb-4">
        <Code2 size={14} className="text-accent-cyan" />
        {t("projects.langChartTitle")}
      </p>
      <div className="space-y-3">
        {entries.map(([lang, count]) => (
          <div key={lang} className="flex items-center gap-3">
            <div className="w-24 sm:w-28 shrink-0 text-xs text-foreground/70 truncate">
              {lang}
            </div>
            <div className="relative flex-1 h-5 rounded-full bg-chart-grid/60 overflow-hidden">
              <div
                className="h-full rounded-full bg-chart-blue transition-all duration-500"
                style={{ width: `${Math.max((count / max) * 100, 10)}%` }}
              />
            </div>
            <div className="w-5 shrink-0 text-xs font-mono text-foreground/50 text-right">
              {count}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
