"use client";

import { motion } from "framer-motion";
import { Zap, MessageSquare, FileText, Bell, ShoppingCart, ArrowRight } from "lucide-react";

const workflows = [
    {
        icon: MessageSquare,
        category: "CRM & Ventas",
        name: "Bot de WhatsApp",
        description:
            "Responde consultas frecuentes, califica leads y agenda citas automáticamente, sin intervención humana 24/7.",
        color: "#22C55E",
        bg: "#0a1a0f",
        borderColor: "#22C55E30",
    },
    {
        icon: Zap,
        category: "Productividad",
        name: "Sincronización de CRM",
        description:
            "Conecta formularios web, emails y chats a tu CRM. Cada lead entra solo, sin copy-paste ni errores humanos.",
        color: "#A855F7",
        bg: "#120b1a",
        borderColor: "#A855F730",
        featured: true,
    },
    {
        icon: FileText,
        category: "Finanzas",
        name: "Automatización de Facturación",
        description:
            "Al cerrar una venta, el sistema genera la factura, la envía al cliente y registra el cobro — todo automático.",
        color: "#38BDF8",
        bg: "#0a1520",
        borderColor: "#38BDF830",
    },
    {
        icon: Bell,
        category: "Comunicación",
        name: "Notificaciones Inteligentes",
        description:
            "Envía alertas a Slack, Email o WhatsApp cuando ocurre un evento clave: nueva orden, stock bajo, error crítico.",
        color: "#FB923C",
        bg: "#1a0f06",
        borderColor: "#FB923C30",
    },
    {
        icon: ShoppingCart,
        category: "E-commerce",
        name: "Integración de Tienda",
        description:
            "Sincroniza inventario entre Shopify/WooCommerce y tu sistema interno en tiempo real. Sin discrepancias de stock.",
        color: "#F472B6",
        bg: "#1a0a12",
        borderColor: "#F472B630",
    },
];

export default function AutomationsSection() {
    return (
        <section
            id="automatizaciones"
            className="section-full relative flex flex-col justify-center py-16 md:py-24 px-4 sm:px-6"
            aria-labelledby="automations-heading"
        >
            {/* Background glow */}
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(168,85,247,0.05) 0%, transparent 100%)",
                }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
                    className="mb-8 md:mb-14 text-center"
                >
                    <span
                        className="inline-block mb-4 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border"
                        style={{
                            borderColor: "var(--accent)",
                            color: "var(--accent)",
                            background: "var(--accent-glow)",
                        }}
                    >
                        Automatización con n8n
                    </span>
                    <h2
                        id="automations-heading"
                        className="font-black text-white tracking-tight"
                        style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
                    >
                        Tu negocio en{" "}
                        <span className="gradient-text">piloto automático</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Con n8n conectamos tus herramientas favoritas y eliminamos tareas
                        repetitivas. Flujos que trabajan por ti, incluso mientras duermes.
                    </p>
                </motion.div>

                {/* Workflow cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                    {workflows.map((wf, i) => {
                        const Icon = wf.icon;
                        return (
                            <motion.div
                                key={wf.name}
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.1,
                                    ease: [0.16, 1, 0.3, 1] as const,
                                }}
                                className="relative flex flex-col rounded-2xl border overflow-hidden transition-transform duration-300 hover:-translate-y-1 p-6"
                                style={{
                                    borderColor: wf.borderColor,
                                    background: wf.bg,
                                }}
                            >
                                {/* Top accent line */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-[2px]"
                                    style={{ background: wf.color }}
                                />

                                {/* Icon + category */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className="p-2.5 rounded-xl"
                                        style={{ background: `${wf.color}18` }}
                                    >
                                        <Icon
                                            size={18}
                                            style={{ color: wf.color }}
                                        />
                                    </div>
                                    <span
                                        className="text-xs font-bold uppercase tracking-widest"
                                        style={{ color: wf.color }}
                                    >
                                        {wf.category}
                                    </span>
                                </div>

                                {/* Name */}
                                <h3 className="text-base font-bold text-white mb-2">
                                    {wf.name}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-400 leading-relaxed flex-1">
                                    {wf.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
                >
                    <div
                        className="px-6 py-4 rounded-2xl border max-w-lg w-full sm:w-auto"
                        style={{
                            borderColor: "var(--accent)",
                            background: "var(--accent-glow)",
                        }}
                    >
                        <p className="text-sm font-semibold text-white mb-1">
                            ¿Tienes un proceso manual que quieres automatizar?
                        </p>
                        <p className="text-xs text-gray-400 mb-3">
                            Cuéntame cómo funciona y te propongo un flujo en menos de 24h.
                        </p>
                        <a
                            href="#contacto"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                            style={{
                                background:
                                    "linear-gradient(135deg, var(--accent), var(--accent-dark))",
                                boxShadow: "0 0 20px var(--accent-glow)",
                            }}
                        >
                            Quiero automatizar mi negocio
                            <ArrowRight size={14} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
