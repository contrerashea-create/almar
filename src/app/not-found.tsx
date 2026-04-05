import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 pt-20">
      <div className="text-center max-w-lg">
        <div className="mb-8">
          <p className="font-heading text-8xl font-bold text-navy/10 select-none">404</p>
          <div className="-mt-6">
            <div className="flex items-baseline justify-center gap-[3px]">
              <span className="font-heading text-2xl font-bold tracking-[0.18em] text-navy">ALMAR</span>
              <span className="w-[5px] h-[5px] rounded-full bg-blue mb-[3px]" />
            </div>
          </div>
        </div>
        <h1 className="font-heading text-2xl font-bold text-navy mb-3">
          Esta página no existe
        </h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          La página que buscas no existe o fue movida. Pero tenemos cientos de propiedades increíbles esperándote.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy text-white rounded-full text-sm font-semibold hover:bg-navy-light transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Ir al inicio
          </Link>
          <Link href="/propiedades"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-navy text-navy rounded-full text-sm font-semibold hover:bg-muted transition-colors">
            <Search className="w-4 h-4" />
            Ver propiedades
          </Link>
        </div>
      </div>
    </div>
  );
}
