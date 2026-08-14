import { Reveal } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/i18n";
import SectionHeading from "./SectionHeading";

const About = () => {
  const { t } = useTranslation();

  const highlights = [
    t.about.highlights.softwareEngineering,
    t.about.highlights.embeddedSystems,
    t.about.highlights.electronics,
    t.about.highlights.backend,
    t.about.highlights.devops,
    t.about.highlights.systemsDesign,
  ];

  const paragraphs = [t.about.paragraphs.p1, t.about.paragraphs.p2, t.about.paragraphs.p3];

  return (
    <section id="about" className="py-section">
      <div className="container px-6">
        <Reveal className="mx-auto max-w-5xl">
          <SectionHeading title={t.about.title} />

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
            {/* max-w-[68ch]: linha de leitura confortável. Antes o parágrafo
                esticava até a metade de uma tela de 1440. */}
            <div className="max-w-[68ch] space-y-5">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-lead text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Eram seis cards com ícone — a grade de cards idênticos que faz
                qualquer página parecer template. São seis rótulos; agora são
                seis rótulos, numa lista. */}
            <ul className="flex flex-wrap gap-x-6 gap-y-3 lg:max-w-[14rem] lg:flex-col lg:gap-y-4">
              {highlights.map((label) => (
                <li key={label} className="flex items-baseline gap-3 text-sm text-foreground">
                  <span aria-hidden="true" className="h-px w-4 shrink-0 translate-y-[-0.3em] bg-border-strong" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
