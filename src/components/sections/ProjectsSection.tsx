"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data";

export default function ProjectsSection() {
    return (
        <section
            id="proyectos"
            className="section-full relative flex flex-col justify-center py-16 md:py-24 px-4 sm:px-6"
            aria-labelledby="projects-heading"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
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
                        Proyectos
                    </span>
                    <h2
                        id="projects-heading"
                        className="font-black text-white tracking-tight"
                        style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
                    >
                        Lo que he{" "}
                        <span className="gradient-text">construido</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-xl mx-auto">
                        Cada proyecto cuenta una historia técnica — de un problema real a
                        una solución escalable.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min"
                    role="list"
                    aria-label="Lista de proyectos"
                >
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
