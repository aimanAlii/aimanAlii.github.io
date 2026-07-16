import { Hero } from "@/components/home/hero";
import { TechMarquee } from "@/components/home/tech-marquee";
import { Stats } from "@/components/home/stats";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { SkillsPreview } from "@/components/home/skills-preview";
import { ExperiencePreview } from "@/components/home/experience-preview";
import { Testimonials } from "@/components/home/testimonials";
import { ContactCta } from "@/components/home/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Stats />
      <FeaturedProjects />
      <SkillsPreview />
      <ExperiencePreview />
      <Testimonials />
      <ContactCta />
    </>
  );
}
