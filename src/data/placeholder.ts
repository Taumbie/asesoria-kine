// =============================================================
// DATOS PLACEHOLDER (marcados con "X" donde Hugo debe confirmar)
// Una vez que Hugo te pase la info real, solo cambias este archivo.
// =============================================================

export const profile = {
  nombre: "Hugo Hidalgo Alarcón",
  titulo: "Kinesiólogo",
  especialidad: "Rehabilitación Física y Respiratoria",
  tagline:
    "Recupera tu movimiento y tu respiración con un acompañamiento profesional, cercano y basado en evidencia.",
  foto: "/hugo-foto.jpeg",
  registro: "Registro profesional N° XXXXXX (dato X)",
  // ubicación
  ciudad: "Ciudad X, Chile",
  atiende: "Atención en consulta y domicilio (dato X)",
  // contacto
  whatsapp: {
    display: "+56 9 X XXX XXXX",
    href: "https://wa.me/569XXXXXXXX", // dato X
  },
  email: "contacto@hugohidalgo.cl", // dato X
  instagram: {
    display: "@hugo.kine",
    href: "https://instagram.com/hugo.kine", // dato X
  },
};

export const servicios = [
  {
    id: "fisica",
    icon: "Activity",
    titulo: "Rehabilitación Física",
    descripcion:
      "Recuperación de lesiones musculoesqueléticas, post-quirúrgicas y deportivas. Planes personalizados para volver a moverte sin dolor.",
    bullets: [
      "Lesiones deportivas y traumatológicas",
      "Rehabilitación post-quirúrgica",
      "Dolor lumbar, cervical y articular",
      "Kinesiología geriátrica",
    ],
  },
  {
    id: "respiratoria",
    icon: "Wind",
    titulo: "Kinesiología Respiratoria",
    descripcion:
      "Técnicas manuales y ejercicios para mejorar la capacidad pulmonar y la calidad de vida en enfermedades respiratorias agudas y crónicas.",
    bullets: [
      "EPOC, asma y bronquitis",
      "Rehabilitación post-COVID",
      "Fisioterapia respiratoria pediátrica",
      "Técnicas de drenaje y expansión",
    ],
  },
  {
    id: "pediatrica",
    icon: "Baby",
    titulo: "Atención Pediátrica",
    descripcion:
      "Especializado en niños y niñas, con un trato cálido que hace que la terapia sea un juego. Trabajo en conjunto con la familia.",
    bullets: [
      "Respiratorio infantil (sibilancias, neumonías)",
      "Desarrollo motor y postura",
      "Estimulación temprana del movimiento",
      "Atención lúdica y respetuosa",
    ],
  },
  {
    id: "adultos",
    icon: "HeartPulse",
    titulo: "Adultos y Mayores",
    descripcion:
      "Programas de acondicionamiento físico, prevención de caídas y mantención funcional para que mantengas tu independencia.",
    bullets: [
      "Entrenamiento funcional",
      "Prevención de caídas",
      "Manejo de enfermedades crónicas",
      "Mejora de calidad de vida",
    ],
  },
];

export const razones = [
  {
    icon: "Stethoscope",
    titulo: "Enfoque basado en evidencia",
    descripcion:
      "Tratamientos actualizados y respaldados por la literatura científica más reciente.",
  },
  {
    icon: "UserCheck",
    titulo: "Atención 100% personalizada",
    descripcion:
      "Cada paciente recibe un plan único, adaptado a sus objetivos y ritmo de vida.",
  },
  {
    icon: "Clock",
    titulo: "Horarios flexibles",
    descripcion:
      "Agenda que se acomoda a tu rutina, con opción de atención a domicilio.",
  },
  {
    icon: "Sparkles",
    titulo: "Trato cercano y humano",
    descripcion:
      "Más que un tratamiento, una alianza para que te sientas escuchado y acompañado.",
  },
];
