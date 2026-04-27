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
  SiDocker,
  SiRabbitmq,
  SiFastapi,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

export function Skills() {
  const frontEnd = [
    { label: "React", icon: SiReact, colorClass: "text-cyan-400" },
    { label: "Next.js", icon: SiNextdotjs, colorClass: "text-white" },
    { label: "TypeScript", icon: SiTypescript, colorClass: "text-sky-400" },
    { label: "JavaScript", icon: SiJavascript, colorClass: "text-yellow-300" },
    { label: "Tailwind", icon: SiTailwindcss, colorClass: "text-teal-400" },
  ];

  const backEnd = [
    { label: "Python", icon: SiPython, colorClass: "text-blue-400" },
    { label: "Django", icon: SiDjango, colorClass: "text-teal-500" },
    { label: "FastAPI", icon: SiFastapi, colorClass: "text-emerald-500" },
    { label: "PostgreSQL", icon: SiPostgresql, colorClass: "text-sky-300" },
    { label: "Docker", icon: SiDocker, colorClass: "text-blue-500" },
    { label: "RabbitMQ", icon: SiRabbitmq, colorClass: "text-orange-400" },
    { label: "Firebase", icon: IoLogoFirebase, colorClass: "text-yellow-400" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="skills"
      className="w-full py-24 bg-[#242b35] border-t border-white/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wider uppercase mb-4">
            Minhas <span className="text-teal-500">Habilidades</span>
          </motion.h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full opacity-50" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-teal-500"></span>
              Front-end
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {frontEnd.map((item) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  whileHover={{ y: -5, borderColor: "rgba(45, 212, 191, 0.5)" }}
                  className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#1e242c] border border-white/5 transition-all cursor-default group"
                >
                  <item.icon
                    className={`text-5xl mb-4 transition-transform group-hover:scale-110 ${item.colorClass}`}
                  />
                  <span className="text-slate-300 font-medium text-sm text-center">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-teal-500"></span>
              Back-end & DevOps
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {backEnd.map((item) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  whileHover={{ y: -5, borderColor: "rgba(45, 212, 191, 0.5)" }}
                  className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#1e242c] border border-white/5 transition-all cursor-default group"
                >
                  <item.icon
                    className={`text-5xl mb-4 transition-transform group-hover:scale-110 ${item.colorClass}`}
                  />
                  <span className="text-slate-300 font-medium text-sm text-center">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
