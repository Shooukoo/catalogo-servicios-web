"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { label: "Proyectos", href: "#proyectos" },
    { label: "Stack", href: "#stack" },
    { label: "Servicios", href: "#servicios" },
    { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-[#09090b]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
                    : "bg-transparent"
            )}
        >
            <nav
                className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"
                role="navigation"
                aria-label="Navegación principal"
            >
                {/* Logo */}
                <a href="https://uningenieromas.vercel.app" className="text-xl font-bold tracking-tight select-none" aria-label=".uningenieromás — Inicio">
                    <span style={{ color: "var(--accent)" }}>.</span>
                    <span className="text-white">uningenieromás</span>
                </a>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-8" role="list">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 relative group"
                            >
                                {link.label}
                                <span
                                    className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                                    style={{ background: "var(--accent)" }}
                                />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA — desktop */}
                <a
                    href="#contacto"
                    className="hidden md:inline-flex items-center gap-2 px-4 py-2 min-h-[44px] text-sm font-semibold rounded-lg border transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                    style={{
                        borderColor: "var(--accent)",
                        color: "var(--accent)",
                        background: "transparent",
                    }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "var(--accent-glow)";
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                >
                    Contrátame
                </a>

                {/* Mobile toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex items-center justify-center w-11 h-11 text-gray-400 hover:text-white transition-colors rounded-lg"
                    aria-label="Abrir menú"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden border-t border-white/5 bg-[#09090b]/95 backdrop-blur-xl px-6 pb-4 pt-2 flex flex-col gap-1">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-white font-medium py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors text-sm"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contacto"
                        onClick={() => setIsOpen(false)}
                        className="mt-2 flex items-center justify-center gap-2 px-4 py-3 min-h-[44px] rounded-lg text-sm font-semibold border"
                        style={{
                            borderColor: "var(--accent)",
                            color: "var(--accent)",
                            background: "var(--accent-glow)",
                        }}
                    >
                        Contrátame
                    </a>
                </div>
            )}
        </motion.header>
    );
}
