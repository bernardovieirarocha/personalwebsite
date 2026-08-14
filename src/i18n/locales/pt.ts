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
        resumeSite: "Currículo",
    },

    // Hero Section
    hero: {
        role: "Engenharia de Computação no CEFET-MG e Ciência da Computação na PUC Minas",
        summary:
            "Projetei a eletrônica embarcada da equipe Fórmula CEFAST e hoje lidero a área de TI dela.",
        viewProjects: "Ver projetos",
        contactMe: "Contato",
    },

    // About Section
    about: {
        title: "Sobre",
        // TODO(bernardo): estes três parágrafos são o seu texto. Reescreva com
        // fatos que só você sabe: que módulo você projetou, o que quebrou,
        // o que você aprendeu consertando. Ver as regras 3 e 4 do CLAUDE.md.
        paragraphs: {
            p1: "Curso Engenharia de Computação no CEFET-MG e Ciência da Computação na PUC Minas ao mesmo tempo. Na prática isso significa passar o dia entre o esquemático de uma placa e o deploy de um serviço, e é essa combinação que eu venho construindo de propósito.",
            p2: "Entrei na Fórmula CEFAST, equipe de Fórmula SAE do CEFET-MG, projetando módulos eletrônicos em Altium Designer. Hoje sou Head de TI da equipe: decido a stack, opero a infraestrutura que a gente usa (a plataforma de sócios, o fórum, os servidores) e coordeno as outras pessoas da área.",
            p3: "Fora da equipe, mantenho um homelab em Proxmox com ZFS que uso para aprender infraestrutura da forma mais direta possível: quebrando e consertando. E tenho um interesse específico por criptografia, e foi de onde saiu o CriptoEscape.",
        },
        highlights: {
            softwareEngineering: "Engenharia de Software",
            embeddedSystems: "Sistemas Embarcados",
            electronics: "Eletrônica",
            backend: "Backend",
            devops: "Infraestrutura",
            systemsDesign: "Projeto de Sistemas",
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
            title: "Bernardo Rocha | Engenharia de Computação, sistemas embarcados e infraestrutura",
            description:
                "Estudante de Engenharia de Computação (CEFET-MG) e Ciência da Computação (PUC Minas). Projeto eletrônica embarcada, telemetria e infraestrutura para a equipe Fórmula CEFAST.",
        },
        resume: {
            title: "Currículo | Bernardo Rocha",
            description:
                "Formação, experiência, certificações e projetos de Bernardo Vieira Rocha, estudante de Engenharia de Computação no CEFET-MG e Ciência da Computação na PUC Minas.",
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
        downloadPdf: "Imprimir / salvar em PDF",
        backHome: "Voltar",
        role: "Engenharia de Computação (CEFET-MG) e Ciência da Computação (PUC Minas)",
        summary:
            "Curso Engenharia de Computação no CEFET-MG e Ciência da Computação na PUC Minas, simultaneamente. Na equipe Fórmula CEFAST SAE, projetei módulos eletrônicos em Altium Designer e hoje sou Head de TI, respondendo pela stack, pela infraestrutura e pelas pessoas da área.",
        sections: {
            experience: "Experiência",
            education: "Formação",
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
        updatedIn: "Atualizado em",
    },
} as const;

// Deep string type for translations - allows any string value
type DeepStringify<T> = {
    [K in keyof T]: T[K] extends string ? string : DeepStringify<T[K]>;
};

export type TranslationKeys = DeepStringify<typeof pt>;
