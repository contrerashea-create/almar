import Image from "next/image";
import { cn } from "@/lib/utils";

interface AlmarLogoProps {
  variant?: "full" | "compact";
  theme?: "light" | "dark";
  className?: string;
}

export default function AlmarLogo({
  variant = "full",
  theme = "light",
  className,
}: AlmarLogoProps) {
  if (variant === "compact") {
    return (
      <div className={cn("flex items-center", className)}>
        <Image
          src="/logo-almar.png"
          alt="Almar"
          width={160}
          height={48}
          className="object-contain h-14 w-auto"
          priority
        />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <Image
        src="/logo-almar.png"
        alt="Almar"
        width={160}
        height={48}
        className="object-contain h-14 w-auto"
        priority
      />
    </div>
  );
}
