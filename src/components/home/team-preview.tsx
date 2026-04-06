"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { agents } from "@/lib/mock-data";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { useLang } from "@/contexts/lang-context";

export default function TeamPreview() {
  const { t } = useLang();
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              {t.team.eyebrow}
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
              {t.team.title}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg text-base leading-relaxed">
              {t.team.subtitle}
            </p>
          </div>
          <Link
            href="/nosotros#equipo"
            className="flex items-center gap-2 text-sm font-semibold text-navy border border-navy rounded-full px-5 py-2.5 hover:bg-navy hover:text-white transition-all duration-200 shrink-0 self-start sm:self-auto"
          >
            {t.team.meetTeam}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>

        {/* Agents grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <StaggerItem key={agent.id}>
            <div
              className="group bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Foto */}
              <div className="relative h-64 bg-muted overflow-hidden">
                <img
                  src={agent.photo}
                  alt={agent.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Stats on hover */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <div className="text-center">
                      <p className="text-white font-heading font-bold text-lg">{agent.propertiesCount}</p>
                      <p className="text-white/70 text-xs">{t.team.active}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-white font-heading font-bold text-lg">{agent.closedDeals}</p>
                      <p className="text-white/70 text-xs">{t.team.closed}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <p className="text-blue text-xs font-semibold tracking-wider uppercase mb-1">
                  {agent.title}
                </p>
                <h3 className="font-heading font-bold text-navy text-lg mb-2">
                  {agent.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                  {agent.bio}
                </p>
                <a
                  href={`https://wa.me/${agent.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-navy hover:text-blue transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {t.team.contact}
                </a>
              </div>
            </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
