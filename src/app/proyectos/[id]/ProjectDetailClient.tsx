"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Project } from "@/types";

const badgeColors: Record<string, string> = {
  purple: "border-purple-500/40 text-purple-400 bg-purple-500/10",
  blue: "border-blue-500/40 text-blue-400 bg-blue-500/10",
  green: "border-green-500/40 text-green-400 bg-green-500/10",
  orange: "border-orange-500/40 text-orange-400 bg-orange-500/10",
};

const statusConfig: Record<string, { color: string; dot: string }> = {
  "En desarrollo activo": {
    color: "text-orange-400 bg-orange-500/10 border-orange-500/30",
    dot: "bg-orange-400",
  },
  Completado: {
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    dot: "bg-emerald-400",
  },
  "Demo disponible": {
    color: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    dot: "bg-blue-400",
  },
  "En pausa": {
    color: "text-gray-400 bg-gray-500/10 border-gray-500/30",
    dot: "bg-gray-400",
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

interface Props {
  project: Project;
}

export default function ProjectDetailClient({ project }: Props) {
  const isOrange = project.badge?.variant === "orange";
  const status = project.status ? statusConfig[project.status] : null;

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      {/* ── Top bar ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-white/5 backdrop-blur-md"
        style={{ background: "rgba(9,9,11,0.85)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <Link
            href="/#proyectos"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft
              size={15}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            Volver al portafolio
          </Link>
          <span
            className="text-sm font-bold hidden sm:block"
            style={{ color: "var(--accent)" }}
          >
            .uningenieromás
          </span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-16"
        >
          {/* ── Hero ─────────────────────────────────────────────── */}
          <section>
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-6">
              {project.badge && (
                <span
                  className={cn(
                    "px-3 py-1 text-xs font-bold rounded-full border uppercase tracking-wider",
                    badgeColors[project.badge.variant]
                  )}
                >
                  {project.badge.label}
                </span>
              )}
              {status && project.status && (
                <span
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border",
                    status.color
                  )}
                >
                  <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", status.dot)} />
                  {project.status}
                </span>
              )}
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-black text-white tracking-tight mb-3"
              style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
            >
              {project.title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl mb-6"
              style={{ color: "var(--accent)" }}
            >
              {project.tagline}
            </motion.p>

            {project.roles && project.roles.length > 0 && (
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-2"
                aria-label="Roles desempeñados"
              >
                {project.roles.map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1 text-xs rounded-full border font-medium"
                    style={{
                      borderColor: "var(--accent)",
                      color: "var(--accent)",
                      background: "var(--accent-glow)",
                    }}
                  >
                    {role}
                  </span>
                ))}
              </motion.div>
            )}
          </section>

          {/* ── Description ─────────────────────────────────────── */}
          <motion.section variants={itemVariants}>
            <SectionLabel>Descripción</SectionLabel>
            <div className="flex flex-col gap-4 mt-4">
              {project.longDescription
                ? project.longDescription.map((para, i) => (
                    <p key={i} className="text-gray-400 leading-relaxed">
                      {para}
                    </p>
                  ))
                : (
                  <p className="text-gray-400 leading-relaxed">{project.description}</p>
                )}
            </div>
          </motion.section>

          {/* ── Architecture ────────────────────────────────────── */}
          {project.architectureLayers && project.architectureLayers.length > 0 && (
            <section>
              <motion.div variants={itemVariants}>
                <SectionLabel>Arquitectura</SectionLabel>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {project.architectureLayers.map((layer, i) => (
                  <motion.div
                    key={layer.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
                    className={cn(
                      "flex flex-col gap-3 p-5 rounded-xl border transition-colors duration-200",
                      "hover:border-white/15",
                      isOrange
                        ? "border-orange-500/20 bg-gradient-to-br from-orange-950/15 via-[#111113] to-[#111113]"
                        : "border-white/8 bg-[var(--bg-card)]"
                    )}
                  >
                    <h3 className="text-sm font-bold text-white">{layer.name}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{layer.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1 border-t border-white/5">
                      {layer.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-xs font-medium rounded-md text-gray-400 border border-white/8"
                          style={{ background: "rgba(255,255,255,0.03)" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* ── Tech stack by category ───────────────────────────── */}
          {project.techByCategory && project.techByCategory.length > 0 && (
            <motion.section variants={itemVariants}>
              <SectionLabel>Stack tecnológico</SectionLabel>
              <div className="flex flex-col gap-5 mt-4">
                {project.techByCategory.map((cat) => (
                  <div key={cat.category} className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-6">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest w-32 shrink-0 pt-1">
                      {cat.category}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 text-xs font-medium rounded-lg text-gray-300 border border-white/8"
                          style={{ background: "rgba(255,255,255,0.04)" }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ── Highlights ───────────────────────────────────────── */}
          <motion.section variants={itemVariants}>
            <SectionLabel>Características principales</SectionLabel>
            <ul className="flex flex-col gap-3 mt-4">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-gray-400">
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                    style={{ background: "var(--accent)" }}
                    aria-hidden="true"
                  />
                  {h}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* ── Links ───────────────────────────────────────────── */}
          <motion.section
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/5"
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl border border-white/10 text-gray-300 hover:text-white hover:border-white/20 transition-all"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <Github size={15} />
                Ver código
              </a>
            )}
            {project.href && project.href !== "#" && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl transition-all"
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                }}
              >
                <ExternalLink size={15} />
                Ver demo
              </a>
            )}
            <Link
              href="/#proyectos"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl border border-white/8 text-gray-500 hover:text-gray-300 hover:border-white/15 transition-all ml-auto"
            >
              <ArrowLeft size={14} />
              Todos los proyectos
            </Link>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border"
      style={{
        borderColor: "var(--accent)",
        color: "var(--accent)",
        background: "var(--accent-glow)",
      }}
    >
      {children}
    </span>
  );
}
