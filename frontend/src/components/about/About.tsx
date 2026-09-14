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
          description="I enjoy building reliable software that solves real problems. I’m currently focused on backend engineering while continuing to strengthen my skills across the full development process."
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
            description="Python, FastAPI and API design are at the core of my current learning and development. I care about clean architecture and maintainable code."
          />

          <AboutCard
            icon="📚"
            title="Always Learning"
            description="I’m continuously expanding my skills across frontend and backend development, with a growing focus on Docker, system design and modern software practices."
          />

        </div>

      </Container>
    </section>
  );
}

export default About;