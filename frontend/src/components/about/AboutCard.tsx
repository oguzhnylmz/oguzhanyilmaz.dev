import Card from "../ui/Card";

type AboutCardProps = {
  icon: string;
  title: string;
  description: string;
};

function AboutCard({
  icon,
  title,
  description,
}: AboutCardProps) {
  return (
    <Card className="p-8">

      <div className="text-3xl">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-zinc-400">
        {description}
      </p>

    </Card>
  );
}

export default AboutCard;