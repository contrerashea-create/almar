import Link from "next/link";
import { ArrowRight, Home, Key, Users, Megaphone, Building2, FileCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Venta, renta, representación de comprador, marketing inmobiliario y más. Descubre todo lo que Almar puede hacer por ti.",
};

const services = [
  {
    icon: Home,
    title: "Venta de propiedades",
    description:
      "Diseñamos la estrategia de venta con base en el perfil de tu propiedad: valuación, fotografía profesional, tour virtual, fijación de precio y negociación hasta el cierre.",
    features: ["Valuación gratuita", "Fotografía profesional", "Tour 360°", "Marketing digital", "Negociación experta", "Acompañamiento al notario"],
    cta: "Quiero vender",
  },
  {
    icon: Key,
    title: "Renta de propiedades",
    description:
      "Conectamos tu propiedad con inquilinos verificados y gestionamos el proceso completo: publicación, revisión de candidatos, contrato y depósito.",
    features: ["Publicación en plataformas top", "Verificación de inquilinos", "Contrato personalizado", "Gestión de depósito", "Asesoría legal", "Soporte post-firma"],
    cta: "Quiero rentar",
  },
  {
    icon: Users,
    title: "Representación de comprador",
    description:
      "Trabajamos exclusivamente para el comprador. Buscamos, evaluamos, comparamos y negociamos en tu nombre, con acceso a propiedades que no siempre están en el mercado abierto.",
    features: ["Búsqueda personalizada", "Análisis de mercado", "Visitas coordinadas", "Negociación a tu favor", "Due diligence legal", "Cierre acompañado"],
    cta: "Quiero comprar",
  },
  {
    icon: Megaphone,
    title: "Marketing inmobiliario",
    description:
      "Para propietarios que necesitan visibilidad de alto impacto. Producimos el material, ejecutamos la campaña y reportamos resultados.",
    features: ["Sesión fotográfica HD", "Video con drone", "Tour virtual Matterport", "Contenido para redes", "Campañas en Meta y Google", "Reportes de resultados"],
    cta: "Saber más",
  },
  {
    icon: Building2,
    title: "Asesoría de inversión",
    description:
      "Analizamos el mercado con números reales: plusvalía por zona, proyección de renta, perfil de riesgo y retorno esperado. Para que inviertas con criterio, no con intuición.",
    features: ["Análisis de mercado", "Proyecciones de plusvalía", "Comparación de zonas", "ROI estimado", "Perfil de riesgo", "Portfolio inmobiliario"],
    cta: "Analizar inversión",
  },
  {
    icon: FileCheck,
    title: "Trámites y gestoría",
    description:
      "Gestionamos los trámites que más retrasos generan: fideicomiso para compradores extranjeros, escrituración, permisos municipales y regularización de propiedades.",
    features: ["Fideicomiso bancario", "Escrituración", "RFC y trámites SAT", "Permisos municipales", "Regularización", "Asesoría notarial"],
    cta: "Consultar",
  },
];

export default function ServiciosPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-3">Lo que hacemos</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Servicios inmobiliarios<br />a tu medida
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
            Compra, venta, renta, inversión. Tenemos un proceso estructurado para cada etapa
            del ciclo inmobiliario.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="bg-white border border-border rounded-2xl p-7 hover:shadow-lg hover:border-navy/20 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mb-5 group-hover:bg-navy group-hover:text-white transition-all">
                    <Icon className="w-6 h-6 text-navy group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-navy text-xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-1.5 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-blue transition-colors"
                  >
                    {service.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-5">
            ¿No sabes por dónde empezar?
          </h2>
          <p className="text-white/65 mb-8 leading-relaxed">
            Cuéntanos tu situación y te orientamos hacia el servicio que tiene sentido para tu caso.
            Sin rodeos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/529843121828"
              target="_blank" rel="noopener noreferrer"
              className="px-7 py-3.5 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#20BA5C] transition-colors text-sm"
            >
              WhatsApp gratuito
            </a>
            <Link href="/contacto" className="px-7 py-3.5 bg-white text-navy font-semibold rounded-full hover:bg-white/90 transition-colors text-sm">
              Formulario de contacto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
