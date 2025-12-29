export const pt = {
    // Navigation
    nav: {
        about: "Sobre",
        skills: "Skills",
        projects: "Projetos",
        travel: "Viagens",
        contact: "Contato",
        resumeSite: "Currículo",
    },

    // Hero Section
    hero: {
        greeting: "./init --portfolio",
        role: "Engenheiro de Computação & Cientista da Computação",
        tagline: "<Construindo o que importa./>",
        viewProjects: "Ver Projetos",
        contactMe: "Contato",
        scroll: "scroll",
    },

    // About Section
    about: {
        sectionNumber: "01.",
        title: "Sobre Mim",
        paragraph1: {
            start: "Sou um entusiasta da tecnologia que acredita no poder da",
            highlight1: "engenharia bem feita",
            middle: ". Como estudante de Engenharia de Computação e Ciência da Computação, transito entre o hardware e o software com naturalidade.",
        },
        paragraph2: {
            start: "Minha paixão está em criar soluções que fazem a diferença — desde",
            highlight1: "sistemas embarcados",
            middle: "que operam no limite do metal até",
            highlight2: "arquiteturas de backend",
            end: "escaláveis e resilientes.",
        },
        paragraph3: {
            start: "Acredito que a melhor tecnologia é aquela que",
            highlight: "simplesmente funciona",
            end: "— elegante por baixo dos panos, invisível para quem usa.",
        },
        terminalUser: "bernardo@portfolio",
        terminalCommand: "echo $FILOSOFIA",
        terminalOutput: '"Código limpo, sistemas robustos, impacto mensurável."',
        highlights: {
            softwareEngineering: "Engenharia de Software",
            embeddedSystems: "Sistemas Embarcados",
            electronics: "Eletrônica",
            backend: "Backend",
            devops: "DevOps",
            systemsDesign: "Design de Sistemas",
        },
    },

    // Skills Section
    skills: {
        sectionNumber: "02.",
        title: "Tecnologias",
        categories: {
            languages: "Linguagens",
            backend: "Backend & APIs",
            embedded: "Embedded & Hardware",
            devops: "DevOps & Cloud",
        },
        stats: {
            projects: "Projetos Concluídos",
            experience: "Anos de Experiência",
            certifications: "Certificações",
            coffee: "Café Consumido",
        },
    },

    // Projects Section
    projects: {
        sectionNumber: "03.",
        title: "Projetos",
        featured: "Projeto em Destaque",
        otherProjects: "Outros Projetos",
    },

    // Travel Section
    travel: {
        sectionNumber: "04.",
        title: "Viagens",
    },

    // Contact Section
    contact: {
        sectionNumber: "05.",
        title: "Contato",
        description:
            "Estou sempre aberto a novas oportunidades, colaborações e conversas sobre tecnologia. Se você tem um projeto interessante ou apenas quer trocar uma ideia, ficarei feliz em conversar.",
        emailLabel: "Email",
        locationLabel: "Localização",
        location: "Belo Horizonte, Brasil",
        sendMessage: "Enviar Mensagem",
        thankYou: 'echo "Obrigado por visitar!"',
    },

    // Footer
    footer: {
        designedWith: "May the Force be with you",
    },

    // Resume Page
    resume: {
        downloadPdf: "Download PDF",
        role: "Engenheiro de Computação & Cientista da Computação",
        summary:
            "Estudante de Engenharia de Computação e Ciência da Computação com forte atuação em engenharia de software, sistemas embarcados, eletrônica, backend e DevOps. Apaixonado por criar soluções que fazem a diferença — desde sistemas que operam no limite do hardware até arquiteturas de backend escaláveis e resilientes.",
        sections: {
            experience: "Experiência",
            education: "Educação",
            skills: "Habilidades Técnicas",
            certifications: "Certificações",
        },
        skillCategories: {
            languages: "Linguagens",
            backend: "Backend & APIs",
            embedded: "Embedded & Hardware",
            devops: "DevOps & Cloud",
        },
        updatedIn: "Atualizado em",
    },
} as const;

// Deep string type for translations - allows any string value
type DeepStringify<T> = {
    [K in keyof T]: T[K] extends string ? string : DeepStringify<T[K]>;
};

export type TranslationKeys = DeepStringify<typeof pt>;
