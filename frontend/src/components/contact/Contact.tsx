import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

import { socials } from "../../constants/socials";

function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/30 px-6 py-16 md:px-12 md:py-20">
          {/* Ambient Glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-64
              w-64
              rounded-full
              bg-emerald-400/10
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-32
              -left-20
              h-56
              w-56
              rounded-full
              bg-emerald-400/5
              blur-3xl
            "
          />

          <div className="relative">
            <SectionTitle
              eyebrow="Contact"
              title="Let's build something together."
              description="Whether it's a new opportunity, an interesting project or just a conversation about software, I'd be happy to connect."
            />

            <div className="mt-12 flex flex-wrap gap-4">
              <Button href={`mailto:${socials.email}`}>
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
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;