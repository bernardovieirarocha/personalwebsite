import { Reveal } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/i18n";
import { skills } from "@/data/content";
import SectionHeading from "./SectionHeading";

const Skills = () => {
  const { t } = useTranslation();

  const categories = [
    { title: t.skills.categories.languages, items: skills.languages },
    { title: t.skills.categories.backend, items: skills.backend },
    { title: t.skills.categories.embedded, items: skills.embedded },
    { title: t.skills.categories.devops, items: skills.devops },
    { title: t.skills.categories.frontend, items: skills.frontend },
  ];

  return (
    // py-section-tight: Skills continua o bloco de Experiência (as duas são
    // credencial), então não reabre o espaçamento cheio. É o ritmo que o
    // py-32 uniforme não tinha.
    <section id="skills" className="pb-section pt-section-tight">
      <div className="container px-6">
        <Reveal className="mx-auto max-w-5xl">
          <SectionHeading title={t.skills.title} />

          {/* Eram cinco caixas com borda, e a quinta ficava órfã numa grade
              de duas colunas. Sem caixa não há órfã: cada categoria é uma
              linha de definição, rótulo à esquerda, tecnologias à direita. */}
          <dl className="divide-y divide-border border-y border-border">
            {categories.map((category) => (
              <div
                key={category.title}
                className="grid gap-2 py-5 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-8"
              >
                <dt className="font-mono text-xs font-medium text-foreground sm:pt-1">{category.title}</dt>
                <dd className="flex flex-wrap gap-x-5 gap-y-2">
                  {category.items.map((item) => (
                    <span key={item} className="text-sm text-foreground">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
