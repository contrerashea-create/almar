import { Quote } from "lucide-react";
import { testimonials } from "@/lib/mock-data";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-14">
          <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Lo que dicen nuestros clientes
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
            Historias de éxito
          </h2>
        </FadeIn>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <StaggerItem key={testimonial.id}>
            <div
              className={`bg-white rounded-2xl p-7 border border-border shadow-sm flex flex-col ${
                i === 1 ? "md:-translate-y-3" : ""
              }`}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-blue/30 mb-5 shrink-0" />

              {/* Texto */}
              <p className="text-foreground text-base leading-relaxed flex-1 italic">
                "{testimonial.quote}"
              </p>

              {/* Propiedad */}
              <div className="mt-5 mb-5 px-3 py-2 bg-muted rounded-lg inline-flex items-center gap-2 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-blue" />
                <span className="text-xs text-muted-foreground font-medium">{testimonial.property}</span>
              </div>

              {/* Autor */}
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
                {/* Stars */}
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-blue text-sm">★</span>
                  ))}
                </div>
              </div>
            </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
