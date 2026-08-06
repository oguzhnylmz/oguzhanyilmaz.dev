import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

function Badge({ children }: BadgeProps) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-emerald-300/30
        bg-emerald-400/10
        px-4
        py-2
        text-xs
        uppercase
        tracking-[0.25em]
        text-emerald-300
      "
    >
      {children}
    </span>
  );
}

export default Badge;