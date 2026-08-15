import { ExternalLink, Github } from "lucide-react";
import { Reveal } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/i18n";
import { projects, type Project } from "@/data/content";
import SectionHeading from "./SectionHeading";

/**
 * Projeto em destaque. Não é card: é uma entrada de lista com régua acima,
 * imagem quando existe e texto quando não. A grade de cards idênticos com
 * borda arredondada era o que mais entregava "template" na página.
 */
const FeaturedProject = ({ project, language }: { project: Project; language: "pt" | "en" }) => (
  <article className="border-t border-border pt-8">
    <div className="max-w-[68ch]">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lead font-bold text-foreground">{project.title}</h3>
        <ProjectLinks project={project} />
      </div>

      <p className="mt-3 text-sm text-muted-foreground">{project.description[language]}</p>

      <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1">
        {project.techStack.map((tech) => (
          <li key={tech} className="font-mono text-xs text-muted-foreground">
            {tech}
          </li>
        ))}
      </ul>
    </div>

    {project.image && (
      // Largura cheia e proporção nativa. A versão anterior espremia tudo numa
      // coluna de 18rem e forçava aspect-[16/9] com object-cover — as capturas
      // vão de 1.47:1 a 2.27:1, então qualquer proporção fixa cortava alguma.
      // Aqui `width`/`height` são os do arquivo: o browser reserva a altura
      // exata antes de baixar, e nada é recortado.
      <img
        src={project.image.src}
        alt={project.title}
        width={project.image.width}
        height={project.image.height}
        loading="lazy"
        decoding="async"
        className="mt-7 h-auto w-full rounded-md border border-border bg-surface"
      />
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

          <div className="space-y-14">
            {featured.map((project) => (
              <FeaturedProject key={project.title} project={project} language={language} />
            ))}
          </div>

          <h3 className="mb-5 mt-16 font-mono text-xs font-medium text-foreground">{t.projects.otherProjects}</h3>

          <ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {others.map((project) => (
              <li key={project.title} className="border-t border-border pt-4">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-sm font-bold text-foreground">{project.title}</h4>
                  <ProjectLinks project={project} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.description[language]}
                </p>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
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
