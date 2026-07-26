import { motion } from "framer-motion";
import { Activity, Wind, Baby, HeartPulse, Check } from "lucide-react";
import { servicios } from "../data/placeholder";
import SectionHeading from "./SectionHeading";

const iconMap = {
  Activity,
  Wind,
  Baby,
  HeartPulse,
} as const;

export default function Services() {
  return (
    <section id="servicios" className="relative py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Servicios"
          title={
            <>
              Áreas en las que puedo{" "}
              <span className="bg-gradient-to-r from-kine-700 to-teal-600 bg-clip-text text-transparent">
                ayudarte
              </span>
            </>
          }
          description="Atención kinesiológica integral para adultos y niños, en consulta o a domicilio."
        />

        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {servicios.map((s, i) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <motion.article
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="group relative p-6 sm:p-7 rounded-3xl bg-white/80 backdrop-blur border border-white/70 shadow-soft overflow-hidden"
              >
                {/* halo de hover */}
                <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br from-kine-300/40 to-teal-200/40 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-kine-500 to-teal-600 text-white grid place-items-center shadow-soft">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink-900">
                      {s.titulo}
                    </h3>
                    <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                      {s.descripcion}
                    </p>
                  </div>
                </div>

                <ul className="relative mt-5 space-y-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-ink-700"
                    >
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-kine-100 text-kine-700 grid place-items-center shrink-0">
                        <Check size={12} />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
