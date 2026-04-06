"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Heart, ArrowLeft } from "lucide-react";
import { properties } from "@/lib/mock-data";
import PropertyCard from "@/components/shared/property-card";
import { useLang } from "@/contexts/lang-context";

export default function FavoritosPage() {
  const { t } = useLang();
  const [ids, setIds] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("almar-favorites");
      if (stored) setIds(JSON.parse(stored));
    } catch {}
    setHydrated(true);
  }, []);

  const saved = properties.filter((p) => ids.includes(p.id));

  if (!hydrated) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-navy border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/propiedades"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.favorites.backToCatalog}
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <Heart className="w-6 h-6 text-red-400 fill-red-400" />
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              {t.favorites.title}
            </h1>
          </div>
          <p className="text-white/60 text-base">
            {saved.length === 0
              ? t.favorites.empty
              : `${saved.length} ${saved.length !== 1 ? t.favorites.propertySaved_other : t.favorites.propertySaved_one}`}
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {saved.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-5">
              <Heart className="w-9 h-9 text-muted-foreground/40" />
            </div>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              {t.favorites.nothingSaved}
            </h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm mx-auto">
              {t.favorites.nothingSavedSub}
            </p>
            <Link
              href="/propiedades"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white text-sm font-semibold rounded-full hover:bg-navy-light transition-colors"
            >
              {t.favorites.explore}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {saved.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
