import Link from "next/link";
import {
  ArrowLeft, ArrowRight, ExternalLink, Globe, LayoutDashboard,
  Building2, BarChart3, FileText, Languages, Calculator,
  Share2, MessageCircle, UserCircle, GitCompare, Map, Zap, Users,
} from "lucide-react";

export const metadata = {
  title: "Showcase — Grupo Almar",
  robots: "noindex, nofollow",
};

const built = [
  {
    icon: Globe,
    title: "Sitio Web Público",
    desc: "8 páginas diseñadas a la medida de Almar. Home con buscador inteligente, catálogo con filtros avanzados, detalle de propiedad con galería completa, nosotros, servicios, afiliados, blog y contacto.",
    tags: ["Home", "Catálogo", "Blog", "Contacto", "Afiliados"],
  },
  {
    icon: Building2,
    title: "Catálogo de Propiedades",
    desc: "Filtros por operación, tipo, zona y rango de precio. Vista en cuadrícula o lista, ordenamiento, favoritos y comparación. Cada tarjeta muestra precio en MXN y USD.",
    tags: ["Filtros", "Favoritos", "MXN / USD", "Bilingüe"],
  },
  {
    icon: Calculator,
    title: "Detalle de Propiedad",
    desc: "Galería de fotos en alta calidad, botones directos a WhatsApp y llamada, calculadora hipotecaria integrada, perfil del agente responsable, y ficha técnica en PDF descargable.",
    tags: ["Galería", "WhatsApp", "Calculadora", "PDF"],
  },
  {
    icon: Languages,
    title: "Sistema Bilingüe",
    desc: "Toggle español / inglés visible en todo el sitio. El visitante cambia de idioma con un clic y toda la experiencia, incluyendo el panel de administración, se adapta.",
    tags: ["Español", "English", "Toggle"],
  },
  {
    icon: FileText,
    title: "Blog",
    desc: "Blog administrable desde el panel. Artículos con categorías, imágenes y videos. Cada publicación es una puerta de entrada en Google para nuevos clientes.",
    tags: ["Artículos", "Categorías", "SEO"],
  },
  {
    icon: LayoutDashboard,
    title: "Panel de Administración",
    desc: "Centro de control privado del equipo Almar. Gestión de propiedades, agentes, blog y configuración general. Todo lo que se modifica aparece al instante en el sitio.",
    tags: ["Dashboard", "Propiedades", "Agentes", "Blog"],
  },
  {
    icon: BarChart3,
    title: "Analíticos Integrados",
    desc: "Dashboard con visitas, fuentes de tráfico, propiedades más vistas, leads por fuente y tasa de conversión. Decisiones basadas en datos reales, sin herramientas externas.",
    tags: ["Visitas", "Fuentes", "Conversión"],
  },
  {
    icon: MessageCircle,
    title: "Integración WhatsApp",
    desc: "Botón flotante en todo el sitio y en cada propiedad. El visitante escribe directamente al equipo Almar con un solo clic, desde cualquier página.",
    tags: ["Flotante", "Por propiedad"],
  },
];

const phase2 = [
  {
    icon: Users,
    title: "CRM y Gestión de Leads",
    desc: "Captura automática de cada contacto desde el sitio. Seguimiento con estatus, agente asignado y notas internas. Ninguna oportunidad se pierde. Disponible hoy como módulo opcional.",
  },
  {
    icon: UserCircle,
    title: "Portal Privado para Clientes",
    desc: "Acceso exclusivo para compradores potenciales. Seguimiento de su proceso de búsqueda, propiedades guardadas y comunicación directa con el equipo.",
  },
  {
    icon: GitCompare,
    title: "Comparador de Propiedades",
    desc: "El visitante selecciona dos o más propiedades y las compara lado a lado: precio, metros, recámaras, amenidades. Facilita la decisión de compra.",
  },
  {
    icon: Map,
    title: "Mapa Interactivo de Listings",
    desc: "Visualización geográfica del catálogo por zona. El visitante explora propiedades directamente sobre el mapa de la Riviera Maya.",
  },
];

