"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Frown } from "lucide-react";
import { projects, projectCategories } from "@/data/projects";
import { PROJECTS_PER_PAGE } from "@/constants";
import { ProjectCard } from "@/components/projects/project-card";
import { cn } from "@/lib/utils";

export function ProjectsExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof projectCategories)[number]>("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = category === "All" || project.category === category;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        q === "" ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.techStack.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PROJECTS_PER_PAGE));
  const paginated = filtered.slice((page - 1) * PROJECTS_PER_PAGE, page * PROJECTS_PER_PAGE);

  function handleCategoryChange(cat: (typeof projectCategories)[number]) {
    setCategory(cat);
    setPage(1);
  }

  function handleQueryChange(value: string) {
    setQuery(value);
    setPage(1);
  }

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder="Search projects or tech…"
            aria-label="Search projects"
            className="focus-ring w-full rounded-full border border-border bg-surface py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={cn(
                "focus-ring rounded-full border px-3.5 py-1.5 text-xs transition-colors",
                category === cat
                  ? "border-accent/50 bg-accent/10 text-accent"
                  : "border-border text-muted hover:text-foreground",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {paginated.length === 0 ? (
        <div className="flex flex-col items-center rounded-2xl border border-dashed border-border py-20 text-center">
          <Frown className="h-8 w-8 text-muted" />
          <p className="mt-4 text-sm text-muted">No projects match “{query}”. Try a different search.</p>
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={`${category}-${query}-${page}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
          >
            {paginated.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      )}

      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              aria-label={`Page ${i + 1}`}
              aria-current={page === i + 1}
              className={cn(
                "focus-ring h-9 w-9 rounded-full border text-sm transition-colors",
                page === i + 1
                  ? "border-accent/50 bg-accent/10 text-accent"
                  : "border-border text-muted hover:text-foreground",
              )}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
