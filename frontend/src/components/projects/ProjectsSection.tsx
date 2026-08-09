import Container from "../ui/Container";
import ProjectCard from "./ProjectCard";
import type { Project } from "../../types/Project";

function ProjectsSection() {
  const projects: Project[] = [
    {
      id: 1,
      title: "DevFolio API",
      description:
        "A backend-driven portfolio system built with FastAPI, PostgreSQL and React.",
      stack: ["Python", "FastAPI", "PostgreSQL", "React"],
      github: "https://github.com/",
      demo: "#",
      featured: true,
      year: "2026",
    },
    {
      id: 2,
      title: "API Service",
      description:
        "A clean REST API focused on structured architecture and maintainable backend code.",
      stack: ["Python", "FastAPI", "REST API"],
      github: "https://github.com/",
      demo: "#",
      featured: false,
      year: "2025",
    },
    {
      id: 3,
      title: "Developer Dashboard",
      description:
        "A modern dashboard interface designed to visualize application data and system activity.",
      stack: ["React", "TypeScript", "Tailwind"],
      github: "https://github.com/",
      demo: "#",
      featured: false,
      year: "2025",
    },
  ];

  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-32"
    >
      <Container>

        {/* Section Header */}

        <div className="mb-16 max-w-2xl">

          <span
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.35em]
              text-emerald-400
            "
          >
            Selected Work
          </span>

          <h2
            className="
              mt-4
              text-4xl
              font-bold
              tracking-tight
              text-white
              md:text-5xl
            "
          >
            Projects that{" "}
            <span className="text-zinc-500">
              solve problems.
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-zinc-400
            "
          >
            A collection of projects I've built while developing
            my skills in backend engineering, APIs and modern web
            development.
          </p>

        </div>

        {/* Featured Project */}

        {featuredProject && (
          <div className="mb-8">
            <ProjectCard project={featuredProject} />
          </div>
        )}

        {/* Other Projects */}

        <div className="grid gap-8 md:grid-cols-2">

          {otherProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}

export default ProjectsSection;