import { Reveal } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/i18n";
import SectionHeading from "./SectionHeading";

/**
 * O Sobre não resume a linha do tempo — Experiência e Projetos já a contam,
 * com data. Dois dos três parágrafos antigos eram a versão longa da frase do
 * Hero logo acima, e a coluna de seis rótulos ("Engenharia de Software",
 * "Backend", "Infraestrutura"...) era a seção Skills escrita como substantivo
 * abstrato. A seção inteira era redundante; agora ela carrega uma posição
 * técnica e o artefato que a prova.
 */
const About = () => {
  const { t } = useTranslation();

  // O terceiro parágrafo é a linha pessoal e nasce vazio: entra sozinho no
  // layout quando ganhar texto, sem exigir mudança aqui.
  const [lead, ...rest] = [
    t.about.paragraphs.p1,
    t.about.paragraphs.p2,
    t.about.paragraphs.p3,
  ].filter(Boolean);

  return (
    <section id="about" className="py-section">
      <div className="container px-6">
        <Reveal className="mx-auto max-w-3xl">
          <SectionHeading title={t.about.title} />

          {/* max-w-[68ch]: linha de leitura confortável. */}
          <div className="max-w-[68ch] space-y-5">
            {/* A primeira frase é a tese da seção, então é a única em
                text-lead e em foreground. O resto é o argumento. */}
            {lead && <p className="text-lead text-foreground">{lead}</p>}
            {rest.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-base text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
