import { Pill } from "./Pill";
import { ExperienceCard } from "./ExperienceCard";
import { Button } from "./Button";

export function ResumeSection({
  summaryPills,
  experience,
  cvHref,
}: {
  summaryPills: string[];
  experience: {
    company: string;
    period: string;
    role: string;
    bullets: string[];
    tags: string[];
  }[];
  cvHref: string;
}) {
  return (
    <div className="px-5 pb-5 space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {summaryPills.map((p) => (
            <Pill key={p}>{p}</Pill>
          ))}
        </div>

        <Button href={cvHref} variant="cta" download className="shrink-0">
          Download CV ↓
        </Button>
      </div>

      {experience.map((e) => (
        <ExperienceCard key={`${e.company}-${e.period}`} {...e} />
      ))}
    </div>
  );
}
