import { motion } from "framer-motion";

/**
 * Fondo dinámico animado.
 * - Mesh gradient con 3 blobs que se mueven lento (CSS keyframes)
 * - Conic gradient blur sutil
 * - Grid pattern muy tenue
 * - Capa oscura/luz según scroll (opcional)
 */
export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base color */}
      <div className="absolute inset-0 bg-gradient-to-b from-kine-50 via-white to-kine-50" />

      {/* Grid pattern sutil */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Conic gradient blur (sol feel) */}
      <motion.div
        aria-hidden
        className="absolute -top-40 -right-40 w-[60rem] h-[60rem] rounded-full opacity-50"
        initial={{ scale: 0.9, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, #bae6fd 0deg, #67e8f9 90deg, #bae6fd 180deg, #e0f2fe 270deg, #bae6fd 360deg)",
          filter: "blur(120px)",
        }}
      />

      {/* Blobs */}
      <div
        aria-hidden
        className="absolute top-1/4 -left-32 w-[28rem] h-[28rem] rounded-full bg-kine-300/40 mix-blend-multiply animate-blob"
        style={{ filter: "blur(80px)" }}
      />
      <div
        aria-hidden
        className="absolute top-1/2 -right-32 w-[32rem] h-[32rem] rounded-full bg-teal-300/40 mix-blend-multiply animate-blob-slow"
        style={{ filter: "blur(90px)" }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-1/3 w-[26rem] h-[26rem] rounded-full bg-sky-200/50 mix-blend-multiply animate-blob"
        style={{ filter: "blur(80px)", animationDelay: "-6s" }}
      />

      {/* Halo "respiratorio" — late muy lento, guiño a la especialidad respiratoria */}
      <motion.div
        aria-hidden
        className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(34,211,238,0.18) 0%, rgba(34,211,238,0) 60%)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Viñeta suave arriba para que el navbar lea bien */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/80 to-transparent" />
    </div>
  );
}
