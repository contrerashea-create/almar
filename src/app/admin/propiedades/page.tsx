"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Search, Eye, Edit2, Archive, Copy, Bed, Bath, Maximize2 } from "lucide-react";
import AdminHeader from "@/components/admin/admin-header";
import { properties, formatPrice, getAgentById } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const statusConfig: Record<string, { label: string; color: string }> = {
  disponible: { label: "Disponible", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  "en-negociacion": { label: "En negociación", color: "bg-amber-50 text-amber-700 border-amber-200" },
  vendida: { label: "Vendida", color: "bg-blue/10 text-blue border-blue/20" },
  rentada: { label: "Rentada", color: "bg-purple-50 text-purple-700 border-purple-200" },
  borrador: { label: "Borrador", color: "bg-muted text-muted-foreground border-border" },
};

const typeLabels: Record<string, string> = {
  casa: "Casa", departamento: "Depto", penthouse: "Penthouse",
  villa: "Villa", terreno: "Terreno", local: "Local", oficina: "Oficina",
};

export default function AdminPropiedadesPage() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterOp, setFilterOp] = useState("");

  const filtered = properties.filter((p) => {
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.location.city.toLowerCase().includes(search.toLowerCase());
    const matchStatus = !filterStatus || p.status === filterStatus;
    const matchOp = !filterOp || p.operation === filterOp;
    return matchSearch && matchStatus && matchOp;
  });

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <AdminHeader title="Propiedades" />
      <main className="flex-1 overflow-y-auto p-6">

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2 flex-wrap">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
              <input
                value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar propiedad..."
                className="pl-8 pr-4 py-2 border border-border rounded-full text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue/30 w-52"
              />
            </div>
            {/* Status filter */}
            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-border rounded-full text-sm bg-white focus:outline-none cursor-pointer">
              <option value="">Todos los estatus</option>
              {Object.entries(statusConfig).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
            </select>
            {/* Operation filter */}
            <select value={filterOp} onChange={(e) => setFilterOp(e.target.value)}
              className="px-3 py-2 border border-border rounded-full text-sm bg-white focus:outline-none cursor-pointer">
              <option value="">Venta y Renta</option>
              <option value="venta">Solo Venta</option>
              <option value="renta">Solo Renta</option>
            </select>
          </div>
          <Link href="/admin/propiedades/nueva"
            className="flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-full text-sm font-semibold hover:bg-navy-light transition-colors shrink-0">
            <Plus className="w-4 h-4" /> Nueva propiedad
          </Link>
        </div>

        {/* Count */}
        <p className="text-xs text-muted-foreground mb-4">
          <span className="font-semibold text-foreground">{filtered.length}</span> propiedades
        </p>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Propiedad</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">Tipo / Op.</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden lg:table-cell">Precio</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Estatus</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden xl:table-cell">Agente</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden lg:table-cell">Vistas</th>
                  <th className="px-4 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filtered.map((p) => {
                  const agent = getAgentById(p.agentId);
                  const status = statusConfig[p.status];
                  return (
                    <tr key={p.id} className="hover:bg-muted/30 transition-colors group">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-10 rounded-lg overflow-hidden bg-muted shrink-0">
                            <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground text-sm leading-tight line-clamp-1">{p.title}</p>
                            <p className="text-xs text-muted-foreground">{p.location.city}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        <p className="text-sm text-foreground">{typeLabels[p.type]}</p>
                        <p className="text-xs text-muted-foreground capitalize">{p.operation}</p>
                      </td>
                      <td className="px-4 py-3 hidden lg:table-cell">
                        <p className="text-sm font-semibold text-navy">{formatPrice(p.price, p.currency)}</p>
                      </td>
                      <td className="px-4 py-3">
                        <span className={cn("px-2.5 py-1 rounded-full text-[10px] font-semibold border", status.color)}>
                          {status.label}
                        </span>
                      </td>
                      <td className="px-4 py-3 hidden xl:table-cell">
                        {agent && (
                          <div className="flex items-center gap-2">
                            <img src={agent.photo} alt={agent.name} className="w-6 h-6 rounded-full object-cover object-top" />
                            <span className="text-xs text-foreground">{agent.name.split(" ")[0]}</span>
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-3 hidden lg:table-cell text-xs text-muted-foreground">
                        {p.views.toLocaleString()}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity justify-end">
                          <Link href={`/propiedades/${p.slug}`} target="_blank"
                            className="w-7 h-7 rounded-lg hover:bg-muted flex items-center justify-center" title="Ver en sitio">
                            <Eye className="w-3.5 h-3.5 text-muted-foreground" />
                          </Link>
                          <Link href={`/admin/propiedades/${p.id}`}
                            className="w-7 h-7 rounded-lg hover:bg-muted flex items-center justify-center" title="Editar">
                            <Edit2 className="w-3.5 h-3.5 text-muted-foreground" />
                          </Link>
                          <button className="w-7 h-7 rounded-lg hover:bg-muted flex items-center justify-center" title="Duplicar">
                            <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                          </button>
                          <button className="w-7 h-7 rounded-lg hover:bg-muted flex items-center justify-center" title="Archivar">
                            <Archive className="w-3.5 h-3.5 text-muted-foreground" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
