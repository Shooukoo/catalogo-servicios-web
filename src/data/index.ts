import { Project, TechItem } from "@/types";

export const projects: Project[] = [
  {
    id: "repairlab",
    title: "RepairLab Enterprise",
    tagline: "Sistema integral de gestión de reparaciones técnicas",
    description:
      "Plataforma completa para talleres de electrónica y celulares. Backend API con NestJS y 13+ módulos (auth, inventario, órdenes, catálogo de servicios, notificaciones en tiempo real). Dashboard web con React + Vite para admins, técnicos y recepcionistas.",
    techStack: ["NestJS", "PostgreSQL", "Prisma", "React", "Socket.IO"],
    highlights: [
      "Auth multi-rol (Admin, Técnico, Recepcionista)",
      "Notificaciones en tiempo real con Socket.IO",
      "Exportación PDF/Excel + QR codes por reparación",
    ],
    roles: ["Arquitecto de software", "Backend Lead", "Frontend Dev"],
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
      "Solución full-stack para la activación de chips de telefonía. Panel administrativo web y app móvil con Expo para operadores en campo, conectados a una base de datos relacional.",
    techStack: ["Expo", "React Native", "PostgreSQL", "Next.js", "Prisma"],
    highlights: [
      "App móvil con Expo (iOS & Android)",
      "Panel administrativo web",
      "Gestión de inventario de chips",
    ],
    roles: ["Desarrollador Full-Stack", "Diseñador de BD"],
    href: "#",
    badge: { label: "Full-Stack", variant: "blue" },
    size: "medium",
  },
  {
    id: "yesmos",
    title: "Yesmos Celulares",
    tagline: "Sitio web para tienda de refacciones de teléfonos",
    description:
      "Sitio web frontend para una tienda de refacciones de celulares con Next.js, SEO técnico avanzado y scraping de precios/disponibilidad con Node.js y PHP.",
    techStack: ["Next.js", "TypeScript", "Node.js", "PHP", "Vercel"],
    highlights: [
      "SEO técnico avanzado — Lighthouse > 95",
      "Web scraping con Node.js y PHP",
      "JSON-LD structured data",
    ],
    roles: ["Developer Frontend", "SEO Técnico", "Web Scraping"],
    href: "https://yesmos.com",
    badge: { label: "Frontend & Scraping", variant: "green" },
    size: "medium",
  },
  {
    id: "zarzamora",
    title: "Reconocimiento de Cultivo de Zarzamora",
    tagline: "Visión computacional para clasificación de enfermedades en zarzamora",
    description:
      "Sistema de análisis de imágenes de cultivos de zarzamora con YOLOv8 y TensorFlow. Detecta y clasifica enfermedades como Botrytis, Fusarium y Quemadura Solar para apoyar decisiones agrícolas en campo.",
    techStack: ["Python", "YOLOv8", "OpenCV", "TensorFlow", "FastAPI"],
    highlights: [
      "Clasificación de 5+ enfermedades en tiempo real",
      "Modelo YOLOv8 entrenado con dataset de zarzamora",
      "Pipeline de inferencia con FastAPI",
    ],
    roles: ["ML Engineer", "Computer Vision", "Investigador"],
    href: "#",
    badge: { label: "AI Lab", variant: "orange" },
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
    icon: "TW",
    justification: "Utility-first para velocidad de iteración",
    category: "frontend",
  },
  {
    name: "NestJS",
    icon: "NT",
    justification: "Backend estructurado con DI y decoradores",
    category: "backend",
  },
  {
    name: "Python",
    icon: "PY",
    justification: "Ciencia de datos y pipelines de ML",
    category: "ai",
  },
  {
    name: "PostgreSQL",
    icon: "PG",
    justification: "ACID compliance para datos críticos",
    category: "database",
  },
  {
    name: "MongoDB",
    icon: "MG",
    justification: "Documentos flexibles para datos dinámicos",
    category: "database",
  },
  {
    name: "Docker",
    icon: "DK",
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
    icon: "YL",
    justification: "Detección de objetos en tiempo real",
    category: "ai",
  },
  {
    name: "RabbitMQ",
    icon: "MQ",
    justification: "Message broker para microservicios desacoplados",
    category: "devops",
  },
];
