// ============================================
// PERSONAL INFORMATION
// ============================================

export const personalInfo = {
    name: "Bernardo Rocha",
    fullName: "Bernardo Vieira Rocha",
    initials: "BVR",
    email: "b.vieira.rocha@gmail.com",
    // Telefone removido de propósito: este objeto vai inteiro para o bundle público.
    // Contato pessoal fica só no PDF do currículo, enviado sob demanda.
    location: {
        city: "Belo Horizonte",
        state: "MG",
        country: "Brasil",
        countryEn: "Brazil",
    },
    // Auto-hospedado: vinha de avatars.githubusercontent.com a cada visita,
    // 215 KB de PNG num <img> de 128 px, e era terceiro no caminho crítico.
    avatarUrl: "/avatar.webp",
    website: "https://bernardorocha.com",
} as const;

// ============================================
// SOCIAL LINKS
// ============================================

export const socialLinks = {
    github: "https://github.com/bernardovieirarocha",
    linkedin: "https://www.linkedin.com/in/bernardovrocha/",
    twitter: "https://twitter.com/rocha_bbernardo",
} as const;

// ============================================
// SKILLS
// ============================================

// REGRA: toda tecnologia listada aqui precisa aparecer em pelo menos um projeto
// do array `projects` abaixo. Sem exceção. Ver CLAUDE.md.
export const skills = {
    languages: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript"],
    backend: ["Node.js", "Django", "PostgreSQL", "MongoDB", "REST"],
    embedded: ["ESP32", "Arduino", "Altium Designer", "PCB Design", "CAN"],
    devops: ["Docker", "Linux", "Nginx", "Git", "Proxmox", "ZFS"],
    frontend: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
} as const;

// ============================================
// WORK EXPERIENCE
// ============================================

export type WorkExperience = {
    company: string;
    title: {
        pt: string;
        en: string;
    };
    description: {
        pt: string;
        en: string;
    };
    location: string;
    startDate: string;
    endDate: string | null;
    technologies: string[];
    logo?: string;
};

export const workExperience: WorkExperience[] = [
    {
        company: "Fórmula CEFAST, CEFET-MG",
        title: {
            pt: "Head de TI",
            en: "Head of IT",
        },
        description: {
            // TODO(bernardo): se puder, cite UM sistema que você decidiu e por quê.
            // "Escolhi NodeBB no lugar de X porque Y" vale mais que a lista abaixo.
            pt: "Coordeno a área de TI da equipe: distribuo e reviso o trabalho dos membros, faço o onboarding de novatos e decido stack e arquitetura. Opero a infraestrutura que a equipe usa no dia a dia (VPS, containers, domínios, fórum e plataforma de sócios) e levanto a necessidade das outras subequipes para traduzir em sistema.",
            en: "I lead the team's IT area: assigning and reviewing the members' work, onboarding newcomers, and making the stack and architecture calls. I run the infrastructure the team depends on day to day (VPS, containers, domains, forum and membership platform) and gather requirements from the other subteams to turn them into working systems.",
        },
        location: "Presencial",
        startDate: "2026.1",
        endDate: "2026.2",
        technologies: ["Docker", "Nginx", "Linux", "VPS", "PostgreSQL", "Arquitetura"],
        logo: "/cefast.svg",
    },
    {
        company: "Fórmula CEFAST, CEFET-MG",
        title: {
            pt: "Projetista Eletrônico",
            en: "Electronic Designer",
        },
        description: {
            // TODO(bernardo): cite um módulo concreto que você projetou.
            // "Projetei a PCB do X, que faz Y" vale mais que "projetista de módulos".
            pt: "Projetei módulos eletrônicos do protótipo de Fórmula SAE em Altium Designer, da esquemática ao layout de PCB, e trabalhei na telemetria embarcada do carro.",
            en: "I designed electronic modules for the Formula SAE prototype in Altium Designer, from schematic to PCB layout, and worked on the car's embedded telemetry.",
        },
        location: "Presencial",
        startDate: "2024.2",
        endDate: "2026.1",
        technologies: ["Altium Designer", "PCB Design", "CAN", "Sistemas Embarcados"],
        logo: "/cefast.svg",
    },
    {
        company: "PUC Minas",
        title: {
            pt: "Monitor de AEDS I",
            en: "Teaching Assistant, Data Structures I",
        },
        description: {
            pt: "Monitoria de Algoritmos e Estruturas de Dados I: atendimento a alunos, revisão de exercícios e apoio na correção.",
            en: "Teaching assistant for Algorithms and Data Structures I: student office hours, exercise review and grading support.",
        },
        location: "Presencial",
        startDate: "2024",
        endDate: "2025",
        technologies: ["C", "Algoritmos", "Estruturas de Dados"],
        logo: "/pucminas.png",
    },
];

