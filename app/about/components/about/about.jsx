"use client";

import { motion } from "framer-motion";
import Hr from "@/components/Hr";
import Card from "./spotify/card";
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

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease, delay },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -36 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease, delay },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 36 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease, delay },
});

const highlights = [
  { label: "Institute",  value: "NIT Patna"          },
  { label: "Degree",     value: "B.Tech CSE '27"      },
  { label: "CPI",        value: "8.46 / 10"           },
  { label: "Focus",      value: "GenAI · Full Stack"  },
  { label: "DSA Solved", value: "500+"                },
  { label: "Status",     value: "Open to Intern"      },
];

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-8 md:px-20 pt-28 pb-20">

      {/* ── Section label ── */}
      <motion.p {...fadeUp(0)} className="text-xs font-bold tracking-[0.25em] uppercase text-slate-400 mb-2">
        01 / About
      </motion.p>

      <motion.h1
        {...fadeUp(0.06)}
        className="text-[clamp(3rem,7vw,6rem)] font-extrabold leading-[1.02] tracking-[-0.025em] mb-2"
        style={{ ...gradientText, fontFamily: "'Sora', sans-serif" }}
      >
        Who Am I?
      </motion.h1>

      <motion.div {...fadeUp(0.08)} className="mb-12"><Hr /></motion.div>

      {/* ── Bento grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {/* Bio — 2 cols */}
        <motion.div
          {...fadeLeft(0.1)}
          className="md:col-span-2 rounded-2xl p-8 flex flex-col gap-5"
          style={glassBold}
        >
          <h2 className="text-3xl font-extrabold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>
            Suprit Raj
          </h2>

          <p className="text-[0.92rem] text-slate-600 leading-[1.9]">
            Hello! I'm a{" "}
            <span className="font-semibold text-slate-900">B.Tech Computer Science student at NIT Patna</span>,
            passionate about building smart and scalable software systems. I specialize in{" "}
            <span className="font-semibold text-slate-900">Full Stack and AI Development</span>{" "}
            — from robust web apps using{" "}
            <span className="font-semibold text-slate-900">Next.js & FastAPI</span>{" "}
            to{" "}
            <span className="font-semibold text-slate-900">RAG pipelines and LLM integrations</span>{" "}
            that make technology more intelligent and useful.
          </p>

          <p className="text-[0.92rem] text-slate-600 leading-[1.9]">
            My projects include{" "}
            <span className="font-semibold text-slate-900">Smart Meet</span>,{" "}
            <span className="font-semibold text-slate-900">Vitamap</span>,{" "}
            <span className="font-semibold text-slate-900">BookNest</span>, and a{" "}
            <span className="font-semibold text-slate-900">Web3 CrowdFunding Marketplace</span>{" "}
            — combining AI, data engineering, and full-stack architecture to solve real problems.
            I'm also a competitive programmer with 450+ DSA problems solved and an active member of{" "}
            <span className="font-semibold text-slate-900">HackSlash & Web Club at NIT Patna</span>.
          </p>

          <p className="text-[0.92rem] text-slate-600 leading-[1.9]">
            Beyond coding I love exploring{" "}
            <span className="font-semibold text-slate-900">Generative AI</span>,{" "}
            <span className="font-semibold text-slate-900">RAG systems</span>, and{" "}
            <span className="font-semibold text-slate-900">Blockchain</span>. I believe in lifelong
            learning and staying at the forefront of emerging tech.
          </p>

          {/* Spotify card */}
          <div className="pt-2">
            <Card />
          </div>
        </motion.div>

        {/* Right column */}
        <div className="flex flex-col gap-5">

          {/* Highlight stats */}
          <motion.div {...fadeRight(0.1)} className="rounded-2xl p-6 grid grid-cols-2 gap-4" style={glass}>
            {highlights.map(({ label, value }) => (
              <div key={label}>
                <p className="text-[0.6rem] uppercase tracking-wider text-slate-400 font-bold">{label}</p>
                <p className="text-sm font-extrabold text-slate-900 mt-0.5" style={{ fontFamily: "'Sora', sans-serif" }}>
                  {value}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Open-to-work card */}
          <motion.div {...fadeRight(0.16)} className="rounded-2xl p-6 flex flex-col gap-3" style={glass}>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Open to opportunities</span>
            </div>
            <h3 className="text-base font-bold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>
              Looking for internships
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Available for Summer 2025 internships in AI engineering, full-stack
              development, and open-source collaboration. Remote-friendly.
            </p>
            <a
              href="mailto:supritr.ug23.cs@nitp.ac.in"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors mt-1"
            >
              Get in touch <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px]" />
            </a>
          </motion.div>

          {/* Clubs */}
          <motion.div {...fadeRight(0.22)} className="rounded-2xl p-6 flex flex-col gap-3" style={glass}>
            <p className="text-[0.6rem] uppercase tracking-wider text-slate-400 font-bold">Clubs & Orgs</p>
            {[
              { name: "HackSlash NIT Patna", role: "Full Stack Developer" },
              { name: "Web Club NIT Patna",  role: "Web Developer"        },
            ].map(({ name, role }) => (
              <div key={name} className="flex flex-col">
                <span className="text-sm font-bold text-slate-800" style={{ fontFamily: "'Sora', sans-serif" }}>{name}</span>
                <span className="text-xs text-slate-500">{role}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}