import { motion } from "motion/react";
import researchAssistantImg from "../assets/research-assistant.svg";

export function About() {
  return (
    <motion.section
      id="about"
      className="w-full min-h-screen bg-[#1e242c] relative flex flex-col justify-center overflow-hidden border-t border-white/5 py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute top-0 bottom-0 left-[35%] w-px bg-white/5 hidden lg:block" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center text-center lg:text-left order-1 lg:order-0 relative lg:col-span-7 xl:col-span-7"
          >
            <h2 className="font-extrabold mb-8 tracking-wider text-5xl sm:text-6xl md:text-[4rem] lg:text-[4.5rem] leading-none">
              <span className="text-white">Sobre </span>
              <span className="text-teal-500">mim</span>
            </h2>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-6 lg:max-w-2xl">
              Sou um desenvolvedor full stack com graduação em Ciência da
              Computação pelo Instituto Federal do Maranhão (IFMA). Tenho
              experiência sólida em desenvolvimento web, com foco em React,
              Next.js, Python (FastAPI, Django), TypeScript, Firebase e SQL.
            </p>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 lg:max-w-2xl">
              Sou entusiasta de tecnologias emergentes como Docker e RabbitMQ,
              sempre aplicando boas práticas de desenvolvimento, metodologias
              ágeis e princípios de escalabilidade. Busco uma oportunidade como
              Desenvolvedor Full Stack ou Backend
            </p>

            <div className="flex justify-center lg:justify-start">
              <a
                href="/Antonio Claudio Teixeira Alves.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold text-lg sm:text-xl hover:text-teal-400 transition-colors flex items-center gap-2 group"
              >
                Baixar CV
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center items-center lg:justify-end order-0 lg:order-1 pt-8 lg:pt-0 lg:col-span-5 xl:col-span-5"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[450px] lg:max-w-[550px] aspect-square flex items-center justify-center">
              <img
                src={researchAssistantImg}
                alt="Research Assistant Illustration"
                className="w-full h-full object-contain relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
