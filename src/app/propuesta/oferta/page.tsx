import Link from "next/link";
import { ArrowLeft, Check, ArrowRight, Mail } from "lucide-react";

export const metadata = {
  title: "Propuesta — Grupo Almar",
  robots: "noindex, nofollow",
};

const modulos = [
  {
    num: "01",
    title: "Sitio Web Público Premium",
    desc: "Diseñado a la medida para Almar. Home, catálogo con filtros avanzados, detalle de propiedad con calculadora hipotecaria, nosotros, servicios, afiliados, blog y contacto. Bilingüe ES/EN, optimizado para celular y SEO.",
  },
  {
    num: "02",
    title: "Blog y Contenido",
    desc: "Blog administrable desde el panel. Publicar contenido posiciona a Almar en Google y genera credibilidad. El equipo crea y publica artículos sin depender de nadie externo.",
  },
  {
    num: "03",
    title: "Panel de Administración",
    desc: "Centro de control privado. Gestión de propiedades, agentes, blog y configuración general. Todo lo que se modifica se refleja automáticamente en el sitio público.",
  },
  {
    num: "04",
    title: "Analíticos e Inteligencia de Datos",
    desc: "Dashboard integrado con visitas, fuentes de tráfico, propiedades más vistas, leads por fuente y tasa de conversión. Decisiones basadas en datos reales, no suposiciones.",
  },
  {
    num: "05",
    title: "Marketing y Posicionamiento",
    desc: "SEO técnico real por propiedad, formularios inteligentes conectados al CRM, fichas técnicas en PDF por propiedad, portafolios y colecciones para campañas.",
  },
  {
    num: "06",
    title: "Perfiles y Control de Acceso",
    desc: "Diferentes usuarios con diferentes niveles de acceso. El director ve todo; el agente solo sus propiedades y leads; marketing accede al blog y analíticos.",
  },
];

const entregables = [
  "Sitio web público — 8 páginas completas",
  "Panel de administración exclusivo para Almar",
  "Gestión de propiedades con fichas PDF",
  "Dashboard de analíticos integrado",
  "Blog administrable con impacto SEO",
  "Sistema bilingüe ES / EN completo",
  "SEO técnico por propiedad",
  "Perfiles y control de acceso por rol",
  "Gestión de agentes con estadísticas",
  "Infraestructura cloud + dominio y hosting año 1",
  "Capacitación del equipo Almar",
  "30 horas de soporte técnico",
  "Garantía de funcionalidad 2 meses",
];

const roadmap = [
  { semana: "Semana 1", hito: "Kickoff, infraestructura, marca, dominio y estructura base" },
  { semana: "Semana 2", hito: "Panel de administración: propiedades, blog y configuración" },
  { semana: "Semana 3", hito: "Sitio web público: todas las páginas + integración + bilingüe" },
  { semana: "Semana 4", hito: "Pruebas, carga inicial, capacitación y entrega en producción" },
];

const pasos = [
  "Confirmación de aceptación de la propuesta",
  "Firma de Contrato de Prestación de Servicios (mín. 6 meses)",
  "Firma del Acuerdo de Confidencialidad (NDA)",
  "Confirmación del Pago 1 — inicio formal del proyecto",
  "Reunión de Kickoff para alinear objetivos y marca",
];

