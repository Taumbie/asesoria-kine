import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Stethoscope } from "lucide-react";
import { profile } from "../data/placeholder";

const links = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "servicios", label: "Servicios" },
  { id: "por-que", label: "¿Por qué?" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-page">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl border border-white/60 shadow-soft"
              : "bg-white/40 backdrop-blur border border-white/40"
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => goTo("inicio")}
            className="flex items-center gap-2 group"
          >
            <span className="relative grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-kine-500 to-teal-600 text-white shadow-soft">
              <Stethoscope size={18} />
              <span className="absolute inset-0 rounded-xl ring-1 ring-white/40" />
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm font-semibold text-ink-900">
                {profile.nombre}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-kine-700">
                {profile.especialidad}
              </span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => goTo(l.id)}
                className="px-3 py-2 text-sm rounded-lg text-ink-700 hover:text-kine-700 hover:bg-kine-50 transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* CTA desktop */}
          <button
            onClick={() => goTo("contacto")}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-kine-700 transition-colors"
          >
            Agendar hora
          </button>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-ink-900 hover:bg-ink-100"
            aria-label="Abrir menú"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 glass rounded-2xl p-3"
            >
              <div className="flex flex-col">
                {links.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => goTo(l.id)}
                    className="text-left px-3 py-2 rounded-lg text-ink-800 hover:bg-kine-50"
                  >
                    {l.label}
                  </button>
                ))}
                <button
                  onClick={() => goTo("contacto")}
                  className="mt-2 px-3 py-2 rounded-lg bg-ink-900 text-white"
                >
                  Agendar hora
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
