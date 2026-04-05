"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Edit2, Eye, Trash2, Clock } from "lucide-react";
import AdminHeader from "@/components/admin/admin-header";
import { blogPosts } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  mercado: "bg-blue/10 text-blue",
  consejos: "bg-emerald-50 text-emerald-700",
  noticias: "bg-amber-50 text-amber-700",
  destinos: "bg-purple-50 text-purple-700",
};

const categoryLabels: Record<string, string> = {
  mercado: "Mercado", consejos: "Consejos", noticias: "Noticias", destinos: "Destinos",
};

export default function AdminBlogPage() {
  const [posts, setPosts] = useState(blogPosts);

  const togglePublished = (id: string) => {
    setPosts((prev) => prev.map((p) => p.id === id ? { ...p, published: !p.published } : p));
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <AdminHeader title="Blog" />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-4 text-sm">
            <span><span className="font-semibold text-foreground">{posts.filter((p) => p.published).length}</span> <span className="text-muted-foreground">publicados</span></span>
            <span><span className="font-semibold text-foreground">{posts.filter((p) => !p.published).length}</span> <span className="text-muted-foreground">borradores</span></span>
          </div>
          <Link href="/admin/blog/nuevo"
            className="flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-full text-sm font-semibold hover:bg-navy-light transition-colors">
            <Plus className="w-4 h-4" /> Nuevo artículo
          </Link>
        </div>

        <div className="space-y-3">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl border border-border flex items-center gap-4 p-4 hover:shadow-sm transition-all group">
              <div className="w-20 h-14 rounded-xl overflow-hidden bg-muted shrink-0">
                <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={cn("text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full", categoryColors[post.category])}>
                    {categoryLabels[post.category]}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    <Clock className="w-3 h-3" /> {post.readingTime} min
                  </span>
                </div>
                <p className="text-sm font-semibold text-foreground truncate">{post.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {post.author} · {new Date(post.publishedAt).toLocaleDateString("es-MX", { year: "numeric", month: "short", day: "numeric" })}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {/* Toggle publicado */}
                <button onClick={() => togglePublished(post.id)}
                  className={cn("px-3 py-1 rounded-full text-xs font-semibold border transition-all",
                    post.published
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200"
                      : "bg-muted text-muted-foreground border-border hover:bg-blue/10 hover:text-blue hover:border-blue/20"
                  )}>
                  {post.published ? "Publicado" : "Borrador"}
                </button>

                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link href={`/blog/${post.slug}`} target="_blank"
                    className="w-7 h-7 rounded-lg hover:bg-muted flex items-center justify-center" title="Ver">
                    <Eye className="w-3.5 h-3.5 text-muted-foreground" />
                  </Link>
                  <Link href={`/admin/blog/${post.id}`}
                    className="w-7 h-7 rounded-lg hover:bg-muted flex items-center justify-center" title="Editar">
                    <Edit2 className="w-3.5 h-3.5 text-muted-foreground" />
                  </Link>
                  <button className="w-7 h-7 rounded-lg hover:bg-red-50 flex items-center justify-center" title="Eliminar">
                    <Trash2 className="w-3.5 h-3.5 text-red-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