// ============================================
// EDUCATION
// ============================================

export type Education = {
    institution: string;
    degree: {
        pt: string;
        en: string;
    };
    description?: {
        pt: string;
        en: string;
    };
    startDate: string;
    endDate: string;
    logo?: string;
};

export const education: Education[] = [
    {
        institution: "Centro Federal de Educação Tecnológica de Minas Gerais (CEFET-MG)",
        degree: {
            pt: "Bacharelado em Engenharia de Computação",
            en: "Bachelor's in Computer Engineering",
        },
        description: {
            pt: "Foco em sistemas embarcados, arquitetura de computadores e engenharia de software.",
            en: "Focus on embedded systems, computer architecture, and software engineering.",
        },
        startDate: "2024",
        endDate: "2029",
        logo: "/cefetmg.png",
    },
    {
        institution: "Pontifícia Universidade Católica de Minas Gerais (PUC Minas)",
        degree: {
            pt: "Bacharelado em Ciência da Computação",
            en: "Bachelor's in Computer Science",
        },
        description: {
            pt: "Dupla graduação com ênfase em algoritmos, estruturas de dados e teoria da computação.",
            en: "Double degree with emphasis on algorithms, data structures, and theory of computation.",
        },
        startDate: "2024",
        endDate: "2028",
        logo: "/pucminas.png",
    },
    {
        institution: "Colégio Magnum Agostiniano Cidade Nova",
        degree: {
            pt: "Ensino Médio Completo",
            en: "High School Diploma",
        },
        startDate: "2019",
        endDate: "2023",
    },
];

// ============================================
// CERTIFICATIONS
// ============================================

export type Certification = {
    name: {
        pt: string;
        en: string;
    };
    issuer: string;
    date: string;
    link?: string;
};

export const certifications: Certification[] = [
    {
        name: {
            pt: "Algoritmos e Programação Orientada a Objetos com Swift",
            en: "Algorithms and Object-Oriented Programming with Swift",
        },
        issuer: "HackaTruck",
        date: "2024",
        link: "https://lms.hackatruck.com.br/mod/simplecertificate/verify.php",
    },
    {
        name: {
            pt: "Red Hat System Administration I (RH124)",
            en: "Red Hat System Administration I (RH124)",
        },
        issuer: "Red Hat",
        date: "2024",
    },
    {
        name: {
            pt: "Python 3 COMPLETO",
            en: "Python 3 Complete Course",
        },
        issuer: "Udemy",
        date: "2018",
        link: "https://www.udemy.com/certificate/UC-21V2Q9RM/",
    },
    {
        name: {
            pt: "Desenvolvimento web com Django, React e deploy AWS e Linux",
            en: "Web Development with Django, React and AWS/Linux Deploy",
        },
        issuer: "Udemy",
        date: "2024",
        link: "https://www.udemy.com/certificate/UC-2dcdc62c-fde4-48fa-99e3-9bd8eeb77a49/",
    },
    {
        name: {
            pt: "Medalha de Ouro - Olimpíada Internacional Mathématiques sans frontières",
            en: "Gold Medal - International Mathematics Without Borders Olympiad",
        },
        issuer: "OIMSF",
        date: "2023",
    },
    {
        name: {
            pt: "Medalha de Prata - Olimpíada Brasileira de Astronomia e Astronáutica",
            en: "Silver Medal - Brazilian Astronomy and Astronautics Olympiad",
        },
        issuer: "OBA",
        date: "2023",
    },
];

