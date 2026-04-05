import { agents, testimonials } from "@/lib/mock-data";
import { Phone, Mail } from "lucide-react";
import type { Metadata } from "next";
import CountUp from "@/components/ui/count-up";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce al equipo detrás de Almar — más de 20 años de experiencia conectando personas con las mejores propiedades de la Riviera Maya, Monterrey y Los Cabos.",
};

const values = [
  { title: "Alma", description: "Detrás de cada operación hay una persona con una decisión importante. Escuchamos antes de proponer y acompañamos hasta el final." },
  { title: "Confianza", description: "Decimos lo que podemos hacer y hacemos lo que decimos. Los términos son claros desde el inicio; no hay letra chica." },
  { title: "Excelencia", description: "Cada propiedad en nuestro catálogo pasó por un proceso de selección. No publicamos todo lo que llega, publicamos lo que vale la pena." },
  { title: "Conocimiento", description: "Veinte años en el mercado nos dan perspectiva real: sabemos qué zonas suben, qué desarrolladores cumplen y qué tipo de propiedad encaja con cada perfil de comprador." },
];

export default function NosotrosPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&h=600&fit=crop&q=80"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy/80" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-3">Quiénes somos</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl mb-5">
            Real Estate with Soul
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
            Con más de 20 años de historia, Almar Real Estate nació con una convicción concreta:
            que comprar, vender o invertir en bienes raíces debería ser un proceso claro,
            humano y con resultados reales.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-3">Nuestra historia</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-5 leading-tight">
                Más de dos décadas en el mercado
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Almar Real Estate fue fundada por Jorge Cuesta del Castillo y Camila Bertonatti,
                  dos profesionales con trayectorias distintas y una visión compartida: crear una
                  inmobiliaria boutique basada en confianza, conocimiento de mercado y resultados.
                </p>
                <p>
                  Jorge acumuló 24 años de experiencia en bienes raíces comerciales y residenciales,
                  incluyendo operaciones en JLL y el desarrollo de proyectos en Monterrey y la Riviera Maya.
                  Camila llegó desde la hospitalidad de lujo y las relaciones públicas para construir
                  el corazón operativo y comercial de la empresa.
                </p>
                <p>
                  Hoy operamos en México, España y Estados Unidos, con un catálogo que abarca
                  desde departamentos en Playa del Carmen hasta villas en Tulum y terrenos
                  comerciales en Monterrey. Todo bajo el concepto ROW — Return of Wellness.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop"
                alt="Almar office"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-5 -left-5 bg-navy rounded-2xl p-5 shadow-xl">
                <p className="font-heading text-3xl font-bold text-white">20+</p>
                <p className="text-white/70 text-sm">Años de experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { end: 500, suffix: "+", prefix: "", label: "Clientes atendidos" },
              { end: 72, suffix: "+", prefix: "", label: "Propiedades activas" },
              { end: 20, suffix: "+", prefix: "", label: "Años de experiencia" },
              { end: 3, suffix: "", prefix: "", label: "Países de operación" },
            ].map((stat) => (
              <div key={stat.label} className="text-center bg-white rounded-2xl p-6 border border-border">
                <p className="font-heading text-4xl font-bold text-navy mb-1">
                  <CountUp end={stat.end} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-3">Lo que nos define</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy">Nuestros valores</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-border rounded-2xl p-6 hover:border-navy/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center mb-4">
                  <span className="font-heading font-bold text-navy text-sm">{v.title[0]}</span>
                </div>
                <h3 className="font-heading font-bold text-navy text-lg mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section id="equipo" className="py-20 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-3">El equipo</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">Las personas detrás de Almar</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <div key={agent.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all">
                <div className="h-56 overflow-hidden">
                  <img src={agent.photo} alt={agent.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-5">
                  <p className="text-blue text-xs font-semibold uppercase tracking-wider mb-1">{agent.title}</p>
                  <h3 className="font-heading font-bold text-white text-lg mb-2">{agent.name}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{agent.bio}</p>
                  <div className="flex gap-3">
                    <a href={`tel:${agent.phone}`} className="flex items-center gap-1.5 text-white/60 hover:text-white text-xs transition-colors">
                      <Phone className="w-3.5 h-3.5" />{agent.phone}
                    </a>
                    <a href={`mailto:${agent.email}`} className="flex items-center gap-1.5 text-white/60 hover:text-white text-xs transition-colors">
                      <Mail className="w-3.5 h-3.5" />Email
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Causa social */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary/40 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-3">Impacto social</p>
              <h2 className="font-heading text-3xl font-bold text-navy mb-4">CERO POBREZA</h2>
              <p className="text-muted-foreground leading-relaxed">
                Por cada propiedad que vendemos, destinamos un porcentaje de nuestra comisión
                al programa CERO POBREZA, una iniciativa local que apoya a comunidades
                mayas en situación de vulnerabilidad en Quintana Roo.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Una empresa que opera en una región tiene responsabilidad con esa región. Por eso
                destinamos parte de cada comisión al desarrollo de comunidades locales.
              </p>
            </div>
            <div className="shrink-0">
              <div className="w-40 h-40 rounded-full bg-navy flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="font-heading text-3xl font-bold">0%</p>
                  <p className="text-white/70 text-xs mt-1">pobreza<br />es nuestra meta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
