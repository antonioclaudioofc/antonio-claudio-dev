import { usePrefs } from "../prefsContext";

const skills = {
  lang: "Java, Python, JavaScript, TypeScript",
  fw: "Spring Boot, NestJS, FastAPI, Django REST, Angular, React, Next.js",
  data: "PostgreSQL, MySQL, SQLite, MongoDB",
  infra: "Docker, Git, Linux, Google Cloud Platform (Pub/Sub, KMS, Cloud Storage)",
};

export function About() {
  const { t } = usePrefs();
  const rows: [string, string][] = [
    [t.dtLang, skills.lang],
    [t.dtFw, skills.fw],
    [t.dtData, skills.data],
    [t.dtArch, t.vArch],
    [t.dtInfra, skills.infra],
    [t.dtEdu, t.vEdu],
  ];
  return (
    <section id="about" className="sec">
      <h2 className="lb">{t.about}</h2>
      <div
        className="ct"
        style={{ display: "flex", flexWrap: "wrap", gap: "32px 40px", alignItems: "flex-start" }}
      >
        <div
          style={{
            flex: "1 1 360px",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            maxWidth: "36em",
          }}
        >
          <p>{t.about1}</p>
          <p>{t.about2}</p>
        </div>
        <img
          className="ill"
          src="/illustrations/code-review.svg"
          alt={t.illAlt}
          width={200}
          height={155}
          loading="lazy"
          style={{
            flex: "0 1 200px",
            width: 200,
            maxWidth: "100%",
            height: "auto",
            marginLeft: "auto",
          }}
        />
        <dl
          style={{
            flex: "1 1 100%",
            margin: "8px 0 0",
            display: "grid",
            gridTemplateColumns: "minmax(0,150px) minmax(0,1fr)",
            gap: "10px 20px",
            fontSize: 15,
            borderTop: "1px solid var(--line)",
            paddingTop: 24,
          }}
        >
          {rows.map(([k, v]) => (
            <div key={k} style={{ display: "contents" }}>
              <dt style={{ color: "var(--mut)" }}>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
