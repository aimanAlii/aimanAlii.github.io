"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div className="absolute inset-0 bg-glow-radial" />
      <motion.div
        className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 top-2/3 h-80 w-80 rounded-full bg-amber/10 blur-3xl"
        animate={{ y: [0, -25, 0], x: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
