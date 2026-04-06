"use client";

import Link from "next/link";
import { ArrowRight, Home, Key, Users, Megaphone, Building2, FileCheck } from "lucide-react";
import { useLang } from "@/contexts/lang-context";

const serviceIcons = [Home, Key, Users, Megaphone, Building2, FileCheck];

export default function ServiciosPage() {
  const { t } = useLang();
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-3">{t.servicios.eyebrow}</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            {t.servicios.title}
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
            {t.servicios.subtitle}
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {t.servicios.services.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <div key={service.title} className="bg-white border border-border rounded-2xl p-7 hover:shadow-lg hover:border-navy/20 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mb-5 group-hover:bg-navy group-hover:text-white transition-all">
                    <Icon className="w-6 h-6 text-navy group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-navy text-xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.desc}</p>
                  <ul className="grid grid-cols-2 gap-1.5 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-blue transition-colors"
                  >
                    {service.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-5">
            {t.servicios.ctaTitle}
          </h2>
          <p className="text-white/65 mb-8 leading-relaxed">
            {t.servicios.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/529843121828"
              target="_blank" rel="noopener noreferrer"
              className="px-7 py-3.5 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#20BA5C] transition-colors text-sm"
            >
              {t.servicios.whatsappFree}
            </a>
            <Link href="/contacto" className="px-7 py-3.5 bg-white text-navy font-semibold rounded-full hover:bg-white/90 transition-colors text-sm">
              {t.footer.contactForm}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
