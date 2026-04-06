"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, UserCircle, Heart, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFavorites } from "@/hooks/use-favorites";
import AlmarLogo from "@/components/ui/almar-logo";
import { useLang } from "@/contexts/lang-context";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { lang, setLang, t } = useLang();

  const navLinks = [
    { label: t.nav.properties, href: "/propiedades" },
    {
      label: t.nav.about,
      href: "/nosotros",
      children: [
        { label: t.nav.whoWeAre, href: "/nosotros" },
        { label: t.nav.ourTeam, href: "/nosotros#equipo" },
        { label: t.nav.services, href: "/servicios" },
      ],
    },
    { label: t.nav.blog, href: "/blog" },
    { label: t.nav.affiliates, href: "/afiliados" },
    { label: t.nav.contact, href: "/contacto" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const { favorites } = useFavorites();
  const [scrolled, setScrolled] = useState(!isHome);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (!isHome) { setScrolled(true); return; }
    setScrolled(window.scrollY > 20);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) setIsOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const close = () => { setIsOpen(false); setOpenSection(null); };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-white shadow-sm border-b border-border" : "bg-transparent"
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">

            {/* Logo */}
            <Link href="/" onClick={close}>
              <AlmarLogo variant="compact" theme={scrolled ? "dark" : "light"} />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200",
                      scrolled ? "text-foreground hover:text-navy" : "text-white/85 hover:text-white"
                    )}>
                      {link.label}
                      <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", openDropdown === link.label && "rotate-180")} />
                    </button>
                    {openDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-1.5 w-52 bg-white rounded-xl shadow-xl border border-border/60 py-1.5 animate-in fade-in slide-in-from-top-1 duration-150">
                        {link.children.map((child) => (
                          <Link key={child.href} href={child.href}
                            className="block px-4 py-2.5 text-sm text-foreground hover:text-navy hover:bg-muted transition-colors">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={link.label} href={link.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200",
                      scrolled ? "text-foreground hover:text-navy" : "text-white/85 hover:text-white"
                    )}>
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setLang(lang === "es" ? "en" : "es")}
                className={cn(
                  "flex items-center text-xs font-medium gap-1.5 rounded-full px-3 py-1.5 border transition-all duration-200 cursor-pointer select-none",
                  scrolled
                    ? "border-border text-muted-foreground hover:text-foreground hover:border-navy/40"
                    : "border-white/30 text-white/70 hover:text-white hover:border-white/60"
                )}
              >
                <span className={cn(lang === "es" ? (scrolled ? "font-semibold text-navy" : "font-semibold text-white") : "")}>ES</span>
                <span className={scrolled ? "text-border" : "text-white/30"}>|</span>
                <span className={cn(lang === "en" ? (scrolled ? "font-semibold text-navy" : "font-semibold text-white") : "")}>EN</span>
              </button>

              <Link href="/favoritos" title={t.nav.favorites}
                className={cn(
                  "relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200",
                  scrolled ? "text-navy/60 hover:text-navy hover:bg-muted" : "text-white/60 hover:text-white hover:bg-white/10"
                )}>
                <Heart className="w-5 h-5" />
                {favorites.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
                    {favorites.length > 9 ? "9+" : favorites.length}
                  </span>
                )}
              </Link>

              <Link href="/admin" title={t.nav.login}
                className={cn(
                  "w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200",
                  scrolled ? "text-navy/60 hover:text-navy hover:bg-muted" : "text-white/60 hover:text-white hover:bg-white/10"
                )}>
                <UserCircle className="w-6 h-6" />
              </Link>
            </div>

            {/* Mobile: favoritos badge + hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <Link href="/favoritos" className={cn(
                "relative w-9 h-9 rounded-full flex items-center justify-center transition-colors",
                scrolled ? "text-navy/60 hover:text-navy" : "text-white/70 hover:text-white"
              )}>
                <Heart className="w-5 h-5" />
                {favorites.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
                    {favorites.length > 9 ? "9+" : favorites.length}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setIsOpen(true)}
                className={cn(
                  "w-9 h-9 rounded-full flex items-center justify-center transition-colors",
                  scrolled ? "text-navy hover:bg-muted" : "text-white hover:bg-white/10"
                )}
                aria-label={t.nav.openMenu}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Backdrop */}
      <div
        onClick={close}
        className={cn(
          "fixed inset-0 z-50 bg-black/40 lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Drawer — panel flotante bajo el navbar */}
      <div className={cn(
        "fixed top-[72px] right-4 z-50 w-72 bg-white flex flex-col lg:hidden shadow-xl rounded-2xl border border-border overflow-hidden transition-all duration-200",
        isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
      )}>

        {/* Links */}
        <nav className="px-5 py-3">
          {navLinks.map((link) => {
            const active = pathname === link.href || link.children?.some((c) => pathname === c.href);
            const expanded = openSection === link.label;

            if (link.children) {
              return (
                <div key={link.label}>
                  <button
                    onClick={() => setOpenSection(expanded ? null : link.label)}
                    className={cn(
                      "w-full flex items-center justify-between py-3 text-sm font-semibold transition-colors",
                      active ? "text-blue" : "text-navy hover:text-blue"
                    )}
                  >
                    {link.label}
                    <ChevronDown className={cn("w-3.5 h-3.5 text-navy/30 transition-transform duration-200", expanded && "rotate-180")} />
                  </button>
                  <div className={cn("overflow-hidden transition-all duration-200", expanded ? "max-h-40" : "max-h-0")}>
                    <div className="pl-3 pb-2 space-y-0.5 border-l-2 border-blue/20 ml-1 mb-1">
                      {link.children.map((child) => (
                        <Link key={child.href} href={child.href} onClick={close}
                          className={cn("block py-1.5 text-sm transition-colors", pathname === child.href ? "text-blue font-medium" : "text-muted-foreground hover:text-navy")}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link key={link.label} href={link.href} onClick={close}
                className={cn(
                  "block py-3 text-sm font-semibold transition-colors",
                  active ? "text-blue" : "text-navy hover:text-blue"
                )}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="px-5 py-5 border-t border-border space-y-2 shrink-0">
          <Link href="/favoritos" onClick={close}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-muted transition-colors text-sm font-medium text-navy/70 hover:text-navy">
            <Heart className="w-4 h-4 shrink-0" />
            {t.nav.favorites}
            {favorites.length > 0 && (
              <span className="ml-auto px-1.5 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full">
                {favorites.length}
              </span>
            )}
          </Link>
          <a href="https://wa.me/529843121828" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-muted transition-colors text-sm font-medium text-navy/70 hover:text-navy">
            <MessageCircle className="w-4 h-4 shrink-0" />
            {t.nav.whatsapp}
          </a>
          <Link href="/admin" onClick={close}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-muted transition-colors text-sm font-medium text-navy/70 hover:text-navy">
            <UserCircle className="w-4 h-4 shrink-0" />
            {t.nav.login}
          </Link>
        </div>
      </div>
    </>
  );
}
