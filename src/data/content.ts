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
    // MongoDB saiu daqui junto com a correção do stack do FlixMate: era o único
    // projeto que o sustentava, e o FlixMate usa PostgreSQL. Se voltar a ter um
    // projeto em Mongo no site, volta aqui.
    backend: ["Node.js", "Django", "PostgreSQL", "REST"],
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
            pt: "Liderei a área de TI da equipe, que não existia antes: montei o processo de engenharia do zero. Defini a stack e a arquitetura, estabeleci o fluxo de trabalho em branches e pull requests com revisão, e fiz o onboarding dos primeiros membros nesse processo. Operei a infraestrutura que a equipe usa no dia a dia, de VPS e containers a domínios, fórum e plataforma de sócios, e traduzi em sistema a necessidade das outras subequipes.",
            en: "I led the team's IT area, which did not exist before: I set up its engineering process from scratch. I defined the stack and the architecture, established a branch and pull request workflow with review, and onboarded the first members into it. I ran the infrastructure the team depends on day to day, from VPS and containers to domains, the forum and the membership platform, and turned the other subteams' needs into working systems.",
        },
        location: "Presencial",
        startDate: "fev/2026",
        endDate: "set/2026",
        technologies: ["Docker", "Nginx", "Linux", "VPS", "PostgreSQL", "Git", "Arquitetura"],
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
            pt: "Projetei módulos eletrônicos do protótipo de Fórmula SAE em Altium Designer, da esquemática ao layout de PCB. Trabalhei com barramento CAN e com a eletrônica embarcada do carro, num ciclo em que cada placa precisa estar pronta dentro do calendário da competição.",
            en: "I designed electronic modules for the Formula SAE prototype in Altium Designer, from schematic to PCB layout. I worked with the CAN bus and the car's embedded electronics, on a cycle where every board has to be ready within the competition calendar.",
        },
        location: "Presencial",
        startDate: "nov/2024",
        endDate: "mar/2026",
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
        startDate: "ago/2024",
        endDate: "nov/2024",
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
        endDate: "jul/2029",
        logo: "/cefetmg.png",
    },
    {
        institution: "Pontifícia Universidade Católica de Minas Gerais (PUC Minas)",
        degree: {
            pt: "Bacharelado em Ciência da Computação",
            en: "Bachelor's in Computer Science",
        },
        description: {
            pt: "Cursei até 2025, com foco em algoritmos, estruturas de dados e teoria da computação. Não concluí: segui só com a Engenharia de Computação no CEFET-MG.",
            en: "I studied here until 2025, focused on algorithms, data structures and theory of computation. I did not finish it: I continued with Computer Engineering at CEFET-MG alone.",
        },
        startDate: "2024",
        endDate: "2025",
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
// RESEARCH AND TALKS
// ============================================

/**
 * Trabalhos apresentados em evento acadêmico. Separado de `projects` de
 * propósito: um projeto é o artefato, isto é o que foi submetido, aceito e
 * apresentado, com autoria e orientação declaradas como o evento registrou.
 *
 * `authors` traz a lista completa e na ordem da submissão, inclusive quando
 * ele não é o primeiro autor. Reordenar para se colocar na frente é o tipo de
 * coisa que quem lê currículo de pesquisa confere.
 */
export type ResearchEntry = {
    title: {
        pt: string;
        en: string;
    };
    venue: {
        pt: string;
        en: string;
    };
    /** Tipo de contribuição: resumo, pôster, apresentação oral. */
    kind: {
        pt: string;
        en: string;
    };
    date: string;
    authors: string[];
    advisors?: string[];
    description: {
        pt: string;
        en: string;
    };
    link?: string;
};

export const research: ResearchEntry[] = [
    {
        title: {
            pt: "CriptoEscape: escape room para o ensino de aritmética modular e segurança em curvas elípticas",
            en: "CriptoEscape: an escape room for teaching modular arithmetic and elliptic-curve security",
        },
        venue: {
            pt: "I Seminário de Tecnologias no Ensino de Matemática, CEFET-MG",
            en: "1st Seminar on Technologies in Mathematics Education, CEFET-MG",
        },
        kind: {
            pt: "Resumo e apresentação",
            en: "Abstract and talk",
        },
        // Apresentado em 22/08/2026.
        date: "08/2026",
        authors: [
            "Iago Soares Santana",
            "Bernardo Vieira Rocha",
            "Renan Cabral Costa Cunningham",
        ],
        advisors: [
            "Divane Aparecida de Moraes Dantas",
            "Frederico Augusto Menezes Ribeiro",
        ],
        description: {
            pt: "O resumo descreve o laboratório de curvas elípticas que deu origem à plataforma: um servidor ECDH que multiplica qualquer ponto recebido sem validá-lo. O participante determina a ordem dos pontos por somas sucessivas, coleta as congruências que o servidor devolve e reconstrói a chave privada pelo Teorema Chinês do Resto, etapa final do ataque de Pohlig-Hellman; na última etapa, as mesmas entradas são rejeitadas pelo modo que valida a ordem do ponto antes de usá-lo. A curva, y² ≡ x³ + 2x + 7 (mod 97) com 105 pontos, foi escolhida para que as contas sejam feitas à mão.",
            en: "The abstract describes the elliptic-curve lab the platform grew out of: an ECDH server that multiplies any point it receives without validating it. The participant works out each point's order by repeated addition, collects the congruences the server returns and reconstructs the private key with the Chinese Remainder Theorem, the final step of the Pohlig-Hellman attack; in the last stage the same inputs are rejected by the mode that checks point order before using it. The curve, y² ≡ x³ + 2x + 7 (mod 97) with 105 points, was chosen so the arithmetic can be done by hand.",
        },
        // TODO(bernardo): link dos anais, quando o evento publicar.
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

/**
 * Dimensões são as do arquivo, não as de exibição: elas reservam o espaço
 * antes da imagem carregar (sem isso o texto abaixo pula) e definem a
 * proporção de render. Cada screenshot tem a sua, e nenhuma é cortada.
 *
 * `caption` é obrigatória e bilíngue porque estas imagens não se explicam:
 * um layout de PCB e um painel de serviços dizem coisas diferentes sobre o
 * mesmo projeto, e sem legenda o leitor não sabe qual está vendo. Ela também
 * vira o `alt`, no lugar do título do projeto repetido em toda imagem.
 */
export type ProjectImage = {
    src: string;
    width: number;
    height: number;
    caption: {
        pt: string;
        en: string;
    };
};

export type Project = {
    title: string;
    description: {
        pt: string;
        en: string;
    };
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
    images?: ProjectImage[];
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
        images: [
            {
                src: "/projects/socios-fcefast.webp",
                width: 1800,
                height: 1016,
                caption: {
                    pt: "Área do associado: o menu de planos, pagamentos e pedidos, e o bloqueio de conteúdo para quem ainda não assinou.",
                    en: "The member area: the plans, payments and orders menu, and the content gate for visitors without an active plan.",
                },
            },
        ],
        featured: true,
    },
    {
        title: "Eletrônica e telemetria do carro",
        description: {
            // A primeira frase é o escopo do projeto (trabalho de equipe); a
            // segunda é a contribuição dele, e por isso diz "contribuí", não
            // "fiz". O acesso remoto é um relay em VPS (o serviço `tuner-relay`
            // que aparece na captura), com stunnel fazendo o túnel TLS. Já foi
            // descrito como "relay mTLS" e depois como "VPN"; nenhuma das duas
            // versões batia com o que roda na VPS.
            // TODO(bernardo): regra 5, uma frase sobre o que ainda não funciona.
            pt: "Eletrônica embarcada e telemetria do protótipo de Fórmula SAE: datalogger próprio (MAQ), módulo de distribuição de potência controlado por CAN e modem LTE Cat-M1 (BG95-M3). Contribuí com o firmware do ESP32 que faz a interface com a ECU MegaSquirt e com o datalogger MAQ, e com o relay hospedado em VPS que permite o tuning remoto e deixa computadores autorizados acompanharem os dados do carro em tempo real, no lugar de um notebook ligado ao carro dentro do box. O tráfego entre o carro e quem acompanha passa por um túnel TLS, feito com stunnel. Placas projetadas em Altium Designer.",
            en: "Embedded electronics and telemetry for the Formula SAE prototype: an in-house datalogger (MAQ), a power distribution module controlled over CAN and an LTE Cat-M1 modem (BG95-M3). I contributed to the ESP32 firmware that interfaces with the MegaSquirt ECU and the MAQ data logger, and to the VPS-hosted relay that enables remote tuning and lets authorized computers monitor the car's data in real time, instead of a laptop wired to the car in the pit. Traffic between the car and whoever is watching runs through a TLS tunnel, built with stunnel. Boards designed in Altium Designer.",
        },
        techStack: ["Altium Designer", "PCB Design", "CAN", "ESP32", "C++", "stunnel"],
        // A placa vem antes do painel de propósito: o layout é a parte do
        // projeto que só existe em hardware, e o painel sozinho fazia o
        // trabalho parecer só software.
        images: [
            {
                src: "/projects/telemetria-placa.webp",
                width: 437,
                height: 790,
                caption: {
                    pt: "Layout da PCB do módulo de telemetria em Altium Designer, com as duas camadas de cobre sobrepostas.",
                    en: "PCB layout of the telemetry module in Altium Designer, with both copper layers overlaid.",
                },
            },
            {
                src: "/projects/telemetria-dashboard.webp",
                width: 1800,
                height: 881,
                // O log está borrado no arquivo, de propósito: a captura
                // original trazia o hostname da VPS e os IPs de quem tinha
                // conectado na porta.
                caption: {
                    pt: "Painel de operação do relay na VPS: estado dos serviços e log em tempo real.",
                    en: "Operations panel for the relay on the VPS: service status and live log.",
                },
            },
        ],
        featured: true,
    },
    {
        title: "FlixMate",
        description: {
            pt: "Aplicação web de recomendação de filmes com matching entre usuários, feita em dupla. O motor de recomendação é um serviço próprio em Python: filtragem colaborativa por fatoração da matriz usuário-filme (SVD truncado), que dá a cada usuário um vetor de preferência a partir dos likes, somada a um filtro por conteúdo (TF-IDF sobre gênero, sinopse e idioma). O peso entre os dois se ajusta conforme o histórico do usuário cresce. Backend em Java, frontend em Next.js, tudo em containers.",
            en: "A movie recommendation web app with matching between users, built with a teammate. The recommendation engine is a Python service of our own: collaborative filtering by factorizing the user-movie matrix (truncated SVD), which turns each user's likes into a preference vector, combined with content-based filtering (TF-IDF over genre, synopsis and language). The weighting between the two shifts as a user's history grows. Java backend, Next.js frontend, all containerized.",
        },
        techStack: ["Java", "Next.js", "Python", "scikit-learn", "PostgreSQL", "Docker"],
        githubUrl: "https://github.com/rubensbkl/Flixmate",
        images: [
            {
                src: "/projects/flixmate.webp",
                width: 1600,
                height: 1000,
                caption: {
                    pt: "Tela de descoberta: um filme por vez, e as ações do usuário que alimentam o motor de recomendação.",
                    en: "The discovery screen: one movie at a time, and the user actions that feed the recommendation engine.",
                },
            },
        ],
        featured: true,
    },
    {
        title: "DXD Analyser",
        description: {
            pt: "Ferramenta de desktop e linha de comando que transforma aquisição bruta do Dewesoft (.dxd) da bancada de motor em CSV pronto para análise. Um ensaio gera um binário de ~140 MB com 215 canais em três bases de tempo diferentes: a ferramenta detecta a virada do ângulo de virabrequim para recortar um ciclo fechado, alinha canais adquiridos em taxas diferentes, suaviza com Savitzky-Golay e reamostra num grid angular uniforme, para que ensaios possam ser sobrepostos. Os testes rodam sobre sinais sintéticos, sem precisar de um .dxd nem de display.",
            en: "A desktop and command-line tool that turns raw Dewesoft (.dxd) engine-bench acquisitions into analysis-ready CSV. One run produces a ~140 MB binary holding 215 channels on three different time bases: the tool detects crank-angle wrap-around to slice out one closed cycle, aligns channels acquired at different rates, smooths with Savitzky-Golay and resamples onto a uniform angular grid so runs can be overlaid. The tests run on synthetic signals, with no .dxd file and no display needed.",
        },
        techStack: ["Python", "pandas", "SciPy", "Tkinter", "pytest", "GitHub Actions"],
        githubUrl: "https://github.com/bernardovieirarocha/Dewesoft_Analyser",
        images: [
            {
                src: "/projects/dxd-analyser.webp",
                width: 1175,
                height: 841,
                caption: {
                    pt: "Seleção de canais de um ensaio: os 215 canais do arquivo, com os que vieram sem amostra marcados como bloqueados.",
                    en: "Channel selection for one bench run: the file's 215 channels, with the ones that came back empty marked as blocked.",
                },
            },
        ],
        featured: true,
    },
    {
        title: "Site da Fórmula CEFAST",
        description: {
            pt: "Site institucional da equipe, construído em Next.js com shadcn/ui.",
            en: "The team's public website, built with Next.js and shadcn/ui.",
        },
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        images: [
            {
                src: "/projects/site-fcefast.webp",
                width: 1600,
                height: 1092,
                caption: {
                    pt: "Página de protótipos, com o histórico de carros da equipe e o resultado de cada competição.",
                    en: "The prototypes page, listing the team's cars and each one's competition result.",
                },
            },
        ],
        // TODO(bernardo): link do site no ar e do repo, se for público.
        featured: true,
    },

    // ── OUTROS ──────────────────────────────────────────────────────────────
    {
        title: "CriptoEscape",
        description: {
            // Os 42 módulos são a soma do que a página /salas do site mostra
            // hoje (6+6+6+12+12). É o único número aqui que sai de uma fonte
            // pública e conferível, e por isso é também o que envelhece: sala
            // nova ou módulo novo no criptoescape.com, número novo aqui.
            // O resumo do seminário fala em cinco etapas; aquelas cinco etapas
            // são o desafio da sala 4, não a plataforma inteira.
            pt: "Plataforma no ar para o primeiro contato com criptografia: cinco salas em sequência, 42 módulos ao todo, da cifra de César e da aritmética modular até criptografia simétrica, RSA, curvas elípticas e uma introdução à pós-quântica. Cada sala termina num desafio em que o participante faz a conta à mão e o sistema confere. Somos três estudantes de Engenharia de Computação do CEFET-MG: respondo pela aplicação Next.js, pelas contas e pela progressão de salas no Supabase, e pelo deploy. Ainda não foi usada por uma turma, e a aplicação piloto com pré-teste e pós-teste é o próximo passo.",
            en: "A live platform for a first contact with cryptography: five rooms in sequence, 42 modules in total, from the Caesar cipher and modular arithmetic through symmetric cryptography, RSA, elliptic curves and an introduction to post-quantum. Each room ends in a challenge where the participant works the arithmetic out by hand and the system checks it. We are three Computer Engineering students at CEFET-MG: I own the Next.js application, the accounts and room progression on Supabase, and the deployment. No class has used it yet, and a pilot run with pre-test and post-test is the next step.",
        },
        techStack: ["Next.js", "React", "Supabase", "MDX", "Criptografia", "ECC"],
        liveUrl: "https://criptoescape.com",
        // Não há repositório público: o código está fechado enquanto a
        // plataforma não passa pela aplicação piloto.
    },
    {
        title: "CORE (Cefast Operational Real-Time Engine)",
        description: {
            // Enquadramento é deliberado: CORE foi concebido para a prova de
            // Business Presentation, com cliente fictício. Não apresentar como
            // produto entregue a cliente real. Ver regra 5 do CLAUDE.md.
            pt: "Plataforma operacional que concebemos para a prova de Business Presentation da FSAE Brasil 2026, com quatro módulos propostos: previsão de demanda, programação de produção, análise de telemetria via OBD-II e leitura de texto em português. Construí o protótipo navegável: os dados são simulados de forma determinística, para a apresentação ser ensaiável, e não há chamada de rede em runtime. O cliente é fictício, definido pela prova.",
            en: "An operations platform we designed for the FSAE Brasil 2026 Business Presentation event, with four proposed modules: demand forecasting, production scheduling, OBD-II telemetry analysis and Portuguese-language text analysis. I built the navigable prototype: the data is simulated deterministically so the presentation can be rehearsed, and there are no network calls at runtime. The client is fictional, defined by the event.",
        },
        techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "PWA"],
        githubUrl: "https://github.com/bernardovieirarocha/CoreIA",
        // Protótipo navegável da apresentação, não um produto em operação.
        liveUrl: "https://core-ia-iota.vercel.app/",
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
            pt: "Jogo sandbox em Rust, organizado como workspace com crates separados por responsabilidade. O objetivo é aprender a linguagem construindo algo maior que um exercício.",
            en: "A sandbox game in Rust, organized as a workspace with crates split by responsibility. The point is learning the language by building something larger than an exercise.",
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
    {
        title: "Homelab em Proxmox e ZFS",
        description: {
            pt: "Infraestrutura doméstica em Proxmox VE com storage ZFS: containers de serviços, proxy reverso com TLS, DNS local, acesso remoto zero-trust e monitoramento. Documentado em MkDocs enquanto é construído.",
            en: "Home infrastructure on Proxmox VE with ZFS storage: service containers, a reverse proxy with TLS, local DNS, zero-trust remote access and monitoring. Documented in MkDocs as it is built.",
        },
        techStack: ["Proxmox", "ZFS", "Docker", "Nginx", "Linux", "MkDocs"],
        images: [
            {
                src: "/projects/homelab-proxmox.webp",
                width: 1800,
                height: 794,
                caption: {
                    pt: "Painel do Proxmox: os containers LXC e os storages do nó, com uso de disco e memória.",
                    en: "The Proxmox dashboard: the node's LXC containers and storages, with disk and memory usage.",
                },
            },
        ],
        // TODO(bernardo): publicar o homelabdocs num repo e linkar aqui.
    },
];

// Não adicionar métricas de vaidade aqui (contadores de projetos, "anos de
// experiência", "∞ cafés", % de proficiência). Ver CLAUDE.md, regra 1.
