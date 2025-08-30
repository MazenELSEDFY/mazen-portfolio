import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Section, Card, Pill } from "../components/ui";
import { projects } from "../data/projects";

const ProjectCard = ({ p }) => (
  <Card>
    <div className="flex items-baseline justify-between gap-2">
      <h3 className="text-lg font-semibold text-brand.blue">{p.title}</h3>
      {p.timeframe && <span className="text-xs text-brand.orange">{p.timeframe}</span>}
    </div>
    {p.image && (
      <img src={p.image} alt={p.title} className="mt-3 w-full h-44 object-cover rounded-lg border" />
    )}
    <p className="mt-3 text-brand.blue/90">{p.blurb}</p>
    {p.tags?.length > 0 && (
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map((t, i) => <Pill key={i}>{t}</Pill>)}
      </div>
    )}
    <div className="mt-4 flex gap-4">
      {p.repo && (
        <a href={p.repo} className="inline-flex items-center gap-2 text-brand.blue hover:underline">
          <Github size={16} /> Repo
        </a>
      )}
      {p.demo && (
        <a href={p.demo} className="inline-flex items-center gap-2 text-brand.orange hover:underline">
          <ExternalLink size={16} /> Live Demo
        </a>
      )}
    </div>
  </Card>
);

export default function Projects() {
  const list = projects ?? [];
  return (
    <div>
      <section className="bg-gradient-to-b from-brand.orange/10 to-transparent">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <motion.h1
            className="text-3xl md:text-4xl font-extrabold text-brand.blue"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Projects
          </motion.h1>
          <p className="mt-3 text-brand.blue/90">
            Selected software and data projects. Edit{" "}
            <code className="rounded px-1 py-0.5 bg-brand.orange/10 border border-brand.blue/10">src/data/projects.js</code>.
          </p>
        </div>
      </section>

      <Section title="All Projects">
        {list.length === 0 ? (
          <div className="text-brand.blue/80">
            No projects yet. Add items to <code className="rounded px-1 py-0.5 bg-brand.orange/10 border border-brand.blue/10">src/data/projects.js</code>.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {list.map((p, i) => <ProjectCard key={i} p={p} />)}
          </div>
        )}
      </Section>
    </div>
  );
}

