"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { zones } from "@/lib/mock-data";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { useLang } from "@/contexts/lang-context";

export default function ZonesSection() {
  const { t } = useLang();
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left: texto */}
          <FadeIn className="lg:w-2/5 shrink-0" direction="left">
            <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              {t.zones.eyebrow}
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-5">
              {t.zones.title}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              {t.zones.description}
            </p>
            <Link
              href="/propiedades"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-navy rounded-full px-6 py-3 hover:bg-navy-light transition-colors"
            >
              {t.zones.exploreBtn}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>

          {/* Right: grid de zonas */}
          <FadeIn className="flex-1 w-full" direction="right">
            <div className="grid grid-cols-2 gap-4">
              {/* Primera zona: grande */}
              <Link
                href={`/propiedades?zona=${zones[0].name.toLowerCase()}`}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] col-span-2 sm:col-span-1 sm:row-span-2"
              >
                <img
                  src={zones[0].image}
                  alt={zones[0].name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="font-heading font-bold text-white text-xl">{zones[0].name}</p>
                  <p className="text-white/70 text-sm">{zones[0].count} {t.zones.properties}</p>
                </div>
              </Link>

              {/* Resto de zonas */}
              {zones.slice(1).map((zone) => (
                <Link
                  key={zone.name}
                  href={`/propiedades?zona=${zone.name.toLowerCase()}`}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
                >
                  <img
                    src={zone.image}
                    alt={zone.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <p className="font-heading font-semibold text-white text-sm">{zone.name}</p>
                    <p className="text-white/65 text-xs">{zone.count} {t.zones.properties}</p>
                  </div>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
