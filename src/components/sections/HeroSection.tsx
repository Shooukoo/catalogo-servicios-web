"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
};

const socialLinks = [
    { href: "https://github.com/Shooukoo", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/santiago-antonio-mora-nu%C3%B1ez-bb024a3b3", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:santiago.amn@hotmail.com", icon: Mail, label: "Email" },
];

export default function HeroSection() {
    return (
        <section
            id="inicio"
            className="relative min-h-screen flex flex-col items-center justify-start pt-24 md:justify-center md:pt-0 overflow-hidden px-4 sm:px-6"
            aria-label="Sección principal"
        >
            {/* Background glow orbs */}
            <div
                aria-hidden="true"
                className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[700px] sm:h-[700px] rounded-full pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)",
                }}
            />
            <div
                aria-hidden="true"
                className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] rounded-full pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
                }}
            />

            {/* Grid pattern overlay */}
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <motion.div
                className="relative z-10 max-w-5xl mx-auto text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Status badge */}
                <motion.div variants={itemVariants} className="flex justify-center mb-8">
                    <span
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border uppercase tracking-widest"
                        style={{
                            borderColor: "var(--accent)",
                            color: "var(--accent)",
                            background: "var(--accent-glow)",
                        }}
                    >
                        <span className="relative flex h-2 w-2">
                            <span
                                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                                style={{ background: "var(--accent)" }}
                            />
                            <span
                                className="relative inline-flex rounded-full h-2 w-2"
                                style={{ background: "var(--accent)" }}
                            />
                        </span>
                        Disponible para proyectos
                    </span>
                </motion.div>

                {/* Main heading */}
                <motion.h1
                    variants={itemVariants}
                    className="font-black tracking-tight text-white leading-[1.1] mb-4"
                    style={{ fontSize: "clamp(1.5rem, 5.5vw, 5rem)" }}
                >
                    Transformo ideas en{" "}
                    <span className="gradient-text">experiencias digitales</span>{" "}de alto rendimiento
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={itemVariants}
                    className="text-gray-400 max-w-2xl mx-auto mb-6 leading-relaxed"
                    style={{ fontSize: "clamp(0.875rem, 2vw, 1.125rem)" }}
                >
                    Ingeniero en Sistemas con enfoque en arquitectura de software, rendimiento
                    web y soluciones escalables. Construyo productos que importan.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap items-center justify-center gap-3 mb-8"
                >
                    <a
                        href="#proyectos"
                        className="inline-flex items-center gap-2 px-7 py-3.5 min-h-[44px] rounded-xl text-sm font-bold text-white transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
                        style={{
                            background: "linear-gradient(135deg, var(--accent), var(--accent-dark))",
                            boxShadow: "0 0 30px var(--accent-glow)",
                        }}
                    >
                        Ver proyectos
                    </a>
                    <a
                        href="#contacto"
                        className="inline-flex items-center gap-2 px-7 py-3.5 min-h-[44px] rounded-xl text-sm font-bold text-gray-300 border border-white/10 hover:border-white/20 hover:text-white transition-all duration-200 hover:-translate-y-1"
                        style={{ background: "rgba(255,255,255,0.03)" }}
                    >
                        Conversemos
                    </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    variants={itemVariants}
                    className="flex items-center justify-center gap-4"
                >
                    {socialLinks.map(({ href, icon: Icon, label }) => (
                        <a
                            key={label}
                            href={href}
                            aria-label={label}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl border border-white/8 text-gray-500 hover:text-white hover:border-white/20 transition-all duration-200 hover:-translate-y-1 group"
                            style={{ background: "var(--bg-card)" }}
                        >
                            <Icon
                                size={18}
                                className="group-hover:text-[var(--accent)] transition-colors"
                            />
                        </a>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="scroll-indicator absolute bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                aria-hidden="true"
            >
                <span className="text-xs text-gray-600 uppercase tracking-widest">
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown size={16} className="text-gray-600" />
                </motion.div>
            </motion.div>
        </section>
    );
}
