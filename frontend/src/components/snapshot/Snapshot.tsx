import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import SnapshotCard from "./SnapshotCard";

function Snapshot() {
  return (
    <section
      className="bg-zinc-950 py-28"
    >
      <Container>

        <SectionTitle
          eyebrow="Developer Snapshot"
          title="Current Focus"
          description="A quick overview of what I'm building, learning and aiming for."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <SnapshotCard
            title="Current Project"
            value="DevFolio"
          />

          <SnapshotCard
            title="Favourite Stack"
            value="Python + FastAPI"
          />

          <SnapshotCard
            title="Currently Learning"
            value="React & Docker"
          />

          <SnapshotCard
            title="Status"
            value="Open To Work"
          />

        </div>

      </Container>
    </section>
  );
}

export default Snapshot;