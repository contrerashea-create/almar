"use client";

import Link from "next/link";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { useLang } from "@/contexts/lang-context";

const typeData = [
  { slug: "casa", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop", count: 24 },
  { slug: "departamento", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop", count: 18 },
  { slug: "villa", image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&h=400&fit=crop", count: 9 },
  { slug: "penthouse", image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=600&h=400&fit=crop", count: 6 },
  { slug: "terreno", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop", count: 11 },
  { slug: "local", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop", count: 5 },
];

export default function PropertyTypes() {
  const { t } = useLang();
  const types = typeData.map((d, i) => ({ ...d, label: t.propertyTypes.types[i] }));
  return (
    <section className="py-20 lg:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-12">
          <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            {t.propertyTypes.eyebrow}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
            {t.propertyTypes.title}
          </h2>
        </FadeIn>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {types.map((type) => (
            <StaggerItem key={type.slug}>
              <Link
                href={`/propiedades?tipo=${type.slug}`}
                className="group relative overflow-hidden rounded-2xl aspect-square sm:aspect-[3/4] bg-muted block"
              >
                <img
                  src={type.image}
                  alt={type.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="font-heading font-semibold text-white text-sm leading-tight">
                    {type.label}
                  </p>
                  <p className="text-white/60 text-xs mt-0.5">
                    {type.count} {t.propertyTypes.properties}
                  </p>
                </div>

                {/* Hover border */}
                <div className="absolute inset-0 ring-2 ring-blue opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
