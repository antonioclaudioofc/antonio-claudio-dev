import { useEffect, useRef, useState } from "react";
import { usePrefs } from "../prefsContext";
import type { Lang } from "../prefsContext";
import { FlagBR, FlagUS, IconMenu, IconMoon, IconSun, LogoMark } from "./Icons";

function Controls() {
  const { t, lang, setLang, theme, toggleTheme } = usePrefs();
  const options: { id: Lang; label: string; flag: React.ReactNode }[] = [
    { id: "pt", label: "Português", flag: <FlagBR /> },
    { id: "en", label: "English", flag: <FlagUS /> },
  ];
  return (
    <>
      <div className="seg" role="group" aria-label={t.langLabel}>
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            aria-pressed={lang === o.id}
            aria-label={o.label}
            title={o.label}
            onClick={() => setLang(o.id)}
          >
            {o.flag}
          </button>
        ))}
      </div>
      <button
        type="button"
        className="ib"
        aria-label={t.theme}
        title={t.theme}
        onClick={toggleTheme}
      >
        {theme === "dark" ? <IconSun /> : <IconMoon />}
      </button>
    </>
  );
}

export function Header() {
  const { t } = usePrefs();
  const [open, setOpen] = useState(false);
  const burger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        burger.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header id="top" className="topbar">
      <div className="w" style={{ paddingTop: 12, paddingBottom: 8 }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0 12px",
          }}
        >
          <a className="brand" href="/landing.html" aria-label="Antonio Claudio">
            <LogoMark />
            <span>Antonio Claudio</span>
          </a>
          <div className="tools">
            <nav className="dnav" aria-label={t.nav}>
              <a className="n" href="#projects">
                {t.projects}
              </a>
              <a className="n" href="#about">
                {t.about}
              </a>
              <a className="n" href="#contact">
                {t.contact}
              </a>
            </nav>
            <div className="ctl">
              <Controls />
            </div>
            <button
              ref={burger}
              type="button"
              className="ib burger"
              aria-label={open ? t.menuClose : t.menu}
              aria-expanded={open}
              aria-controls="menu-mobile"
              onClick={() => setOpen((v) => !v)}
            >
              <IconMenu open={open} />
            </button>
          </div>
        </div>
        {open && (
          <nav id="menu-mobile" className="mnav" aria-label={t.nav}>
            <a href="#projects" onClick={close}>
              {t.projects}
            </a>
            <a href="#about" onClick={close}>
              {t.about}
            </a>
            <a href="#experience" onClick={close}>
              {t.exp}
            </a>
            <a href="#contact" onClick={close}>
              {t.contact}
            </a>
            <div className="mctl">
              <Controls />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
