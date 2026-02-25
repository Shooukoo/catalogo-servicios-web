"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const contactInfo = [
    {
        icon: Phone,
        label: "WhatsApp",
        value: "+52 353 137 3007",
        href: "https://wa.me/523531373007",
    },
    {
        icon: MapPin,
        label: "Ubicación",
        value: "México",
        href: null,
    },
    {
        icon: Clock,
        label: "Disponibilidad",
        value: "Abierto a proyectos",
        href: null,
    },
];

export default function ContactSection() {
    return (
        <section
            id="contacto"
            className="relative min-h-screen flex flex-col justify-center py-24 px-6"
            aria-labelledby="contact-heading"
        >
            {/* Glow */}
            <div
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse, rgba(168,85,247,0.08) 0%, transparent 70%)",
                }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-14 text-center"
                >
                    <span
                        className="inline-block mb-4 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border"
                        style={{
                            borderColor: "var(--accent)",
                            color: "var(--accent)",
                            background: "var(--accent-glow)",
                        }}
                    >
                        Contacto
                    </span>
                    <h2
                        id="contact-heading"
                        className="text-4xl md:text-5xl font-black text-white tracking-tight"
                    >
                        ¿Tienes un{" "}
                        <span className="gradient-text">proyecto en mente?</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-xl mx-auto">
                        Hablemos. Ya sea una app, arquitectura o consultoría técnica,
                        estoy listo para el siguiente reto.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                    {/* Info column */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-2 flex flex-col gap-4"
                    >
                        {contactInfo.map(({ icon: Icon, label, value, href }) => (
                            <div
                                key={label}
                                className="flex items-center gap-4 p-4 rounded-xl border border-white/8 card-glass"
                            >
                                <div
                                    className="p-2.5 rounded-lg shrink-0"
                                    style={{ background: "var(--accent-glow)" }}
                                >
                                    <Icon size={18} style={{ color: "var(--accent)" }} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs text-gray-600 uppercase tracking-wide">
                                        {label}
                                    </p>
                                    {href ? (
                                        <a
                                            href={href}
                                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors truncate block"
                                        >
                                            {value}
                                        </a>
                                    ) : (
                                        <p className="text-sm font-medium text-gray-300">{value}</p>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Availability card */}
                        <div
                            className="p-5 rounded-xl border mt-2"
                            style={{
                                borderColor: "var(--accent)",
                                background: "var(--accent-glow)",
                            }}
                        >
                            <p className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                                <span
                                    className="w-2 h-2 rounded-full animate-pulse"
                                    style={{ background: "var(--accent)" }}
                                    aria-hidden="true"
                                />
                                Respuesta en &lt; 24h
                            </p>
                            <p className="text-xs text-gray-400">
                                Reviso mi WhatsApp todos los días laborales.
                            </p>
                        </div>
                    </motion.div>

                    {/* Form column */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-3 p-6 md:p-8 rounded-2xl border border-white/8 card-glass"
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
