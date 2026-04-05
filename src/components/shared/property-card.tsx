"use client";

import Link from "next/link";
import { Bed, Bath, Maximize2, MapPin, Heart } from "lucide-react";
import { Property, formatPrice } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { useFavorites } from "@/hooks/use-favorites";

interface PropertyCardProps {
  property: Property;
  className?: string;
}

const statusLabels: Record<string, { label: string; color: string }> = {
  disponible: { label: "Disponible", color: "bg-emerald-500" },
  "en-negociacion": { label: "En negociación", color: "bg-amber-500" },
  vendida: { label: "Vendida", color: "bg-red-500" },
  rentada: { label: "Rentada", color: "bg-blue-500" },
};

const typeLabels: Record<string, string> = {
  casa: "Casa",
  departamento: "Departamento",
  penthouse: "Penthouse",
  villa: "Villa",
  terreno: "Terreno",
  local: "Local",
  oficina: "Oficina",
};

export default function PropertyCard({ property, className }: PropertyCardProps) {
  const status = statusLabels[property.status] ?? statusLabels.disponible;
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
            {property.operation === "venta" ? "Venta" : "Renta"}
          </span>
          {property.featured && (
            <span className="px-2.5 py-1 bg-blue text-white text-[10px] font-bold tracking-widest uppercase rounded-full">
              Destacada
            </span>
          )}
        </div>

        {/* Status badge top-right */}
        <div className="absolute top-3 right-3">
          <span className={cn("flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold text-white", status.color)}>
            <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
            {status.label}
          </span>
        </div>

        {/* Heart / guardar */}
        <button
          onClick={(e) => { e.preventDefault(); toggle(property.id); }}
          className={cn(
            "absolute bottom-3 right-3 w-8 h-8 rounded-full backdrop-blur-sm flex items-center justify-center transition-all duration-200 shadow-sm",
            saved ? "bg-red-500 scale-110" : "bg-white/90 hover:bg-white"
          )}
          aria-label={saved ? "Quitar de favoritos" : "Guardar propiedad"}
        >
          <Heart className={cn(
            "w-4 h-4 transition-all duration-200",
            saved ? "fill-white text-white" : "text-muted-foreground"
          )} />
        </button>

        {/* Tipo */}
        <div className="absolute bottom-3 left-3">
          <span className="px-2.5 py-1 bg-black/50 backdrop-blur-sm text-white text-[10px] font-medium rounded-full">
            {typeLabels[property.type] ?? property.type}
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
            <span>{property.specs.landM2?.toLocaleString()} m² de terreno</span>
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
              <p className="text-xs text-muted-foreground">/mes</p>
            )}
          </div>
          <span className="text-blue text-xs font-semibold group-hover:underline">
            Ver más →
          </span>
        </div>
      </div>
    </Link>
  );
}