export default function OfertaPage() {
  return (
    <div className="min-h-screen text-white" style={{ background: "#0c0a09", fontFamily: "Montserrat, sans-serif" }}>

      {/* Nav */}
      <div className="sticky top-0 z-10 border-b backdrop-blur-sm" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(12,10,9,0.95)" }}>
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
          <Link href="/propuesta"
            className="flex items-center gap-2 text-xs uppercase tracking-widest transition-colors"
            style={{ color: "rgba(255,255,255,0.35)" }}>
            <ArrowLeft className="h-3 w-3" />
            Volver
          </Link>
          <a href="https://consultinghea.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 group">
            <span className="flex h-6 w-6 items-center justify-center rounded text-[8px] font-bold text-white"
              style={{ background: "#3b82f6" }}>HEA</span>
            <span className="text-xs font-semibold transition-colors" style={{ color: "rgba(255,255,255,0.35)" }}>
              HEA Consulting
            </span>
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-20">

        {/* Header */}
        <div className="mb-16">
          <p className="mb-4 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
            Propuesta técnica y comercial · Abril 2026
          </p>
          <h1 className="text-4xl font-light leading-tight text-white mb-3 md:text-5xl">
            Plataforma Digital<br />Integrada
          </h1>
          <p className="text-xl font-light" style={{ color: "rgba(255,255,255,0.3)" }}>Grupo Almar</p>
        </div>

        <div className="h-px mb-16" style={{ background: "rgba(255,255,255,0.06)" }} />

        {/* Resumen */}
        <section className="mb-16">
          <p className="mb-5 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>El problema</p>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Almar opera con herramientas que no se hablan entre sí. Los leads no se conectan al seguimiento,
            las propiedades no se sincronizan en tiempo real, y la presencia digital no refleja el nivel de la marca.
            Esta propuesta resuelve todo con{" "}
            <span className="text-white font-medium">un solo sistema integrado</span> — sitio web, panel de administración,
            analíticos, blog y control de acceso funcionando como uno.
          </p>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Más allá del problema inmediato, esta plataforma es la{" "}
            <span className="text-white font-medium">base tecnológica</span> sobre la que Almar puede seguir creciendo,
            integrando módulos nuevos conforme evolucione su negocio, sin reconstruir ni migrar.
          </p>
        </section>

        <div className="h-px mb-16" style={{ background: "rgba(255,255,255,0.06)" }} />

        {/* Módulos */}
        <section className="mb-16">
          <p className="mb-8 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>Alcance · 6 módulos</p>
          <div className="space-y-3">
            {modulos.map((m) => (
              <div key={m.num} className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex items-start gap-4">
                  <span className="text-xs font-light shrink-0 mt-0.5" style={{ color: "rgba(255,255,255,0.2)" }}>{m.num}</span>
                  <div>
                    <p className="text-sm font-medium text-white mb-1.5">{m.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CRM add-on */}
          <div className="mt-3 rounded-xl p-5" style={{ background: "rgba(59,130,246,0.05)", border: "1px solid rgba(59,130,246,0.15)" }}>
            <div className="flex items-start gap-4">
              <span className="text-xs font-light shrink-0 mt-0.5" style={{ color: "rgba(59,130,246,0.5)" }}>+</span>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <p className="text-sm font-medium text-white">CRM y Gestión de Leads</p>
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ background: "rgba(59,130,246,0.15)", color: "#3b82f6" }}>Módulo opcional</span>
                </div>
                <p className="text-xs leading-relaxed mb-2" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Captura automática de leads desde el sitio web. Seguimiento con estatus, agente asignado y notas internas. Ninguna oportunidad se pierde.
                </p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                  Valor regular: <span style={{ textDecoration: "line-through" }}>$10,000 MXN</span> ·{" "}
                  <span className="text-white font-medium">Precio preferencial: $5,000 MXN</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="h-px mb-16" style={{ background: "rgba(255,255,255,0.06)" }} />

        {/* Entregables */}
        <section className="mb-16">
          <p className="mb-6 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>Entregables</p>
          <ul className="space-y-2.5">
            {entregables.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: "#3b82f6" }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="h-px mb-16" style={{ background: "rgba(255,255,255,0.06)" }} />

        {/* Inversión */}
        <section className="mb-16">
          <p className="mb-8 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>Inversión</p>

          <div className="grid gap-3 sm:grid-cols-2 mb-6">
            <div className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>Desarrollo y setup</p>
              <p className="text-4xl font-light text-white mb-1">$20,000</p>
              <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>MXN · pago único</p>
              <div className="h-px mb-3" style={{ background: "rgba(255,255,255,0.06)" }} />
              <div className="flex justify-between text-xs mb-1">
                <span style={{ color: "rgba(255,255,255,0.3)" }}>+ IVA (16%)</span>
                <span style={{ color: "rgba(255,255,255,0.5)" }}>$3,200 MXN</span>
              </div>
              <div className="flex justify-between text-xs">
                <span style={{ color: "rgba(255,255,255,0.3)" }}>Total con IVA</span>
                <span className="text-white font-medium">$23,200 MXN</span>
              </div>
              <p className="mt-3 text-[10px]" style={{ color: "rgba(255,255,255,0.2)" }}>Dominio y hosting año 1 incluidos</p>
            </div>

            <div className="rounded-xl p-6" style={{ background: "rgba(59,130,246,0.05)", border: "1px solid rgba(59,130,246,0.2)" }}>
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>Mensualidad</p>
              <p className="text-4xl font-light text-white mb-1">$3,500</p>
              <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>MXN / mes · mín. 6 meses</p>
              <div className="h-px mb-3" style={{ background: "rgba(255,255,255,0.06)" }} />
              <div className="flex justify-between text-xs mb-1">
                <span style={{ color: "rgba(255,255,255,0.3)" }}>+ IVA (16%)</span>
                <span style={{ color: "rgba(255,255,255,0.5)" }}>$560 MXN</span>
              </div>
              <div className="flex justify-between text-xs">
                <span style={{ color: "rgba(255,255,255,0.3)" }}>Total con IVA</span>
                <span className="text-white font-medium">$4,060 MXN/mes</span>
              </div>
              <p className="mt-3 text-[10px]" style={{ color: "rgba(255,255,255,0.2)" }}>Soporte, operación y actualizaciones</p>
            </div>
          </div>

          {/* Forma de pago */}
          <p className="mb-4 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>Forma de pago</p>
          <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            {[
              { label: "Pago 1 — Al firmar", sub: "50% del setup", amount: "$10,000 MXN", iva: "$11,600 con IVA" },
              { label: "Pago 2 — A la entrega", sub: "50% del setup", amount: "$10,000 MXN", iva: "$11,600 con IVA" },
              { label: "Mensual — desde la entrega", sub: "Operación de la plataforma", amount: "$3,500 MXN", iva: "$4,060 con IVA" },
            ].map((p, i, arr) => (
              <div key={i} className="flex items-center justify-between px-5 py-4"
                style={{ borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", background: "rgba(255,255,255,0.02)" }}>
                <div>
                  <p className="text-xs font-medium text-white">{p.label}</p>
                  <p className="text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>{p.sub}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-white">{p.amount}</p>
                  <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>{p.iva}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Datos bancarios */}
          <div className="mt-4 rounded-xl px-5 py-4" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <p className="text-[10px] uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.25)" }}>Datos bancarios</p>
            <div className="space-y-1.5 text-xs">
              {[
                { l: "Banco", v: "BBVA" },
                { l: "Titular", v: "Giancarlo Guagnelli Contreras" },
                { l: "Tarjeta", v: "4152 3144 9735 5795", mono: true },
                { l: "CLABE", v: "012180015518100133", mono: true },
              ].map(({ l, v, mono }) => (
                <div key={l} className="flex justify-between">
                  <span style={{ color: "rgba(255,255,255,0.3)" }}>{l}</span>
                  <span className={mono ? "font-mono" : ""} style={{ color: "rgba(255,255,255,0.6)" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-px mb-16" style={{ background: "rgba(255,255,255,0.06)" }} />

        {/* Cronograma */}
        <section className="mb-16">
          <p className="mb-6 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>Cronograma · 4 semanas</p>
          <div className="space-y-4">
            {roadmap.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <span className="w-20 shrink-0 text-xs pt-0.5" style={{ color: "rgba(255,255,255,0.25)" }}>{item.semana}</span>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "#3b82f6" }} />
                  <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{item.hito}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px mb-16" style={{ background: "rgba(255,255,255,0.06)" }} />

        {/* Próximos pasos */}
        <section className="mb-16">
          <p className="mb-6 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>Para arrancar</p>
          <div className="space-y-3">
            {pasos.map((paso, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="w-5 h-5 rounded-full border flex items-center justify-center text-[10px] shrink-0 mt-0.5"
                  style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.3)" }}>
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{paso}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            El desarrollo inicia de inmediato una vez confirmado el Pago 1.{" "}
            <span className="text-white font-medium">Entrega en 4 semanas.</span>
          </p>
        </section>

        {/* CTAs */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="mailto:consulting.hea@gmail.com"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl py-3.5 text-sm transition-colors"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }}>
            <Mail className="h-4 w-4" />
            consulting.hea@gmail.com
          </a>
          <Link href="/propuesta/showcase"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{ background: "#3b82f6" }}>
            Ver showcase
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="mt-12 text-center text-[11px]" style={{ color: "rgba(255,255,255,0.15)" }}>
          HEA Consulting · consulting.hea@gmail.com · www.consultinghea.com · Abril 2026
        </p>
      </div>
    </div>
  );
}
