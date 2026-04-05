import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import PublicLayout from "@/components/layout/public-layout";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Almar — Propiedades de Lujo en la Riviera Maya",
    template: "%s | Almar",
  },
  description:
    "Encuentra las mejores propiedades en Tulum, Playa del Carmen, Akumal y toda la Riviera Maya. Casas, departamentos, villas y terrenos. Inmobiliaria boutique con más de 12 años de experiencia.",
  keywords: ["inmobiliaria", "tulum", "riviera maya", "propiedades de lujo", "playa del carmen", "bienes raíces"],
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Almar Inmobiliaria",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PublicLayout>{children}</PublicLayout>
      </body>
    </html>
  );
}