const phase3 = [
  {
    icon: Zap,
    title: "Automatizaciones de Marketing",
    desc: "Seguimiento automático de leads por correo y WhatsApp. Notificaciones al equipo, recordatorios de seguimiento y campañas por fuente de tráfico.",
  },
  {
    icon: Share2,
    title: "Programa de Referidos Avanzado",
    desc: "Sistema de seguimiento de comisiones para agentes y colaboradores externos. Registro de referidos, estatus y pagos desde el panel de administración.",
  },
];

export default function ShowcasePage() {
  return (
    <div className="min-h-screen text-white" style={{ background: "#0c0a09", fontFamily: "Montserrat, sans-serif" }}>

      {/* Blur decorativo */}
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent)", filter: "blur(100px)" }} />

      {/* Nav */}
      <div className="sticky top-0 z-10 border-b backdrop-blur-sm"
        style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(12,10,9,0.95)" }}>
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/propuesta"
            className="flex items-center gap-2 text-xs uppercase tracking-widest transition-colors"
            style={{ color: "rgba(255,255,255,0.35)" }}>
            <ArrowLeft className="h-3 w-3" />
            Volver
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs hidden sm:block" style={{ color: "rgba(255,255,255,0.2)" }}>Grupo Almar · 2026</span>
            <a href="https://consultinghea.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 group">
              <span className="flex h-6 w-6 items-center justify-center rounded text-[8px] font-bold text-white"
                style={{ background: "#3b82f6" }}>HEA</span>
              <span className="text-xs font-semibold transition-colors"
                style={{ color: "rgba(255,255,255,0.35)" }}>HEA Consulting</span>
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
            Un ecosistema digital completo para Almar — desde el sitio web que atrae clientes,
            hasta el panel que administra el negocio.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-20 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { value: "8", label: "Páginas construidas" },
            { value: "8", label: "Módulos entregados" },
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
              style={{ background: "rgba(52,211,153,0.1)", color: "#34d399" }}>
              Entregado
            </span>
          </div>
          <h2 className="text-2xl font-light text-white mb-3">Lo que ya está construido</h2>
          <p className="text-sm mb-10" style={{ color: "rgba(255,255,255,0.4)" }}>
            Cada módulo está funcional. Explora el sitio con el botón de abajo para verlo en vivo.
          </p>

          <div className="grid gap-3 md:grid-cols-2">
            {built.map((mod) => {
              const Icon = mod.icon;
              return (
                <div key={mod.title} className="rounded-2xl p-5 transition-colors"
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
              style={{ background: "rgba(59,130,246,0.1)", color: "#3b82f6" }}>
              Roadmap
            </span>
          </div>
          <h2 className="text-2xl font-light text-white mb-3">Lo que podemos agregar después</h2>
          <p className="text-sm mb-10" style={{ color: "rgba(255,255,255,0.4)" }}>
            La plataforma está diseñada para crecer con Almar. Estos módulos se integran en fases — cada uno agrega valor inmediato sin reconstruir nada.
          </p>

          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.25)" }}>Fase 2</p>
          <div className="grid gap-3 md:grid-cols-2 mb-8">
            {phase2.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl p-5"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                      style={{ background: "rgba(59,130,246,0.08)" }}>
                      <Icon className="h-4 w-4" style={{ color: "#3b82f6" }} />
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

          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.25)" }}>Fase 3</p>
          <div className="grid gap-3 md:grid-cols-2">
            {phase3.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl p-5"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                      style={{ background: "rgba(59,130,246,0.08)" }}>
                      <Icon className="h-4 w-4" style={{ color: "#3b82f6" }} />
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
            Todo lo que ves aquí fue diseñado específicamente para Grupo Almar. Hablemos para ponerlo en marcha y empezar a crecer su presencia digital.
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
