import { motion } from "motion/react";

export function About() {
  return (
    <motion.section
      className="w-full flex items-center justify-center bg-[#242b35] px-4 sm:px-6 lg:px-8 py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl w-full mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-6">
            Sou um desenvolvedor full stack com graduação em Ciência da
            Computação pelo Instituto Federal do Maranhão (IFMA). Tenho
            experiência sólida em desenvolvimento web, com foco em React,
            Next.js, Python (FastAPI, Django), TypeScript, Firebase e SQL.
          </p>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10">
            Sou entusiasta de tecnologias emergentes como Docker, Kubernetes e
            Kafka, sempre aplicando boas práticas de desenvolvimento,
            metodologias ágeis e princípios de escalabilidade. Busco uma
            oportunidade como Desenvolvedor Full Stack ou Backend para crescer
            como engenheiro de software e contribuir com soluções orientadas a
            resultados.
          </p>

          <a
            href="/Antonio Claudio Teixeira Alves.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white rounded-full font-bold transition-all shadow-lg shadow-teal-500/20 hover:-translate-y-1"
          >
            Baixar CV
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
