import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Github, ExternalLink, CalendarDays, User } from "lucide-react";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { ProjectCard } from "@/components/projects/project-card";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return buildMetadata({ title: "Project not found", description: "", noIndex: true });

  return buildMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
    image: project.image,
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== slug && p.category === project.category).slice(0, 2);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/projects"
        className="focus-ring inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to projects
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Badge variant="accent">{project.category}</Badge>
        {project.featured && <Badge variant="amber">Featured</Badge>}
      </div>

      <h1 className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl">
        {project.title}
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{project.description}</p>

      <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted">
        <span className="flex items-center gap-1.5">
          <CalendarDays className="h-4 w-4" /> {formatDate(project.date)}
        </span>
        <span className="flex items-center gap-1.5">
          <User className="h-4 w-4" /> {project.role}
        </span>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.githubUrl && (
          <Button asChild variant="secondary" size="sm">
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" /> View code
            </a>
          </Button>
        )}
        {project.liveUrl && (
          <Button asChild size="sm">
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              <ExternalLink className="h-4 w-4" /> Live demo
            </a>
          </Button>
        )}
      </div>

      <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-2xl border border-border bg-surface">
        <Image src={project.image} alt={project.title} fill sizes="800px" className="object-cover" priority />
      </div>

      <div className="mt-10 grid gap-10 sm:grid-cols-3">
        <div className="sm:col-span-2">
          <h2 className="font-display text-xl font-semibold text-foreground">Overview</h2>
          <p className="mt-3 leading-relaxed text-muted">{project.longDescription}</p>

          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">Highlights</h2>
          <ul className="mt-3 space-y-2">
            {project.highlights.map((point) => (
              <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
            Tech stack
          </h2>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="font-display text-xl font-semibold text-foreground">More {project.category} projects</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {related.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
