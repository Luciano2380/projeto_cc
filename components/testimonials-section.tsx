type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Marina Alves",
    role: "Tutora da Luna",
    quote:
      "O banho e tosa da Luna sempre fica impecável. A equipe é super carinhosa e ela sai de lá feliz da vida.",
  },
  {
    name: "Rafael Souza",
    role: "Tutor do Thor",
    quote:
      "Levei o Thor para uma consulta de emergência e fui muito bem atendido. Profissionais atenciosos e um preço justo.",
  },
  {
    name: "Camila Ribeiro",
    role: "Tutora da Mel e do Bidu",
    quote:
      "Uso a hospedagem sempre que viajo. Fico tranquila sabendo que meus dois pets estão em boas mãos.",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Quem confia, recomenda
        </h2>
        <p className="mt-4 text-lg text-foreground/70">
          Depoimentos de tutores que já cuidam dos seus pets com a gente.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map(({ name, role, quote }) => (
          <figure
            key={name}
            className="flex flex-col gap-4 rounded-2xl border border-black/5 p-6 dark:border-white/10"
          >
            <blockquote className="text-sm leading-relaxed text-foreground/80">
              &ldquo;{quote}&rdquo;
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-soft text-sm font-semibold text-brand"
              >
                {getInitials(name)}
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-semibold">{name}</span>
                <span className="text-xs text-foreground/60">{role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
