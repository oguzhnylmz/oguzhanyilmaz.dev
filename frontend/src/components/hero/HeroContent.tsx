import Badge from "../ui/Badge";
import HeroActions from "./HeroActions";

function HeroContent() {
  return (
    <div className="flex-1">

      <Badge>
        Available for opportunities
      </Badge>

      <h1 className="mt-8 text-5xl font-bold leading-[1.1] text-white lg:text-7xl">

        Building software

        <br />

        that solves

        <br />

        <span className="text-emerald-300">
          real problems.
        </span>

      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">

        I’m focused on building modern web 
        applications while strengthening my backend skills 
        through hands-on projects and continuous learning.

      </p>

      <div className="mt-8 flex flex-wrap gap-3">

        <span className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300">

          Python

        </span>

        <span className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300">

          FastAPI

        </span>

        <span className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300">

          React

        </span>

      </div>

      <HeroActions />

      <div className="mt-16 flex items-center gap-3">

        <div className="flex h-7 w-4 items-start justify-center rounded-full border border-zinc-700 p-1">

          <div className="h-2 w-1 rounded-full bg-zinc-400 animate-bounce" />

        </div>

        <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">

          Scroll to explore

        </span>

      </div>

    </div>
  );
}

export default HeroContent;