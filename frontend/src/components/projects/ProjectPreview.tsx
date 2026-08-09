interface ProjectPreviewProps {
  title: string;
  featured?: boolean;
}

function ProjectPreview({
  title,
  featured = false,
}: ProjectPreviewProps) {
  return (
    <div
      className="
        group relative
        h-full
        min-h-[280px]
        overflow-hidden
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-950
      "
    >
      {/* Background glow */}

      <div
        className="
          absolute
          -right-20
          -top-20
          h-56
          w-56
          rounded-full
          bg-emerald-400/10
          blur-3xl
          transition
          duration-500
          group-hover:bg-emerald-400/20
        "
      />

      {/* Browser window */}

      <div className="absolute inset-5 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">

        {/* Browser header */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-zinc-800
            px-4
            py-3
          "
        >
          <div className="flex items-center gap-2">

            <div className="h-2.5 w-2.5 rounded-full bg-red-400" />

            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />

            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

          </div>

          <span className="text-[10px] text-zinc-600">
            {title.toLowerCase().replaceAll(" ", "-")}
          </span>
        </div>

        {/* Preview content */}

        <div className="flex h-full flex-col gap-4 p-5">

          <div className="flex items-center justify-between">

            <div className="h-2 w-24 rounded-full bg-zinc-700" />

            <div className="h-2 w-12 rounded-full bg-emerald-400/60" />

          </div>

          <div className="grid flex-1 grid-cols-3 gap-3">

            <div className="col-span-2 rounded-lg border border-zinc-800 bg-zinc-950 p-4">

              <div className="mb-4 h-2 w-20 rounded-full bg-zinc-700" />

              <div className="space-y-2">

                <div className="h-2 w-full rounded-full bg-zinc-800" />

                <div className="h-2 w-5/6 rounded-full bg-zinc-800" />

                <div className="h-2 w-4/6 rounded-full bg-zinc-800" />

              </div>

              <div className="mt-6 h-16 rounded-lg bg-emerald-400/10" />

            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-3">

              <div className="mb-4 h-2 w-12 rounded-full bg-zinc-700" />

              <div className="space-y-3">

                <div className="h-8 rounded-md bg-zinc-900" />

                <div className="h-8 rounded-md bg-zinc-900" />

                <div className="h-8 rounded-md bg-zinc-900" />

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Featured label */}

      {featured && (
        <div
          className="
            absolute
            bottom-5
            left-5
            rounded-full
            border
            border-emerald-400/30
            bg-emerald-400/10
            px-3
            py-1
            text-[10px]
            font-medium
            uppercase
            tracking-[0.2em]
            text-emerald-400
          "
        >
          Featured
        </div>
      )}

    </div>
  );
}

export default ProjectPreview;