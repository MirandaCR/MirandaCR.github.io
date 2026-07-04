"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import SectionTag from "@/components/SectionTag";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ExperienceList from "@/components/ExperienceList";

export default function Experience() {
  const { t } = useLanguage();
  const [view, setView] = useState<"chart" | "list">("chart");

  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16">
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-10">
        <div>
          <SectionTag>{t("experience.kicker")}</SectionTag>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground-bright">
            {t("experience.title")}
          </h2>
        </div>
        <button
          onClick={() => setView(view === "chart" ? "list" : "chart")}
          className="font-mono text-xs uppercase tracking-widest text-accent-purple hover:underline underline-offset-4"
        >
          {view === "chart" ? t("experience.toggleList") : t("experience.toggleChart")}
        </button>
      </div>

      {view === "chart" ? <ExperienceTimeline /> : <ExperienceList />}
    </section>
  );
}
