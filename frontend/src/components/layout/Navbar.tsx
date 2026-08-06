import Container from "../ui/Container";
import Button from "../ui/Button";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-xl">

      <Container className="flex h-16 items-center justify-between">

        <a
          href="/"
          className="text-xl font-semibold tracking-wide text-white"
        >
          DevFolio
          <span className="text-emerald-300">_</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">

          <a
            href="#about"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            About
          </a>

          <a
            href="#journey"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Journey
          </a>

          <a
            href="#projects"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Contact
          </a>

        </nav>

        <div className="hidden md:block">
          <Button href="#contact">
            Let's Talk
          </Button>
        </div>

      </Container>

    </header>
  );
}

export default Navbar;