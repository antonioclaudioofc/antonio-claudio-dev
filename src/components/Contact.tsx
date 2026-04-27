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
      className="w-full py-24 px-4 bg-[#1e242c]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Entrar em contato
          </h2>
          <p className="mt-4 text-slate-400">
            Respondo normalmente em até 24 horas.
          </p>
          <p className="mt-2 text-slate-400">
            Aberto a oportunidades como Desenvolvedor Full Stack / Backend
            Python.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Fale comigo</h3>

            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <a
                  key={card.title}
                  href={card.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-slate-700/50 bg-[#242b35] px-4 py-4 transition-all hover:border-teal-500/50 hover:shadow-md hover:shadow-teal-500/10"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800 text-teal-400 group-hover:bg-teal-500/20 transition-colors">
                    <Icon className="text-xl" />
                  </span>
                  <div>
                    <p className="text-sm text-slate-400">{card.title}</p>
                    <p className="text-base font-medium text-white">{card.value}</p>
                  </div>
                </a>
              );
            })}
            <p className="mt-3 text-teal-400 font-medium">
              Disponível para trabalho remoto ou presencial.
            </p>
          </div>

          <form
            className="rounded-2xl border border-slate-700/50 bg-[#242b35] shadow-sm p-6"
            onSubmit={handleSubmit}
          >
            <h3 className="text-xl font-bold text-white mb-6">
              Envie uma mensagem
            </h3>

            <div className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium text-slate-300">Seu nome</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Digite seu nome"
                  value={formValues.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-slate-700 px-4 py-3 text-white placeholder:text-slate-500 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 focus:outline-none bg-slate-800"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-300">Seu e-mail</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Digite seu e-mail"
                  value={formValues.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 focus:outline-none"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-300">Mensagem</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Escreva sua mensagem aqui"
                  value={formValues.message}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 focus:outline-none resize-y"
                />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-teal-500 px-8 py-3 text-white font-semibold transition-all hover:shadow-lg hover:bg-teal-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>

              {status === "success" && (
                <p className="text-sm font-medium text-emerald-600">
                  Mensagem enviada! Vou retornar em breve.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm font-medium text-rose-600">{errorMessage}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
