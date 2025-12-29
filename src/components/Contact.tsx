import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/i18n";
import { personalInfo } from "@/data/content";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-32 relative">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <AnimatedSection animation="fade-up">
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="font-mono text-primary text-sm">{t.contact.sectionNumber}</span>
              <h2 className="text-3xl md:text-4xl font-bold">{t.contact.title}</h2>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
              {t.contact.description}
            </p>
          </AnimatedSection>

          {/* Contact options */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-all duration-300">
                <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="font-mono text-sm text-muted-foreground mb-2">{t.contact.emailLabel}</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-foreground hover:text-primary transition-colors link-underline"
                >
                  {personalInfo.email}
                </a>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-left" delay={200}>
              <div className="p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-all duration-300">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="font-mono text-sm text-muted-foreground mb-2">{t.contact.locationLabel}</p>
                <p className="text-foreground">{t.contact.location}</p>
              </div>
            </AnimatedSection>
          </div>

          {/* CTA Button */}
          <AnimatedSection animation="scale" delay={300}>
            <Button variant="hero" size="xl" asChild>
              <a href={`mailto:${personalInfo.email}`} className="gap-3">
                <Send className="w-5 h-5" />
                {t.contact.sendMessage}
              </a>
            </Button>
          </AnimatedSection>

          {/* Terminal signature */}
          <AnimatedSection animation="fade" delay={400}>
            <div className="mt-16 p-4 rounded-lg bg-secondary/30 border border-border inline-block">
              <p className="font-mono text-sm text-muted-foreground">
                <span className="text-primary">$</span> {t.contact.thankYou}
                <span className="text-primary animate-pulse">▌</span>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
