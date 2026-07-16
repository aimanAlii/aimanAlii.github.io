import { ExperienceItem, EducationItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Freelancer.com",
    role: "Lead Frontend Engineer (Freelance)",
    logo: "/images/companies/freelancer.svg",
    location: "Lahore, Pakistan",
    startDate: "2024-08",
    endDate: "Present",
    achievements: [
      "Architected and delivered end-to-end frontend solutions for 4+ client projects, owning component design patterns, data-flow decisions, and deployment pipelines",
      "Introduced AI-assisted scaffolding workflows (Copilot + Claude prompts) to client projects, reducing initial component build time by ~30%",
      "Collaborated with clients and PMs on sprint planning, story decomposition, and milestone tracking — maintaining on-time delivery across engagements",
      "Defined reusable design-system components for two SaaS clients, cutting cross-team inconsistencies and reducing future UI work by an estimated 20%",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GitHub Copilot", "Claude API"],
  },
  {
    id: "exp-2",
    company: "SSA Soft (Pvt) Ltd",
    role: "Software Developer — Frontend",
    logo: "/images/companies/ssasoft.svg",
    location: "Lahore, Pakistan",
    startDate: "2023-05",
    endDate: "2024-05",
    achievements: [
      "Led full frontend architecture and implementation of Rep Wallet Portal and Impiricus Pulse Runner — two production SaaS products serving pharma sales reps",
      "Established component architecture standards and code-review guidelines adopted across a 5-person frontend team, reducing bug-regression rate by ~35%",
      "Mentored 3 junior engineers: ran weekly code-review sessions, introduced TypeScript strict mode, and created onboarding documentation that reduced ramp time by 2 weeks",
      "Integrated AI-specialist campaign recommendations into Pulse Runner's message customization flow, measurably increasing campaign engagement rates",
      "Managed versioning and staging deployments via GitLab CI/CD; enforced branch protection and PR-review policy across all major releases",
    ],
    technologies: ["React", "TypeScript", "SASS", "Ant Design", "GitLab CI/CD"],
  },
  {
    id: "exp-3",
    company: "Codility Solutions",
    role: "Frontend Developer — React",
    logo: "/images/companies/codility.svg",
    location: "Lahore, Pakistan",
    startDate: "2021-04",
    endDate: "2023-03",
    achievements: [
      "Built advanced React component libraries with complex Redux state management; reusable component patterns reduced cross-project development time by 20%",
      "Drove a 30% improvement in page load time for the ERP Pack project by profiling with Lighthouse, eliminating render-blocking resources, and optimizing bundle splitting",
      "Reduced TTFB by 10% on abokiFX through Core Web Vitals monitoring and server-response optimization with the backend team",
      "Participated in code reviews and CI/CD pipeline maintenance; introduced pre-commit lint checks that cut style violations to near zero",
    ],
    technologies: ["React", "Redux", "JavaScript (ES6+)", "CI/CD"],
  },
];

export const education: EducationItem[] = [
  {
    id: "edu-1",
    institution: "University of the Punjab, Lahore",
    degree: "BS",
    field: "Information Technology",
    startDate: "2016",
    endDate: "2020"
  },
];
