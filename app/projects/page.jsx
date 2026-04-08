"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/image";
import Hr from "@/components/Hr";
import ProjectCard from "./components/ProjectCard";
import Projects from "@/json/data.json";
import FixedButton from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import SmartMeet1 from "@/public/image/projects/web/smartmeet/smartmeet-1.jpg";
import SmartMeet2 from "@/public/image/projects/web/smartmeet/smartmeet-2.jpg";
import SmartMeet3 from "@/public/image/projects/web/smartmeet/smartmeet-3.jpg";

const ease = [0.16, 1, 0.3, 1];
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

const category = { 1: "Web Development", 2: "AI & Machine Learning" };

export default function Page() {
  const [activeCategory, setActiveCategory] = useState("1");
  const projects = Projects.Projects.filter((item) => item.show === true);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main
      className="relative min-h-screen overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Fixed ambient background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, #eef2ff 0%, #f5f3ff 22%, #fdf4ff 45%, #eff6ff 68%, #f0fdf4 100%)",
        }} />
        <div className="absolute -top-32 right-0 w-[520px] h-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(165,180,252,0.5) 0%, transparent 68%)", filter: "blur(72px)" }} />
        <div className="absolute top-1/2 -left-32 w-[440px] h-[440px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(110,231,183,0.35) 0%, transparent 68%)", filter: "blur(72px)" }} />
        <div className="absolute bottom-0 right-1/4 w-[460px] h-[460px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(147,197,253,0.35) 0%, transparent 68%)", filter: "blur(72px)" }} />
      </div>

      {/* Back button */}
      <FixedButton href="/#projects-section">
        <FontAwesomeIcon icon={faChevronLeft} className="text-slate-700" />
      </FixedButton>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-24 pt-28 pb-16 max-w-7xl mx-auto">

        <motion.div {...fadeLeft(0)} className="mb-3">
          <span
            className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] uppercase text-blue-600 px-4 py-1.5 rounded-full"
            style={{ background: "rgba(239,246,255,0.75)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(147,197,253,0.45)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Portfolio · Work
          </span>
        </motion.div>

        <motion.h1
          {...fadeLeft(0.07)}
          className="text-[clamp(3.5rem,8vw,7rem)] font-extrabold leading-[1.0] tracking-[-0.025em] mb-4"
          style={{ ...gradientText, fontFamily: "'Sora', sans-serif" }}
        >
          My Projects
        </motion.h1>

        <motion.div {...fadeLeft(0.1)} className="mb-6"><Hr /></motion.div>

        <motion.p {...fadeLeft(0.14)} className="text-base text-slate-500 max-w-xl leading-[1.85] mb-10">
          A curated collection of my featured work — spanning AI systems, modern web
          applications, Web3 platforms, and innovative solutions built to solve real-world problems.
        </motion.p>

        {/* Hero stat row */}
        <motion.div {...fadeLeft(0.18)} className="flex flex-wrap gap-10 mb-14">
          {[
            { label: "Total Projects", value: `${Projects.Projects.length}+` },
            { label: "AI / GenAI",     value: "3+"  },
            { label: "Web3",           value: "1"   },
            { label: "Open Source",    value: "Yes" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-[0.62rem] uppercase tracking-widest text-slate-400 font-bold mb-0.5">{label}</p>
              <p className="text-3xl font-extrabold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>{value}</p>
            </div>
          ))}
        </motion.div>

        {/* Floating image collage */}
        <div className="absolute right-8 md:right-24 top-28 w-[42vw] max-w-lg hidden md:block">
          <motion.div
            {...fadeRight(0.08)}
            className="relative h-[480px]"
          >
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7, ease }}
              className="absolute top-0 left-0 w-[62%] aspect-video rounded-2xl overflow-hidden shadow-2xl"
              style={{ boxShadow: "0 20px 60px rgba(99,102,241,0.2)" }}
            >
              <Image src={SmartMeet1} alt="SmartMeet" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </motion.div>
            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 2 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.7, ease }}
              className="absolute top-12 right-0 w-[46%] aspect-video rounded-2xl overflow-hidden shadow-xl"
              style={{ boxShadow: "0 16px 48px rgba(139,92,246,0.18)" }}
            >
              <Image src={SmartMeet3} alt="SmartMeet" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </motion.div>
            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: -1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.7, ease }}
              className="absolute bottom-0 left-10 w-[58%] aspect-video rounded-2xl overflow-hidden shadow-xl"
              style={{ boxShadow: "0 16px 40px rgba(59,130,246,0.15)" }}
            >
              <Image src={SmartMeet2} alt="SmartMeet" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div {...fadeLeft(0.22)}>
          <Button variation="primary">
            <a onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })} className="cursor-pointer">
              View Projects ↓
            </a>
          </Button>
        </motion.div>

      </section>

      {/* ── FEATURED: SMART MEET ── */}
      <section className="relative px-8 md:px-24 py-20 max-w-7xl mx-auto">

        {/* Section label */}
        <motion.div {...fadeUp(0)} className="mb-10 flex items-center gap-4">
          <div className="w-8 h-px bg-slate-300" />
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-slate-400">Featured Project</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Images */}
          <motion.div {...fadeLeft(0.06)} className="relative h-[380px] md:h-[440px]">
            {[
              { src: SmartMeet1, cls: "top-16 left-0 w-[58%]", delay: 0.1, rotate: -2 },
              { src: SmartMeet3, cls: "top-0 right-4 w-[44%]",  delay: 0.2, rotate: 2  },
              { src: SmartMeet2, cls: "bottom-0 right-0 w-[55%]", delay: 0.3, rotate: -1 },
            ].map(({ src, cls, delay, rotate }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay, duration: 0.65, ease }}
                className={`absolute ${cls} aspect-video rounded-2xl overflow-hidden`}
                style={{ rotate: `${rotate}deg`, boxShadow: "0 16px 48px rgba(99,102,241,0.18)" }}
              >
                <Image src={src} alt="SmartMeet" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.div {...fadeRight(0.08)} className="flex flex-col gap-6">
            <div>
              <span
                className="text-[0.62rem] font-bold uppercase tracking-widest text-violet-600 px-2.5 py-1 rounded-full mb-3 inline-block"
                style={{ background: "rgba(237,233,254,0.8)", border: "1px solid rgba(196,181,253,0.4)" }}
              >
                ★ Featured
              </span>
              <h2
                className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mt-2"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Smart Meet
              </h2>
            </div>

            <p className="text-[0.9rem] text-slate-500 leading-[1.9]">
              An AI-powered meeting platform that records, transcribes, and summarizes meetings in real time.
              Features intelligent AI agents for instant summaries, action-item extraction, highlights,
              and deep insights across every conversation.
            </p>

            <div className="flex flex-wrap gap-1.5">
              {["Next.js 15", "TypeScript", "OpenAI", "Stream SDK", "Drizzle ORM", "tRPC", "TanStack Query"].map((t) => (
                <span key={t} className="text-[11px] font-semibold text-slate-600 px-2.5 py-0.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.72)", border: "1px solid rgba(203,213,225,0.55)" }}>
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <Button variation="primary">
                <Link href="/projects/smartmeet">View Details</Link>
              </Button>

              <a
                href="https://github.com/supritR21/Smart-Meet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-900 hover:text-white"
                style={glass}
              >
                <FontAwesomeIcon icon={faGithub} className="text-base" />
                GitHub
              </a>

              <a
                href="https://smart-meet-eight.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-violet-600 hover:text-violet-700 transition-colors"
                style={glass}
              >
                Live Demo
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── OTHER PROJECTS ── */}
      <section className="px-8 md:px-24 py-16 max-w-7xl mx-auto">

        {/* Divider + header */}
        <motion.div {...fadeUp(0)} className="mb-4 flex items-center gap-4">
          <div className="w-8 h-px bg-slate-300" />
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-slate-400">All Projects</span>
        </motion.div>

        <motion.h2
          {...fadeUp(0.05)}
          className="text-4xl md:text-5xl font-extrabold mb-3"
          style={{ ...gradientText, fontFamily: "'Sora', sans-serif" }}
        >
          Other Noteworthy Projects
        </motion.h2>
        <motion.div {...fadeUp(0.08)} className="mb-8"><Hr /></motion.div>

        {/* Category filter */}
        <motion.div {...fadeUp(0.1)} className="flex flex-wrap gap-2.5 mb-10">
          {Object.keys(category).map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className="px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-250"
              style={
                activeCategory === key
                  ? { background: "linear-gradient(135deg, #1d4ed8, #6366f1)", color: "#fff", border: "1px solid transparent", boxShadow: "0 4px 16px rgba(99,102,241,0.3)" }
                  : { ...glass, color: "#475569" }
              }
            >
              {category[key]}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              activeCategory={activeCategory}
            />
          ))}
        </div>

        {/* Archive CTA */}
        <motion.div {...fadeUp(0.1)} className="flex items-center gap-4">
          <Button variation="primary">
            <Link href="/projects/archive">View Full Archive</Link>
          </Button>
          <span className="text-xs text-slate-400 font-semibold">All {Projects.Projects.length} projects</span>
        </motion.div>

      </section>

    </main>
  );
}