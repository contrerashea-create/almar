"use client";

import { useState, useMemo } from "react";
import { Calculator } from "lucide-react";

interface MortgageCalculatorProps {
  propertyPrice: number;
}

export default function MortgageCalculator({ propertyPrice }: MortgageCalculatorProps) {
  const [enganche, setEnganche] = useState(20);
  const [plazo, setPlazo] = useState(20);
  const [tasa, setTasa] = useState(10.5);

  const calc = useMemo(() => {
    const monto = propertyPrice * (1 - enganche / 100);
    const tasaMensual = tasa / 100 / 12;
    const n = plazo * 12;
    const mensualidad =
      (monto * tasaMensual * Math.pow(1 + tasaMensual, n)) /
      (Math.pow(1 + tasaMensual, n) - 1);
    const totalPagado = mensualidad * n;
    const totalIntereses = totalPagado - monto;
    return {
      monto,
      mensualidad,
      totalPagado,
      totalIntereses,
      enganchemonto: propertyPrice * (enganche / 100),
    };
  }, [propertyPrice, enganche, plazo, tasa]);

  const fmt = (n: number) =>
    new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);

  return (
    <div className="bg-white rounded-2xl border border-border p-6">
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="w-5 h-5 text-navy" />
        <h3 className="font-heading font-bold text-navy text-lg">Calculadora hipotecaria</h3>
      </div>

      <div className="space-y-5">
        {/* Enganche */}
        <div>
          <div className="flex justify-between mb-1.5">
            <label className="text-sm font-medium text-foreground">Enganche</label>
            <span className="text-sm font-bold text-navy">{enganche}% — {fmt(calc.enganchemonto)}</span>
          </div>
          <input
            type="range" min={10} max={50} step={5} value={enganche}
            onChange={(e) => setEnganche(Number(e.target.value))}
            className="w-full accent-navy"
          />
          <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
            <span>10%</span><span>50%</span>
          </div>
        </div>

        {/* Plazo */}
        <div>
          <div className="flex justify-between mb-1.5">
            <label className="text-sm font-medium text-foreground">Plazo</label>
            <span className="text-sm font-bold text-navy">{plazo} años</span>
          </div>
          <input
            type="range" min={5} max={30} step={5} value={plazo}
            onChange={(e) => setPlazo(Number(e.target.value))}
            className="w-full accent-navy"
          />
          <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
            <span>5 años</span><span>30 años</span>
          </div>
        </div>

        {/* Tasa */}
        <div>
          <div className="flex justify-between mb-1.5">
            <label className="text-sm font-medium text-foreground">Tasa de interés anual</label>
            <span className="text-sm font-bold text-navy">{tasa}%</span>
          </div>
          <input
            type="range" min={8} max={16} step={0.5} value={tasa}
            onChange={(e) => setTasa(Number(e.target.value))}
            className="w-full accent-navy"
          />
          <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
            <span>8%</span><span>16%</span>
          </div>
        </div>
      </div>

      {/* Resultados */}
      <div className="mt-6 pt-5 border-t border-border space-y-3">
        <div className="bg-navy rounded-xl p-4 text-center">
          <p className="text-white/70 text-xs mb-1">Mensualidad estimada</p>
          <p className="font-heading text-3xl font-bold text-white">{fmt(calc.mensualidad)}</p>
          <p className="text-white/50 text-xs mt-1">/ mes por {plazo} años</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-muted rounded-xl p-3 text-center">
            <p className="text-muted-foreground text-[10px] mb-1">Monto a financiar</p>
            <p className="font-semibold text-navy text-sm">{fmt(calc.monto)}</p>
          </div>
          <div className="bg-muted rounded-xl p-3 text-center">
            <p className="text-muted-foreground text-[10px] mb-1">Total intereses</p>
            <p className="font-semibold text-navy text-sm">{fmt(calc.totalIntereses)}</p>
          </div>
        </div>
      </div>

      <p className="text-[10px] text-muted-foreground mt-3 text-center leading-relaxed">
        Cálculo estimado. Consulta con tu banco para condiciones reales.
      </p>
    </div>
  );
}
