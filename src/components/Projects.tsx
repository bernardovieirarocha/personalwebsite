import { ExternalLink, Github, Folder } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/i18n";
import { projects } from "@/data/content";

const Projects = () => {
  const { t, language } = useTranslation();

  // Get featured and other projects
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-32 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-4 mb-16">
              <span className="font-mono text-primary text-sm">{t.projects.sectionNumber}</span>
              <h2 className="text-3xl md:text-4xl font-bold">{t.projects.title}</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
          </AnimatedSection>

          {/* Featured projects */}
          <div className="space-y-24 mb-24">
            {featuredProjects.map((project, index) => (
              <AnimatedSection key={project.title} animation={index % 2 === 0 ? "fade-right" : "fade-left"} delay={100}>
                <div
                  className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                    }`}
                >
                  {/* Project image placeholder */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="aspect-video rounded-xl bg-secondary border border-border overflow-hidden group cursor-pointer relative">
                      {project.image ? (
                        <>
                          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </>
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                          <project.icon className="w-16 h-16 text-primary/50" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project info */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:text-right' : ''}`}>
                    <p className="font-mono text-primary text-sm mb-2">{t.projects.featured}</p>
                    <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
                      {project.title}
                    </h3>
                    <div className="p-6 rounded-xl bg-card border border-border mb-4">
                      <p className="text-muted-foreground">
                        {project.description[language]}
                      </p>
                    </div>
                    <div className={`flex flex-wrap gap-3 mb-6 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                      {project.techStack.map((tech) => (
                        <span key={tech} className="font-mono text-xs text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className={`flex items-center gap-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Other projects */}
          <div>
            <AnimatedSection animation="fade-up">
              <h3 className="text-xl font-bold text-center mb-12">{t.projects.otherProjects}</h3>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherProjects.map((project, index) => (
                <AnimatedSection key={project.title} animation="scale" delay={index * 100}>
                  <div
                    className="group p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 h-full"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <Folder className="w-10 h-10 text-primary" />
                      <div className="flex items-center gap-3">
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description[language]}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tag) => (
                        <span key={tag} className="font-mono text-xs text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
