import Link from "next/link";
import {
  ArrowLeft,
  Globe,
  LayoutDashboard,
  Building2,
  Users,
  FileText,
  BarChart3,
  Languages,
  Search,
  Server,
  GraduationCap,
  Headphones,
  ShieldCheck,
  ExternalLink,
  ArrowRight,
  UserCircle,
  Map,
  Calculator,
  GitCompare,
  Share2,
  Zap,
  Home,
} from "lucide-react";

export const metadata = {
  title: "Showcase — Grupo Almar",
  robots: "noindex, nofollow",
};

const entregables = [
  {
    icon: Globe,
    title: "Sitio web público",
    description: "Home, catálogo de propiedades, detalle por propiedad, nosotros, servicios, blog y contacto.",
    tags: ["Home", "Catálogo", "Blog", "Contacto"],
  },
  {
    icon: LayoutDashboard,
    title: "Panel de administración",
    description: "Acceso exclusivo para el equipo Almar. Gestión centralizada de todo el contenido del sitio.",
    tags: ["Dashboard", "KPIs", "Métricas"],
  },
  {
    icon: Building2,
    title: "Gestión de propiedades",
    description: "Alta, edición, clasificación y publicación de propiedades. Reemplaza EasyBroker.",
    tags: ["Alta", "Edición", "Publicación"],
  },
  {
    icon: Users,
    title: "CRM de leads",
    description: "Captura automática de cada contacto generado desde el sitio web, con historial y seguimiento.",
    tags: ["Captura automática", "Seguimiento"],
  },
  {
    icon: FileText,
    title: "Fichas técnicas en PDF",
    description: "Generación de brochures por propiedad descargables directamente desde el panel de administración.",
    tags: ["PDF", "Brochure", "Por propiedad"],
  },
  {
    icon: BarChart3,
    title: "Dashboard de analíticos",
    description: "Métricas de visitas, propiedades más vistas, leads por fuente y rendimiento general del sitio.",
    tags: ["Visitas", "Leads", "Rendimiento"],
  },
  {
    icon: Languages,
    title: "Sistema bilingüe",
    description: "Toggle español / inglés en todo el sitio público y el panel de administración.",
    tags: ["Español", "English", "Toggle"],
  },
  {
    icon: Search,
    title: "SEO técnico",
    description: "Metadatos dinámicos por propiedad, URLs limpias y estructura semántica correcta.",
    tags: ["Metadatos", "URLs", "Semántica"],
  },
  {
    icon: Server,
    title: "Infraestructura configurada",
    description: "Base de datos en la nube, hosting y dominio del primer año incluidos. Backups automáticos.",
    tags: ["Cloud", "Hosting", "Dominio"],
  },
  {
    icon: GraduationCap,
    title: "Capacitación del equipo",
    description: "Sesión de uso del panel de administración para el equipo Almar al momento de la entrega.",
    tags: ["Sesión", "Equipo", "Entrega"],
  },
  {
    icon: Headphones,
    title: "30 hrs de soporte técnico",
    description: "Horas de soporte disponibles durante el periodo contratado para ajustes, cambios y asistencia operativa.",
    tags: ["Soporte", "Ajustes", "Operación"],
  },
  {
    icon: ShieldCheck,
    title: "Garantía de funcionalidad",
    description: "2 meses de garantía desde la entrega en producción. Corrección de errores atribuibles al desarrollo.",
    tags: ["2 meses", "Garantía", "Producción"],
  },
];

const baseDeCrecimiento = [
  { icon: UserCircle, title: "Portal privado para clientes", desc: "Espacio para que compradores potenciales den seguimiento a su proceso de búsqueda." },
  { icon: Home, title: "Portafolio de proyectos", desc: "Sección dedicada a desarrollos y proyectos de inversión de Almar." },
  { icon: Calculator, title: "Calculadora hipotecaria", desc: "Herramienta interactiva para estimar financiamiento directamente en el sitio." },
  { icon: GitCompare, title: "Comparador de propiedades", desc: "Permite a los usuarios comparar características y precios de propiedades en paralelo." },
  { icon: Map, title: "Mapa interactivo de listings", desc: "Visualización geográfica del catálogo de propiedades por zona." },
  { icon: Share2, title: "Programa de afiliados", desc: "Sistema de referidos para agentes y colaboradores externos de Almar." },
  { icon: Zap, title: "Automatizaciones de marketing", desc: "Seguimiento automático de leads, campañas y notificaciones al equipo." },
];

