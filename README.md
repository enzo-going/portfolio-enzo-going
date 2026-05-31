# Enzo Liutkus Going Portfolio

Site de portfólio pessoal profissional para apresentar projetos, habilidades,
formação e experiência prática em tecnologia.

## Objetivo

O projeto comunica a evolução de Enzo Liutkus Going como estudante de Ciência da
Computação, com foco em desenvolvimento de software, dados, machine learning,
automação, segurança da informação e projetos reais.

## Stack

- React
- TypeScript
- Vite
- CSS global estruturado
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

- `src/App.tsx`: composição das seções do portfólio.
- `src/data/portfolio.ts`: dados editáveis de perfil, projetos e skills.
- `src/components/`: componentes reutilizáveis.
- `src/styles.css`: identidade visual, responsividade e estados de interação.
- `public/hero-performance.png`: imagem hero original gerada para o projeto.

## Publicação

O projeto está pronto para ser publicado em Vercel. Para GitHub Pages, pode ser
necessário configurar o `base` do Vite caso o site seja servido por um subcaminho
do tipo `/nome-do-repositorio/`.

## Personalizações futuras

- Trocar o e-mail placeholder em `src/data/portfolio.ts`.
- Ajustar descrições dos projetos conforme cada repositório evoluir.
- Adicionar métricas reais, certificados ou experiências confirmadas.
- Incluir screenshots reais dos projetos quando houver telas estáveis.
