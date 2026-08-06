type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="max-w-2xl">

      {eyebrow && (
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-emerald-300">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold text-white lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 leading-8 text-zinc-400">
          {description}
        </p>
      )}

    </div>
  );
}

export default SectionTitle;