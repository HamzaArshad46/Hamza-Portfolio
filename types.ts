import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  learning: string;
  imageUrl: string;
  repoUrl: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: 'Proficient' | 'Intermediate' | 'Learning' }[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  tags: string[];
  link: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  details: string[];
  type: 'Formal' | 'Self-Directed' | 'Current';
}

export interface ExperienceItem {
  role: string;
  period: string;
  description: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
}
