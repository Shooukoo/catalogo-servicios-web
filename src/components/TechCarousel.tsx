"use client";

import { useState } from "react";

/* ─────────────────────────────────────────────
   Tech icon metadata — all icons served from /public/icons/
   color: brand hex used for glow + border + bg on hover
   icon:  path relative to /public
───────────────────────────────────────────── */
export interface TechIcon {
    name: string;
    color: string;
    icon: string;
}

// Native <img> tags don't inherit Next.js basePath automatically.
// NEXT_PUBLIC_ASSET_URL should be set to the absolute URL of this
// Vercel deployment (e.g. https://catalogo-servicios-web.vercel.app)
// so SVGs load correctly both through the /catalogo proxy and directly.
// Falls back to "/catalogo" (= basePath) when running locally.
const ASSET = (process.env.NEXT_PUBLIC_ASSET_URL ?? "/catalogo").replace(/\/$/, "");

export const techIcons: TechIcon[] = [
    // ── Web basics ──────────────────────────────
    { name: "HTML5", color: "#E34F26", icon: `${ASSET}/icons/html-5-svgrepo-com.svg` },
    { name: "CSS3", color: "#1572B6", icon: `${ASSET}/icons/css-svgrepo-com.svg` },
    { name: "JavaScript", color: "#F7DF1E", icon: `${ASSET}/icons/javascript-svgrepo-com.svg` },
    // ── Frontend ──────────────────────────────
    { name: "TypeScript", color: "#3178C6", icon: `${ASSET}/icons/typescript-svgrepo-com.svg` },
    { name: "React", color: "#61DAFB", icon: `${ASSET}/icons/react-svgrepo-com.svg` },
    { name: "Next.js", color: "#e2e8f0", icon: `${ASSET}/icons/next-dot-js-svgrepo-com.svg` },
    { name: "Tailwind CSS", color: "#06B6D4", icon: `${ASSET}/icons/tailwind-css-svgrepo-com.svg` },
    // ── Backend ──────────────────────────────
    { name: "NestJS", color: "#E0234E", icon: `${ASSET}/icons/nestjs-svgrepo-com.svg` },
    { name: "Node.js", color: "#339933", icon: `${ASSET}/icons/node-js-svgrepo-com.svg` },
    { name: "Python", color: "#3776AB", icon: `${ASSET}/icons/python-svgrepo-com.svg` },
    { name: "PHP", color: "#777BB4", icon: `${ASSET}/icons/php-svgrepo-com.svg` },
    { name: "FastAPI", color: "#009688", icon: `${ASSET}/icons/fastapi-svgrepo-com.svg` },
    // ── Databases ──────────────────────────────
    { name: "PostgreSQL", color: "#4169E1", icon: `${ASSET}/icons/postgresql-svgrepo-com.svg` },
    { name: "MySQL", color: "#4479A1", icon: `${ASSET}/icons/mysql-svgrepo-com.svg` },
    { name: "MongoDB", color: "#47A248", icon: `${ASSET}/icons/mongo-svgrepo-com.svg` },
    { name: "Prisma", color: "#818CF8", icon: `${ASSET}/icons/light-prisma-svgrepo-com.svg` },
    // ── DevOps & Tools ──────────────────────────────
    { name: "Docker", color: "#2496ED", icon: `${ASSET}/icons/docker-svgrepo-com.svg` },
    { name: "Git", color: "#F05032", icon: `${ASSET}/icons/git-svgrepo-com.svg` },
    { name: "Vercel", color: "#e2e8f0", icon: `${ASSET}/icons/vercel-icon-svgrepo-com.svg` },
    // ── AI & ML ──────────────────────────────
    { name: "TensorFlow", color: "#FF6F00", icon: `${ASSET}/icons/tensorflow-svgrepo-com.svg` },
    { name: "RabbitMQ", color: "#FF6600", icon: `${ASSET}/icons/rabbitmq-logo-svgrepo-com.svg` },
];

/* ─────────────────────────────────────────────
   Single carousel row — infinite marquee
───────────────────────────────────────────── */
interface CarouselRowProps {
    icons: TechIcon[];
    reverse?: boolean;
    speed?: number; // seconds per full cycle
}

function CarouselRow({ icons, reverse = false, speed = 40 }: CarouselRowProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // 4 copies → animate -25% (= 1 copy width) → seamless at any screen size
    const copies = [...icons, ...icons, ...icons, ...icons];

    return (
        <div
            className="carousel-wrapper relative overflow-hidden py-2"
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
                maskImage:
                    "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
        >
            <div
                className="carousel-track flex gap-4 w-max"
                style={{
                    animation: `${reverse ? "marquee-reverse" : "marquee"} ${speed}s linear infinite`,
                }}
            >
                {copies.map((tech, i) => {
                    const isHovered = hoveredIndex === i;
                    return (
                        <div
                            key={`${tech.name}-${i}`}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            title={tech.name}
                            className="flex flex-col items-center justify-center gap-2 rounded-2xl border cursor-default select-none flex-shrink-0 transition-all duration-300 text-center"
                            style={{
                                width: 132,
                                height: 132,
                                borderColor: isHovered
                                    ? `${tech.color}55`
                                    : "rgba(255,255,255,0.07)",
                                background: isHovered
                                    ? `radial-gradient(circle at 50% 0%, ${tech.color}22 0%, rgba(255,255,255,0.03) 100%)`
                                    : "rgba(255,255,255,0.025)",
                                transform: isHovered
                                    ? "translateY(-4px) scale(1.06)"
                                    : "translateY(0) scale(1)",
                                boxShadow: isHovered
                                    ? `0 8px 28px ${tech.color}35`
                                    : "none",
                            }}
                        >
                            {/* Icon */}
                            <div
                                style={{
                                    width: 44,
                                    height: 44,
                                    transition: "filter 0.3s ease",
                                    filter: isHovered
                                        ? "grayscale(0) brightness(1)"
                                        : "grayscale(1) brightness(0.55)",
                                }}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    style={{ objectFit: "contain", width: "100%", height: "100%" }}
                                />
                            </div>

                            {/* Label */}
                            <span
                                className="text-[10px] font-semibold leading-tight px-1 transition-colors duration-300"
                                style={{ color: isHovered ? "#E5E7EB" : "#374151" }}
                            >
                                {tech.name}
                            </span>
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
export default function TechCarousel() {
    const row2 = [...techIcons].reverse();

    return (
        <div className="flex flex-col gap-3">
            <CarouselRow icons={techIcons} speed={42} />
            <CarouselRow icons={row2} reverse speed={36} />
        </div>
    );
}
