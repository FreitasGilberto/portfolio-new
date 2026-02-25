type Variant = "primary" | "cta" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-[rgb(var(--ocean)/1)] text-white border-[rgb(var(--ocean)/1)] hover:bg-[rgb(var(--ocean)/0.9)]",
  cta: "bg-[rgb(var(--pumpkin)/1)] text-white border-[rgb(var(--pumpkin)/1)] hover:bg-[rgb(var(--pumpkin)/0.9)]",
  ghost: "bg-white text-black border-black/10 hover:bg-[rgb(var(--sky)/0.12)]",
};

export function Button({
  href,
  children,
  variant = "primary",
  external,
  download,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  download?: boolean;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition active:scale-[0.98]";

  return (
    <a
      href={href}
      className={`${base} ${styles[variant]} ${className}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      download={download ? true : undefined}
    >
      {children}
    </a>
  );
}
