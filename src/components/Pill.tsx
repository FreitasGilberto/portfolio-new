export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-[rgb(var(--teal)/0.35)] bg-[rgb(var(--teal)/0.12)] px-3 py-1 text-xs text-black/70">
      {children}
    </span>
  );
}
