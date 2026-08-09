interface ProjectPreviewProps {
  title: string;
  featured?: boolean;
}

function ProjectPreview({
  title,
  featured = false,
}: ProjectPreviewProps) {
  const slug = title.toLowerCase().replaceAll(" ", "-");

  return (
    <div
      className="
        group relative
        h-full
        min-h-[300px]
        overflow-hidden
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-950
      "
    >
      {/* Ambient glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-72
          w-72
          rounded-full
          bg-emerald-400/10
          blur-3xl
          transition-all
          duration-700
          group-hover:bg-emerald-400/20
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-20
          h-64
          w-64
          rounded-full
          bg-emerald-500/5
          blur-3xl
        "
      />

      {/* Browser */}

      <div
        className="
          absolute
          inset-5
          overflow-hidden
          rounded-xl
          border
          border-zinc-800
          bg-zinc-900
          shadow-2xl
          transition-transform
          duration-500
          group-hover:-translate-y-1
        "
      >
        {/* Browser header */}

        <div
          className="
            flex
            h-10
            items-center
            justify-between
            border-b
            border-zinc-800
            bg-zinc-900/90
            px-4
          "
        >
          <div className="flex items-center gap-1.5">

            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />

            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />

            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

          </div>

          <span className="text-[9px] text-zinc-600">
            {slug}
          </span>

          <div className="h-2 w-2 rounded-full bg-emerald-400/70" />
        </div>

        {/* Fake application */}

        <div className="p-4">

          {/* Top navigation */}

          <div className="mb-5 flex items-center justify-between">

            <div className="h-2 w-16 rounded-full bg-zinc-700" />

            <div className="flex gap-2">

              <div className="h-2 w-8 rounded-full bg-zinc-800" />

              <div className="h-2 w-8 rounded-full bg-zinc-800" />

              <div className="h-2 w-8 rounded-full bg-emerald-400/50" />

            </div>

          </div>

          {/* Main layout */}

          <div className="grid grid-cols-3 gap-3">

            {/* Main panel */}

            <div className="col-span-2 rounded-lg border border-zinc-800 bg-zinc-950 p-3">

              <div className="mb-4 flex items-center justify-between">

                <div className="space-y-2">

                  <div className="h-2 w-20 rounded-full bg-zinc-700" />

                  <div className="h-1.5 w-28 rounded-full bg-zinc-800" />

                </div>

                <div className="h-6 w-6 rounded-md bg-emerald-400/10" />

              </div>

              {/* Chart */}

              <div className="flex h-24 items-end gap-2">

                <div className="h-[35%] flex-1 rounded-t bg-zinc-800" />

                <div className="h-[50%] flex-1 rounded-t bg-zinc-800" />

                <div className="h-[42%] flex-1 rounded-t bg-zinc-800" />

                <div className="h-[70%] flex-1 rounded-t bg-emerald-400/30" />

                <div className="h-[60%] flex-1 rounded-t bg-emerald-400/40" />

                <div className="h-[85%] flex-1 rounded-t bg-emerald-400/60" />

              </div>

            </div>

            {/* Side panel */}

            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-3">

              <div className="mb-4 h-2 w-12 rounded-full bg-zinc-700" />

              <div className="space-y-2">

                <div className="h-7 rounded-md bg-zinc-900" />

                <div className="h-7 rounded-md bg-zinc-900" />

                <div className="h-7 rounded-md bg-zinc-900" />

                <div className="h-7 rounded-md bg-emerald-400/10" />

              </div>

            </div>

          </div>

          {/* Bottom cards */}

          <div className="mt-3 grid grid-cols-3 gap-3">

            <div className="h-12 rounded-lg border border-zinc-800 bg-zinc-950" />

            <div className="h-12 rounded-lg border border-zinc-800 bg-zinc-950" />

            <div className="h-12 rounded-lg border border-zinc-800 bg-emerald-400/5" />

          </div>

        </div>

      </div>

      {/* Featured badge */}

      {featured && (
        <div
          className="
            absolute
            bottom-5
            left-5
            z-10
            rounded-full
            border
            border-emerald-400/30
            bg-zinc-950/90
            px-3
            py-1
            text-[9px]
            font-medium
            uppercase
            tracking-[0.2em]
            text-emerald-400
            backdrop-blur
          "
        >
          Featured
        </div>
      )}
    </div>
  );
}

export default ProjectPreview;