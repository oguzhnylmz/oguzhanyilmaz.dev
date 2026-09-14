import { useNavigate } from "react-router-dom";
import type { Project } from "../../types/Project";
import ProjectPreview from "./ProjectPreview";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();
  const isFeatured = project.featured;

  function handleCardClick() {
    navigate(`/projects/${project.slug}`);
  }

  function handleCardKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleCardClick();
    }
  }

  return (
    <article
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      role="link"
      tabIndex={0}
      className={`
        group cursor-pointer overflow-hidden rounded-3xl border border-zinc-800
        bg-zinc-950/80 transition-all duration-300
        hover:border-zinc-700 hover:bg-zinc-900/70
        focus:outline-none focus:ring-2 focus:ring-emerald-400/50
        ${isFeatured ? "min-h-[360px]" : "min-h-[330px]"}
      `}
    >
      <div
        className={`
          grid h-full
          ${
            isFeatured
              ? "lg:grid-cols-[1.05fr_0.95fr]"
              : "lg:grid-cols-[1fr_190px]"
          }
        `}
      >
        {/* Content */}
        <div className="flex flex-col p-8 md:p-10">
          {/* Top */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-emerald-400">
              {isFeatured ? "Featured Project" : "Project"}
            </span>

            <span className="text-xs text-zinc-600">
              {project.year}
            </span>
          </div>

          {/* Title */}
          <div className="mt-8">
            <div className="flex items-start justify-between gap-4">
              <h3
                className={`
                  font-semibold tracking-tight text-white
                  ${isFeatured ? "text-3xl md:text-4xl" : "text-2xl"}
                `}
              >
                {project.title}
              </h3>

              <span className="mt-1 text-zinc-600 transition-colors duration-300 group-hover:text-emerald-400">
                ↗
              </span>
            </div>

            {/* Description */}
            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">
              {project.description.length > 200 ? (
                <>
                  {project.description.slice(0, 200).trimEnd()}...
                  <span className="ml-1 text-emerald-400 transition-colors group-hover:text-emerald-300">
                    Read more →
                  </span>
                </>
              ) : (
                project.description
              )}
            </p>
          </div>

          {/* Technologies */}
          <div className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full border border-zinc-800
                  px-3 py-1.5 text-[11px] text-zinc-400
                  transition-colors duration-300
                  group-hover:border-zinc-700
                "
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-auto flex items-center gap-3 pt-8">
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="
                  rounded-xl bg-emerald-400 px-5 py-2.5
                  text-xs font-semibold text-zinc-950
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-emerald-300
                "
              >
                View Project
              </a>
            ) : (
              <span
                className="
                  rounded-xl bg-zinc-800 px-5 py-2.5
                  text-xs font-semibold text-zinc-500
                "
              >
                No Demo
              </span>
            )}

            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="
                  rounded-xl border border-zinc-700
                  px-5 py-2.5 text-xs font-medium text-zinc-200
                  transition-all duration-300
                  hover:border-zinc-500 hover:bg-zinc-900
                "
              >
                GitHub
              </a>
            ) : (
              <span
                className="
                  rounded-xl border border-zinc-800
                  px-5 py-2.5 text-xs font-medium text-zinc-600
                "
              >
                No GitHub
              </span>
            )}
          </div>
        </div>

        {/* Preview */}
        <div
          className={`
            relative border-t border-zinc-800
            bg-zinc-900/30
            lg:border-l lg:border-t-0
            ${isFeatured ? "min-h-[260px]" : "min-h-[210px]"}
          `}
        >
          <ProjectPreview
            title={project.title}
            slug={project.slug}
            image={project.image}
            featured={project.featured}
          />
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;