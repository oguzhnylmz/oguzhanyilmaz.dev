import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-xl text-center">
        <span className="text-7xl font-bold uppercase tracking-[0.2em] text-emerald-400 md:text-8xl">
        404
        </span>

        <h1 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Page not found.
        </h1>

        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-zinc-400">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          to="/"
          className="
            mt-8 inline-flex rounded-xl
            bg-emerald-400 px-6 py-3
            text-sm font-semibold text-zinc-950
            transition-all duration-300
            hover:-translate-y-0.5
            hover:bg-emerald-300
          "
        >
          Back to portfolio
        </Link>
      </div>
    </main>
  );
}

export default NotFound;