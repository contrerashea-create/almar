import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Propuesta — Grupo Almar",
  robots: "noindex, nofollow",
};

const features = [
  "Sitio web premium",
  "CRM integrado",
  "Panel de administración",
  "Bilingüe ES / EN",
  "SEO técnico",
  "Analytics propio",
];

export default function PropuestaPage() {
  return (
    <div className="relative min-h-screen overflow-hidden font-sans bg-black text-white">

      {/* Nav — HEA style */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <a
          href="https://consultinghea.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 group"
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded text-[10px] font-bold text-white"
            style={{ background: "#3b82f6" }}
          >
            HEA
          </span>
          <span className="text-sm font-semibold text-white group-hover:text-white/80 transition-colors">
            HEA Consulting
          </span>
        </a>
        <span className="text-xs text-white/40 uppercase tracking-widest hidden sm:block">
          Propuesta exclusiva · Grupo Almar
        </span>
      </nav>

      {/* Hero */}
      <div className="flex min-h-[calc(100vh-65px)] flex-col items-center justify-center px-8 pb-24 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
          Strategy · Technology · Results
        </p>

        <h1 className="mb-6 max-w-4xl text-5xl font-bold leading-tight md:text-7xl"
          style={{ fontFamily: "Montserrat, var(--font-heading), sans-serif" }}>
          Tu plataforma digital,{" "}
          <span style={{ color: "#3b82f6" }}>como debe ser.</span>
        </h1>

        <p className="mb-2 max-w-xl text-lg leading-relaxed text-white/60 md:text-xl">
          Un solo sistema que conecta tu sitio web, catálogo de propiedades, leads y equipo.
        </p>
        <p className="mb-12 text-sm text-gray-500">
          Resultados reales. No solo planes.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/propuesta/oferta"
            className="flex items-center gap-2 rounded-lg px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "#3b82f6" }}
          >
            Ver propuesta completa
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 rounded-lg border border-white/20 px-8 py-3 text-sm text-white/60 transition-colors hover:border-white/40 hover:text-white"
          >
            Ver demo del sitio
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="flex flex-wrap justify-center gap-6 text-[11px] uppercase tracking-widest text-white/20">
          {features.map((f) => (
            <span key={f}>{f}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
