import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Share2 } from "lucide-react";
import { blogPosts } from "@/lib/mock-data";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug && p.published);
  if (!post) return { title: "Artículo no encontrado" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

const categoryLabels: Record<string, string> = {
  mercado: "Mercado", consejos: "Consejos", noticias: "Noticias",
  destinos: "Destinos", lifestyle: "Lifestyle",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug && p.published);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug && p.published && p.category === post.category).slice(0, 2);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative">
        <div className="aspect-[21/9] max-h-[480px] overflow-hidden relative">
          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-4xl px-4 sm:px-6 pb-10">
            <span className="inline-block px-3 py-1 bg-blue text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
              {categoryLabels[post.category]}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Breadcrumb + back */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Volver al blog
          </Link>

          {/* Meta */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-3">
              <img src={post.authorPhoto} alt={post.author} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold text-foreground">{post.author}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(post.publishedAt).toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" })}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> {post.readingTime} min de lectura
              </span>
              <button className="flex items-center gap-1.5 hover:text-navy transition-colors">
                <Share2 className="w-4 h-4" /> Compartir
              </button>
            </div>
          </div>

          {/* Excerpt destacado */}
          <p className="text-lg text-foreground font-medium leading-relaxed mb-8 border-l-4 border-blue pl-5">
            {post.excerpt}
          </p>

          {/* Content renderizado como markdown simple */}
          <div className="prose prose-lg max-w-none text-foreground leading-relaxed space-y-4">
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) return (
                <h2 key={i} className="font-heading text-2xl font-bold text-navy mt-8 mb-3">{line.replace("## ", "")}</h2>
              );
              if (line.startsWith("- ")) return (
                <li key={i} className="ml-4 text-muted-foreground">{line.replace("- ", "")}</li>
              );
              if (line.trim() === "") return <div key={i} className="h-2" />;
              const parsed = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
              return <p key={i} className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: parsed }} />;
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-navy rounded-2xl p-8 text-center">
            <h3 className="font-heading text-2xl font-bold text-white mb-3">¿Te interesa una propiedad en la Riviera Maya?</h3>
            <p className="text-white/65 mb-6">Nuestro equipo está listo para asesorarte sin compromiso.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wa.me/529843121828" target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 bg-[#25D366] text-white font-semibold rounded-full text-sm hover:bg-[#20BA5C] transition-colors">
                WhatsApp gratuito
              </a>
              <Link href="/propiedades" className="px-6 py-3 bg-white text-navy font-semibold rounded-full text-sm hover:bg-white/90 transition-colors">
                Ver propiedades
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-12 bg-secondary/40">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="font-heading text-xl font-bold text-navy mb-6">Artículos relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map((p) => (
                <Link key={p.id} href={`/blog/${p.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-md transition-all flex gap-4 p-4">
                  <div className="w-24 h-20 rounded-xl overflow-hidden bg-muted shrink-0">
                    <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{p.readingTime} min</p>
                    <h3 className="font-heading font-semibold text-navy text-sm leading-snug group-hover:text-blue transition-colors line-clamp-2">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
