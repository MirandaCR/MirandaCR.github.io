"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dictionary, type Lang } from "@/data/i18n";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "cristian-miranda-site-lang";

function resolvePath(path: string, lang: Lang): string {
  const parts = path.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let node: any = dictionary[lang];
  for (const part of parts) {
    if (node == null) break;
    node = node[part];
  }
  return typeof node === "string" ? node : path;
}

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "es" ? stored : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const value = useMemo<LanguageContextValue>(() => {
    const setLang = (next: Lang) => {
      setLangState(next);
      window.localStorage.setItem(STORAGE_KEY, next);
    };
    return {
      lang,
      setLang,
      toggleLang: () => setLang(lang === "en" ? "es" : "en"),
      t: (path: string) => resolvePath(path, lang),
    };
  }, [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
