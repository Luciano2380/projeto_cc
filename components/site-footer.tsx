import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PawIcon,
  PhoneIcon,
} from "@/components/icons";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 dark:border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-3">
        <div className="flex flex-col gap-3">
          <span className="flex items-center gap-2 font-semibold">
            <span className="flex size-8 items-center justify-center rounded-full bg-brand-soft text-brand">
              <PawIcon className="size-4" />
            </span>
            Patinhas Petshop
          </span>
          <p className="max-w-xs text-sm text-foreground/70">
            Cuidado e carinho para o seu pet, todos os dias.
          </p>
          <div className="mt-2 flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex size-9 items-center justify-center rounded-full bg-black/5 text-foreground/70 transition-colors hover:bg-brand-soft hover:text-brand dark:bg-white/10"
            >
              <InstagramIcon className="size-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex size-9 items-center justify-center rounded-full bg-black/5 text-foreground/70 transition-colors hover:bg-brand-soft hover:text-brand dark:bg-white/10"
            >
              <FacebookIcon className="size-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm text-foreground/70">
          <span className="font-semibold text-foreground">Contato</span>
          <span className="flex items-center gap-2">
            <PhoneIcon className="size-4 shrink-0" />
            (11) 4002-8922
          </span>
          <span className="flex items-center gap-2">
            <MailIcon className="size-4 shrink-0" />
            contato@patinhaspetshop.com.br
          </span>
          <span className="flex items-center gap-2">
            <MapPinIcon className="size-4 shrink-0" />
            Rua dos Pets, 123 — São Paulo, SP
          </span>
        </div>

        <div className="flex flex-col gap-3 text-sm text-foreground/70">
          <span className="font-semibold text-foreground">Horário</span>
          <span>Segunda a sexta: 8h às 19h</span>
          <span>Sábado: 8h às 14h</span>
        </div>
      </div>

      <div className="border-t border-black/5 px-6 py-6 text-center text-xs text-foreground/50 dark:border-white/10">
        © {year} Patinhas Petshop. Todos os direitos reservados.
      </div>
    </footer>
  );
}
