import { usePrefs } from "../prefsContext";

export function Footer() {
  const { t } = usePrefs();
  return (
    <footer
      className="w"
      style={{
        borderTop: "1px solid var(--line)",
        paddingTop: 24,
        paddingBottom: 48,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "4px 24px",
        fontSize: 14,
        color: "var(--mut)",
      }}
    >
      <span>
        {t.foot}
        <a className="a" href="https://undraw.co/" target="_blank" rel="noopener noreferrer">
          unDraw
        </a>
      </span>
      <a className="n" href="#top" style={{ fontSize: 14, color: "var(--mut)", padding: 0 }}>
        {t.top}
      </a>
    </footer>
  );
}
