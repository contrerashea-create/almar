import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Próximamente — Grupo Almar",
  robots: "noindex, nofollow",
};

export default function OfertaPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col" style={{ fontFamily: "Montserrat, sans-serif" }}>

      {/* Nav */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
          <Link
            href="/propuesta"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 transition-colors hover:text-white/70"
          >
            <ArrowLeft className="h-3 w-3" />
            Volver
          </Link>
          <a href="https://consultinghea.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 group">
            <span className="flex h-6 w-6 items-center justify-center rounded text-[8px] font-bold text-white"
              style={{ background: "#3b82f6" }}>HEA</span>
            <span className="text-xs font-semibold text-white/40 group-hover:text-white/70 transition-colors">
              HEA Consulting
            </span>
          </a>
        </div>
      </div>

      {/* Próximamente */}
      <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
          style={{ background: "#3b82f61a", border: "1px solid #3b82f633" }}>
          <span className="text-2xl font-bold" style={{ color: "#3b82f6" }}>A</span>
        </div>
        <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-white/30">Grupo Almar</p>
        <h1 className="mb-4 text-4xl font-bold text-white">Próximamente</h1>
        <p className="max-w-sm text-sm leading-relaxed text-gray-500">
          Esta sección estará disponible muy pronto.
        </p>
      </div>

      <p className="py-8 text-center text-[11px] text-gray-700">
        HEA Consulting · www.consultinghea.com
      </p>
    </div>
  );
}
