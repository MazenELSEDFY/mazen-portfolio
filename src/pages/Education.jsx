import { Section, Card } from "../components/ui";
import { profile } from "../data/profile";

/* Inline icons */
function IconFile(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8zm0 2.5L18.5 9H14z" />
    </svg>
  );
}
function IconExternal(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14zM5 5h6v2H7v10h10v-4h2v6H5z"/>
    </svg>
  );
}
function IconDownload(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M5 20h14v-2H5v2zm7-18-5 5h3v6h4V7h3l-5-5z"/>
    </svg>
  );
}

export default function Education() {
  const education = Array.isArray(profile.education) ? profile.education : [];

  return (
    <Section title="Education">
      <div className="space-y-6"> {/* full-width vertical stack */}
        {education.map((ed, idx) => {
          const { degree, school, grad, project, projectPdf, schoolLogo } = ed || {};

          return (
            <Card key={idx} className="w-full overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-orange-500/15 via-blue-500/10 to-transparent p-5 rounded-xl mb-4">
                <div className="flex items-center gap-5">
                  {schoolLogo && (
                    <img
                      src={schoolLogo}
                      alt={`${school} logo`}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-lg border object-contain bg-white/80 shadow-sm"
                      loading="lazy"
                    />
                  )}
                  <div>
                    <h3 className="font-semibold text-brand.blue text-xl leading-tight">
                      {degree || "Degree"}
                    </h3>
                    <p className="text-brand.blue/90">
                      {school || "Institution"} —{" "}
                      <span className="text-brand.orange">{grad || "Graduation"}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="grid lg:grid-cols-5 gap-6 items-start">
                <div className="lg:col-span-3">
                  {project && (
                    <p className="leading-relaxed">
                      <span className="font-medium text-brand.orange">Graduation Project: </span>
                      <span className="text-brand.blue/90">{project}</span>
                    </p>
                  )}

                  {projectPdf && (
                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href={projectPdf}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium text-brand.blue hover:bg-blue-50 transition cursor-pointer"
                      >
                        <IconFile />
                        View Project Book (PDF)
                        <IconExternal className="ml-1" />
                      </a>
                      <a
                        href={projectPdf}
                        download
                        className="inline-flex items-center gap-2 rounded-full bg-brand.orange text-white px-4 py-2 text-sm font-medium hover:opacity-90 transition"
                      >
                        <IconDownload />
                        Download PDF
                      </a>
                    </div>
                  )}
                </div>

                {/* PDF preview */}
                {projectPdf && (
                  <div className="lg:col-span-2">
                    <div className="relative group rounded-xl border overflow-hidden shadow-sm">
                      <embed
                        src={`${projectPdf}#toolbar=0&navpanes=0&scrollbar=0`}
                        type="application/pdf"
                        className="w-full h-64 lg:h-72"
                      />
                      <a
                        href={projectPdf}
                        target="_blank"
                        rel="noreferrer"
                        className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition cursor-pointer"
                      >
                        <span className="text-white text-sm md:text-base font-medium inline-flex items-center gap-2">
                          <IconFile />
                          Open PDF
                        </span>
                      </a>
                    </div>
                    <p className="mt-2 text-xs text-brand.blue/70">
                      Preview may be limited on some browsers. Use the buttons above to open or download.
                    </p>
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
