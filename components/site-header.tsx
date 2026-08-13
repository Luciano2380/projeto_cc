import Link from "next/link";
import { PawIcon } from "@/components/icons";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-black/5 bg-background/80 backdrop-blur dark:border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="flex size-9 items-center justify-center rounded-full bg-brand-soft text-brand">
            <PawIcon className="size-5" />
          </span>
          <span className="text-lg tracking-tight">Patinhas Petshop</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/70 md:flex">
          <a href="#servicos" className="transition-colors hover:text-foreground">
            Serviços
          </a>
          <a href="#contato" className="transition-colors hover:text-foreground">
            Contato
          </a>
        </nav>

        <a
          href="#contato"
          className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition-colors hover:opacity-90"
        >
          Agende um horário
        </a>
      </div>
    </header>
  );
}
