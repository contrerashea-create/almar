"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, FileText, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeaButton() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return null;

  return (
    <div
      className={cn(
        "fixed bottom-6 left-6 z-50 transition-all duration-500",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      )}
    >
      {open ? (
        <div
          className="w-[240px] overflow-hidden rounded-2xl border border-black/8 shadow-2xl backdrop-blur-xl"
          style={{ background: "rgba(255,255,255,0.88)" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 pt-4 pb-3.5">
            <div className="flex items-center gap-2.5">
              <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-lg bg-black/5">
                <Image
                  src="https://consultinghea.com/images/LOGO.png"
                  alt="HEA Consulting"
                  fill
                  className="object-contain p-0.5"
                  unoptimized
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold leading-none text-gray-800">HEA Consulting</p>
                <p className="mt-0.5 text-[9px] text-gray-400 tracking-wide">Propuesta · Almar 2026</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="flex h-5 w-5 items-center justify-center rounded-full text-gray-300 transition-colors hover:bg-black/5 hover:text-gray-500"
            >
              <X className="h-3 w-3" />
            </button>
          </div>

          {/* Divider */}
          <div className="mx-4 h-px bg-black/6" />

          {/* Actions */}
          <div className="flex gap-2 p-3.5">
            <Link
              href="/propuesta/oferta"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2.5 text-[11px] font-semibold text-white transition-opacity hover:opacity-85"
              style={{ background: "#3069aa" }}
            >
              <FileText className="h-3 w-3" />
              Propuesta
            </Link>
            <Link
              href="/propuesta/showcase"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-black/10 py-2.5 text-[11px] font-medium text-gray-500 transition-colors hover:border-black/20 hover:text-gray-700"
            >
              <Layers className="h-3 w-3" />
              Showcase
            </Link>
          </div>

          {/* Footer */}
          <div className="px-4 pb-3.5">
            <p className="text-[10px] text-gray-400 leading-relaxed text-center">
              Custom mockup built by{" "}
              <span className="text-gray-600 font-medium">HEA Consulting</span>{" "}
              for Almar
            </p>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/8 shadow-xl backdrop-blur-xl transition-all duration-200 hover:scale-105"
          style={{ background: "rgba(255,255,255,0.88)" }}
          title="HEA Consulting"
        >
          <div className="relative h-7 w-7 overflow-hidden rounded-md">
            <Image
              src="https://consultinghea.com/images/LOGO.png"
              alt="HEA"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </button>
      )}
    </div>
  );
}
