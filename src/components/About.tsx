import { Code2, Cpu, Database, Server, Workflow, Zap } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/i18n";

const About = () => {
  const { t } = useTranslation();

  const highlights = [
    { icon: Code2, label: t.about.highlights.softwareEngineering },
    { icon: Cpu, label: t.about.highlights.embeddedSystems },
    { icon: Zap, label: t.about.highlights.electronics },
    { icon: Server, label: t.about.highlights.backend },
    { icon: Workflow, label: t.about.highlights.devops },
    { icon: Database, label: t.about.highlights.systemsDesign },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-4 mb-16">
              <span className="font-mono text-primary text-sm">{t.about.sectionNumber}</span>
              <h2 className="text-3xl md:text-4xl font-bold">{t.about.title}</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text content */}
            <AnimatedSection animation="fade-right" delay={100}>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.about.paragraph1.start}
                  <span className="text-foreground font-medium"> {t.about.paragraph1.highlight1}</span>
                  {t.about.paragraph1.middle}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.about.paragraph2.start}
                  <span className="text-foreground font-medium"> {t.about.paragraph2.highlight1} </span>
                  {t.about.paragraph2.middle}
                  <span className="text-foreground font-medium"> {t.about.paragraph2.highlight2} </span>
                  {t.about.paragraph2.end}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.about.paragraph3.start}
                  <span className="text-primary font-semibold"> {t.about.paragraph3.highlight}</span>
                  {t.about.paragraph3.end}
                </p>

                {/* Terminal-style quote */}
                <div className="mt-8 p-4 rounded-lg bg-secondary/50 border border-border">
                  <p className="font-mono text-sm text-muted-foreground">
                    <span className="text-primary">{t.about.terminalUser}</span>:<span className="text-accent">~</span>$ {t.about.terminalCommand}
                  </p>
                  <p className="font-mono text-sm text-foreground mt-2">
                    {t.about.terminalOutput}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Skills grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <AnimatedSection key={item.label} animation="scale" delay={150 + index * 100}>
                  <div
                    className="group p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300 cursor-default h-full min-h-[120px] flex flex-col justify-center"
                  >
                    <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
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

export default About;
