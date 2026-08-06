type CardProps = {
  children: React.ReactNode;
  className?: string;
};

function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/70
        backdrop-blur
        transition-all
        duration-300
        hover:border-emerald-300/40
        hover:-translate-y-1
        hover:shadow-[0_20px_60px_rgba(16,185,129,0.08)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;