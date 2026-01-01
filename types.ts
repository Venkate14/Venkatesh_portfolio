
export type SectionId = 'home' | 'about' | 'resume' | 'projects' | 'achievements' | 'contact';

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link?: string;
  githubLink?: string;
  previewLink?: string;
}

export interface Achievement {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  linkedinLink: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  current?: boolean;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
