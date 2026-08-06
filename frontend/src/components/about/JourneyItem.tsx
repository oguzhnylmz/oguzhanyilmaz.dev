import Card from "../ui/Card";

type JourneyItemProps = {
  year: string;
  title: string;
  description: string;
  last?: boolean;
};

function JourneyItem({
  year,
  title,
  description,
  last = false,
}: JourneyItemProps) {
  return (
    <div className="relative flex gap-8">

      {/* Timeline */}

      <div className="flex flex-col items-center">

        <div className="h-4 w-4 rounded-full bg-emerald-300 ring-4 ring-emerald-300/10" />

        {!last && (
          <div className="mt-3 h-full w-px bg-zinc-800" />
        )}

      </div>

      {/* Card */}

      <Card className="mb-10 flex-1 p-6">

        <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">

          {year}

        </p>

        <h3 className="mt-3 text-2xl font-semibold text-white">

          {title}

        </h3>

        <p className="mt-4 leading-7 text-zinc-400">

          {description}

        </p>

      </Card>

    </div>
  );
}

export default JourneyItem;