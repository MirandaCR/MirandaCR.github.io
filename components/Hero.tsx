"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="max-w-4xl mx-auto px-6 pt-20 pb-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-purple mb-4">
        ~/{t("nav.brand")}
      </p>
      <h1 className="text-4xl md:text-6xl font-bold text-foreground-bright tracking-tight mb-4">
        {t("hero.title")}
      </h1>
      <p className="text-lg md:text-xl text-accent-cyan font-medium mb-2">
        {t("hero.role")}
      </p>
      <p className="text-sm text-foreground/60 mb-8">{t("hero.location")}</p>
      <p className="text-xl md:text-2xl leading-relaxed max-w-2xl mb-10">
        {t("hero.tagline")}
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="#contact"
          className="rounded-full bg-accent-purple px-6 py-3 text-sm font-semibold text-background hover:opacity-90 transition-opacity"
        >
          {t("hero.cta")}
        </a>
        <a
          href="#projects"
          className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold text-foreground hover:border-accent-cyan hover:text-accent-cyan transition-colors"
        >
          {t("hero.secondaryCta")}
        </a>
      </div>
    </section>
  );
}
