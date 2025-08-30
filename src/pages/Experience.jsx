import { Section, Card } from "../components/ui";
import { profile } from "../data/profile";

export default function Experience() {
  return (
    <Section title="Experience">
      <div className="grid sm:grid-cols-2 gap-6">
        {profile.experience.map((e, idx) => (
          <Card key={idx} className="overflow-hidden">
            {e.image && (
              <a href={e.link || "#"} target={e.link ? "_blank" : "_self"} rel="noreferrer">
                <img
                  src={e.image}
                  alt={`${e.org} - ${e.role}`}
                  className="w-full h-70 object-cover rounded-xl border mb-4"
                  loading="lazy"
                />
              </a>
            )}
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold text-brand.blue">
                {e.role} — {e.org}
              </h3>
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
