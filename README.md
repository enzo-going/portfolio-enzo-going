# Enzo Liutkus Going — Portfólio

[![build](https://github.com/enzo-going/portfolio-enzo-going/actions/workflows/build.yml/badge.svg)](https://github.com/enzo-going/portfolio-enzo-going/actions/workflows/build.yml)

Portfólio técnico pessoal: projetos, skills, formação e experiência prática em
software, dados/machine learning, automação e segurança.

> Projeto pessoal de portfólio — o conteúdo descreve a trajetória real de um
> estudante de Ciência da Computação; nada aqui é experiência ou métrica inventada.

**Deploy:** https://portfolio-enzo-going.vercel.app/

## Como clonar

```bash
git clone https://github.com/enzo-going/portfolio-enzo-going.git
cd portfolio-enzo-going
```

## Identidade visual

- Base escura (`#060709`) com acento laranja `rgb(255, 145, 0)` e detalhes em vermelho.
- Tipografia: Space Grotesk (display), Inter (texto) e JetBrains Mono (elementos técnicos).
- Estética inspirada em telemetria/data lab: grids técnicos, labels mono, terminal estilizado.
- Animações em CSS puro + `IntersectionObserver` (sem bibliotecas de animação).

## Stack

- React 19
- TypeScript
- Vite
- CSS global estruturado com design tokens (`src/styles.css`)
- Lucide React para ícones

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois acesse a URL indicada pelo Vite no terminal.

## Build de produção

```bash
npm run build
```

Os arquivos finais serão gerados em `dist/`.

## Estrutura principal

- `src/data/portfolio.ts` — todo o conteúdo editável (perfil, projetos, skills, timeline, marquee).
- `src/App.tsx` — composição das seções.
- `src/components/Hero.tsx` — hero com terminal estilizado e fundo técnico.
- `src/components/FeaturedProject.tsx` — card do projeto flagship com visual SVG abstrato.
- `src/components/ProjectCard.tsx` — cards de projeto com glow que segue o cursor.
- `src/components/Reveal.tsx` — animação de entrada no scroll via IntersectionObserver.
- `src/components/Marquee.tsx` — faixa animada de tecnologias.
- `src/styles.css` — design tokens, identidade visual, responsividade e animações.

## Como editar o conteúdo

Praticamente todo o texto do site vive em `src/data/portfolio.ts`:

- `profile` — nome, headline, resumo e links.
- `projects` — cada projeto tem `tagline`, `description`, `highlights`, `stack` e flags
  `featured` (card flagship) e `side` (projeto lateral).
- `skillGroups` — categorias de skills (sem porcentagens, com `hint` opcional de honestidade).
- `timeline` — formação e experiência.
- `marqueeItems` — itens da faixa animada.

## Acessibilidade e performance

- `prefers-reduced-motion` desativa todas as animações.
- Navegação mobile completa (menu hambúrguer).
- Sem dependências de animação ou UI — apenas React + Lucide.
- SEO: meta description, Open Graph e theme-color em `index.html`.

## Próximas melhorias

- Adicionar imagem Open Graph (og:image) gerada com a identidade do site.
- Incluir screenshots reais dos projetos quando houver telas estáveis.
- Adicionar métricas reais e certificados conforme forem conquistados.
