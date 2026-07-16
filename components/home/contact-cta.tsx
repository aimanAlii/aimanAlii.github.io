"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass relative overflow-hidden rounded-3xl p-10 text-center sm:p-16"
      >
        <div className="absolute inset-0 bg-glow-radial" aria-hidden />
        <p className="prompt-label relative font-mono text-xs uppercase tracking-widest text-muted">
          open --new-project
        </p>
        <h2 className="relative mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Got something worth building? <span className="text-gradient">Let&apos;s talk.</span>
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-muted">
          Whether it&apos;s a full product, a gnarly bug, or just an idea you want sanity-checked —
          I usually reply within a day.
        </p>
        <div className="relative mt-8 flex justify-center">
          <Button asChild size="lg">
            <Link href="/contact">
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
