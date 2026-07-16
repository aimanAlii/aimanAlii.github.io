import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillBar } from "@/components/shared/skill-bar";

export const metadata: Metadata = buildMetadata({
  title: "Skills",
  description: "A categorized breakdown of frontend, backend, database, cloud, DevOps, and testing skills.",
  path: "/skills",
});

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        title="Skills & tools"
        description="Self-rated proficiency across 8 categories — not a certification, just an honest snapshot."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <div key={category.id} className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="font-display text-lg font-semibold text-foreground">{category.title}</h2>
            <p className="mt-1 text-xs text-muted">{category.description}</p>
            <div className="mt-5 space-y-4">
              {category.skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
