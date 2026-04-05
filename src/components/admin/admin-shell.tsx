"use client";

import { useState } from "react";
import AdminSidebar from "./sidebar";
import AlmarLogo from "@/components/ui/almar-logo";

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-muted/40">
      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <AdminSidebar mobileOpen={mobileOpen} onMobileClose={() => setMobileOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile top bar */}
        <div className="flex items-center h-14 px-4 bg-white border-b border-border lg:hidden shrink-0">
          <button
            onClick={() => setMobileOpen(true)}
            className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center mr-3"
          >
            <svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <AlmarLogo variant="compact" theme="dark" />
        </div>

        {children}
      </div>
    </div>
  );
}
