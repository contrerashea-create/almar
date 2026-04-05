"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AlmarLogo from "@/components/ui/almar-logo";
import { Eye, EyeOff, Loader2 } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        setError("Correo o contraseña incorrectos.");
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("Error de conexión. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy flex">
      {/* Left panel — decorativo */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&h=900&fit=crop&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          <AlmarLogo variant="compact" theme="light" />
          <div>
            <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-3">
              Plataforma de gestión
            </p>
            <h2 className="font-heading text-3xl font-bold text-white leading-tight mb-4">
              Administra tus propiedades,<br />leads y agentes
            </h2>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Acceso exclusivo para el equipo Almar Real Estate.
            </p>
          </div>
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} Almar Real Estate</p>
        </div>
      </div>

      {/* Right panel — formulario */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          {/* Logo mobile */}
          <div className="lg:hidden mb-8 flex justify-center">
            <AlmarLogo variant="compact" theme="light" />
          </div>

          <h1 className="font-heading text-2xl font-bold text-white mb-1">
            Iniciar sesión
          </h1>
          <p className="text-white/50 text-sm mb-8">
            Ingresa tus credenciales de administrador.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-white/50 uppercase tracking-widest mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@almarmx.com"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-white/50 uppercase tracking-widest mb-2">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-blue text-white font-semibold rounded-xl hover:bg-blue/90 transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Verificando...
                </>
              ) : (
                "Entrar al panel"
              )}
            </button>
          </form>

          <p className="text-center text-white/30 text-xs mt-8">
            ¿Problemas para acceder? Contacta a{" "}
            <a href="mailto:jorge@almarmx.com" className="text-white/50 hover:text-white transition-colors">
              jorge@almarmx.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
