"use client";

import { Phone, MessageCircle, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFavorites } from "@/hooks/use-favorites";

interface StickyContactBarProps {
  propertyId: string;
  whatsappHref: string;
  phoneHref: string;
  price: string;
}

export default function StickyContactBar({
  propertyId,
  whatsappHref,
  phoneHref,
  price,
}: StickyContactBarProps) {
  const { isFavorite, toggle } = useFavorites();
  const saved = isFavorite(propertyId);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      {/* Price strip */}
      <div className="bg-navy/95 backdrop-blur-sm border-t border-white/10 px-4 py-3 flex items-center justify-between gap-3">
        <p className="font-heading font-bold text-white text-lg leading-none">{price}</p>

        <div className="flex items-center gap-2">
          {/* Favorites */}
          <button
            onClick={() => toggle(propertyId)}
            className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 shrink-0",
              saved ? "bg-red-500" : "bg-white/10 hover:bg-white/20"
            )}
            aria-label={saved ? "Quitar de favoritos" : "Guardar"}
          >
            <Heart className={cn("w-4 h-4", saved ? "fill-white text-white" : "text-white/70")} />
          </button>

          {/* Llamar */}
          <a
            href={phoneHref}
            className="h-10 px-4 flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold rounded-xl transition-colors shrink-0"
          >
            <Phone className="w-4 h-4" />
            Llamar
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 px-4 flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20BA5C] text-white text-sm font-semibold rounded-xl transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
