import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programa de Afiliados",
  description: "Gana comisiones referiendo clientes a Almar. Únete al programa de afiliados y empieza a generar ingresos con las mejores propiedades de la Riviera Maya.",
};

export default function AfiliadosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
