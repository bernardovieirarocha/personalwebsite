import type { TranslationKeys } from "./pt";

export const en: TranslationKeys = {
    // Navigation
    nav: {
        about: "About",
        skills: "Skills",
        projects: "Projects",
        travel: "Travel",
        contact: "Contact",
        resumeSite: "Resume",
    },

    // Hero Section
    hero: {
        greeting: "./init --portfolio",
        role: "Computer Engineer & Computer Scientist",
        tagline: "<Building what matters./>",
        viewProjects: "View Projects",
        contactMe: "Contact",
        scroll: "scroll",
    },

    // About Section
    about: {
        sectionNumber: "01.",
        title: "About Me",
        paragraph1: {
            start: "I'm a technology enthusiast who believes in the power of",
            highlight1: "well-crafted engineering",
            middle: ". As a Computer Engineering and Computer Science student, I navigate between hardware and software with ease.",
        },
        paragraph2: {
            start: "My passion lies in creating solutions that make a difference — from",
            highlight1: "embedded systems",
            middle: "operating at the bare metal to",
            highlight2: "backend architectures",
            end: "that are scalable and resilient.",
        },
        paragraph3: {
            start: "I believe the best technology is the one that",
            highlight: "just works",
            end: "— elegant under the hood, invisible to those who use it.",
        },
        terminalUser: "bernardo@portfolio",
        terminalCommand: "echo $PHILOSOPHY",
        terminalOutput: '"Clean code, robust systems, measurable impact."',
        highlights: {
            softwareEngineering: "Software Engineering",
            embeddedSystems: "Embedded Systems",
            electronics: "Electronics",
            backend: "Backend",
            devops: "DevOps",
            systemsDesign: "Systems Design",
        },
    },

    // Skills Section
    skills: {
        sectionNumber: "02.",
        title: "Technologies",
        categories: {
            languages: "Languages",
            backend: "Backend & APIs",
            embedded: "Embedded & Hardware",
            devops: "DevOps & Cloud",
        },
        stats: {
            projects: "Completed Projects",
            experience: "Years of Experience",
            certifications: "Certifications",
            coffee: "Coffee Consumed",
        },
    },

    // Projects Section
    projects: {
        sectionNumber: "03.",
        title: "Projects",
        featured: "Featured Project",
        otherProjects: "Other Projects",
    },

    // Travel Section
    travel: {
        sectionNumber: "04.",
        title: "Travel",
    },

    // Contact Section
    contact: {
        sectionNumber: "05.",
        title: "Contact",
        description:
            "I'm always open to new opportunities, collaborations, and conversations about technology. If you have an interesting project or just want to exchange ideas, I'd be happy to chat.",
        emailLabel: "Email",
        locationLabel: "Location",
        location: "Belo Horizonte, Brazil",
        sendMessage: "Send Message",
        thankYou: 'echo "Thanks for visiting!"',
    },

    // Footer
    footer: {
        designedWith: "Designed & Developed with",
    },

    // Resume Page
    resume: {
        downloadPdf: "Download PDF",
        role: "Computer Engineer & Computer Scientist",
        summary:
            "Computer Engineering and Computer Science student with strong experience in software engineering, embedded systems, electronics, backend, and DevOps. Passionate about creating solutions that make a difference — from systems operating at the hardware edge to scalable and resilient backend architectures.",
        sections: {
            experience: "Experience",
            education: "Education",
            skills: "Technical Skills",
            certifications: "Certifications",
        },
        skillCategories: {
            languages: "Languages",
            backend: "Backend & APIs",
            embedded: "Embedded & Hardware",
            devops: "DevOps & Cloud",
        },
        updatedIn: "Updated in",
    },
} as const;
