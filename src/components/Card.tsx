export function Card({ children }: { children: React.ReactNode }) {
  return (
    <section className="rounded-[22px] border border-black/10 bg-white p-5 shadow-sm">
      {children}
    </section>
  );
}
