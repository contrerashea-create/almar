"use client";

import { useState } from "react";
import { Plus, Phone, Mail, Building2, Award, Edit2 } from "lucide-react";
import AdminHeader from "@/components/admin/admin-header";
import { agents, properties, leads } from "@/lib/mock-data";

export default function AdminAgentesPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <AdminHeader title="Agentes" />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{agents.length}</span> agentes en el equipo
          </p>
          <button onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-full text-sm font-semibold hover:bg-navy-light transition-colors">
            <Plus className="w-4 h-4" /> Agregar agente
          </button>
        </div>

        {/* Add form */}
        {showForm && (
          <div className="bg-white rounded-2xl border border-border p-6 mb-6">
            <h3 className="font-heading font-bold text-navy mb-4">Nuevo agente</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Nombre completo", placeholder: "Nombre Apellido" },
                { label: "Cargo / Título", placeholder: "Ej: Asesor Senior" },
                { label: "Teléfono", placeholder: "+52 000 000 0000" },
                { label: "Email", placeholder: "agente@almarmx.com" },
              ].map(({ label, placeholder }) => (
                <div key={label}>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">{label}</label>
                  <input className="input" placeholder={placeholder} />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">Bio</label>
                <textarea rows={3} className="input resize-none" placeholder="Breve descripción profesional..." />
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="px-5 py-2 bg-navy text-white rounded-full text-sm font-semibold hover:bg-navy-light transition-colors">
                Guardar agente
              </button>
              <button onClick={() => setShowForm(false)} className="px-5 py-2 border border-border rounded-full text-sm hover:bg-muted transition-colors">
                Cancelar
              </button>
            </div>
          </div>
        )}

        {/* Agents grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {agents.map((agent) => {
            const agentProps = properties.filter((p) => p.agentId === agent.id);
            const agentLeads = leads.filter((l) => l.agentId === agent.id);
            const openLeads = agentLeads.filter((l) => !["cerrado", "perdido"].includes(l.status));

            return (
              <div key={agent.id} className="bg-white rounded-2xl border border-border overflow-hidden">
                {/* Cover photo */}
                <div className="relative h-40 bg-muted overflow-hidden">
                  <img src={agent.photo} alt={agent.name} className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Edit2 className="w-3.5 h-3.5 text-navy" />
                  </button>
                </div>

                <div className="p-5">
                  <p className="text-blue text-xs font-semibold uppercase tracking-wider mb-0.5">{agent.title}</p>
                  <h3 className="font-heading font-bold text-navy text-lg mb-1">{agent.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">{agent.bio}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[
                      { icon: Building2, value: agentProps.length, label: "Propiedades" },
                      { icon: Award, value: agent.closedDeals, label: "Cierres" },
                      { icon: Mail, value: openLeads.length, label: "Leads abiertos" },
                    ].map(({ icon: Icon, value, label }) => (
                      <div key={label} className="bg-muted rounded-xl p-2.5 text-center">
                        <p className="font-bold text-navy text-base">{value}</p>
                        <p className="text-[10px] text-muted-foreground leading-tight">{label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Contact */}
                  <div className="flex gap-2">
                    <a href={`tel:${agent.phone}`}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 border border-border rounded-xl text-xs font-medium hover:bg-muted transition-colors">
                      <Phone className="w-3.5 h-3.5" /> Llamar
                    </a>
                    <a href={`mailto:${agent.email}`}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 border border-border rounded-xl text-xs font-medium hover:bg-muted transition-colors">
                      <Mail className="w-3.5 h-3.5" /> Email
                    </a>
                    <a href={`https://wa.me/${agent.whatsapp}`} target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl text-xs font-medium text-[#25D366] hover:bg-[#25D366]/20 transition-colors">
                      WA
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
