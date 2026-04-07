import { LangProvider } from "@/contexts/lang-context";

export default function PropuestaLayout({ children }: { children: React.ReactNode }) {
  return <LangProvider>{children}</LangProvider>;
}
