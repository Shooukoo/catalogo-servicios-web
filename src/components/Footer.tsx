"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const LINKS = [
    { label: "Proyectos", href: "#proyectos" },
    { label: "Stack", href: "#stack" },
    { label: "Contacto", href: "#contacto" },
];

const SOCIALS = [
    { href: "https://github.com/Shooukoo", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/santiago-antonio-mora-nu%C3%B1ez-bb024a3b3", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:santiago.amn@hotmail.com", icon: Mail, label: "Email" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer
            className="relative z-10 border-t py-12"
            style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
            role="contentinfo"
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

                    {/* Brand */}
                    <div>
                        <a href="#" className="text-xl font-bold tracking-tight select-none">
                            <span style={{ color: "var(--accent)" }}>.</span>
                            <span className="text-white">uningenieromás</span>
                        </a>
                        <p className="mt-3 text-sm leading-relaxed text-gray-500">
                            Ingeniero en Sistemas especializado en desarrollo web y arquitectura
                            de software. Construyo productos que importan.
                        </p>
                    </div>

                    {/* Nav */}
                    <div>
                        <h4 className="text-white font-semibold mb-3 text-sm">Navegación</h4>
                        <ul className="space-y-2">
                            {LINKS.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-gray-500 transition-colors duration-200"
                                        style={{}}
                                        onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLElement).style.color =
                                                "var(--accent)";
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.currentTarget as HTMLElement).style.color = "";
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-3 text-sm">Contacto</h4>
                        <div className="flex flex-col gap-3">
                            {SOCIALS.map(({ href, icon: Icon, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-gray-500 transition-colors duration-200"
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.color =
                                            "var(--accent)";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.color = "";
                                    }}
                                >
                                    <Icon size={15} />
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-600"
                    style={{ borderColor: "var(--border)" }}
                >
                    <span>© {year} Kevin Mora. Todos los derechos reservados.</span>
                    <span style={{ color: "var(--accent)", opacity: 0.5 }}>
                        uningenieromás.com
                    </span>
                </div>
            </div>
        </footer>
    );
}
