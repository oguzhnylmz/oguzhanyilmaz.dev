import Button from "../ui/Button";
import Container from "../ui/Container";

import { navigation } from "../../constants/navigation";
import { site } from "../../constants/site";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-xl">

      <Container className="flex h-16 items-center justify-between">

        <a
          href="/"
          className="text-xl font-semibold tracking-wide text-white"
        >
          {site.name}

          <span className="text-emerald-300">

            {site.logoSuffix}

          </span>

        </a>

        <nav className="hidden items-center gap-10 md:flex">

          {navigation.map((item) => (

            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {item.label}
            </a>

          ))}

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