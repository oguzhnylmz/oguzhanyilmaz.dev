import Button from "../ui/Button";

function HeroActions() {
  return (
    <div className="mt-12 flex flex-wrap gap-4">
      <Button href="#projects">
        View Projects
      </Button>

      <Button
        href="#contact"
        variant="secondary"
      >
        Contact
      </Button>
    </div>
  );
}

export default HeroActions;