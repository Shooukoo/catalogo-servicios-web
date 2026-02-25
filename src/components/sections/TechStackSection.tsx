"use client";

import { motion } from "framer-motion";
import TechCarousel from "@/components/TechCarousel";
import ConceptCarousel from "@/components/ConceptCarousel";

export default function TechStackSection() {
    return (
        <section
            id="stack"
            className="relative min-h-screen flex flex-col justify-center py-24"
            aria-labelledby="stack-heading"
        >
            {/* Background accent */}
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(168,85,247,0.04) 0%, transparent 100%)",
                }}
            />

            {/* ── Tech stack header ── */}
            <div className="max-w-6xl mx-auto relative z-10 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
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
                        Stack Tecnológico
                    </span>
                    <h2
                        id="stack-heading"
                        className="text-4xl md:text-5xl font-black text-white tracking-tight"
                    >
                        Tecnologías que{" "}
                        <span className="gradient-text">domino y uso</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-xl mx-auto">
                        Mi stack de trabajo diario — lenguajes, frameworks y herramientas
                        con los que construyo soluciones reales.
                    </p>
                </motion.div>
            </div>

            {/* Tech icons carousel */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <TechCarousel />
            </motion.div>

            {/* ── Concepts header ── */}
            <div className="max-w-6xl mx-auto relative z-10 px-6 mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
                    className="mb-14 text-center"
                >
                    <span
                        className="inline-block mb-4 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border"
                        style={{
                            borderColor: "rgba(99,102,241,0.6)",
                            color: "#818CF8",
                            background: "rgba(99,102,241,0.08)",
                        }}
                    >
                        Arquitectura & Metodologías
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        Cómo pienso y{" "}
                        <span className="gradient-text">estructuro</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-xl mx-auto">
                        Patrones de diseño, arquitecturas de software, protocolos e
                        infraestructura que aplico en proyectos reales.
                    </p>
                </motion.div>
            </div>

            {/* Concepts carousel */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <ConceptCarousel />
            </motion.div>
        </section>
    );
}
