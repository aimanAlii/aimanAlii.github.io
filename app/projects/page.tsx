import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectsExplorer } from "@/components/projects/projects-explorer";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description: "A collection of web apps, mobile apps, APIs, and open-source tools I've built.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        title="Projects"
        description="Filter by category, search by name or tech, or just browse everything below."
      />
      <ProjectsExplorer />
    </div>
  );
}
