import Container from "../ui/Container";

import { site } from "../../constants/site";

function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8">

      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">

        <p>

          {site.copyright}

        </p>

        <p>

          Built with React · FastAPI · TypeScript

        </p>

      </Container>

    </footer>
  );
}

export default Footer;