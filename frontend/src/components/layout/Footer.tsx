import Container from "../ui/Container";
import { site } from "../../constants/site";

function Footer() {
  return (
    <footer className="border-t border-zinc-900">
      <Container
        className="
          flex
          flex-col
          items-center
          justify-between
          gap-4
          py-8
          text-sm
          text-zinc-500
          md:flex-row
        "
      >
        <p>{site.copyright}</p>

        <p className="text-zinc-600">
          Built with React · FastAPI · TypeScript
        </p>
      </Container>
    </footer>
  );
}

export default Footer;