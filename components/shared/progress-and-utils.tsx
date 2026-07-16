"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { useScrollVisibility } from "@/hooks/use-scroll-visibility";

export function ReadingProgressBar() {
  const progress = useScrollProgress();
  return (
    <div className="fixed left-0 top-0 z-50 h-[3px] w-full bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-accent to-amber"
        style={{ width: `${progress}%` }}
        transition={{ ease: "linear" }}
      />
    </div>
  );
}

export function BackToTop() {
  const visible = useScrollVisibility(500);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="focus-ring glass fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full text-accent shadow-lg transition-colors hover:bg-surface-hover"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background">
      <div className="flex items-center gap-2 font-mono text-sm text-muted">
        <span className="text-accent">$</span>
        <span>booting portfolio</span>
        <span className="inline-block w-4 animate-blink text-accent">_</span>
      </div>
    </div>
  );
}
