"use client";

import { motion } from "framer-motion";
import { Skill } from "@/types";

export function SkillBar({ skill, compact = false }: { skill: Skill; compact?: boolean }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className={compact ? "text-xs text-foreground" : "text-sm text-foreground"}>
          {skill.name}
        </span>
        <span className="font-mono text-xs text-muted">{skill.level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-hover">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-accent to-amber"
        />
      </div>
    </div>
  );
}
