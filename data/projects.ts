import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "postiz",
    title: "Postiz",
    description: "A production social-media scheduling SaaS with AI-generated post-copy suggestions.",
    longDescription:
      "Postiz is a social scheduling platform (Next.js frontend, Nest.js backend) built under tight client-led release cycles. I delivered feature development and maintenance work, integrated AI-generated copy suggestions into the post composer using the Claude API, and owned Prisma schema migrations while coordinating API contract changes with the backend team.",
    image: "/images/projects/postiz.svg",
    category: "Web App",
    techStack: ["Next.js", "Nest.js", "PostgreSQL", "Prisma", "Claude API"],
    liveUrl: "https://postiz.com",
    featured: true,
    date: "2024-09",
    role: "Frontend / Full-Stack Contributor",
    highlights: [
      "Integrated Claude API-generated copy suggestions into the post composer, cutting time-to-draft for users by an average of 40%",
      "Owned database schema migrations in Prisma and coordinated API contract changes with the backend team",
      "Shipped features and fixes under tight, client-led release cycles",
    ],
  },
  {
    slug: "simplybook",
    title: "SimplyBook",
    description: "An appointment-booking platform, migrated to the Next.js App Router for faster TTFB and better SEO.",
    longDescription:
      "SimplyBook is an appointment-booking platform built on Next.js 13. I optimized landing pages and marketing routes for Core Web Vitals and Meta SEO, and led the migration of legacy Pages Router flows to the App Router with React Server Components.",
    image: "/images/projects/simplybook.svg",
    category: "Web App",
    techStack: ["Next.js 13", "TypeScript", "React"],
    liveUrl: "https://simplybook.com",
    featured: true,
    date: "2024-03",
    role: "Frontend Engineer",
    highlights: [
      "Optimized landing pages and marketing routes for Core Web Vitals and Meta SEO, improving organic search indexing",
      "Migrated legacy Pages Router flows to the App Router with React Server Components, improving TTFB by ~15%",
    ],
  },
  {
    slug: "rep-wallet-portal",
    title: "Rep Wallet Portal",
    description: "A pharma-rep tools portal built solo from the ground up, from architecture to auth.",
    longDescription:
      "Rep Wallet Portal is a tools platform for pharmaceutical sales reps. As the sole frontend engineer on the initial build, I designed the component architecture, integrated 15+ REST endpoints, and implemented JWT authentication with role-based access control — delivering on schedule with zero post-launch critical defects.",
    image: "/images/projects/rep-wallet-portal.svg",
    category: "Web App",
    techStack: ["React", "TypeScript", "SASS", "Ant Design", "REST APIs"],
    liveUrl: "https://repwallet.impiricus.com",
    featured: true,
    date: "2023-08",
    role: "Sole Frontend Engineer",
    highlights: [
      "Designed the component architecture from scratch and integrated 15+ REST endpoints",
      "Implemented JWT authentication with role-based access control",
      "Delivered the project on schedule across a 5-month engagement with zero post-launch critical defects",
    ],
  },
];

export const projectCategories = [
  "All",
  "Web App",
  "Mobile App",
  "Open Source",
  "API / Backend",
  "Design",
] as const;
