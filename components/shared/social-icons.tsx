import { Github, Linkedin, Twitter, Instagram, Mail, Globe } from "lucide-react";
import { FaWhatsapp, FaMedium, FaDev } from "react-icons/fa";
import { SocialLink } from "@/types";
import { cn } from "@/lib/utils";

const iconMap: Record<SocialLink["icon"], React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  email: Mail,
  website: Globe,
  whatsapp: FaWhatsapp,
  medium: FaMedium,
  devto: FaDev,
};

export function SocialIcons({
  socials,
  className,
  iconClassName,
}: {
  socials: SocialLink[];
  className?: string;
  iconClassName?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {socials.map((social) => {
        const Icon = iconMap[social.icon];
        return (
          <a
            key={social.label}
            href={social.url}
            target={social.icon === "email" ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={social.label}
            className={cn(
              "focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent",
              iconClassName,
            )}
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
