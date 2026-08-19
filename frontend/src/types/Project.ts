export interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  github: string | null;
  demo: string | null;
  featured: boolean;
  image: string | null;
  year: string;
  status: string;
}