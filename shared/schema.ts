import { z } from "zod";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  gradient: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface TechCategory {
  category: string;
  technologies: string[];
}

export const projectSchema = z.object({
  id: z.string(),
  name: z.string(),
  tagline: z.string(),
  description: z.string(),
  techStack: z.array(z.string()),
  githubUrl: z.string().url(),
  gradient: z.string(),
});

export const experienceSchema = z.object({
  id: z.string(),
  title: z.string(),
  organization: z.string(),
  period: z.string(),
  description: z.string(),
});

export type ProjectType = z.infer<typeof projectSchema>;
export type ExperienceType = z.infer<typeof experienceSchema>;
