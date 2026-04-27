import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Início", href: "#home" },
    { label: "Sobre Mim", href: "#about" },
    { label: "Habilidades", href: "#skills" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    const handleHashChange = () => {
      const hash = window.location.hash.substring(1) || "home";
      setActiveSection(hash);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    handleHashChange();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#1e242c] border-b border-white/5"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <a href="#home" className="flex items-center">
              <span className="font-extrabold text-2xl text-white tracking-tight">
                Antonio Claudio
              </span>
            </a>
          </motion.div>

          <motion.div
            className="max-lg:hidden flex items-center gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </motion.div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="max-lg:block lg:hidden relative w-10 h-10 flex items-center justify-center cursor-pointer text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <motion.div
        className="lg:hidden overflow-hidden absolute left-0 right-0 top-full bg-[#1e242c] border-b border-white/5"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col p-6 space-y-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.label}
                href={item.href}
                className={`text-base font-medium transition-colors py-2 ${
                  isActive ? "text-teal-400" : "text-slate-400"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </motion.div>
    </motion.nav>
  );
}
