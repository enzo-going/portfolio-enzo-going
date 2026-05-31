export type Project = {
  title: string;
  description: string;
  emphasis: string;
  technologies: string[];
  link: string;
  level: "principal" | "lateral";
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const profile = {
  name: "Enzo Liutkus Going",
  title: "Computer Science Student | Software Development | Data & Security",
  github: "https://github.com/enzo-going",
  linkedin: "https://www.linkedin.com/in/enzo-going-4a1917306/",
  email: "enzogoingpro@gmail.com",
};

export const projects: Project[] = [
  {
    title: "international-conflict-risk-ml",
    description:
      "Projeto acadÃªmico de machine learning para anÃ¡lise preditiva de risco de conflitos internacionais usando dados heterogÃªneos em estrutura country-year.",
    emphasis:
      "Machine Learning, dados, anÃ¡lise temporal, modelagem e documentaÃ§Ã£o tÃ©cnica.",
    technologies: ["Python", "Pandas", "Machine Learning", "Country-Year"],
    link: "https://github.com/enzo-going/international-conflict-risk-ml",
    level: "principal",
  },
  {
    title: "battle-simulator-python-poo",
    description:
      "Simulador de batalha por turnos em Python, com foco em ProgramaÃ§Ã£o Orientada a Objetos, refatoraÃ§Ã£o, organizaÃ§Ã£o de cÃ³digo e evoluÃ§Ã£o de projeto acadÃªmico.",
    emphasis: "Python, POO, arquitetura simples e refatoraÃ§Ã£o.",
    technologies: ["Python", "POO", "Arquitetura", "RefatoraÃ§Ã£o"],
    link: "https://github.com/enzo-going/battle-simulator-python-poo",
    level: "principal",
  },
  {
    title: "campsPdfManager-v2",
    description:
      "Sistema para gestÃ£o, validaÃ§Ã£o e digitalizaÃ§Ã£o de documentos PDF com metadados, aplicado a rotinas reais de organizaÃ§Ã£o documental.",
    emphasis:
      "Python, Flask, organizaÃ§Ã£o de documentos e sistema aplicado a contexto real.",
    technologies: ["Python", "Flask", "PDF", "Metadados"],
    link: "https://github.com/enzo-going/campsPdfManager-v2",
    level: "principal",
  },
  {
    title: "analise-cesta-basica-brasil",
    description:
      "AnÃ¡lise exploratÃ³ria da evoluÃ§Ã£o do preÃ§o da cesta bÃ¡sica e das horas de trabalho necessÃ¡rias para sua aquisiÃ§Ã£o no Brasil.",
    emphasis:
      "AnÃ¡lise de dados, notebooks, visualizaÃ§Ã£o e interpretaÃ§Ã£o socioeconÃ´mica.",
    technologies: ["Python", "Jupyter", "Pandas", "VisualizaÃ§Ã£o"],
    link: "https://github.com/enzo-going/analise-cesta-basica-brasil",
    level: "principal",
  },
  {
    title: "super-f1-modpack",
    description:
      "OrganizaÃ§Ã£o e documentaÃ§Ã£o de um modpack histÃ³rico para F1 25 com foco em carros lendÃ¡rios, liveries clÃ¡ssicas, sons, performance e estabilidade.",
    emphasis:
      "Projeto lateral: documentaÃ§Ã£o tÃ©cnica, curadoria, organizaÃ§Ã£o de arquivos e interesse em performance.",
    technologies: ["DocumentaÃ§Ã£o", "Curadoria", "Performance", "Automobilismo"],
    link: "https://github.com/enzo-going/super-f1-modpack",
    level: "lateral",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Linguagens",
    items: ["Python", "C", "SQL", "JavaScript bÃ¡sico"],
  },
  {
    title: "Desenvolvimento",
    items: ["Git", "GitHub", "HTML", "CSS", "React em evoluÃ§Ã£o"],
  },
  {
    title: "Dados e ML",
    items: [
      "Pandas",
      "Jupyter",
      "AnÃ¡lise exploratÃ³ria",
      "Modelagem supervisionada",
      "VisualizaÃ§Ã£o de dados",
    ],
  },
  {
    title: "Fundamentos",
    items: [
      "Estruturas de Dados",
      "POO",
      "Banco de Dados",
      "Redes",
      "SeguranÃ§a da InformaÃ§Ã£o",
    ],
  },
  {
    title: "Ferramentas",
    items: ["VS Code", "PowerShell", "Windows Server/GPO em aprendizado"],
  },
];

