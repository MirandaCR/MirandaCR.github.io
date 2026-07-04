"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  experience,
  experienceCategoryMeta,
  type ExperienceCategory,
} from "@/data/experience";

function monthIndex(iso: string): number {
  const [y, m] = iso.split("-").map(Number);
  return y * 12 + (m - 1);
}

export default function ExperienceTimeline() {
  const { lang } = useLanguage();
  const [active, setActive] = useState<string | null>(null);

  const { rows, yearTicks } = useMemo(() => {
    const now = new Date();
    const nowMonth = now.getFullYear() * 12 + now.getMonth();
    const starts = experience.map((item) => monthIndex(item.start));
    const minMonth = Math.min(...starts);
    const maxMonth = nowMonth;
    const totalMonths = Math.max(maxMonth - minMonth, 1);

    const rows = [...experience]
      .sort((a, b) => monthIndex(b.start) - monthIndex(a.start))
      .map((item) => {
        const startOffset = monthIndex(item.start) - minMonth;
        const endOffset =
          (item.end ? monthIndex(item.end) : nowMonth) - minMonth;
        const leftPct = (startOffset / totalMonths) * 100;
        const widthPct = Math.max(
          ((endOffset - startOffset) / totalMonths) * 100,
          1.8
        );
        return { item, leftPct, widthPct };
      });

    const minYear = Math.floor(minMonth / 12);
    const maxYear = Math.floor(maxMonth / 12);
    const yearTicks = [];
    for (let y = minYear; y <= maxYear; y++) {
      const offset = y * 12 - minMonth;
      if (offset < 0 || offset > totalMonths) continue;
      yearTicks.push({ year: y, pct: (offset / totalMonths) * 100 });
    }

    return { rows, yearTicks };
  }, []);

  const categories = Object.keys(experienceCategoryMeta) as ExperienceCategory[];

  return (
    <div className="rounded-2xl bg-surface/60 border border-foreground/10 p-5">
      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 font-mono text-xs">
        {categories.map((cat) => (
          <span key={cat} className="flex items-center gap-2 text-foreground/70">
            <span
              className="h-2.5 w-2.5 rounded-full shrink-0"
              style={{ background: experienceCategoryMeta[cat].chartVar }}
            />
            {experienceCategoryMeta[cat].label[lang]}
          </span>
        ))}
      </div>

      <div className="relative ml-32 sm:ml-40 h-4 mb-1">
        {yearTicks.map((t) => (
          <span
            key={t.year}
            className="absolute -translate-x-1/2 text-[10px] font-mono text-chart-muted"
            style={{ left: `${t.pct}%` }}
          >
            {t.year}
          </span>
        ))}
      </div>

      <div className="space-y-2">
        {rows.map(({ item, leftPct, widthPct }) => {
          const meta = experienceCategoryMeta[item.category];
          const isActive = active === item.id;
          return (
            <div key={item.id} className="flex items-center gap-2 sm:gap-3">
              <div
                className="w-32 sm:w-40 shrink-0 text-xs text-foreground/70 truncate"
                title={item.company}
              >
                {item.company}
              </div>
              <div className="relative flex-1 h-6 rounded-full bg-chart-grid/40">
                {yearTicks.map((t) => (
                  <div
                    key={t.year}
                    className="absolute top-0 bottom-0 w-px bg-chart-grid"
                    style={{ left: `${t.pct}%` }}
                  />
                ))}
                <button
                  type="button"
                  onMouseEnter={() => setActive(item.id)}
                  onMouseLeave={() => setActive((v) => (v === item.id ? null : v))}
                  onFocus={() => setActive(item.id)}
                  onBlur={() => setActive((v) => (v === item.id ? null : v))}
                  aria-label={`${item.company}: ${item.role}, ${item.period[lang]}`}
                  className="absolute h-5 top-0.5 rounded-full transition-[filter] outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
                  style={{
                    left: `${leftPct}%`,
                    width: `${widthPct}%`,
                    background: meta.chartVar,
                    filter: isActive ? "brightness(1.2)" : undefined,
                  }}
                />
                {isActive && (
                  <div
                    role="tooltip"
                    className="absolute z-10 -top-2 -translate-y-full rounded-lg bg-surface-alt border border-foreground/15 px-3 py-2 shadow-lg pointer-events-none whitespace-nowrap"
                    style={{ left: `${leftPct}%` }}
                  >
                    <p className="text-xs font-semibold text-foreground-bright">
                      {item.company}
                    </p>
                    <p className="text-[11px] text-foreground/70">
                      {item.role} · {item.period[lang]}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
