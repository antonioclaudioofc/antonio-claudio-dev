import { createContext, useContext } from "react";
import copy from "./content/copy.json";

export type Lang = "pt" | "en";
export type Theme = "light" | "dark";
export type Copy = typeof copy.pt;

export interface Prefs {
  lang: Lang;
  theme: Theme;
  t: Copy;
  setLang: (lang: Lang) => void;
  toggleTheme: () => void;
}

export const PrefsContext = createContext<Prefs | null>(null);

export function usePrefs() {
  const ctx = useContext(PrefsContext);
  if (!ctx) throw new Error("usePrefs must be used inside PrefsProvider");
  return ctx;
}
