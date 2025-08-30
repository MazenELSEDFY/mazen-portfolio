import { Section, Card } from "../components/ui";
import { profile } from "../data/profile";
export default function Experience() {
  return (
    <Section title="Experience">
      <div className="space-y-6">
        {profile.experience.map((e, idx) => (
          <Card key={idx}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold text-brand.blue">{e.role} — {e.org}</h3>
              <span className="text-sm text-brand.orange">{e.period}</span>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-brand.blue/90">
              {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}

