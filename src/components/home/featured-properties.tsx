import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProperties } from "@/lib/mock-data";
import PropertyCard from "@/components/shared/property-card";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

export default function FeaturedProperties() {
  const featured = getFeaturedProperties();

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Selección especial
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
              Propiedades destacadas
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md text-base leading-relaxed">
              Propiedades seleccionadas que cumplen nuestros criterios de calidad, ubicación y precio justo.
            </p>
          </div>
          <Link
            href="/propiedades"
            className="flex items-center gap-2 text-sm font-semibold text-navy border border-navy rounded-full px-5 py-2.5 hover:bg-navy hover:text-white transition-all duration-200 shrink-0 self-start sm:self-auto"
          >
            Ver todas <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.slice(0, 6).map((property) => (
            <StaggerItem key={property.id}>
              <PropertyCard property={property} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-10 text-center sm:hidden">
          <Link href="/propiedades"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-navy rounded-full px-6 py-3 hover:bg-navy-light transition-colors">
            Ver todas las propiedades <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
