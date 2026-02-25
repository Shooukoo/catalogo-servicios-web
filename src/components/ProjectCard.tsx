"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { Project } from "@/types";

interface ProjectCardProps {
    project: Project;
    index: number;
}

const badgeColors: Record<string, string> = {
    purple: "border-purple-500/40 text-purple-400 bg-purple-500/10",
    blue: "border-blue-500/40 text-blue-400 bg-blue-500/10",
    green: "border-green-500/40 text-green-400 bg-green-500/10",
    orange: "border-orange-500/40 text-orange-400 bg-orange-500/10",
};

const sizeClasses: Record<string, string> = {
    large: "md:col-span-2",
    medium: "md:col-span-1",
    small: "md:col-span-1",
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
    const isAI = project.id === "signlanguage";

    return (
        <motion.article
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className={cn(
                "group relative flex flex-col gap-4 p-6 rounded-2xl border overflow-hidden transition-all duration-300",
                "hover:border-white/15 hover:shadow-2xl",
                sizeClasses[project.size ?? "medium"],
                isAI
                    ? "border-orange-500/20 bg-gradient-to-br from-orange-950/20 via-[#111113] to-[#111113]"
                    : "border-white/8 bg-[var(--bg-card)]"
            )}
            style={
                isAI
                    ? {}
                    : {
                        boxShadow:
                            "0 0 0 0 transparent",
                    }
            }
            aria-label={`Proyecto: ${project.title}`}
        >
            {/* AI Special glow */}
            {isAI && (
                <div
                    aria-hidden="true"
                    className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none opacity-20"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(251,146,60,0.4) 0%, transparent 70%)",
                    }}
                />
            )}

            {/* Inner glow on hover */}
            <div
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                    background: isAI
                        ? "radial-gradient(ellipse at top right, rgba(251,146,60,0.06) 0%, transparent 60%)"
                        : "radial-gradient(ellipse at top right, var(--accent-glow) 0%, transparent 60%)",
                }}
            />

            {/* Header */}
            <div className="flex items-start justify-between gap-3 relative z-10">
                <div className="flex-1 min-w-0">
                    {project.badge && (
                        <span
                            className={cn(
                                "inline-block mb-3 px-2.5 py-1 text-xs font-bold rounded-full border uppercase tracking-wider",
                                badgeColors[project.badge.variant]
                            )}
                        >
                            {project.badge.label}
                        </span>
                    )}
                    <h3 className="text-lg font-bold text-white truncate group-hover:text-gray-100 transition-colors">
                        {project.title}
                    </h3>
                    <p
                        className="text-sm mt-0.5 truncate"
                        style={{ color: "var(--accent)" }}
                    >
                        {project.tagline}
                    </p>
                </div>

                {/* Action icons */}
                <div className="flex items-center gap-2 shrink-0">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Ver código de ${project.title} en GitHub`}
                            className="p-2 rounded-lg border border-white/8 text-gray-500 hover:text-white hover:border-white/20 transition-all"
                        >
                            <Github size={15} />
                        </a>
                    )}
                    {project.href && (
                        <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Ver proyecto ${project.title}`}
                            className="p-2 rounded-lg text-gray-500 hover:text-white transition-all border border-white/8 hover:border-white/20"
                        >
                            <ArrowUpRight size={15} />
                        </a>
                    )}
                </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-relaxed relative z-10 line-clamp-3">
                {project.description}
            </p>

            {/* Highlights */}
            <ul
                className="relative z-10 flex flex-col gap-1.5"
                aria-label="Características principales"
            >
                {project.highlights.map((h) => (
                    <li
                        key={h}
                        className="flex items-center gap-2 text-xs text-gray-500"
                    >
                        <span
                            className="w-1 h-1 rounded-full shrink-0"
                            style={{ background: "var(--accent)" }}
                            aria-hidden="true"
                        />
                        {h}
                    </li>
                ))}
            </ul>

            {/* Tech Stack pills */}
            <div
                className="flex flex-wrap gap-2 mt-auto relative z-10 pt-2 border-t border-white/5"
                aria-label="Tecnologías usadas"
            >
                {project.techStack.map((tech) => (
                    <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-md text-gray-400 border border-white/8"
                        style={{ background: "rgba(255,255,255,0.03)" }}
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </motion.article>
    );
}
