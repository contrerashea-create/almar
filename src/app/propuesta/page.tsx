import Link from "next/link";
import { ArrowRight, ExternalLink, TrendingUp, Globe, LayoutDashboard, BarChart3, ShieldCheck, Lock, Server } from "lucide-react";

export const metadata = {
  title: "Propuesta | Almar",
  robots: "noindex, nofollow",
};

const services = [
  {
    icon: Globe,
    label: "Plataforma Web",
    desc: "Sitio premium + catálogo de propiedades bilingüe ES/EN, optimizado para SEO y celular.",
  },
  {
    icon: LayoutDashboard,
    label: "Panel de Control",
    desc: "Administra propiedades, agentes y blog desde un solo centro de control privado.",
  },
  {
    icon: BarChart3,
    label: "Analíticos",
    desc: "Dashboard integrado con visitas, leads, conversiones y fuentes de tráfico en tiempo real.",
  },
  {
    icon: TrendingUp,
    label: "Resultados",
    desc: "Una sola venta cubre la inversión completa. La plataforma trabaja por Almar 24/7.",
  },
];

export default function PropuestaPage() {
  return (
    <div
      className="relative min-h-screen overflow-hidden text-white"
      style={{ background: "#000000", fontFamily: "Montserrat, sans-serif" }}
    >

      {/* Background glow */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59,130,246,0.18) 0%, transparent 70%)",
        }}
      />
      {/* Grid overlay */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Nav */}
      <nav
        className="relative z-10 flex items-center justify-between px-8 py-5 border-b"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        <a
          href="https://consultinghea.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://consultinghea.com/images/LOGO.png"
            alt="HEA Consulting"
            style={{
              height: "30px",
              width: "30px",
              borderRadius: "7px",
              background: "white",
              padding: "2px",
              objectFit: "contain",
            }}
          />
          <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.85)" }}>
            HEA Consulting
          </span>
        </a>
        <span
          className="text-[11px] uppercase tracking-[0.2em] hidden sm:block"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          Propuesta exclusiva · Almar
        </span>
      </nav>

      {/* Hero */}
      <div className="relative z-10 flex min-h-[calc(100vh-65px)] flex-col items-center justify-center px-8 pb-32 pt-16 text-center">

        {/* Eyebrow */}
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
          style={{ borderColor: "rgba(59,130,246,0.3)", background: "rgba(59,130,246,0.06)" }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full animate-pulse"
            style={{ background: "#3b82f6" }}
          />
          <span className="text-[11px] uppercase tracking-widest" style={{ color: "#3b82f6" }}>
            Strategy · Technology · Results
          </span>
        </div>

        {/* Heading */}
        <h1
          className="mb-6 max-w-4xl leading-[1.05]"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", fontWeight: 800 }}
        >
          Tu plataforma digital,{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #93c5fd 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            como debe ser.
          </span>
        </h1>

        {/* Sub */}
        <p
          className="mb-2 max-w-xl leading-relaxed"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", color: "rgba(255,255,255,0.5)", fontWeight: 400 }}
        >
          Un solo sistema que conecta tu sitio web, catálogo de propiedades, leads y equipo.
        </p>
        <p
          className="mb-12 text-sm font-medium"
          style={{ color: "rgba(255,255,255,0.25)", letterSpacing: "0.05em" }}
        >
          End-to-end implementation. No solo planes.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/propuesta/oferta"
            className="flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{ background: "linear-gradient(135deg, #3b82f6, #2563eb)" }}
          >
            Ver propuesta completa
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm transition-colors hover:text-white"
            style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.45)" }}
          >
            Ver demo del sitio
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Service cards strip */}
      <div
        className="relative z-10 border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)" }}
      >
        <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="px-6 py-7 flex flex-col gap-3"
                style={{
                  borderRight: i < services.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
              >
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}
                >
                  <Icon className="h-4 w-4" style={{ color: "#3b82f6" }} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white mb-1">{s.label}</p>
                  <p className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Trust strip */}
      <div
        className="relative z-10 border-t"
        style={{ borderColor: "rgba(255,255,255,0.04)", background: "rgba(0,0,0,0.4)" }}
      >
        <div className="mx-auto max-w-5xl flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-8 py-4">
          {[
            { icon: Lock, label: "TLS 1.3 · HTTPS" },
            { icon: ShieldCheck, label: "OWASP Top 10" },
            { icon: Server, label: "99.99% Uptime" },
            { icon: ShieldCheck, label: "LFPDPPP · Privacidad" },
          ].map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.label} className="flex items-center gap-1.5">
                <Icon className="h-3 w-3" style={{ color: "rgba(59,130,246,0.5)" }} />
                <span className="text-[10px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.2)" }}>
                  {b.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
