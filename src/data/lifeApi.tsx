import { ExternalLink } from '../components/ExternalLink';
import { GitHubIcon } from '../components/icons/GitHubIcon';
import { LinkedInIcon } from '../components/icons/LinkedInIcon';
import { XIcon } from '../components/icons/XIcon';
import { AcademicCapIcon, CalendarIcon, ClockIcon, CodeBracketIcon, CommandLineIcon, CpuChipIcon, FilmIcon, GlobeAltIcon, HandRaisedIcon, TruckIcon } from '@heroicons/react/24/outline';
import bernardologo from "../images/logos/bernardologo.png";
import cefastlogo from "../images/logos/cefast.svg";
import phaseslogo from "../images/logos/phaseslogo.png";
import pucminaslogo from "../images/logos/pucminas.png";
import sparelogo from "../images/logos/sparelogo.png";
import studlylogo from "../images/logos/studlylogo.png";

export const Name = 'Bernardo Rocha';

export const About = (
  <>
    {`I'm a inquisitive mind, trying to understand this "Strange New Worlds". If you'd like to get in touch,`}{' '}
    <ExternalLink href="mailto:b.vieira.rocha@gmail.com">send me an email.</ExternalLink>
  </>
);
export const AboutExtended = `Based in Belo Horizonte, Brazil, originally from the charming town of Nova Lima near the provincial capital, I am a undergrad student of Computer Science in the Pontifical Catholic University of Minas Gerais and a undergrad student of Computer Engineering at the Federal University of Minas Gerais. I'm passionate about programming, literature, soccer, and indulging in the world of movies and series.  The magic of cinema enchants me, and I find pure delight in immersing myself in captivating stories, dynamic characters, and visually stunning cinematography.`;

export type Project = {
  title: string;
  techStack: string[];
  description: string;
  logo: any;
  link?: {
    label: string;
    href: string;
  };
};


export const MyCurrentProjects: Project[] = [
  {
    title: "FlixMate",
    techStack: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Figma"],
    description:
      "Uma aplicação web para recomendação e descoberta de filmes.",
    logo: FilmIcon,
    link: {
      label: "github.com",
      href: "https://github.com/rubensbkl/Flixmate",
    },
  },
  {
    title: "Testador C/C++",
    techStack: [
      "C++",
      "C",
      "Linux",
      "Python",
    ],
    description:
      "Projeto que fornece um script de automação para testar códigos em C/C++, verificando se as saídas estão corretas.",
    logo: CommandLineIcon,
    link: {
      label: "github.com",
      href: "https://github.com/bernardovieirarocha/TestadorC",
    },
  },
  {
    title: "Class2Cal",
    techStack: ["Side Project", "Python", "Data Science", "Interface Gráfica"],
    description: "Class2Cal automatiza a criacao de calendarios acadêmicos integrando CSV e JSON para o formato iCalendar (.ics).",
    logo: CalendarIcon,
    link: {
      label: "github.com",
      href: "https://github.com/bernardovieirarocha/Class2Cal",
    },
  },
  {
    title: "Genius TinkerCad",
    techStack: ["Arduino", "C++", "Tinkercad"],
    description:
      "Implementação funcional do popular jogo de memória 'Genius' usando Tinkercad Circuits para a disciplina de LIP ",
    logo: CpuChipIcon,
    link: {
      label: "github.com",
      href: "https://github.com/bernardovieirarocha/GeniusTinkerCadLIP",
    },
  },
  {
    title: "UniCaronas",
    techStack: [
      "JavaScript",
      "jQuery",
      "HTML5",
      "CSS3",
      "Node.js",
    ],
    description:
      "Projeto de TI-1 para facilitar a combinação de caronas entre estudantes universitários, promovendo um meio de transporte mais organizado, seguro e sustentável.",
    logo: TruckIcon,
    link: {
      label: "github.com",
      href: "https://github.com/bernardovieirarocha/UniCaronas",
    },
  },
];

