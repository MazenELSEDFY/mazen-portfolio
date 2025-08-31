// src/pages/Projects.jsx
import { useMemo, useState, useMemo as useReactMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Github,
  ExternalLink,
  FileText,
  FileSpreadsheet,
  Play,
  Search,
  Filter,
  X,
} from "lucide-react";
import { projects } from "../data/projects";

/* ---------- Small UI Bits ---------- */
const Tag = ({ children, active = false, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`inline-flex items-center gap-2 text-xs px-2.5 py-1 rounded-full border transition ${
      active
        ? "bg-orange-50 border-orange-300 text-orange-700"
        : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
    }`}
  >
    {children}
  </button>
);

const Pill = ({ children }) => (
  <span className="inline-block text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700">
    {children}
  </span>
);

const cardVariants = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } };

/* ---------- Action Button ---------- */
function ActionButton({ href, icon, children, aria, download = false }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={aria}
      {...(download ? { download: "" } : {})}
      className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400/40"
    >
      {icon}
      <span className="truncate">{children}</span>
    </a>
  );
}

/* ---------- Project Card ---------- */
function ProjectCard({ p }) {
  const pdfs = p.resources?.pdfs ?? [];
  const slides = p.resources?.slides ?? [];

  return (
    <motion.article
      variants={cardVariants}
      className="bg-white border rounded-xl shadow-sm p-4 flex flex-col gap-4"
      whileHover={{ y: -3 }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-brand.blue leading-snug">{p.title}</h3>
        {p.timeframe && <Pill>{p.timeframe}</Pill>}
      </div>

      {p.blurb && <p className="text-gray-700">{p.blurb}</p>}

      {Array.isArray(p.tags) && p.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {p.tags.map((t, i) => (
            <span key={i} className="inline-block text-xs px-2 py-1 rounded bg-brand.light text-brand.dark border">
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Action Bar */}
      <div className="flex flex-wrap gap-2 pt-2 border-t">
        <ActionButton
          href={p.video}
          icon={<Play size={16} />}
          aria={`Open video for ${p.title}`}
        >
          Play Video
        </ActionButton>

        <ActionButton
          href={p.repo}
          icon={<Github size={16} />}
          aria={`Open GitHub for ${p.title}`}
        >
          GitHub
        </ActionButton>

        <ActionButton
          href={p.demo}
          icon={<ExternalLink size={16} />}
          aria={`Open live demo for ${p.title}`}
        >
          Live Demo
        </ActionButton>

        {pdfs.map((r, i) => (
          <ActionButton
            key={`pdf-${i}`}
            href={r.href}
            icon={<FileText size={16} />}
            aria={r.title}
            download
          >
            {r.title}
          </ActionButton>
        ))}

        {slides.map((r, i) => (
          <ActionButton
            key={`pptx-${i}`}
            href={r.href}
            icon={<FileSpreadsheet size={16} />}
            aria={r.title}
            download
          >
            {r.title}
          </ActionButton>
        ))}
      </div>
    </motion.article>
  );
}

/* ---------- Helper: unique tag list ---------- */
function collectAllTags(list) {
  const set = new Set();
  for (const p of list) (p.tags || []).forEach((t) => set.add(t));
  return Array.from(set).sort();
}

/* ---------- Page ---------- */
export default function Projects() {
  const prefersReducedMotion = useReducedMotion();

  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState([]);

  const allTags = useMemo(() => collectAllTags(projects), []);

  const filtered = useReactMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchText =
        !q ||
        p.title?.toLowerCase().includes(q) ||
        p.blurb?.toLowerCase().includes(q) ||
        (p.tags || []).some((t) => t.toLowerCase().includes(q));
      const matchTags =
        activeTags.length === 0 ||
        activeTags.every((t) => (p.tags || []).includes(t));
      return matchText && matchTags;
    });
  }, [query, activeTags]);

  const toggleTag = (t) =>
    setActiveTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-brand.blue">Projects</h1>
          <p className="mt-2 text-gray-700">
            Button-first view. Open videos, PDFs, slides, GitHub, or demos directly.
          </p>
        </div>

        {/* Search */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects…"
              className="w-64 md:w-80 pl-9 pr-9 py-2 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-orange-400/40"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tag filters */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-2 text-xs font-medium text-gray-600">
          <Filter size={14} /> Filter:
        </span>
        <Tag active={activeTags.length === 0} onClick={() => setActiveTags([])}>
          All
        </Tag>
        {allTags.map((t) => (
          <Tag key={t} active={activeTags.includes(t)} onClick={() => toggleTag(t)}>
            {t}
          </Tag>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        className="mt-8 grid gap-6 md:grid-cols-2"
        initial={prefersReducedMotion ? undefined : "hidden"}
        animate="show"
        transition={{ staggerChildren: prefersReducedMotion ? 0 : 0.06 }}
      >
        {filtered.map((p, i) => (
          <ProjectCard key={i} p={p} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-gray-600 text-sm">
            No projects match your search/filter.
          </div>
        )}
      </motion.div>
    </main>
  );
}
