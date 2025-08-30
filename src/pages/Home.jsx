import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Section, Card, Pill } from "../components/ui";
import { profile } from "../data/profile";

export default function Home() {
  const p = profile;

  return (
    <div>
      {/* HERO — full screen and below navbar in stacking order */}
      <Section className="relative z-0 min-h-[100svh] bg-gradient-to-b from-orange-500/10 to-transparent flex items-center">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold tracking-tight text-blue-600"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {p.name}
            </motion.h1>

            <p className="mt-4 text-2xl font-medium text-orange-500">
              {p.title}
            </p>

            <div className="mt-6 flex flex-wrap gap-6 text-base text-blue-600">
              <span className="flex items-center gap-2">
                <MapPin size={18} /> {p.location}
              </span>
              <a
                href={`tel:${p.phone.replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-2 hover:text-orange-500"
              >
                <Phone size={18} /> {p.phone}
              </a>
              <a
                href={`mailto:${p.email}`}
                className="flex items-center gap-2 hover:text-orange-500"
              >
                <Mail size={18} /> {p.email}
              </a>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href={p.links.github}
                className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
              >
                <Github size={20} /> GitHub
              </a>
              <a
                href={p.links.linkedin}
                className="flex items-center gap-2 px-4 py-2 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
            </div>
          </div>

          {/* BIG PHOTO (no cropping of face) */}
          <div className="md:col-span-2 flex justify-center">
            <img
              src="/me2.jpeg"
              alt="Mazen El Sedfy portrait"
              className="w-72 md:w-[26rem] rounded-3xl object-contain border-4 border-orange-500 shadow-xl"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