export const MyPastProjects: Project[] = [
  {
    title: "Schoolsys",
    techStack: [
      "Django",
      "DjangoRest",
      "PostgreSQL",
      "Javascript",
      "icalendar",
    ],
    description:
      " A responsive platform aiding students in organizing study routines effectively.",
    logo: AcademicCapIcon,
    link: {
      label: "github.com",
      href: "https://github.com/upwardweb/schoolsys",
    },
  },
  {
    title: "Respect Above Violence",
    techStack: ["Side Project", "Node.js", "Express", "EJS"],
    description:
      "NGO School Project: Combatting cyberbullying with educational resources, including animation video and fake history documentation.",
    logo: HandRaisedIcon,
    link: {
      label: "github.com",
      href: "https://github.com/upwardweb/respectaboveviolence",
    },
  },
  {
    title: "Datetimewidget",
    techStack: ["Side Project", "Python", "CSS", "Django", "Javascript"],
    description:
      "Enhanced Django Date & Time dropdown widget, simplifying form integration",
    logo: ClockIcon,
    link: {
      label: "github.com",
      href: "https://github.com/upwardweb/datetimewidget",
    },
  },
  {
    title: "Redjango",
    techStack: ["Side Project", "Django", "React", "DjangoRest"],
    description:
      "RedDjango: Practical integration of Django and React based on Udemy course.",
    logo: CodeBracketIcon,
    link: {
      label: "github.com",
      href: "https://github.com/upwardweb/redjango",
    },
  },
  {
    title: 'Mundo.informação',
    techStack: ['Next.js'],
    description: 'A bibliographic resource for each section of a presentation',
    logo: GlobeAltIcon,
    link: {
      label: 'github.com',
      href: 'https://github.com/upwardweb/mundo.informacao',
    },
  },
];

export const SocialMedia = [
  { name: 'Twitter', link: 'https://twitter.com/rocha_bbernardo', icon: XIcon },
  { name: 'Github', link: 'https://github.com/bernardovieirarocha', icon: GitHubIcon },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/bernardovrocha/', icon: LinkedInIcon },
] as const;


export const Work = [
  {
    company: "PUC MINAS",
    link: "",
    badges: ["Presencial"],
    title: "Monitor de Computação (AEDs I)",
    logo: pucminaslogo,
    start: "2024",
    end: "2025",
    description:
      "Monitor de Algoritmos e Estrutura de Dados I na PUC Minas, auxilio alunos na compreensão de conceitos e resolução de exercícios, desenvolvendo habilidades em comunicação e liderança.",
  },
  {
    company: "Fórmula CEFAST",
    link: "",
    badges: ["Presencial"],
    title: "Projetista Eletrônico",
    logo: cefastlogo,
    start: "2024",
    end: "presente",
    description:
      "Projetista de Módulos Eletrônicos usando Altium Designer para a Equipe Fórmula Cefast.",
  },

] as const;

export const CompaniesLinks = [
  {
    name: 'PUC MINAS',
    link: 'https://pucminas.br',
  },
  {
    name: 'CEFET-MG',
    link: 'https://cefetmg.br',
  },
] as const;

export const Books = [
  {
    name: 'Prediction Machines: The Simple Economics of Artificial Intelligence by Ajay Agrawal',
    link: 'https://www.amazon.com/Prediction-Machines-Economics-Artificial-Intelligence/dp/1633695670',
  },
  {
    name: 'Outliers: The Story of Success by Malcolm Gladwell',
    link: 'https://www.amazon.com/M-Gladwell-Outliers-StoryofSuccess-Hardcover/dp/B007ZY51Q2/ref=sr_1_2?crid=38XCQ64MHJ234&keywords=outliers&qid=1707758478&s=books&sprefix=outlier%2Cstripbooks-intl-ship%2C186&sr=1-2',
  },
  {
    name: 'Constituição da liberdade: Um Tratado sobre Direitos e Deveres de Tom G. Palmer',
    link: 'https://www.amazon.com.br/Constitui%C3%A7%C3%A3o-liberdade-Tratado-Direitos-Deveres-ebook/dp/B0CBQQR6ST/ref=sr_1_1?qid=1707758620&refinements=p_27%3ATom+G.+Palmer&s=books&sr=1-1#customerReviews',
  },
  {
    name: 'The Richest Man in Babylon by George S. Clason',
    link: 'https://www.amazon.com.br/Homem-Mais-Rico-Babil%C3%B4nia/dp/8595081530',
  },
  {
    name: 'Mere Christianity by C.S Lewis',
    link: 'https://www.amazon.com/Mere-Christianity-C-S-Lewis/dp/0060652926/ref=sr_1_1?crid=3SEVCJ4P9F8P5&keywords=mere+christianity%22+by+c.s.+lewis&qid=1707758723&s=books&sprefix=mere+chri%2Cstripbooks-intl-ship%2C363&sr=1-1',
  },
  {
    name: 'I, robot by Isaac Asimov',
    link: 'https://www.amazon.com/Eu-Robo-Em-Portugues-Brasil/dp/8576572001/ref=sr_1_1?crid=2N33NIGDJYYUI&keywords=eu+robo&qid=1707758770&s=books&sprefix=eu+ro%2Cstripbooks-intl-ship%2C189&sr=1-1',
  },
  {
    name: 'Atomic Habits by James Clear',
    link: 'https://www.amazon.com/James-Clear-Atomic-Habits-Proven/dp/B0BVCJC2RL/ref=sr_1_4?crid=2UM2Q79UMZCYH&keywords=Atomic+Habits%3A+An+Easy+%26+Proven+Way+to+Build+Good+Habits+%26+Break+Bad+Ones&qid=1707758901&sprefix=atomic+habits+an+easy+%26+proven+way+to+build+good+habits+%26+break+bad+ones+%2Caps%2C178&sr=8-4',
  },
] as const;

