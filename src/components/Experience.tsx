import { Reveal } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/i18n";
import { workExperience, education } from "@/data/content";
import SectionHeading from "./SectionHeading";

const Experience = () => {
  const { t, language } = useTranslation();

  const formatPeriod = (start: string, end: string | null) =>
    end ? `${start} a ${end}` : `${t.experience.since} ${start}`;

  return (
    <section id="experience" className="py-section">
      <div className="container px-6">
        <Reveal className="mx-auto max-w-4xl">
          <SectionHeading number={t.experience.sectionNumber} title={t.experience.title} />

          {/* Timeline: uma régua contínua à esquerda, marcador por item.
              A régua aqui carrega informação (a sequência), diferente da
              que tirei dos cabeçalhos. */}
          <ol className="relative space-y-10 border-l border-border pl-6">
            {workExperience.map((job, index) => (
              <li key={`${job.company}-${job.startDate}-${index}`} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.6875rem] top-2 h-2 w-2 rounded-full bg-primary ring-4 ring-background"
                />

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="text-base font-bold text-foreground">{job.title[language]}</h3>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">
                    {formatPeriod(job.startDate, job.endDate)}
                  </span>
                </div>

                <p className="mt-1 text-sm text-primary">{job.company}</p>
                <p className="mt-3 max-w-[68ch] text-sm text-muted-foreground">
                  {job.description[language]}
                </p>

                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                  {job.technologies.map((tech) => (
                    <li key={tech} className="font-mono text-xs text-muted-foreground">
                      {tech}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <h3 className="mb-5 mt-14 font-mono text-xs text-primary">
            {t.experience.educationTitle}
          </h3>

          <ol className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {education
              .filter((item) => item.description)
              .map((item) => (
                <li key={item.institution} className="border-t border-border pt-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <h4 className="text-sm font-medium text-foreground">{item.degree[language]}</h4>
                    <span className="shrink-0 font-mono text-xs text-muted-foreground">
                      {`${item.startDate}–${item.endDate}`}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{item.institution}</p>
                </li>
              ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
};

export default Experience;
