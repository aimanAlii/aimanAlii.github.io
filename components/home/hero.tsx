"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { personalInfo } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { SocialIcons } from "@/components/shared/social-icons";

function useTypewriter(words: string[], speed = 70, pause = 1800) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) setTimeout(() => setDeleting(true), pause);
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setWordIndex((i) => i + 1);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(personalInfo.taglineRoles);

  return (
    <section className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 pb-24 pt-12 lg:flex-row lg:pb-32 lg:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 text-center lg:text-left"
      >
        <span className="prompt-label inline-flex items-center rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted">
          {personalInfo.availability}
        </span>

        <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Hi, I&apos;m {personalInfo.name.split(" ")[0]}.
          <br />
          I build <span className="text-gradient">{typed}</span>
          <span className="text-accent">|</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted lg:mx-0">
          {personalInfo.shortBio}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
          <Button asChild size="lg">
            <Link href="/projects">
              View my work <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href={personalInfo.resumeUrl} download>
              <Download className="h-4 w-4" /> Resume
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href={`mailto:${personalInfo.email}`}>
              <Mail className="h-4 w-4" /> Say hello
            </a>
          </Button>
        </div>

        <SocialIcons
          socials={personalInfo.socials}
          className="mt-8 justify-center lg:justify-start"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex-shrink-0"
      >
        <div className="relative h-56 w-56 sm:h-72 sm:w-72">
          <div className="absolute inset-0 animate-float rounded-[2rem] bg-gradient-to-br from-accent/25 to-amber/20 blur-xl" />
          <div className="glass relative h-full w-full overflow-hidden rounded-[2rem] p-2">
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.name}
              fill
              sizes="288px"
              className="rounded-[1.5rem] object-cover"
              priority
            />
          </div>
          <motion.div
            className="glass absolute -bottom-4 -left-6 rounded-xl px-4 py-2 font-mono text-xs text-accent shadow-lg"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            status: online
          </motion.div>
          <motion.div
            className="glass absolute -right-4 top-4 rounded-xl px-3 py-2 font-mono text-xs text-amber shadow-lg"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            {personalInfo.role}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
