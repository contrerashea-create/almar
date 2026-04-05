// ─────────────────────────────────────────────
// ALMAR — Mock Data (sin base de datos)
// ─────────────────────────────────────────────

export type PropertyType =
  | "casa"
  | "departamento"
  | "penthouse"
  | "villa"
  | "terreno"
  | "local"
  | "oficina";

export type OperationType = "venta" | "renta";

export type PropertyStatus =
  | "disponible"
  | "en-negociacion"
  | "vendida"
  | "rentada"
  | "borrador";

export interface Property {
  id: string;
  slug: string;
  title: string;
  description: string;
  type: PropertyType;
  operation: OperationType;
  status: PropertyStatus;
  featured: boolean;
  price: number;
  currency: "MXN" | "USD";
  priceUSD?: number;
  location: {
    zone: string;
    city: string;
    state: string;
    coordinates: { lat: number; lng: number };
  };
  specs: {
    bedrooms: number;
    bathrooms: number;
    halfBathrooms: number;
    parkingSpots: number;
    constructionM2: number;
    landM2?: number;
    levels?: number;
    age?: string;
    furnished?: "si" | "no" | "opcional";
    maintenance?: number;
  };
  amenities: string[];
  images: string[];
  videoUrl?: string;
  tourUrl?: string;
  agentId: string;
  views: number;
  createdAt: string;
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  bio: string;
  phone: string;
  whatsapp: string;
  email: string;
  photo: string;
  propertiesCount: number;
  closedDeals: number;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  propertyId?: string;
  propertyTitle?: string;
  source: "formulario" | "whatsapp" | "llamada" | "referido" | "instagram" | "google";
  status: "nuevo" | "contactado" | "en-seguimiento" | "negociacion" | "cerrado" | "perdido";
  agentId?: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: "mercado" | "consejos" | "noticias" | "destinos" | "lifestyle";
  author: string;
  authorPhoto: string;
  publishedAt: string;
  readingTime: number;
  published: boolean;
}

// ─── AGENTES ───────────────────────────────────

export const agents: Agent[] = [
  {
    id: "agent-1",
    name: "Jorge Cuesta del Castillo",
    title: "Founder & CEO",
    bio: "Con 24 años de trayectoria en bienes raíces, Jorge fundó Almar Real Estate tras liderar operaciones en JLL y desarrollar proyectos residenciales y comerciales en México y la Riviera Maya. Licenciado en Administración por el ITESM y miembro de ULI México.",
    phone: "+52 984 312 1828",
    whatsapp: "529843121828",
    email: "jorge@almarmx.com",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    propertiesCount: 38,
    closedDeals: 210,
  },
  {
    id: "agent-2",
    name: "Camila Bertonatti",
    title: "Co-Founder & VP Operations",
    bio: "Originaria de Rosario, Argentina, Camila combina su formación en relaciones públicas y ceremonial (EIP Madrid, 2011) con años de experiencia en hospitalidad y ventas residenciales de lujo en la Riviera Maya. Especialista en el concepto ROW — Return of Wellness.",
    phone: "+52 984 312 1828",
    whatsapp: "529843121828",
    email: "camila@almarmx.com",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    propertiesCount: 30,
    closedDeals: 145,
  },
  {
    id: "agent-3",
    name: "Sofía Herrera",
    title: "Senior Sales Advisor",
    bio: "Bilingüe (español-inglés), Sofía atiende a clientes nacionales e internacionales que buscan su propiedad ideal en la Riviera Maya, Cancún y Los Cabos.",
    phone: "+52 984 312 1828",
    whatsapp: "529843121828",
    email: "sofia@almarmx.com",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    propertiesCount: 15,
    closedDeals: 56,
  },
];

// ─── PROPIEDADES ───────────────────────────────

