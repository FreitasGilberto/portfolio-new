export function NavbarPills() {
  const tabs = [{ key: "home", label: "Home" }] as const;
  const base =
    "rounded-full px-4 py-2 text-sm border transition active:scale-[0.98]";
  const activeCls =
    "bg-[rgb(var(--ocean)/1)] text-white border-[rgb(var(--ocean)/1)]";
  const idleCls =
    "bg-white text-black border-black/10 hover:bg-[rgb(var(--sky)/0.12)]";

  return (
    <nav className="p-5">
      <div className="flex gap-2 rounded-full border border-black/10 bg-white p-1">
        {tabs.map((t) => (
          <a key={t.key} href={`#${t.key}`} className={`${base} ${activeCls}`}>
            {t.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
