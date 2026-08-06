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
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition-all duration-300";

  const styles = {
    primary:
      "bg-emerald-300 text-zinc-950 hover:-translate-y-1 hover:bg-emerald-200 hover:shadow-[0_12px_30px_rgba(16,185,129,0.20)]",

    secondary:
      "border border-zinc-700 text-zinc-300 hover:border-emerald-300 hover:text-white hover:-translate-y-1",
  };

  return (
    <a href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </a>
  );
}

export default Button;