export const properties: Property[] = [
  {
    id: "prop-1",
    slug: "villa-hacienda-tulum",
    title: "Villa Hacienda — Tulum Centro",
    description:
      "Impresionante villa de diseño contemporáneo inspirada en la arquitectura mexicana tradicional. Rodeada de vegetación tropical, ofrece total privacidad y una alberca desbordante con vista al jardín. Acabados de lujo, sala de meditación y terraza gourmet.",
    type: "villa",
    operation: "venta",
    status: "disponible",
    featured: true,
    price: 12500000,
    currency: "MXN",
    priceUSD: 680000,
    location: {
      zone: "Tulum Centro",
      city: "Tulum",
      state: "Quintana Roo",
      coordinates: { lat: 20.2114, lng: -87.4654 },
    },
    specs: {
      bedrooms: 4,
      bathrooms: 4,
      halfBathrooms: 1,
      parkingSpots: 2,
      constructionM2: 380,
      landM2: 650,
      levels: 2,
      age: "Nuevo",
      furnished: "opcional",
    },
    amenities: [
      "Alberca privada",
      "Jardín tropical",
      "Terraza gourmet",
      "Sala de meditación",
      "Cocina equipada",
      "Cuarto de servicio",
      "Bodega",
      "Sistema de seguridad",
    ],
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    agentId: "agent-1",
    views: 1247,
    createdAt: "2026-01-15",
  },
  {
    id: "prop-2",
    slug: "penthouse-playa-del-carmen",
    title: "Penthouse Selva — Playa del Carmen",
    description:
      "Penthouse exclusivo en el corazón de Playa del Carmen. Tres niveles de lujo con roof garden privado, jacuzzi y vista panorámica a la Quinta Avenida y el Mar Caribe. Diseño vanguardista con materiales naturales.",
    type: "penthouse",
    operation: "venta",
    status: "disponible",
    featured: true,
    price: 8900000,
    currency: "MXN",
    priceUSD: 485000,
    location: {
      zone: "Centro",
      city: "Playa del Carmen",
      state: "Quintana Roo",
      coordinates: { lat: 20.6296, lng: -87.0739 },
    },
    specs: {
      bedrooms: 3,
      bathrooms: 3,
      halfBathrooms: 1,
      parkingSpots: 2,
      constructionM2: 280,
      levels: 3,
      age: "Nuevo",
      furnished: "si",
      maintenance: 4500,
    },
    amenities: [
      "Roof garden privado",
      "Jacuzzi",
      "Vista al mar",
      "Alberca comunitaria",
      "Gym",
      "Concierge 24h",
      "Valet parking",
      "Sala de eventos",
    ],
    images: [
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
    ],
    agentId: "agent-1",
    views: 892,
    createdAt: "2026-01-28",
  },
  {
    id: "prop-3",
    slug: "casa-aldea-tulum",
    title: "Casa Aldea — Aldea Zamá, Tulum",
    description:
      "Casa en uno de los fraccionamientos más exclusivos de Tulum. Diseño bioclimático con techo palapa, materiales naturales y perfecta integración con la selva. Amenidades de resort en una comunidad cerrada y segura.",
    type: "casa",
    operation: "venta",
    status: "disponible",
    featured: true,
    price: 6800000,
    currency: "MXN",
    priceUSD: 370000,
    location: {
      zone: "Aldea Zamá",
      city: "Tulum",
      state: "Quintana Roo",
      coordinates: { lat: 20.2356, lng: -87.4567 },
    },
    specs: {
      bedrooms: 3,
      bathrooms: 2,
      halfBathrooms: 1,
      parkingSpots: 1,
      constructionM2: 210,
      landM2: 350,
      levels: 1,
      age: "3 años",
      furnished: "opcional",
      maintenance: 3200,
    },
    amenities: [
      "Alberca",
      "Jardín",
      "Palapa",
      "Área de yoga",
      "Senderos en la selva",
      "Seguridad 24h",
      "Pet-friendly",
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&h=800&fit=crop",
    ],
    agentId: "agent-2",
    views: 764,
    createdAt: "2026-02-05",
  },
  {
    id: "prop-4",
    slug: "departamento-la-veleta-tulum",
    title: "Departamento Moderno — La Veleta, Tulum",
    description:
      "Departamento de diseño en la zona residencial más cotizada de Tulum. Acabados premium, cocina integral y terraza privada con vista a la selva. Excelente oportunidad de inversión con alta plusvalía.",
    type: "departamento",
    operation: "venta",
    status: "disponible",
    featured: false,
    price: 3950000,
    currency: "MXN",
    priceUSD: 215000,
    location: {
      zone: "La Veleta",
      city: "Tulum",
      state: "Quintana Roo",
      coordinates: { lat: 20.2089, lng: -87.4612 },
    },
    specs: {
      bedrooms: 2,
      bathrooms: 2,
      halfBathrooms: 0,
      parkingSpots: 1,
      constructionM2: 110,
      levels: 1,
      age: "Nuevo",
      furnished: "si",
      maintenance: 2100,
    },
    amenities: [
      "Alberca comunitaria",
      "Rooftop lounge",
      "Gym",
      "Pet-friendly",
      "Seguridad 24h",
      "Lobby boutique",
    ],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop",
    ],
    agentId: "agent-3",
    views: 543,
    createdAt: "2026-02-12",
  },
  {
    id: "prop-5",
    slug: "terreno-zona-hotelera-tulum",
    title: "Terreno Privilegiado — Zona Hotelera Tulum",
    description:
      "Terreno plano de uso mixto en la Zona Hotelera de Tulum, a 800m de la playa. Ideal para desarrollo de boutique hotel, complejo residencial o proyecto de glamping. Servicios disponibles y excelente accesibilidad.",
    type: "terreno",
    operation: "venta",
    status: "disponible",
    featured: false,
    price: 5200000,
    currency: "MXN",
    priceUSD: 283000,
    location: {
      zone: "Zona Hotelera",
      city: "Tulum",
      state: "Quintana Roo",
      coordinates: { lat: 20.1823, lng: -87.4456 },
    },
    specs: {
      bedrooms: 0,
      bathrooms: 0,
      halfBathrooms: 0,
      parkingSpots: 0,
      constructionM2: 0,
      landM2: 1200,
    },
    amenities: ["Uso de suelo mixto", "Servicios conectados", "Acceso pavimentado"],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
    ],
    agentId: "agent-2",
    views: 389,
    createdAt: "2026-02-18",
  },
  {
    id: "prop-6",
    slug: "casa-playa-akumal",
    title: "Casa Frente al Mar — Akumal",
    description:
      "Joya frente al mar en la bahía más tranquila de la Riviera Maya. Acceso directo a la playa de arena blanca, arrecife de coral en tu jardín y snorkel con tortugas. La propiedad perfecta para vivir o rentar.",
    type: "casa",
    operation: "venta",
    status: "en-negociacion",
    featured: true,
    price: 18500000,
    currency: "MXN",
    priceUSD: 1008000,
    location: {
      zone: "Akumal",
      city: "Akumal",
      state: "Quintana Roo",
      coordinates: { lat: 20.3957, lng: -87.3156 },
    },
    specs: {
      bedrooms: 5,
      bathrooms: 5,
      halfBathrooms: 2,
      parkingSpots: 3,
      constructionM2: 520,
      landM2: 1800,
      levels: 2,
      age: "8 años",
      furnished: "si",
    },
    amenities: [
      "Frente al mar",
      "Playa privada",
      "Alberca infinita",
      "Palapa",
      "Cuarto de servicio",
      "Cocina gourmet",
      "Bodega de kayaks",
      "Sistema de seguridad",
    ],
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=800&fit=crop",
    ],
    agentId: "agent-1",
    views: 2341,
    createdAt: "2025-12-10",
  },
  {
    id: "prop-7",
    slug: "departamento-renta-playa",
    title: "Depto Amueblado — 5ta Avenida, Playa del Carmen",
    description:
      "Departamento completamente amueblado y equipado, ideal para renta mensual o de temporada. A una cuadra de la Quinta Avenida y 3 cuadras del mar. Amenidades de primer nivel en edificio boutique.",
    type: "departamento",
    operation: "renta",
    status: "disponible",
    featured: false,
    price: 28000,
    currency: "MXN",
    location: {
      zone: "Centro",
      city: "Playa del Carmen",
      state: "Quintana Roo",
      coordinates: { lat: 20.6312, lng: -87.0754 },
    },
    specs: {
      bedrooms: 1,
      bathrooms: 1,
      halfBathrooms: 0,
      parkingSpots: 1,
      constructionM2: 65,
      levels: 1,
      age: "2 años",
      furnished: "si",
      maintenance: 0,
    },
    amenities: [
      "Alberca",
      "Gym",
      "Rooftop",
      "Amueblado completo",
      "Netflix incluido",
      "Internet fibra óptica",
      "Lavadora",
      "Seguridad 24h",
    ],
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop",
    ],
    agentId: "agent-3",
    views: 612,
    createdAt: "2026-03-01",
  },
  {
    id: "prop-8",
    slug: "villa-maya-coba",
    title: "Villa Zen — Cobá, Quintana Roo",
    description:
      "Extraordinaria villa en medio de la selva maya, a 10 minutos de las ruinas de Cobá. Diseño completamente off-grid con paneles solares, captación de agua de lluvia y huerto orgánico. Una experiencia de vida única.",
    type: "villa",
    operation: "venta",
    status: "disponible",
    featured: false,
    price: 7200000,
    currency: "MXN",
    priceUSD: 392000,
    location: {
      zone: "Cobá",
      city: "Cobá",
      state: "Quintana Roo",
      coordinates: { lat: 20.4912, lng: -87.7234 },
    },
    specs: {
      bedrooms: 3,
      bathrooms: 3,
      halfBathrooms: 0,
      parkingSpots: 2,
      constructionM2: 290,
      landM2: 5000,
      levels: 1,
      age: "5 años",
      furnished: "si",
    },
    amenities: [
      "Off-grid solar",
      "Cenote privado",
      "Huerto orgánico",
      "Palapa principal",
      "Senderos naturales",
      "Pet-friendly",
      "Vista a la selva",
    ],
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop",
    ],
    agentId: "agent-2",
    views: 445,
    createdAt: "2026-01-20",
  },
];

