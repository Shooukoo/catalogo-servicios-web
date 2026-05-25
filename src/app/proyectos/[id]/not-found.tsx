import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectNotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      style={{ background: "var(--bg-primary)" }}
    >
      <p className="text-6xl font-black text-white/10 mb-4">404</p>
      <h1 className="text-2xl font-bold text-white mb-2">Proyecto no encontrado</h1>
      <p className="text-gray-500 mb-8">
        El proyecto que buscas no existe o fue movido.
      </p>
      <Link
        href="/#proyectos"
        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl border border-white/10 text-gray-300 hover:text-white hover:border-white/20 transition-all"
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        <ArrowLeft size={15} />
        Ver todos los proyectos
      </Link>
    </div>
  );
}
