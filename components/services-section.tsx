import type { SVGProps } from "react";
import {
  HomeHeartIcon,
  ScissorsIcon,
  ShoppingBagIcon,
  StethoscopeIcon,
} from "@/components/icons";

type Service = {
  icon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: ScissorsIcon,
    title: "Banho e Tosa",
    description:
      "Higiene e beleza com produtos de qualidade, deixando seu pet limpinho e cheiroso.",
  },
  {
    icon: StethoscopeIcon,
    title: "Consultas Veterinárias",
    description:
      "Acompanhamento de saúde, vacinas e check-ups com profissionais experientes.",
  },
  {
    icon: ShoppingBagIcon,
    title: "Loja de Produtos",
    description:
      "Ração, brinquedos, acessórios e tudo que seu pet precisa em um só lugar.",
  },
  {
    icon: HomeHeartIcon,
    title: "Hospedagem & Creche",
    description:
      "Um ambiente seguro e acolhedor para o seu pet enquanto você está fora.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Nossos serviços
        </h2>
        <p className="mt-4 text-lg text-foreground/70">
          Tudo o que o seu melhor amigo precisa, com o cuidado que ele
          merece.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col items-start gap-4 rounded-2xl border border-black/5 p-6 transition-shadow hover:shadow-md dark:border-white/10"
          >
            <span className="flex size-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
              <Icon className="size-6" />
            </span>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm leading-relaxed text-foreground/70">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
