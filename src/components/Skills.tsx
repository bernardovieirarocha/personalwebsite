import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/i18n";
import { skills } from "@/data/content";

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t.skills.categories.languages,
      skills: skills.languages,
    },
    {
      title: t.skills.categories.backend,
      skills: skills.backend,
    },
    {
      title: t.skills.categories.embedded,
      skills: skills.embedded,
    },
    {
      title: t.skills.categories.devops,
      skills: skills.devops,
    },
    {
      title: t.skills.categories.frontend,
      skills: skills.frontend,
    },
  ];

  return (
    <section id="skills" className="py-32 relative bg-secondary/20">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-4 mb-16">
              <span className="font-mono text-primary text-sm">{t.skills.sectionNumber}</span>
              <h2 className="text-3xl md:text-4xl font-bold">{t.skills.title}</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
          </AnimatedSection>

          {/* items-stretch + h-full em cada nível: as caixas ficam da mesma
              altura mesmo quando uma categoria tem mais tecnologias que a outra */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {skillCategories.map((category, categoryIndex) => (
              <AnimatedSection
                key={category.title}
                animation="fade-up"
                delay={categoryIndex * 100}
                className="h-full"
              >
                <div
                  className="h-full p-6 rounded-xl border border-border bg-card/50 hover:border-primary/30 transition-all duration-300"
                >
                  <h3 className="font-mono text-primary text-sm mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-lg text-sm font-medium bg-secondary text-foreground border border-border hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
