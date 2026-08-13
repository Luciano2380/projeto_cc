# Projeto 1 — Landing Page Pet Shop

Landing page institucional para um pet shop/clínica veterinária, apresentando os serviços oferecidos (banho e tosa, atendimento veterinário, loja de produtos e hospedagem) com foco em captação de clientes.

## Sobre o Projeto

Este é um projeto **Next.js** com página única (`/`), composta pelas seções:

- **Header** — cabeçalho de navegação do site
- **Hero** — chamada principal com call-to-actions ("Agende um horário" e "Ver serviços")
- **Serviços** — cards com os serviços oferecidos (Banho e Tosa, Atendimento Veterinário, Loja de Produtos, Hospedagem)
- **CTA** — seção de chamada para ação
- **Footer** — rodapé do site

## Tecnologias

- **[Next.js 16](https://nextjs.org/)** (App Router)
- **[React 19](https://react.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[TailwindCSS 4](https://tailwindcss.com/)** — estilização utility-first
- **[shadcn/ui](https://ui.shadcn.com/)** — componentes de UI reutilizáveis (base preparada em `components/ui`)
- **ESLint** — padronização e qualidade de código

> Estrutura preparada para uso futuro de **React Hook Form + Zod** (validação de formulários) e **Server Actions**, conforme padrão definido em `CLAUDE.md`.

## Estrutura do Projeto

```
projeto-1/
├── app/                    # Rotas (App Router)
│   ├── layout.tsx          # Layout raiz
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais / tokens Tailwind
├── components/             # Componentes de feature
│   ├── ui/                 # Primitivos reutilizáveis (shadcn)
│   ├── site-header.tsx
│   ├── hero-section.tsx
│   ├── services-section.tsx
│   ├── cta-section.tsx
│   ├── site-footer.tsx
│   └── icons.tsx
├── actions/                # Server Actions
├── lib/                    # Helpers, clients e configurações
├── types/                  # Tipos globais e schemas Zod compartilhados
└── public/                 # Arquivos estáticos
```

## Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) 20+
- npm

### Instalação

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

### Build de produção

```bash
npm run build
npm run start
```

## Scripts Disponíveis

| Comando               | Descrição                                  |
| ---------------------- | ------------------------------------------- |
| `npm run dev`          | Inicia o servidor de desenvolvimento (porta 3000) |
| `npm run build`        | Gera o build de produção                    |
| `npm run start`        | Inicia o servidor com o build de produção   |
| `npm run lint`         | Executa o ESLint                            |
| `npm run type-check`   | Verifica os tipos com o TypeScript          |

## Padrões do Projeto

- **Server Components por padrão** — `'use client'` só é adicionado quando há hooks, eventos ou APIs de browser
- **Mutações via Server Actions** em `actions/` — nunca acessar banco de dados diretamente em Client Components
- **TailwindCSS only** — sem CSS inline ou styled-components
- Nomenclatura de arquivos em `kebab-case` e de componentes em `PascalCase`

Consulte `CLAUDE.md` e `.claude/rules/rules-global.md` para o guia completo de arquitetura e convenções de código adotadas no projeto.

## Deploy

A forma mais simples de publicar este projeto é utilizando a [Vercel](https://vercel.com/new), criadora do Next.js. Consulte a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.
