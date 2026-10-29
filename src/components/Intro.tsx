import { usePrefs } from "../prefsContext";
import profile from "../content/profile.json";

export function Intro() {
  const { t } = usePrefs();
  const { github, linkedin, email } = profile.contact;
  return (
    <section className="intro">
      <div className="intro-text">
        <h1
          style={{
            fontSize: "clamp(30px,4vw,40px)",
            lineHeight: 1.15,
            fontWeight: 600,
            letterSpacing: "-.025em",
          }}
        >
          Antonio Claudio
        </h1>
        <p
          style={{
            marginTop: 20,
            fontSize: "clamp(18px,2vw,21px)",
            lineHeight: 1.55,
            maxWidth: "34em",
            color: "var(--body)",
          }}
        >
          {t.intro}
        </p>
        <p
          style={{
            marginTop: 24,
            display: "flex",
            flexWrap: "wrap",
            gap: "4px 24px",
            fontSize: 15,
          }}
        >
          <a className="a" href="/resume.html" target="_blank" rel="noopener noreferrer" style={{ minHeight: 32 }}>
            {t.resume}
          </a>
          <a className="a" href={github} target="_blank" rel="noopener noreferrer" style={{ minHeight: 32 }}>
            GitHub
          </a>
          <a className="a" href={linkedin} target="_blank" rel="noopener noreferrer" style={{ minHeight: 32 }}>
            LinkedIn
          </a>
          <a className="a" href={`mailto:${email}`} style={{ minHeight: 32 }}>
            {t.email}
          </a>
        </p>
      </div>
      <img
        className="intro-img ill"
        src="/illustrations/software-engineer.svg"
        alt=""
        width={320}
        height={216}
      />
    </section>
  );
}
