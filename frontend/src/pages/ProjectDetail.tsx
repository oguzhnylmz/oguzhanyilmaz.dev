import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import api from "../services/api";
import type { Project } from "../types/Project";

function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProject() {
      if (!slug) {
        setError("Project not found.");
        setLoading(false);
        return;
      }

      try {
        setError("");

        const response = await api.get<Project>(
          `/projects/slug/${slug}`
        );

        setProject(response.data);
      } catch (error) {
        console.error(error);
        setError("Project not found.");
      } finally {
        setLoading(false);
      }
    }

    loadProject();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-zinc-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm text-zinc-500">
            Loading project...
          </p>
        </div>
      </main>
    );
  }

  if (error || !project) {
    return (
      <main className="min-h-screen bg-zinc-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/"
            className="text-sm text-zinc-500 transition hover:text-white"
          >
            ← Back to portfolio
          </Link>

          <div className="mt-16">
            <p className="text-sm text-zinc-500">
              404
            </p>

            <h1 className="mt-2 text-3xl font-semibold">
              Project not found
            </h1>

            <p className="mt-4 max-w-lg text-zinc-500">
              The project you are looking for does not
              exist or is no longer available.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/"
          className="text-sm text-zinc-500 transition hover:text-white"
        >
          ← Back to portfolio
        </Link>

        <div className="mt-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-zinc-500">
              {project.year}
            </span>

            {project.featured && (
              <span className="rounded-full border border-emerald-900/50 px-3 py-1 text-xs text-emerald-400">
                Featured
              </span>
            )}
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            {project.description}
          </p>
        </div>

        {project.image && (
          <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
            <img
              src={project.image}
              alt={project.title}
              className="h-auto w-full object-cover"
            />
          </div>
        )}

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_280px]">
          <section>
            <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
              Technologies
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </section>

          <aside>
            <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
              Links
            </h2>

            <div className="mt-4 flex flex-col gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-zinc-800 px-4 py-3 text-sm text-zinc-300 transition hover:border-zinc-600 hover:text-white"
                >
                  GitHub ↗
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </aside>
        </div>

        <div className="mt-16 border-t border-zinc-800 pt-8">
          <Link
            to="/"
            className="text-sm text-zinc-500 transition hover:text-white"
          >
            ← Back to portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ProjectDetail;