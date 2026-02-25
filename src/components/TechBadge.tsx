"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TechItem, TechCategory } from "@/types";

interface TechBadgeProps {
    tech: TechItem;
    index: number;
}

const categoryColors: Record<TechCategory, string> = {
    frontend: "from-blue-500/20 to-cyan-500/10 border-blue-500/20 text-blue-300",
    backend: "from-purple-500/20 to-violet-500/10 border-purple-500/20 text-purple-300",
    database: "from-green-500/20 to-emerald-500/10 border-green-500/20 text-green-300",
    devops: "from-orange-500/20 to-amber-500/10 border-orange-500/20 text-orange-300",
    ai: "from-pink-500/20 to-rose-500/10 border-pink-500/20 text-pink-300",
    tools: "from-gray-500/20 to-slate-500/10 border-gray-500/20 text-gray-300",
};

export default function TechBadge({ tech, index }: TechBadgeProps) {
    const colorClass = categoryColors[tech.category];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
                duration: 0.4,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -3, transition: { duration: 0.15 } }}
            className={cn(
                "group relative flex flex-col gap-2 p-4 rounded-xl border bg-gradient-to-br cursor-default",
                "hover:shadow-lg transition-shadow duration-200",
                colorClass
            )}
            role="listitem"
            title={tech.justification}
        >
            {/* Icon */}
            <div className="flex items-center gap-2.5">
                <span
                    className="text-xl leading-none select-none"
                    aria-hidden="true"
                >
                    {tech.icon}
                </span>
                <span className="text-sm font-bold text-white">{tech.name}</span>
            </div>
            {/* Justification */}
            <p className="text-xs text-gray-500 leading-snug group-hover:text-gray-400 transition-colors">
                {tech.justification}
            </p>
        </motion.div>
    );
}