export default function ShowcasePage() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "#021f34" }}>
      {/* Ambient */}
      <div className="pointer-events-none fixed right-[-15%] top-[-10%] h-[600px] w-[600px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #3069aa, transparent)" }} />
      <div className="pointer-events-none fixed bottom-[-20%] left-[10%] h-[400px] w-[400px] rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #3069aa, transparent)" }} />

      {/* Nav */}
      <div className="sticky top-0 z-10 border-b border-white/5 bg-[#021f34]/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/propuesta"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 transition-colors hover:text-white/70">
            <ArrowLeft className="h-3 w-3" />
            Volver
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-white/20">Grupo Almar · 2026</span>
            <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-white/30">
              HEA Consulting
            </span>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 py-16">

        {/* Hero */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-white/30">Plataforma digital integrada</p>
          <h1 className="mb-4 text-4xl leading-tight text-white md:text-6xl" style={{ fontFamily: "var(--font-heading)" }}>
            Grupo Almar
            <span className="block text-white/30">/ Digital Platform</span>
          </h1>
          <p className="mx-auto max-w-lg text-base leading-relaxed text-white/40">
            Todo lo que incluye la propuesta. Un solo sistema que conecta el sitio web,
            el catálogo, los leads y el equipo.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { value: "7", label: "Páginas públicas" },
            { value: "12", label: "Entregables" },
            { value: "4", label: "Semanas de desarrollo" },
            { value: "2 meses", label: "Garantía" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-white/8 bg-white/3 px-5 py-5 text-center">
              <p className="mb-1 text-3xl font-light text-white" style={{ fontFamily: "var(--font-heading)" }}>{s.value}</p>
              <p className="text-[11px] uppercase tracking-wider text-white/30">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Entregables */}
        <section className="mb-16">
          <p className="mb-8 text-[10px] uppercase tracking-[0.25em] text-white/30">Alcance del proyecto</p>
          <div className="grid gap-3 md:grid-cols-2">
            {entregables.map((mod) => {
              const Icon = mod.icon;
              return (
                <div key={mod.title}
                  className="flex items-start gap-4 rounded-xl border border-white/8 bg-white/3 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/8">
                    <Icon className="h-4 w-4 text-white/50" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/80 mb-1">{mod.title}</p>
                    <p className="text-[12px] leading-relaxed text-white/35">{mod.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="mb-16 h-px bg-white/5" />

        {/* Base de crecimiento */}
        <section className="mb-16">
          <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-white/30">La plataforma como base de crecimiento</p>
          <p className="mb-8 text-sm text-white/35 max-w-xl leading-relaxed">
            La arquitectura permite integrar nuevas funcionalidades en fases futuras sin reconstruir ni migrar el sistema.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {baseDeCrecimiento.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title}
                  className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/2 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                    <Icon className="h-4 w-4 text-white/35" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/60 mb-1">{item.title}</p>
                    <p className="text-[12px] leading-relaxed text-white/30">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="mb-16 h-px bg-white/5" />

        {/* CTA */}
        <section className="text-center">
          <p className="mb-3 text-2xl text-white/80" style={{ fontFamily: "var(--font-heading)" }}>
            ¿Listo para arrancar?
          </p>
          <p className="mb-8 text-sm text-white/40">Todo está construido. Solo falta tu confirmación.</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/propuesta/oferta"
              className="flex items-center gap-2 rounded-lg px-7 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ background: "#3069aa" }}>
              Ver propuesta completa
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/" target="_blank"
              className="flex items-center gap-2 rounded-lg border border-white/15 px-7 py-2.5 text-sm text-white/50 transition-colors hover:border-white/30 hover:text-white/80">
              Explorar el sitio
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        <p className="mt-16 text-center text-[11px] text-white/15">
          HEA Consulting · Custom mockup built for Grupo Almar · Riviera Maya · 2026
        </p>
      </div>
    </div>
  );
}
