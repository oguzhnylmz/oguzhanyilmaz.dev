import Container from "../ui/Container";
import HeroContent from "./HeroContent";
import HeroCodeCard from "./HeroCodeCard";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950">

      <div
        className="
          absolute
          inset-0
          opacity-20
          [background-image:radial-gradient(#27272a_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />

      <Container
        className="
          relative
          flex
          min-h-[calc(100vh-64px)]
          flex-col
          items-center
          justify-center
          gap-20
          py-24
          lg:flex-row
        "
      >

        <HeroContent />

        <HeroCodeCard />

      </Container>

    </section>
  );
}

export default Hero;