export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "twitter" | "instagram" | "whatsapp" | "email" | "website" | "medium" | "devto";
}

export interface PersonalInfo {
  name: string;
  initials: string;
  role: string;
  taglineRoles: string[];
  bio: string;
  shortBio: string;
  avatar: string;
  email: string;
  phone: string;
  location: string;
  resumeUrl: string;
  availability: string;
  socials: SocialLink[];
}

export interface Statistic {
  id: string;
  label: string;
  value: number;
  suffix?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery?: string[];
  category: "Web App" | "Mobile App" | "Open Source" | "API / Backend" | "Design";
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  date: string;
  role: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 - 100
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  logo: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  image: string;
  date: string;
  credentialUrl?: string;
  skills: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
}

export interface FunFact {
  id: string;
  emoji: string;
  label: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readingTime: string;
  tags: string[];
  published: boolean;
  content: string;
}

export interface NavItem {
  label: string;
  href: string;
}