// ─── LEADS ─────────────────────────────────────

export const leads: Lead[] = [
  {
    id: "lead-1",
    name: "Roberto Álvarez",
    email: "roberto@email.com",
    phone: "+52 55 1234 5678",
    propertyId: "prop-1",
    propertyTitle: "Villa Hacienda — Tulum Centro",
    source: "formulario",
    status: "en-seguimiento",
    agentId: "agent-1",
    notes: "Interesado en invertir. Tiene budget aprobado. Quiere visita este mes.",
    createdAt: "2026-03-28",
    updatedAt: "2026-04-01",
  },
  {
    id: "lead-2",
    name: "Sarah Johnson",
    email: "sarah@johnson.us",
    phone: "+1 305 987 6543",
    propertyId: "prop-6",
    propertyTitle: "Casa Frente al Mar — Akumal",
    source: "google",
    status: "negociacion",
    agentId: "agent-1",
    notes: "Cliente americana. Habla español. Oferta inicial enviada. Revisando con abogado.",
    createdAt: "2026-03-15",
    updatedAt: "2026-04-02",
  },
  {
    id: "lead-3",
    name: "Miguel Torres",
    email: "m.torres@empresa.mx",
    phone: "+52 81 2345 6789",
    propertyId: "prop-2",
    propertyTitle: "Penthouse Selva — Playa del Carmen",
    source: "instagram",
    status: "contactado",
    agentId: "agent-3",
    notes: "Vio el penthouse en Instagram. Quiere más fotos y video tour.",
    createdAt: "2026-04-01",
    updatedAt: "2026-04-01",
  },
  {
    id: "lead-4",
    name: "Ana García",
    email: "ana.garcia@gmail.com",
    phone: "+52 998 456 7890",
    source: "whatsapp",
    status: "nuevo",
    notes: "Busca casa o depto para renta en PDC. Hasta $30k/mes.",
    createdAt: "2026-04-03",
    updatedAt: "2026-04-03",
  },
  {
    id: "lead-5",
    name: "David Chen",
    email: "d.chen@investments.com",
    phone: "+1 213 555 0192",
    source: "referido",
    status: "cerrado",
    agentId: "agent-2",
    propertyId: "prop-5",
    propertyTitle: "Terreno Privilegiado — Zona Hotelera Tulum",
    notes: "Referido por Roberto Álvarez. Cerró en $5M. Excelente cliente.",
    createdAt: "2026-02-10",
    updatedAt: "2026-03-05",
  },
];

