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
    <div className="relative min-h-screen overflow-hidden font-sans" style={{ background: "#021f34" }}>
      {/* Ambient gradients */}
      <div
        className="pointer-events-none absolute right-[-10%] top-[-20%] h-[600px] w-[600px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #3069aa, transparent)" }}
      />
      <div
        className="pointer-events-none absolute bottom-[-10%] left-[20%] h-[400px] w-[400px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #3069aa, transparent)" }}
      />

      {/* Left badge */}
      <Link
        href="/propuesta/oferta"
        className="fixed left-0 top-1/2 z-50 -translate-y-1/2 group"
      >
        <div className="flex flex-col items-center gap-3 border-r border-white/10 bg-white/5 px-3 py-6 transition-all duration-300 hover:bg-white/10">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white"
            style={{ background: "#3069aa" }}
          >
            GC
          </div>
          <span
            className="text-[10px] uppercase tracking-[0.2em] text-white/40"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Ver Propuesta
          </span>
          <ArrowRight className="h-3 w-3 rotate-90 text-white/30 transition-colors group-hover:text-white/60" />
        </div>
      </Link>

      {/* Main content */}
      <div className="flex min-h-screen flex-col items-center justify-center px-8 pb-24 text-center">
        {/* Label */}
        <p className="mb-8 text-xs uppercase tracking-[0.3em] text-white/40">
          Propuesta exclusiva · Grupo Almar · 2026
        </p>

        {/* Heading */}
        <h1
          className="mb-6 max-w-4xl text-5xl leading-tight text-white md:text-7xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Tu plataforma digital,{" "}
          <span style={{ color: "#3069aa" }}>como debe ser.</span>
        </h1>

        {/* Subtitle */}
        <p className="mb-12 max-w-xl text-lg leading-relaxed text-white/50 md:text-xl">
          Un solo sistema que conecta tu sitio web, tu catálogo de propiedades,
          tus leads y tu equipo. Sin fricciones. Sin parches.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/propuesta/oferta"
            className="flex items-center gap-2 rounded-sm px-8 py-3 text-sm text-white transition-colors"
            style={{ background: "#3069aa" }}
          >
            Ver propuesta completa
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 rounded-sm border border-white/20 px-8 py-3 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white"
          >
            Ver demo del sitio
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Bottom features strip */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="flex flex-wrap justify-center gap-6 text-[11px] uppercase tracking-widest text-white/25">
          {features.map((f) => (
            <span key={f}>{f}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
