import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/antonioclaudioofc",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/antonioclaudioofc/",
    icon: FaLinkedinIn,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5598970256674?text=Oi%20Antonio%2C%20vim%20pelo%20seu%20portfolio%20e%20gostaria%20de%20conversar.",
    icon: FaWhatsapp,
  },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-[#1e242c] px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">Antonio Claudio</p>
            <p className="text-slate-400 font-medium mt-1">Desenvolvedor Full Stack</p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700/50 bg-slate-800 text-slate-300 transition-all hover:border-teal-500 hover:bg-teal-500/10 hover:text-teal-400 hover:shadow-md hover:shadow-teal-500/10"
                  aria-label={link.label}
                >
                  <Icon className="text-lg" />
                </a>
              );
            })}
          </div>

          <p className="text-xs text-slate-500">
            © 2026 Antonio Claudio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
