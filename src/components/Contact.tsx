import { motion } from "motion/react";
import { useState } from "react";
import { FaEnvelope, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const contactCards = [
  {
    title: "Email",
    value: "antonioclaudioofc@gmail.com",
    href: "mailto:antonioclaudioofc@gmail.com",
    icon: FaEnvelope,
  },
  {
    title: "WhatsApp",
    value: "(98) 97025-6674",
    href: "https://wa.me/5598970256674?text=Ol%C3%A1%20Antonio%2C%20conheci%20seu%20trabalho%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20poss%C3%ADvel%20oportunidade%20ou%20projeto.%20Podemos%20falar%20por%20aqui%3F",
    icon: FaWhatsapp,
  },
  {
    title: "LinkedIn",
    value: "@antonioclaudioofc",
    href: "https://www.linkedin.com/in/antonioclaudioofc/",
    icon: FaLinkedinIn,
  },
];

export function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (formValues.name.trim().length < 6) {
      return "O nome precisa ter pelo menos 6 caracteres.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formValues.email.trim())) {
      return "Digite um e-mail valido.";
    }

    if (formValues.message.trim().length < 10) {
      return "A mensagem precisa ter pelo menos 10 caracteres.";
    }

    return "";
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("idle");
    setErrorMessage("");

    const validationError = validateForm();
    if (validationError) {
      setStatus("error");
      setErrorMessage(validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "/notify-api/api/antonio-claudio-dev/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": import.meta.env.VITE_NOTIFY_API_KEY,
          },
          body: JSON.stringify({
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            message: formValues.message.trim(),
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem. Tente novamente.");
      }

      setStatus("success");
      setFormValues({ name: "", email: "", message: "" });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Erro inesperado.";
      setStatus("error");
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="w-full py-24 px-4 bg-[#242b35] border-t border-white/5 overflow-hidden"
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
            className="font-extrabold tracking-wider text-4xl sm:text-5xl md:text-[4rem] lg:text-[4.5rem] leading-none"
          >
            <span className="text-white">Fale </span>
            <span className="text-teal-500">comigo</span>
          </motion.h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
              <span className="w-8 h-px bg-teal-500"></span>
              Informações
            </h3>

            {contactCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  key={card.title}
                  href={card.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 sm:gap-5 rounded-md border border-white/5 bg-[#1e242c] p-3 sm:p-5 transition-all hover:border-teal-500/30"
                >
                  <span className="flex-shrink-0 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-md bg-[#242b35] text-teal-500 group-hover:scale-110 group-hover:bg-teal-500/10 transition-all">
                    <Icon className="text-lg sm:text-2xl" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm font-medium text-slate-400 mb-1">
                      {card.title}
                    </p>
                    <p className="text-sm sm:text-lg font-bold text-white break-all sm:break-normal">
                      {card.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
              <span className="w-8 h-px bg-teal-500"></span>
              Envie uma mensagem
            </h3>
            <form
              className="rounded-md border border-white/5 bg-[#1e242c] p-4 sm:p-8"
              onSubmit={handleSubmit}
            >
              <div className="space-y-5">
                <label className="block">
                  <span className="text-sm font-semibold text-slate-400 mb-2 block">
                    Nome
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    value={formValues.name}
                    onChange={handleChange}
                    className="w-full rounded-md border border-white/5 bg-[#242b35] px-4 py-3.5 text-white placeholder:text-slate-500 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 focus:outline-none transition-colors"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-slate-400 mb-2 block">
                    E-mail
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu e-mail"
                    value={formValues.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-white/5 bg-[#242b35] px-4 py-3.5 text-white placeholder:text-slate-500 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 focus:outline-none transition-colors"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-slate-400 mb-2 block">
                    Mensagem
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Sua mensagem"
                    value={formValues.message}
                    onChange={handleChange}
                    className="w-full rounded-md border border-white/5 bg-[#242b35] px-4 py-3.5 text-white placeholder:text-slate-500 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 focus:outline-none resize-none transition-colors"
                  />
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto mt-4 inline-flex items-center justify-center rounded-md bg-teal-500 px-8 py-3.5 text-white font-bold transition-all hover:bg-teal-400 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </button>

                {status === "success" && (
                  <p className="text-sm font-bold text-emerald-500 mt-4">
                    Mensagem enviada com sucesso!
                  </p>
                )}

                {status === "error" && (
                  <p className="text-sm font-bold text-rose-500 mt-4">
                    {errorMessage}
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