// ─── BLOG POSTS ────────────────────────────────

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    slug: "por-que-invertir-tulum-2026",
    title: "¿Por qué Tulum sigue siendo la mejor inversión inmobiliaria de 2026?",
    excerpt:
      "El Tren Maya, el nuevo aeropuerto internacional y la consolidación del destino como referente mundial del turismo de bienestar siguen impulsando la plusvalía en Tulum.",
    content: `
## La apuesta que no decepciona

Tulum ha dejado de ser el secreto de pocos. Con más de 2 millones de visitantes al año y una tasa de ocupación hotelera superior al 85%, el mercado inmobiliario sigue creciendo a un ritmo que pocos destinos en el mundo pueden igualar.

## El impacto del Tren Maya

La conectividad transformó el mercado. Desde que el Tren Maya comenzó operaciones, los tiempos de traslado desde el aeropuerto internacional de Cancún se redujeron a menos de 90 minutos, y el nuevo aeropuerto de Tulum ya opera con vuelos directos desde CDMX, Miami y Houston.

## Números que hablan solos

- Plusvalía promedio anual: **18-24%**
- Retorno por renta vacacional: **8-12% anual**
- Tiempo promedio de ocupación: **270 noches/año**

## ¿Dónde invertir en Tulum?

Las zonas con mayor potencial de crecimiento siguen siendo La Veleta, Aldea Zamá y la Zona Hotelera. Para inversión en renta, el Centro y los accesos a la zona arqueológica ofrecen la mejor relación precio-retorno.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1200&h=600&fit=crop",
    category: "mercado",
    author: "Paola Martínez",
    authorPhoto:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
    publishedAt: "2026-03-15",
    readingTime: 5,
    published: true,
  },
  {
    id: "blog-2",
    slug: "guia-comprar-propiedad-extranjero-mexico",
    title: "Guía completa para extranjeros que quieren comprar propiedad en México",
    excerpt:
      "Fideicomiso, zona restringida, notario, escrituración... todo lo que necesitas saber antes de tomar la decisión más importante de tu vida.",
    content: `
