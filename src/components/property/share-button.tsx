"use client";

import { Share2, Check, Copy } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ShareButtonProps {
  title: string;
  price: string;
  className?: string;
}

export default function ShareButton({ title, price, className }: ShareButtonProps) {
  const [state, setState] = useState<"idle" | "copied">("idle");

  const handleShare = async () => {
    const url = window.location.href;
    const text = `${title} — ${price}`;

    if (typeof navigator.share === "function") {
      try {
        await navigator.share({ title: "Almar Inmobiliaria", text, url });
        return;
      } catch {}
    }

    try {
      await navigator.clipboard.writeText(url);
      setState("copied");
      setTimeout(() => setState("idle"), 2200);
    } catch {}
  };

  return (
    <button
      onClick={handleShare}
      className={cn(
        "flex items-center gap-1.5 text-xs transition-all duration-200",
        state === "copied"
          ? "text-emerald-400"
          : "text-white/60 hover:text-white",
        className
      )}
    >
      {state === "copied" ? (
        <Check className="w-4 h-4" />
      ) : (
        <Share2 className="w-4 h-4" />
      )}
      {state === "copied" ? "¡Enlace copiado!" : "Compartir"}
    </button>
  );
}
