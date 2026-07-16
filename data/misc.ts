import { Testimonial, BlogPost, NavItem } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Client Reference",
    role: "Project Manager",
    company: "Freelancer.com Engagement",
    avatar: "/images/testimonials/client-1.svg",
    quote:
      "Owned the frontend architecture end-to-end and kept every milestone on schedule — exactly the kind of engineer you can hand ambiguous scope to.",
  },
  {
    id: "t-2",
    name: "Team Lead",
    role: "Engineering Manager",
    company: "SSA Soft (Pvt) Ltd",
    avatar: "/images/testimonials/client-2.svg",
    quote:
      "Set the code-review bar for the whole team and mentored three junior engineers without slowing down delivery. Regression rate dropped noticeably after.",
  },
  {
    id: "t-3",
    name: "Senior Colleague",
    role: "Tech Lead",
    company: "Codility Solutions",
    avatar: "/images/testimonials/client-3.svg",
    quote:
      "Consistently the person profiling performance before anyone asked — the ERP Pack load-time work is still the benchmark we point new hires to.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-pair-programming-isnt-cheating",
    title: "AI Pair-Programming Isn't Cheating — Here's How I Actually Use It",
    excerpt:
      "How Copilot and Claude fit into a real engineering workflow without replacing judgment, review, or ownership.",
    coverImage: "/images/blog/ai-pair-programming.png",
    date: "2025-10-02",
    readingTime: "7 min read",
    tags: ["AI Tooling", "Workflow"],
    published: true,
    content: ''
  },
  {
    slug: "prompt-engineering-for-component-scaffolding",
    title: "Prompt Engineering for Component Scaffolding",
    excerpt: "Reusable prompt templates that turn a spec into a working component in minutes, not hours.",
    coverImage: "/images/blog/prompt-engineering.webp",
    date: "2025-06-18",
    readingTime: "6 min read",
    tags: ["AI Tooling", "React"],
    published: true,
    content: ''
  },
  {
    slug: "migrating-to-the-app-router-lessons",
    title: "Migrating to the App Router: Lessons from Production",
    excerpt: "What broke, what got faster, and what I'd do differently migrating a live product off the Pages Router.",
    coverImage: "/images/blog/app-router-migration.png",
    date: "2024-04-10",
    readingTime: "8 min read",
    tags: ["Next.js", "Performance"],
    published: true,
    content: ''
  },
];

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
