export type Project = {
  id: string;
  name: string;
  repo: string;
  kindLabel: string;
  tagline: string;
  description: string;
  problem?: string;
  approach?: string;
  highlights: string[];
  stack: string[];
  link: string;
  featured?: boolean;
  side?: boolean;
};

export type SkillGroup = {
  title: string;
  hint?: string;
  items: string[];
};

export type TimelineEntry = {
  org: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
};

export const profile = {
  name: "Enzo Liutkus Going",
  shortName: "Enzo Going",
  role: "Desenvolvedor em formação — Software · Dados & ML · Segurança",
  summary:
    "Estudante de Ciência da Computação na UniSantos, transformando fundamentos em projetos reais: pipeline de machine learning com validação temporal, automação aplicada a fluxo administrativo e software com arquitetura e testes.",
  location: "Santos, SP — Brasil",
  github: "https://github.com/enzo-going",
  linkedin: "https://www.linkedin.com/in/enzo-going-4a1917306/",
  email: "enzogoingpro@gmail.com",
};

export const projects: Project[] = [
  {
    id: "conflict-risk",
    name: "International Conflict Risk ML",
    repo: "international-conflict-risk-ml",
    kindLabel: "Machine Learning · Dados",
    tagline:
      "Sistema de ML para análise preditiva de risco de conflitos internacionais a partir de dados heterogêneos em estrutura country-year.",
    description:
      "Projeto flagship: um pipeline completo de machine learning aplicado a um problema difícil de verdade — estimar risco de conflito combinando fontes de dados heterogêneas por país e ano.",
    problem:
      "Prever risco de conflito exige integrar fontes heterogêneas, alinhar tudo em estrutura country-year e — o ponto mais crítico — impedir que informação do futuro vaze para o treino.",
    approach:
      "Pipeline em Python: ingestão e padronização dos dados, engenharia de features, validação temporal (treina no passado, testa no futuro), modelagem supervisionada com scikit-learn e leitura dos resultados em dashboard.",
    highlights: [
      "Pipeline de dados reproduzível, da ingestão ao relatório",
      "Validação temporal desenhada para evitar vazamento de dados",
      "Modelagem supervisionada com scikit-learn",
      "Dashboard e documentação técnica organizada",
    ],
    stack: ["Python", "pandas", "scikit-learn", "Jupyter", "Dashboard"],
    link: "https://github.com/enzo-going/international-conflict-risk-ml",
    featured: true,
  },
  {
    id: "autobattler",
    name: "Tactical Autobattler",
    repo: "battle-simulator-python-poo",
    kindLabel: "Software · POO",
    tagline:
      "Simulador tático de batalha por turnos em Python — projeto acadêmico evoluído para código com arquitetura e testes.",
    description:
      "Refatoração e evolução de um autobattler por turnos: responsabilidades separadas com POO, regras de combate isoladas em módulos, CLI para rodar simulações e testes protegendo o comportamento durante a refatoração.",
    highlights: [
      "POO com separação clara de responsabilidades",
      "CLI para executar simulações",
      "Testes garantindo a refatoração",
    ],
    stack: ["Python", "POO", "CLI", "Testes"],
    link: "https://github.com/enzo-going/battle-simulator-python-poo",
  },
  {
    id: "camps-pdf",
    name: "CAMPS PDF Manager v2",
    repo: "campsPdfManager-v2",
    kindLabel: "Automação · Backend",
    tagline:
      "Sistema de gestão, validação e digitalização de documentos PDF com metadados, aplicado a rotinas reais de organização documental.",
    description:
      "Projeto nascido de uma necessidade concreta no CAMPS Santos: backend em Flask com upload, validação e metadados para digitalizar e organizar um fluxo administrativo de documentos.",
    highlights: [
      "Uso em contexto administrativo real",
      "Validação e metadados de documentos",
      "Automação de etapas manuais do fluxo",
    ],
    stack: ["Python", "Flask", "PDF", "Metadados"],
    link: "https://github.com/enzo-going/campsPdfManager-v2",
  },
  {
    id: "cesta-basica",
    name: "Análise — Cesta Básica Brasil",
    repo: "analise-cesta-basica-brasil",
    kindLabel: "Dados · EDA",
    tagline:
      "Análise exploratória da evolução do preço da cesta básica e das horas de trabalho necessárias para comprá-la no Brasil.",
    description:
      "Notebooks com limpeza de dados, séries históricas e visualizações relacionando preço da cesta básica e poder de compra — leitura socioeconômica orientada por dados.",
    highlights: [
      "Séries históricas e análise exploratória",
      "Visualizações com interpretação socioeconômica",
    ],
    stack: ["Python", "Jupyter", "pandas", "Visualização"],
    link: "https://github.com/enzo-going/analise-cesta-basica-brasil",
  },
  {
    id: "f1-modpack",
    name: "Super F1 Modpack",
    repo: "super-f1-modpack",
    kindLabel: "Projeto lateral · Documentação",
    tagline:
      "Curadoria e documentação de um modpack histórico para F1 25 — carros lendários, liveries clássicas, performance e estabilidade.",
    description:
      "Projeto lateral de organização técnica: estrutura de arquivos, compatibilidade entre mods e documentação cuidadosa para instalação reproduzível.",
    highlights: ["Documentação técnica", "Curadoria e organização de arquivos"],
    stack: ["Documentação", "Curadoria", "Performance"],
    link: "https://github.com/enzo-going/super-f1-modpack",
    side: true,
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Linguagens",
    items: ["Python", "C", "TypeScript / JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "HTML", "CSS", "Vite"],
  },
  {
    title: "Dados & ML",
    items: [
      "pandas",
      "scikit-learn",
      "Jupyter",
      "Análise exploratória",
      "Modelagem supervisionada",
      "Validação temporal",
    ],
  },
  {
    title: "Backend & Automação",
    items: ["Flask", "APIs", "Scripts Python", "Automação de rotinas"],
  },
  {
    title: "Redes & Segurança",
    hint: "fundamentos em construção",
    items: [
      "Fundamentos de redes",
      "Segurança da informação",
      "Windows Server / GPO (em aprendizado)",
    ],
  },
  {
    title: "Ferramentas",
    items: ["Git", "GitHub", "VS Code", "PowerShell"],
  },
];

export const marqueeItems = [
  "Python",
  "C",
  "TypeScript",
  "React",
  "pandas",
  "scikit-learn",
  "SQL",
  "Flask",
  "Jupyter",
  "Git",
  "Vite",
  "Redes",
  "Segurança",
  "Automação",
];

export const timeline: TimelineEntry[] = [
  {
    org: "Universidade Católica de Santos — UniSantos",
    role: "Bacharelado em Ciência da Computação",
    period: "Em andamento",
    description:
      "Base formal em estruturas de dados, POO, bancos de dados, redes e segurança da informação — aplicada em paralelo nos projetos do portfólio.",
    tags: ["Estruturas de dados", "POO", "Banco de dados", "Redes"],
  },
  {
    org: "CAMPS Santos",
    role: "Experiência prática em TI",
    period: "Atual",
    description:
      "Rotina técnica de TI: suporte, organização de sistemas e documentos e automação de processos — contexto que originou o CAMPS PDF Manager v2.",
    tags: ["Suporte técnico", "Automação", "Fluxo administrativo"],
  },
  {
    org: "Projetos aplicados",
    role: "Evolução contínua",
    period: "Sempre",
    description:
      "Aprendizado dirigido por projetos: entender o problema, estruturar os dados, validar hipóteses, testar, documentar e iterar.",
    tags: ["Machine Learning", "Dados", "Software"],
  },
];
