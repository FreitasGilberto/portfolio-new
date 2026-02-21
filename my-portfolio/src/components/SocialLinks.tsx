import { Button } from "./Button";

export function SocialLinks({
  socials,
}: {
  socials: { label: string; href: string }[];
}) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {socials.map((s) => (
        <Button key={s.label} href={s.href} external variant="ghost">
          {s.label} ↗
        </Button>
      ))}
    </div>
  );
}
