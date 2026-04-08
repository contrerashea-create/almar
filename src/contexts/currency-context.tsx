"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Currency = "MXN" | "USD";

interface CurrencyContextValue {
  currency: Currency;
  setCurrency: (c: Currency) => void;
}

const CurrencyContext = createContext<CurrencyContextValue>({
  currency: "MXN",
  setCurrency: () => {},
});

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>("MXN");

  useEffect(() => {
    const stored = localStorage.getItem("almar-currency") as Currency | null;
    if (stored === "MXN" || stored === "USD") setCurrencyState(stored);
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    localStorage.setItem("almar-currency", c);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
