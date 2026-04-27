import { motion } from "motion/react";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiDjango,
  SiPython,
  SiPostgresql,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";

export function Skills() {
  const frontEnd = [
    { label: "Next.js", icon: SiNextdotjs, colorClass: "text-white" },
    { label: "TypeScript", icon: SiTypescript, colorClass: "text-sky-400" },
    { label: "JavaScript", icon: SiJavascript, colorClass: "text-yellow-300" },
    { label: "React", icon: SiReact, colorClass: "text-cyan-400" },
    { label: "Tailwind", icon: SiTailwindcss, colorClass: "text-teal-400" },
  ];

  const backEnd = [
    { label: "Python", icon: SiPython, colorClass: "text-blue-400" },
    { label: "Django", icon: SiDjango, colorClass: "text-teal-500" },
    { label: "PostgreSQL", icon: SiPostgresql, colorClass: "text-sky-300" },
    { label: "Firebase", icon: IoLogoFirebase, colorClass: "text-yellow-400" },
    { label: "Neon", icon: FaDatabase, colorClass: "text-teal-300" },
  ];

  return (
    <motion.section
      id="skills"
      className="w-full py-24 bg-[#1e242c] px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 className="text-4xl sm:text-5xl font-bold text-white">
            Habilidades
          </motion.h2>
          <p className="text-slate-400 mt-2">Minhas habilidades técnicas</p>
        </div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-700/50 bg-[#242b35] px-6 py-8"
          >
            <div className="flex items-center justify-center gap-2 text-white font-bold mb-6">
              Front-end
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {frontEnd.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-center"
                  title={item.label}
                >
                  <item.icon className={`text-4xl ${item.colorClass}`} />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-slate-700/50 bg-[#242b35] px-6 py-8"
          >
            <div className="flex items-center justify-center gap-2 text-white font-bold mb-6">
              Back-end
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {backEnd.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-center"
                  title={item.label}
                >
                  <item.icon className={`text-4xl ${item.colorClass}`} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