export const VideosWorthWatching = [
  {
    name: "We're Gonna Build a Framework",
    link: 'https://www.youtube.com/watch?v=Wm2h0cbvsw8',
  },
  {
    name: 'Bug in the JavaScript',
    link: 'https://www.youtube.com/watch?v=jxi0ETwDvws',
  },
] as const;

export const Podcasts = [
  {
    name: ' WVFRM Podcast',
    link: 'https://www.youtube.com/@Waveform',
  },
] as const;

export const PeopleWorthFollowingOnTwitter = [
  {
    name: 'Grant Sanderson',
    link: 'https://twitter.com/3blue1brown',
  },
  {
    name: 'Kurzgesagt',
    link: 'https://twitter.com/Kurz_Gesagt',
  },
] as const;

export const Quotes = [
  {
    content: 'We have two lives, and the second begins when we realize we only have one.',
    author: '― Confucius',
  },
  {
    content: 'The man who moves a mountain begins by carrying away small stones.',
    author: '― Confucius',
  },
  {
    content:
      'The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.',
    author: '― Confucius',
  },
  {
    content:
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did so. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    author: '― Mark Twain',
  },
  {
    content:
      "You have no responsibility to live up to what other people think you ought to accomplish. I have no responsibility to be like they expect me to be. It's their mistake, not my failing.",
    author: '― Mark Twain',
  },
  {
    content:
      'Watch your thoughts, they become your words; watch your words, they become your actions; watch your actions, they become your habits; watch your habits, they become your character; watch your character, it becomes your destiny.',
    author: '― Laozi',
  },
  {
    content: 'If you are going through hell, keep going.',
    author: '― Winston S. Churchill',
  },
  {
    content: 'Attitude is a little thing that makes a big difference.',
    author: '― Winston S. Churchill',
  },
  {
    content:
      'To think is easy. To act is hard. But the hardest thing in the world is to act in accordance with your thinking.',
    author: '― Johann Wolfgang von Goethe',
  },
  {
    content: 'It is not death that a man should fear, but he should fear never beginning to live.',
    author: '― Marcus Aurelius',
  },
  {
    content: 'If it is not right do not do it; if it is not true do not say it.',
    author: '― Marcus Aurelius',
  },
  {
    content:
      'You have power over your mind - not outside events. Realize this, and you will find strength.',
    author: '― Marcus Aurelius',
  },
  {
    content: 'The happiness of your life depends upon the quality of your thoughts.',
    author: '― Marcus Aurelius',
  },
  {
    content:
      'If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.',
    author: '― Marcus Aurelius',
  },
  {
    content: 'There is no easy way from the earth to the stars',
    author: '― Seneca',
  },
  {
    content: 'We suffer more often in imagination than in reality',
    author: '― Seneca',
  },
] as const;

