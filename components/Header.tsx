"use client";

import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-foreground/10">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm text-foreground-bright tracking-tight"
        >
          {t("nav.brand")}
        </a>
        <LanguageToggle />
      </div>
    </header>
  );
}
