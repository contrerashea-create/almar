import Link from "next/link";
import { ArrowLeft, Check, MessageCircle, Mail, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Propuesta — Grupo Almar",
  robots: "noindex, nofollow",
};

const incluye = [
  "Sitio web público premium — home, catálogo, detalle de propiedad, nosotros, servicios, blog y contacto",
  "Panel de administración exclusivo para el equipo Almar",
  "Gestión de propiedades centralizada — reemplaza EasyBroker",
  "CRM de leads integrado — captura automática desde el sitio web",
  "Dashboard de analíticos — visitas, leads por fuente y rendimiento",
  "Fichas técnicas en PDF generables por propiedad desde el panel",
  "Diseño bilingüe español / inglés con toggle en todo el sitio",
  "SEO técnico optimizado — metadatos dinámicos y URLs limpias",
  "Integración directa con WhatsApp desde cada propiedad",
  "Infraestructura segura y escalable — base de datos en la nube, backups automáticos",
  "Dominio y hosting primer año incluidos",
  "30 horas de soporte técnico durante el periodo de contrato",
  "Garantía de funcionalidad 2 meses desde la entrega en producción",
  "Capacitación del equipo para uso del panel de administración",
];

const roadmap = [
  { semana: "Semana 1", hito: "Kickoff, infraestructura, marca, dominio y estructura base del sistema" },
  { semana: "Semana 2", hito: "Panel de administración: propiedades, leads y contenido" },
  { semana: "Semana 3", hito: "Sitio web público: todas las páginas + integración con admin + bilingüe" },
  { semana: "Semana 4", hito: "Pruebas, carga inicial, capacitación y entrega en producción" },
];

const pasos = [
  "Confirmación de aceptación de la propuesta",
  "Firma de Contrato de Prestación de Servicios (mínimo 6 meses)",
  "Firma del Acuerdo de Confidencialidad (NDA)",
  "Confirmación del Pago 1 — inicio formal del proyecto",
  "Reunión de Kickoff para alinear objetivos y marca",
];

