import { motion } from "framer-motion";
import { Stethoscope, UserCheck, Clock, Sparkles } from "lucide-react";
import { razones } from "../data/placeholder";
import SectionHeading from "./SectionHeading";

const iconMap = {
  Stethoscope,
  UserCheck,
  Clock,
  Sparkles,
} as const;

export default function WhyMe() {
  return (
    <section id="por-que" className="relative py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="¿Por qué elegirme?"
          title={
            <>
              Una atención que marca{" "}
              <span className="bg-gradient-to-r from-kine-700 to-teal-600 bg-clip-text text-transparent">
                la diferencia
              </span>
            </>
          }
          description="Lo que me propongo en cada sesión: que salgas mejor de como llegaste."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {razones.map((r, i) => {
            const Icon = iconMap[r.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={r.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="relative p-6 rounded-2xl bg-white/70 backdrop-blur border border-white/70 text-center shadow-soft"
              >
                <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-kine-500/15 to-teal-500/15 grid place-items-center text-kine-700 border border-kine-200">
                  <Icon size={24} />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-ink-900">
                  {r.titulo}
                </h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                  {r.descripcion}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
