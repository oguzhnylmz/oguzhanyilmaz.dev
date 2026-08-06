import Card from "../ui/Card";

type SnapshotCardProps = {
  title: string;
  value: string;
};

function SnapshotCard({
  title,
  value,
}: SnapshotCardProps) {
  return (
    <Card className="p-8">

      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
        {title}
      </p>

      <h3 className="mt-4 text-2xl font-semibold text-white">
        {value}
      </h3>

    </Card>
  );
}

export default SnapshotCard;