import { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { personalInfo } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/contact/contact-form";
import { SocialIcons } from "@/components/shared/social-icons";
import { MapPlaceholder } from "@/components/contact/map-placeholder";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: `Get in touch with ${personalInfo.name} for freelance work, full-time roles, or just to say hi.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        title="Let's get in touch"
        description="Have a project, a role, or just a question? Fill out the form or reach out directly — either works."
      />
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>

        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
              Direct contact
            </h2>
            <div className="mt-4 space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="focus-ring flex items-center gap-3 text-sm text-muted transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-accent" /> {personalInfo.email}
              </a>
              {/* <a
                href={`tel:${personalInfo.phone.replace(/[^+\d]/g, "")}`}
                className="focus-ring flex items-center gap-3 text-sm text-muted transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4 text-accent" /> {personalInfo.phone}
              </a> */}
              <p className="flex items-center gap-3 text-sm text-muted">
                <MapPin className="h-4 w-4 text-accent" /> {personalInfo.location}
              </p>
            </div>
            <div className="mt-5 border-t border-border pt-5">
              <SocialIcons socials={personalInfo.socials} className="flex-wrap" />
            </div>
          </div>

          <MapPlaceholder />
        </div>
      </div>
    </div>
  );
}
