import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Bed, Bath, Maximize2, MapPin, Car, Calendar, Building2,
  Heart, Phone, MessageCircle, ArrowLeft, CheckCircle2
} from "lucide-react";
import {
  getPropertyBySlug, getAgentById, getSimilarProperties, formatPrice,
} from "@/lib/mock-data";
import Gallery from "@/components/property/gallery";
import MortgageCalculator from "@/components/property/mortgage-calculator";
import PropertyCard from "@/components/shared/property-card";
import StickyContactBar from "@/components/property/sticky-contact-bar";
import SaveButton from "@/components/property/save-button";
import ShareButton from "@/components/property/share-button";
import type { Metadata } from "next";

const typeLabels: Record<string, string> = {
  casa: "Casa", departamento: "Departamento", penthouse: "Penthouse",
  villa: "Villa", terreno: "Terreno", local: "Local", oficina: "Oficina",
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return { title: "Propiedad no encontrada" };
  return {
    title: `${property.title} — ${property.location.zone}`,
    description: property.description,
    openGraph: {
      title: property.title,
      description: property.description,
      images: property.images.slice(0, 1),
    },
  };
}

export default async function PropertyDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  const agent = getAgentById(property.agentId);
  const similar = getSimilarProperties(property, 3);

  const whatsappMsg = encodeURIComponent(
    `Hola Almar, me interesa la propiedad: ${property.title}. ¿Pueden darme más información?`
  );

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.title,
    description: property.description,
    url: `https://almarmx.com/propiedades/${property.slug}`,
    image: property.images,
    price: property.price,
    priceCurrency: property.currency,
    address: {
      "@type": "PostalAddress",
      addressLocality: property.location.zone,
      addressRegion: property.location.state,
      addressCountry: "MX",
    },
    ...(property.specs.bedrooms > 0 && { numberOfRooms: property.specs.bedrooms }),
    ...(property.specs.constructionM2 > 0 && {
      floorSize: {
        "@type": "QuantitativeValue",
        value: property.specs.constructionM2,
        unitCode: "MTK",
      },
    }),
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-secondary/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-navy transition-colors">Inicio</Link>
          <span>/</span>
          <Link href="/propiedades" className="hover:text-navy transition-colors">Propiedades</Link>
          <span>/</span>
          <span className="text-foreground font-medium truncate">{property.title}</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 pb-28 lg:pb-8">
        {/* Back */}
        <Link href="/propiedades" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" />
          Volver al catálogo
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: contenido principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <Gallery images={property.images} title={property.title} />

            {/* Header info */}
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-navy text-white text-xs font-bold uppercase tracking-wider rounded-full">
                  {property.operation === "venta" ? "Venta" : "Renta"}
                </span>
                <span className="px-3 py-1 bg-muted text-foreground text-xs font-medium rounded-full">
                  {typeLabels[property.type]}
                </span>
                {property.featured && (
                  <span className="px-3 py-1 bg-blue text-white text-xs font-medium rounded-full">
                    Destacada
                  </span>
                )}
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-2 leading-tight">
                {property.title}
              </h1>

              <div className="flex items-center gap-1.5 text-muted-foreground mb-5">
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="text-sm">
                  {property.location.zone}, {property.location.city}, {property.location.state}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
                {property.specs.bedrooms > 0 && (
                  <span className="flex items-center gap-1.5">
                    <Bed className="w-4 h-4 text-navy" />
                    <strong className="text-foreground">{property.specs.bedrooms}</strong> recámaras
                  </span>
                )}
                {property.specs.bathrooms > 0 && (
                  <span className="flex items-center gap-1.5">
                    <Bath className="w-4 h-4 text-navy" />
                    <strong className="text-foreground">{property.specs.bathrooms}</strong> baños
                  </span>
                )}
                {property.specs.constructionM2 > 0 && (
                  <span className="flex items-center gap-1.5">
                    <Maximize2 className="w-4 h-4 text-navy" />
                    <strong className="text-foreground">{property.specs.constructionM2}</strong> m² const.
                  </span>
                )}
                {property.specs.landM2 && (
                  <span className="flex items-center gap-1.5">
                    <Maximize2 className="w-4 h-4 text-navy" />
                    <strong className="text-foreground">{property.specs.landM2.toLocaleString()}</strong> m² terreno
                  </span>
                )}
              </div>

              {/* Precio mobile */}
              <div className="lg:hidden bg-navy rounded-2xl p-5 mb-6">
                <p className="text-white/60 text-xs mb-1">
                  {property.operation === "renta" ? "Renta mensual" : "Precio de venta"}
                </p>
                <p className="font-heading text-3xl font-bold text-white">
                  {formatPrice(property.price, property.currency)}
                </p>
                {property.priceUSD && (
                  <p className="text-white/50 text-sm mt-1">≈ {formatPrice(property.priceUSD, "USD")}</p>
                )}
                <div className="flex gap-2 mt-4">
                  <a
                    href={`https://wa.me/${agent?.whatsapp}?text=${whatsappMsg}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#25D366] text-white text-sm font-semibold rounded-xl hover:bg-[#20BA5C] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${agent?.phone}`}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/10 border border-white/20 text-white text-sm font-semibold rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Llamar
                  </a>
                </div>
              </div>
            </div>

            {/* Descripción */}
            <div>
              <h2 className="font-heading text-xl font-bold text-navy mb-3">Descripción</h2>
              <p className="text-muted-foreground leading-relaxed">{property.description}</p>
            </div>

            {/* Ficha técnica */}
            <div>
              <h2 className="font-heading text-xl font-bold text-navy mb-4">Ficha técnica</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { icon: Building2, label: "Tipo", value: typeLabels[property.type] },
                  { icon: Maximize2, label: "Const.", value: property.specs.constructionM2 ? `${property.specs.constructionM2} m²` : "—" },
                  { icon: Maximize2, label: "Terreno", value: property.specs.landM2 ? `${property.specs.landM2.toLocaleString()} m²` : "—" },
                  { icon: Bed, label: "Recámaras", value: property.specs.bedrooms || "—" },
                  { icon: Bath, label: "Baños", value: property.specs.bathrooms || "—" },
                  { icon: Car, label: "Estacionamientos", value: property.specs.parkingSpots || "—" },
                  { icon: Building2, label: "Niveles", value: property.specs.levels || "—" },
                  { icon: Calendar, label: "Antigüedad", value: property.specs.age || "—" },
                  { icon: CheckCircle2, label: "Amueblado", value: property.specs.furnished === "si" ? "Sí" : property.specs.furnished === "no" ? "No" : "Opcional" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="bg-muted rounded-xl p-3.5 flex items-start gap-3">
                    <Icon className="w-4 h-4 text-navy mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">{label}</p>
                      <p className="text-sm font-semibold text-foreground mt-0.5">{String(value)}</p>
                    </div>
                  </div>
                ))}
                {property.specs.maintenance && (
                  <div className="bg-muted rounded-xl p-3.5 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-navy mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">Mantenimiento</p>
                      <p className="text-sm font-semibold text-foreground mt-0.5">{formatPrice(property.specs.maintenance, "MXN")}/mes</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Amenidades */}
            {property.amenities.length > 0 && (
              <div>
                <h2 className="font-heading text-xl font-bold text-navy mb-4">Amenidades</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {property.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-blue shrink-0" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mapa (placeholder) */}
            <div>
              <h2 className="font-heading text-xl font-bold text-navy mb-4">Ubicación</h2>
              <div className="aspect-[16/7] bg-muted rounded-2xl overflow-hidden flex items-center justify-center border border-border">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-navy/30 mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">{property.location.zone}, {property.location.city}</p>
                  <p className="text-xs text-muted-foreground/60 mt-1">Mapa disponible al contactar al agente</p>
                </div>
              </div>
            </div>

            {/* Calculadora */}
            {property.operation === "venta" && (
              <MortgageCalculator propertyPrice={property.price} />
            )}
          </div>

          {/* Right: sticky sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              {/* Precio card */}
              <div className="bg-navy rounded-2xl p-6">
                <p className="text-white/60 text-xs mb-1">
                  {property.operation === "renta" ? "Renta mensual" : "Precio de venta"}
                </p>
                <p className="font-heading text-3xl font-bold text-white mb-1">
                  {formatPrice(property.price, property.currency)}
                </p>
                {property.priceUSD && (
                  <p className="text-white/50 text-sm mb-5">≈ {formatPrice(property.priceUSD, "USD")}</p>
                )}

                <div className="space-y-2">
                  <a
                    href={`https://wa.me/${agent?.whatsapp}?text=${whatsappMsg}`}
                    target="_blank" rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white text-sm font-semibold rounded-xl hover:bg-[#20BA5C] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Contactar por WhatsApp
                  </a>
                  <a
                    href={`tel:${agent?.phone}`}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-white/10 border border-white/20 text-white text-sm font-semibold rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Llamar al agente
                  </a>
                  <Link
                    href="/contacto"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-white text-navy text-sm font-semibold rounded-xl hover:bg-white/90 transition-colors"
                  >
                    Agendar visita
                  </Link>
                </div>

                <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-white/10">
                  <SaveButton propertyId={property.id} />
                  <ShareButton
                    title={property.title}
                    price={formatPrice(property.price, property.currency)}
                  />
                </div>
              </div>

              {/* Agente */}
              {agent && (
                <div className="bg-white rounded-2xl border border-border p-5">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Tu agente</p>
                  <div className="flex items-center gap-3 mb-4">
                    <img src={agent.photo} alt={agent.name} className="w-12 h-12 rounded-full object-cover object-top" />
                    <div>
                      <p className="font-semibold text-navy text-sm">{agent.name}</p>
                      <p className="text-xs text-muted-foreground">{agent.title}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 text-xs font-medium">
                    <div className="flex-1 bg-muted rounded-lg p-2.5 text-center">
                      <p className="font-bold text-navy text-base">{agent.propertiesCount}</p>
                      <p className="text-muted-foreground">Activas</p>
                    </div>
                    <div className="flex-1 bg-muted rounded-lg p-2.5 text-center">
                      <p className="font-bold text-navy text-base">{agent.closedDeals}</p>
                      <p className="text-muted-foreground">Cierres</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Similar properties */}
        {similar.length > 0 && (
          <div className="mt-16 pb-24 lg:pb-0">
            <h2 className="font-heading text-2xl font-bold text-navy mb-6">Propiedades similares</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {similar.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky mobile CTA */}
      <StickyContactBar
        propertyId={property.id}
        whatsappHref={`https://wa.me/${agent?.whatsapp}?text=${whatsappMsg}`}
        phoneHref={`tel:${agent?.phone}`}
        price={formatPrice(property.price, property.currency)}
      />
    </div>
    </>
  );
}
