import Link from "next/link";
import {
  ArrowLeft, ArrowRight, ExternalLink,
  Globe, LayoutDashboard, Building2, BarChart3,
  Languages, MessageCircle, Users, UserCircle, GitCompare, Map, Zap,
} from "lucide-react";

export const metadata = {
  title: "Showcase | Grupo Almar",
  robots: "noindex, nofollow",
};

const built = [
  {
    icon: Globe,
    title: "Sitio Web Público",
    desc: "8 páginas a la medida. Home con buscador inteligente, catálogo con filtros avanzados, detalle de propiedad con galería, calculadora hipotecaria y ficha PDF, blog, afiliados y contacto.",
    tags: ["Home", "Catálogo", "Detalle", "Blog", "Afiliados"],
  },
  {
    icon: Building2,
    title: "Catálogo y Propiedades",
    desc: "Filtros por operación, tipo, zona y precio. Favoritos, precio en MXN y USD, y ficha técnica PDF por propiedad generada desde el panel.",
    tags: ["Filtros", "Favoritos", "PDF", "MXN / USD"],
  },
  {
    icon: LayoutDashboard,
    title: "Panel de Administración",
    desc: "Centro de control privado. Gestión de propiedades, agentes y blog. Cada cambio se refleja al instante en el sitio público.",
    tags: ["Propiedades", "Agentes", "Blog"],
  },
  {
    icon: BarChart3,
    title: "Analíticos Integrados",
    desc: "Visitas, fuentes de tráfico, propiedades más vistas y tasa de conversión. Todo dentro del panel, sin herramientas externas.",
    tags: ["Visitas", "Fuentes", "Conversión"],
  },
  {
    icon: Languages,
    title: "Bilingüe ES / EN",
    desc: "Toggle de idioma visible en todo el sitio y en el panel. La experiencia completa en español e inglés para captar al mercado internacional.",
    tags: ["Español", "English"],
  },
  {
    icon: MessageCircle,
    title: "Integración WhatsApp",
    desc: "Botón flotante en todo el sitio y en cada propiedad. Contacto directo con el equipo Almar con un solo clic.",
    tags: ["Flotante", "Por propiedad"],
  },
];

const roadmap = [
  { semana: "Semana 1", hito: "Kickoff, infraestructura, dominio y estructura base del sistema" },
  { semana: "Semana 2", hito: "Panel de administración: propiedades, agentes, blog y configuración" },
  { semana: "Semana 3", hito: "Sitio web público: todas las páginas + integración con admin + bilingüe" },
  { semana: "Semana 4", hito: "Pruebas, carga inicial de propiedades, capacitación y entrega en producción" },
];

const next = [
  { icon: Users, title: "CRM y Gestión de Leads", desc: "Captura automática de leads, seguimiento por estatus, agente asignado y notas. Disponible hoy como módulo opcional." },
  { icon: UserCircle, title: "Portal Privado para Clientes", desc: "Acceso exclusivo para compradores. Seguimiento de búsqueda, propiedades guardadas y comunicación directa." },
  { icon: GitCompare, title: "Comparador de Propiedades", desc: "Selecciona dos o más propiedades y compáralas lado a lado: precio, metros, recámaras, amenidades." },
  { icon: Map, title: "Mapa Interactivo", desc: "Visualización geográfica del catálogo por zona sobre el mapa de la Riviera Maya." },
  { icon: Zap, title: "Automatizaciones de Marketing", desc: "Seguimiento automático de leads por correo y WhatsApp, recordatorios y campañas por fuente." },
];

