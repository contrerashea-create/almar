import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/mock-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Mercado inmobiliario, consejos de inversión, destinos y lifestyle en la Riviera Maya.",
};

const categoryColors: Record<string, string> = {
  mercado: "bg-blue/10 text-blue",
  consejos: "bg-emerald-50 text-emerald-700",
  noticias: "bg-amber-50 text-amber-700",
  destinos: "bg-purple-50 text-purple-700",
  lifestyle: "bg-pink-50 text-pink-700",
};

const categoryLabels: Record<string, string> = {
  mercado: "Mercado", consejos: "Consejos", noticias: "Noticias",
  destinos: "Destinos", lifestyle: "Lifestyle",
};

export default function BlogPage() {
  const posts = blogPosts.filter((p) => p.published);
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-3">Blog Almar</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            Todo sobre la Riviera Maya
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            Mercado inmobiliario, consejos de inversión, destinos y lifestyle en el Caribe Mexicano.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group block bg-white rounded-3xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 mb-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-[16/9] lg:aspect-auto overflow-hidden bg-muted">
                  <img
                    src={featured.coverImage}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 sm:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${categoryColors[featured.category]}`}>
                      {categoryLabels[featured.category]}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {featured.readingTime} min de lectura
                    </span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy leading-tight mb-3 group-hover:text-blue transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img src={featured.authorPhoto} alt={featured.author} className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <p className="text-sm font-medium text-foreground">{featured.author}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(featured.publishedAt).toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" })}
                        </p>
                      </div>
                    </div>
                    <span className="flex items-center gap-1 text-blue text-sm font-semibold">
                      Leer <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Rest */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${categoryColors[post.category]}`}>
                      {categoryLabels[post.category]}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readingTime} min
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-navy text-base leading-snug mb-2 group-hover:text-blue transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-2.5 pt-4 border-t border-border mt-auto">
                    <img src={post.authorPhoto} alt={post.author} className="w-7 h-7 rounded-full object-cover" />
                    <div className="flex-1">
                      <p className="text-xs font-medium text-foreground">{post.author}</p>
                      <p className="text-[10px] text-muted-foreground">
                        {new Date(post.publishedAt).toLocaleDateString("es-MX", { month: "short", day: "numeric", year: "numeric" })}
                      </p>
                    </div>
                    <span className="text-blue text-xs font-semibold">Leer →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
