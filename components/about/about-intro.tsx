"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/profile";
import { SocialIcons } from "@/components/shared/social-icons";

export function AboutIntro() {
  return (
    <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:text-left">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-2xl border border-border"
      >
        <Image src={personalInfo.avatar} alt={personalInfo.name} fill sizes="128px" className="object-cover" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p className="prompt-label font-mono text-xs uppercase tracking-widest text-muted">who am i</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
          {personalInfo.name}
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">{personalInfo.bio}</p>
        <SocialIcons socials={personalInfo.socials} className="mt-5 justify-center sm:justify-start" />
      </motion.div>
    </div>
  );
}
