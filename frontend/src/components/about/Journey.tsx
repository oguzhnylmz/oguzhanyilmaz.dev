import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import JourneyItem from "./JourneyItem";

function Journey() {
  return (
    <section
      id="journey"
      className="bg-zinc-950 py-28"
    >
      <Container>

        <SectionTitle
          eyebrow="Journey"
          title="How I Got Here"
          description="Every step has shaped the way I approach software engineering."
        />

        <div className="mx-auto mt-20 max-w-3xl">

          <JourneyItem
            year="2022"
            title="Computer Engineering"
            description="Built a solid foundation in software engineering, algorithms and computer science."
          />

          <JourneyItem
            year="2024"
            title="Backend Development"
            description="Focused on Python, FastAPI, REST APIs and clean software architecture."
          />

          <JourneyItem
            year="2025"
            title="Professional Experience"
            description="Worked on real-world software projects while improving collaboration and engineering practices."
          />

          <JourneyItem
            year="2026"
            title="Building DevFolio"
            description="Creating a full-stack portfolio using React, FastAPI and PostgreSQL."
            last
          />

        </div>

      </Container>
    </section>
  );
}

export default Journey;