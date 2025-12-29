import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "@/i18n";
import { personalInfo, socialLinks } from "@/data/content";
import CircuitAnimation from "./CircuitAnimation";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Circuit Animation Background */}
      <div className="absolute inset-0 z-0">
        <CircuitAnimation />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 grid-background opacity-40" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style greeting */}
          <div className="hidden md:inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border bg-secondary/50 backdrop-blur-sm opacity-0 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            <span className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">$</span> {t.hero.greeting}
            </span>
          </div>

          {/* Avatar + Name Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-6 opacity-0 animate-fade-up stagger-1">
            {/* Large Circular Avatar */}
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 animate-glow-pulse" />
              <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-2 border-primary/50 group-hover:border-primary transition-all duration-300">
                <img
                  src="https://avatars.githubusercontent.com/bernardovieirarocha"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Status indicator */}
              <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-background animate-pulse" />
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-left">
              <span className="text-foreground">{personalInfo.name.split(' ')[0]}</span>
              <br />
              <span className="text-gradient">{personalInfo.name.split(' ')[1]}</span>
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 opacity-0 animate-fade-up stagger-2">
            {t.hero.role}
          </p>

          {/* Innovative statement */}
          <p className="font-mono text-lg md:text-xl text-primary mb-12 opacity-0 animate-fade-up stagger-3">
            {t.hero.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-fade-up stagger-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">{t.hero.viewProjects}</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">{t.hero.contactMe}</a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6 opacity-0 animate-fade-up stagger-5">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-secondary/50 hover:bg-secondary hover:border-primary transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-secondary/50 hover:bg-secondary hover:border-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full border border-border bg-secondary/50 hover:bg-secondary hover:border-primary transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
