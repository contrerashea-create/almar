import Link from "next/link";
import {
  ArrowLeft, ArrowRight, ExternalLink,
  Globe, LayoutDashboard, Building2, Users, FileText,
  BarChart3, Languages, Search, Server, GraduationCap,
  Headphones, ShieldCheck, UserCircle, Home, Calculator,
  GitCompare, Map, Share2, Zap,
} from "lucide-react";

export const metadata = {
  title: "Showcase — Grupo Almar",
  robots: "noindex, nofollow",
};

const entregables = [
  { icon: Globe, title: "Sitio web público", desc: "8 páginas completas: home, catálogo, detalle con calculadora hipotecaria, nosotros, servicios, afiliados, blog y contacto." },
  { icon: LayoutDashboard, title: "Panel de administración", desc: "Control total del sistema. Dashboard, propiedades, blog, agentes y configuración en un solo lugar." },
  { icon: Building2, title: "Gestión de propiedades", desc: "Alta, edición, fotos, precios, fichas PDF, estatus y publicación. Reemplaza EasyBroker." },
  { icon: BarChart3, title: "Analíticos integrados", desc: "Visitas, fuentes de tráfico, propiedades más vistas, leads por fuente y tasa de conversión en tiempo real." },
  { icon: FileText, title: "Blog administrable", desc: "Creación y publicación de artículos desde el panel. Impacto directo en posicionamiento Google." },
  { icon: Languages, title: "Sistema bilingüe", desc: "Español e inglés en todo el sitio y el panel. Toggle visible en todo momento." },
  { icon: Search, title: "SEO técnico", desc: "URLs limpias, metadatos dinámicos por propiedad, estructura semántica y velocidad de carga optimizada." },
  { icon: Users, title: "Perfiles y acceso", desc: "Usuarios con niveles de acceso según rol: director, agente, marketing. Orden, seguridad y trazabilidad." },
  { icon: UserCircle, title: "Gestión de agentes", desc: "Perfiles con foto, datos, propiedades asignadas y estadísticas. Visible en el detalle de cada propiedad." },
  { icon: Server, title: "Infraestructura cloud", desc: "Base de datos en la nube, hosting y dominio año 1 incluidos. Backups automáticos." },
  { icon: GraduationCap, title: "Capacitación del equipo", desc: "Sesión de uso del panel al momento de la entrega." },
  { icon: Headphones, title: "30 hrs de soporte", desc: "Ajustes, cambios menores y asistencia operativa durante el periodo contratado." },
  { icon: ShieldCheck, title: "Garantía 2 meses", desc: "Corrección de errores atribuibles al desarrollo desde la entrega en producción." },
];

const futuros = [
  { icon: Users, title: "CRM y gestión de leads", desc: "Captura automática, seguimiento y gestión de oportunidades. Disponible hoy como módulo opcional." },
  { icon: Home, title: "Portal privado para clientes", desc: "Seguimiento del proceso de búsqueda para compradores." },
  { icon: Calculator, title: "Calculadora hipotecaria avanzada", desc: "Simulación de financiamiento integrada en cada propiedad." },
  { icon: GitCompare, title: "Comparador de propiedades", desc: "Comparación de características y precios en paralelo." },
  { icon: Map, title: "Mapa interactivo", desc: "Visualización geográfica del catálogo por zona." },
  { icon: Share2, title: "Programa de afiliados", desc: "Sistema de referidos para agentes y colaboradores externos." },
  { icon: Zap, title: "Automatizaciones de marketing", desc: "Seguimiento automático de leads, campañas y notificaciones." },
];

export default function ShowcasePage() {
  return (
    <div className="min-h-screen text-white" style={{ background: "#0c0a09", fontFamily: "Montserrat, sans-serif" }}>

      {/* Blur decorativo */}
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent)", filter: "blur(80px)" }} />

      {/* Nav */}
      <div className="sticky top-0 z-10 border-b backdrop-blur-sm" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(12,10,9,0.95)" }}>
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
              <span className="text-xs font-semibold transition-colors" style={{ color: "rgba(255,255,255,0.35)" }}>
                HEA Consulting
              </span>
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
          <h1 className="mb-4 text-4xl font-light leading-tight md:text-6xl">
            Grupo Almar
            <span className="block font-light" style={{ color: "rgba(255,255,255,0.25)" }}>/ Digital Platform</span>
          </h1>
          <p className="mx-auto max-w-lg text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            Todo lo que incluye la propuesta. Un sistema que conecta el sitio web, el catálogo, los analíticos y el equipo.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-16 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { value: "8", label: "Páginas públicas" },
            { value: "13", label: "Entregables" },
            { value: "4", label: "Semanas" },
            { value: "2 meses", label: "Garantía" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl px-5 py-5 text-center"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <p className="mb-1 text-3xl font-light text-white">{s.value}</p>
              <p className="text-[11px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.3)" }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Entregables */}
        <section className="mb-16">
          <p className="mb-8 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>Alcance del proyecto</p>
          <div className="grid gap-3 md:grid-cols-2">
            {entregables.map((mod) => {
              const Icon = mod.icon;
              return (
                <div key={mod.title} className="flex items-start gap-4 rounded-xl p-4"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "rgba(59,130,246,0.1)" }}>
                    <Icon className="h-4 w-4" style={{ color: "#3b82f6" }} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white mb-1">{mod.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{mod.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="mb-16 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />

        {/* Crecimiento futuro */}
        <section className="mb-16">
          <p className="mb-2 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>La plataforma como base de crecimiento</p>
          <p className="mb-8 text-sm leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.35)" }}>
            Nuevos módulos se integran sobre la misma base, sin reconstruir ni migrar.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {futuros.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-4 rounded-xl p-4"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "rgba(255,255,255,0.04)" }}>
                    <Icon className="h-4 w-4" style={{ color: "rgba(255,255,255,0.3)" }} />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1" style={{ color: "rgba(255,255,255,0.65)" }}>{item.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="mb-16 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />

        {/* CTA */}
        <section className="text-center">
          <p className="mb-3 text-2xl font-light text-white">¿Listo para arrancar?</p>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            Todo está construido. Solo falta tu confirmación.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/propuesta/oferta"
              className="flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ background: "#3b82f6" }}>
              Ver propuesta completa
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/" target="_blank"
              className="flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.5)" }}>
              Explorar el sitio
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        <p className="mt-16 text-center text-[11px]" style={{ color: "rgba(255,255,255,0.15)" }}>
          HEA Consulting · Custom platform built for Grupo Almar · Riviera Maya · 2026
        </p>
      </div>
    </div>
  );
}
