import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiGraphql,
  SiRedis,
  SiFramer,
  SiGit,
} from "react-icons/si";
import { Cloud } from "lucide-react";

const stack = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "AWS", icon: Cloud },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Redis", icon: SiRedis },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Git", icon: SiGit },
];

export function TechMarquee() {
  const doubled = [...stack, ...stack];

  return (
    <section className="border-y border-border bg-surface/40 py-10">
      <div className="relative mx-auto max-w-6xl overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee gap-12">
          {doubled.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="flex items-center gap-2.5 text-muted transition-colors hover:text-foreground"
            >
              <item.icon className="h-6 w-6" />
              <span className="whitespace-nowrap text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
