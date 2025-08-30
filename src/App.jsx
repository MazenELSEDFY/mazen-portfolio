import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "./data/profile";

const Section = ({ id, title, children }) => (
  <section id={id} className="max-w-5xl mx-auto px-4 py-16">
    <motion.h2
      className="text-3xl font-bold mb-6"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {title}
    </motion.h2>
    <div>{children}</div>
  </section>
);

export default function App() {
  const p = profile;
  return (
    <div>
      {/* Navbar */}
      <header className="sticky top-0 bg-white/80 backdrop-blur border-b z-10">
        <nav className="max-w-5xl mx-auto px-4 h-14 flex items-center gap-6 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#education" className="hover:underline">Education</a>
          <a href="#certificates" className="hover:underline">Certificates</a>
          <a href="#contact" className="ml-auto hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-100 to-transparent">
        <div className="max-w-5xl mx-auto px-4 py-20">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {p.name}
          </motion.h1>
          <p className="mt-3 text-xl text-gray-700">{p.title}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-2"><MapPin size={16} /> {p.location}</span>
            <a href={`tel:${p.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-2 hover:underline">
              <Phone size={16} /> {p.phone}
            </a>
            <a href={`mailto:${p.email}`} className="flex items-center gap-2 hover:underline">
              <Mail size={16} /> {p.email}
            </a>
          </div>
          <div className="mt-6 flex gap-3">
            <a href={p.links.github} className="flex items-center gap-2 px-3 py-2 border rounded-md hover:bg-gray-50">
              <Github size={18} /> GitHub
            </a>
            <a href={p.links.linkedin} className="flex items-center gap-2 px-3 py-2 border rounded-md hover:bg-gray-50">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About Me">
        <p className="text-gray-700 leading-7">{p.summary}</p>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(p.skills).map(([k, vals]) => (
            <div key={k} className="bg-white border rounded-xl p-4">
              <h3 className="font-semibold mb-2 capitalize">{k}</h3>
              <p className="text-gray-700">{vals.join(", ")}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="space-y-6">
          {p.experience.map((e, idx) => (
            <div key={idx} className="bg-white border rounded-xl p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">{e.role} — {e.org}</h3>
                <span className="text-sm text-gray-600">{e.period}</span>
              </div>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        {p.education.map((ed, i) => (
          <div key={i} className="bg-white border rounded-xl p-4">
            <h3 className="font-semibold">{ed.degree}</h3>
            <p className="text-gray-700">{ed.school} — {ed.grad}</p>
            <p className="text-gray-700 mt-2"><span className="font-medium">Graduation Project:</span> {ed.project}</p>
          </div>
        ))}
      </Section>

      {/* Certificates */}
      <Section id="certificates" title="Certificates">
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          {p.certificates.map((c, i) => <li key={i}>{c}</li>)}
        </ul>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="space-y-2 text-gray-700">
          <p><span className="font-medium">Email:</span> <a className="hover:underline" href={`mailto:${p.email}`}>{p.email}</a></p>
          <p><span className="font-medium">LinkedIn:</span> <a className="hover:underline" href={p.links.linkedin}>{p.links.linkedin}</a></p>
          <p><span className="font-medium">GitHub:</span> <a className="hover:underline" href={p.links.github}>{p.links.github}</a></p>
        </div>
      </Section>

      <footer className="border-t">
        <div className="max-w-5xl mx-auto px-4 py-8 text-sm text-gray-600">
          © {new Date().getFullYear()} {p.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

