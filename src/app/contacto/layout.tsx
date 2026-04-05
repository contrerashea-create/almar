import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "¿Listo para encontrar tu propiedad ideal? Contáctanos por WhatsApp, correo o formulario. Respondemos en menos de 2 horas.",
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
