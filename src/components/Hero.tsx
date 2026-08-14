import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "@/i18n";
import { personalInfo, socialLinks } from "@/data/content";
import CircuitTraces from "./CircuitTraces";

const Hero = () => {
  const { t } = useTranslation();

  return (
    // pt-32: o header é fixo com 5rem de altura; sem isso o avatar encosta
    // no logo no mobile, onde a coluna é estreita e o hero começa mais alto.
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pb-16 pt-32">
      {/* Único efeito de fundo da página. Ver CircuitTraces.tsx. */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <CircuitTraces />
      </div>

      <div className="container relative z-10 px-6">
        {/* Duas colunas no desktop. Antes o avatar era pequeno e ficava colado
            no nome, à esquerda, deixando metade da dobra vazia. Agora ele
            ancora a coluna da direita e o texto ocupa a esquerda inteira —
            o vazio some sem precisar inventar conteúdo para preenchê-lo. */}
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          <div>
            {/* Alinhado à esquerda: o texto centralizado anterior obrigava a
                vista a voltar ao meio a cada linha e achatava a hierarquia. */}
            <h1 className="text-display font-bold">
              <span className="block text-foreground">{personalInfo.name.split(" ")[0]}</span>
              <span className="block text-primary">{personalInfo.name.split(" ")[1]}</span>
            </h1>

            <p className="mt-6 font-mono text-sm text-muted-foreground">{t.hero.role}</p>

            <p className="mt-4 max-w-[54ch] text-lead text-foreground/90">{t.hero.summary}</p>

            <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Button variant="hero" size="xl" asChild>
                <a href="#projects">{t.hero.viewProjects}</a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#contact">{t.hero.contactMe}</a>
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-2">
              {[
                { href: socialLinks.github, label: t.contact.githubLabel, Icon: Github },
                { href: socialLinks.linkedin, label: t.contact.linkedinLabel, Icon: Linkedin },
                { href: `mailto:${personalInfo.email}`, label: t.contact.emailLabel, Icon: Mail },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-md border border-border text-muted-foreground transition-colors duration-fast hover:border-border-strong hover:text-primary"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <img
            src={personalInfo.avatarUrl}
            alt={`Foto de ${personalInfo.name}`}
            width={400}
            height={400}
            decoding="async"
            // Candidato a LCP: nunca lazy, e prioridade alta na fila de rede.
            // Em minúsculo e via spread porque o React 18 desta versão ainda
            // não conhece a prop camelCase e a descarta com aviso.
            {...{ fetchpriority: "high" }}
            className="order-first h-28 w-28 rounded-full border border-border-strong object-cover sm:h-36 sm:w-36 lg:order-none lg:h-[clamp(10rem,16vw,12.5rem)] lg:w-[clamp(10rem,16vw,12.5rem)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
