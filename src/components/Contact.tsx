import { motion } from "framer-motion";
import { MessageCircle, Mail, Instagram, MapPin, ArrowUpRight } from "lucide-react";
import { profile } from "../data/placeholder";
import SectionHeading from "./SectionHeading";

const contactItems = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: profile.whatsapp.display,
    href: profile.whatsapp.href,
    cta: "Enviar mensaje",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    cta: "Escribir",
    color: "from-kine-500 to-kine-700",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: profile.instagram.display,
    href: profile.instagram.href,
    cta: "Seguir",
    color: "from-fuchsia-500 to-rose-500",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: profile.ciudad,
    href: "#",
    cta: "Ver mapa",
    color: "from-amber-500 to-warm-500",
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="relative py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contacto"
          title={
            <>
              ¿Listo para empezar tu{" "}
              <span className="bg-gradient-to-r from-kine-700 to-teal-600 bg-clip-text text-transparent">
                recuperación
              </span>
              ?
            </>
          }
          description="Escríbeme por el canal que prefieras. Te respondo a la brevedad."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-14 relative overflow-hidden rounded-3xl bg-gradient-to-br from-kine-700 via-kine-800 to-teal-900 p-1 shadow-soft"
        >
          <div className="relative rounded-[1.4rem] bg-gradient-to-br from-kine-700 via-kine-800 to-teal-900 p-8 sm:p-12 text-white overflow-hidden">
            {/* halo interno */}
            <div className="absolute -top-32 -right-20 w-80 h-80 rounded-full bg-teal-400/30 blur-3xl" />
            <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-kine-300/20 blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold">
                  Conversemos sobre tu caso
                </h3>
                <p className="mt-3 text-white/80 max-w-md">
                  Cuéntame qué te pasa y te orientaré. La primera consulta puede
                  ser online o presencial según tu preferencia.
                </p>
                <a
                  href={profile.whatsapp.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-ink-900 font-semibold shadow-soft hover:scale-[1.02] active:scale-100 transition-transform"
                >
                  <MessageCircle size={18} />
                  {profile.whatsapp.display}
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {contactItems.map((c, i) => (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    whileHover={{ y: -3 }}
                    className="group flex flex-col gap-2 p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 backdrop-blur transition-colors"
                  >
                    <div
                      className={`w-9 h-9 rounded-xl bg-gradient-to-br ${c.color} grid place-items-center text-white`}
                    >
                      <c.icon size={18} />
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-white/60 font-semibold">
                      {c.label}
                    </div>
                    <div className="text-sm font-semibold text-white truncate">
                      {c.value}
                    </div>
                    <div className="text-xs text-white/70 group-hover:text-white inline-flex items-center gap-1">
                      {c.cta}
                      <ArrowUpRight
                        size={12}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