export const Tools = {
  Workstation: [
    {
      title: 'Desktop PC with Ryzen 5800X, RTX 3070 OC, 32GB RAM, 1TB SSD, Corsair AIO',
      description:
        'My main computer, daily driver can handle any tasks you throw at him, very fast for games, productivity coding.',
      href: 'https://www.kabum.com.br/',
    },
    {
      title: 'Dell UltraSharp 27 Thunderbolt 4',
      description:
        '27inch Monitor (2560x1440) 120hz refresh rate with Thunderbolt 4.',
      href: 'https://www.dell.com/pt-br/shop/monitor-dell-ultrasharp-27-com-hub-thunderbolt-u2724de/apd/210-bksj/monitores-e-acessórios',
    },
    {
      title: 'MX Mechanical Mini',
      description:
        'High-performance keyboard with MX Mechanical switches, rapid response.',
      href: 'https://www.logitech.com/pt-br/shop/p/mx-mechanical-mini',
    },
    {
      title: 'Logitech G502 HERO',
      description: "Ultimate gaming performance with HERO 25K sensor, customizable LIGHTSYNC RGB, and adjustable weights",
      href: 'https://www.logitechg.com/pt-br/products/gaming-mice/g502-hero-gaming-mouse.910-006096.html',
    },
    {
      title: 'Logitech G PRO X 2 LIGHTSPEED',
      description: `Simply the best Headset ever`,
      href: 'https://www.logitechstore.com.br/fone-de-ouvido-gamer-sem-fio-logitech-g-pro-x-2-lightspeed-preto/?srsltid=AfmBOopLdfX4oujgk0fUdhKQWHoJiuMPlMirtXcEeC5CRIWfZKtbMNhE',
    },
  ],
  Software: [
    {
      title: 'Visual Studio Code',
      description: `I still miss using JetBrains software but at least VS Code does cost $300 bucks a month. And to be fair, it's a great editor.`,
      href: 'https://code.visualstudio.com/',
    },
    {
      title: 'ZSH - OhMyZsh',
      description: `Oh My Zsh is a delightful, open source, community-driven framework for managing your Zsh configuration.`,
      href: 'https://ohmyz.sh/',
    },
    {
      title: 'Spaceship Prompt',
      description: `Spaceship is a minimalistic, powerful and extremely customizable Zsh prompt.`,
      href: 'https://github.com/spaceship-prompt/spaceship-prompt',
    },
    {
      title: 'Figma',
      description: `I'm not a designer but it allows me to quickly mock up interfaces and play with my ideas. One day I'll learn how to use it properly.`,
      href: 'https://www.figma.com/',
    },
    {
      title: 'Notion',
      description: `I use it for everything. I have a separate workspace for each of my projects and I use it to keep track of my tasks, notes, and ideas.`,
      href: 'https://www.notion.so/',
    },
    {
      title: '1Password',
      description: `Not much to say here. It's a great password manager.`,
      href: 'https://1password.com/',
    },
  ],
} as const;


// This is the data for the resume in Portuguese