export default function OfertaPage() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "#021f34", color: "#e2e8f0" }}>

      {/* Nav */}
      <div className="sticky top-0 z-10 border-b border-white/5 bg-[#021f34]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
          <Link
            href="/propuesta"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 transition-colors hover:text-white/70"
          >
            <ArrowLeft className="h-3 w-3" />
            Volver
          </Link>
          <span className="text-xs text-white/20">
            Built by <span className="text-white/40 font-medium">HEA Consulting</span>
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-16">

        {/* Header */}
        <div className="mb-14">
          <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-white/30">Propuesta técnica y comercial · 07 / 04 / 26</p>
          <h1 className="text-4xl text-white/90 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
            Plataforma Digital<br />Integrada
          </h1>
          <p className="mt-2 text-xl text-white/35" style={{ fontFamily: "var(--font-heading)" }}>
            Grupo Almar
          </p>
        </div>

        <div className="h-px bg-white/8 mb-14" />

        {/* Resumen ejecutivo */}
        <section className="mb-14">
          <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-white/30">El problema</p>
          <p className="text-sm leading-relaxed text-white/55">
            EasyBroker y Wix operan por separado. Los leads del sitio no llegan al CRM,
            las propiedades no se sincronizan en tiempo real, y la presencia digital no refleja
            el nivel de Almar. Esta propuesta resuelve todo con{" "}
            <span className="text-white/90">un solo sistema integrado</span>.
          </p>
        </section>

        <div className="h-px bg-white/8 mb-14" />

        {/* Qué incluye */}
        <section className="mb-14">
          <p className="mb-6 text-[10px] uppercase tracking-[0.25em] text-white/30">Qué incluye</p>
          <ul className="space-y-3.5">
            {incluye.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#3069aa]" />
                <span className="text-sm leading-relaxed text-white/55">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="h-px bg-white/8 mb-14" />

        {/* Cronograma */}
        <section className="mb-14">
          <p className="mb-6 text-[10px] uppercase tracking-[0.25em] text-white/30">Cronograma · 4 semanas</p>
          <div className="space-y-4">
            {roadmap.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <span className="w-20 shrink-0 text-xs text-white/25 pt-0.5">{item.semana}</span>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-[#3069aa]/60 shrink-0" />
                  <span className="text-sm text-white/55 leading-relaxed">{item.hito}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-white/8 mb-14" />

        {/* Inversión */}
        <section className="mb-14">
          <p className="mb-6 text-[10px] uppercase tracking-[0.25em] text-white/30">Inversión</p>

          <div className="grid gap-4 sm:grid-cols-2 mb-8">
            {/* Setup */}
            <div className="rounded-xl border border-white/8 bg-white/3 p-6">
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-3">Setup inicial</p>
              <p className="text-3xl font-light text-white mb-1" style={{ fontFamily: "var(--font-heading)" }}>$8,000</p>
              <p className="text-xs text-white/30 mb-3">MXN · pago único</p>
              <div className="h-px bg-white/8 mb-3" />
              <div className="flex justify-between text-xs">
                <span className="text-white/30">+ IVA (16%)</span>
                <span className="text-white/50">$1,280 MXN</span>
              </div>
              <div className="flex justify-between text-xs mt-1.5">
                <span className="text-white/30">Total con IVA</span>
                <span className="text-white/80 font-medium">$9,280 MXN</span>
              </div>
              <p className="mt-3 text-[10px] text-white/20 leading-relaxed">Dominio y hosting primer año incluidos</p>
            </div>

            {/* Mensual */}
            <div className="rounded-xl border border-[#3069aa]/30 bg-[#3069aa]/5 p-6">
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-3">Mensualidad</p>
              <p className="text-3xl font-light text-white mb-1" style={{ fontFamily: "var(--font-heading)" }}>$3,500</p>
              <p className="text-xs text-white/30 mb-3">MXN / mes · contrato mín. 6 meses</p>
              <div className="h-px bg-white/8 mb-3" />
              <div className="flex justify-between text-xs">
                <span className="text-white/30">+ IVA (16%)</span>
                <span className="text-white/50">$560 MXN</span>
              </div>
              <div className="flex justify-between text-xs mt-1.5">
                <span className="text-white/30">Total con IVA</span>
                <span className="text-white/80 font-medium">$4,060 MXN/mes</span>
              </div>
              <p className="mt-3 text-[10px] text-white/20 leading-relaxed">Soporte, operación y actualizaciones</p>
            </div>
          </div>

          {/* Forma de pago */}
          <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-white/30">Forma de pago</p>
          <div className="rounded-xl border border-white/8 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/5">
              <div>
                <p className="text-xs text-white/70 font-medium">Pago 1 — Al firmar</p>
                <p className="text-[10px] text-white/30 mt-0.5">50% del setup</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-white/80">$4,000 MXN</p>
                <p className="text-[10px] text-white/30">$4,640 con IVA</p>
              </div>
            </div>
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/5">
              <div>
                <p className="text-xs text-white/70 font-medium">Pago 2 — A la entrega</p>
                <p className="text-[10px] text-white/30 mt-0.5">50% del setup</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-white/80">$4,000 MXN</p>
                <p className="text-[10px] text-white/30">$4,640 con IVA</p>
              </div>
            </div>
            <div className="flex items-center justify-between px-5 py-3.5">
              <div>
                <p className="text-xs text-white/70 font-medium">Mensual — desde la entrega</p>
                <p className="text-[10px] text-white/30 mt-0.5">Operación de la plataforma</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-white/80">$3,500 MXN</p>
                <p className="text-[10px] text-white/30">$4,060 con IVA</p>
              </div>
            </div>
          </div>

          {/* Datos bancarios */}
          <div className="mt-6 rounded-xl border border-white/5 bg-white/2 px-5 py-4">
            <p className="text-[10px] uppercase tracking-widest text-white/25 mb-3">Datos bancarios</p>
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span className="text-white/30">Banco</span>
                <span className="text-white/55">BBVA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/30">Titular</span>
                <span className="text-white/55">Giancarlo Guagnelli Contreras</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/30">Tarjeta</span>
                <span className="text-white/55 font-mono">4152 3144 9735 5795</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/30">CLABE</span>
                <span className="text-white/55 font-mono">012180015518100133</span>
              </div>
            </div>
          </div>
        </section>

        <div className="h-px bg-white/8 mb-14" />

        {/* Próximos pasos */}
        <section className="mb-14">
          <p className="mb-6 text-[10px] uppercase tracking-[0.25em] text-white/30">Para arrancar</p>
          <div className="space-y-3">
            {pasos.map((paso, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="w-5 h-5 rounded-full border border-white/15 flex items-center justify-center text-[10px] text-white/30 shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-sm text-white/55 leading-relaxed">{paso}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/40 leading-relaxed">
            El desarrollo inicia de inmediato una vez confirmado el Pago 1.{" "}
            <span className="text-white/80">Entrega en 4 semanas.</span>
          </p>
        </section>

        {/* CTAs */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="mailto:consulting.hea@gmail.com"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/15 py-3 text-sm text-white/60 transition-colors hover:border-white/30 hover:text-white"
          >
            <Mail className="h-4 w-4" />
            consulting.hea@gmail.com
          </a>
          <Link
            href="/propuesta/showcase"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg py-3 text-sm font-medium text-white transition-opacity hover:opacity-85"
            style={{ background: "#3069aa" }}
          >
            Ver showcase
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="mt-12 text-center text-[11px] text-white/15">
          HEA Consulting · consulting.hea@gmail.com · www.consultinghea.com · Febrero 2026
        </p>
      </div>
    </div>
  );
}

      </div>
    </div>
  );
}
         style={{ background: "#3069aa" }}
          >
            Ver showcase
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="mt-12 text-center text-[11px] text-white/15">
          HEA Consulting · consulting.hea@gmail.com · www.consultinghea.com · Febrero 2026
        </p>
      </div>
    </div>
  );
}

      </div>
    </div>
  );
}
