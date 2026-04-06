"use client";

import { useState } from "react";
import { CheckCircle, DollarSign, Users, TrendingUp, Send } from "lucide-react";
import { useLang } from "@/contexts/lang-context";

export default function AfiliadosPage() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", red: "" });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-3">{t.afiliados.eyebrow}</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            {t.afiliados.title}
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
            {t.afiliados.subtitle}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-background border-b border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: DollarSign, value: "12%", label: t.afiliados.commissionLabel },
              { icon: Users, value: t.afiliados.noLimitValue, label: t.afiliados.noLimitLabel },
              { icon: TrendingUp, value: t.afiliados.paymentValue, label: t.afiliados.paymentLabel },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center bg-white border border-border rounded-2xl p-6">
                <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-navy" />
                </div>
                <p className="font-heading text-2xl font-bold text-navy mb-1">{value}</p>
                <p className="text-muted-foreground text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-navy">{t.afiliados.howTitle}</h2>
          </div>
          <div className="space-y-4">
            {t.afiliados.steps.map((step, i) => (
              <div key={i} className="flex items-start gap-5 bg-white rounded-2xl border border-border p-6">
                <span className="font-heading text-4xl font-bold text-navy/20 shrink-0">0{i + 1}</span>
                <div>
                  <h3 className="font-heading font-bold text-navy text-lg mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registro */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold text-navy mb-2">{t.afiliados.formEyebrow}</h2>
            <p className="text-muted-foreground">{t.afiliados.formTitle}</p>
          </div>
          {sent ? (
            <div className="text-center py-10">
              <CheckCircle className="w-14 h-14 text-blue mx-auto mb-3" />
              <h3 className="font-heading text-xl font-bold text-navy mb-2">{t.afiliados.successTitle}</h3>
              <p className="text-muted-foreground">{t.afiliados.successDesc}</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="bg-white border border-border rounded-2xl p-7 space-y-4">
              {[
                { key: "nombre", label: t.afiliados.nameLabel, placeholder: t.afiliados.namePlaceholder, type: "text" },
                { key: "email", label: t.afiliados.emailLabel, placeholder: t.afiliados.emailPlaceholder, type: "email" },
                { key: "telefono", label: t.afiliados.phoneLabel, placeholder: t.afiliados.phonePlaceholder, type: "tel" },
              ].map(({ key, label, placeholder, type }) => (
                <div key={key}>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">{label} *</label>
                  <input required type={type} placeholder={placeholder}
                    value={(form as Record<string, string>)[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue/30" />
                </div>
              ))}
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">{t.afiliados.howReferLabel}</label>
                <select value={form.red} onChange={(e) => setForm({ ...form, red: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue/30 bg-background">
                  <option value="">{t.contacto.topicDefault}</option>
                  {t.afiliados.referOptions.map((opt) => <option key={opt}>{opt}</option>)}
                </select>
              </div>
              <button type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-navy text-white font-semibold rounded-xl hover:bg-navy-light transition-colors text-sm">
                <Send className="w-4 h-4" />
                {t.afiliados.submitBtn}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
