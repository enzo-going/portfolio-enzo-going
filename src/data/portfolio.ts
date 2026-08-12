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
  link?: string;
  linkNote?: string;
  demo?: { href: string; label: string };
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
    demo: {
      href: "https://enzo-going.github.io/international-conflict-risk-ml/",
      label: "Ver dashboard",
    },
    featured: true,
  },
  {
    id: "netpulse",
    name: "NetPulse",
    repo: "netpulse",
    kindLabel: "Backend · Redes",
    tagline:
      "Monitoramento de ativos de rede que agrupa falhas simultâneas em um único incidente, em vez de disparar um alerta por equipamento.",
    description:
      "Um monitor comum trata cada host como problema isolado: quando o uplink de uma filial cai, ele enterra o operador em ruído. O NetPulse agrupa falhas simultâneas da mesma sub-rede em um incidente só. Núcleo de coleta e API prontos e testados; o dashboard e a análise de causa assistida por IA são as próximas etapas.",
    highlights: [
      "Correlação de falhas por sub-rede: um incidente no lugar de N alertas",
      "API FastAPI com documentação gerada do próprio código",
      "Estado do ativo é o pior dos seus checks, não uma média otimista",
      "Modo demo com parque sintético: roda sem tocar em nenhuma rede real",
    ],
    stack: ["Python", "FastAPI", "SQLite", "pytest", "ruff"],
    link: "https://github.com/enzo-going/netpulse",
    linkNote: "em construção",
  },
  {
    id: "ti-chamados",
    name: "Helpdesk de TI — Chamados via WhatsApp",
    repo: "ti-chamados-whatsapp",
    kindLabel: "Backend · Arquitetura",
    tagline:
      "Núcleo de um helpdesk de TI que transforma mensagens em chamados — triagem automática, rodízio de atendentes e painel local, com integração de mensagens plugável e testável sem rede.",
    description:
      "Foco atual: núcleo de helpdesk que transforma mensagens em chamados organizados — triagem automática por palavras-chave, rodízio entre atendentes ativos, follow-up sem duplicação, idempotência de eventos, persistência SQLite e painel local somente leitura. Python puro, zero dependências.",
    highlights: [
      "Domínio isolado das integrações: transporte e armazenamento plugáveis",
      "Borda da WhatsApp Cloud API (webhook, assinatura HMAC) testável sem rede",
      "Suíte com mais de 200 testes unittest, do fluxo de chamados ao painel",
    ],
    stack: ["Python", "SQLite", "unittest", "Zero dependências"],
    link: "https://github.com/enzo-going/ti-chamados-whatsapp",
  },
  {
    id: "print-monitor",
    name: "Print Monitor Local",
    repo: "print-monitor-local",
    kindLabel: "Automação · Redes",
    tagline:
      "Monitor local de impressoras de rede: contadores coletados por SNMP, histórico em SQLite e volume real de impressão por período, com dashboard e executável Windows.",
    description:
      "Impressoras de rede expõem um contador acumulado de páginas, não o volume de um mês. A ferramenta coleta leituras periódicas por SNMP, guarda o histórico em SQLite e calcula o volume de cada período pela diferença entre leituras — respondendo quanto cada setor imprimiu de fato.",
    highlights: [
      "Coleta SNMP em Python puro, sem dependências nativas",
      "Cálculo por diferença entre leituras, tratando reinício de contador",
      "Dashboard Flask com filtros, ranking e exportação CSV",
      "Descoberta de impressoras na rede e empacotamento Windows com PyInstaller",
    ],
    stack: ["Python", "SNMP", "SQLite", "Flask", "PyInstaller"],
    link: "https://github.com/enzo-going/print-monitor-local",
  },
  {
    id: "windows-deploy-kit",
    name: "Windows Deploy Kit",
    repo: "windows-deploy-kit",
    kindLabel: "Automação · Windows",
    tagline:
      "Pendrive que prepara e restaura máquinas Windows sem acompanhamento — remove o Microsoft 365 de fábrica, instala Office, apps e antivírus, e entra no domínio.",
    description:
      "Preparar um notebook novo consumia mais de uma hora de trabalho manual e falhava de um jeito diferente a cada tentativa. O kit reduz isso a um duplo clique: menu único, etapas que retomam de onde pararam e um modo simulação que mostra tudo o que seria feito antes de mudar qualquer coisa na máquina.",
    highlights: [
      "PowerShell 5.1 sem dependências: roda offline numa máquina recém-formatada",
      "Etapas idempotentes — rodar de novo pula o que já deu certo",
      "Senha de domínio só em memória: nunca em arquivo, log ou linha de comando",
      "Restauração com dupla trava, delegando o apagamento ao próprio Windows",
    ],
    stack: ["PowerShell", "Windows", "Active Directory", "Automação"],
    link: "https://github.com/enzo-going/windows-deploy-kit",
  },
  {
    id: "autobattler",
    name: "Tactical Autobattler",
    repo: "tactical-autobattler-python",
    kindLabel: "Software · POO",
    tagline:
      "Simulador tático de batalha por turnos em Python — projeto acadêmico evoluído para um motor de simulação com arquitetura, estratégias automáticas e testes.",
    description:
      "Refatoração e evolução de um autobattler por turnos: unidades táticas com linhas de frente e retaguarda, efeitos de combate, estratégias automáticas de bot, torneios round-robin com relatórios em JSON — motor separado da CLI e protegido por testes.",
    highlights: [
      "POO com o motor de batalha separado da camada de saída",
      "Estratégias automáticas, torneios e relatórios JSON",
      "Simulações determinísticas por seed, validadas em CI",
      "Jogável no navegador: o mesmo pacote Python rodando via Pyodide, sem servidor",
    ],
    stack: ["Python", "POO", "CLI", "unittest", "Pyodide"],
    link: "https://github.com/enzo-going/tactical-autobattler-python",
    demo: {
      href: "https://enzo-going.github.io/tactical-autobattler-python/",
      label: "Testar no navegador",
    },
  },
  {
    id: "pdf-document-manager",
    name: "PDF Document Manager",
    repo: "pdf-document-manager",
    kindLabel: "Automação · Backend",
    tagline:
      "Sistema de gestão, validação e digitalização de documentos PDF com metadados, aplicado a rotinas reais de organização documental.",
    description:
      "Projeto nascido de uma necessidade concreta em ambiente corporativo: backend em Flask com autenticação, upload, validação e metadados para organizar um fluxo administrativo de documentos, mais um painel de gestão.",
    highlights: [
      "Autenticação JWT com papéis (admin, usuário e visualizador)",
      "Upload, validação e edição dos metadados dos PDFs",
      "Registro de auditoria das ações e painel de métricas",
      "Configuração inteiramente por variáveis de ambiente",
      "Suíte de testes da API rodando em CI nas versões 3.11 a 3.13 do Python",
    ],
    stack: ["Python", "Flask", "SQLAlchemy", "JWT", "pytest", "PDF"],
    link: "https://github.com/enzo-going/pdf-document-manager",
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
      "CI reprocessa os dados brutos e falha se os CSVs versionados divergirem",
    ],
    stack: ["Python", "Jupyter", "pandas", "Visualização"],
    link: "https://github.com/enzo-going/analise-cesta-basica-brasil",
    demo: {
      href: "https://enzo-going.github.io/analise-cesta-basica-brasil/",
      label: "Ver dashboard",
    },
  },
  {
    id: "network-folder-search",
    name: "Network Folder Search",
    repo: "network-folder-search",
    kindLabel: "Automação · PowerShell",
    tagline:
      "Busca instantânea de arquivos em pastas locais e compartilhamentos de rede, a partir de um catálogo local — estritamente somente leitura.",
    description:
      "Varrer um compartilhamento de rede a cada consulta é lento. A ferramenta cataloga os nomes e caminhos uma vez em um índice local e transforma a busca em consulta imediata, sem nunca abrir, mover ou alterar os arquivos catalogados.",
    highlights: [
      "Índice local separado da consulta: varre a rede uma vez, busca em segundos",
      "Busca por várias palavras, tolerante a acentos e maiúsculas",
      "Caminhos de rede externalizados em configuração não versionada",
    ],
    stack: ["PowerShell", "Windows", "CSV", "Somente leitura"],
    link: "https://github.com/enzo-going/network-folder-search",
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
    items: ["Python", "C", "TypeScript / JavaScript", "SQL", "PowerShell"],
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
      "SNMP e monitoramento de ativos",
      "Segurança da informação",
      "Windows Server / GPO (em aprendizado)",
    ],
  },
  {
    title: "Ferramentas",
    items: ["Git", "GitHub", "GitHub Actions", "VS Code", "PowerShell"],
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
  "PowerShell",
  "SNMP",
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
      "Rotina técnica de TI: suporte, organização de sistemas e documentos e automação de processos — contexto que originou o PDF Document Manager e o Windows Deploy Kit.",
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
