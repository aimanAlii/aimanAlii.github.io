"use client";

import { motion } from "framer-motion";
import { FunFact } from "@/types";

export function FunFactsGrid({ facts }: { facts: FunFact[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {facts.map((fact, i) => (
        <motion.div
          key={fact.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-5"
        >
          <span className="text-2xl">{fact.emoji}</span>
          <p className="text-sm text-muted">{fact.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
