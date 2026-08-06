import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import AboutCard from "./AboutCard";

function About() {
  return (
    <section
      id="about"
      className="bg-zinc-950 py-28"
    >
      <Container>

        <SectionTitle
          eyebrow="About"
          title="Building software with purpose."
          description="I enjoy creating reliable software that solves real problems. My focus is backend engineering, but I believe understanding the entire product is what makes a better developer."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          <AboutCard
            icon="🧠"
            title="Problem Solver"
            description="I enjoy understanding complex problems and transforming them into simple, maintainable software solutions."
          />

          <AboutCard
            icon="⚙"
            title="Backend Focused"
            description="Python, FastAPI and API design are my strongest areas. Clean architecture is always my priority."
          />

          <AboutCard
            icon="📚"
            title="Always Learning"
            description="I'm constantly improving my frontend knowledge while learning Docker, PostgreSQL and System Design."
          />

        </div>

      </Container>
    </section>
  );
}

export default About;