"use client";

export default function NewsletterForm() {
  return (
    <form className="space-y-2.5" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="tu@correo.com"
        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-white/60 transition-colors"
      />
      <button
        type="submit"
        className="w-full px-4 py-3 bg-blue text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
      >
        Suscribirme
      </button>
    </form>
  );
}
