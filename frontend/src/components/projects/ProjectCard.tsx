import ProjectPreview from "./ProjectPreview";
import type { Project } from "../../types/Project";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/40
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-emerald-400/40
        hover:bg-zinc-900/60
      "
    >

      <div
        className="
          grid
          lg:grid-cols-2
        "
      >

        {/* Project information */}

        <div className="flex flex-col p-8 lg:p-10">

          {/* Top row */}

          <div className="flex items-center justify-between">

            <span
              className="
                text-[11px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-emerald-400
              "
            >
              {project.featured ? "Featured Project" : "Project"}
            </span>

            <span className="text-xs text-zinc-600">
              {project.year}
            </span>

          </div>

          {/* Title */}

          <div className="mt-8">

            <div className="flex items-start justify-between gap-4">

              <h3
                className="
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-white
                  transition
                  duration-300
                  group-hover:text-emerald-300
                  md:text-3xl
                "
              >
                {project.title}
              </h3>

              <span
                className="
                  text-xl
                  text-zinc-600
                  transition
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                  group-hover:text-emerald-400
                "
              >
                ↗
              </span>

            </div>

            <p
              className="
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-zinc-400
              "
            >
              {project.description}
            </p>

          </div>

          {/* Technologies */}

          <div className="mt-8 flex flex-wrap gap-2">

            {project.stack.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  border
                  border-zinc-800
                  bg-zinc-950
                  px-3
                  py-1.5
                  text-xs
                  text-zinc-400
                  transition
                  group-hover:border-zinc-700
                "
              >
                {technology}
              </span>
            ))}

          </div>

          {/* Actions */}

          <div className="mt-auto flex flex-wrap gap-3 pt-10">

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-xl
                  bg-emerald-400
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-black
                  transition
                  hover:bg-emerald-300
                "
              >
                View Project
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-xl
                  border
                  border-zinc-700
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-white
                  transition
                  hover:border-zinc-500
                  hover:bg-zinc-900
                "
              >
                GitHub
              </a>
            )}

          </div>

        </div>

        {/* Project preview */}

        <div className="border-t border-zinc-800 p-5 lg:border-l lg:border-t-0 lg:p-6">

          <ProjectPreview
            title={project.title}
            featured={project.featured}
          />

        </div>

      </div>

    </article>
  );
}

export default ProjectCard;