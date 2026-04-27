import { FaGithub, FaLinkedinIn, FaWhatsapp, FaCode } from "react-icons/fa";

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
    <footer className="w-full border-t border-white/5 bg-[#1e242c] px-4 py-16">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-12">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center flex flex-col items-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-md bg-[#242b35] text-teal-500 mb-6 border border-white/5">
              <FaCode className="text-2xl" />
            </span>
            <p className="text-3xl font-extrabold text-white tracking-widest uppercase mb-2">
              Antonio <span className="text-teal-500">Claudio</span>
            </p>
            <p className="text-slate-400 font-medium tracking-wide">
              Desenvolvedor Full Stack
            </p>
          </div>

          <div className="flex items-center gap-5 mt-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-md border border-white/5 bg-[#242b35] text-slate-400 transition-all hover:border-teal-500/50 hover:bg-[#1e242c] hover:text-teal-500"
                  aria-label={link.label}
                >
                  <Icon className="text-xl group-hover:scale-110 transition-transform" />
                </a>
              );
            })}
          </div>

          <div className="w-full h-px bg-white/5 mt-4 mb-2 max-w-md"></div>

          <p className="text-sm font-medium text-slate-500">
            © {new Date().getFullYear()} Antonio Claudio. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
