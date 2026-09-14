import { useEffect, useMemo, useState } from "react";

import Container from "../ui/Container";
import ProjectCard from "./ProjectCard";

import { getProjects } from "../../services/projectService";
import type { Project } from "../../types/Project";

const PROJECTS_PER_PAGE = 6;

function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [visibleCount, setVisibleCount] =
    useState(PROJECTS_PER_PAGE);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();

        setProjects(data);
      } catch (err) {
        console.error("Failed to load projects:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  /*
   * Featured project is always shown first.
   * Remaining projects follow after it.
   */
  const orderedProjects = useMemo(() => {
    const featured = projects.filter(
      (project) => project.featured
    );

    const regular = projects.filter(
      (project) => !project.featured
    );

    return [...featured, ...regular];
  }, [projects]);

  const visibleProjects = orderedProjects.slice(
    0,
    visibleCount
  );

  const hasMoreProjects =
    visibleCount < orderedProjects.length;

  function handleLoadMore() {
    setVisibleCount(
      (current) =>
        current + PROJECTS_PER_PAGE
    );
  }

  return (
    <section
      id="projects"
      className="py-24 md:py-32"
    >
      <Container>

        {/* Section Header */}
        <div className="mb-16 max-w-2xl">

          <span className="text-xs font-medium uppercase tracking-[0.35em] text-emerald-400">
            Selected Work
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Projects that
            <span className="text-zinc-500">
              {" "}
              solve problems.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            A collection of projects I've built while
            developing my skills in backend engineering,
            APIs and modern web development.
          </p>

        </div>

        {/* Loading */}
        {loading && (
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-10 text-sm text-zinc-500">
            Loading projects...
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="rounded-3xl border border-red-900/50 bg-zinc-950/80 p-10 text-sm text-red-400">
            Failed to load projects from the API.
          </div>
        )}

        {/* Projects */}
        {!loading &&
          !error &&
          visibleProjects.length > 0 && (
            <>
              {/* Featured Project */}
              {visibleProjects
                .filter((project) => project.featured)
                .map((project) => (
                  <div
                    key={project.id}
                    className="mb-10"
                  >
                    <ProjectCard
                      project={project}
                    />
                  </div>
                ))}

              {/* Regular Projects */}
              <div className="grid gap-6 md:grid-cols-2">
                {visibleProjects
                  .filter(
                    (project) => !project.featured
                  )
                  .map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                    />
                  ))}
              </div>

              {/* Load More */}
              {hasMoreProjects && (
                <div className="mt-12 flex justify-center">
                  <button
                    type="button"
                    onClick={handleLoadMore}
                    className="
                      rounded-xl
                      border border-zinc-700
                      bg-zinc-950
                      px-6 py-3
                      text-sm font-medium
                      text-zinc-200
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:border-zinc-500
                      hover:bg-zinc-900
                    "
                  >
                    View More Projects
                  </button>
                </div>
              )}
            </>
          )}

        {/* Empty State */}
        {!loading &&
          !error &&
          projects.length === 0 && (
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-10 text-sm text-zinc-500">
              No projects found.
            </div>
          )}

      </Container>
    </section>
  );
}

export default ProjectsSection;