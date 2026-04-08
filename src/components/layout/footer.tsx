"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import NewsletterForm from "./newsletter-form";
import AlmarLogo from "@/components/ui/almar-logo";
import { useLang } from "@/contexts/lang-context";

export default function Footer() {
  const { t } = useLang();

  const propertyLinks = [
    { label: t.footer.propLinks.casasTulum, href: "/propiedades?tipo=casa&zona=tulum" },
    { label: t.footer.propLinks.deptosPlaya, href: "/propiedades?tipo=departamento&zona=playa-del-carmen" },
    { label: t.footer.propLinks.villasAndPenthouses, href: "/propiedades?tipo=villa" },
    { label: t.footer.propLinks.terrenos, href: "/propiedades?tipo=terreno" },
    { label: t.footer.propLinks.renta, href: "/propiedades?operacion=renta" },
    { label: t.footer.propLinks.destacadas, href: "/propiedades?destacadas=true" },
  ];

  const companyLinks = [
    { label: t.footer.companyLinks.whoWeAre, href: "/nosotros" },
    { label: t.footer.companyLinks.services, href: "/servicios" },
    { label: t.footer.companyLinks.ourTeam, href: "/nosotros#equipo" },
    { label: t.footer.companyLinks.blog, href: "/blog" },
    { label: t.footer.companyLinks.affiliates, href: "/afiliados" },
    { label: t.footer.companyLinks.contact, href: "/contacto" },
  ];

  const legalLinks = [
    { label: t.footer.privacy, href: "/privacidad" },
    { label: t.footer.terms, href: "/terminos" },
    { label: t.footer.accessibility, href: "/accesibilidad" },
  ];

  return (
    <footer className="bg-brand text-brand-foreground">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-gold text-sm font-medium tracking-widest uppercase mb-1">
                {t.footer.cta}
              </p>
              <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-white">
                {t.footer.ctaTitle}
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="https://wa.me/529843121828"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gold text-gold-foreground text-sm font-semibold rounded-full hover:bg-gold/90 transition-colors text-center w-full sm:w-auto"
              >
                {t.footer.whatsappDirect}
              </a>
              <Link
                href="/contacto"
                className="px-6 py-3 border border-white/30 text-white text-sm font-semibold rounded-full hover:bg-white/10 transition-colors text-center w-full sm:w-auto"
              >
                {t.footer.contactForm}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <AlmarLogo variant="full" theme="light" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {t.footer.tagline}
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+529843121828"
                className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>+52 984 312 1828</span>
              </a>
              <a
                href="mailto:hola@almarmx.com"
                className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>hola@almarmx.com</span>
              </a>
              <div className="flex items-start gap-2.5 text-white/70">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Tulum, Quintana Roo, México</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://instagram.com/almarmx" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold/20 flex items-center justify-center transition-colors group" aria-label="Instagram">
                <svg className="w-4 h-4 fill-white/70 group-hover:fill-gold transition-colors" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://facebook.com/almarmx" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold/20 flex items-center justify-center transition-colors group" aria-label="Facebook">
                <svg className="w-4 h-4 fill-white/70 group-hover:fill-gold transition-colors" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://youtube.com/@almarmx" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold/20 flex items-center justify-center transition-colors group" aria-label="YouTube">
                <svg className="w-4 h-4 fill-white/70 group-hover:fill-gold transition-colors" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Properties */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
              {t.footer.properties}
            </h3>
            <ul className="space-y-3">
              {propertyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/65 hover:text-white text-sm transition-colors hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
              {t.footer.company}
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/65 hover:text-white text-sm transition-colors hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
              {t.footer.stayInformed}
            </h3>
            <p className="text-white/65 text-sm leading-relaxed mb-4">
              {t.footer.newsletterDesc}
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
            <p>© {new Date().getFullYear()} Almar Inmobiliaria. {t.footer.rights}</p>
            <div className="flex items-center gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
