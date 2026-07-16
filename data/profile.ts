import { PersonalInfo, Statistic, FunFact } from "@/types";

/**
 * ────────────────────────────────────────────────────────────────
 *  EDIT THIS FILE TO MAKE THE PORTFOLIO YOURS.
 *  Every page reads from here — nothing personal is hardcoded
 *  inside components. Change a value once, it updates everywhere.
 * ────────────────────────────────────────────────────────────────
 */

export const personalInfo: PersonalInfo = {
  name: process.env.NEXT_PUBLIC_NAME || "Aiman Ali",
  initials: "AA",
  role: "Full-Stack Engineer",
  taglineRoles: [
    "Full-Stack Engineer",
    "React & Next.js Architect",
    "AI-Augmented Developer",
    "Frontend Mentor & Lead",
  ],
  bio: "I'm a JavaScript Engineer with 5+ years delivering high-performance, scalable web applications using React, Next.js, and TypeScript. I've led frontend architecture decisions, established code-quality standards, and mentored engineers across agency and product environments. I also combine deep JS expertise with AI-augmented development workflows — using GitHub Copilot, the Claude API, and custom prompt pipelines to accelerate delivery, cut boilerplate, and enforce best practices at scale.",
  shortBio:
    "Full-stack engineer building fast, scalable products with React, Next.js & TypeScript — and shipping faster with AI-augmented workflows.",
  avatar: "/images/pp.png",
  email: process.env.NEXT_PUBLIC_EMAIL || "aimanzahid828@gmail.com",
  phone: "+92 349 459 2455",
  location: "Lahore, Pakistan",
  resumeUrl: process.env.NEXT_PUBLIC_RESUME || "/resume.pdf",
  availability: "Freelancing at Freelancer.com — open to new full-time & contract roles",
  socials: [
    {
      label: "LinkedIn",
      url: process.env.NEXT_PUBLIC_LINKEDIN || "https://linkedin.com/in/aiman-ali",
      icon: "linkedin",
    },
    {
      label: "Portfolio",
      url: process.env.NEXT_PUBLIC_SITE_URL || "https://aimanali.dev",
      icon: "website",
    },
    { label: "Email", url: `mailto:${process.env.NEXT_PUBLIC_EMAIL || "aimanzahid828@gmail.com"}`, icon: "email" },
    { label: "WhatsApp", url: "https://wa.me/923494592455", icon: "whatsapp" },
  ],
};

// NOTE: LinkedIn and portfolio URLs above are placeholders — the source resume
// only listed "LinkedIn" / "Portfolio" as link text without the underlying URL.
// Update NEXT_PUBLIC_LINKEDIN / NEXT_PUBLIC_SITE_URL in .env.local with the real links.

export const statistics: Statistic[] = [
  { id: "experience", label: "Years of Experience", value: 5, suffix: "+" },
  { id: "projects", label: "Production Apps Shipped", value: 10, suffix: "+" },
  { id: "mentored", label: "Engineers Mentored", value: 3, suffix: "+" },
  { id: "clients", label: "Client Engagements Delivered", value: 4, suffix: "+" },
];

export const funFacts: FunFact[] = [
  { id: "1", emoji: "🤖", label: "Builds custom prompt pipelines for everyday dev workflows" },
  { id: "2", emoji: "⚡", label: "Cut boilerplate time ~30% with Copilot + Claude pair-programming" },
  { id: "3", emoji: "🧠", label: "Treats AI as a force-multiplier, never a replacement for judgment" },
  { id: "4", emoji: "📈", label: "Has driven double-digit Core Web Vitals improvements on three products" },
];

export const journey =
  "I started as a React developer at Codility Solutions, cutting my teeth on component architecture and performance — profiling with Lighthouse, chasing render-blocking resources, and learning what actually moves the needle on load times. At SSA Soft, I stepped into a lead role: owning the frontend architecture for two production SaaS products, setting code-review standards for a 5-person team, and mentoring junior engineers. Since 2024 I've been freelancing, which pushed me to own entire engagements end-to-end — architecture, delivery, and client communication — while building out AI-augmented workflows with Copilot and the Claude API that now shape how I approach every new project.";