export const RESUME_DATA_PT = {
  name: "Bernardo Vieira Rocha",
  initials: "BVR",
  location: "Belo Horizonte, Brazil, MG",
  locationLink: "https://www.google.com/maps/place/BeloHorizonte",
  about:
    "Graduando em Ciência da Computação e Engenharia de Computação.",
  summary:
    "Eu sou um Estudante de Graduação 🎓 cursando Ciência da Computação na Pontifícia Universidade Católica de Minas Gerais e Engenharia de Computação no Centro Federal de Educação Tecnológica de Minas Gerais. Eu sou um Entusiasta 💻 😃 apaixonado por aprender e utilizar novas tecnologias. Eu adoro construir projetos e produtos interessantes, que também sirvam um propósito.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/64905090?s=400&u=38aeca0edb2c6c8ccd97e96726c6ab622026c39f&v=4",
  personalWebsiteUrl: "https://bernardorocha.com",
  contact: {
    email: "b.vieira.rocha@gmail.com",
    tel: "++55 31 993679089",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/bernardovieirarocha",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bernardovrocha/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Centro Federal de Educação Tecnológica de Minas Gerais",
      degree: "Bacharelado em Engenharia de Computação",
      start: "2024",
      end: "2029",
    },
    {
      school: "Pontifical Catholic University of Minas Gerais",
      degree: "Bacharelado em Ciência da Computação",
      start: "2024",
      end: "2028",
    },
    {
      school: "Colégio Magnum Agostiniano Cidade Nova",
      degree: "Ensino Médio Completo",
      start: "2019",
      end: "2023",
    }
  ],
  certification: [
    {
      nameCertification: "Algoritmos e Programação Orientada a Objetos com Swift",
      link: "https://lms.hackatruck.com.br/mod/simplecertificate/verify.php",
      badges: [],
      logo: "",
      start: "2024",
      end: "2025",
      description:
        "Conclusão do curso Algoritmos e Programação Orientada a Objetos com Swift.",
    },
    {
      nameCertification: "Red Hat System Administration I (RH124)",
      link: "https://www.linkedin.com/in/bernardovrocha/details/certifications/1723726445548/single-media-viewer?type=DOCUMENT&profileId=ACoAAEtsdd4Bid3JT3WnHLrstc7yY9ct1Ij0dXY&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2POQ8szuTNOaUdQuXm%2B%2ByA%3D%3D",
      badges: [],
      logo: "",
      start: "2024",
      end: "2025",
      description:
        "Conclusão do curso Red Hat System Administration I (RH124).",
    },
    {
      nameCertification: "Python 3 COMPLETO.",
      link: "https://www.udemy.com/certificate/UC-21V2Q9RM/",
      badges: ["Udemy"],
      logo: pucminaslogo,
      start: "2018",
      end: "",
      description:
        "Certificado de conclusão do curso de Python 3 COMPLETO.",
    },
    {
      nameCertification: "Desenvolvimento web com Django, React e deploy AWS e Linux",
      link: "https://www.udemy.com/certificate/UC-2dcdc62c-fde4-48fa-99e3-9bd8eeb77a49/",
      badges: ["Udemy"],
      logo: "",
      start: "2024",
      end: "",
      description:
        "Certificado de conclusão do curso da Udemy de Desenvolvimento web com Django.",
    },
    {
      nameCertification: "Olimpíada Internacional Mathématiques sans frontières",
      link: "https://www.matematicasemfronteiras.org/OIMSF_2023_NACIONAL_OURO.pdf",
      badges: [],
      logo: "",
      start: "2023",
      end: "",
      description:
        "Medalhalista de Ouro na OMISF.",
    },
    {
      nameCertification: "Olimpíada Brasileira de Astronomia e Astronáutica",
      link: "http://www.oba.org.br/site/",
      badges: [],
      logo: "",
      start: "2023",
      end: "",
      description:
        "Medalhalista de Prata na OBA 2023.",
    }

  ],
  work: [
    {
      company: "PUC MINAS",
      link: "",
      badges: ["Presencial"],
      title: "Monitor de Computação (AEDs I)",
      logo: "",
      start: "2024",
      end: "2025",
      description:
        "Monitor de Algoritmos e Estrutura de Dados I na PUC Minas, auxilio alunos na compreensão de conceitos e resolução de exercícios, desenvolvendo habilidades em comunicação e liderança.",
    },
    {
      company: "Fórmula CEFAST",
      link: "",
      badges: ["Presencial"],
      title: "Projetista Eletrônico",
      logo: cefastlogo,
      start: "2024",
      end: "presente",
      description:
        "Projetista de Módulos Eletrônicos usando Altium Designer para a Equipe Fórmula Cefast.",
    },

  ],

  skills: [
    "Python",
    "Altium",
    "C",
    "C++",
    "Java",
    "Linux",
    "Django",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
  ],
  projects: [
    {
      title: "FlixMate",
      techStack: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Figma"],
      description:
        "Uma aplicação web para recomendação e descoberta de filmes.",
      logo: FilmIcon,
      link: {
        label: "github.com",
        href: "https://github.com/rubensbkl/Flixmate",
      },
      image: "",
    },
    {
      title: "Testador C/C++",
      techStack: [
        "C++",
        "C",
        "Linux",
        "Python",
      ],
      description:
        "Projeto que fornece um script de automação para testar códigos em C/C++, verificando se as saídas estão corretas.",
      logo: CommandLineIcon,
      link: {
        label: "github.com",
        href: "https://github.com/bernardovieirarocha/TestadorC",
      },
    },
    {
      title: "Class2Cal",
      techStack: ["Side Project", "Python", "Data Science", "Interface Gráfica"],
      description: "Class2Cal automatiza a criacao de calendarios acadêmicos integrando CSV e JSON para o formato iCalendar (.ics).",
      logo: CalendarIcon,
      link: {
        label: "github.com",
        href: "https://github.com/bernardovieirarocha/Class2Cal",
      },
      image: "",
    },
    {
      title: "Genius TinkerCad",
      techStack: ["Arduino", "C++", "Tinkercad"],
      description:
        "Implementação funcional do popular jogo de memória 'Genius' usando Tinkercad Circuits para a disciplina de LIP ",
      logo: CpuChipIcon,
      link: {
        label: "github.com",
        href: "https://github.com/bernardovieirarocha/GeniusTinkerCadLIP",
      },
    },
    {
      title: "UniCaronas",
      techStack: [
        "JavaScript",
        "jQuery",
        "HTML5",
        "CSS3",
        "Node.js",
      ],
      description:
        "Projeto de TI-1 para facilitar a combinação de caronas entre estudantes universitários, promovendo um meio de transporte mais organizado, seguro e sustentável.",
      logo: TruckIcon,
      link: {
        label: "github.com",
        href: "https://github.com/bernardovieirarocha/UniCaronas",
      },
      image: "",
    },
  ],
} as const;
