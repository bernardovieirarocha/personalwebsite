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
        role: "Computer Engineering at CEFET-MG and Computer Science at PUC Minas",
        summary:
            "I designed the Formula CEFAST team's embedded electronics and now lead its IT area.",
        viewProjects: "View projects",
        contactMe: "Contact",
    },

    // About Section
    about: {
        title: "About",
        // Mirror of pt.ts: this section states how I work and proves it with
        // one artifact. It must not restate the timeline — Experience and
        // Projects already do, with dates.
        paragraphs: {
            p1: "I work on both sides of the same system. I designed the boards that go in the Formula CEFAST car in Altium, and I wrote the service that talks to them. What interests me is the seam: where a firmware problem turns into a network problem, and then into a deployment problem.",
            // TODO(bernardo): rule 5 — close this paragraph with ONE sentence on
            // what is still unresolved in the bridge. Keep it in sync with pt.ts.
            p2: "The clearest case is the ESP32 serial-to-TCP bridge: it exists only because I was on both sides. Tuning the MegaSquirt ECU meant a laptop wired to the car inside the pit, and getting that laptop out of there was half a firmware problem and half a networking one. It became an mTLS relay.",
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
