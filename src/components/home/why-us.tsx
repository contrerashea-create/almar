import { Shield, Star, Globe, HeartHandshake, TrendingUp, Clock } from "lucide-react";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

const reasons = [
  { icon: Shield, title: "Seguridad en cada operación", description: "Coordinamos el proceso legal y financiero de principio a fin: notario, fideicomiso, escrituración. Sin sorpresas ni retrasos." },
  { icon: Star, title: "Selección con criterio", description: "Cada propiedad en nuestro catálogo pasó por un proceso de evaluación. No publicamos todo lo que llega, publicamos lo que vale la pena." },
  { icon: Globe, title: "Atención bilingüe", description: "Atendemos en español e inglés, con el mismo nivel de servicio para clientes mexicanos, americanos y europeos." },
  { icon: TrendingUp, title: "Perspectiva de inversión", description: "Analizamos plusvalía, rendimiento esperado y contexto de mercado para que la decisión sea tuya, pero bien fundamentada." },
  { icon: HeartHandshake, title: "Clientes que regresan", description: "La mayoría de quienes trabajan con nosotros llegan recomendados por alguien que ya lo hizo. Ese es el indicador que más nos importa." },
  { icon: Clock, title: "Respuesta el mismo día", description: "Tiempo de respuesta promedio: menos de 2 horas. Disponibles por WhatsApp y correo, todos los días de la semana." },
];

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-3">¿Por qué Almar?</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Real Estate with Soul
          </h2>
          <p className="text-white/65 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
            Doce años operando en la Riviera Maya nos dan algo que no se improvisa: criterio, contactos y un proceso que funciona.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <StaggerItem key={reason.title}>
                <div className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 h-full">
                  <div className="w-11 h-11 rounded-xl bg-blue/20 flex items-center justify-center mb-5 group-hover:bg-blue/30 transition-colors">
                    <Icon className="w-5 h-5 text-blue" />
                  </div>
                  <h3 className="font-heading font-semibold text-white text-lg mb-2 leading-snug">{reason.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
