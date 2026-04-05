"use client";

import { useState } from "react";
import { Search, Plus, Phone, Mail, MessageCircle, ChevronRight } from "lucide-react";
import AdminHeader from "@/components/admin/admin-header";
import { leads, agents, properties } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const statusConfig: Record<string, { label: string; color: string }> = {
  nuevo: { label: "Nuevo", color: "bg-blue/10 text-blue border-blue/20" },
  contactado: { label: "Contactado", color: "bg-amber-50 text-amber-700 border-amber-200" },
  "en-seguimiento": { label: "En seguimiento", color: "bg-purple-50 text-purple-700 border-purple-200" },
  negociacion: { label: "Negociación", color: "bg-orange-50 text-orange-700 border-orange-200" },
  cerrado: { label: "Cerrado", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  perdido: { label: "Perdido", color: "bg-red-50 text-red-500 border-red-200" },
};

const sourceLabels: Record<string, string> = {
  formulario: "Formulario", whatsapp: "WhatsApp", llamada: "Llamada",
  referido: "Referido", instagram: "Instagram", google: "Google",
};

export default function AdminLeadsPage() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = leads.filter((l) => {
    const matchSearch = !search ||
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.email.toLowerCase().includes(search.toLowerCase());
    const matchStatus = !filterStatus || l.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const selectedLead = leads.find((l) => l.id === selected);
  const selectedAgent = selectedLead ? agents.find((a) => a.id === selectedLead.agentId) : null;
  const selectedProp = selectedLead ? properties.find((p) => p.id === selectedLead.propertyId) : null;

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <AdminHeader title="Leads / CRM" />
      <main className="flex-1 overflow-hidden flex">

        {/* Lead list */}
        <div className={cn("flex flex-col border-r border-border bg-white overflow-hidden transition-all", selected ? "w-80 shrink-0" : "flex-1")}>
          {/* Toolbar */}
          <div className="p-4 border-b border-border space-y-3">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <input value={search} onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar lead..." className="input pl-8 py-2" />
              </div>
              <button className="w-9 h-9 bg-navy rounded-full flex items-center justify-center hover:bg-navy-light transition-colors shrink-0" title="Nuevo lead">
                <Plus className="w-4 h-4 text-white" />
              </button>
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-1">
              <button onClick={() => setFilterStatus("")}
                className={cn("px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap border transition-all",
                  !filterStatus ? "bg-navy text-white border-navy" : "bg-background border-border hover:border-navy/40")}>
                Todos ({leads.length})
              </button>
              {Object.entries(statusConfig).map(([k, v]) => (
                <button key={k} onClick={() => setFilterStatus(filterStatus === k ? "" : k)}
                  className={cn("px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap border transition-all",
                    filterStatus === k ? "bg-navy text-white border-navy" : "bg-background border-border hover:border-navy/40")}>
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto divide-y divide-border">
            {filtered.map((lead) => {
              const agent = agents.find((a) => a.id === lead.agentId);
              const status = statusConfig[lead.status];
              return (
                <button key={lead.id} onClick={() => setSelected(lead.id === selected ? null : lead.id)}
                  className={cn("w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-muted/40 transition-colors",
                    selected === lead.id && "bg-muted/60")}>
                  <div className="w-9 h-9 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
                    <span className="font-bold text-navy text-sm">{lead.name[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">{lead.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{lead.propertyTitle ?? sourceLabels[lead.source]}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <span className={cn("px-2 py-0.5 rounded-full text-[10px] font-semibold border", status.color)}>
                      {status.label}
                    </span>
                    <span className="text-[10px] text-muted-foreground">{lead.createdAt}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Lead detail panel */}
        {selectedLead ? (
          <div className="flex-1 overflow-y-auto bg-muted/20 p-6">
            <div className="max-w-xl space-y-5">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-heading text-xl font-bold text-navy">{selectedLead.name}</h2>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {sourceLabels[selectedLead.source]} · {selectedLead.createdAt}
                  </p>
                </div>
                <span className={cn("px-3 py-1 rounded-full text-xs font-semibold border", statusConfig[selectedLead.status].color)}>
                  {statusConfig[selectedLead.status].label}
                </span>
              </div>

              {/* Contact */}
              <div className="bg-white rounded-2xl border border-border p-5 space-y-3">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Contacto</p>
                <div className="space-y-2">
                  {selectedLead.phone && (
                    <a href={`tel:${selectedLead.phone}`} className="flex items-center gap-2.5 text-sm text-foreground hover:text-navy transition-colors">
                      <Phone className="w-4 h-4 text-navy" />{selectedLead.phone}
                    </a>
                  )}
                  <a href={`mailto:${selectedLead.email}`} className="flex items-center gap-2.5 text-sm text-foreground hover:text-navy transition-colors">
                    <Mail className="w-4 h-4 text-navy" />{selectedLead.email}
                  </a>
                  <a href={`https://wa.me/${selectedLead.phone?.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm text-[#25D366] hover:opacity-80 transition-opacity">
                    <MessageCircle className="w-4 h-4" />WhatsApp
                  </a>
                </div>
              </div>

              {/* Property */}
              {selectedProp && (
                <div className="bg-white rounded-2xl border border-border p-5">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Propiedad de interés</p>
                  <div className="flex items-center gap-3">
                    <img src={selectedProp.images[0]} alt={selectedProp.title} className="w-14 h-12 rounded-xl object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-navy line-clamp-1">{selectedProp.title}</p>
                      <p className="text-xs text-muted-foreground">{selectedProp.location.city}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Status */}
              <div className="bg-white rounded-2xl border border-border p-5">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Cambiar estatus</p>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(statusConfig).map(([k, v]) => (
                    <button key={k}
                      className={cn("px-3 py-1.5 rounded-full text-xs font-semibold border transition-all",
                        selectedLead.status === k ? "bg-navy text-white border-navy" : "bg-background border-border hover:border-navy/40")}>
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Agente */}
              <div className="bg-white rounded-2xl border border-border p-5">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Asignado a</p>
                {selectedAgent ? (
                  <div className="flex items-center gap-3">
                    <img src={selectedAgent.photo} alt={selectedAgent.name} className="w-9 h-9 rounded-full object-cover object-top" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{selectedAgent.name}</p>
                      <p className="text-xs text-muted-foreground">{selectedAgent.title}</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">Sin asignar</p>
                )}
                <select className="input mt-3 text-xs">
                  <option value="">Reasignar agente...</option>
                  {agents.map((a) => <option key={a.id} value={a.id}>{a.name}</option>)}
                </select>
              </div>

              {/* Notas */}
              <div className="bg-white rounded-2xl border border-border p-5">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Notas internas</p>
                {selectedLead.notes && (
                  <p className="text-sm text-foreground leading-relaxed bg-muted rounded-xl p-3 mb-3">{selectedLead.notes}</p>
                )}
                <textarea rows={3} placeholder="Agregar nota..."
                  className="input resize-none text-sm" />
                <button className="mt-2 px-4 py-2 bg-navy text-white rounded-full text-xs font-semibold hover:bg-navy-light transition-colors">
                  Guardar nota
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-muted/20">
            <div className="text-center">
              <ChevronRight className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">Selecciona un lead para ver el detalle</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
