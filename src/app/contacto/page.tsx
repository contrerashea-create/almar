"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactoPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "", interes: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-3">Estamos aquí</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">Hablemos</h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            Si tienes una propiedad en mente o apenas estás evaluando opciones, escríbenos.
            Respondemos en menos de 2 horas.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-bold text-navy">Información de contacto</h2>
              {[
                { icon: Phone, label: "Teléfono", value: "+52 984 312 1828", href: "tel:+529843121828" },
                { icon: Mail, label: "Correo", value: "hola@almarmx.com", href: "mailto:hola@almarmx.com" },
                { icon: MapPin, label: "Oficina", value: "Tulum, Quintana Roo, México", href: "#" },
                { icon: Clock, label: "Horario", value: "Lun–Vie 9am–7pm · Sáb 10am–3pm", href: "#" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center shrink-0 group-hover:bg-navy group-hover:text-white transition-all">
                    <Icon className="w-5 h-5 text-navy group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{label}</p>
                    <p className="text-foreground font-medium mt-0.5">{value}</p>
                  </div>
                </a>
              ))}

              <div className="pt-4 border-t border-border">
                <p className="text-sm font-semibold text-navy mb-3">¿Prefieres WhatsApp?</p>
                <a
                  href="https://wa.me/529843121828"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-sm font-semibold rounded-full hover:bg-[#20BA5C] transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Escribirnos ahora
                </a>
              </div>
            </div>

            {/* Formulario */}
            <div className="lg:col-span-2">
              {sent ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-blue mx-auto mb-4" />
                    <h3 className="font-heading text-2xl font-bold text-navy mb-2">¡Mensaje enviado!</h3>
                    <p className="text-muted-foreground">
                      Gracias por contactarnos. Te responderemos en menos de 2 horas.
                    </p>
                    <button
                      onClick={() => { setSent(false); setForm({ nombre: "", email: "", telefono: "", mensaje: "", interes: "" }); }}
                      className="mt-6 px-6 py-2.5 bg-navy text-white rounded-full text-sm font-semibold hover:bg-navy-light transition-colors"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-border rounded-2xl p-7 space-y-5">
                  <h2 className="font-heading text-xl font-bold text-navy">Formulario de contacto</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">Nombre *</label>
                      <input required value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                        className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue/30" placeholder="Tu nombre completo" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">Teléfono</label>
                      <input value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                        className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue/30" placeholder="+52 000 000 0000" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">Correo electrónico *</label>
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue/30" placeholder="tu@correo.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">¿En qué te podemos ayudar?</label>
                    <select value={form.interes} onChange={(e) => setForm({ ...form, interes: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue/30 bg-background">
                      <option value="">Selecciona una opción</option>
                      <option>Quiero comprar una propiedad</option>
                      <option>Quiero vender mi propiedad</option>
                      <option>Busco renta mensual</option>
                      <option>Busco invertir</option>
                      <option>Tengo una propiedad para rentar</option>
                      <option>Otra consulta</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">Mensaje *</label>
                    <textarea required rows={5} value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue/30 resize-none"
                      placeholder="Cuéntanos qué estás buscando, tu presupuesto, zona de interés..." />
                  </div>
                  <button type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-navy text-white font-semibold rounded-xl hover:bg-navy-light transition-colors text-sm">
                    <Send className="w-4 h-4" />
                    Enviar mensaje
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    Al enviar, aceptas nuestra{" "}
                    <a href="/privacidad" className="text-navy hover:underline">política de privacidad</a>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
