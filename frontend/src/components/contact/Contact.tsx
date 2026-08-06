import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

import { socials } from "../../constants/socials";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-zinc-950 py-28"
    >
      <Container>

        <SectionTitle
          eyebrow="Contact"
          title="Let's build something together."
          description="Whether it's a new opportunity, an interesting project or just a conversation about software, I'd be happy to connect."
        />

        <div className="mt-14 flex flex-wrap gap-5">

          <Button
            href={`mailto:${socials.email}`}
          >
            Send Email
          </Button>

          <Button
            href={socials.github}
            variant="secondary"
          >
            GitHub
          </Button>

          <Button
            href={socials.linkedin}
            variant="secondary"
          >
            LinkedIn
          </Button>

        </div>

      </Container>
    </section>
  );
}

export default Contact;