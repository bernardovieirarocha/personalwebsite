import type { TranslationKeys } from "./pt";

export const en: TranslationKeys = {
    // Navigation
    nav: {
        about: "About",
        experience: "Experience",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        language: "Language",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        menu: "Menu",
        resumeSite: "Resume",
    },

    // Hero Section
    hero: {
        role: "Computer Engineering at CEFET-MG",
        summary:
            "I designed the Formula CEFAST team's embedded electronics and now lead its IT area.",
        viewProjects: "View projects",
        contactMe: "Contact",
    },

    // About Section
    about: {
        title: "About",
        // Mirror of pt.ts: this section states how I work and proves it with
        // one artifact. It must not restate the timeline: Experience and
        // Projects already do, with dates.
        paragraphs: {
            p1: "I like working on both sides: hardware and software. At Formula CEFAST that is literal. I drew boards in Altium for the car, and today I am also the one responsible for the servers, the forum and the team's membership platform.",
            // TODO(bernardo): rule 5, one sentence about something still
            // unresolved does more here than any adjective. Keep in sync with pt.ts.
            p2: "In practice the week alternates between very different things: PCB layout, the CAN bus and firmware on one side; containers, a reverse proxy, a database and deployment on the other. What interests me is the seam between them, when a firmware problem turns into an infrastructure problem.",
            // TODO(bernardo): the human line. Empty means it is not rendered.
            p3: "",
        },
    },

    // Experience Section
    experience: {
        title: "Experience",
        educationTitle: "Education",
        since: "since",
    },

    // Skills Section
    skills: {
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
        title: "Projects",
        otherProjects: "Other Projects",
    },


    // Contact Section
    contact: {
        title: "Contact",
        description:
            "Open to conversations about embedded systems, infrastructure and cryptography, and to internship and research opportunities. Email is the most direct way to reach me.",
        emailLabel: "Email",
        githubLabel: "GitHub",
        linkedinLabel: "LinkedIn",
        locationLabel: "Location",
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
                "Computer Engineering student at CEFET-MG. I design embedded electronics, telemetry and infrastructure for the Formula CEFAST team.",
        },
        resume: {
            title: "Resume | Bernardo Rocha",
            description:
                "Education, experience, research, certifications and projects of Bernardo Vieira Rocha, Computer Engineering student at CEFET-MG.",
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
        downloadPdf: "Save as PDF",
        backHome: "Back",
        role: "Computer Engineering (CEFET-MG)",
        summary:
            "I study Computer Engineering at CEFET-MG. On the Formula CEFAST SAE team I designed electronic modules in Altium Designer and now serve as Head of IT, owning the stack, the infrastructure and the people in the area.",
        sections: {
            experience: "Experience",
            education: "Education",
            research: "Research and Talks",
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
        advisors: "Advisors",
        updatedIn: "Updated in",
    },
} as const;
