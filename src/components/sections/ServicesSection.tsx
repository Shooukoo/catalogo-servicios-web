"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const services = [
    {
        name: "Landing & SEO",
        tagline: "Más visibilidad. Más clientes.",
        color: "#E879A0",
        bg: "#1a0d12",
        borderColor: "#E879A040",
        glowColor: "#E879A018",
        features: [
            "Tu sitio carga en menos de 2 segundos",
            "Google te encuentra antes que a tu competencia",
            "Los clientes confían más en un sitio profesional",
            "Funciona perfecto en celular, tablet y PC",
            "Diseño que convierte visitas en contactos reales",
        ],
        cta: "Quiero más visibilidad",
        href: "#contacto",
    },
    {
        name: "Web Apps & Sistemas",
        tagline: "Tu negocio, organizado y sin errores.",
        color: "#A3E635",
        bg: "#0f1a06",
        borderColor: "#A3E63540",
        glowColor: "#A3E63518",
        features: [
            "Reemplaza hojas de cálculo y papeles con un sistema digital",
            "Tu equipo trabaja desde cualquier dispositivo",
            "Menos errores humanos, más tiempo para lo que importa",
            "Control total: inventario, clientes, reportes y más",
            "Acceso por roles: admins, empleados, clientes",
        ],
        cta: "Organiza mi negocio",
        href: "#contacto",
        featured: true,
    },
    {
        name: "Enterprise & AI",
        tagline: "Soluciones que el software común no puede dar.",
        color: "#FB923C",
        bg: "#1a0f06",
        borderColor: "#FB923C40",
        glowColor: "#FB923C18",
        features: [
            "Sistemas que 'ven' y entienden imágenes o videos en tiempo real",
            "Automatización de procesos complejos con inteligencia artificial",
            "Resultados que antes requerían un equipo de personas",
            "Integración con hardware, sensores o cámaras existentes",
            "Plataformas que crecen con tu empresa sin límites",
        ],
        cta: "Necesito algo exclusivo",
        href: "#contacto",
    },
];


export default function ServicesSection() {
    return (
        <section
            id="servicios"
            className="relative min-h-screen flex flex-col justify-center py-24 px-6"
            aria-labelledby="services-heading"
        >
            {/* Background glow */}
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 70% 40% at 50% 50%, rgba(168,85,247,0.05) 0%, transparent 100%)",
                }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
                    className="mb-16 text-center"
                >
                    <span
                        className="inline-block mb-4 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border"
                        style={{
                            borderColor: "var(--accent)",
                            color: "var(--accent)",
                            background: "var(--accent-glow)",
                        }}
                    >
                        Servicios
                    </span>
                    <h2
                        id="services-heading"
                        className="text-4xl md:text-5xl font-black text-white tracking-tight"
                    >
                        ¿En qué te{" "}
                        <span className="gradient-text">puedo ayudar?</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-xl mx-auto">
                        Desde una landing page hasta un sistema empresarial completo. Elige
                        el nivel que necesita tu proyecto.
                    </p>
                </motion.div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((svc, i) => (
                        <motion.div
                            key={svc.name}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const }}
                            className="relative flex flex-col rounded-3xl border overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                            style={{
                                borderColor: svc.borderColor,
                                background: svc.bg,
                            }}
                        >
                            {/* Colored top stripe */}
                            <div
                                className="h-1 w-full"
                                style={{ background: svc.color }}
                            />

                            {/* Glow blob behind title */}
                            <div
                                aria-hidden="true"
                                className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
                                style={{
                                    background: `radial-gradient(ellipse 80% 80% at 50% -10%, ${svc.color}25 0%, transparent 70%)`,
                                }}
                            />

                            <div className="flex flex-col flex-1 p-8 relative z-10">
                                {/* Title block */}
                                <div className="mb-6">
                                    <p
                                        className="text-xs font-bold uppercase tracking-widest mb-2"
                                        style={{ color: svc.color }}
                                    >
                                        {svc.tagline}
                                    </p>
                                    <h3 className="text-2xl font-black text-white">
                                        {svc.name}
                                    </h3>
                                </div>

                                {/* Feature list */}
                                <ul className="flex flex-col gap-3 flex-1 mb-8">
                                    {svc.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2.5">
                                            <span
                                                className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                                                style={{ background: `${svc.color}22` }}
                                            >
                                                <Check
                                                    size={11}
                                                    strokeWidth={3}
                                                    style={{ color: svc.color }}
                                                />
                                            </span>
                                            <span className="text-sm text-gray-300 leading-snug">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA button */}
                                <a
                                    href={svc.href}
                                    className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:opacity-90 active:scale-95"
                                    style={{
                                        background: "#09090b",
                                        color: svc.color,
                                        border: `1.5px solid ${svc.color}55`,
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.background = `${svc.color}18`;
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.background = "#09090b";
                                    }}
                                >
                                    {svc.cta}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
