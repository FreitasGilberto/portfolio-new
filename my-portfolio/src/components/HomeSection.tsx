import { Card } from "./Card";
import { SocialLinks } from "./SocialLinks";

export function HomeSection({
  name,
  role,
  headline,
  location,
  avatar,
  socials,
}: {
  name: string;
  role: string;
  headline: string;
  location: string;
  avatar: string;
  socials: { label: string; href: string }[];
}) {
  return (
    <div className="px-5 pb-5 space-y-4">
      <Card>
        <div className="flex items-start gap-4">
          <div className="h-16 w-16 overflow-hidden rounded-full border border-black/10 shrink-0">
            <img
              src={avatar}
              alt={`${name} avatar`}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="min-w-0">
            <h1 className="text-lg font-semibold leading-tight">{name}</h1>
            <p className="mt-1 text-sm text-black/70">{role}</p>
            <p className="mt-2 text-xs text-black/55">{location}</p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-black/80">{headline}</p>
        <SocialLinks socials={socials} />
      </Card>
    </div>
  );
}
