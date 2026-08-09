import { useState } from "react";
import Container from "../ui/Container";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900/80 bg-zinc-950/90 backdrop-blur-xl">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="text-xl font-semibold tracking-tight text-white"
          >
            DevFolio<span className="text-emerald-400">_</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
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
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="
              hidden
              rounded-xl
              bg-emerald-400
              px-6
              py-3
              text-sm
              font-semibold
              text-zinc-950
              transition
              hover:bg-emerald-300
              hover:shadow-lg
              hover:shadow-emerald-400/10
              md:block
            "
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              border
              border-zinc-800
              text-zinc-300
              transition
              hover:border-zinc-700
              hover:text-white
              md:hidden
            "
          >
            <span className="relative block h-4 w-5">
              <span
                className={`
                  absolute
                  left-0
                  top-0
                  h-px
                  w-5
                  bg-current
                  transition
                  ${isOpen ? "translate-y-2 rotate-45" : ""}
                `}
              />

              <span
                className={`
                  absolute
                  left-0
                  top-2
                  h-px
                  w-5
                  bg-current
                  transition
                  ${isOpen ? "opacity-0" : ""}
                `}
              />

              <span
                className={`
                  absolute
                  left-0
                  top-4
                  h-px
                  w-5
                  bg-current
                  transition
                  ${isOpen ? "-translate-y-2 -rotate-45" : ""}
                `}
              />
            </span>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            md:hidden
            ${
              isOpen
                ? "max-h-96 border-t border-zinc-900 opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="flex flex-col gap-2 py-5">
            <a
              href="#about"
              onClick={closeMenu}
              className="
                rounded-lg
                px-4
                py-3
                text-sm
                text-zinc-400
                transition
                hover:bg-zinc-900
                hover:text-white
              "
            >
              About
            </a>

            <a
              href="#journey"
              onClick={closeMenu}
              className="
                rounded-lg
                px-4
                py-3
                text-sm
                text-zinc-400
                transition
                hover:bg-zinc-900
                hover:text-white
              "
            >
              Journey
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="
                rounded-lg
                px-4
                py-3
                text-sm
                text-zinc-400
                transition
                hover:bg-zinc-900
                hover:text-white
              "
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="
                rounded-lg
                px-4
                py-3
                text-sm
                text-zinc-400
                transition
                hover:bg-zinc-900
                hover:text-white
              "
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="
                mt-2
                rounded-xl
                bg-emerald-400
                px-4
                py-3
                text-center
                text-sm
                font-semibold
                text-zinc-950
                transition
                hover:bg-emerald-300
              "
            >
              Let's Talk
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;