// ============================================
// PROJECTS
// ============================================

export type Project = {
    title: string;
    description: {
        pt: string;
        en: string;
    };
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
    /**
     * Dimensões são as do arquivo, não as de exibição: elas reservam o espaço
     * antes da imagem carregar (sem isso o texto abaixo pula) e definem a
     * proporção de render. Cada screenshot tem a sua — nenhuma é cortada.
     */
    image?: { src: string; width: number; height: number };
    featured?: boolean;
};

export const projects: Project[] = [
    // ── EM DESTAQUE ─────────────────────────────────────────────────────────
    {
        title: "Plataforma de Sócios da Fórmula CEFAST",
        description: {
            pt: "Sistema de sócios da equipe, em produção: cadastro, planos por tier, área do associado e exportação de dados. Backend, frontend e deploy próprios, em containers atrás de Nginx numa VPS.",
            en: "The team's membership system, in production: sign-up, tiered plans, a member area and data export. Backend, frontend and deployment all in-house, containerized behind Nginx on a VPS.",
        },
        techStack: ["Docker", "Nginx", "PostgreSQL", "Node.js", "React", "VPS"],
        githubUrl: "https://github.com/bernardovieirarocha/SociosFormula",
        image: { src: "/projects/socios-fcefast.webp", width: 1800, height: 1016 },
        featured: true,
    },
    {
        title: "Eletrônica e telemetria do carro",
        description: {
            // TODO(bernardo): a ponte é a parte mais distintiva daqui. Diga o
            // estado real dela, inclusive o que ainda não funciona (regra 5).
            pt: "Eletrônica embarcada do protótipo de Fórmula SAE, das placas ao acesso remoto: datalogger próprio (MAQ), módulo de distribuição de potência controlado por CAN, modem LTE Cat-M1 (BG95-M3) e uma ponte serial para TCP em ESP32 que expõe a ECU MegaSquirt para tuning remoto por um relay mTLS, no lugar de um notebook ligado no box. Placas projetadas em Altium Designer.",
            en: "Embedded electronics for the Formula SAE prototype, from the boards to remote access: an in-house datalogger (MAQ), a power distribution module controlled over CAN, an LTE Cat-M1 modem (BG95-M3), and an ESP32 serial-to-TCP bridge that exposes the MegaSquirt ECU for remote tuning through an mTLS relay, instead of a laptop wired up in the pit. Boards designed in Altium Designer.",
        },
        techStack: ["Altium Designer", "PCB Design", "CAN", "ESP32", "C++", "mTLS"],
        image: { src: "/projects/telemetria-dashboard.webp", width: 1800, height: 881 },
        featured: true,
    },
    {
        title: "FlixMate",
        description: {
            pt: "Aplicação web de recomendação e descoberta de filmes, com sistema de matching entre usuários. Feita em dupla.",
            en: "A web app for movie recommendation and discovery, with a matching system between users. Built with a teammate.",
        },
        techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        githubUrl: "https://github.com/rubensbkl/Flixmate",
        image: { src: "/projects/flixmate.webp", width: 1600, height: 1000 },
        featured: true,
    },
    {
        title: "Site da Fórmula CEFAST",
        description: {
            pt: "Site institucional da equipe, construído em Next.js com shadcn/ui.",
            en: "The team's public website, built with Next.js and shadcn/ui.",
        },
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        image: { src: "/projects/site-fcefast.webp", width: 1600, height: 1092 },
        // TODO(bernardo): link do site no ar e do repo, se for público.
        featured: true,
    },
    {
        title: "Homelab em Proxmox e ZFS",
        description: {
            pt: "Infraestrutura doméstica em Proxmox VE com storage ZFS: containers de serviços, proxy reverso com TLS, DNS local, acesso remoto zero-trust e monitoramento. Documentado em MkDocs enquanto é construído.",
            en: "Home infrastructure on Proxmox VE with ZFS storage: service containers, a reverse proxy with TLS, local DNS, zero-trust remote access and monitoring. Documented in MkDocs as it is built.",
        },
        techStack: ["Proxmox", "ZFS", "Docker", "Nginx", "Linux", "MkDocs"],
        image: { src: "/projects/homelab-proxmox.webp", width: 1800, height: 794 },
        // TODO(bernardo): publicar o homelabdocs num repo e linkar aqui.
        featured: true,
    },

    // ── OUTROS ──────────────────────────────────────────────────────────────
    {
        title: "CriptoEscape",
        description: {
            pt: "Escape room digital para ensino de aritmética modular e criptografia de curvas elípticas, com motor matemático próprio e cinco etapas encadeadas. Apresentado no I Seminário de Tecnologias no Ensino de Matemática (CEFET-MG, 2026).",
            en: "A digital escape room for teaching modular arithmetic and elliptic-curve cryptography, with its own math engine and five chained stages. Presented at the 1st Seminar on Technologies in Mathematics Education (CEFET-MG, 2026).",
        },
        techStack: ["Criptografia", "ECC", "Python", "React"],
        // TODO(bernardo): link do repo ou do resumo publicado, quando houver.
    },
    {
        title: "CORE (Cefast Operational Real-Time Engine)",
        description: {
            // Enquadramento é deliberado: CORE foi concebido para a prova de
            // Business Presentation, com cliente fictício. Não apresentar como
            // produto entregue a cliente real. Ver regra 5 do CLAUDE.md.
            pt: "Plataforma operacional que concebemos para a prova de Business Presentation da FSAE Brasil 2026, com quatro módulos: previsão de demanda, programação de produção por otimização matemática, análise de telemetria via OBD-II e leitura de texto em português. Inclui modelagem técnica e financeira própria e um protótipo web navegável. O cliente é fictício, definido pela prova.",
            en: "An operations platform we designed for the FSAE Brasil 2026 Business Presentation event, with four modules: demand forecasting, production scheduling via mathematical optimization, OBD-II telemetry analysis and Portuguese-language text analysis. It includes our own technical and financial modeling plus a navigable web prototype. The client is fictional, defined by the event.",
        },
        techStack: ["Python", "OR-Tools", "SimPy", "LightGBM", "XGBoost", "NLP"],
    },
    {
        title: "Migração do fórum: phpBB para NodeBB",
        description: {
            pt: "Migração do fórum da equipe, incluindo a transferência do conteúdo existente e o novo deploy em Docker numa VPS.",
            en: "Migrated the team's forum, including moving the existing content and redeploying it with Docker on a VPS.",
        },
        techStack: ["NodeBB", "Docker", "Nginx", "Linux"],
    },
    {
        title: "RustCraft",
        description: {
            pt: "Projeto em Rust organizado como workspace, com crates separados por responsabilidade. Feito para aprender a linguagem em algo maior que um exercício.",
            en: "A Rust project organized as a workspace, with crates split by responsibility. Built to learn the language on something larger than an exercise.",
        },
        techStack: ["Rust", "Cargo"],
        githubUrl: "https://github.com/bernardovieirarocha/RustCraft",
    },
    {
        title: "Class2Cal",
        description: {
            pt: "Converte a grade horária da faculdade em um calendário no formato iCalendar (.ics), a partir de CSV e JSON.",
            en: "Turns the university class schedule into an iCalendar (.ics) file, from CSV and JSON input.",
        },
        techStack: ["Python", "iCalendar"],
        githubUrl: "https://github.com/bernardovieirarocha/Class2Cal",
        liveUrl: "https://bernardovieirarocha.github.io/Class2Cal/",
    },
];

// Não adicionar métricas de vaidade aqui (contadores de projetos, "anos de
// experiência", "∞ cafés", % de proficiência). Ver CLAUDE.md, regra 1.
