import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, MessageCircle, Sparkles } from "lucide-react";
import { profile } from "../data/placeholder";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: la foto y el texto se mueven a distintas velocidades
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center pt-32 pb-20"
    >
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Texto */}
          <motion.div
            style={{ y: textY, opacity }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur border border-kine-200 text-kine-700 text-xs font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
              </span>
              Aceptando nuevos pacientes · {profile.ciudad}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink-900 text-balance"
            >
              Hola, soy{" "}
              <span className="bg-gradient-to-r from-kine-700 via-teal-600 to-kine-500 bg-clip-text text-transparent">
                {profile.nombre}
              </span>
              .
              <br />
              <span className="text-ink-700">{profile.titulo}.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="mt-5 text-lg sm:text-xl text-ink-700 max-w-2xl text-balance"
            >
              <span className="font-semibold text-ink-900">
                {profile.especialidad}
              </span>{" "}
              en adultos y niños. {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href={profile.whatsapp.href}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={18} />
                Escríbeme por WhatsApp
              </a>
              <button
                onClick={() => scrollTo("servicios")}
                className="btn-ghost"
              >
                Ver servicios
                <ArrowDown size={16} />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-700"
            >
              <span className="inline-flex items-center gap-2">
                <Sparkles size={16} className="text-kine-600" />
                {profile.registro}
              </span>
              <span className="hidden sm:inline text-ink-200">·</span>
              <span>{profile.atiende}</span>
            </motion.div>
          </motion.div>

          {/* Foto */}
          <motion.div
            style={{ y: photoY }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow rings */}
              <div className="absolute inset-0 -m-6 rounded-full bg-gradient-to-tr from-kine-300/40 via-teal-200/40 to-transparent blur-2xl animate-breathe" />

              {/* Marco */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className="relative w-72 h-96 sm:w-80 sm:h-[26rem] lg:w-[22rem] lg:h-[28rem] rounded-[2rem] overflow-hidden shadow-soft border border-white/70 bg-white"
              >
                <img
                  src={profile.foto}
                  alt={profile.nombre}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Overlay gradient sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-kine-900/10 via-transparent to-transparent" />
              </motion.div>

              {/* Card flotante */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-6 -right-2 sm:-right-6 glass rounded-2xl p-3 pr-4 shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-kine-500 to-teal-600 grid place-items-center text-white">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-kine-700 font-semibold">
                      Especialidad
                    </div>
                    <div className="text-sm font-semibold text-ink-900">
                      Física y Respiratoria
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card flotante top-left */}
              <motion.div
                initial={{ opacity: 0, y: -10, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -top-4 -left-4 sm:-left-6 glass rounded-2xl p-3 shadow-soft"
              >
                <div className="text-[10px] uppercase tracking-wider text-teal-700 font-semibold">
                  Adultos y niños
                </div>
                <div className="text-sm font-semibold text-ink-900">
                  Atención integral
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-6 text-ink-700/70 hidden sm:flex flex-col items-center gap-1"
        >
          <span className="text-xs">Desliza para conocer más</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="block w-5 h-8 rounded-full border border-ink-700/40 grid place-items-start p-1"
          >
            <span className="block w-1.5 h-1.5 rounded-full bg-ink-700/60" />
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
