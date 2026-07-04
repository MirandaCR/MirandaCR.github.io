"use client";

import { useLanguage } from "@/context/LanguageContext";
import { highlights } from "@/data/highlights";
import StatTile from "@/components/StatTile";

export default function Highlights() {
  const { lang } = useLanguage();

  return (
    <section className="max-w-4xl mx-auto px-6 pb-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {highlights.map((h, i) => (
          <StatTile key={i} value={h.value} label={h.label[lang]} />
        ))}
      </div>
    </section>
  );
}
