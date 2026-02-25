import { Card } from "./Card";
import { ContactForm } from "./ContactForm";

export function ContactSection({
  intro,
  emailTo,
}: {
  intro: string;
  linkedin: string;
  emailTo: string;
}) {
  return (
    <div className="px-5 pb-5 space-y-4">
      <Card>
        <h2 className="text-base font-semibold">Contact</h2>
        <p className="mt-2 text-sm text-black/75">{intro}</p>

        <div className="mt-5">
          <ContactForm emailTo={emailTo} />
        </div>
      </Card>
    </div>
  );
}
