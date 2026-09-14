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
            year="2020"
            title="Computer Engineering"
            description="Graduated with a degree in Computer Engineering, building a strong foundation in software engineering, algorithms and computer science."
          />

          <JourneyItem
            year="2021"
            title="First Professional Experience"
            description="Gained initial professional experience and developed practical skills through real-world work environments."
          />

          <JourneyItem
            year="2022–2025"
            title="Exploring & Growing"
            description="Explored different professional paths while gaining valuable work and life experience, and gradually clarified the direction I wanted to pursue long-term."
          />

          <JourneyItem
            year="2026"
            title="Back to Software Engineering"
            description="Returned to software development with renewed focus, building full-stack projects and strengthening my backend engineering skills."
            last
          />

        </div>

      </Container>
    </section>
  );
}

export default Journey;