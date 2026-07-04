"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="max-w-4xl mx-auto px-6 pt-20 pb-16">
      <div className="flex flex-col-reverse md:flex-row md:items-center gap-10 md:gap-14">
        <div className="flex-1 min-w-0">
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
              className="rounded-full bg-accent-purple px-6 py-3 text-sm font-semibold text-background transition-all hover:opacity-90 hover:scale-[1.03] active:scale-[0.98]"
            >
              {t("hero.cta")}
            </a>
            <a
              href="#projects"
              className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent-cyan hover:text-accent-cyan hover:scale-[1.03] active:scale-[0.98]"
            >
              {t("hero.secondaryCta")}
            </a>
          </div>
        </div>

        <div className="shrink-0 mx-auto md:mx-0">
          <div className="relative w-40 sm:w-48 md:w-56 aspect-[4/5] rounded-2xl overflow-hidden ring-2 ring-accent-purple/40">
            <Image
              src="/cristian.jpg"
              alt="Cristian Miranda"
              fill
              priority
              sizes="(min-width: 768px) 224px, 192px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
