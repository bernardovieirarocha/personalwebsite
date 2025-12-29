import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "@/i18n";
import { personalInfo, socialLinks } from "@/data/content";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main row - Logo, Social, Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <a href="#">
              <img
                src="/bernardologo.png"
                alt="BR Logo"
                className="h-10 w-10 rounded-full hover:scale-110 transition-transform duration-300"
              />
            </a>



            {/* Copyright */}
            <p className="font-mono text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} {personalInfo.name}
            </p>
          </div>

          {/* Built with - centered below with icons */}
          <div className="flex flex-col items-center mt-8 gap-4">
            <div className="flex items-center gap-6">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="font-mono text-xs text-muted-foreground text-center">
              {t.footer.designedWith}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
