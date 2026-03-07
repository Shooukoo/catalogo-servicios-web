"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Briefcase, Lightbulb } from "lucide-react";

const softSkills = [
    "Comunicación efectiva",
    "Aprendizaje autodidacta",
    "Resolución de problemas",
    "Trabajo en equipo",
    "Adaptabilidad",
    "Atención al detalle",
];

const experience = [
    {
        role: "Desarrollador Full-Stack Freelance",
        company: "Un Ingeniero Más",
        period: "2023 — Presente",
        description:
            "Diseño y desarrollo de sistemas web a medida, APIs REST y apps móviles para clientes en México. Proyectos en producción con Next.js, NestJS y React Native.",
    },
    {
        role: "Desarrollador de Software (Proyectos Académicos)",
        company: "Universidad de Guadalajara — CUCI",
        period: "2021 — 2024",
        description:
            "Desarrollo de proyectos de visión computacional, sistemas de gestión y aplicaciones web como parte de la formación en Ingeniería en Sistemas.",
    },
];

const formation = [
    {
        title: "Ingeniería en Sistemas Computacionales",
        institution: "Universidad de Guadalajara — CUCI",
        period: "2021 — 2025",
        icon: GraduationCap,
    },
    {
        title: "Desarrollo Web Full-Stack",
        institution: "Autodidacta — Cursos especializados",
        period: "2022 — Presente",
        icon: Lightbulb,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
};

export default function AboutSection() {
    return (
        <section
            id="sobre-mi"
            className="section-full relative flex flex-col justify-center py-16 md:py-24 px-4 sm:px-6"
            aria-labelledby="about-heading"
        >
            {/* Background glow */}
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 70% 50% at 20% 50%, rgba(168,85,247,0.05) 0%, transparent 100%)",
                }}
            />

            <div className="max-w-6xl mx-auto relative z-10 w-full">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-10 md:mb-14 text-center"
                >
                    <span
                        className="inline-block mb-4 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border"
                        style={{
                            borderColor: "var(--accent)",
                            color: "var(--accent)",
                            background: "var(--accent-glow)",
                        }}
                    >
                        Sobre mí
                    </span>
                    <h2
                        id="about-heading"
                        className="font-black text-white tracking-tight"
                        style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
                    >
                        La persona detrás{" "}
                        <span className="gradient-text">del código</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-xl mx-auto">
                        Ingeniero en Sistemas de Guadalajara, México. Me especializo en
                        construir productos digitales que resuelven problemas reales.
                    </p>
                </motion.div>

                {/* Main grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid grid-cols-1 lg:grid-cols-5 gap-8"
                >
                    {/* ── Left: Photo + soft skills ── */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-2 flex flex-col gap-6"
                    >
                        {/* Profile photo */}
                        <div
                            className="relative mx-auto lg:mx-0 w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 shrink-0"
                            style={{ borderColor: "var(--accent)" }}
                        >
                            {/* Fallback placeholder — shown only when no image loads */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 z-0 flex flex-col items-center justify-center text-center p-4"
                                style={{
                                    background:
                                        "linear-gradient(135deg, rgba(168,85,247,0.3) 0%, rgba(124,58,237,0.3) 100%)",
                                }}
                            >
                                <span className="text-5xl font-black text-white/80">SM</span>
                                <span className="text-xs text-white/50 mt-1">Añade tu foto</span>
                            </div>
                            {/* Actual photo — sits on top of the fallback */}
                            <Image
                                src="/profile.jpg"
                                alt="Santiago Mora Nuñez — Foto de perfil"
                                fill
                                className="object-cover relative z-10"
                                priority
                            />
                        </div>

                        {/* Soft skills */}
                        <div
                            className="p-5 rounded-2xl border border-white/8 card-glass"
                        >
                            <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                                <span
                                    className="w-1.5 h-4 rounded-full"
                                    style={{ background: "var(--accent)" }}
                                    aria-hidden="true"
                                />
                                Habilidades blandas
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {softSkills.map((label) => (
                                    <span
                                        key={label}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-gray-300 border border-white/8"
                                        style={{ background: "rgba(255,255,255,0.03)" }}
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="w-1.5 h-1.5 rounded-full shrink-0"
                                            style={{ background: "var(--accent)" }}
                                        />
                                        {label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* ── Right: Experience + Formation ── */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-3 flex flex-col gap-6"
                    >
                        {/* Experience */}
                        <div className="p-6 rounded-2xl border border-white/8 card-glass">
                            <h3 className="text-sm font-bold text-white mb-5 flex items-center gap-2">
                                <Briefcase
                                    size={15}
                                    style={{ color: "var(--accent)" }}
                                    aria-hidden="true"
                                />
                                Experiencia laboral
                            </h3>
                            <div className="flex flex-col gap-5">
                                {experience.map((exp, i) => (
                                    <div
                                        key={i}
                                        className="relative pl-4 border-l-2"
                                        style={{ borderColor: "var(--accent)" }}
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                                            <span className="text-sm font-bold text-white">
                                                {exp.role}
                                            </span>
                                            <span
                                                className="text-xs font-medium shrink-0 px-2 py-0.5 rounded-full border"
                                                style={{
                                                    borderColor: "var(--accent)",
                                                    color: "var(--accent)",
                                                    background: "var(--accent-glow)",
                                                }}
                                            >
                                                {exp.period}
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-500 font-medium mb-1.5">
                                            {exp.company}
                                        </p>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Formation */}
                        <div className="p-6 rounded-2xl border border-white/8 card-glass">
                            <h3 className="text-sm font-bold text-white mb-5 flex items-center gap-2">
                                <GraduationCap
                                    size={15}
                                    style={{ color: "var(--accent)" }}
                                    aria-hidden="true"
                                />
                                Formación
                            </h3>
                            <div className="flex flex-col gap-4">
                                {formation.map(({ title, institution, period, icon: Icon }) => (
                                    <div
                                        key={title}
                                        className="flex items-start gap-3"
                                    >
                                        <div
                                            className="p-2 rounded-lg shrink-0"
                                            style={{ background: "var(--accent-glow)" }}
                                        >
                                            <Icon
                                                size={16}
                                                style={{ color: "var(--accent)" }}
                                            />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-sm font-semibold text-white">
                                                {title}
                                            </p>
                                            <p className="text-xs text-gray-500 mt-0.5">
                                                {institution}
                                            </p>
                                            <p
                                                className="text-xs mt-1 font-medium"
                                                style={{ color: "var(--accent)", opacity: 0.8 }}
                                            >
                                                {period}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
