import { ExternalLink } from '../components/ExternalLink';
import { GitHubIcon } from '../components/icons/GitHubIcon';
import { LinkedInIcon } from '../components/icons/LinkedInIcon';
import { XIcon } from '../components/icons/XIcon';
import bernardologo from "../images/logos/bernardologo.png";
import ledgerlogo from "../images/logos/ledgerlogo.png";
import mundoinformacaologo from "../images/logos/mundoinformacaologo.png";
import phaseslogo from "../images/logos/phaseslogo.png";
import redjangologo from "../images/logos/redjangologo.png";
import respectaboveviolencelogo from "../images/logos/respectaboveviolencelogo.png";
import schoolsyslogo from "../images/logos/schoolsyslogo.png";
import sparelogo from "../images/logos/sparelogo.png";
import studlylogo from "../images/logos/studlylogo.png";
import datetimelogo from "../images/logos/widgetlogo.png";


export const Name = 'Bernardo Rocha';

export const About = (
  <>
    {`I'm a inquisitive mind, trying to understand this "Strange New Worlds". If you'd like to get in touch,`}{' '}
    <ExternalLink href="mailto:b.vieira.rocha@gmail.com">send me an email.</ExternalLink>
  </>
);
export const AboutExtended = `Based in Belo Horizonte, Brazil, originally from the charming town of Nova Lima near the provincial capital, I am a grad student of Computer Science in the Pontifical Catholic University of Minas Gerais. I'm passionate about programming, literature, soccer, and indulging in the world of movies and series.  The magic of cinema enchants me, and I find pure delight in immersing myself in captivating stories, dynamic characters, and visually stunning cinematography.`;

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
    title: 'bernardorocha.com',
    techStack: ['Tailwind', 'Next.js',"Typescript"],
    description: 'My personal website you are currently on, built with Next.js.',
    logo: bernardologo,
    link: {
      label: 'github.com',
      href: 'https://github.com/upwardweb/personalwebsite',
    },
  },
  {
    title: 'bernardorocha.me',
    techStack: ['Tailwind', 'Next.js', "Typescript"],
    description: 'My Resume (Curriculum website), built with Next.js.',
    logo: bernardologo,
    link: {
      label: 'bernardorocha.me',
      href: 'https://bernardorocha.me',
    },
  },
  {
    title: 'studly.com.br',
    techStack: ['Stripe', 'Next.js', "Vercel", "In-Development"],
    description: 'My freelacing company that develops websites for every need, but nowdays mainly working with teachers ands professors.',
    logo: studlylogo,
    link: {
      label: 'studly.com.br',
      href: 'https://studly.com.br/',
    },
  },
  {
    title: 'phases.com',
    techStack: ['Django', 'React', "DjangoRest", "In-Development"],
    description: ' Plataforma de organização de projetos, tarefas e anotações ',
    logo: phaseslogo,
    link: {
      label: 'github.com.br',
      href: 'https://github.com/upwardweb/phases',
    },
  },
  {
    title: 'Ledger',
    techStack: ['Stripe', 'Next.js', "Vercel", "In-Development"],
    description: 'Project to create a ledger to safely store debts inbetween friends',
    logo: ledgerlogo,
    link: {
      label: '',
      href: '',
    },
  },
  {
    title: 'Spare',
    techStack: ['Stripe', 'Next.js', "Vercel", "In-Development"],
    description: 'Finance Organizer for freelancer',
    logo: sparelogo,
    link: {
      label: '',
      href: '',
    },
  }
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
    logo: schoolsyslogo,
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
    logo: respectaboveviolencelogo,
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
    logo: datetimelogo,
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
    logo: redjangologo,
    link: {
      label: "github.com",
      href: "https://github.com/upwardweb/redjango",
    },
  },
  {
    title: 'Mundo.informação',
    techStack: ['Next.js'],
    description: 'A bibliographic resource for each section of a presentation',
    logo: mundoinformacaologo,
    link: {
      label: 'github.com',
      href: 'https://github.com/upwardweb/mundo.informacao',
    },
  },
];

export const SocialMedia = [
  { name: 'Twitter', link: 'https://twitter.com/rocha_bbernardo', icon: XIcon },
  { name: 'Github', link: 'https://github.com/upwardweb', icon: GitHubIcon },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/bernardovrocha/', icon: LinkedInIcon },
] as const;

// export const Work = [
//   {
//     company: '',
//     title: 'Full Stack Developer',
//     logo: "",
//     start: '',
//     end: '',
//   },
// ] as const;

// export const CompaniesLinks = [
//   {
//     name: '',
//     link: '',
//   },
// ] as const;

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
    name: 'Flow Podcast',
    link: 'https://www.youtube.com/@FlowPodcast',
  },
  {
    name: 'Joe Rogan',
    link: 'https://www.youtube.com/@joerogan',
  },
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
    name: 'Programming Wisdom',
    link: 'https://twitter.com/CodeWisdom',
  },
  {
    name: 'Kurzgesagt',
    link: 'https://twitter.com/Kurz_Gesagt',
  },
  {
    name: 'Pedro Loos',
    link: 'https://twitter.com/pedroloos',
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
      title: 'TUF Gaming VG259QM G-SYNC',
      description:
        '25inch Monitor (1920x1080) 240hz refresh rate with DisplayHDR, G-SYNC, and 1ms (GTG)',
      href: 'https://www.asus.com/displays-desktops/monitors/tuf-gaming/tuf-gaming-vg259qm/',
    },
    {
      title: 'Logitech G512 CARBON',
      description:
        'High-performance gaming keyboard with GX mechanical switches, rapid response, and customizable RGB lighting.',
      href: 'https://www.logitechg.com/pt-br/products/gaming-keyboards/g512-mechanical-gaming-keyboard.920-009400.html',
    },
    {
      title: 'Logitech G502 HERO',
      description: "Ultimate gaming performance with HERO 25K sensor, customizable LIGHTSYNC RGB, and adjustable weights",
      href: 'https://www.logitechg.com/pt-br/products/gaming-mice/g502-hero-gaming-mouse.910-006096.html',
    },
    {
      title: 'Logitech PRO X',
      description: `Simply the best Headset ever`,
      href: 'https://www.logitechg.com/pt-br/products/gaming-audio/pro-x-gaming-headset-blue-voice-mic-tech.html',
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
    // {
    //   title: 'Raycast',
    //   description: `Window management, quick access to my most used apps, and a bunch of other useful features. I use it every day.`,
    //   href: 'https://www.raycast.com/',
    // },
    {
      title: '1Password',
      description: `Not much to say here. It's a great password manager.`,
      href: 'https://1password.com/',
    },
  ],
} as const;
