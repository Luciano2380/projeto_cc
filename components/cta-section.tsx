import { PawIcon } from "@/components/icons";

export function CtaSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="flex flex-col items-center gap-6 rounded-3xl bg-brand px-6 py-14 text-center text-brand-foreground sm:px-16">
        <PawIcon className="size-10" />
        <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
          Seu pet merece o melhor cuidado
        </h2>
        <p className="max-w-md text-base opacity-90">
          Agende um horário e venha conhecer a Patinhas Petshop.
        </p>
        <a
          href="#contato"
          className="rounded-full bg-brand-foreground px-6 py-3 text-sm font-semibold text-brand transition-opacity hover:opacity-90"
        >
          Agende um horário
        </a>
      </div>
    </section>
  );
}
