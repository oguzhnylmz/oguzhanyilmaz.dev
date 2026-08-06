import Badge from "../ui/Badge";
import HeroActions from "./HeroActions";

function HeroContent() {
  return (
    <div className="flex-1">

      <Badge>
        Available for opportunities
      </Badge>

      <h1 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-7xl">

        Building software

        <br />

        that solves

        <br />

        <span className="text-emerald-300">
          real problems.
        </span>

      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">

        I'm a Computer Engineer passionate about building scalable backend systems,
        clean APIs and modern web applications.

        <br />
        <br />

        Currently focused on Python, FastAPI and React while continuously improving
        my engineering skills.

      </p>

      <HeroActions />

      <div className="mt-16 flex items-center gap-3">

        <div className="flex h-7 w-4 items-start justify-center rounded-full border border-zinc-700 p-1">

          <div className="h-2 w-1 animate-bounce rounded-full bg-zinc-400" />

        </div>

        <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">

          Scroll to explore

        </span>

      </div>

    </div>
  );
}

export default HeroContent;