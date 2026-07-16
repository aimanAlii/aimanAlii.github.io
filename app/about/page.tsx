import { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { personalInfo, journey, funFacts } from "@/data/profile";
import { education } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { FunFactsGrid } from "@/components/about/fun-facts-grid";
import { AboutIntro } from "@/components/about/about-intro";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: `Learn more about ${personalInfo.name} — background, journey, education, and what drives the work.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <AboutIntro />

      <div className="mt-16">
        <SectionHeading title="My journey" />
        <p className="text-base leading-relaxed text-muted">{journey}</p>
      </div>

      <div className="mt-16">
        <SectionHeading title="Education" />
        <div className="space-y-4">
          {education.map((edu) => (
            <div key={edu.id} className="flex gap-4 rounded-2xl border border-border bg-surface p-6">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display font-semibold text-foreground">
                  {edu.degree} · {edu.field}
                </h3>
                <p className="text-sm text-accent">{edu.institution}</p>
                <p className="mt-1 text-xs text-muted">
                  {edu.startDate === edu.endDate ? `Class of ${edu.endDate}` : `${edu.startDate} — ${edu.endDate}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <SectionHeading  title="A few fun facts" />
        <FunFactsGrid facts={funFacts} />
      </div>
    </div>
  );
}
