"use client";

import { useState, useMemo } from "react";
import { SlidersHorizontal, LayoutGrid, List, X, ChevronDown } from "lucide-react";
import { properties } from "@/lib/mock-data";
import PropertyCard from "@/components/shared/property-card";
import FiltersPanel, { Filters } from "@/components/catalog/filters-panel";
import { cn } from "@/lib/utils";
import { useCurrency } from "@/contexts/currency-context";

const defaultFilters: Filters = {
  operacion: "",
  tipo: "",
  zona: "",
  precioMin: "",
  precioMax: "",
  recamaras: "",
  amenidades: [],
};

const sortOptions = [
  { value: "reciente", label: "Más recientes" },
  { value: "precio-asc", label: "Precio: menor a mayor" },
  { value: "precio-desc", label: "Precio: mayor a menor" },
  { value: "vistas", label: "Más vistos" },
];

export default function PropiedadesPage() {
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [sort, setSort] = useState("reciente");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();

  const filtered = useMemo(() => {
    let result = properties.filter((p) => p.status !== "borrador");

    if (filters.operacion) result = result.filter((p) => p.operation === filters.operacion);
    if (filters.tipo) result = result.filter((p) => p.type === filters.tipo);
    if (filters.zona)
      result = result.filter((p) =>
        p.location.city.toLowerCase().includes(filters.zona) ||
        p.location.zone.toLowerCase().includes(filters.zona)
      );
    if (filters.precioMin) result = result.filter((p) => p.price >= Number(filters.precioMin));
    if (filters.precioMax) result = result.filter((p) => p.price <= Number(filters.precioMax));
    if (filters.recamaras) {
      const min = filters.recamaras === "5+" ? 5 : Number(filters.recamaras);
      result = result.filter((p) => p.specs.bedrooms >= min);
    }
    if (filters.amenidades.length > 0) {
      result = result.filter((p) =>
        filters.amenidades.every((a) =>
          p.amenities.some((pa) => pa.toLowerCase().includes(a.toLowerCase()))
        )
      );
    }

    switch (sort) {
      case "precio-asc": result.sort((a, b) => a.price - b.price); break;
      case "precio-desc": result.sort((a, b) => b.price - a.price); break;
      case "vistas": result.sort((a, b) => b.views - a.views); break;
      default: result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    return result;
  }, [filters, sort]);

  const activeCount = [
    filters.operacion, filters.tipo, filters.zona,
    filters.precioMin, filters.precioMax, filters.recamaras,
    ...filters.amenidades,
  ].filter(Boolean).length;

  return (
    <>
      {/* Page header */}
      <div className="pt-24 pb-8 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-2">Catálogo</p>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Propiedades en la Riviera Maya
          </h1>
          <p className="text-white/60 mt-2 text-base">
            Casas, villas, departamentos y terrenos en las mejores zonas.
          </p>
        </div>
      </div>

      {/* Main layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-6">

          {/* Sidebar — desktop */}
          <aside className="hidden lg:block w-64 xl:w-72 shrink-0">
            <FiltersPanel filters={filters} onChange={setFilters} />
          </aside>

          {/* Results */}
          <div className="flex-1 min-w-0">
            {/* Sort bar */}
            <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
              <div className="flex items-center gap-3">
                {/* Mobile filters button */}
                <button
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 border border-border rounded-full text-sm font-medium hover:border-navy/40 transition-colors"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filtros
                  {activeCount > 0 && (
                    <span className="w-5 h-5 rounded-full bg-navy text-white text-[10px] font-bold flex items-center justify-center">
                      {activeCount}
                    </span>
                  )}
                </button>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
                  {filtered.length === 1 ? "propiedad encontrada" : "propiedades encontradas"}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {/* Currency toggle */}
                <div className="flex border border-border rounded-full overflow-hidden text-xs font-semibold">
                  <button
                    onClick={() => setCurrency("MXN")}
                    className={cn(
                      "px-3 py-2 transition-colors",
                      currency === "MXN" ? "bg-navy text-white" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    MXN
                  </button>
                  <button
                    onClick={() => setCurrency("USD")}
                    className={cn(
                      "px-3 py-2 transition-colors",
                      currency === "USD" ? "bg-navy text-white" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    USD
                  </button>
                </div>

                {/* Sort */}
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="appearance-none pl-3 pr-8 py-2 border border-border rounded-full text-sm bg-background focus:outline-none focus:ring-2 focus:ring-blue/30 cursor-pointer"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
                </div>

                {/* View toggle */}
                <div className="flex border border-border rounded-full overflow-hidden">
                  <button
                    onClick={() => setView("grid")}
                    className={cn(
                      "px-3 py-2 transition-colors",
                      view === "grid" ? "bg-navy text-white" : "text-muted-foreground hover:text-foreground"
                    )}
                    aria-label="Vista grid"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setView("list")}
                    className={cn(
                      "px-3 py-2 transition-colors",
                      view === "list" ? "bg-navy text-white" : "text-muted-foreground hover:text-foreground"
                    )}
                    aria-label="Vista lista"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Active filters chips */}
            {activeCount > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                {filters.operacion && (
                  <FilterChip label={`Operación: ${filters.operacion}`} onRemove={() => setFilters({ ...filters, operacion: "" })} />
                )}
                {filters.tipo && (
                  <FilterChip label={`Tipo: ${filters.tipo}`} onRemove={() => setFilters({ ...filters, tipo: "" })} />
                )}
                {filters.zona && (
                  <FilterChip label={`Zona: ${filters.zona}`} onRemove={() => setFilters({ ...filters, zona: "" })} />
                )}
                {filters.precioMin && (
                  <FilterChip label={`Precio mín: $${Number(filters.precioMin).toLocaleString()}`} onRemove={() => setFilters({ ...filters, precioMin: "" })} />
                )}
                {filters.precioMax && (
                  <FilterChip label={`Precio máx: $${Number(filters.precioMax).toLocaleString()}`} onRemove={() => setFilters({ ...filters, precioMax: "" })} />
                )}
                {filters.recamaras && (
                  <FilterChip label={`${filters.recamaras} recámaras`} onRemove={() => setFilters({ ...filters, recamaras: "" })} />
                )}
                {filters.amenidades.map((a) => (
                  <FilterChip key={a} label={a} onRemove={() => setFilters({ ...filters, amenidades: filters.amenidades.filter((x) => x !== a) })} />
                ))}
                <button
                  onClick={() => setFilters(defaultFilters)}
                  className="text-xs text-muted-foreground hover:text-navy underline transition-colors"
                >
                  Limpiar todo
                </button>
              </div>
            )}

            {/* Grid / List */}
            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="text-4xl mb-4">🔍</p>
                <h3 className="font-heading font-semibold text-navy text-xl mb-2">Sin resultados</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Intenta ajustar o limpiar los filtros para ver más propiedades.
                </p>
                <button
                  onClick={() => setFilters(defaultFilters)}
                  className="px-6 py-2.5 bg-navy text-white rounded-full text-sm font-semibold hover:bg-navy-light transition-colors"
                >
                  Limpiar filtros
                </button>
              </div>
            ) : view === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filtered.map((p) => (
                  <PropertyCard key={p.id} property={p} className="flex-row sm:flex-row" />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl animate-in slide-in-from-right duration-300">
            <FiltersPanel
              filters={filters}
              onChange={setFilters}
              onClose={() => setMobileFiltersOpen(false)}
              isMobile
            />
            <div className="p-4 border-t border-border">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full py-3 bg-navy text-white rounded-full text-sm font-semibold hover:bg-navy-light transition-colors"
              >
                Ver {filtered.length} {filtered.length === 1 ? "propiedad" : "propiedades"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function FilterChip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span className="flex items-center gap-1.5 px-3 py-1 bg-navy/10 text-navy text-xs font-medium rounded-full">
      {label}
      <button onClick={onRemove} className="hover:text-navy/60 transition-colors">
        <X className="w-3 h-3" />
      </button>
    </span>
  );
}
