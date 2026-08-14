import type { TranslationKeys } from "./pt";

export const en: TranslationKeys = {
    // Navigation
    nav: {
        about: "About",
        experience: "Experience",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        resumeSite: "Resume",
    },

    // Hero Section
    hero: {
        role: "Computer Engineering at CEFET-MG and Computer Science at PUC Minas",
        summary:
            "I designed the Formula CEFAST team's embedded electronics and now lead its IT area.",
        viewProjects: "View projects",
        contactMe: "Contact",
    },

    // About Section
    about: {
        sectionNumber: "01.",
        title: "About",
        // TODO(bernardo): these three paragraphs are yours to rewrite.
        paragraphs: {
            p1: "I study Computer Engineering at CEFET-MG and Computer Science at PUC Minas at the same time. In practice that means spending the day between a board schematic and a service deploy, and that combination is something I have been building on purpose.",
            p2: "I joined Formula CEFAST, CEFET-MG's Formula SAE team, designing electronic modules in Altium Designer. Today I am the team's Head of IT: I make the stack calls, run the infrastructure we depend on (the membership platform, the forum, the servers) and coordinate the other people in the area.",
            p3: "Outside the team I run a Proxmox homelab on ZFS, which I use to learn infrastructure the most direct way there is: by breaking it and fixing it. I also have a specific interest in cryptography, which is where CriptoEscape came from.",
        },
        highlights: {
            softwareEngineering: "Software Engineering",
            embeddedSystems: "Embedded Systems",
            electronics: "Electronics",
            backend: "Backend",
            devops: "Infrastructure",
            systemsDesign: "Systems Design",
        },
    },

    // Experience Section
    experience: {
        sectionNumber: "02.",
        title: "Experience",
        educationTitle: "Education",
        since: "since",
    },

    // Skills Section
    skills: {
        sectionNumber: "03.",
        title: "Technologies",
        categories: {
            languages: "Languages",
            backend: "Backend & APIs",
            embedded: "Embedded & Hardware",
            devops: "DevOps & Infra",
            frontend: "Frontend & Web",
        },
    },

    // Projects Section
    projects: {
        sectionNumber: "04.",
        title: "Projects",
        otherProjects: "Other Projects",
    },


    // Contact Section
    contact: {
        sectionNumber: "05.",
        title: "Contact",
        description:
            "Open to conversations about embedded systems, infrastructure and cryptography, and to internship and research opportunities. Email is the most direct way to reach me.",
        emailLabel: "Email",
        githubLabel: "GitHub",
        linkedinLabel: "LinkedIn",
        location: "Belo Horizonte, MG, Brazil",
        sendMessage: "Send an email",
    },

    // Footer
    footer: {
        builtWith: "Built with React, TypeScript and Tailwind CSS.",
    },

    // Per-route SEO
    seo: {
        home: {
            title: "Bernardo Rocha | Computer Engineering, embedded systems and infrastructure",
            description:
                "Computer Engineering student at CEFET-MG and Computer Science student at PUC Minas. I design embedded electronics, telemetry and infrastructure for the Formula CEFAST team.",
        },
        resume: {
            title: "Resume | Bernardo Rocha",
            description:
                "Education, experience, certifications and projects of Bernardo Vieira Rocha, Computer Engineering student at CEFET-MG and Computer Science student at PUC Minas.",
        },
        notFound: {
            title: "Page not found | Bernardo Rocha",
            description: "This page does not exist.",
        },
    },

    // 404
    notFound: {
        title: "Page not found",
        description: "The address you opened does not exist or has moved.",
        backHome: "Back to home",
    },

    // Resume Page
    resume: {
        downloadPdf: "Print / save as PDF",
        backHome: "Back",
        role: "Computer Engineering (CEFET-MG) and Computer Science (PUC Minas)",
        summary:
            "I study Computer Engineering at CEFET-MG and Computer Science at PUC Minas, concurrently. On the Formula CEFAST SAE team I designed electronic modules in Altium Designer and now serve as Head of IT, owning the stack, the infrastructure and the people in the area.",
        sections: {
            experience: "Experience",
            education: "Education",
            skills: "Technical Skills",
            projects: "Projects",
            certifications: "Certifications",
        },
        skillCategories: {
            languages: "Languages",
            backend: "Backend & APIs",
            embedded: "Embedded & Hardware",
            devops: "DevOps & Infra",
            frontend: "Frontend & Web",
        },
        updatedIn: "Updated in",
    },
} as const;
