# PROJECT_STATE.md

Última atualização: 2026-06-11

## Estado atual

- **Redesign v2 completo e validado localmente** (build TypeScript limpo,
  responsividade verificada em 1440px e 375px, zero erros de console).
- Bug crítico de encoding (mojibake em `src/data/portfolio.ts`) corrigido —
  a versão anterior em produção exibia acentos quebrados.
- **Redesign v2 em produção**: revisado, aprovado e mesclado na `main` em
  2026-06-11 (PR #1 + ajustes finos de header/skills).
- Deploy Vercel conectado à `main`: https://portfolio-enzo-going.vercel.app/

## Principais decisões

| Decisão | Motivo |
|---|---|
| Sem Framer Motion / libs de animação | CSS + IntersectionObserver cobrem tudo; bundle leve (~69 KB gzip) |
| Conteúdo centralizado em `src/data/portfolio.ts` | Editar texto sem tocar em componente |
| Skills por categoria, sem barras de % | Honestidade técnica; barras genéricas não informam nada |
| Flagship = `international-conflict-risk-ml` | Projeto mais forte: pipeline, validação temporal, dashboard |
| Visual do flagship é SVG abstrato rotulado | Não fingir screenshot; nota explícita no card |
| Identidade preto + laranja `rgb(255,145,0)` | Técnico/F1/data lab sem copiar a referência (verde neon evitado) |
| Fontes Google (Space Grotesk/Inter/JetBrains Mono) | Personalidade tipográfica com custo de carregamento aceitável |

## Pendências

- [ ] `og:image` com a identidade nova (hoje o Open Graph não tem imagem).
- [ ] Favicon com monograma "EG" (hoje usa o padrão do Vite/nenhum).
- [ ] Screenshots reais dos projetos quando houver telas estáveis.

## Próximos passos sugeridos

1. Atualizar o link do portfólio no perfil do GitHub e LinkedIn.
2. Ajustar textos que não soarem naturais (tudo em `src/data/portfolio.ts`).
3. Criar favicon e `og:image` com a identidade nova.
