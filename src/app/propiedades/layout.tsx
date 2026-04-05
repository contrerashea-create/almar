import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propiedades",
  description: "Explora nuestro catálogo de casas, departamentos, villas, penthouses y terrenos en Tulum, Playa del Carmen, Akumal y toda la Riviera Maya.",
};

export default function PropiedadesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
