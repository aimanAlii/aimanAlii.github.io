"use client";

import { motion } from "framer-motion";
import { ExperienceItem } from "@/types";
import { Badge } from "@/components/ui/badge";
import { formatDateRange } from "@/lib/utils";

export function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="relative">
      <div className="absolute left-5 top-2 h-[calc(100%-1rem)] w-px bg-border sm:left-6" />
      <div className="space-y-10">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="relative pl-14 sm:pl-16"
          >
            <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface sm:h-12 sm:w-12">
              <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            </span>

            <div className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/30">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{item.role}</h3>
                  <p className="text-sm text-accent">
                    {item.company} · {item.location}
                  </p>
                </div>
                <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
                  {formatDateRange(item.startDate, item.endDate)}
                </span>
              </div>

              <ul className="mt-4 space-y-2">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                    {achievement}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