## ¿Pueden los extranjeros comprar en México?

Sí, con ciertas condiciones. La ley mexicana establece una "zona restringida" de 50km de la costa y 100km de las fronteras donde los extranjeros no pueden ser dueños directos de inmuebles. Sin embargo, esto se resuelve fácilmente mediante un **fideicomiso bancario**.

## ¿Qué es el fideicomiso?

El fideicomiso es un contrato con un banco mexicano que actúa como "trustee" o fiduciario. El banco es el propietario legal del inmueble, pero tú eres el beneficiario con todos los derechos de uso, disfrute, venta y herencia. Es completamente legal, seguro y utilizado por miles de extranjeros.

## Costos adicionales a considerar

- Fideicomiso: ~$500-800 USD/año de mantenimiento
- Gastos de escrituración: ~4-6% del valor de la propiedad
- Impuesto de adquisición (ISAI): ~2% del valor catastral
- Honorarios del notario: incluidos en gastos de escrituración
    `,
    coverImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop",
    category: "consejos",
    author: "Carlos Reyes",
    authorPhoto:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    publishedAt: "2026-03-01",
    readingTime: 7,
    published: true,
  },
  {
    id: "blog-3",
    slug: "mejores-zonas-riviera-maya-2026",
    title: "Las mejores zonas de la Riviera Maya para vivir en 2026",
    excerpt:
      "Desde el bullicio cosmopolita de Playa del Carmen hasta la calma espiritual de Tulum: te ayudamos a encontrar tu zona perfecta en el Caribe Mexicano.",
    content: `
## La Riviera Maya tiene sabores para todos

No existe una única Riviera Maya. Cada destino tiene su propia personalidad, y encontrar la zona ideal depende de tu estilo de vida, presupuesto y objetivos.

## Playa del Carmen

La más cosmopolita. Vibrante, internacional, con la mejor gastronomía y vida nocturna de la región. Ideal para quienes quieren estar cerca de todo.

## Tulum

El favorito de los nómadas digitales, artistas y buscadores de bienestar. Slow living, jungle vibes y una comunidad global que se reinventa constantemente.

## Akumal

La más tranquila y familiar. Conocida por las tortugas marinas que llegan a sus playas. Ideal para familias y quienes buscan un ritmo de vida más calmado.

## Puerto Morelos

