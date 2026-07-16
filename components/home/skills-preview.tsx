import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillBar } from "@/components/shared/skill-bar";
import { Button } from "@/components/ui/button";

export function SkillsPreview() {
  const preview = skillCategories.slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        title="What I work with"
        description="A snapshot of the stack — see the full breakdown across 8 categories on the skills page."
      />
      <div className="grid gap-8 sm:grid-cols-3">
        {preview.map((category) => (
          <div key={category.id} className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">{category.title}</h3>
            <p className="mt-1 text-xs text-muted">{category.description}</p>
            <div className="mt-5 space-y-4">
              {category.skills.slice(0, 3).map((skill) => (
                <SkillBar key={skill.name} skill={skill} compact />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button asChild variant="outline" size="sm">
          <Link href="/skills">
            See all skills <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
