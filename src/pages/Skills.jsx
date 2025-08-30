import { Section, Card, Pill } from "../components/ui";
import { profile } from "../data/profile";

export default function Skills() {
  const personalSkills = [
    "Team Player",
    "Problem Solver",
    "Adaptability",
    "Communication",
    "Leadership",
    "Critical Thinking",
    "Creativity",
    "Driven Performer",
    "Logical Resolver",
    "Curious Learner",
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-orange-500/10 to-transparent">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600">Skills</h1>
          <p className="mt-3 text-blue-600/90">Technologies, tools, and personal skills I work with regularly.</p>
        </div>
      </section>

      {/* Technical Skills */}
      <Section title="Technical Skills">
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(profile.skills).map(([k, vals]) => (
            <Card key={k}>
              <h3 className="font-semibold text-orange-500 mb-2 capitalize">{k}</h3>
              <div className="flex flex-wrap gap-2">
                {vals.map((v, i) => (
                  <Pill key={i}>{v}</Pill>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Personal Skills */}
      <Section title="Personal Skills">
        <Card>
          <h3 className="font-semibold text-orange-500 mb-2">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {personalSkills.map((skill, i) => (
              <Pill key={i}>{skill}</Pill>
            ))}
          </div>
        </Card>
      </Section>
    </div>
  );
}
