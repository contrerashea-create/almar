"use client";

import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import CountUp from "@/components/ui/count-up";
import { useLang } from "@/contexts/lang-context";

export default function Hero() {
  const { t } = useLang();
  const operaciones = [t.hero.sell, t.hero.rent];
  const tipos = t.hero.types;
  const zonas = t.hero.zones;

  const [operacion, setOperacion] = useState<string>(t.hero.sell);
  const [tipo, setTipo] = useState<string>(tipos[0]);
  const [zona, setZona] = useState("");
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    // Map translated values back to Spanish slugs for URL
    const isSell = operacion === t.hero.sell;
    if (!isSell) params.set("operacion", "renta");
    const isAllTypes = tipo === tipos[0];
    if (!isAllTypes) {
      const typeSlugs = ["casa", "departamento", "villa", "penthouse", "terreno", "local"];
      const idx = t.hero.types.indexOf(tipo as typeof t.hero.types[number]);
      if (idx > 0 && typeSlugs[idx - 1]) params.set("tipo", typeSlugs[idx - 1]);
    }
    const isAllZones = zona === "" || zona === t.hero.zones[0];
    if (!isAllZones) {
      const zoneSlugs = ["tulum", "playa-del-carmen", "akumal", "coba", "puerto-morelos"];
      const idx = t.hero.zones.indexOf(zona as typeof t.hero.zones[number]);
      if (idx > 0 && zoneSlugs[idx - 1]) params.set("zona", zoneSlugs[idx - 1]);
    }
    if (query) params.set("q", query);
    window.location.href = `/propiedades?${params.toString()}`;
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1920&h=1080&fit=crop&q=80"
          alt="Luxury property Riviera Maya"
          className="w-full h-full object-cover object-center animate-ken-burns"
        />
        {/* Gradiente oscuro encima */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/80" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20">
        {/* Eyebrow */}
        <p className="text-white/70 text-xs font-medium tracking-[0.25em] uppercase mb-5 animate-in fade-in duration-700">
          {t.hero.eyebrow}
        </p>

        {/* Headline */}
        <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          {t.hero.title}<br />
          <span className="text-white/90 italic">{t.hero.titleItalic}</span>
        </h1>

        {/* Tagline */}
        <p className="text-white/75 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-in fade-in duration-700 delay-200">
          {t.hero.tagline}
          <br className="hidden sm:block" />
          <span className="italic font-medium text-white/90"> {t.hero.taglineItalic}</span>
        </p>

        {/* Search bar */}
        <form
          onSubmit={handleSearch}
          className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300"
        >
          {/* Tabs operacion */}
          <div className="flex justify-center mb-0">
            {operaciones.map((op) => (
              <button
                key={op}
                type="button"
                onClick={() => setOperacion(op)}
                className={cn(
                  "px-6 py-2.5 text-sm font-semibold rounded-t-xl transition-all duration-200",
                  operacion === op
                    ? "bg-white text-navy"
                    : "bg-white/20 text-white hover:bg-white/30"
                )}
              >
                {op}
              </button>
            ))}
          </div>

          {/* Search panel */}
          <div className="bg-white rounded-b-2xl rounded-tr-2xl shadow-2xl p-4 sm:p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Tipo */}
              <div className="relative">
                <label className="block text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 px-1">
                  {t.hero.typeLabel}
                </label>
                <div className="relative">
                  <select
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                    className="w-full appearance-none bg-muted border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-blue/30 transition-all pr-10 cursor-pointer"
                  >
                    {tipos.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Zona */}
              <div className="relative">
                <label className="block text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 px-1">
                  {t.hero.zoneLabel}
                </label>
                <div className="relative">
                  <select
                    value={zona}
                    onChange={(e) => setZona(e.target.value)}
                    className="w-full appearance-none bg-muted border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-blue/30 transition-all pr-10 cursor-pointer"
                  >
                    {zonas.map((z) => (
                      <option key={z} value={z}>{z}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Búsqueda libre */}
              <div className="lg:col-span-1">
                <label className="block text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 px-1">
                  {t.hero.searchLabel}
                </label>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t.hero.searchPlaceholder}
                  className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue/30 transition-all"
                />
              </div>

              {/* CTA */}
              <div className="flex flex-col justify-end">
                <div className="hidden lg:block h-[22px]" /> {/* Spacer para alinear con labels */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-navy text-white py-3 px-6 rounded-xl text-sm font-semibold hover:bg-navy-light transition-colors duration-200"
                >
                  <Search className="w-4 h-4" />
                  {t.hero.searchBtn}
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Stats rápidos debajo del search */}
        <div className="flex items-center justify-center gap-8 mt-10 animate-in fade-in duration-700 delay-500">
          {[
            { end: 72, suffix: "+", label: t.hero.activeProperties },
            { end: 20, suffix: "+", label: t.hero.experience },
            { end: 500, suffix: "+", label: t.hero.clients },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-heading font-bold text-white">
                <CountUp end={stat.end} suffix={stat.suffix} />
              </p>
              <p className="text-white/60 text-xs mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce">
        <span className="text-white/50 text-xs tracking-widest uppercase">{t.hero.explore}</span>
        <ChevronDown className="w-4 h-4 text-white/50" />
      </div>
    </section>
  );
}
