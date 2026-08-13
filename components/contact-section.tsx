import { ContactForm } from "@/components/contact-form";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";

export function ContactSection() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Fale com a gente
        </h2>
        <p className="mt-4 text-lg text-foreground/70">
          Tire suas dúvidas ou agende um horário. Respondemos o mais rápido
          possível.
        </p>
      </div>

      <div className="mt-14 grid gap-10 rounded-3xl border border-black/5 p-6 dark:border-white/10 sm:p-10 lg:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col gap-4 text-sm text-foreground/70">
          <span className="flex items-center gap-2">
            <PhoneIcon className="size-4 shrink-0 text-brand" />
            (11) 4002-8922
          </span>
          <span className="flex items-center gap-2">
            <MailIcon className="size-4 shrink-0 text-brand" />
            contato@patinhaspetshop.com.br
          </span>
          <span className="flex items-center gap-2">
            <MapPinIcon className="size-4 shrink-0 text-brand" />
            Rua dos Pets, 123 — São Paulo, SP
          </span>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
