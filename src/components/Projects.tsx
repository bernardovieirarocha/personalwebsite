import { ExternalLink, Github } from "lucide-react";
import { Reveal } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/i18n";
import { projects, type Project } from "@/data/content";
import SectionHeading from "./SectionHeading";

/**
 * Projeto em destaque, num painel.
 *
 * O que se evita aqui é a GRADE de cards idênticos: cinco caixas do mesmo
 * tamanho, ícone em cima, título, dois parágrafos. Isso é template. Estes são
 * painéis empilhados em largura cheia, de alturas diferentes (três têm captura,
 * dois não), e a superfície existe para um motivo: as capturas precisavam de
 * uma moldura para não parecerem PNG solto no fundo da página.
 *
 * O tier de baixo ("Outros projetos") continua sendo lista sem caixa, de
 * propósito. É o contraste entre os dois que faz a hierarquia aparecer.
 */
const FeaturedProject = ({ project, language }: { project: Project; language: "pt" | "en" }) => (
  <article className="rounded-lg border border-border bg-surface p-6 transition-colors duration-fast hover:border-border-strong sm:p-8">
    <div className="flex items-start justify-between gap-4">
      <h3 className="text-lead font-bold text-foreground">{project.title}</h3>
      <ProjectLinks project={project} />
    </div>

    <p className="mt-3 max-w-[68ch] text-sm text-muted-foreground">{project.description[language]}</p>

    {/* Sem borda nos chips: sobre um painel que já tem borda, cada pílula
        contornada vira mais um retângulo competindo. Só o degrau de superfície. */}
    <ul className="mt-5 flex flex-wrap gap-2">
      {project.techStack.map((tech) => (
        <li
          key={tech}
          className="rounded bg-surface-raised px-2 py-1 font-mono text-xs text-muted-foreground"
        >
          {tech}
        </li>
      ))}
    </ul>

    {project.image && (
      // Proporção nativa, sem recorte: as capturas vão de 1.47:1 a 2.27:1, e
      // qualquer aspect fixo cortaria alguma. `width`/`height` são os do
      // arquivo, então o browser reserva a altura exata antes de baixar.
      <div className="mt-7 overflow-hidden rounded-md border border-border bg-background">
        <img
          src={project.image.src}
          alt={project.title}
          width={project.image.width}
          height={project.image.height}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full"
        />
      </div>
    )}
  </article>
);

const ProjectLinks = ({ project }: { project: Project }) => (
  <div className="flex shrink-0 items-center gap-1">
    {project.githubUrl && (
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} no GitHub`}
        className="grid h-9 w-9 place-items-center rounded-md text-muted-foreground transition-colors duration-fast hover:text-primary"
      >
        <Github className="h-4 w-4" aria-hidden="true" />
      </a>
    )}
    {project.liveUrl && (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title}, site`}
        className="grid h-9 w-9 place-items-center rounded-md text-muted-foreground transition-colors duration-fast hover:text-primary"
      >
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
      </a>
    )}
  </div>
);

const Projects = () => {
  const { t, language } = useTranslation();

  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-section">
      <div className="container px-6">
        <Reveal className="mx-auto max-w-3xl">
          <SectionHeading title={t.projects.title} />

          {/* space-y-6, não 14: com painel, a moldura já separa uma entrada da
              seguinte, e o vão grande era para compensar a ausência dela. */}
          <div className="space-y-6">
            {featured.map((project) => (
              <FeaturedProject key={project.title} project={project} language={language} />
            ))}
          </div>

          {/* text-base e não text-xs: em 12px este h3 ficava MENOR que os h4 de
              14px dos cards logo abaixo dele. Mesma inversão do h2, um nível
              adentro. Mono porque aqui é divisor de tier, não título. */}
          <h3 className="mb-5 mt-16 font-mono text-base font-medium text-foreground">{t.projects.otherProjects}</h3>

          {/*
            AQUI o grid faz sentido, e só aqui. Estes cinco não têm captura: são
            título, um parágrafo e as tecnologias, então duas colunas cabem sem
            perder nada. Os destaques ficam em largura cheia justamente por
            causa da imagem: em duas colunas dentro de 768px cada captura teria
            ~360px, e o dashboard da telemetria e a tabela do Proxmox voltariam a
            ser ilegíveis. Foi esse o problema que a versão de coluna estreita
            tinha.

            `items-start` e `auto-rows-fr` fora de propósito: as descrições têm
            comprimentos bem diferentes, e forçar altura igual criaria a grade de
            caixas idênticas. Cada uma termina onde o texto dela termina.
          */}
          <ul className="grid gap-4 sm:grid-cols-2">
            {others.map((project) => (
              <li
                key={project.title}
                className="rounded-lg border border-border p-5 transition-colors duration-fast hover:border-border-strong"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-sm font-bold text-foreground">{project.title}</h4>
                  <ProjectLinks project={project} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.description[language]}
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                  {project.techStack.map((tech) => (
                    <li key={tech} className="font-mono text-xs text-muted-foreground">
                      {tech}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
