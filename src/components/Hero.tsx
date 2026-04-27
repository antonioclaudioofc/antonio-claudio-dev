import { motion } from "motion/react";
import { FaArrowDown } from "react-icons/fa";
import codeReviewImg from "../assets/code-review.svg";

export function Hero() {
  return (
    <motion.header
      className="w-full min-h-screen bg-[#1e242c] relative flex flex-col justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute top-0 bottom-0 left-[35%] w-px bg-white/5 hidden lg:block" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12 pt-24 lg:pt-32 relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center text-center lg:text-left order-1 lg:order-0 relative lg:col-span-7 xl:col-span-7"
          >
            <div className="absolute -left-12 sm:-left-20 top-16 hidden lg:block opacity-60">
              <svg
                width="60"
                height="100"
                viewBox="0 0 60 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 10 C30 20, 20 40, 15 60 C10 80, 20 90, 40 95"
                  stroke="#2dd4bf"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="transparent"
                />
                <path
                  d="M35 85 L40 95 L30 100"
                  stroke="#2dd4bf"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="transparent"
                />
              </svg>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="font-extrabold mb-8 leading-[1.05] uppercase tracking-wider"
            >
              <span className="text-white block text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl leading-tight">
                Desenvolvedor
              </span>
              <span className="text-teal-500 block text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl mt-1 leading-tight">
                Full Stack
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-2"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto text-center px-8 py-3.5 bg-teal-500 hover:bg-teal-400 text-white rounded-full font-bold text-sm sm:text-base transition-colors"
              >
                Contrate-me
              </a>
              <a
                href="/Antonio Claudio Teixeira Alves.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-center px-8 py-3.5 bg-[#2a313b] hover:bg-[#343d4a] text-white rounded-full font-bold text-sm sm:text-base transition-colors flex items-center gap-3 border border-white/5"
              >
                Baixar CV
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center items-center lg:justify-end order-0 lg:order-1 pt-12 lg:pt-0 lg:col-span-5 xl:col-span-5"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[500px] aspect-square flex items-center justify-center">
              <img
                src={codeReviewImg}
                alt="Code Review Illustration"
                className="w-full h-full object-contain relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="w-full flex justify-center pb-10 mt-10"
      >
        <motion.a
          href="#about"
          className="w-14 h-16 bg-[#2a313b] flex items-center justify-center hover:bg-[#343d4a] transition-colors cursor-pointer border border-white/5"
          whileHover={{ y: 5 }}
        >
          <FaArrowDown className="text-slate-400 text-lg" />
        </motion.a>
      </motion.div>
    </motion.header>
  );
}
