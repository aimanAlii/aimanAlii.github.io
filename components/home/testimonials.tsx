"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/misc";
import { SectionHeading } from "@/components/ui/section-heading";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        title="What people say about working with me"
        align="center"
      />
      <div className="grid gap-6 sm:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col rounded-2xl border border-border bg-surface p-6"
          >
            <Quote className="h-6 w-6 text-accent/50" />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-surface-hover">
                <Image src={t.avatar} alt={t.name} fill sizes="40px" className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-muted">
                  {t.role} · {t.company}
                </p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
