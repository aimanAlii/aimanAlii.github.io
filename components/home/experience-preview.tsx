import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { Timeline } from "@/components/shared/timeline";
import { Button } from "@/components/ui/button";

export function ExperiencePreview() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading
        title="Recent experience"
        description="The short version — the full history lives on the experience page."
      />
      <Timeline items={experience.slice(0, 2)} />
      <div className="mt-8 text-center">
        <Button asChild variant="outline" size="sm">
          <Link href="/experience">
            Full timeline <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
