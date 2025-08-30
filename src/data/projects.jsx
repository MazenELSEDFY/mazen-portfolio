import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { projects } from "../data/projects";

const Tag = ({ children }) => (
  <span className="inline-block text-xs px-2 py-1 bg-brand.light text-brand.dark border rounded-md">
    {children}
  </span>
);

const ProjectCard = ({ p }) => (
  <motion.div
    className="bg-white border rounded-xl p-4 shadow-soft"
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35 }}
  >
    <div className="flex items-baseline justify-between gap-2">
      <h3 className="text-lg font-semibold">{p.title}</h3>
      <span className="text-xs text-gray-500">{p.timeframe}</span>
    </div>
    <p className="mt-2 text-gray-700">{p.blurb}</p>
    <div className="mt-3 flex flex-wrap gap-2">
      {p.tags.map((t, i) => <Tag key={i}>{t}</Tag>)}
    </div>
    <div className="mt-4 flex gap-3">
      {p.repo && (
        <a
          href={p.repo}
          className="inline-flex items-center gap-2 text-brand.blue hover:underline"
        >
          <Github size={16} /> Repo
        </a>
      )}
      {p.demo && (
        <a
          href={p.demo}
          className="inline-flex items-center gap-2 text-brand.orange hover:underline"
        >
          Live Demo
        </a>
      )}
    </div>
  </motion.div>
);

export default function Projects() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <motion.h1
        className="text-3xl md:text-4xl font-extrabold"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Projects
      </motion.h1>
      <p className="mt-3 text-gray-700">
        Selected software and data projects. Add more by editing
        <code className="ml-1 bg-gray-100 rounded px-1 py-0.5">src/data/projects.js</code>.
      </p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => <ProjectCard key={i} p={p} />)}
      </div>
    </main>
  );
}

