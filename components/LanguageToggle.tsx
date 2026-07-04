"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { toggleLang, t } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      aria-label="Toggle language"
      className="font-mono text-xs uppercase tracking-widest border border-foreground/20 rounded-full px-3 py-1.5 text-foreground hover:border-accent-purple hover:text-accent-purple transition-colors"
    >
      {t("nav.langToggle")}
    </button>
  );
}