El secreto mejor guardado. Pueblo pesquero auténtico con el arrecife de coral mejor conservado del Caribe mexicano. La alternativa más tranquila y asequible.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=1200&h=600&fit=crop",
    category: "destinos",
    author: "Sofía Herrera",
    authorPhoto:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
    publishedAt: "2026-02-14",
    readingTime: 6,
    published: true,
  },
  {
    id: "blog-4",
    slug: "renta-vacacional-vs-renta-larga-estancia",
    title: "Renta vacacional vs. renta de larga estancia: ¿cuál te conviene?",
    excerpt:
      "La decisión de cómo rentar tu propiedad puede hacer una diferencia de hasta 3x en tu retorno. Te explicamos todo lo que necesitas saber.",
    content: `
## Dos modelos, dos estrategias

Si ya tienes una propiedad en la Riviera Maya o estás a punto de comprar una con fines de inversión, una de las decisiones más importantes que tomarás es cómo rentarla.

## Renta vacacional (Airbnb / Booking)

**Pros:** Ingresos más altos por noche, flexibilidad para usar tu propiedad, mayor control sobre el inmueble.

**Contras:** Gestión activa necesaria, temporadas bajas, gastos de limpieza y plataformas.

**Retorno típico:** 8-14% anual sobre el valor del inmueble.

## Renta de larga estancia (mensual)

**Pros:** Ingreso predecible, menos gestión, menores gastos operativos.

**Contras:** Menor ingreso total, menos flexibilidad, riesgo de inquilino complicado.

**Retorno típico:** 5-8% anual sobre el valor del inmueble.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1529408632839-a54952c491e5?w=1200&h=600&fit=crop",
    category: "consejos",
    author: "Paola Martínez",
    authorPhoto:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
    publishedAt: "2026-01-20",
    readingTime: 4,
    published: true,
  },
];

// ─── DATOS DE ANALITICOS (mock) ─────────────────

export const analyticsData = {
  weeklyVisits: [
    { day: "Lun", visits: 124 },
    { day: "Mar", visits: 189 },
    { day: "Mié", visits: 156 },
    { day: "Jue", visits: 213 },
    { day: "Vie", visits: 298 },
    { day: "Sáb", visits: 342 },
    { day: "Dom", visits: 187 },
  ],
  monthlyLeads: [
    { month: "Ene", leads: 18 },
    { month: "Feb", leads: 24 },
    { month: "Mar", leads: 31 },
    { month: "Abr", leads: 12 },
  ],
  trafficSources: [
    { source: "Google", percentage: 42 },
    { source: "Instagram", percentage: 28 },
    { source: "Directo", percentage: 18 },
    { source: "Referidos", percentage: 12 },
  ],
  devices: [
    { device: "Móvil", percentage: 64 },
    { device: "Desktop", percentage: 29 },
    { device: "Tablet", percentage: 7 },
  ],
  topProperties: properties
    .sort((a, b) => b.views - a.views)
    .slice(0, 5)
    .map((p) => ({ id: p.id, title: p.title, views: p.views })),
};

// ─── ZONAS / DESTINOS ──────────────────────────

export const zones = [
  { name: "Tulum", image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&h=400&fit=crop", count: 32 },
  { name: "Playa del Carmen", image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=600&h=400&fit=crop", count: 24 },
  { name: "Akumal", image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&h=400&fit=crop", count: 8 },
  { name: "Cobá", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop", count: 5 },
];

// ─── TESTIMONIOS ───────────────────────────────

export const testimonials = [
  {
    id: "t1",
    name: "Roberto & Carmen Álvarez",
    location: "Ciudad de México",
    quote:
      "Almar nos ayudó a encontrar la villa de nuestros sueños en Tulum en menos de 3 semanas. Pao conoce el mercado como nadie y el proceso fue increíblemente fluido.",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop",
    property: "Villa en Aldea Zamá",
  },
  {
    id: "t2",
    name: "James & Emily Cooper",
    location: "Chicago, IL",
    quote:
      "As first-time international buyers, we were nervous. The Almar team held our hand through every step — from property search to escrituración. Couldn't have done it without them.",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    property: "Penthouse en Playa del Carmen",
  },
  {
    id: "t3",
    name: "Valentina Ruiz",
    location: "Monterrey, NL",
    quote:
      "Llevaba 8 meses buscando propiedad en Tulum con otras inmobiliarias sin resultados. Con Almar lo encontré en 2 semanas. Servicio impecable.",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    property: "Casa en La Veleta",
  },
];

// ─── HELPERS ───────────────────────────────────

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id);
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getAgentById(id: string): Agent | undefined {
  return agents.find((a) => a.id === id);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured && p.status === "disponible");
}

export function getSimilarProperties(property: Property, limit = 3): Property[] {
  return properties
    .filter(
      (p) =>
        p.id !== property.id &&
        (p.type === property.type || p.location.city === property.location.city) &&
        p.status === "disponible"
    )
    .slice(0, limit);
}

export function formatPrice(price: number, currency: "MXN" | "USD" = "MXN"): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
