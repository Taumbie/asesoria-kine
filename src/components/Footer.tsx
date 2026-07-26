import { Stethoscope, Heart } from "lucide-react";
import { profile } from "../data/placeholder";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 mt-10 border-t border-ink-200/60 bg-white/60 backdrop-blur">
      <div className="container-page py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-gradient-to-br from-kine-500 to-teal-600 text-white">
            <Stethoscope size={16} />
          </span>
          <div className="text-sm">
            <div className="font-semibold text-ink-900">{profile.nombre}</div>
            <div className="text-xs text-ink-700">{profile.especialidad}</div>
          </div>
        </div>
        <div className="text-xs text-ink-700 flex items-center gap-1">
          © {year} {profile.nombre} · Hecho con{" "}
          <Heart size={12} className="text-warm-500 fill-warm-500" /> por{" "}
          <a
            href="https://github.com/yessi06"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-kine-700 hover:underline"
          >
            yessi
          </a>
        </div>
      </div>
    </footer>
  );
}
