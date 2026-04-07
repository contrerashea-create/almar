"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar";
import Footer from "./footer";
import WhatsAppButton from "./whatsapp-button";
import HeaButton from "./hea-button";
import { LangProvider } from "@/contexts/lang-context";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const isPropuesta = pathname.startsWith("/propuesta");

  if (isAdmin || isPropuesta) return <>{children}</>;

  return (
    <LangProvider>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
      <HeaButton />
    </LangProvider>
  );

}
