import { motion } from "framer-motion";
import { GraduationCap, Award, HeartHandshake } from "lucide-react";
import { profile } from "../data/placeholder";
import SectionHeading from "./SectionHeading";

const items = [
  {
    icon: GraduationCap,
    titulo: "Formación académica",
    texto:
      "Kinesiólogo titulado con especialización en rehabilitación respiratoria (dato X).",
  },
  {
    icon: Award,
    titulo: "Capacitación continua",
    texto:
      "Actualización permanente en técnicas de rehabilitación física y respiratoria (dato X).",
  },
  {
    icon: HeartHandshake,
    titulo: "Vocación de servicio",
    texto:
      "Cada paciente es único. Mi compromiso es acompañarte en todo tu proceso de recuperación.",
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="relative py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Sobre mí"
          title={
            <>
              Kinesiología con mirada{" "}
              <span className="bg-gradient-to-r from-kine-700 to-teal-600 bg-clip-text text-transparent">
                humana y científica
              </span>
            </>
          }
          description={`Soy ${profile.nombre}, kinesiólogo dedicado a ayudarte a recuperar tu movilidad, tu respiración y tu calidad de vida.`}
        />

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="relative p-6 rounded-2xl bg-white/70 backdrop-blur border border-white/70 shadow-soft"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-kine-400 to-transparent" />
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-kine-500 to-teal-600 grid place-items-center text-white shadow-soft">
                <it.icon size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-ink-900">
                {it.titulo}
              </h3>
              <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                {it.texto}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
