// src/pages/Projects.jsx
import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Github,
  ExternalLink,
  FileText,
  FileSpreadsheet,
  Play,
  X,
  Maximize2,
  AlertCircle,
} from "lucide-react";
import { projects } from "../data/projects";

/* ---------- Helpers ---------- */
function firstPdf(resources) {
  return resources?.pdfs?.[0]?.href || "";
}
function firstPptx(resources) {
  return resources?.slides?.[0]?.href || "";
}
function absoluteUrl(pathOrUrl) {
  if (!pathOrUrl) return "";
  try {
    return new URL(pathOrUrl).toString();
  } catch {
    return `${window.location.origin}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
  }
}
function officeEmbedUrl(pptxHref) {
  const abs = absoluteUrl(pptxHref);
  const encoded = encodeURIComponent(abs);
  return `https://view.officeapps.live.com/op/embed.aspx?src=${encoded}`;
}

/* ---------- Color-coded, responsive ActionButton ---------- */
function ActionButton({ href, icon, children, variant = "default", aria, download = false }) {
  if (!href) return null;

  const base =
    "flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 transition w-full md:w-auto";
  const variants = {
    video: "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-400",
    github: "bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-500",
    demo: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400",
    pdf: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400",
    pptx: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-400",
    default: "bg-white border text-gray-700 hover:bg-gray-50 focus:ring-orange-400/40",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={aria}
      {...(download ? { download: "" } : {})}
      className={`${base} ${variants[variant]}`}
    >
      {icon}
      <span className="truncate">{children}</span>
    </a>
  );
}

/* ---------- Media Modal: video / pdf / pptx ---------- */
function MediaModal({ open, onClose, mode, src, title }) {
  const prefersReducedMotion = useReducedMotion();
  const [canEmbed, setCanEmbed] = useState(true);

  useEffect(() => {
    if (open) setCanEmbed(true);
  }, [open, src, mode]);

  const header = {
    video: "Video",
    pdf: "PDF",
    pptx: "Slides",
  }[mode || "video"];

  const iframeSrc =
    mode === "pptx" ? officeEmbedUrl(src) : mode === "pdf" ? absoluteUrl(src) : "";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: prefersReducedMotion ? 0 : 0.15 } }}
          exit={{ opacity: 0, transition: { duration: prefersReducedMotion ? 0 : 0.12 } }}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} ${header} preview`}
        >
          <div className="absolute inset-0 bg-black/70" onClick={onClose} />
          <motion.div
            className="relative bg-white rounded-xl shadow-xl w-full max-w-5xl overflow-hidden"
            initial={{ scale: prefersReducedMotion ? 1 : 0.98, y: prefersReducedMotion ? 0 : 8, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1, transition: { duration: 0.18 } }}
            exit={{ scale: prefersReducedMotion ? 1 : 0.98, y: prefersReducedMotion ? 0 : 8, opacity: 0, transition: { duration: 0.12 } }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 inline-flex items-center justify-center rounded-md p-1.5 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400/40"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="bg-gray-50 px-4 py-2 border-b">
              <h3 className="text-sm font-semibold text-blue-600">
                {title} — {header} preview
              </h3>
            </div>

            {mode === "video" ? (
              <div className="aspect-video bg-black">
                <video controls playsInline className="w-full h-full">
                  <source src={src} type="video/mp4" />
                  Sorry, your browser doesn’t support embedded videos.
                </video>
              </div>
            ) : (
              <div className="bg-gray-100">
                {canEmbed ? (
                  <iframe
                    title={`${title} ${header}`}
                    src={mode === "pdf" ? `${iframeSrc}#view=FitH` : iframeSrc}
                    className="w-full h-[80vh] bg-white"
                    onError={() => setCanEmbed(false)}
                  />
                ) : (
                  <div className="h-[60vh] flex flex-col items-center justify-center text-gray-700 gap-3">
                    <AlertCircle className="text-red-500" />
                    <p>Couldn’t embed this {header}. It may require a direct open.</p>
                    <a
                      href={absoluteUrl(src)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm bg-white hover:bg-gray-50"
                    >
                      Open {header}
                    </a>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------- Preview Tile ---------- */
function MediaPreview({ project, onOpen }) {
  const [videoError, setVideoError] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const pdf = firstPdf(project.resources);
  const pptx = firstPptx(project.resources);

  if (project.video && !videoError && !prefersReducedMotion) {
    return (
      <button
        type="button"
        className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border group"
        onClick={() => onOpen("video", project.video)}
        aria-label="Open video preview"
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onError={() => setVideoError(true)}
        >
          <source src={project.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
        <div className="absolute bottom-2 right-2 inline-flex items-center gap-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          <Maximize2 size={14} /> Preview Video
        </div>
      </button>
    );
  }

  if (pdf || pptx) {
    const label = pdf ? "Preview PDF" : "Preview Slides";
    const mode = pdf ? "pdf" : "pptx";
    const src = pdf || pptx;
    const Icon = pdf ? FileText : FileSpreadsheet;

    return (
      <button
        type="button"
        className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border group bg-gradient-to-br from-gray-50 to-white"
        onClick={() => onOpen(mode, src)}
        aria-label={label}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gray-600">
          <Icon size={28} />
          <span className="text-sm">{label}</span>
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition" />
      </button>
    );
  }

  return null;
}

/* ---------- Project Card ---------- */
function ProjectCard({ p }) {
  const pdfs = p.resources?.pdfs ?? [];
  const slides = p.resources?.slides ?? [];
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("video");
  const [modalSrc, setModalSrc] = useState("");

  const openModal = (mode, src) => {
    setModalMode(mode);
    setModalSrc(src);
    setModalOpen(true);
  };

  return (
    <motion.article
      variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
      className="bg-white border rounded-xl p-4 shadow-sm flex flex-col gap-4"
      whileHover={{ y: -3 }}
    >
      <MediaPreview project={p} onOpen={openModal} />

      <div className="flex items-baseline justify-between gap-2">
        <h3 className="text-lg font-semibold text-blue-600">{p.title}</h3>
        {p.timeframe && (
          <span className="inline-block text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700">
            {p.timeframe}
          </span>
        )}
      </div>

      {p.blurb && <p className="text-gray-700">{p.blurb}</p>}

      {Array.isArray(p.tags) && p.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {p.tags.map((t, i) => (
            <span
              key={i}
              className="inline-block text-xs px-2 py-1 rounded bg-orange-50 text-orange-700 border border-orange-200"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-col md:flex-row flex-wrap gap-2 pt-2 border-t">
        <ActionButton href={p.video} icon={<Play size={16} />} aria={`Open video for ${p.title}`} variant="video">
          Play Video
        </ActionButton>
        <ActionButton href={p.repo} icon={<Github size={16} />} aria={`Open GitHub for ${p.title}`} variant="github">
          GitHub
        </ActionButton>
        <ActionButton href={p.demo} icon={<ExternalLink size={16} />} aria={`Open live demo for ${p.title}`} variant="demo">
          Live Demo
        </ActionButton>
        {pdfs.map((r, i) => (
          <ActionButton key={`pdf-${i}`} href={r.href} icon={<FileText size={16} />} aria={r.title} variant="pdf" download>
            {r.title}
          </ActionButton>
        ))}
        {slides.map((r, i) => (
          <ActionButton key={`pptx-${i}`} href={r.href} icon={<FileSpreadsheet size={16} />} aria={r.title} variant="pptx" download>
            {r.title}
          </ActionButton>
        ))}
      </div>

      <MediaModal open={modalOpen} onClose={() => setModalOpen(false)} mode={modalMode} src={modalSrc} title={p.title} />
    </motion.article>
  );
}

/* ---------- Page ---------- */
export default function Projects() {
  const prefersReducedMotion = useReducedMotion();
  const motionProps = useMemo(
    () =>
      prefersReducedMotion
        ? { initial: false, animate: "show" }
        : { initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.2 } },
    [prefersReducedMotion]
  );

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600">Projects</h1>

      <motion.div
        className="mt-8 grid md:grid-cols-2 gap-6"
        initial={prefersReducedMotion ? undefined : "hidden"}
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        {...motionProps}
      >
        {projects.map((p, i) => (
          <ProjectCard key={i} p={p} />
        ))}
      </motion.div>
    </main>
  );
}
