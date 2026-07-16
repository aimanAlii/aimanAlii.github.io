import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { Timeline } from "@/components/shared/timeline";

export const metadata: Metadata = buildMetadata({
  title: "Experience",
  description: "A timeline of roles, companies, and what I shipped at each of them.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading
        title="Work experience"
        description="Every role, roughly in reverse-chronological order — the commit history of a career."
      />
      <Timeline items={experience} />
    </div>
  );
}
