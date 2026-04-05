import { cn } from "@/lib/utils";

interface AlmarLogoProps {
  variant?: "full" | "compact";
  theme?: "light" | "dark"; // light = texto blanco (sobre navy), dark = texto navy (sobre blanco)
  className?: string;
}

export default function AlmarLogo({
  variant = "full",
  theme = "light",
  className,
}: AlmarLogoProps) {
  if (variant === "compact") {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        {/* Orb pequeño */}
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <defs>
            <radialGradient id="orb-sm" cx="38%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#F5C840" />
              <stop offset="100%" stopColor="#E07518" />
            </radialGradient>
          </defs>
          <circle cx="11" cy="11" r="11" fill="url(#orb-sm)" />
          <ellipse cx="7.5" cy="7" rx="4.5" ry="3" fill="white" opacity="0.18" />
        </svg>

        {/* almar */}
        <span className={cn(
          "font-heading italic font-bold text-xl tracking-wide leading-none",
          theme === "light" ? "text-white" : "text-navy"
        )}>
          almar
        </span>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      {/* Orb */}
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <defs>
          <radialGradient id="orb-lg" cx="38%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#F5C840" />
            <stop offset="100%" stopColor="#E07518" />
          </radialGradient>
        </defs>
        <circle cx="26" cy="26" r="26" fill="url(#orb-lg)" />
        <ellipse cx="18" cy="17" rx="10" ry="7" fill="white" opacity="0.18" />
      </svg>

      {/* almar */}
      <span className={cn(
        "font-heading italic font-bold leading-none tracking-wide",
        theme === "light" ? "text-white" : "text-navy",
        "text-5xl"
      )}>
        almar
      </span>

      {/* Tagline */}
      <span className={cn(
        "text-[10px] font-semibold tracking-[0.3em] uppercase",
        theme === "light" ? "text-amber-400" : "text-amber-500"
      )}>
        Real Estate with Soul
      </span>
    </div>
  );
}
