"use client";

import { useState } from "react";
import { LineChart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { certificationsPerYear } from "@/data/certificationsTimeline";

export default function CertificationsTimeline() {
  const { t } = useLanguage();
  const [active, setActive] = useState<number | null>(null);
  const max = Math.max(...certificationsPerYear.map((d) => d.count));

  return (
    <div className="mb-8 rounded-2xl bg-surface/60 border border-foreground/10 p-5">
      <p className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-foreground/50 mb-6">
        <LineChart size={14} className="text-accent-cyan" />
        {t("skills.certsChartTitle")}
      </p>
      <div className="flex items-end gap-2.5 sm:gap-4 h-32 border-b border-chart-grid">
        {certificationsPerYear.map((d) => {
          const heightPct = Math.max((d.count / max) * 100, 6);
          const isActive = active === d.year;
          return (
            <div
              key={d.year}
              className="flex-1 flex flex-col items-center justify-end h-full"
              onMouseEnter={() => setActive(d.year)}
              onMouseLeave={() => setActive(null)}
            >
              <span
                className={`mb-1 font-mono text-[11px] transition-colors ${isActive ? "text-accent-cyan" : "text-foreground/60"}`}
              >
                {d.count}
              </span>
              <div
                role="img"
                aria-label={`${d.year}: ${d.count}`}
                tabIndex={0}
                className="w-full max-w-8 rounded-t-md bg-chart-cyan transition-[filter] outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
                style={{
                  height: `${heightPct}%`,
                  filter: isActive ? "brightness(1.25)" : undefined,
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="flex gap-2.5 sm:gap-4 mt-2">
        {certificationsPerYear.map((d) => (
          <div
            key={d.year}
            className="flex-1 text-center font-mono text-[10px] text-foreground/50"
          >
            {d.year}
          </div>
        ))}
      </div>
    </div>
  );
}
