export const pt = {
  // Navigation
  nav: {
    about: "Sobre",
    experience: "Experiência",
    skills: "Skills",
    projects: "Projetos",
    contact: "Contato",
    language: "Idioma",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    menu: "Menu",
    resumeSite: "Currículo",
  },

  // Hero Section
  hero: {
    role: "Engenharia de Computação no CEFET-MG",
    summary:
      "Projetei a eletrônica embarcada da equipe Fórmula CEFAST e depois respondi pela área de TI dela.",
    viewProjects: "Ver projetos",
    contactMe: "Contato",
  },

  // About Section
  about: {
    title: "Sobre",
    // O Sobre não repete a linha do tempo: Experiência e Projetos já a
    // contam, com data. Aqui vai a única coisa que elas não conseguem
    // dizer (como você trabalha) e a prova disso num artefato seu.
    paragraphs: {
      p1: "Gosto de trabalhar dos dois lados: hardware e software. Na Fórmula CEFAST isso é literal. Desenhei placas em Altium para o carro e depois respondi pelos servidores, pelo fórum e pela plataforma de sócios da equipe.",
      // TODO(bernardo): regra 5, uma frase sobre algo que ainda não está
      // resolvido faz mais por este parágrafo que qualquer adjetivo.
      p2: "Na prática a semana alterna entre coisas bem diferentes: layout de PCB, barramento CAN e firmware de um lado; container, proxy reverso, banco e deploy do outro. O que me interessa é a fronteira entre os dois, quando um problema de firmware vira problema de infraestrutura.",
      // TODO(bernardo): a linha humana, e só você tem essa. O modelo é o
      // Mitchell Hashimoto: não "sou apaixonado por aviação", mas "tenho
      // licença de piloto privado com habilitação por instrumentos".
      // Específica, verificável, sem relação com o trabalho. Enquanto
      // estiver vazia ela simplesmente não é renderizada.
      p3: "",
    },
  },

  // Experience Section
  experience: {
    title: "Experiência",
    educationTitle: "Formação",
    since: "desde",
  },

  // Skills Section
  skills: {
    title: "Tecnologias",
    categories: {
      languages: "Linguagens",
      backend: "Backend & APIs",
      embedded: "Embedded & Hardware",
      devops: "DevOps & Infra",
      frontend: "Frontend & Web",
    },
  },

  // Projects Section
  projects: {
    title: "Projetos",
    otherProjects: "Outros Projetos",
  },

  // Contact Section
  contact: {
    title: "Contato",
    description:
      "Aberto a conversas sobre sistemas embarcados, infraestrutura e criptografia, e a oportunidades de estágio e pesquisa. O e-mail é o caminho mais direto.",
    emailLabel: "E-mail",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
    // Contact.tsx já pedia esta chave; ela nunca existiu em nenhum
    // idioma, então o card de localização renderizava sem rótulo.
    locationLabel: "Localização",
    location: "Belo Horizonte, MG, Brasil",
    sendMessage: "Mandar um e-mail",
  },

  // Footer
  footer: {
    builtWith: "Feito com React, TypeScript e Tailwind CSS.",
  },

  // SEO por rota
  seo: {
    home: {
      title:
        "Bernardo Rocha | Sistemas embarcados e infraestrutura",
      description:
        "Estudante de Engenharia de Computação no CEFET-MG. Eletrônica embarcada, telemetria e infraestrutura na Fórmula CEFAST.",
    },
    resume: {
      title: "Currículo | Bernardo Rocha",
      description:
        "Formação, experiência, pesquisa e projetos de Bernardo Vieira Rocha, Engenharia de Computação no CEFET-MG.",
    },
    notFound: {
      title: "Página não encontrada | Bernardo Rocha",
      description: "Esta página não existe.",
    },
  },

  // 404
  notFound: {
    title: "Página não encontrada",
    description: "O endereço que você abriu não existe ou foi movido.",
    backHome: "Voltar para a home",
  },

  // Resume Page
  resume: {
    downloadPdf: "Salvar em PDF",
    backHome: "Voltar",
    role: "Engenharia de Computação (CEFET-MG)",
    summary:
      "Curso Engenharia de Computação no CEFET-MG. Na equipe Fórmula CEFAST SAE, projetei módulos eletrônicos em Altium Designer e depois fui Head de TI, respondendo pela stack, pela infraestrutura e pelas pessoas da área.",
    sections: {
      experience: "Experiência",
      education: "Formação",
      research: "Pesquisa e Apresentações",
      skills: "Habilidades Técnicas",
      projects: "Projetos",
      certifications: "Certificações",
    },
    skillCategories: {
      languages: "Linguagens",
      backend: "Backend & APIs",
      embedded: "Embedded & Hardware",
      devops: "DevOps & Infra",
      frontend: "Frontend & Web",
    },
    advisors: "Orientação",
    updatedIn: "Atualizado em",
  },
} as const;

// Deep string type for translations - allows any string value
type DeepStringify<T> = {
  [K in keyof T]: T[K] extends string ? string : DeepStringify<T[K]>;
};

export type TranslationKeys = DeepStringify<typeof pt>;
