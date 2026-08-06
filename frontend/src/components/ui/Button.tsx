import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

function Button({
  children,
  href = "#",
  variant = "primary",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-emerald-300 text-zinc-950 hover:-translate-y-1 hover:bg-emerald-200",

    secondary:
      "border border-zinc-700 text-zinc-300 hover:border-emerald-300 hover:text-white",
  };

  return (
    <a
      href={href}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </a>
  );
}

export default Button;