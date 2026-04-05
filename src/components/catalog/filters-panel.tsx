"use client";

import { X, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Filters {
  operacion: string;
  tipo: string;
  zona: string;
  precioMin: string;
  precioMax: string;
  recamaras: string;
  amenidades: string[];
}

const tipoOptions = ["Casa", "Departamento", "Villa", "Penthouse", "Terreno", "Local", "Oficina"];
const zonaOptions = ["Tulum", "Playa del Carmen", "Akumal", "Cobá", "Puerto Morelos"];
const recamaraOptions = ["1", "2", "3", "4", "5+"];
const amenidadOptions = [
  "Alberca",
  "Gym",
  "Pet-friendly",
  "Frente al mar",
  "Jardín",
  "Roof garden",
  "Seguridad 24h",
  "Vista al mar",
  "Palapa",
  "Jacuzzi",
];

interface FiltersPanelProps {
  filters: Filters;
  onChange: (f: Filters) => void;
  onClose?: () => void;
  isMobile?: boolean;
}

export default function FiltersPanel({ filters, onChange, onClose, isMobile }: FiltersPanelProps) {
  const set = (key: keyof Filters, value: string) =>
    onChange({ ...filters, [key]: value });

  const toggleAmenidad = (amenidad: string) => {
    const current = filters.amenidades;
    const next = current.includes(amenidad)
      ? current.filter((a) => a !== amenidad)
      : [...current, amenidad];
    onChange({ ...filters, amenidades: next });
  };

  const hasActiveFilters =
    filters.tipo ||
    filters.zona ||
    filters.precioMin ||
    filters.precioMax ||
    filters.recamaras ||
    filters.amenidades.length > 0;

  const reset = () =>
    onChange({
      operacion: filters.operacion,
      tipo: "",
      zona: "",
      precioMin: "",
      precioMax: "",
      recamaras: "",
      amenidades: [],
    });

  return (
    <div className={cn("bg-white", isMobile ? "h-full overflow-y-auto" : "rounded-2xl border border-border sticky top-24")}>
      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b border-border">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-navy" />
          <span className="font-semibold text-sm text-navy">Filtros</span>
          {hasActiveFilters && (
            <span className="w-5 h-5 rounded-full bg-blue text-white text-[10px] font-bold flex items-center justify-center">
              !
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {hasActiveFilters && (
            <button onClick={reset} className="text-xs text-muted-foreground hover:text-navy transition-colors">
              Limpiar
            </button>
          )}
          {isMobile && onClose && (
            <button onClick={onClose} className="p-1 rounded-md hover:bg-muted transition-colors">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <div className="p-5 space-y-6">
        {/* Operación */}
        <div>
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2.5">Operación</p>
          <div className="flex gap-2">
            {["Venta", "Renta"].map((op) => (
              <button
                key={op}
                onClick={() => set("operacion", filters.operacion === op.toLowerCase() ? "" : op.toLowerCase())}
                className={cn(
                  "flex-1 py-2 rounded-lg text-sm font-medium border transition-all",
                  filters.operacion === op.toLowerCase()
                    ? "bg-navy text-white border-navy"
                    : "bg-background border-border text-foreground hover:border-navy/40"
                )}
              >
                {op}
              </button>
            ))}
          </div>
        </div>

        {/* Tipo */}
        <div>
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2.5">Tipo de propiedad</p>
          <div className="flex flex-wrap gap-1.5">
            {tipoOptions.map((t) => (
              <button
                key={t}
                onClick={() => set("tipo", filters.tipo === t.toLowerCase() ? "" : t.toLowerCase())}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-medium border transition-all",
                  filters.tipo === t.toLowerCase()
                    ? "bg-navy text-white border-navy"
                    : "bg-background border-border text-foreground hover:border-navy/40"
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Zona */}
        <div>
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2.5">Zona</p>
          <div className="space-y-1.5">
            {zonaOptions.map((z) => (
              <label key={z} className="flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.zona === z.toLowerCase()}
                  onChange={() => set("zona", filters.zona === z.toLowerCase() ? "" : z.toLowerCase())}
                  className="w-4 h-4 rounded border-border accent-navy cursor-pointer"
                />
                <span className="text-sm text-foreground group-hover:text-navy transition-colors">{z}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Precio */}
        <div>
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2.5">Precio (MXN)</p>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Mín"
              value={filters.precioMin}
              onChange={(e) => set("precioMin", e.target.value)}
              className="flex-1 min-w-0 px-3 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue/30 bg-background"
            />
            <input
              type="number"
              placeholder="Máx"
              value={filters.precioMax}
              onChange={(e) => set("precioMax", e.target.value)}
              className="flex-1 min-w-0 px-3 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue/30 bg-background"
            />
          </div>
        </div>

        {/* Recámaras */}
        <div>
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2.5">Recámaras</p>
          <div className="flex gap-1.5">
            {recamaraOptions.map((r) => (
              <button
                key={r}
                onClick={() => set("recamaras", filters.recamaras === r ? "" : r)}
                className={cn(
                  "flex-1 py-2 rounded-lg text-sm font-medium border transition-all",
                  filters.recamaras === r
                    ? "bg-navy text-white border-navy"
                    : "bg-background border-border text-foreground hover:border-navy/40"
                )}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Amenidades */}
        <div>
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2.5">Amenidades</p>
          <div className="space-y-1.5">
            {amenidadOptions.map((a) => (
              <label key={a} className="flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.amenidades.includes(a)}
                  onChange={() => toggleAmenidad(a)}
                  className="w-4 h-4 rounded border-border accent-navy cursor-pointer"
                />
                <span className="text-sm text-foreground group-hover:text-navy transition-colors">{a}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
