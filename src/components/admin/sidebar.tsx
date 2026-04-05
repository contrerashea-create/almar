"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard, Building2, Users, BarChart3,
  FileText, Settings, LogOut, ChevronLeft, Menu,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import AlmarLogo from "@/components/ui/almar-logo";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Propiedades", href: "/admin/propiedades", icon: Building2 },
  { label: "Leads / CRM", href: "/admin/leads", icon: MessageSquare },
  { label: "Agentes", href: "/admin/agentes", icon: Users },
  { label: "Analíticos", href: "/admin/analiticos", icon: BarChart3 },
  { label: "Blog", href: "/admin/blog", icon: FileText },
  { label: "Configuración", href: "/admin/configuracion", icon: Settings },
];

interface AdminSidebarProps {
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}

export default function AdminSidebar({ mobileOpen, onMobileClose }: AdminSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <aside className={cn(
      "flex flex-col bg-navy border-r border-white/10 transition-all duration-300 shrink-0",
      // Desktop: collapsible
      "hidden lg:flex",
      collapsed ? "lg:w-16" : "lg:w-56",
      // Mobile: fixed overlay
      mobileOpen && "flex fixed inset-y-0 left-0 z-50 w-64 lg:relative lg:z-auto",
    )}>
      {/* Logo */}
      <div className="flex items-center justify-between px-4 h-16 border-b border-white/10">
        {(!collapsed || mobileOpen) && (
          <Link href="/admin">
            <AlmarLogo variant="compact" theme="light" />
          </Link>
        )}
        {/* Desktop collapse button */}
        <button
          onClick={mobileOpen ? onMobileClose : () => setCollapsed(!collapsed)}
          className={cn(
            "w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors",
            collapsed && !mobileOpen && "mx-auto"
          )}
        >
          {collapsed && !mobileOpen ? <Menu className="w-4 h-4 text-white" /> : <ChevronLeft className="w-4 h-4 text-white" />}
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 space-y-0.5 px-2 overflow-y-auto">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = pathname === href || (href !== "/admin" && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              onClick={onMobileClose}
              title={collapsed ? label : undefined}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150",
                active
                  ? "bg-blue text-white"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              )}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {(!collapsed || mobileOpen) && <span className="truncate">{label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-2 border-t border-white/10 space-y-0.5">
        <Link
          href="/"
          title={collapsed ? "Ver sitio" : undefined}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/50 hover:text-white hover:bg-white/10 transition-all"
        >
          <LogOut className="w-4 h-4 shrink-0 rotate-180" />
          {(!collapsed || mobileOpen) && <span>Ver sitio</span>}
        </Link>
        <button
          onClick={handleLogout}
          title={collapsed ? "Cerrar sesión" : undefined}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/50 hover:text-red-400 hover:bg-red-500/10 transition-all"
        >
          <LogOut className="w-4 h-4 shrink-0" />
          {(!collapsed || mobileOpen) && <span>Cerrar sesión</span>}
        </button>
      </div>
    </aside>
  );
}
