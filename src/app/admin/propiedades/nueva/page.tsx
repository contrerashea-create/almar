"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Upload, X, ArrowLeft, Save, Eye } from "lucide-react";
import AdminHeader from "@/components/admin/admin-header";
import Link from "next/link";
import { agents } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const amenidadOptions = [
  "Alberca privada", "Alberca comunitaria", "Gym", "Roof garden",
  "Jardín tropical", "Palapa", "Jacuzzi", "Vista al mar", "Frente al mar",
  "Seguridad 24h", "Pet-friendly", "Concierge", "Valet parking",
  "Cocina equipada", "Cuarto de servicio", "Bodega",
];

const tabs = ["General", "Ubicación", "Características", "Fotos & Media", "Publicación"];

export default function NuevaPropiedadPage() {
  const router = useRouter();
  const [tab, setTab] = useState(0);
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    title: "", description: "", type: "casa", operation: "venta",
    price: "", currency: "MXN",
    zone: "", city: "", state: "Quintana Roo",
    bedrooms: "", bathrooms: "", parking: "", constructionM2: "", landM2: "",
    levels: "", age: "", furnished: "no", maintenance: "",
    amenities: [] as string[],
    agentId: agents[0].id,
    status: "borrador", featured: false,
    videoUrl: "", tourUrl: "",
  });

  const set = (k: string, v: string | boolean | string[]) => setForm({ ...form, [k]: v });

  const toggleAmenidad = (a: string) => {
    const current = form.amenities;
    set("amenities", current.includes(a) ? current.filter((x) => x !== a) : [...current, a]);
  };

  const handleSave = (status = "borrador") => {
    setSaved(true);
    setTimeout(() => router.push("/admin/propiedades"), 800);
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <AdminHeader title="Nueva propiedad" />
      <main className="flex-1 overflow-y-auto">
        {/* Tabs */}
        <div className="bg-white border-b border-border px-6">
          <div className="flex gap-0 overflow-x-auto">
            {tabs.map((t, i) => (
              <button key={t} onClick={() => setTab(i)}
                className={cn(
                  "px-5 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors",
                  tab === i
                    ? "border-navy text-navy"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}>
                {i + 1}. {t}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 max-w-4xl mx-auto">
          {/* Tab: General */}
          {tab === 0 && (
            <div className="space-y-5">
              <Field label="Título de la propiedad *">
                <input value={form.title} onChange={(e) => set("title", e.target.value)}
                  className="input" placeholder="Ej: Villa Hacienda — Tulum Centro" />
              </Field>
              <Field label="Descripción *">
                <textarea value={form.description} onChange={(e) => set("description", e.target.value)}
                  rows={5} className="input resize-none"
                  placeholder="Describe la propiedad de forma atractiva..." />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Tipo de propiedad">
                  <select value={form.type} onChange={(e) => set("type", e.target.value)} className="input">
                    {["casa", "departamento", "villa", "penthouse", "terreno", "local", "oficina"].map((t) => (
                      <option key={t} value={t} className="capitalize">{t.charAt(0).toUpperCase() + t.slice(1)}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Operación">
                  <div className="flex gap-2">
                    {["venta", "renta"].map((op) => (
                      <button key={op} onClick={() => set("operation", op)}
                        className={cn("flex-1 py-2.5 rounded-xl text-sm font-medium border transition-all capitalize",
                          form.operation === op ? "bg-navy text-white border-navy" : "bg-background border-border hover:border-navy/40")}>
                        {op.charAt(0).toUpperCase() + op.slice(1)}
                      </button>
                    ))}
                  </div>
                </Field>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Precio *">
                  <input type="number" value={form.price} onChange={(e) => set("price", e.target.value)}
                    className="input" placeholder="0" />
                </Field>
                <Field label="Moneda">
                  <div className="flex gap-2">
                    {["MXN", "USD"].map((c) => (
                      <button key={c} onClick={() => set("currency", c)}
                        className={cn("flex-1 py-2.5 rounded-xl text-sm font-semibold border transition-all",
                          form.currency === c ? "bg-navy text-white border-navy" : "bg-background border-border hover:border-navy/40")}>
                        {c}
                      </button>
                    ))}
                  </div>
                </Field>
              </div>
            </div>
          )}

          {/* Tab: Ubicación */}
          {tab === 1 && (
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <Field label="Zona / Colonia">
                  <input value={form.zone} onChange={(e) => set("zone", e.target.value)}
                    className="input" placeholder="Ej: Aldea Zamá" />
                </Field>
                <Field label="Ciudad / Municipio">
                  <input value={form.city} onChange={(e) => set("city", e.target.value)}
                    className="input" placeholder="Ej: Tulum" />
                </Field>
              </div>
              <Field label="Estado">
                <select value={form.state} onChange={(e) => set("state", e.target.value)} className="input">
                  {["Quintana Roo", "Yucatán", "Campeche", "Otro"].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </Field>
              <div className="bg-muted rounded-2xl h-48 flex items-center justify-center border border-border">
                <p className="text-sm text-muted-foreground">Mapa de ubicación — disponible en versión con base de datos</p>
              </div>
            </div>
          )}

          {/* Tab: Características */}
          {tab === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { key: "bedrooms", label: "Recámaras" },
                  { key: "bathrooms", label: "Baños" },
                  { key: "parking", label: "Estacionamientos" },
                  { key: "constructionM2", label: "M² construcción" },
                  { key: "landM2", label: "M² terreno" },
                  { key: "levels", label: "Niveles" },
                ].map(({ key, label }) => (
                  <Field key={key} label={label}>
                    <input type="number" min="0"
                      value={(form as unknown as Record<string, string>)[key]}
                      onChange={(e) => set(key, e.target.value)}
                      className="input" placeholder="0" />
                  </Field>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Antigüedad">
                  <input value={form.age} onChange={(e) => set("age", e.target.value)}
                    className="input" placeholder="Ej: Nuevo, 3 años..." />
                </Field>
                <Field label="Amueblado">
                  <select value={form.furnished} onChange={(e) => set("furnished", e.target.value)} className="input">
                    <option value="no">No</option>
                    <option value="si">Sí</option>
                    <option value="opcional">Opcional</option>
                  </select>
                </Field>
              </div>
              <Field label="Mantenimiento mensual (MXN)">
                <input type="number" value={form.maintenance} onChange={(e) => set("maintenance", e.target.value)}
                  className="input" placeholder="0" />
              </Field>

              {/* Amenidades */}
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Amenidades</label>
                <div className="flex flex-wrap gap-2">
                  {amenidadOptions.map((a) => (
                    <button key={a} onClick={() => toggleAmenidad(a)}
                      className={cn("px-3 py-1.5 rounded-full text-xs font-medium border transition-all",
                        form.amenities.includes(a)
                          ? "bg-navy text-white border-navy"
                          : "bg-background border-border hover:border-navy/40")}>
                      {a}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab: Fotos & Media */}
          {tab === 3 && (
            <div className="space-y-6">
              {/* Upload zone */}
              <div className="border-2 border-dashed border-border rounded-2xl p-10 text-center hover:border-navy/40 transition-colors cursor-pointer bg-muted/30">
                <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                <p className="text-sm font-medium text-foreground mb-1">Arrastra fotos aquí o haz clic para seleccionar</p>
                <p className="text-xs text-muted-foreground">JPG, PNG, WebP · Máx 10MB por foto · Mín 1200x800px recomendado</p>
                <button className="mt-4 px-5 py-2 bg-navy text-white rounded-full text-sm font-semibold hover:bg-navy-light transition-colors">
                  Seleccionar fotos
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field label="URL de video (YouTube / Vimeo)">
                  <input value={form.videoUrl} onChange={(e) => set("videoUrl", e.target.value)}
                    className="input" placeholder="https://youtube.com/..." />
                </Field>
                <Field label="Link tour 360° (Matterport)">
                  <input value={form.tourUrl} onChange={(e) => set("tourUrl", e.target.value)}
                    className="input" placeholder="https://matterport.com/..." />
                </Field>
              </div>
            </div>
          )}

          {/* Tab: Publicación */}
          {tab === 4 && (
            <div className="space-y-5">
              <Field label="Agente responsable">
                <select value={form.agentId} onChange={(e) => set("agentId", e.target.value)} className="input">
                  {agents.map((a) => <option key={a.id} value={a.id}>{a.name} — {a.title}</option>)}
                </select>
              </Field>
              <Field label="Estatus de publicación">
                <div className="flex flex-wrap gap-2">
                  {[
                    { v: "borrador", l: "Borrador" },
                    { v: "disponible", l: "Publicado" },
                    { v: "en-negociacion", l: "En negociación" },
                    { v: "vendida", l: "Vendida" },
                  ].map(({ v, l }) => (
                    <button key={v} onClick={() => set("status", v)}
                      className={cn("px-4 py-2 rounded-xl text-sm font-medium border transition-all",
                        form.status === v ? "bg-navy text-white border-navy" : "bg-background border-border hover:border-navy/40")}>
                      {l}
                    </button>
                  ))}
                </div>
              </Field>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={form.featured}
                  onChange={(e) => set("featured", e.target.checked)}
                  className="w-4 h-4 accent-navy" />
                <span className="text-sm font-medium text-foreground">Marcar como propiedad destacada (aparece en el Home)</span>
              </label>

              {/* Preview summary */}
              <div className="bg-muted rounded-2xl p-5 mt-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Resumen</p>
                <div className="space-y-1.5 text-sm">
                  <p><span className="text-muted-foreground">Título:</span> {form.title || "—"}</p>
                  <p><span className="text-muted-foreground">Tipo:</span> {form.type} · {form.operation}</p>
                  <p><span className="text-muted-foreground">Precio:</span> {form.price ? `$${Number(form.price).toLocaleString()} ${form.currency}` : "—"}</p>
                  <p><span className="text-muted-foreground">Ubicación:</span> {form.zone || "—"}, {form.city || "—"}</p>
                  <p><span className="text-muted-foreground">Amenidades:</span> {form.amenities.length} seleccionadas</p>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between mt-8 pt-5 border-t border-border">
            <div className="flex gap-2">
              {tab > 0 && (
                <button onClick={() => setTab(tab - 1)}
                  className="flex items-center gap-2 px-4 py-2 border border-border rounded-full text-sm hover:bg-muted transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Anterior
                </button>
              )}
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleSave("borrador")}
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-full text-sm hover:bg-muted transition-colors">
                <Save className="w-4 h-4" /> Guardar borrador
              </button>
              {tab < tabs.length - 1 ? (
                <button onClick={() => setTab(tab + 1)}
                  className="px-5 py-2 bg-navy text-white rounded-full text-sm font-semibold hover:bg-navy-light transition-colors">
                  Siguiente →
                </button>
              ) : (
                <button onClick={() => handleSave("disponible")}
                  className={cn(
                    "flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-colors",
                    saved ? "bg-emerald-500 text-white" : "bg-navy text-white hover:bg-navy-light"
                  )}>
                  {saved ? "¡Publicado!" : <><Eye className="w-4 h-4" /> Publicar</>}
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">{label}</label>
      {children}
    </div>
  );
}
