import {
  HomeHeartIcon,
  PawIcon,
  ScissorsIcon,
  StethoscopeIcon,
} from "@/components/icons";

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
      <div className="flex flex-col items-start gap-6 text-left">
        <span className="rounded-full bg-brand-soft px-4 py-1.5 text-sm font-medium text-brand">
          Cuidado completo para o seu pet
        </span>
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Amor e cuidado que{" "}
          <span className="text-brand">seu pet</span> merece
        </h1>
        <p className="max-w-md text-lg leading-relaxed text-foreground/70">
          Banho e tosa, atendimento veterinário, loja de produtos e
          hospedagem — tudo em um só lugar, com carinho de quem também ama
          animais.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#contato"
            className="rounded-full bg-brand px-6 py-3 text-center text-sm font-semibold text-brand-foreground transition-colors hover:opacity-90"
          >
            Agende um horário
          </a>
          <a
            href="#servicos"
            className="rounded-full border border-black/10 px-6 py-3 text-center text-sm font-semibold transition-colors hover:bg-black/[.04] dark:border-white/15 dark:hover:bg-white/[.06]"
          >
            Ver serviços
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 flex items-center justify-center rounded-3xl bg-brand-soft py-10">
          <PawIcon className="size-20 text-brand" />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 rounded-3xl bg-black/[.03] py-8 dark:bg-white/[.06]">
          <ScissorsIcon className="size-8 text-brand" />
          <span className="text-xs font-medium text-foreground/60">
            Banho e Tosa
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 rounded-3xl bg-black/[.03] py-8 dark:bg-white/[.06]">
          <StethoscopeIcon className="size-8 text-brand" />
          <span className="text-xs font-medium text-foreground/60">
            Veterinário
          </span>
        </div>
        <div className="col-span-2 flex items-center justify-center gap-2 rounded-3xl bg-black/[.03] py-6 dark:bg-white/[.06]">
          <HomeHeartIcon className="size-7 text-brand" />
          <span className="text-xs font-medium text-foreground/60">
            Hospedagem &amp; Creche
          </span>
        </div>
      </div>
    </section>
  );
}
