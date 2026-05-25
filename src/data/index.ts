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
    badge: { label: "Escalabilidad", variant: "purple" },
    featured: true,
    size: "large",
    status: "Completado",
    longDescription: [
      "RepairLab Enterprise nació para resolver un problema cotidiano en talleres de electrónica: la gestión de reparaciones a través de WhatsApp y hojas de papel. Sin un sistema centralizado, las órdenes se perdían, los técnicos no sabían qué equipo era urgente y los clientes no tenían forma de saber el estado de su dispositivo.",
      "La solución es una plataforma web construida sobre un backend NestJS con más de 13 módulos: autenticación JWT con tres roles diferenciados, gestión de inventario de refacciones, catálogo de servicios con precios, y un motor de órdenes de reparación con máquina de estados. Socket.IO entrega actualizaciones en tiempo real al dashboard cuando el técnico cambia el estado de una reparación.",
      "El frontend en React + Vite ofrece vistas distintas para cada rol: el administrador ve métricas y gestión de usuarios, el técnico ve su cola de trabajo y puede actualizar el progreso, y la recepcionista registra entradas y genera comprobantes PDF con QR code para que el cliente pueda identificar su equipo.",
    ],
    architectureLayers: [
      {
        name: "API REST (NestJS)",
        description: "Núcleo del sistema: autenticación JWT, 13+ módulos, WebSockets con Socket.IO",
        tech: ["NestJS", "TypeScript", "Socket.IO", "JWT"],
      },
      {
        name: "Base de Datos",
        description: "Esquema relacional con migraciones versionadas y queries type-safe",
        tech: ["PostgreSQL", "Prisma ORM"],
      },
      {
        name: "Dashboard Web",
        description: "SPA multi-vista para Admins, Técnicos y Recepcionistas",
        tech: ["React", "Vite", "TypeScript"],
      },
    ],
    techByCategory: [
      { category: "Backend", items: ["NestJS", "TypeScript", "Socket.IO", "JWT"] },
      { category: "Base de Datos", items: ["PostgreSQL", "Prisma ORM"] },
      { category: "Frontend", items: ["React", "Vite", "TypeScript"] },
      { category: "Herramientas", items: ["QR codes", "PDF generation", "Excel export"] },
    ],
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
    badge: { label: "Full-Stack", variant: "blue" },
    size: "medium",
    status: "Completado",
    longDescription: [
      "MoraTech System surgió de la necesidad de un revendedor de telefonía de reemplazar su proceso manual de activación de chips — hojas de cálculo, llamadas telefónicas y errores de inventario constantes. El objetivo era tener visibilidad en tiempo real del stock y un flujo de activación guiado para los operadores de campo.",
      "La solución consta de dos interfaces complementarias: un panel administrativo web en Next.js donde el administrador gestiona el catálogo de chips, visualiza el inventario y genera reportes, y una app móvil en Expo (iOS y Android) donde los operadores en campo pueden escanear, activar y registrar chips con su dispositivo personal. Ambas interfaces comparten el mismo esquema PostgreSQL a través de Prisma.",
    ],
    architectureLayers: [
      {
        name: "Panel Admin (Next.js)",
        description: "Dashboard para gestión de inventario, reportes y configuración del catálogo",
        tech: ["Next.js", "TypeScript"],
      },
      {
        name: "App Móvil (Expo)",
        description: "Aplicación iOS/Android para operadores en campo: activación y registro de chips",
        tech: ["Expo", "React Native"],
      },
      {
        name: "Base de Datos",
        description: "Esquema relacional compartido entre la app web y la app móvil",
        tech: ["PostgreSQL", "Prisma ORM"],
      },
    ],
    techByCategory: [
      { category: "Mobile", items: ["Expo", "React Native"] },
      { category: "Frontend Web", items: ["Next.js", "TypeScript"] },
      { category: "Base de Datos", items: ["PostgreSQL", "Prisma ORM"] },
    ],
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
    status: "Demo disponible",
    longDescription: [
      "Yesmos Celulares necesitaba una presencia web que compitiera en buscadores con las grandes cadenas. El reto era doble: un sitio rápido y bien posicionado, y precios actualizados automáticamente sin intervención manual.",
      "El resultado es un sitio Next.js con SSG para máximo rendimiento — Lighthouse consistentemente por encima de 95 en todas las métricas. El SEO técnico incluye sitemap dinámico, robots.txt optimizado y JSON-LD structured data para que Google entienda cada producto y la tienda como entidad local.",
      "Un pipeline de scraping en Node.js y PHP consulta los distribuidores periódicamente y actualiza los precios en la base de datos. El sitio re-genera las páginas afectadas con ISR (Incremental Static Regeneration) sin necesidad de un despliegue completo.",
    ],
    architectureLayers: [
      {
        name: "Frontend (Next.js)",
        description: "SSG + ISR para máximo rendimiento y posicionamiento SEO",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        name: "Scraping pipeline",
        description: "Automatización de precios y disponibilidad desde distribuidores",
        tech: ["PHP", "Node.js"],
      },
      {
        name: "Deploy",
        description: "Deploy automático con CI/CD en Vercel con dominio propio",
        tech: ["Vercel"],
      },
    ],
    techByCategory: [
      { category: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS"] },
      { category: "Scraping", items: ["PHP", "Node.js"] },
      { category: "Infraestructura", items: ["Vercel", "JSON-LD", "ISR"] },
    ],
  },
  {
    id: "zarzamora",
    title: "RubusAI",
    tagline: "Plataforma de análisis fenológico de mora en arquitectura de microservicios",
    description:
      "Sistema de agricultura de precisión para el cultivo de zarzamora. Captura imágenes desde app móvil Flutter, las almacena en Cloudflare R2 y las procesa a través de un pipeline de inferencia Python FastAPI orquestado por RabbitMQ — con resultados entregados en tiempo real vía WebSocket.",
    techStack: ["NestJS", "FastAPI", "Flutter", "RabbitMQ", "PostgreSQL", "Cloudflare R2"],
    highlights: [
      "Pipeline end-to-end: captura → R2 → RabbitMQ → inferencia → WebSocket — funciona en producción",
      "Arquitectura de 4 microservicios desacoplados: backend, coordinador, inferencia ML y app móvil",
      "App Flutter con BLoC, cola offline con Drift/SQLite y notificaciones push Firebase FCM",
    ],
    roles: ["Full-Stack Lead", "Arquitecto de Microservicios", "ML Engineer", "Mobile Dev"],
    badge: { label: "Agricultura IA", variant: "orange" },
    featured: true,
    size: "large",
    status: "En desarrollo activo",
    longDescription: [
      "RubusAI es una plataforma de agricultura de precisión diseñada para apoyar el análisis fenológico del cultivo de zarzamora (Rubus spp.). El sistema permite a productores y técnicos capturar imágenes del cultivo desde una app Flutter que, con un solo tap, sube la imagen a Cloudflare R2 y la encola en RabbitMQ para procesamiento asíncrono — con soporte offline completo para zonas sin cobertura.",
      "El pipeline de inferencia — un microservicio Python FastAPI con un modelo de clasificación YOLOv8 — consume los mensajes de la cola, analiza las imágenes y retorna la distribución de etapas fenológicas detectadas. Los resultados llegan al usuario en tiempo real a través de WebSockets, sin refrescar la app. Firebase FCM maneja las notificaciones push cuando el análisis de un lote concluye en background.",
      "El sistema está compuesto por cuatro servicios independientes y desacoplados: fruit-backend (NestJS+Fastify), fruit-ms (coordinador de mensajería), fruit-inference (FastAPI+YOLOv8) y zarza_ai (Flutter BLoC). El acceso está gobernado por RBAC con cuatro roles: ADMIN, PRODUCTOR, AGRONOMO y MONITOR. El proyecto se encuentra en desarrollo activo con el flujo principal de captura-a-resultado funcionando end-to-end.",
    ],
    architectureLayers: [
      {
        name: "fruit-backend (NestJS + Fastify)",
        description: "API principal: autenticación RBAC, gateway WebSocket, gestión de campos y análisis",
        tech: ["NestJS", "Fastify", "TypeScript", "WebSocket"],
      },
      {
        name: "fruit-ms (NestJS Microservice)",
        description: "Coordinador de mensajería: consume eventos de RabbitMQ y orquesta el pipeline de inferencia",
        tech: ["NestJS", "RabbitMQ", "AMQP"],
      },
      {
        name: "fruit-inference (FastAPI)",
        description: "Servicio ML: descarga imagen de R2, ejecuta clasificación fenológica con YOLOv8 y retorna reporte",
        tech: ["Python", "FastAPI", "YOLOv8", "OpenCV"],
      },
      {
        name: "zarza_ai (Flutter)",
        description: "App móvil de campo: captura, cola offline, galería histórica y notificaciones push",
        tech: ["Flutter", "Dart", "BLoC", "Firebase FCM"],
      },
      {
        name: "Infraestructura",
        description: "Almacenamiento de imágenes, base de datos relacional y mensajería asíncrona",
        tech: ["Cloudflare R2", "PostgreSQL", "Prisma", "RabbitMQ", "Docker"],
      },
    ],
    techByCategory: [
      { category: "Backend", items: ["NestJS", "Fastify", "TypeScript", "WebSocket", "JWT"] },
      { category: "AI / ML", items: ["Python", "FastAPI", "YOLOv8", "OpenCV"] },
      { category: "Mobile", items: ["Flutter", "Dart", "BLoC", "Firebase FCM"] },
      { category: "Base de Datos", items: ["PostgreSQL", "Prisma ORM"] },
      { category: "Infraestructura", items: ["Cloudflare R2", "RabbitMQ", "Docker"] },
    ],
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
