"use client";

import { useState } from "react";
import { Save, CheckCircle } from "lucide-react";
import AdminHeader from "@/components/admin/admin-header";
import { cn } from "@/lib/utils";

const tabs = ["General", "Apariencia", "Contacto & Redes", "Equipo & Usuarios", "Integraciones"];

export default function AdminConfiguracionPage() {
  const [tab, setTab] = useState(0);
  const [saved, setSaved] = useState(false);

  const [config, setConfig] = useState({
    siteName: "Almar",
    tagline: "Real Estate with Soul",
    heroTitle: "Tu propiedad ideal en el Caribe Mexicano",
    heroSubtitle: "Casas, villas, departamentos y terrenos en Tulum, Playa del Carmen y toda la Riviera Maya.",
    primaryColor: "#043558",
    accentColor: "#3069aa",
    whatsapp: "529843121828",
    phone: "+52 984 312 1828",
    email: "hola@almarmx.com",
    address: "Tulum, Quintana Roo, México",
    instagram: "almarmx",
    facebook: "almarmx",
    youtube: "@almarmx",
    gaId: "G-XXXXXXXXXX",
    metaPixelId: "",
  });

  const set = (k: string, v: string) => setConfig({ ...config, [k]: v });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <AdminHeader title="Configuración" />
      <main className="flex-1 overflow-hidden flex flex-col">
        {/* Tabs */}
        <div className="bg-white border-b border-border px-6">
          <div className="flex gap-0 overflow-x-auto">
            {tabs.map((t, i) => (
              <button key={t} onClick={() => setTab(i)}
                className={cn("px-5 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors",
                  tab === i ? "border-navy text-navy" : "border-transparent text-muted-foreground hover:text-foreground")}>
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-2xl space-y-5">

            {/* Tab: General */}
            {tab === 0 && (
              <>
                <SectionTitle title="Información general del sitio" />
                <Field label="Nombre de la empresa">
                  <input value={config.siteName} onChange={(e) => set("siteName", e.target.value)} className="input" />
                </Field>
                <Field label="Tagline / Slogan">
                  <input value={config.tagline} onChange={(e) => set("tagline", e.target.value)} className="input" />
                </Field>
                <SectionTitle title="Hero del Home" />
                <Field label="Título principal del hero">
                  <input value={config.heroTitle} onChange={(e) => set("heroTitle", e.target.value)} className="input" />
                </Field>
                <Field label="Subtítulo / descripción">
                  <textarea value={config.heroSubtitle} onChange={(e) => set("heroSubtitle", e.target.value)}
                    rows={3} className="input resize-none" />
                </Field>
                <Field label="Imagen de fondo del hero">
                  <div className="border-2 border-dashed border-border rounded-xl p-6 text-center cursor-pointer hover:border-navy/40 transition-colors">
                    <p className="text-sm text-muted-foreground">Arrastra una imagen o haz clic para seleccionar</p>
                    <p className="text-xs text-muted-foreground mt-1">1920×1080px recomendado · JPG, PNG, WebP</p>
                  </div>
                </Field>
              </>
            )}

            {/* Tab: Apariencia */}
            {tab === 1 && (
              <>
                <SectionTitle title="Logo" />
                <div className="border-2 border-dashed border-border rounded-xl p-6 text-center cursor-pointer hover:border-navy/40 transition-colors">
                  <div className="flex items-baseline justify-center gap-[3px] mb-3">
                    <span className="font-heading text-2xl font-bold tracking-[0.18em] text-navy">ALMAR</span>
                    <span className="w-[5px] h-[5px] rounded-full bg-blue mb-[3px]" />
                  </div>
                  <p className="text-xs text-muted-foreground">Logo actual (texto). Sube una imagen para reemplazarlo.</p>
                  <button className="mt-3 px-4 py-1.5 border border-border rounded-full text-xs hover:bg-muted transition-colors">
                    Subir logo
                  </button>
                </div>
                <SectionTitle title="Colores de la marca" />
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Color primario (Navy)">
                    <div className="flex gap-2 items-center">
                      <input type="color" value={config.primaryColor} onChange={(e) => set("primaryColor", e.target.value)}
                        className="w-10 h-10 rounded-lg border border-border cursor-pointer" />
                      <input value={config.primaryColor} onChange={(e) => set("primaryColor", e.target.value)} className="input" />
                    </div>
                  </Field>
                  <Field label="Color acento (Azul)">
                    <div className="flex gap-2 items-center">
                      <input type="color" value={config.accentColor} onChange={(e) => set("accentColor", e.target.value)}
                        className="w-10 h-10 rounded-lg border border-border cursor-pointer" />
                      <input value={config.accentColor} onChange={(e) => set("accentColor", e.target.value)} className="input" />
                    </div>
                  </Field>
                </div>
              </>
            )}

            {/* Tab: Contacto & Redes */}
            {tab === 2 && (
              <>
                <SectionTitle title="Datos de contacto" />
                {[
                  { key: "whatsapp", label: "WhatsApp (solo números, con código de país)" },
                  { key: "phone", label: "Teléfono visible" },
                  { key: "email", label: "Correo de contacto" },
                  { key: "address", label: "Dirección de oficina" },
                ].map(({ key, label }) => (
                  <Field key={key} label={label}>
                    <input value={(config as Record<string, string>)[key]}
                      onChange={(e) => set(key, e.target.value)} className="input" />
                  </Field>
                ))}
                <SectionTitle title="Redes sociales" />
                {[
                  { key: "instagram", label: "Instagram (usuario sin @)" },
                  { key: "facebook", label: "Facebook (usuario o URL)" },
                  { key: "youtube", label: "YouTube (canal)" },
                ].map(({ key, label }) => (
                  <Field key={key} label={label}>
                    <input value={(config as Record<string, string>)[key]}
                      onChange={(e) => set(key, e.target.value)} className="input" />
                  </Field>
                ))}
              </>
            )}

            {/* Tab: Equipo & Usuarios */}
            {tab === 3 && (
              <>
                <SectionTitle title="Usuarios del sistema" />
                <div className="bg-white rounded-2xl border border-border divide-y divide-border">
                  {[
                    { name: "Paola Martínez", email: "pao@almarmx.com", role: "Admin" },
                    { name: "Carlos Reyes", email: "carlos@almarmx.com", role: "Agente" },
                    { name: "Sofía Herrera", email: "sofia@almarmx.com", role: "Agente" },
                  ].map((u) => (
                    <div key={u.email} className="flex items-center justify-between px-4 py-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">{u.name}</p>
                        <p className="text-xs text-muted-foreground">{u.email}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-semibold",
                          u.role === "Admin" ? "bg-navy/10 text-navy" : "bg-muted text-muted-foreground")}>
                          {u.role}
                        </span>
                        <button className="text-xs text-muted-foreground hover:text-navy transition-colors">Editar</button>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-full text-sm hover:bg-muted transition-colors">
                  + Invitar usuario
                </button>
              </>
            )}

            {/* Tab: Integraciones */}
            {tab === 4 && (
              <>
                <SectionTitle title="Analytics & Tracking" />
                <Field label="Google Analytics ID">
                  <input value={config.gaId} onChange={(e) => set("gaId", e.target.value)}
                    className="input" placeholder="G-XXXXXXXXXX" />
                </Field>
                <Field label="Meta Pixel ID">
                  <input value={config.metaPixelId} onChange={(e) => set("metaPixelId", e.target.value)}
                    className="input" placeholder="000000000000000" />
                </Field>
                <div className="bg-muted/50 rounded-2xl p-5 border border-border">
                  <p className="text-sm font-semibold text-foreground mb-1">Dominio personalizado</p>
                  <p className="text-xs text-muted-foreground mb-3">Conecta tu propio dominio (almarmx.com) a esta plataforma.</p>
                  <input className="input" placeholder="almarmx.com" />
                  <button className="mt-3 px-4 py-2 bg-navy text-white rounded-full text-xs font-semibold hover:bg-navy-light transition-colors">
                    Verificar dominio
                  </button>
                </div>
              </>
            )}

            {/* Save button */}
            <div className="pt-4 border-t border-border">
              <button onClick={handleSave}
                className={cn("flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all",
                  saved ? "bg-emerald-500 text-white" : "bg-navy text-white hover:bg-navy-light")}>
                {saved ? <><CheckCircle className="w-4 h-4" /> Guardado</> : <><Save className="w-4 h-4" /> Guardar cambios</>}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return <h3 className="font-heading font-bold text-navy text-base pt-2">{title}</h3>;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">{label}</label>
      {children}
    </div>
  );
}
