import type { Project } from "../../types/Project";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const isFeatured = project.featured;

  return (
    <article
      className={`
        group overflow-hidden rounded-3xl border border-zinc-800
        bg-zinc-950/80 transition-all duration-300
        hover:border-zinc-700 hover:bg-zinc-900/70
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

            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">
              {project.description}
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
              <button
                type="button"
                className="
                  rounded-xl bg-emerald-400 px-5 py-2.5
                  text-xs font-semibold text-zinc-950
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-emerald-300
                "
              >
                View Project
              </button>
            )}

            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
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
              <button
                type="button"
                className="
                  rounded-xl border border-zinc-700
                  px-5 py-2.5 text-xs font-medium text-zinc-200
                  transition-all duration-300
                  hover:border-zinc-500 hover:bg-zinc-900
                "
              >
                GitHub
              </button>
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
          {/* Ambient glow */}
          <div
            className="
              pointer-events-none absolute right-0 top-0
              h-40 w-40 rounded-full
              bg-emerald-400/10 blur-3xl
            "
          />

          {/* Browser window */}
          <div
            className="
              absolute inset-5 overflow-hidden rounded-2xl
              border border-zinc-800 bg-zinc-950
              shadow-2xl
              transition-transform duration-500
              group-hover:-translate-y-1
            "
          >
            {/* Browser header */}
            <div className="flex h-9 items-center justify-between border-b border-zinc-800 px-3">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>

              <span className="text-[8px] text-zinc-600">
                {project.title.toLowerCase().replaceAll(" ", "-")}
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </div>

            {/* Fake interface */}
            <div className="p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="h-2 w-20 rounded-full bg-zinc-700" />

                <div className="h-2 w-10 rounded-full bg-emerald-400/70" />
              </div>

              <div className="grid grid-cols-[1fr_70px] gap-3">
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-3">
                  <div className="space-y-2">
                    <div className="h-2 w-1/2 rounded-full bg-zinc-700" />
                    <div className="h-2 w-4/5 rounded-full bg-zinc-800" />
                    <div className="h-2 w-2/3 rounded-full bg-zinc-800" />
                  </div>

                  <div className="mt-5 flex items-end gap-1.5">
                    <div className="h-7 w-2 rounded-t bg-zinc-700" />
                    <div className="h-10 w-2 rounded-t bg-zinc-700" />
                    <div className="h-6 w-2 rounded-t bg-zinc-700" />
                    <div className="h-14 w-2 rounded-t bg-emerald-400/70" />
                    <div className="h-11 w-2 rounded-t bg-emerald-400/80" />
                    <div className="h-16 w-2 rounded-t bg-emerald-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="h-7 rounded-lg bg-zinc-900" />
                  <div className="h-7 rounded-lg bg-zinc-900" />
                  <div className="h-7 rounded-lg bg-zinc-900" />
                  <div className="h-7 rounded-lg bg-emerald-400/10" />
                </div>
              </div>
            </div>
          </div>

          {/* Featured label */}
          {isFeatured && (
            <span
              className="
                absolute bottom-7 left-7 rounded-full
                border border-emerald-400/30
                bg-zinc-950 px-3 py-1
                text-[9px] font-medium uppercase
                tracking-[0.2em] text-emerald-400
              "
            >
              Featured
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;