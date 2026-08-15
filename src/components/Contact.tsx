import { Button } from "@/components/ui/button";
import { Reveal } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/i18n";
import { personalInfo } from "@/data/content";
import SectionHeading from "./SectionHeading";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-section">
      <div className="container px-6">
        <Reveal className="mx-auto max-w-3xl">
          <SectionHeading title={t.contact.title} />

          <p className="max-w-[62ch] text-lead text-muted-foreground">{t.contact.description}</p>

          {/* Eram dois cards com ícone centralizado, e o da direita renderizava
              sem rótulo porque t.contact.locationLabel não existe em idioma
              nenhum. Vira lista de definição: o rótulo é o <dt>, não uma
              chave de tradução que ninguém escreveu. */}
          <dl className="mt-10 grid gap-x-10 gap-y-6 border-t border-border pt-6 sm:grid-cols-2">
            <div>
              <dt className="font-mono text-xs text-muted-foreground">{t.contact.emailLabel}</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="link-underline text-base text-foreground transition-colors duration-fast hover:text-primary"
                >
                  {personalInfo.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs text-muted-foreground">
                {t.contact.locationLabel}
              </dt>
              <dd className="mt-1 text-base text-foreground">{t.contact.location}</dd>
            </div>
          </dl>

          <div className="mt-10">
            <Button variant="hero" size="xl" asChild>
              <a href={`mailto:${personalInfo.email}`}>{t.contact.sendMessage}</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
