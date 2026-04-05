import AdminHeader from "@/components/admin/admin-header";
import { analyticsData, leads, properties } from "@/lib/mock-data";

const maxWeekly = Math.max(...analyticsData.weeklyVisits.map((d) => d.visits));
const maxMonthly = Math.max(...analyticsData.monthlyLeads.map((d) => d.leads));

export default function AdminAnaliticosPage() {
  const totalVisits = analyticsData.weeklyVisits.reduce((s, d) => s + d.visits, 0);
  const totalLeads = leads.length;
  const closedLeads = leads.filter((l) => l.status === "cerrado").length;
  const convRate = ((closedLeads / totalLeads) * 100).toFixed(1);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <AdminHeader title="Analíticos" />
      <main className="flex-1 overflow-y-auto p-6 space-y-6">

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Visitas esta semana", value: totalVisits.toLocaleString(), sub: "7 días" },
            { label: "Total leads", value: totalLeads, sub: `${leads.filter((l) => l.status === "nuevo").length} sin contactar` },
            { label: "Leads cerrados", value: closedLeads, sub: "Conversiones" },
            { label: "Tasa de conversión", value: `${convRate}%`, sub: "Leads → Cierre" },
          ].map((k) => (
            <div key={k.label} className="bg-white rounded-2xl border border-border p-5">
              <p className="font-heading text-2xl font-bold text-navy">{k.value}</p>
              <p className="text-sm font-medium text-foreground mt-0.5">{k.label}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{k.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Visitas semanales */}
          <div className="bg-white rounded-2xl border border-border p-5">
            <h2 className="font-heading font-bold text-navy mb-5">Visitas por día</h2>
            <div className="flex items-end gap-3 h-40">
              {analyticsData.weeklyVisits.map((d) => (
                <div key={d.day} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-[10px] text-muted-foreground font-medium">{d.visits}</span>
                  <div className="w-full bg-navy rounded-t-lg hover:bg-blue transition-colors"
                    style={{ height: `${(d.visits / maxWeekly) * 100}%`, minHeight: "6px" }} />
                  <span className="text-[10px] text-muted-foreground font-medium">{d.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Leads por mes */}
          <div className="bg-white rounded-2xl border border-border p-5">
            <h2 className="font-heading font-bold text-navy mb-5">Leads por mes</h2>
            <div className="flex items-end gap-3 h-40">
              {analyticsData.monthlyLeads.map((d) => (
                <div key={d.month} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-[10px] text-muted-foreground font-medium">{d.leads}</span>
                  <div className="w-full bg-blue rounded-t-lg"
                    style={{ height: `${(d.leads / maxMonthly) * 100}%`, minHeight: "6px" }} />
                  <span className="text-[10px] text-muted-foreground font-medium">{d.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Fuentes de tráfico */}
          <div className="bg-white rounded-2xl border border-border p-5">
            <h2 className="font-heading font-bold text-navy mb-4">Fuentes de tráfico</h2>
            <div className="space-y-4">
              {analyticsData.trafficSources.map((s) => (
                <div key={s.source}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-foreground">{s.source}</span>
                    <span className="text-muted-foreground">{s.percentage}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-navy rounded-full" style={{ width: `${s.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dispositivos */}
          <div className="bg-white rounded-2xl border border-border p-5">
            <h2 className="font-heading font-bold text-navy mb-4">Dispositivos</h2>
            <div className="space-y-4">
              {analyticsData.devices.map((d) => (
                <div key={d.device}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-foreground">{d.device}</span>
                    <span className="text-muted-foreground">{d.percentage}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-blue rounded-full" style={{ width: `${d.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leads por canal */}
          <div className="bg-white rounded-2xl border border-border p-5">
            <h2 className="font-heading font-bold text-navy mb-4">Leads por canal</h2>
            <div className="space-y-2">
              {(["formulario", "whatsapp", "instagram", "google", "referido", "llamada"] as const).map((source) => {
                const count = leads.filter((l) => l.source === source).length;
                const labels: Record<string, string> = {
                  formulario: "Formulario web", whatsapp: "WhatsApp", instagram: "Instagram",
                  google: "Google", referido: "Referido", llamada: "Llamada directa",
                };
                return (
                  <div key={source} className="flex items-center justify-between py-1.5">
                    <span className="text-sm text-foreground">{labels[source]}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-navy rounded-full" style={{ width: `${(count / leads.length) * 100}%` }} />
                      </div>
                      <span className="text-xs text-muted-foreground w-4">{count}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Top propiedades */}
        <div className="bg-white rounded-2xl border border-border">
          <div className="px-5 py-4 border-b border-border">
            <h2 className="font-heading font-bold text-navy">Propiedades más vistas</h2>
          </div>
          <div className="divide-y divide-border">
            {analyticsData.topProperties.map((prop, i) => {
              const p = properties.find((x) => x.id === prop.id);
              return (
                <div key={prop.id} className="flex items-center gap-4 px-5 py-3.5">
                  <span className="w-6 text-sm font-bold text-muted-foreground">{i + 1}</span>
                  {p && (
                    <img src={p.images[0]} alt={p.title} className="w-10 h-8 rounded-lg object-cover shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">{prop.title}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-sm font-bold text-navy">{prop.views.toLocaleString()}</p>
                    <p className="text-[10px] text-muted-foreground">visitas</p>
                  </div>
                  <div className="w-24 h-1.5 bg-muted rounded-full overflow-hidden shrink-0">
                    <div className="h-full bg-navy rounded-full"
                      style={{ width: `${(prop.views / analyticsData.topProperties[0].views) * 100}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </main>
    </div>
  );
}
