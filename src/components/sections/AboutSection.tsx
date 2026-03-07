"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Lightbulb } from "lucide-react";

// With basePath="/portafolio", Next.js <Image> may not apply the prefix correctly
// when this app is served as a subpath proxy on Vercel. Use an explicit BASE constant.
const BASE = (process.env.NEXT_PUBLIC_ASSET_URL ?? "/portafolio").replace(/\/$/, "");

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
                    {/* ── Left: Full-height photo card ── */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-2"
                    >
                        {/* Photo card — fills the full column height */}
                        <div
                            className="relative w-full rounded-2xl overflow-hidden border border-white/10"
                            style={{
                                minHeight: "420px",
                                height: "100%",
                                borderColor: "rgba(168,85,247,0.3)",
                            }}
                        >
                            {/* Fallback placeholder */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 z-0 flex flex-col items-center justify-center"
                                style={{
                                    background:
                                        "linear-gradient(160deg, rgba(168,85,247,0.25) 0%, rgba(124,58,237,0.15) 100%)",
                                }}
                            >
                                <span className="text-7xl font-black text-white/20">SM</span>
                            </div>

                            {/* Photo */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={`${BASE}/profile.jpg`}
                                alt="Santiago Mora Nuñez — Foto de perfil"
                                className="absolute inset-0 z-10 w-full h-full object-cover object-center"
                            />

                            {/* Bottom gradient overlay */}
                            <div
                                aria-hidden="true"
                                className="absolute bottom-0 left-0 right-0 z-20 h-48"
                                style={{
                                    background:
                                        "linear-gradient(to top, rgba(9,9,11,0.95) 0%, rgba(9,9,11,0.6) 50%, transparent 100%)",
                                }}
                            />

                            {/* Name + role + soft skills overlay */}
                            <div className="absolute bottom-0 left-0 right-0 z-30 p-6">
                                <p className="text-2xl font-black text-white leading-tight">
                                    Santiago Mora
                                </p>
                                <p
                                    className="text-sm font-medium mt-0.5 mb-4"
                                    style={{ color: "var(--accent)" }}
                                >
                                    Ingeniero en Sistemas
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {softSkills.map((label) => (
                                        <span
                                            key={label}
                                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium text-gray-300 border border-white/10"
                                            style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)" }}
                                        >
                                            <span
                                                aria-hidden="true"
                                                className="w-1 h-1 rounded-full shrink-0"
                                                style={{ background: "var(--accent)" }}
                                            />
                                            {label}
                                        </span>
                                    ))}
                                </div>
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