export default function ShowcasePage() {
  return (
    <div className="min-h-screen text-white" style={{ background: "#0c0a09", fontFamily: "Montserrat, sans-serif" }}>

      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent)", filter: "blur(100px)" }} />

      {/* Nav */}
      <div className="sticky top-0 z-10 border-b backdrop-blur-sm"
        style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(12,10,9,0.95)" }}>
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/propuesta" className="flex items-center gap-2 text-xs uppercase tracking-widest transition-colors"
            style={{ color: "rgba(255,255,255,0.35)" }}>
            <ArrowLeft className="h-3 w-3" />
            Volver
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs hidden sm:block" style={{ color: "rgba(255,255,255,0.2)" }}>Grupo Almar · 2026</span>
            <a href="https://consultinghea.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://consultinghea.com/images/LOGO.png"
                alt="HEA Consulting"
                style={{ height: "26px", width: "26px", borderRadius: "6px", background: "white", padding: "2px", objectFit: "contain" }}
              />
              <span className="text-xs font-semibold transition-colors" style={{ color: "rgba(255,255,255,0.35)" }}>HEA Consulting</span>
            </a>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-20">

        {/* Hero */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
            Plataforma digital integrada
          </p>
          <h1 className="mb-6 text-4xl font-light leading-tight md:text-6xl">
            Grupo Almar
            <span className="block font-light" style={{ color: "rgba(255,255,255,0.25)" }}>Digital Platform</span>
          </h1>
          <p className="mx-auto max-w-xl text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            Un ecosistema digital completo para Almar: desde el sitio web que atrae clientes, hasta el panel que administra el negocio.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-20 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { value: "8", label: "Páginas construidas" },
            { value: "6", label: "Módulos esenciales" },
            { value: "4", label: "Semanas de desarrollo" },
            { value: "2 meses", label: "Garantía" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl px-5 py-5 text-center"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <p className="mb-1 text-3xl font-light text-white">{s.value}</p>
              <p className="text-[11px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.3)" }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* What's built */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{ background: "rgba(52,211,153,0.1)", color: "#34d399" }}>Entregado</span>
          </div>
          <h2 className="text-2xl font-light text-white mb-3">Lo que ya está construido</h2>
          <p className="text-sm mb-10" style={{ color: "rgba(255,255,255,0.4)" }}>
            Cada módulo está funcional. Explora el sitio con el botón de abajo para verlo en vivo.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {built.map((mod) => {
              const Icon = mod.icon;
              return (
                <div key={mod.title} className="rounded-2xl p-5"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="flex items-start gap-4 mb-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                      style={{ background: "rgba(52,211,153,0.08)" }}>
                      <Icon className="h-4 w-4" style={{ color: "#34d399" }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-medium text-white">{mod.title}</p>
                        <span className="text-[9px] px-1.5 py-0.5 rounded-full font-medium"
                          style={{ background: "rgba(52,211,153,0.1)", color: "#34d399" }}>Live</span>
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{mod.desc}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {mod.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full"
                        style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.3)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="mb-20 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />

        {/* Roadmap */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{ background: "rgba(59,130,246,0.1)", color: "#3b82f6" }}>Roadmap</span>
          </div>
          <h2 className="text-2xl font-light text-white mb-3">Cronograma de desarrollo</h2>
          <p className="text-sm mb-10" style={{ color: "rgba(255,255,255,0.4)" }}>
            El proyecto se ejecuta en 4 semanas con entrega funcional al cierre del periodo.
          </p>
          <div className="space-y-3">
            {roadmap.map((item, i) => (
              <div key={i} className="flex items-start gap-6 rounded-2xl p-5"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                <span className="shrink-0 text-xs font-medium w-20 pt-0.5" style={{ color: "#3b82f6" }}>{item.semana}</span>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{item.hito}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mb-20 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />

        {/* What we can add next */}
        <section className="mb-20">
          <h2 className="text-2xl font-light text-white mb-3">Lo que podemos agregar después</h2>
          <p className="text-sm mb-10" style={{ color: "rgba(255,255,255,0.4)" }}>
            La plataforma está diseñada para crecer. Nuevos módulos se integran sin reconstruir nada.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {next.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl p-5"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                      style={{ background: "rgba(255,255,255,0.04)" }}>
                      <Icon className="h-4 w-4" style={{ color: "rgba(255,255,255,0.3)" }} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white mb-1">{item.title}</p>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="mb-20 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />

        {/* CTA */}
        <section className="text-center">
          <h2 className="mb-4 text-2xl font-light text-white md:text-3xl">
            ¿Listos para lanzar la plataforma?
          </h2>
          <p className="mb-10 mx-auto max-w-lg text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            Todo lo que ves aquí fue diseñado específicamente para Grupo Almar. Hablemos para ponerlo en marcha.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="mailto:consulting.hea@gmail.com"
              className="flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-medium transition-opacity hover:opacity-90"
              style={{ background: "rgba(255,255,255,0.9)", color: "#0c0a09" }}>
              Agendar una llamada
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link href="/" target="_blank"
              className="flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.5)" }}>
              Explorar el sitio
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        <p className="mt-16 text-center text-[11px]" style={{ color: "rgba(255,255,255,0.15)" }}>
          HEA Consulting · Strategy, AI &amp; Custom Solutions · consultinghea.com
        </p>
      </div>
    </div>
  );
}
