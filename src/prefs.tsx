import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import copy from "./content/copy.json";
import { PrefsContext } from "./prefsContext";
import type { Lang, Prefs, Theme } from "./prefsContext";

function read(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function write(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    return;
  }
}

function initialLang(): Lang {
  const stored = read("ac-lang");
  if (stored === "pt" || stored === "en") return stored;
  return navigator.language?.toLowerCase().startsWith("en") ? "en" : "pt";
}

function initialTheme(): Theme {
  const stored = read("ac-theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function PrefsProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    const t = copy[lang];
    document.documentElement.lang = t.lang;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.intro);
  }, [lang]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const value = useMemo<Prefs>(
    () => ({
      lang,
      theme,
      t: copy[lang],
      setLang: (next) => {
        setLangState(next);
        write("ac-lang", next);
      },
      toggleTheme: () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        write("ac-theme", next);
      },
    }),
    [lang, theme],
  );

  return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>;
}
