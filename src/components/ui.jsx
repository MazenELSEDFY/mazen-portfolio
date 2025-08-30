export const Section = ({ id, title, children, intro }) => (
  <section
    id={id}
    className="max-w-5xl mx-auto px-4 py-16"
  >
    <h2 className="text-3xl font-extrabold tracking-tight text-blue-600 mb-6">{title}</h2>
    {intro && <p className="mt-2 mb-6 text-orange-500">{intro}</p>}
    <div>{children}</div>
  </section>
);

export const Card = ({ children, className = "" }) => (
  <div className={`bg-white border rounded-2xl p-6 shadow-lg border-blue-600/10 hover:border-orange-500/30 transition-colors duration-200 ${className}`}>
    {children}
  </div>
);

export const Pill = ({ children }) => (
  <span className="inline-block text-xs px-2 py-1 rounded-md border border-blue-600/30 text-blue-600 bg-orange-500/10">
    {children}
  </span>
);