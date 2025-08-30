import { Section, Card } from "../components/ui";
import { profile } from "../data/profile";

export default function Experience() {
  return (
    <Section title="Experience">
      <div className="grid sm:grid-cols-2 gap-6">
        {profile.experience.map((e, idx) => (
          <Card key={idx} className="overflow-hidden relative group">
            {e.image && (
              <a
                href={e.link || "#"}
                target={e.link ? "_blank" : "_self"}
                rel="noreferrer"
                className="block relative"
              >
                <img
                  src={e.image}
                  alt={`${e.org} - ${e.role}`}
                  className="w-full h-70 object-cover rounded-xl border mb-4 transition duration-300 transform group-hover:scale-[1.03] group-hover:opacity-90"
                  loading="lazy"
                />
                {/* Full Overlay on Hover */}
                {e.link && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition">
                    <span className="text-white font-medium text-sm md:text-base">
                      Click to view website
                    </span>
                  </div>
                )}
              </a>
            )}

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold text-brand.blue">
                {e.role} — {e.org}
              </h3>
              <span className="text-sm text-brand.orange">{e.period}</span>
            </div>

            <ul className="list-disc pl-5 mt-3 space-y-1 text-brand.blue/90">
              {e.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
