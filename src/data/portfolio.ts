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
  email: "enzo.contato@email.com",
};

export const projects: Project[] = [
  {
    title: "international-conflict-risk-ml",
    description:
      "Projeto acadêmico de machine learning para análise preditiva de risco de conflitos internacionais usando dados heterogêneos em estrutura country-year.",
    emphasis:
      "Machine Learning, dados, análise temporal, modelagem e documentação técnica.",
    technologies: ["Python", "Pandas", "Machine Learning", "Country-Year"],
    link: "https://github.com/enzo-going/international-conflict-risk-ml",
    level: "principal",
  },
  {
    title: "battle-simulator-python-poo",
    description:
      "Simulador de batalha por turnos em Python, com foco em Programação Orientada a Objetos, refatoração, organização de código e evolução de projeto acadêmico.",
    emphasis: "Python, POO, arquitetura simples e refatoração.",
    technologies: ["Python", "POO", "Arquitetura", "Refatoração"],
    link: "https://github.com/enzo-going/battle-simulator-python-poo",
    level: "principal",
  },
  {
    title: "campsPdfManager-v2",
    description:
      "Sistema para gestão, validação e digitalização de documentos PDF com metadados, aplicado a rotinas reais de organização documental.",
    emphasis:
      "Python, Flask, organização de documentos e sistema aplicado a contexto real.",
    technologies: ["Python", "Flask", "PDF", "Metadados"],
    link: "https://github.com/enzo-going/campsPdfManager-v2",
    level: "principal",
  },
  {
    title: "analise-cesta-basica-brasil",
    description:
      "Análise exploratória da evolução do preço da cesta básica e das horas de trabalho necessárias para sua aquisição no Brasil.",
    emphasis:
      "Análise de dados, notebooks, visualização e interpretação socioeconômica.",
    technologies: ["Python", "Jupyter", "Pandas", "Visualização"],
    link: "https://github.com/enzo-going/analise-cesta-basica-brasil",
    level: "principal",
  },
  {
    title: "super-f1-modpack",
    description:
      "Organização e documentação de um modpack histórico para F1 25 com foco em carros lendários, liveries clássicas, sons, performance e estabilidade.",
    emphasis:
      "Projeto lateral: documentação técnica, curadoria, organização de arquivos e interesse em performance.",
    technologies: ["Documentação", "Curadoria", "Performance", "Automobilismo"],
    link: "https://github.com/enzo-going/super-f1-modpack",
    level: "lateral",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Linguagens",
    items: ["Python", "C", "SQL", "JavaScript básico"],
  },
  {
    title: "Desenvolvimento",
    items: ["Git", "GitHub", "HTML", "CSS", "React em evolução"],
  },
  {
    title: "Dados e ML",
    items: [
      "Pandas",
      "Jupyter",
      "Análise exploratória",
      "Modelagem supervisionada",
      "Visualização de dados",
    ],
  },
  {
    title: "Fundamentos",
    items: [
      "Estruturas de Dados",
      "POO",
      "Banco de Dados",
      "Redes",
      "Segurança da Informação",
    ],
  },
  {
    title: "Ferramentas",
    items: ["VS Code", "PowerShell", "Windows Server/GPO em aprendizado"],
  },
];
