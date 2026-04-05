"use client";

import { Bell, Search, ExternalLink } from "lucide-react";
import Link from "next/link";
import { agents } from "@/lib/mock-data";

const pao = agents[0];

export default function AdminHeader({ title }: { title: string }) {
  return (
    <header className="h-16 bg-white border-b border-border flex items-center justify-between px-6 shrink-0">
      <h1 className="font-heading font-bold text-navy text-lg">{title}</h1>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="hidden sm:flex items-center gap-2 bg-muted border border-border rounded-full px-3 py-1.5 text-sm text-muted-foreground w-48">
          <Search className="w-3.5 h-3.5 shrink-0" />
          <span className="text-xs">Buscar...</span>
        </div>

        {/* Ver sitio */}
        <Link
          href="/"
          target="_blank"
          className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground hover:text-navy transition-colors border border-border rounded-full px-3 py-1.5"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          Ver sitio
        </Link>

        {/* Notificaciones */}
        <button className="relative w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-border transition-colors">
          <Bell className="w-4 h-4 text-muted-foreground" />
          <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-blue rounded-full" />
        </button>

        {/* Avatar */}
        <div className="flex items-center gap-2.5 cursor-pointer group">
          <img
            src={pao.photo}
            alt={pao.name}
            className="w-8 h-8 rounded-full object-cover object-top border-2 border-border group-hover:border-navy transition-colors"
          />
          <div className="hidden sm:block">
            <p className="text-xs font-semibold text-foreground leading-tight">{pao.name.split(" ")[0]}</p>
            <p className="text-[10px] text-muted-foreground">{pao.title}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
