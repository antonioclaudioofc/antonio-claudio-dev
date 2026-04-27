import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import arenaManagerImg from "../assets/arena-manager.png";
import aniverlembreImg from "../assets/aniver-lembre.png";
import apiAudioForceImg from "../assets/audio-force.png";
import agendaSmileApiImg from "../assets/agenda-smile-api.png";
import arenaManagerApiImg from "../assets/arena-manager-api.png";

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
  Python: "bg-blue-500/10 text-blue-300 border-blue-500/30",
  Django: "bg-teal-500/10 text-teal-300 border-teal-500/30",
  "Django REST": "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  FastAPI: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  Postgres: "bg-sky-500/10 text-sky-300 border-sky-500/30",
  Docker: "bg-blue-600/10 text-blue-400 border-blue-600/30",
  HTML: "bg-orange-500/10 text-orange-300 border-orange-500/30",
  Tailwind: "bg-teal-500/10 text-teal-300 border-teal-500/30",
  SMTP: "bg-slate-500/10 text-slate-300 border-slate-500/30",
  Vite: "bg-purple-500/10 text-purple-300 border-purple-500/30",
  "yt-dlp": "bg-slate-500/10 text-slate-300 border-slate-500/30",
  FFmpeg: "bg-rose-500/10 text-rose-300 border-rose-500/30",
};

const getTechClass = (tech: string) =>
  techStyles[tech] ?? "bg-slate-800/50 text-slate-300 border-slate-700/50";

const projects: Project[] = [
  {
    title: "Agenda Smile API",
    subtitle: "Backend | Django REST Framework",
    description:
      "Gerenciamento de agendamentos em consultórios odontológicos, permitindo o cadastro de pacientes, dentistas e controle de horários. API completa criada com Django REST Framework.",
    tech: ["Python", "Django", "Django REST", "Postgres"],
    image: agendaSmileApiImg,
    imageAlt: "Tela da API Agenda Smile",
    links: [
      { label: "Demo", href: "https://agenda-smile-api.vercel.app/api/docs/" },
      {
        label: "Repo",
        href: "https://github.com/antonioclaudioofc/agenda-smile-api",
      },
    ],
  },
  {
    title: "Aniver Lembre",
    subtitle: "Fullstack | Django",
    description:
      "Sistema web completo para gerenciamento de lembretes de aniversários. Feito com Django, HTML, TailwindCSS e JavaScript, utilizando a stack completa do Django.",
    tech: ["Python", "Django", "HTML", "Tailwind", "JavaScript"],
    image: aniverlembreImg,
    imageAlt: "Tela do Aniver Lembre",
    links: [
      {
        label: "Repo",
        href: "https://github.com/antonioclaudioofc/aniver_lembre_replace",
      },
      { label: "Demo", href: "https://aniver-lembre-web.vercel.app" },
    ],
  },
  {
    title: "Arena Manager API",
    subtitle: "Backend | FastAPI",
    description:
      "Aplicação desenvolvida em FastAPI com o objetivo de gerenciar arenas esportivas (quadras, campos e áreas recreativas). Feita com Python, FastAPI e toda a sua stack moderna de desenvolvimento backend.",
    tech: ["Python", "FastAPI", "Postgres", "Docker"],
    image: arenaManagerApiImg,
    imageAlt: "Tela da API Arena Manager",
    links: [
      {
        label: "Repo",
        href: "https://github.com/antonioclaudioofc/api_arena_manager",
      },
      {
        label: "Demo",
        href: "https://api-arena-manager.vercel.app/docs",
      },
    ],
  },
  {
    title: "Notify Me API",
    subtitle: "Backend | FastAPI",
    description:
      "Microserviço desenvolvido em Python com FastAPI para validação e envio de mensagens de contato. Implementa envio assíncrono utilizando SMTP.",
    tech: ["Python", "FastAPI", "SMTP"],
    image: apiAudioForceImg,
    imageAlt: "Tela da API Notify Me",
    links: [
      {
        label: "Repo",
        href: "https://github.com/antonioclaudioofc/notify-me-api",
      },
      {
        label: "Demo",
        href: "https://notify-me-dev.vercel.app/docs",
      },
    ],
  },
  {
    title: "Arena Manager Web",
    subtitle: "Frontend | React",
    description:
      "Frontend desenvolvido em React, TypeScript e Vite para o sistema de gerenciamento de horários em arenas esportivas.",
    tech: ["React", "TypeScript", "Vite", "Tailwind"],
    image: arenaManagerImg,
    imageAlt: "Tela do Arena Manager Web",
    links: [
      {
        label: "Repo",
        href: "https://github.com/antonioclaudioofc/arena_manager",
      },
      { label: "Demo", href: "https://arena-manager-azure.vercel.app/" },
    ],
  },
  {
    title: "API Audio Force",
    subtitle: "Backend | FastAPI",
    description:
      "API em FastAPI para baixar vídeos ou playlists do YouTube (limitado a 10 itens), gerar um arquivo ZIP e entregá-lo via streaming, removendo automaticamente os arquivos temporários.",
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
      className="w-full py-24 px-4 bg-[#1e242c] relative border-t border-white/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-12">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-extrabold tracking-wider text-5xl sm:text-6xl md:text-[4rem] lg:text-[4.5rem] leading-none"
          >
            <span className="text-white">Projetos </span>
            <span className="text-teal-500">recentes</span>
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((p, i) => (
            <motion.article
              key={i}
              className="flex flex-col rounded-md overflow-hidden bg-[#242b35] border border-white/5 hover:border-teal-500/30 group transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              <div className="w-full aspect-video relative overflow-hidden bg-[#1e242c]">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#242b35] via-transparent to-transparent opacity-90" />
              </div>

              <div className="p-8 pt-4 flex flex-col flex-1 relative z-10">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {p.title}
                  </h3>
                  {p.subtitle && (
                    <p className="text-sm text-teal-400 font-semibold">
                      {p.subtitle}
                    </p>
                  )}
                </div>

                <p className="text-slate-400 text-sm flex-1 leading-relaxed mb-6">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-xs px-3 py-1.5 rounded border font-medium ${getTechClass(t)}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {p.links && (
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {p.links.map((l) => {
                      const isRepo = l.label.toLowerCase().includes("repo");
                      const isDemo = l.label.toLowerCase().includes("demo");

                      return (
                        <a
                          key={l.label}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className={`flex-1 flex justify-center items-center gap-2 text-sm px-4 py-3 rounded-md font-bold transition-all ${
                            isDemo
                              ? "bg-teal-500 hover:bg-teal-400 text-white shadow-sm hover:-translate-y-0.5"
                              : "bg-[#1e242c] hover:bg-[#2a323c] text-white border border-white/5 hover:-translate-y-0.5"
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
