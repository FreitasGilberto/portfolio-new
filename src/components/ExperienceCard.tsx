import { Card } from "./Card";
import { Pill } from "./Pill";

export function ExperienceCard({
  company,
  period,
  role,
  bullets,
  tags,
}: {
  company: string;
  period: string;
  role: string;
  bullets: string[];
  tags: string[];
}) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold">{company}</h3>
          <p className="mt-1 text-sm text-black/70">{role}</p>
          <p className="mt-1 text-xs text-black/55">{period}</p>
        </div>

        <span className="rounded-full bg-[rgb(var(--sun)/0.22)] px-3 py-1 text-xs font-medium text-black">
          Experience
        </span>
      </div>

      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/75">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
    </Card>
  );
}
