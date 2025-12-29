import {
    Film,
    Terminal,
    Calendar,
    Cpu,
    Truck,
    GraduationCap,
    Hand,
    Clock,
    Code2,
    Globe,
    type LucideIcon,
} from "lucide-react";

// ============================================
// PERSONAL INFORMATION
// ============================================

export const personalInfo = {
    name: "Bernardo Rocha",
    fullName: "Bernardo Vieira Rocha",
    initials: "BVR",
    email: "b.vieira.rocha@gmail.com",
    phone: "+55 31 993679089",
    location: {
        city: "Belo Horizonte",
        state: "MG",
        country: "Brasil",
        countryEn: "Brazil",
    },
    avatarUrl:
        "https://avatars.githubusercontent.com/u/64905090?s=400&u=38aeca0edb2c6c8ccd97e96726c6ab622026c39f&v=4",
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

export const skills = {
    languages: ["Python", "CC++", "Java", "JavaScript", "TypeScript"],
    backend: ["Node.js", "Django", "PostgreSQL", "MongoDB", "REST"],
    embedded: ["Arduino", "ESP32", "Altium", "PCB Design", "RTOS"],
    devops: ["Docker", "Linux", "Git", "CI/CD", "AWS"],
    other: ["React", "HTML", "CSS", "Tailwind CSS", "Figma"],
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
        company: "PUC Minas",
        title: {
            pt: "Monitor de Computação (AEDs I)",
            en: "Computer Science Teaching Assistant (Data Structures I)",
        },
        description: {
            pt: "Monitor de Algoritmos e Estrutura de Dados I na PUC Minas, auxílio alunos na compreensão de conceitos e resolução de exercícios, desenvolvendo habilidades em comunicação e liderança.",
            en: "Teaching Assistant for Algorithms and Data Structures I at PUC Minas, helping students understand concepts and solve exercises, developing communication and leadership skills.",
        },
        location: "Presencial",
        startDate: "2024",
        endDate: "2025",
        technologies: ["C", "C++", "Algoritmos", "Estrutura de Dados"],
        logo: "/pucminas.png",
    },
    {
        company: "Fórmula CEFAST",
        title: {
            pt: "Projetista Eletrônico",
            en: "Electronic Designer",
        },
        description: {
            pt: "Projetista de Módulos Eletrônicos usando Altium Designer para a Equipe Fórmula CEFAST.",
            en: "Electronic Module Designer using Altium Designer for the Formula CEFAST Team.",
        },
        location: "Presencial",
        startDate: "2024",
        endDate: null,
        technologies: ["Altium Designer", "PCB Design", "Electronics", "Embedded Systems"],
        logo: "/cefast.svg",
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
    icon: LucideIcon;
    image?: string;
    featured?: boolean;
};

export const projects: Project[] = [
    {
        title: "UniCaronas",
        description: {
            pt: "Projeto para facilitar a combinação de caronas entre estudantes universitários, promovendo transporte organizado e sustentável.",
            en: "Project to facilitate carpooling among university students, promoting organized and sustainable transportation.",
        },
        techStack: ["JavaScript", "jQuery", "HTML5", "CSS3", "Node.js"],
        githubUrl: "https://github.com/bernardovieirarocha/UniCaronas",
        icon: Truck,
        image: "/unicaronas.png",
        featured: true,
    },
    {
        title: "FlixMate",
        description: {
            pt: "Uma aplicação web para recomendação e descoberta de filmes com interface moderna e sistema de matching.",
            en: "A web application for movie recommendation and discovery with modern interface and matching system.",
        },
        techStack: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        githubUrl: "https://github.com/rubensbkl/Flixmate",
        icon: Film,
        image: "/flixmate.webp",
        featured: true,
    },
    {
        title: "Class2Cal",
        description: {
            pt: "Automatiza a criação de calendários acadêmicos integrando CSV e JSON para o formato iCalendar (.ics).",
            en: "Automates academic calendar creation by integrating CSV and JSON into iCalendar (.ics) format.",
        },
        techStack: ["Python", "Data Processing", "GUI"],
        githubUrl: "https://github.com/bernardovieirarocha/Class2Cal",
        liveUrl: "https://bernardovieirarocha.github.io/Class2Cal/",
        icon: Calendar,
        image: "/class2cal.png",
        featured: true,
    },
    {
        title: "Schoolsys",
        description: {
            pt: "Plataforma responsiva para auxiliar estudantes na organização de rotinas de estudo.",
            en: "Responsive platform to help students organize study routines effectively.",
        },
        techStack: ["Django", "DjangoRest", "PostgreSQL", "JavaScript"],
        githubUrl: "https://github.com/upwardweb/schoolsys",
        icon: GraduationCap,
    },
    {
        title: "Respect Above Violence",
        description: {
            pt: "Projeto de ONG escolar: combatendo o cyberbullying com recursos educacionais e documentação.",
            en: "NGO School Project: Combating cyberbullying with educational resources and documentation.",
        },
        techStack: ["Node.js", "Express", "EJS"],
        githubUrl: "https://github.com/upwardweb/respectaboveviolence",
        icon: Hand,
    },
    {
        title: "Testador C/C++",
        description: {
            pt: "Script de automação para testar códigos em C/C++, verificando se as saídas estão corretas de forma automatizada.",
            en: "Automation script to test C/C++ code, automatically verifying if outputs are correct.",
        },
        techStack: ["C++", "C", "Linux", "Python", "Shell"],
        githubUrl: "https://github.com/bernardovieirarocha/TestadorC",
        icon: Terminal,
    },
    {
        title: "Genius TinkerCad",
        description: {
            pt: "Implementação funcional do popular jogo de memória 'Genius' usando Tinkercad Circuits para a disciplina de LIP.",
            en: "Functional implementation of the popular 'Genius' memory game using Tinkercad Circuits for LIP course.",
        },
        techStack: ["Arduino", "C++", "Tinkercad"],
        githubUrl: "https://github.com/bernardovieirarocha/GeniusTinkerCadLIP",
        icon: Cpu,
    },
    {
        title: "Datetimewidget",
        description: {
            pt: "Widget aprimorado de seleção de Data e Hora para Django, simplificando integração em formulários.",
            en: "Enhanced Django Date & Time dropdown widget, simplifying form integration.",
        },
        techStack: ["Python", "Django", "JavaScript", "CSS"],
        githubUrl: "https://github.com/upwardweb/datetimewidget",
        icon: Clock,
    },
    {
        title: "Mundo.informação",
        description: {
            pt: "Recurso bibliográfico para cada seção de uma apresentação.",
            en: "A bibliographic resource for each section of a presentation.",
        },
        techStack: ["Next.js"],
        githubUrl: "https://github.com/upwardweb/mundo.informacao",
        icon: Globe,
    },
];

// ============================================
// STATS
// ============================================

export const stats = {
    projectsCompleted: "15+",
    yearsExperience: "3+",
    certifications: "5+",
    coffeeConsumed: "∞",
} as const;
