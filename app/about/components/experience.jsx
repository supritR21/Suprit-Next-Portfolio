"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Hr from "@/components/Hr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ease = [0.16, 1, 0.3, 1];

const gradientText = {
  background: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 55%, #60a5fa 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const glass = {
  background: "rgba(255,255,255,0.52)",
  backdropFilter: "blur(22px)",
  WebkitBackdropFilter: "blur(22px)",
  border: "1px solid rgba(255,255,255,0.72)",
  boxShadow: "0 4px 24px rgba(0,0,0,0.055), inset 0 1px 0 rgba(255,255,255,0.9)",
};

const glassBold = {
  background: "rgba(255,255,255,0.68)",
  backdropFilter: "blur(32px)",
  WebkitBackdropFilter: "blur(32px)",
  border: "1px solid rgba(255,255,255,0.85)",
  boxShadow: "0 8px 36px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.95)",
};

const experiences = [
  {
    id: 1,
    startDate: "Apr 2024",
    endDate: "Present",
    company: "HackSlash NIT Patna",
    position: "Full Stack Developer",
    type: "Core Team Member",
    location: "Patna, India",
    accent: "from-violet-500 to-indigo-600",
    description: "Contributing to HackSlash's open-source and internal projects focused on web applications and AI-powered solutions. Collaborate in a team to build scalable systems using modern web technologies.",
    skills: ["Next.js", "React", "Node.js", "Express.js", "TailwindCSS", "Git"],
  },
  {
    id: 2,
    startDate: "Jan 2024",
    endDate: "Present",
    company: "Web Club NIT Patna",
    position: "Web Developer",
    type: "Student Organization",
    location: "Patna, India",
    accent: "from-blue-500 to-cyan-500",
    description: "Worked on the design and development of official club web portals. Implemented responsive interfaces, optimized UI/UX design, and introduced collaborative version control workflows.",
    skills: ["React", "Next.js", "Figma", "GitHub", "UI/UX Design"],
  },
  {
    id: 3,
    startDate: "Mar 2024",
    endDate: "Jul 2024",
    company: "Freelance",
    position: "AI Developer & Consultant",
    type: "Freelance (Remote)",
    location: "Remote, India",
    accent: "from-emerald-500 to-teal-500",
    description: "Delivered AI integration solutions for startups and student-led projects, specializing in RAG pipelines, LangChain workflows, and OpenAI/Gemini API integrations with FastAPI backends.",
    skills: ["FastAPI", "LangChain", "OpenAI API", "Gemini API", "Python", "Next.js"],
  },
  {
    id: 4,
    startDate: "Aug 2023",
    endDate: "Feb 2024",
    company: "Personal Project – Supplier Lens",
    position: "Lead Developer",
    type: "Academic Project",
    location: "Patna, India",
    accent: "from-amber-500 to-orange-500",
    description: "Built an AI-powered supplier risk analysis system integrating GPT-4o with a LangGraph-based multi-agent pipeline. Designed a modern dashboard using Next.js and FastAPI backend.",
    skills: ["Next.js", "FastAPI", "LangGraph", "OpenAI GPT-4o", "MongoDB", "TypeScript"],
  },
  {
    id: 5,
    startDate: "May 2023",
    endDate: "Jan 2024",
    company: "Personal Project – Vitamap",
    position: "Full Stack Developer",
    type: "Independent Project",
    location: "Patna, India",
    accent: "from-pink-500 to-rose-500",
    description: "Developed a pharmacy web platform integrating OpenStreetMap APIs, Pinecone vector storage, and RAG search for intelligent medicine retrieval. Focused on backend scalability and UI responsiveness.",
    skills: ["Next.js", "FastAPI", "RAG", "Pinecone", "OpenStreetMap", "Python"],
  },
  {
    id: 6,
    startDate: "2023",
    endDate: "Present",
    company: "Freelance",
    position: "Full Stack Web Developer",
    type: "Freelance",
    location: "Remote, India",
    accent: "from-slate-500 to-slate-700",
    description: "Delivered several client-based web solutions using MERN and Next.js stacks. Worked closely with clients to define requirements, create wireframes, and deploy applications to production.",
    skills: ["React", "Next.js", "MongoDB", "Node.js", "Express.js", "Docker"],
  },
].reverse();

export default function Experience() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? experiences : experiences.slice(0, 3);

  return (
    <section className="max-w-6xl mx-auto px-8 md:px-20 py-16">

      <motion.p
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.55, ease }}
        className="text-xs font-bold tracking-[0.25em] uppercase text-slate-400 mb-2"
      >
        03 / Experience
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.55, ease, delay: 0.06 }}
        className="text-5xl md:text-6xl font-extrabold mb-2"
        style={{ ...gradientText, fontFamily: "'Sora', sans-serif" }}
      >
        Experience
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.08 }}
        className="mb-12"
      >
        <Hr />
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-[19px] top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(to bottom, rgba(99,102,241,0.5), rgba(99,102,241,0.05))" }}
        />

        <div className="space-y-6">
          <AnimatePresence>
            {displayed.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.5, ease, delay: i * 0.07 }}
                className="relative pl-12"
              >
                {/* Dot */}
                <div
                  className="absolute left-0 top-6 w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-md"
                  style={{ background: `linear-gradient(135deg, ${exp.accent.replace("from-", "").replace(" to-", ", ")})`.replace(/\s/g, ""),
                    background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))` }}
                >
                  <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${exp.accent} flex items-center justify-center shadow-md`}>
                    <span className="text-[10px] font-extrabold text-white">{exp.startDate.split(" ")[1] || exp.startDate}</span>
                  </div>
                </div>

                {/* Card */}
                <div className="rounded-2xl p-6" style={glassBold}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>
                        {exp.company}
                      </h3>
                      <div className="flex items-center gap-2 flex-wrap mt-0.5">
                        <span className="text-sm font-semibold text-slate-700">{exp.position}</span>
                        <span
                          className="text-[0.6rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full text-slate-500"
                          style={{ background: "rgba(255,255,255,0.65)", border: "1px solid rgba(203,213,225,0.5)" }}
                        >
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs font-bold text-slate-500">{exp.startDate} — {exp.endDate}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{exp.location}</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((s) => (
                      <span key={s} className="text-[11px] font-semibold text-slate-600 px-2.5 py-0.5 rounded-full"
                        style={{ background: "rgba(255,255,255,0.72)", border: "1px solid rgba(203,213,225,0.55)" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom fade */}
        {!showAll && (
          <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(238,242,255,0.9), transparent)" }} />
        )}
      </div>

      {/* Show more/less */}
      {experiences.length > 3 && (
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="flex justify-center mt-8"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-slate-700 hover:text-white hover:bg-slate-900 transition-all duration-200"
            style={glass}
          >
            {showAll ? "Show Less ↑" : `View ${experiences.length - 3} More ↓`}
          </button>
        </motion.div>
      )}

    </section>
  );
}