import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "@/i18n";
import { personalInfo, socialLinks } from "@/data/content";

const Footer = () => {
  const { t } = useTranslation();

  const links = [
    { href: socialLinks.github, label: t.contact.githubLabel, Icon: Github },
    { href: socialLinks.linkedin, label: t.contact.linkedinLabel, Icon: Linkedin },
    { href: `mailto:${personalInfo.email}`, label: t.contact.emailLabel, Icon: Mail },
  ];

  return (
    <footer className="border-t border-border py-10">
      <div className="container px-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="font-mono text-xs text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} {personalInfo.name}
            </p>
            <p className="mt-1">{t.footer.builtWith}</p>
          </div>

          <div className="flex items-center gap-1">
            {links.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-md text-muted-foreground transition-colors duration-fast hover:text-primary"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
