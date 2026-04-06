"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { translations, type Lang } from "@/lib/translations";

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof translations.es;
}

const LangContext = createContext<LangContextValue>({
  lang: "es",
  setLang: () => {},
  t: translations.es,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const stored = localStorage.getItem("almar-lang") as Lang | null;
    if (stored === "en" || stored === "es") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("almar-lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] as typeof translations.es }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
