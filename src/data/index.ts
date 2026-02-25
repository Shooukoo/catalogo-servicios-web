import { Project, TechItem } from "@/types";

export const projects: Project[] = [
  {
    id: "repairlab",
    title: "RepairLab Enterprise",
    tagline: "Sistema integral de gestión de reparaciones técnicas",
    description:
      "Plataforma completa para talleres de electrónica y celulares. Backend API con NestJS y 13+ módulos (auth, inventario, órdenes, catálogo de servicios, notificaciones en tiempo real). Dashboard web interno con React + Vite para admins, técnicos y recepcionistas, con exportación de tickets en PDF y QR codes.",
    techStack: ["NestJS", "PostgreSQL", "Prisma", "React", "Socket.IO"],
    highlights: [
      "Auth multi-rol (Admin, Técnico, Recepcionista)",
      "Notificaciones en tiempo real con Socket.IO",
      "Gestión completa de órdenes con historial de estados",
      "Exportación PDF/Excel + QR codes por reparación",
    ],
    href: "#",
    badge: { label: "Escalabilidad", variant: "purple" },
    featured: true,
    size: "large",
  },
  {
    id: "moratech",
    title: "MoraTech System",
    tagline: "Plataforma completa para activación y gestión de chips",
    description:
      "Solución full-stack para la activación de chips de telefonía. Incluye una base de datos relacional, un panel administrativo web para gestión de inventario y activaciones, y una app móvil con Expo para operadores en campo.",
    techStack: ["Expo", "React Native", "PostgreSQL", "Next.js", "Prisma"],
    highlights: [
      "App móvil con Expo (iOS & Android)",
      "Panel administrativo web",
      "Base de datos relacional",
      "Gestión de inventario de chips",
    ],
    href: "#",
    badge: { label: "Full-Stack", variant: "blue" },
    size: "medium",
  },
  {
    id: "yesmos",
    title: "Yesmos Celulares",
    tagline: "Sitio web para tienda de refacciones de teléfonos",
    description:
      "Sitio web frontend para una tienda de refacciones de celulares. Desarrollado con Next.js con enfoque en rendimiento y SEO técnico avanzado. Incluye scraping de precios y disponibilidad de refacciones con Node.js y PHP.",
    techStack: ["Next.js", "TypeScript", "Node.js", "PHP", "Vercel"],
    highlights: [
      "Web scraping con Node.js y PHP",
      "SEO técnico avanzado",
      "Lighthouse score > 95",
      "JSON-LD structured data",
    ],
    href: "https://yesmos.com",
    badge: { label: "Frontend & Scraping", variant: "green" },
    size: "medium",
  },
  {
    id: "signlanguage",
    title: "Sign Language AI",
    tagline: "Visión computacional para lenguaje de señas",
    description:
      "Modelo de reconocimiento de lenguaje de señas en tiempo real usando YOLOv8 y Computer Vision. Detecta gestos con alta precisión para mejorar la accesibilidad y comunicación inclusiva.",
    techStack: ["Python", "YOLOv8", "OpenCV", "FastAPI", "TensorFlow"],
    highlights: [
      "Detección de gestos en tiempo real",
      "Modelo YOLOv8 entrenado a medida",
      "Servidor de inferencia con FastAPI",
      "Enfoque en accesibilidad e inclusión",
    ],
    href: "#",
    badge: { label: "AI Lab ✦", variant: "orange" },
    featured: true,
    size: "large",
  },
];

export const techStack: TechItem[] = [
  {
    name: "Next.js",
    icon: "▲",
    justification: "SSR + RSC para máximo rendimiento",
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: "TS",
    justification: "Tipado estático que previene errores en producción",
    category: "frontend",
  },
  {
    name: "React",
    icon: "⚛",
    justification: "Interfaces reactivas con estado predecible",
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    justification: "Utility-first para velocidad de iteración",
    category: "frontend",
  },
  {
    name: "NestJS",
    icon: "🔷",
    justification: "Backend estructurado con DI y decoradores",
    category: "backend",
  },
  {
    name: "Python",
    icon: "🐍",
    justification: "Ciencia de datos y pipelines de ML",
    category: "ai",
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
    justification: "ACID compliance para datos críticos",
    category: "database",
  },
  {
    name: "MongoDB",
    icon: "🍃",
    justification: "Documentos flexibles para datos dinámicos",
    category: "database",
  },
  {
    name: "Docker",
    icon: "🐳",
    justification: "Ambientes reproducibles en cualquier entorno",
    category: "devops",
  },
  {
    name: "Prisma",
    icon: "◆",
    justification: "ORM type-safe con migraciones automáticas",
    category: "database",
  },
  {
    name: "YOLOv8",
    icon: "👁",
    justification: "Detección de objetos en tiempo real",
    category: "ai",
  },
  {
    name: "RabbitMQ",
    icon: "🐰",
    justification: "Message broker para microservicios desacoplados",
    category: "devops",
  },
];
