import { Section, Card } from "../components/ui";
import { profile } from "../data/profile";
export default function Education() {
  const ed = profile.education[0];
  return (
    <Section title="Education">
      <Card>
        <h3 className="font-semibold text-brand.blue">{ed.degree}</h3>
        <p className="text-brand.blue/90">{ed.school} — <span className="text-brand.orange">{ed.grad}</span></p>
        <p className="mt-2"><span className="font-medium text-brand.orange">Graduation Project:</span> <span className="text-brand.blue/90">{ed.project}</span></p>
      </Card>
    </Section>
  );
}

