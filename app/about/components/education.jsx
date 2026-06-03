"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faTrophy, faMedal, faAward, faChevronDown, faChevronUp, faCode } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Hr from "@/components/Hr";

import Me4 from "@/public/image/me4.jpg";
import Me5 from "@/public/image/me5.jpg";
import Me6 from "@/public/image/me6.jpg";

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

const achievementsByYear = {
  2025: [
    { icon: faCode,      title: "Developer at HackSlash and Web Club (NIT Patna)", subtitle: "Active contributor in full-stack & AI-powered open-source projects.", color: "from-blue-500 to-indigo-600" },
    { icon: faTrophy,    title: "Built 'Supplier Lens' — AI-powered Supplier Risk Detector", subtitle: "LangGraph-based GPT-4o assistant with Next.js + FastAPI.", color: "from-emerald-500 to-teal-600" },
    { icon: faAward,     title: "Built 'Vitamap' — Full-Stack Pharmacy App", subtitle: "RAG pipeline, Pinecone, and OpenStreetMap data for search.", color: "from-cyan-500 to-blue-500" },
  ],
  2024: [
    { icon: faMedal,     title: "Competitive Programming Milestone", subtitle: "Solved 450+ DSA problems across LeetCode, CodeChef, GFG.", color: "from-amber-400 to-yellow-500" },
    { icon: faTrophy,    title: "CodeChef Global Rank #1038 / #1433 in Div-4", subtitle: "Demonstrated strong problem-solving and algorithmic skills.", color: "from-orange-500 to-red-500" },
  ],
  2023: [
    { icon: faGraduationCap, title: "Joined B.Tech CSE at NIT Patna", subtitle: "Started journey toward building intelligent, scalable systems.", color: "from-slate-500 to-slate-700" },
  ],
};

const allAchievements = Object.entries(achievementsByYear)
  .sort(([a], [b]) => parseInt(b) - parseInt(a))
  .flatMap(([year, arr]) => arr.map((a) => ({ ...a, year })));

export default function Education() {
  const [isExpanded, setIsExpanded] = useState(false);
  const visible = isExpanded ? allAchievements : allAchievements.slice(0, 5);
  const hasMore = allAchievements.length > 5;

  return (
    <section className="max-w-6xl mx-auto px-8 md:px-20 py-16">

      <motion.p
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.55, ease }}
        className="text-xs font-bold tracking-[0.25em] uppercase text-slate-400 mb-2"
      >
        04 / Education
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.55, ease, delay: 0.06 }}
        className="text-5xl md:text-6xl font-extrabold mb-2"
        style={{ ...gradientText, fontFamily: "'Sora', sans-serif" }}
      >
        Education & Achievements
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.08 }}
        className="mb-12"
      >
        <Hr />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* ── Education card ── */}
        <motion.div
          initial={{ opacity: 0, x: -36 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease, delay: 0.08 }}
          className="rounded-2xl p-8 flex flex-col gap-6"
          style={glassBold}
        >
          {/* Period badge */}
          <div className="flex items-center gap-2">
            <span
              className="text-[0.62rem] font-bold uppercase tracking-widest text-indigo-700 px-2.5 py-1 rounded-full"
              style={{ background: "rgba(238,242,255,0.85)", border: "1px solid rgba(199,210,254,0.5)" }}
            >
              2023 – Present
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-extrabold text-slate-900 leading-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
              National Institute of Technology, Patna
            </h3>
            <p className="text-sm text-slate-500 mt-1 font-semibold">B.Tech in Computer Science and Engineering</p>
          </div>

          {/* Campus photo strip */}
          <div className="flex gap-2 h-36 rounded-xl overflow-hidden">
            {[Me5, Me4, Me6].map((img, i) => (
              <div key={i} className="flex-1 relative overflow-hidden rounded-xl group">
                <Image
                  src={img}
                  alt="NIT Patna Campus"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-110 transition-all duration-500"
                />
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-[0.88rem] text-slate-600 leading-[1.9]">
            Pursuing{" "}
            <span className="font-semibold text-slate-800">B.Tech CSE at NIT Patna</span>{" "}
            with strong foundations in{" "}
            <span className="font-semibold text-slate-800">DSA, DBMS, OS, and Computer Networks</span>.
            My journey blends academic rigor with hands-on AI and full-stack projects like{" "}
            <span className="font-semibold text-slate-800">Supplier Lens</span> and{" "}
            <span className="font-semibold text-slate-800">Vitamap</span>.<br /><br />
            Active developer at{" "}
            <span className="font-semibold text-slate-800">HackSlash & Web Club NIT Patna</span>,
            mentoring peers in AI and web development.
          </p>

          {/* CPI badge */}
          <div className="flex gap-2">
            <span
              className="text-xs font-bold px-3 py-1.5 rounded-full text-blue-700"
              style={{ background: "rgba(239,246,255,0.8)", border: "1px solid rgba(147,197,253,0.5)" }}
            >
              CPI: 8.46 / 10
            </span>
          </div>
        </motion.div>

        {/* ── Achievements ── */}
        <motion.div
          initial={{ opacity: 0, x: 36 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease, delay: 0.12 }}
          className="flex flex-col gap-3"
        >
          <div className="relative">
            <div className="space-y-3">
              <AnimatePresence>
                {visible.map((a, idx) => (
                  <motion.div
                    key={`${a.year}-${idx}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.4, delay: idx * 0.04 }}
                  >
                    {/* Year divider */}
                    {(idx === 0 || visible[idx - 1]?.year !== a.year) && (
                      <div className="flex items-center gap-3 mb-2 mt-1">
                        <span
                          className="text-[0.6rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full text-slate-500"
                          style={{ background: "rgba(255,255,255,0.65)", border: "1px solid rgba(203,213,225,0.5)" }}
                        >
                          {a.year}
                        </span>
                        <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgba(203,213,225,0.6), transparent)" }} />
                      </div>
                    )}

                    {/* Card */}
                    <div className="rounded-2xl p-4 flex items-start gap-4 transition-all duration-200 hover:scale-[1.01]" style={glass}>
                      <div className={`w-9 h-9 shrink-0 rounded-xl bg-linear-to-br ${a.color} flex items-center justify-center shadow-sm`}>
                        <FontAwesomeIcon icon={a.icon} className="text-white text-sm" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>{a.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{a.subtitle}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Fade overlay */}
            {!isExpanded && hasMore && (
              <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(238,242,255,0.9), transparent)" }} />
            )}
          </div>

          {hasMore && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center mt-2"
            >
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold text-slate-700 hover:text-white hover:bg-slate-900 transition-all duration-200"
                style={glass}
              >
                {isExpanded ? "Show Less" : `Show ${allAchievements.length - 5} More`}
                <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} className="text-xs" />
              </button>
            </motion.div>
          )}
        </motion.div>

      </div>
    </section>
  );
}