import { usePrefs } from "../prefsContext";
import type { Copy } from "../prefsContext";
import data from "../content/projects.json";

type Project = (typeof data.projects)[number];

const str = (t: Copy, key: string) => (t as Record<string, string>)[key];
const src = (file: string) => `/screenshots/${file.split("/").pop()}`;

function Stack({ stack }: { stack: Project["stack"] }) {
  if (Array.isArray(stack)) {
    return (
      <ul className="tg">
        {stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    );
  }
  return (
    <>
      {Object.entries(stack).map(([label, items]) => (
        <ul className="tg" key={label}>
          <li className="tgl">{label}</li>
          {(items as string[]).map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      ))}
    </>
  );
}

function Links({ project, t }: { project: Project; t: Copy }) {
  return (
    <p className="plinks">
      {(project.links as string[][]).map(([key, href]) => (
        <a key={href} href={href} target="_blank" rel="noopener noreferrer">
          {str(t, key)}
        </a>
      ))}
    </p>
  );
}

function Article({ project, t, lazy }: { project: Project; t: Copy; lazy: boolean }) {
  const main = project.featured;
  const images = project.images as { file: string; captionKey: string; altKey: string }[];
  const many = images.length > 1;
  return (
    <article style={{ display: "flex", flexDirection: "column", gap: main ? 6 : 4 }}>
      <h3
        style={
          main
            ? { fontSize: 22, lineHeight: 1.3, fontWeight: 600, letterSpacing: "-.015em" }
            : { fontSize: 17, lineHeight: 1.4, fontWeight: 600 }
        }
      >
        {project.name}
      </h3>
      <Stack stack={project.stack} />
      <p style={{ marginTop: main ? 6 : 4, maxWidth: "36em" }}>{str(t, project.descKey)}</p>
      {images.length > 0 && (
        <div
          style={{
            marginTop: main ? 14 : 12,
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            maxWidth: main ? undefined : 480,
          }}
        >
          {images.map((img) => (
            <figure key={img.file} style={{ flex: many ? "1 1 280px" : "1 1 100%", minWidth: 0 }}>
              <img
                className="shot"
                src={src(img.file)}
                alt={str(t, img.altKey)}
                loading={lazy ? "lazy" : undefined}
              />
              <figcaption className="cap">{str(t, img.captionKey)}</figcaption>
            </figure>
          ))}
        </div>
      )}
      <Links project={project} t={t} />
    </article>
  );
}

export function Projects() {
  const { t } = usePrefs();
  const featured = data.projects.filter((p) => p.featured);
  const others = data.projects.filter((p) => !p.featured);
  return (
    <section id="projects" className="sec">
      <h2 className="lb">{t.projects}</h2>
      <div className="ct" style={{ display: "flex", flexDirection: "column", gap: 64 }}>
        {featured.map((p, i) => (
          <Article key={p.id} project={p} t={t} lazy={i > 0} />
        ))}
        <div
          style={{
            borderTop: "1px solid var(--line)",
            paddingTop: 40,
            display: "flex",
            flexDirection: "column",
            gap: 44,
          }}
        >
          {others.map((p) => (
            <Article key={p.id} project={p} t={t} lazy />
          ))}
        </div>
      </div>
    </section>
  );
}
