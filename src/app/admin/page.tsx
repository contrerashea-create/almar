import { Building2, Users, TrendingUp, Eye, ArrowUpRight, ArrowRight, Clock } from "lucide-react";
import AdminHeader from "@/components/admin/admin-header";
import Link from "next/link";
import { properties, leads, analyticsData, agents, formatPrice } from "@/lib/mock-data";

const kpis = [
  {
    label: "Propiedades activas",
    value: properties.filter((p) => p.status === "disponible").length,
    sub: `${properties.filter((p) => p.status === "en-negociacion").length} en negociación`,
    icon: Building2,
    color: "bg-blue/10 text-blue",
    href: "/admin/propiedades",
  },
  {
    label: "Leads este mes",
    value: leads.filter((l) => l.createdAt >= "2026-04-01").length,
    sub: `${leads.filter((l) => l.status === "nuevo").length} nuevos sin contactar`,
    icon: Users,
    color: "bg-emerald-50 text-emerald-600",
    href: "/admin/leads",
  },
  {
    label: "Visitas hoy",
    value: analyticsData.weeklyVisits[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1]?.visits ?? 187,
    sub: "+12% vs ayer",
    icon: Eye,
    color: "bg-purple-50 text-purple-600",
    href: "/admin/analiticos",
  },
  {
    label: "Conversión",
    value: "3.2%",
    sub: "Visitas a leads",
    icon: TrendingUp,
    color: "bg-amber-50 text-amber-600",
    href: "/admin/analiticos",
  },
];

const statusColors: Record<string, string> = {
  nuevo: "bg-blue/10 text-blue",
  contactado: "bg-amber-50 text-amber-700",
  "en-seguimiento": "bg-purple-50 text-purple-700",
  negociacion: "bg-orange-50 text-orange-700",
  cerrado: "bg-emerald-50 text-emerald-700",
  perdido: "bg-red-50 text-red-500",
};

const statusLabels: Record<string, string> = {
  nuevo: "Nuevo", contactado: "Contactado", "en-seguimiento": "En seguimiento",
  negociacion: "Negociación", cerrado: "Cerrado", perdido: "Perdido",
};

export default function AdminDashboard() {
  const recentLeads = [...leads].sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 5);
  const topProps = analyticsData.topProperties.slice(0, 5);
  const maxVisits = Math.max(...analyticsData.weeklyVisits.map((d) => d.visits));

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <AdminHeader title="Dashboard" />
      <main className="flex-1 overflow-y-auto p-6 space-y-6">

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <Link
                key={kpi.label}
                href={kpi.href}
                className="bg-white rounded-2xl border border-border p-5 hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${kpi.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="font-heading text-2xl font-bold text-navy">{kpi.value}</p>
                <p className="text-xs font-medium text-foreground mt-0.5">{kpi.label}</p>
                <p className="text-[10px] text-muted-foreground mt-1">{kpi.sub}</p>
              </Link>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Gráfica de visitas semanales */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-border p-5">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="font-heading font-bold text-navy text-base">Visitas esta semana</h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Total: {analyticsData.weeklyVisits.reduce((s, d) => s + d.visits, 0).toLocaleString()}
                </p>
              </div>
              <Link href="/admin/analiticos" className="text-xs text-blue hover:underline flex items-center gap-1">
                Ver más <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            {/* Bar chart CSS */}
            <div className="flex items-end gap-2 h-32">
              {analyticsData.weeklyVisits.map((d) => (
                <div key={d.day} className="flex-1 flex flex-col items-center gap-1.5">
                  <span className="text-[10px] text-muted-foreground font-medium">{d.visits}</span>
                  <div
                    className="w-full bg-navy rounded-t-md transition-all hover:bg-blue"
                    style={{ height: `${(d.visits / maxVisits) * 100}%`, minHeight: "4px" }}
                  />
                  <span className="text-[10px] text-muted-foreground">{d.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fuentes de tráfico */}
          <div className="bg-white rounded-2xl border border-border p-5">
            <h2 className="font-heading font-bold text-navy text-base mb-4">Fuentes de tráfico</h2>
            <div className="space-y-3">
              {analyticsData.trafficSources.map((source) => (
                <div key={source.source}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-foreground font-medium">{source.source}</span>
                    <span className="text-muted-foreground">{source.percentage}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-navy rounded-full"
                      style={{ width: `${source.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-border">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Dispositivos</h3>
              {analyticsData.devices.map((d) => (
                <div key={d.device} className="flex items-center justify-between text-xs py-1">
                  <span className="text-foreground">{d.device}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-blue rounded-full" style={{ width: `${d.percentage}%` }} />
                    </div>
                    <span className="text-muted-foreground w-8 text-right">{d.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Últimos leads */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-border">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <h2 className="font-heading font-bold text-navy text-base">Últimos leads</h2>
              <Link href="/admin/leads" className="text-xs text-blue hover:underline flex items-center gap-1">
                Ver todos <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="divide-y divide-border">
              {recentLeads.map((lead) => {
                const agent = agents.find((a) => a.id === lead.agentId);
                return (
                  <div key={lead.id} className="flex items-center gap-4 px-5 py-3.5 hover:bg-muted/40 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
                      <span className="text-navy font-bold text-sm">{lead.name[0]}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">{lead.name}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        {lead.propertyTitle ?? "Sin propiedad específica"} · {lead.source}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${statusColors[lead.status]}`}>
                        {statusLabels[lead.status]}
                      </span>
                      {agent && (
                        <img src={agent.photo} alt={agent.name} className="w-6 h-6 rounded-full object-cover object-top" title={agent.name} />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Top propiedades */}
          <div className="bg-white rounded-2xl border border-border">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <h2 className="font-heading font-bold text-navy text-base">Más vistas</h2>
              <Link href="/admin/propiedades" className="text-xs text-blue hover:underline flex items-center gap-1">
                Ver todas <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="divide-y divide-border">
              {topProps.map((prop, i) => (
                <div key={prop.id} className="flex items-center gap-3 px-5 py-3">
                  <span className="w-5 text-xs font-bold text-muted-foreground">{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-foreground truncate">{prop.title}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                    <Eye className="w-3 h-3" />
                    {prop.views.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accesos rápidos */}
        <div className="bg-white rounded-2xl border border-border p-5">
          <h2 className="font-heading font-bold text-navy text-base mb-4">Accesos rápidos</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Nueva propiedad", href: "/admin/propiedades/nueva", color: "bg-navy text-white hover:bg-navy-light" },
              { label: "Ver leads nuevos", href: "/admin/leads?status=nuevo", color: "bg-blue/10 text-blue hover:bg-blue/20" },
              { label: "Nuevo artículo", href: "/admin/blog/nuevo", color: "bg-muted text-foreground hover:bg-border" },
              { label: "Configuración", href: "/admin/configuracion", color: "bg-muted text-foreground hover:bg-border" },
              { label: "Ver sitio público", href: "/", color: "bg-muted text-foreground hover:bg-border" },
            ].map(({ label, href, color }) => (
              <Link key={label} href={href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${color}`}>
                {label}
              </Link>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
