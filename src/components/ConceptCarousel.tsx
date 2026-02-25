"use client";

import { useState } from "react";

/* ─────────────────────────────────────────────
   Concepts: architecture, storage, servers, patterns.
   No SVG icon needed — styled text cards.
───────────────────────────────────────────── */
export interface Concept {
    name: string;
    category: string;
    color: string; // accent / glow color
}

export const concepts: Concept[] = [
    // ── Almacenamiento & Infraestructura ──────
    { name: "Redis", category: "Cache", color: "#DC382D" },
    { name: "AWS S3", category: "Storage", color: "#FF9900" },
    { name: "Cloudflare", category: "CDN / DNS", color: "#F48120" },
    { name: "Linux", category: "Sistema", color: "#FCC624" },
    { name: "Nginx", category: "Servidor", color: "#009639" },
    { name: "Apache", category: "Servidor", color: "#D42029" },
    // ── Arquitectura ──────────────────────────
    { name: "Clean Architecture", category: "Arquitectura", color: "#818CF8" },
    { name: "Domain-Driven Design", category: "Metodología", color: "#A78BFA" },
    { name: "Hexagonal Arch.", category: "Arquitectura", color: "#34D399" },
    { name: "Microservices", category: "Arquitectura", color: "#60A5FA" },
    { name: "MVC", category: "Patrón", color: "#FB923C" },
    // ── Principios & Prácticas ────────────────
    { name: "SOLID", category: "Principios", color: "#F472B6" },
    { name: "TDD", category: "Testing", color: "#10B981" },
    { name: "CI/CD", category: "DevOps", color: "#F59E0B" },
    { name: "Git Flow", category: "Workflow", color: "#F05032" },
    { name: "Agile / Scrum", category: "Metodología", color: "#7C3AED" },
    // ── APIs & Protocolos ─────────────────────
    { name: "REST API", category: "API", color: "#4ADE80" },
    { name: "GraphQL", category: "API", color: "#E535AB" },
    { name: "WebSockets", category: "Protocolo", color: "#38BDF8" },
    { name: "JWT / OAuth2", category: "Seguridad", color: "#EF4444" },
    { name: "gRPC", category: "Protocolo", color: "#244C5A" },
];

/* ─────────────────────────────────────────────
   Carousel row
───────────────────────────────────────────── */
interface RowProps {
    items: Concept[];
    reverse?: boolean;
    speed?: number;
}

function ConceptRow({ items, reverse = false, speed = 38 }: RowProps) {
    const [hovered, setHovered] = useState<number | null>(null);

    // Quadruple for seamless infinite loop
    const copies = [...items, ...items, ...items, ...items];

    return (
        <div
            className="carousel-wrapper relative overflow-hidden py-2"
            onMouseLeave={() => setHovered(null)}
            style={{
                maskImage:
                    "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
        >
            <div
                className="carousel-track flex gap-3 w-max"
                style={{
                    animation: `${reverse ? "marquee-reverse" : "marquee"} ${speed}s linear infinite`,
                }}
            >
                {copies.map((item, i) => {
                    const isHovered = hovered === i;
                    return (
                        <div
                            key={`${item.name}-${i}`}
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                            className="flex flex-col justify-between flex-shrink-0 cursor-default select-none rounded-2xl border overflow-hidden transition-all duration-300"
                            style={{
                                width: 148,
                                height: 80,
                                borderColor: isHovered
                                    ? `${item.color}55`
                                    : "rgba(255,255,255,0.07)",
                                background: isHovered
                                    ? `radial-gradient(circle at 50% 0%, ${item.color}22 0%, rgba(255,255,255,0.03) 100%)`
                                    : "rgba(255,255,255,0.025)",
                                transform: isHovered
                                    ? "translateY(-4px) scale(1.04)"
                                    : "translateY(0) scale(1)",
                                boxShadow: isHovered
                                    ? `0 8px 28px ${item.color}30`
                                    : "none",
                            }}
                        >
                            {/* Colored accent top bar */}
                            <div
                                className="h-0.5 w-full transition-all duration-300"
                                style={{
                                    background: isHovered
                                        ? item.color
                                        : "rgba(255,255,255,0.08)",
                                }}
                            />

                            {/* Content */}
                            <div className="flex flex-col gap-1 px-3 pb-3 pt-2">
                                <span
                                    className="text-[9px] font-bold uppercase tracking-widest transition-colors duration-300"
                                    style={{
                                        color: isHovered ? item.color : "#4B5563",
                                    }}
                                >
                                    {item.category}
                                </span>
                                <span
                                    className="text-sm font-bold leading-tight transition-colors duration-300"
                                    style={{
                                        color: isHovered ? "#F9FAFB" : "#6B7280",
                                    }}
                                >
                                    {item.name}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   Main export — two rows, second reversed
───────────────────────────────────────────── */
export default function ConceptCarousel() {
    return (
        <div className="flex flex-col gap-3">
            <ConceptRow items={concepts} speed={44} />
        </div>
    );
}
