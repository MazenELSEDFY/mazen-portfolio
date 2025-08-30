import { Section, Card } from "../components/ui";
import { profile } from "../data/profile";
export default function Contact() {
  return (
    <Section title="Contact">
      <div className="grid sm:grid-cols-2 gap-4">
        <Card>
          <p className="font-medium text-brand.orange">Email</p>
          <a className="text-brand.blue hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a>
        </Card>
        <Card>
          <p className="font-medium text-brand.orange">LinkedIn</p>
          <a className="text-brand.blue hover:underline" href={profile.links.linkedin}>{profile.links.linkedin}</a>
        </Card>
        <Card>
          <p className="font-medium text-brand.orange">GitHub</p>
          <a className="text-brand.blue hover:underline" href={profile.links.github}>{profile.links.github}</a>
        </Card>
        <Card>
          <p className="font-medium text-brand.orange">Phone</p>
          <a className="text-brand.blue hover:underline" href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>{profile.phone}</a>
        </Card>
      </div>
    </Section>
  );
}

