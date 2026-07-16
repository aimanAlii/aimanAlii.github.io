import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    description: "The fundamentals everything else is built on",
    skills: [
      { name: "JavaScript (ES6+)", level: 96 },
      { name: "TypeScript", level: 92 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    description: "Where most of the day-to-day work happens",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js (App & Pages Router)", level: 93 },
      { name: "Vue.js", level: 68 },
      { name: "Express.js", level: 65 },
    ],
  },
  {
    id: "styling",
    title: "Styling",
    description: "Turning designs into pixel-accurate, responsive UI",
    skills: [
      { name: "Tailwind CSS", level: 92 },
      { name: "SASS / SCSS", level: 88 },
      { name: "Ant Design", level: 82 },
      { name: "CSS Modules", level: 85 },
    ],
  },
  {
    id: "state-and-data",
    title: "State & Data",
    description: "Managing app state and talking to APIs",
    skills: [
      { name: "Redux / Redux Toolkit", level: 90 },
      { name: "React Query", level: 82 },
      { name: "REST APIs", level: 90 },
      { name: "Prisma", level: 75 },
    ],
  },
  {
    id: "ai-tooling",
    title: "AI Tooling",
    description: "Using AI as a force-multiplier, not a shortcut",
    skills: [
      { name: "GitHub Copilot", level: 92 },
      { name: "Claude API", level: 85 },
      { name: "Prompt Engineering", level: 88 },
      { name: "AI-Assisted Code Review", level: 85 },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    description: "Version control and shipping to production",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "GitLab / Bitbucket", level: 85 },
      { name: "CI/CD Pipelines", level: 82 },
    ],
  },
  {
    id: "quality",
    title: "Quality",
    description: "Keeping releases fast and regression-free",
    skills: [
      { name: "Code Reviews", level: 90 },
      { name: "Unit Testing", level: 78 },
      { name: "Lighthouse / Core Web Vitals", level: 88 },
      { name: "Agile / Scrum", level: 85 },
    ],
  },
  {
    id: "soft-skills",
    title: "Soft Skills",
    description: "The part of the job that isn't code",
    skills: [
      { name: "Technical Leadership", level: 88 },
      { name: "Mentorship", level: 90 },
      { name: "Client Communication", level: 88 },
      { name: "Sprint Planning", level: 85 },
    ],
  },
];
