"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
    >
      <Link href={`/projects/${project.slug}`} className="focus-ring">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-hover">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {project.featured && (
            <Badge variant="amber" className="absolute left-3 top-3 gap-1">
              <Star className="h-3 w-3 fill-current" /> Featured
            </Badge>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center justify-between text-xs text-muted">
          <span className="font-mono">{project.category}</span>
          <span>{formatDate(project.date)}</span>
        </div>
        <Link href={`/projects/${project.slug}`} className="focus-ring">
          <h3 className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
            {project.title}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 3).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
          {project.techStack.length > 3 && <Badge>+{project.techStack.length - 3}</Badge>}
        </div>

        <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-foreground"
              aria-label={`${project.title} source code`}
            >
              <Github className="h-3.5 w-3.5" /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-foreground"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink className="h-3.5 w-3.5" /> Live demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
