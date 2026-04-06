"use client";

import Link from "next/link";
import { Bed, Bath, Maximize2, MapPin, Heart } from "lucide-react";
import { Property, formatPrice } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { useFavorites } from "@/hooks/use-favorites";
import { useLang } from "@/contexts/lang-context";

interface PropertyCardProps {
  property: Property;
  className?: string;
}

const statusColors: Record<string, string> = {
  disponible: "bg-emerald-500",
  "en-negociacion": "bg-amber-500",
  vendida: "bg-red-500",
  rentada: "bg-blue-500",
};

export default function PropertyCard({ property, className }: PropertyCardProps) {
  const { t } = useLang();
  const statusLabelMap: Record<string, string> = {
    disponible: t.propertyCard.available,
    "en-negociacion": t.propertyCard.inNegotiation,
    vendida: t.propertyCard.sold,
    rentada: t.propertyCard.rented,
    borrador: t.propertyCard.available,
  };
  const statusLabel = statusLabelMap[property.status] ?? t.propertyCard.available;
  const statusColor = statusColors[property.status] ?? statusColors.disponible;
  const { isFavorite, toggle } = useFavorites();
  const saved = isFavorite(property.id);

  return (
    <Link
      href={`/propiedades/${property.slug}`}
      className={cn(
        "group flex flex-col bg-white rounded-2xl overflow-hidden border border-border",
        "shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      {/* Imagen */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges top-left */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <span className="px-2.5 py-1 bg-navy text-white text-[10px] font-bold tracking-widest uppercase rounded-full">
            {property.operation === "venta" ? t.propertyCard.sale : t.propertyCard.rent}
          </span>
          {property.featured && (
            <span className="px-2.5 py-1 bg-blue text-white text-[10px] font-bold tracking-widest uppercase rounded-full">
              {t.propertyCard.featured}
            </span>
          )}
        </div>

        {/* Status badge top-right */}
        <div className="absolute top-3 right-3">
          <span className={cn("flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold text-white", statusColor)}>
            <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
            {statusLabel}
          </span>
        </div>

        {/* Heart / guardar */}
        <button
          onClick={(e) => { e.preventDefault(); toggle(property.id); }}
          className={cn(
            "absolute bottom-3 right-3 w-8 h-8 rounded-full backdrop-blur-sm flex items-center justify-center transition-all duration-200 shadow-sm",
            saved ? "bg-red-500 scale-110" : "bg-white/90 hover:bg-white"
          )}
          aria-label={saved ? t.propertyCard.removeFromFavorites : t.propertyCard.saveProperty}
        >
          <Heart className={cn(
            "w-4 h-4 transition-all duration-200",
            saved ? "fill-white text-white" : "text-muted-foreground"
          )} />
        </button>

        {/* Tipo */}
        <div className="absolute bottom-3 left-3">
          <span className="px-2.5 py-1 bg-black/50 backdrop-blur-sm text-white text-[10px] font-medium rounded-full">
            {(t.propertyCard.typeLabels as Record<string, string>)[property.type] ?? property.type}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-4">
        {/* Ubicación */}
        <div className="flex items-center gap-1 text-muted-foreground text-xs mb-1.5">
          <MapPin className="w-3 h-3 shrink-0" />
          <span>{property.location.zone}, {property.location.city}</span>
        </div>

        {/* Título */}
        <h3 className="font-heading font-semibold text-base text-foreground leading-snug mb-3 group-hover:text-navy transition-colors line-clamp-2">
          {property.title}
        </h3>

        {/* Specs */}
        {property.type !== "terreno" ? (
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            {property.specs.bedrooms > 0 && (
              <span className="flex items-center gap-1">
                <Bed className="w-3.5 h-3.5" />
                {property.specs.bedrooms}
              </span>
            )}
            {property.specs.bathrooms > 0 && (
              <span className="flex items-center gap-1">
                <Bath className="w-3.5 h-3.5" />
                {property.specs.bathrooms}
              </span>
            )}
            {property.specs.constructionM2 > 0 && (
              <span className="flex items-center gap-1">
                <Maximize2 className="w-3.5 h-3.5" />
                {property.specs.constructionM2} m²
              </span>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
            <Maximize2 className="w-3.5 h-3.5" />
            <span>{property.specs.landM2?.toLocaleString()} {t.propertyCard.landM2}</span>
          </div>
        )}

        {/* Precio */}
        <div className="mt-auto pt-3 border-t border-border flex items-end justify-between">
          <div>
            <p className="text-xl font-heading font-bold text-navy">
              {formatPrice(property.price, property.currency)}
            </p>
            {property.priceUSD && (
              <p className="text-xs text-muted-foreground">
                ≈ {formatPrice(property.priceUSD, "USD")}
              </p>
            )}
            {property.operation === "renta" && (
              <p className="text-xs text-muted-foreground">{t.propertyCard.perMonth}</p>
            )}
          </div>
          <span className="text-blue text-xs font-semibold group-hover:underline">
            {t.propertyCard.seeMore}
          </span>
        </div>
      </div>
    </Link>
  );
}
