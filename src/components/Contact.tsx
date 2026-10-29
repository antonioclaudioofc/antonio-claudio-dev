import { usePrefs } from "../prefsContext";
import profile from "../content/profile.json";
import { IconGithub, IconLinkedin, IconMail, IconWhatsapp } from "./Icons";

export function Contact() {
  const { t } = usePrefs();
  const { email, linkedin, github, whatsapp } = profile.contact;
  return (
    <section id="contact" className="sec">
      <h2 className="lb">{t.contact}</h2>
      <div className="ct" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <p style={{ maxWidth: "34em" }}>{t.contactIntro}</p>
        <p style={{ display: "flex", flexDirection: "column" }}>
          <a className="cl" href={`mailto:${email}`}>
            <IconMail />
            {email}
          </a>
          <a className="cl" href={linkedin} target="_blank" rel="noopener noreferrer">
            <IconLinkedin />
            LinkedIn
          </a>
          <a className="cl" href={github} target="_blank" rel="noopener noreferrer">
            <IconGithub />
            GitHub
          </a>
          <a className="cl" href={whatsapp} target="_blank" rel="noopener noreferrer">
            <IconWhatsapp />
            WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
