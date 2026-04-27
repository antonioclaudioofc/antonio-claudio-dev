import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import arenaManagerImg from "../assets/arena-manager.png";
import aniverlembreImg from "../assets/aniver-lembre.png";
import apiAudioForceImg from "../assets/audio-force.png";

type Project = {
  title: string;
  subtitle?: string;
  description: string;
  tech: string[];
  image: string;
  imageAlt: string;
  links?: { label: string; href: string }[];
};

const techStyles: Record<string, string> = {
  React: "bg-teal-500/10 text-teal-300 border-teal-500/30",
  TypeScript: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
  JavaScript: "bg-amber-500/10 text-amber-300 border-amber-500/30",
  Python: "bg-amber-500/10 text-amber-300 border-amber-500/30",
  Django: "bg-teal-500/10 text-teal-300 border-teal-500/30",
  FastAPI: "bg-teal-500/10 text-teal-300 border-teal-500/30",
  Postgres: "bg-blue-500/10 text-blue-300 border-blue-500/30",
  Prisma: "bg-violet-500/10 text-violet-300 border-violet-500/30",
  "yt-dlp": "bg-slate-500/10 text-slate-300 border-slate-500/30",
  FFmpeg: "bg-rose-500/10 text-rose-300 border-rose-500/30",
};

const getTechClass = (tech: string) =>
  techStyles[tech] ?? "bg-slate-800/50 text-slate-300 border-slate-700/50";

const projects: Project[] = [
  {
    title: "Arena Manager",
    subtitle: "Fullstack | API REST + Autenticação",
    description:
      "Sistema fullstack para gerenciamento de arenas esportivas com autenticação, controle de reservas e regras de negócio. Backend em FastAPI com arquitetura em camadas, integração com PostgreSQL e deploy em cloud.",
    tech: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "Postgres",
      "Docker",
      "JWT",
      "REST",
    ],
    image: arenaManagerImg,
    imageAlt: "Tela do Arena Manager",
    links: [
      {
        label: "Repo - Backend",
        href: "https://github.com/antonioclaudioofc/api_arena_manager",
      },
      {
        label: "Repo - Frontend",
        href: "https://github.com/antonioclaudioofc/arena_manager",
      },
      { label: "Demo", href: "https://arena-manager-azure.vercel.app/" },
    ],
  },
  {
    title: "Aniverlembre",
    subtitle: "Backend | Django",
    description:
      "Sistema backend em Django para gerenciamento de lembretes com autenticação, persistência em PostgreSQL e aplicação de padrões MVC.",
    tech: ["Python", "Django", "JavaScript", "Postgres"],
    image: aniverlembreImg,
    imageAlt: "Tela do Aniverlembre",
    links: [
      {
        label: "Repo",
        href: "https://github.com/antonioclaudioofc/aniver_lembre_replace",
      },
      { label: "Demo", href: "https://aniver-lembre.onrender.com/" },
    ],
  },
  {
    title: "API Audio Force",
    subtitle: "Backend | FastAPI",
    description:
      "Microserviço em FastAPI para processamento de mídia, download e conversão de vídeos, seguindo arquitetura de serviços independentes.",
    tech: ["Python", "FastAPI", "yt-dlp", "FFmpeg"],
    image: apiAudioForceImg,
    imageAlt: "Tela da API Audio Force",
    links: [
      {
        label: "Repo",
        href: "https://github.com/antonioclaudioofc/api_audio_force",
      },
      {
        label: "Demo",
        href: "https://api-audio-force.vercel.app/docs",
      },
    ],
  },
];

export function Projects() {
  return (
    <motion.section
      id="projects"
      className="w-full py-24 px-4 bg-[#242b35]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Projetos
          </h2>
          <p className="mt-4 text-slate-400">
            Projetos reais com foco em backend, APIs, arquitetura e sistemas
            escaláveis.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              className="flex flex-col rounded-2xl overflow-hidden bg-[#1e242c] border border-slate-700/50 hover:border-teal-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i }}
            >
              <div className="w-full aspect-video bg-slate-800">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  className="w-full h-full object-center "
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {p.title}
                    </h3>
                    {p.subtitle && (
                      <p className="text-sm text-teal-400 font-semibold mt-1">{p.subtitle}</p>
                    )}
                  </div>

                  <span className="text-xs px-2.5 py-1 bg-slate-800 border border-slate-700/50 rounded-md text-slate-300 font-medium">
                    {p.tech[0]}
                  </span>
                </div>

                <p className="mt-4 text-slate-400 text-sm leading-6 flex-1">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-xs px-2.5 py-1 rounded border ${getTechClass(
                        t,
                      )}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {p.links && (
                  <div className="mt-6 flex flex-wrap gap-3 items-center">
                    {p.links.map((l) => {
                      const isRepo = l.label.toLowerCase().includes("repo");
                      const isDemo = l.label.toLowerCase().includes("demo");

                      return (
                        <a
                          key={l.label}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className={`flex-1 flex justify-center items-center gap-2 text-sm px-4 py-2.5 rounded-lg font-semibold transition-all ${
                            isDemo 
                              ? "bg-teal-500 hover:bg-teal-400 text-white shadow-sm hover:shadow-md" 
                              : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700/50"
                          }`}
                        >
                          {isRepo && <FaGithub className="text-lg" />}
                          {isDemo && <FaEarthAmericas className="text-lg" />}
                          <span>{l.label}</span>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
