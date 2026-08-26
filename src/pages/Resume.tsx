import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Award,
  Briefcase,
  Calendar,
  Code2,
  ExternalLink,
  FlaskConical,
  FolderKanban,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Printer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { useTranslation } from "@/i18n";
import {
  certifications,
  education,
  personalInfo,
  projects,
  research,
  skills,
  socialLinks,
  workExperience,
} from "@/data/content";

/**
 * Página de currículo. Substitui o antigo site bernardorocha.me (repo `cv`).
 *
 * Diferença central em relação ao original: nenhum dado é declarado aqui.
 * Tudo vem de src/data/content.ts, então currículo e home nunca divergem.
 *
 * Esta página É o PDF do currículo: o botão chama window.print() e o bloco
 * `@media print` de src/index.css troca os tokens do tema escuro por tinta
 * sobre branco. As classes `print:` daqui cuidam só do que é estrutura
 * (esconder a navegação, tirar a linha da timeline), não de cor.
 */
const Resume = () => {
  const { t, language } = useTranslation();

  const updatedAt = new Date().toLocaleDateString(language === "pt" ? "pt-BR" : "en-US", {
    month: "long",
    year: "numeric",
  });

  const formatPeriod = (start: string, end: string | null) =>
    end ? `${start} a ${end}` : `${language === "pt" ? "desde" : "since"} ${start}`;

  const skillGroups = [
    { title: t.resume.skillCategories.languages, items: skills.languages },
    { title: t.resume.skillCategories.backend, items: skills.backend },
    { title: t.resume.skillCategories.embedded, items: skills.embedded },
    { title: t.resume.skillCategories.devops, items: skills.devops },
    { title: t.resume.skillCategories.frontend, items: skills.frontend },
  ];

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <Seo title={t.seo.resume.title} description={t.seo.resume.description} path="/resume" />

      <div className="min-h-screen bg-background">
        {/* Barra superior: some na impressão */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border print:hidden">
          <nav className="container px-6 h-16 flex items-center justify-between gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              {t.resume.backHome}
            </Link>
            <Button variant="outline" size="sm" onClick={() => window.print()} className="gap-2">
              <Printer className="w-4 h-4" aria-hidden="true" />
              {t.resume.downloadPdf}
            </Button>
          </nav>
        </header>

        <main className="pt-24 pb-16 print:pt-0 print:pb-0">
          <div className="container mx-auto max-w-4xl px-6 print:max-w-none print:px-0">
            {/* Cabeçalho: contatos numa linha só, sem repetir o domínio de
                cada serviço. O ícone já diz qual é, e o espaço vai para o
                conteúdo do currículo. */}
            <section className="mb-10 pb-6 border-b border-border print:mb-4 print:pb-4">
              <h1 className="text-title font-bold mb-2">{personalInfo.fullName}</h1>
              <p className="text-base text-primary mb-4">{t.resume.role}</p>

              <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-1.5 hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                    {personalInfo.email}
                  </a>
                </li>
                <li>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4 shrink-0" aria-hidden="true" />
                    bernardovieirarocha
                  </a>
                </li>
                <li>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-4 h-4 shrink-0" aria-hidden="true" />
                    bernardovrocha
                  </a>
                </li>
                <li className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                  {`${personalInfo.location.city}, ${personalInfo.location.state}, ${
                    language === "pt"
                      ? personalInfo.location.country
                      : personalInfo.location.countryEn
                  }`}
                </li>
              </ul>
            </section>

            {/* Resumo */}
            <section className="mb-10 print:mb-4">
              <p className="text-muted-foreground leading-relaxed print:leading-snug">{t.resume.summary}</p>
            </section>

            {/* Experiência */}
            <section className="mb-10 print:mb-4">
              <div className="flex items-center gap-3 mb-6 print:mb-2">
                <Briefcase className="w-5 h-5 text-primary" aria-hidden="true" />
                <h2 className="text-lead font-bold">{t.resume.sections.experience}</h2>
              </div>
              <div className="space-y-6 print:space-y-4">
                {workExperience.map((exp) => (
                  <article
                    key={`${exp.company}-${exp.startDate}`}
                    className="relative pl-6 print:pl-0 border-l-2 print:border-l-0 border-border"
                  >
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary print:hidden" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h3 className="font-semibold">{exp.title[language]}</h3>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        {formatPeriod(exp.startDate, exp.endDate)}
                      </span>
                    </div>
                    <p className="text-primary text-sm mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">{exp.description[language]}</p>
                    <div className="flex flex-wrap gap-2 print:gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-mono rounded bg-secondary text-muted-foreground print:border print:border-border print:px-1.5 print:py-0"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Formação */}
            <section className="mb-10 print:mb-4">
              <div className="flex items-center gap-3 mb-6 print:mb-2">
                <GraduationCap className="w-5 h-5 text-primary" aria-hidden="true" />
                <h2 className="text-lead font-bold">{t.resume.sections.education}</h2>
              </div>
              <div className="space-y-5 print:space-y-3">
                {education.map((edu) => (
                  <article
                    key={`${edu.institution}-${edu.startDate}`}
                    className="relative pl-6 print:pl-0 border-l-2 print:border-l-0 border-border"
                  >
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary print:hidden" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h3 className="font-semibold">{edu.degree[language]}</h3>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        {`${edu.startDate} a ${edu.endDate}`}
                      </span>
                    </div>
                    <p className="text-primary text-sm">{edu.institution}</p>
                    {edu.description && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {edu.description[language]}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </section>

            {/* Pesquisa e apresentações. Vem logo depois da Formação porque
                é leitura de currículo acadêmico: quem abre este arquivo por
                causa de uma vaga de pesquisa procura isto antes da stack. */}
            <section className="mb-10 print:mb-4">
              <div className="flex items-center gap-3 mb-6 print:mb-2">
                <FlaskConical className="w-5 h-5 text-primary" aria-hidden="true" />
                <h2 className="text-lead font-bold">{t.resume.sections.research}</h2>
              </div>
              <div className="space-y-5 print:space-y-3">
                {research.map((item) => (
                  <article
                    key={item.title.en}
                    className="relative pl-6 print:pl-0 border-l-2 print:border-l-0 border-border"
                  >
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary print:hidden" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                      <h3 className="font-semibold">{item.title[language]}</h3>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono shrink-0">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        {item.date}
                      </span>
                    </div>
                    <p className="text-primary text-sm">{item.venue[language]}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description[language]}
                    </p>
                    {/* Mono porque é ficha catalográfica, não prosa: tipo de
                        contribuição, autoria na ordem da submissão, orientação. */}
                    <p className="font-mono text-xs text-muted-foreground mt-2">
                      {item.kind[language]}
                      {" · "}
                      {item.authors.join(", ")}
                      {item.advisors && (
                        <>
                          {" · "}
                          {t.resume.advisors}: {item.advisors.join(", ")}
                        </>
                      )}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            {/* Habilidades técnicas */}
            <section className="mb-10 print:mb-4">
              <div className="flex items-center gap-3 mb-6 print:mb-2">
                <Code2 className="w-5 h-5 text-primary" aria-hidden="true" />
                <h2 className="text-lead font-bold">{t.resume.sections.skills}</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-5 print:grid-cols-2 print:gap-3">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="font-mono text-primary text-xs mb-2">{group.title}</h3>
                    <p className="text-sm text-muted-foreground">{group.items.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Projetos */}
            <section className="mb-10 print:mb-4">
              <div className="flex items-center gap-3 mb-6 print:mb-2">
                <FolderKanban className="w-5 h-5 text-primary" aria-hidden="true" />
                <h2 className="text-lead font-bold">{t.resume.sections.projects}</h2>
              </div>
              <div className="space-y-4 print:space-y-2.5">
                {featuredProjects.map((project) => (
                  <article key={project.title}>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{project.title}</h3>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} no GitHub`}
                          className="text-muted-foreground hover:text-primary transition-colors print:hidden"
                        >
                          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {project.description[language]}
                    </p>
                    <p className="font-mono text-xs text-muted-foreground">
                      {project.techStack.join(" · ")}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            {/* Certificações */}
            <section className="mb-10 print:mb-4">
              <div className="flex items-center gap-3 mb-6 print:mb-2">
                <Award className="w-5 h-5 text-primary" aria-hidden="true" />
                <h2 className="text-lead font-bold">{t.resume.sections.certifications}</h2>
              </div>
              <div className="space-y-3 print:space-y-1.5">
                {certifications.map((cert) => (
                  <div
                    key={cert.name.en}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1"
                  >
                    <p className="text-sm">
                      {cert.name[language]}
                      <span className="text-muted-foreground">, {cert.issuer}</span>
                    </p>
                    <span className="font-mono text-xs text-muted-foreground">{cert.date}</span>
                  </div>
                ))}
              </div>
            </section>

            <p className="font-mono text-xs text-muted-foreground border-t border-border pt-6">
              {t.resume.updatedIn} {updatedAt}
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default Resume;
