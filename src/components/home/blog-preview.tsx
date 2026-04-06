"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/mock-data";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { useLang } from "@/contexts/lang-context";

const categoryColors: Record<string, string> = {
  mercado: "bg-blue/10 text-blue",
  consejos: "bg-emerald-50 text-emerald-700",
  noticias: "bg-amber-50 text-amber-700",
  destinos: "bg-purple-50 text-purple-700",
  lifestyle: "bg-pink-50 text-pink-700",
};

export default function BlogPreview() {
  const { t, lang } = useLang();
  const posts = blogPosts.filter((p) => p.published).slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              {t.blogPreview.eyebrow}
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
              {t.blogPreview.title}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md text-base leading-relaxed">
              {t.blogPreview.subtitle}
            </p>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm font-semibold text-navy border border-navy rounded-full px-5 py-2.5 hover:bg-navy hover:text-white transition-all duration-200 shrink-0 self-start sm:self-auto"
          >
            {t.blogPreview.allArticles}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>

        {/* Posts grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <StaggerItem key={post.id}>
            <Link
              href={`/blog/${post.slug}`}
              className={`group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full ${
                i === 0 ? "md:col-span-1" : ""
              }`}
            >
              {/* Cover image */}
              <div className={`relative overflow-hidden bg-muted ${i === 0 ? "aspect-[16/9]" : "aspect-[16/9]"}`}>
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                {/* Category + reading time */}
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-muted text-muted-foreground"}`}>
                    {(t.blogPreview.categories as Record<string, string>)[post.category] ?? post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {post.readingTime} min
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-semibold text-navy text-base leading-snug mb-2 group-hover:text-blue transition-colors line-clamp-2 flex-1">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center gap-2.5 pt-4 border-t border-border mt-auto">
                  <img
                    src={post.authorPhoto}
                    alt={post.author}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-xs font-medium text-foreground">{post.author}</p>
                    <p className="text-[10px] text-muted-foreground">
                      {new Date(post.publishedAt).toLocaleDateString(lang === "es" ? "es-MX" : "en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <span className="ml-auto text-blue text-xs font-semibold group-hover:underline">
                    {t.blogPreview.read}
                  </span>
                </div>
              </div>
            </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
