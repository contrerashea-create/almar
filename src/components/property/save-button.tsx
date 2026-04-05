"use client";

import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFavorites } from "@/hooks/use-favorites";

export default function SaveButton({ propertyId }: { propertyId: string }) {
  const { isFavorite, toggle } = useFavorites();
  const saved = isFavorite(propertyId);

  return (
    <button
      onClick={() => toggle(propertyId)}
      className={cn(
        "flex items-center gap-1.5 text-xs transition-all duration-200",
        saved ? "text-red-400 hover:text-red-300" : "text-white/60 hover:text-white"
      )}
    >
      <Heart className={cn("w-4 h-4 transition-all duration-200", saved && "fill-red-400")} />
      {saved ? "Guardada" : "Guardar"}
    </button>
  );
}
