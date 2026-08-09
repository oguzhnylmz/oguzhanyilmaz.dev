export interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  image?: string;
  year: string;
}