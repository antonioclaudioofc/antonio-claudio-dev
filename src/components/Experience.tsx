import { usePrefs } from "../prefsContext";

const jobs = [
  { company: "Pass", p: "pass", current: true },
  { company: "Medsafe Brasil", p: "med", current: false },
  { company: "IVC Tecnologia", p: "ivc", current: false },
] as const;

export function Experience() {
  const { t } = usePrefs();
  const get = (k: string) => (t as Record<string, string>)[k];
  return (
    <section id="experience" className="sec">
      <h2 className="lb">{t.exp}</h2>
      <div className="ct" style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        {jobs.map((j) => (
          <article key={j.company} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: "2px 24px",
              }}
            >
              <h3 style={{ fontSize: 17, lineHeight: 1.4, fontWeight: 600 }}>
                {j.company}
                {j.current && <span className="tag">{t.current}</span>}
              </h3>
              <p className="mono">{get(`${j.p}Date`)}</p>
            </div>
            <p style={{ color: "var(--mut)", fontSize: 15 }}>{get(`${j.p}Role`)}</p>
            <p style={{ marginTop: 6, maxWidth: "38em" }}>{get(`${j.p}Desc`)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
