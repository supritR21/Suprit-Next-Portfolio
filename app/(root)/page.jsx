// app/(root)/page.jsx

"use client";

import ReactFullpage from "@fullpage/react-fullpage";
import Image from "next/legacy/image";
import { motion, animate } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";

import Button from "@/components/Button";
import Hr from "@/components/Hr";
import Sidebar from "@/components/Sidebar";
import Me from "@/public/image/me.jpg";

// ─── Animation helpers ──────────────────────────────────────────────────────
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

// ─── Animated counter ───────────────────────────────────────────────────────
function AnimatedNumber({ value }) {
  const ref = useRef(null);
  useEffect(() => {
    const num = parseInt(value);
    if (isNaN(num)) {
      if (ref.current) ref.current.textContent = value;
      return;
    }
    const ctrl = animate(0, num, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(v) {
        if (ref.current) ref.current.textContent = Math.round(v).toLocaleString();
      },
    });
    return ctrl.stop;
  }, [value]);
  return <span ref={ref}>{value}</span>;
}

// ─── Rating fetches (via server-side proxies) ───────────────────────────────
async function fetchLeetCode() {
  try {
    const r = await fetch("/api/ratings/leetcode");
    return (await r.json()).rating ?? "N/A";
  } catch { return "N/A"; }
}

async function fetchCodeChef() {
  try {
    const r = await fetch("/api/ratings/codechef");
    return (await r.json()).rating ?? "N/A";
  } catch { return "N/A"; }
}

async function fetchCodeforces() {
  try {
    const r = await fetch("https://codeforces.com/api/user.info?handles=supritr21");
    const j = await r.json();
    if (j.status === "OK") {
      const u = j.result[0];
      return u.rating ? u.rating.toString() : "Unrated";
    }
    return "N/A";
  } catch { return "N/A"; }
}

function useCPRatings() {
  const [ratings, setRatings] = useState({ leetcode: "…", codechef: "…", codeforces: "…" });
  useEffect(() => {
    Promise.all([fetchLeetCode(), fetchCodeChef(), fetchCodeforces()])
      .then(([leetcode, codechef, codeforces]) => setRatings({ leetcode, codechef, codeforces }));
  }, []);
  return ratings;
}

// ─── Shared style tokens ────────────────────────────────────────────────────
const gradientText = {
  background: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 55%, #60a5fa 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

// Two glass strengths — use as inline style on card divs
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

// ─── Small reusables ────────────────────────────────────────────────────────
function TechBadge({ label }) {
  return (
    <span
      className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold text-slate-600 hover:text-blue-700 transition-colors duration-200 cursor-default"
      style={{ background: "rgba(255,255,255,0.65)", border: "1px solid rgba(148,163,184,0.28)" }}
    >
      {label}
    </span>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function MyPage() {
  const [activeSection, setActiveSection] = useState(1);
  const ratings = useCPRatings();

  const fullpageOptions = {
    anchors: ["home-section", "about-section", "projects-section", "experience-section", "contact-section"],
    scrollingSpeed: 900,
    licenseKey: "gplv3-license",
    scrollOverflow: false,
  };

  const cpProfiles = [
    { title: "LeetCode",   rating: ratings.leetcode,   link: "https://leetcode.com/u/Suprit_Raj/",            badge: "bg-amber-50/80 text-amber-800 border-amber-200"  },
    { title: "CodeChef",   rating: ratings.codechef,   link: "https://www.codechef.com/users/suprit_r21",     badge: "bg-orange-50/80 text-orange-800 border-orange-200"},
    { title: "Codeforces", rating: ratings.codeforces, link: "https://codeforces.com/profile/supritr21",      badge: "bg-blue-50/80 text-blue-800 border-blue-200"      },
  ];

  // ─── Replace your projects array ─────────────────────────────────────────────
  const projects = [
    {
      title: "Smart Meet",
      subtitle:
        "AI-powered meeting platform with real-time transcription, cloud recording, automated summaries, personalized AI agents, and a RAG-based assistant for transcript and meeting history queries.",
      tech: ["Next.js", "PostgreSQL", "Stream SDK", "OpenAI", "Inngest", "Better-Auth", "LangGraph", "RAG"],
      link: "https://smart-meet-eight.vercel.app/",
      github: null,
      gradientBorder: "linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa)",
      tag: "AI / Full Stack",
      tagColor: "text-violet-700 bg-violet-50/80 border-violet-200",
      featured: true,
    },
    {
      title: "CrowdChain",
      subtitle: "Decentralized crowdfunding marketplace on Ethereum. Create campaigns, fund projects, and track contributions transparently — all enforced by Solidity smart contracts with no middlemen.",
      tech: ["React", "Vite", "Solidity", "Thirdweb", "Ethereum", "MetaMask"],
      link: "https://crowd-funding-marketplace-web3.vercel.app/",
      github: "https://github.com/supritR21/Crowd-Funding-Marketplace-Web3-",
      gradientBorder: "linear-gradient(135deg, #f59e0b, #f97316, #ef4444)",
      tag: "Web3 / Blockchain",
      tagColor: "text-orange-700 bg-orange-50/80 border-orange-200",
      featured: false,
    },
    {
      title: "Vitamap",
      subtitle: "Pharmacy locator with map-based search and real-time availability.",
      tech: ["Next.js", "FastAPI", "Prisma", "PostgreSQL", "Leaflet"],
      link: "https://vitamap-tqpy.vercel.app/",
      github: null,
      gradientBorder: "linear-gradient(135deg, #34d399, #06b6d4)",
      tag: "Full Stack",
      tagColor: "text-teal-700 bg-teal-50/80 border-teal-200",
      featured: false,
    },
    {
      title: "BookNest",
      subtitle: "Library management system with role-based access and cloud media.",
      tech: ["Node.js", "Express", "React", "MongoDB", "Docker"],
      link: "https://booknest-3-orzs.onrender.com/",
      github: null,
      gradientBorder: "linear-gradient(135deg, #fb7185, #e879f9)",
      tag: "Full Stack",
      tagColor: "text-pink-700 bg-pink-50/80 border-pink-200",
      featured: false,
    },
  ];

  const techStack = [
    "Next.js", "React", "TypeScript", "Node.js", "FastAPI", "Python",
    "PostgreSQL", "MongoDB", "Prisma", "Docker", "LangChain", "OpenAI API",
    "Tailwind CSS", "Framer Motion", "Redis", "Vercel",
  ];

  const socials = [
    { href: "mailto:supritr.ug23.cs@nitp.ac.in", icon: faEnvelope,  label: "Email"     },
    { href: "https://github.com/supritR21",        icon: faGithub,   label: "GitHub"    },
    { href: "https://www.linkedin.com/in/suprit-raj-04b45932b/", icon: faLinkedin, label: "LinkedIn"  },
    { href: "#",                                   icon: faInstagram, label: "Instagram" },
    { href: "https://discord.com/users/1357408252647969121", icon: faDiscord,   label: "Discord"   },
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── Fixed ambient background ── */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, #eef2ff 0%, #f5f3ff 22%, #fdf4ff 45%, #eff6ff 68%, #f0fdf4 100%)",
        }} />
        {/* Soft color blobs */}
        <div className="absolute -top-32 right-0 w-[520px] h-[520px] rounded-full" style={{ background: "radial-gradient(circle, rgba(165,180,252,0.55) 0%, transparent 68%)", filter: "blur(72px)" }} />
        <div className="absolute top-1/2 -left-32 w-[440px] h-[440px] rounded-full" style={{ background: "radial-gradient(circle, rgba(110,231,183,0.4) 0%, transparent 68%)", filter: "blur(72px)" }} />
        <div className="absolute bottom-0 left-1/3 w-[460px] h-[460px] rounded-full" style={{ background: "radial-gradient(circle, rgba(147,197,253,0.38) 0%, transparent 68%)", filter: "blur(72px)" }} />
        <div className="absolute top-2/3 right-10 w-[360px] h-[360px] rounded-full" style={{ background: "radial-gradient(circle, rgba(249,168,212,0.32) 0%, transparent 68%)", filter: "blur(64px)" }} />
      </div>

      <Sidebar activeSection={activeSection} />

      <ReactFullpage
        {...fullpageOptions}
        afterLoad={(_, dest) => setActiveSection(dest.index + 1)}
        render={() => (
          <ReactFullpage.Wrapper>

            {/* ══════════ HOME ══════════ */}
            <section className="section" data-anchor="home-section">
              <div className="h-full flex items-center pl-20 md:pl-36 pr-10 md:pr-20 overflow-x-hidden">
                <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-10 items-center max-w-6xl mx-auto">

                  {/* Text */}
                  <div className="md:col-span-3 space-y-7">

                    <motion.div {...fadeLeft(0)}>
                      <span
                        className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-blue-600 px-4 py-1.5 rounded-full"
                        style={{ background: "rgba(239,246,255,0.75)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(147,197,253,0.45)" }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                        B.Tech CSE · NIT Patna
                      </span>
                    </motion.div>

                    <motion.h1
                      {...fadeLeft(0.08)}
                      className="text-[clamp(2.9rem,6vw,5.4rem)] font-extrabold leading-[1.02] tracking-[-0.02em]"
                      style={{ ...gradientText, fontFamily: "'Sora', sans-serif" }}
                    >
                      Suprit Raj
                    </motion.h1>

                    <motion.p
                      {...fadeLeft(0.14)}
                      className="text-xl md:text-2xl font-semibold text-slate-500 tracking-tight"
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      Full Stack &amp; GenAI Developer
                    </motion.p>

                    <motion.p {...fadeLeft(0.2)} className="text-[0.94rem] text-slate-600 leading-[1.85] max-w-lg">
                      Passionate about building intelligent, scalable web apps and AI-driven systems.
                      My work spans GenAI, RAG pipelines, and full-stack development using{" "}
                      <strong className="text-slate-800 font-semibold">Next.js</strong>,{" "}
                      <strong className="text-slate-800 font-semibold">FastAPI</strong>, and{" "}
                      <strong className="text-slate-800 font-semibold">vector databases</strong>.
                    </motion.p>

                    <motion.div {...fadeLeft(0.26)} className="flex flex-wrap gap-3 pt-1">
                      <Button variation="primary">
                        <Link href="/docs/Suprit_Raj_CV.pdf" target="_blank" rel="noopener noreferrer" download>
                          Download CV
                        </Link>
                      </Button>
                      <Button variation="secondary">
                        <a href="#contact-section">Contact Me</a>
                      </Button>
                    </motion.div>

                    {/* Quick stats */}
                    <motion.div
                      {...fadeLeft(0.32)}
                      className="flex flex-wrap gap-8 pt-4"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.6)" }}
                    >
                      {[
                        { label: "Projects Shipped", value: "10+" },
                        { label: "LeetCode Rating",  value: ratings.leetcode === "…" ? "—" : ratings.leetcode },
                        { label: "Open to Work",     value: "Yes" },
                      ].map(({ label, value }) => (
                        <div key={label}>
                          <p className="text-[0.65rem] uppercase tracking-widest text-slate-400 font-bold mb-0.5">{label}</p>
                          <p className="text-2xl font-extrabold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>{value}</p>
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Photo */}
                  <motion.div {...fadeRight(0.1)} className="md:col-span-2 flex justify-center md:justify-end">
                    <div className="relative">
                      {/* Spinning dashed ring */}
                      <div
                        className="absolute -inset-5 rounded-full border border-dashed border-slate-300/50 animate-spin"
                        style={{ animationDuration: "24s" }}
                      />
                      {/* Conic glow */}
                      <div
                        className="absolute -inset-2 rounded-full opacity-55"
                        style={{ background: "conic-gradient(from 0deg, #818cf8, #60a5fa, #34d399, #f472b6, #818cf8)", filter: "blur(14px)" }}
                      />
                      {/* Photo */}
                      <div
                        className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden"
                        style={{ boxShadow: "0 0 0 4px rgba(255,255,255,0.88), 0 20px 60px rgba(99,102,241,0.22)" }}
                      >
                        <Image
                          src={Me}
                          width={400}
                          height={400}
                          alt="Portrait of Suprit Raj"
                          placeholder="blur"
                          className="object-cover object-top w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                    </div>
                  </motion.div>

                </div>
              </div>

              {/* Scroll hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.7 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
              >
                <span className="text-[0.6rem] uppercase tracking-[0.3em] text-slate-400 font-bold">Scroll</span>
                <div className="w-px h-10 bg-linear-to-b from-slate-400/50 to-transparent" />
              </motion.div>
            </section>

            {/* ══════════ ABOUT (bento — no photo) ══════════ */}
            <section className="section" data-anchor="about-section">
              <div className="h-full pl-20 md:pl-36 pr-10 md:pr-20 py-8 w-full max-w-6xl mx-auto overflow-x-hidden">

                <motion.p {...fadeUp(0)} className="text-xs font-bold tracking-[0.25em] uppercase text-slate-400 mb-8">
                  02 / About
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                  {/* Bio — 2 cols */}
                  <motion.div
                    {...fadeUp(0.05)}
                    className="md:col-span-2 rounded-2xl p-8 flex flex-col justify-between gap-6"
                    style={glassBold}
                  >
                    <div>
                      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 leading-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
                        About Me
                      </h1>
                      <Hr />
                      <p className="text-[0.9rem] text-slate-600 leading-[1.9] mt-5">
                        I'm a B.Tech CSE student at <span className="font-semibold text-slate-800">NIT Patna</span>{" "}
                        building intelligent, scalable systems at the intersection of full-stack development and GenAI.
                        I care deeply about developer experience, clean architecture, and meaningful products.
                      </p>
                      <p className="text-[0.9rem] text-slate-600 leading-[1.9] mt-3">
                        I practice DSA across competitive programming platforms to sharpen algorithmic thinking and
                        problem-solving speed. Always building, always learning.
                      </p>
                    </div>
                    <Button variation="primary">
                      <Link href="/about">Learn More</Link>
                    </Button>
                  </motion.div>

                  {/* Status card */}
                  <motion.div {...fadeUp(0.1)} className="rounded-2xl p-6 flex flex-col gap-4" style={glass}>
                    <h3 className="text-xs font-bold tracking-widest uppercase text-slate-400">Current Status</h3>
                    <div className="space-y-3.5">
                      {[
                        { label: "Location",  value: "Patna, India"   },
                        { label: "Degree",    value: "B.Tech CSE '27" },
                        { label: "Institute", value: "NIT Patna"      },
                        { label: "CGPA", value: "8.49"      },
                        { label: "Available", value: "Internships"    },
                      ].map(({ label, value }) => (
                        <div key={label}>
                          <p className="text-[0.65rem] uppercase tracking-wider text-slate-400 font-bold">{label}</p>
                          <p className="text-sm font-semibold text-slate-800">{value}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.5)" }}>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs font-bold text-emerald-700">Open to opportunities</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Tech stack — full width */}
                  <motion.div {...fadeUp(0.15)} className="md:col-span-3 rounded-2xl p-6" style={glass}>
                    <h3 className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {techStack.map((t, i) => (
                        <motion.div
                          key={t}
                          initial={{ opacity: 0, scale: 0.82 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.22, delay: i * 0.025 }}
                        >
                          <TechBadge label={t} />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* CP rating cards */}
                  {cpProfiles.map((item, i) => (
                    <motion.a
                      key={item.title}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      {...fadeUp(0.18 + i * 0.06)}
                      className="group relative rounded-2xl p-[1.5px] transition-all duration-300"
                      style={{ background: "rgba(203,213,225,0.35)" }}
                      onMouseEnter={e => e.currentTarget.style.background = "linear-gradient(135deg,#6366f1,#3b82f6)"}
                      onMouseLeave={e => e.currentTarget.style.background = "rgba(203,213,225,0.35)"}
                    >
                      <div className="rounded-[14px] p-5 flex flex-col gap-3 h-full" style={glass}>
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-bold text-slate-800" style={{ fontFamily: "'Sora', sans-serif" }}>{item.title}</h3>
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px] text-slate-300 group-hover:text-blue-500 transition-colors" />
                        </div>
                        <div>
                          <p className="text-[0.62rem] uppercase tracking-wider text-slate-400 font-bold">Max Rating</p>
                          <p className="text-3xl font-extrabold text-slate-900 mt-0.5" style={{ fontFamily: "'Sora', sans-serif" }}>
                            {item.rating === "…" ? (
                              <span className="text-slate-300 text-lg animate-pulse">Loading…</span>
                            ) : item.rating === "Unrated" ? (
                              <span className="text-slate-400 text-xl">Unrated</span>
                            ) : (
                              <AnimatedNumber value={item.rating} />
                            )}
                          </p>
                        </div>
                        <span className={`text-[0.62rem] font-bold px-2.5 py-1 rounded-full border w-fit ${item.badge}`}>
                          View Profile →
                        </span>
                      </div>
                    </motion.a>
                  ))}

                </div>
              </div>
            </section>

            {/* ══════════ PROJECTS ══════════ */}
            <section className="section overflow-hidden" data-anchor="projects-section">
              <div className="h-full flex flex-col justify-center pl-20 md:pl-36 pr-10 md:pr-20 py-8 max-w-7xl mx-auto w-full">
                <motion.p {...fadeUp(0)} className="text-xs font-bold tracking-[0.25em] uppercase text-slate-400 mb-1">
                  03 / Projects
                </motion.p>

                <motion.h1
                  {...fadeUp(0.05)}
                  className="text-5xl md:text-6xl font-extrabold mb-1"
                  style={{ ...gradientText, fontFamily: "'Sora', sans-serif" }}
                >
                  Projects
                </motion.h1>

                <motion.div {...fadeUp(0.08)} className="mb-5">
                  <Hr />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:auto-rows-[1fr] items-stretch flex-1 min-h-0">
                  {/* Left: Smart Meet */}
                  {/* ── FEATURED: Smart Meet — denser featured card ── */}
                  <motion.div
                    {...fadeUp(0.1)}
                    className="md:col-span-5 md:row-span-2 rounded-2xl p-[1.5px] group h-full"
                    style={{ background: projects[0].gradientBorder }}
                  >
                    <div className="rounded-[14px] h-full p-6 flex flex-col justify-between gap-3" style={glassBold}>
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-[0.58rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${projects[0].tagColor}`}
                        >
                          {projects[0].tag}
                        </span>
                        <div className="flex items-center gap-2">
                          <span
                            className="text-[0.58rem] font-bold uppercase tracking-widest text-violet-600 px-2.5 py-1 rounded-full"
                            style={{
                              background: "rgba(237,233,254,0.8)",
                              border: "1px solid rgba(196,181,253,0.4)",
                            }}
                          >
                            ★ Featured
                          </span>
                          <a
                            href={projects[0].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-300 hover:text-violet-500 transition-colors"
                          >
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm" />
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3">
                        {/* Reduced preview area */}
                        <div
                          className="w-full h-16 md:h-18 rounded-xl flex items-center justify-center"
                          style={{
                            background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(167,139,250,0.13))",
                            border: "1px solid rgba(167,139,250,0.18)",
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/50 border border-violet-200/40">
                              <span className="text-2xl opacity-70">🎙️</span>
                            </div>

                            <div className="space-y-1">
                              <div className="w-28 h-1.5 rounded-full bg-violet-200/60" />
                              <div className="w-20 h-1.5 rounded-full bg-violet-200/40" />
                              <div className="w-24 h-1.5 rounded-full bg-violet-200/30" />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h3
                            className="text-3xl font-extrabold text-slate-900 leading-tight"
                            style={{ fontFamily: "'Sora', sans-serif" }}
                          >
                            Smart Meet
                          </h3>
                          <p className="text-sm text-slate-500 leading-relaxed">
                            AI-powered meeting platform with real-time transcription, cloud recording,
                            automated summaries, personalized AI agents, and a RAG-based assistant for
                            meeting history and transcript queries.
                          </p>
                        </div>

                        {/* Compact feature/stats section */}
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            "Real-time transcription",
                            "Cloud recording",
                            "Auto summaries",
                            "Meeting RAG chatbot",
                            "CRM automation",
                            "AI agents + MCP tools",
                          ].map((item) => (
                            <div
                              key={item}
                              className="rounded-lg px-3 py-2 text-[0.68rem] font-semibold text-slate-600 leading-tight"
                              style={{
                                background: "rgba(255,255,255,0.66)",
                                border: "1px solid rgba(203,213,225,0.5)",
                              }}
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-1.5">
                          {projects[0].tech.map((t) => (
                            <span
                              key={t}
                              className="text-[10px] font-semibold text-slate-600 px-2.5 py-0.5 rounded-full"
                              style={{
                                background: "rgba(255,255,255,0.72)",
                                border: "1px solid rgba(203,213,225,0.55)",
                              }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between gap-3 flex-wrap">
                          <div className="flex items-center gap-2 text-[0.72rem] text-slate-500 font-semibold">
                            <span className="px-2 py-0.5 rounded-full bg-violet-50 text-violet-700 border border-violet-200">
                              In build
                            </span>
                            <span>AI SaaS</span>
                          </div>

                          <a
                            href={projects[0].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-bold text-violet-600 hover:text-violet-700 transition-colors"
                          >
                            View Live <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Right side: CrowdChain stacked over Vitamap + BookNest */}
                  <div className="md:col-span-5 md:row-span-2 flex flex-col gap-3 h-full min-h-0">
                    {/* CrowdChain */}
                    <motion.div
                      {...fadeUp(0.13)}
                      className="rounded-2xl p-[1.5px] group flex-[1.15] min-h-0"
                      style={{ background: projects[1].gradientBorder }}
                    >
                      <div className="rounded-[14px] h-full p-5 flex flex-col justify-between gap-3" style={glassBold}>
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-1.5 flex-1">
                            <span className={`text-[0.58rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${projects[1].tagColor}`}>
                              {projects[1].tag}
                            </span>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
                              {projects[1].title}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{projects[1].subtitle}</p>
                          </div>

                          <div
                            className="shrink-0 hidden md:flex items-center justify-center w-24 h-24 rounded-xl"
                            style={{
                              background: "linear-gradient(135deg, rgba(251,146,60,0.08), rgba(239,68,68,0.1))",
                              border: "1px solid rgba(251,146,60,0.18)",
                            }}
                          >
                            <span className="text-4xl opacity-70">⛓️</span>
                          </div>
                        </div>

                        <div className="flex items-end justify-between gap-3 flex-wrap">
                          <div className="flex flex-wrap gap-1.5">
                            {projects[1].tech.map((t) => (
                              <span
                                key={t}
                                className="text-[10px] font-semibold text-slate-600 px-2.5 py-0.5 rounded-full"
                                style={{ background: "rgba(255,255,255,0.72)", border: "1px solid rgba(203,213,225,0.55)" }}
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center gap-4 shrink-0">
                            <a
                              href={projects[1].github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors"
                            >
                              <FontAwesomeIcon icon={faGithub} className="text-base" /> GitHub
                            </a>
                            <a
                              href={projects[1].link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors"
                            >
                              View Live <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Bottom pair */}
                    <div className="grid grid-cols-2 gap-3 flex-1 min-h-0">
                      {projects.slice(2).map((proj, idx) => (
                        <motion.div
                          key={proj.title}
                          {...fadeUp(0.17 + idx * 0.07)}
                          className="rounded-2xl p-[1.5px] group h-full min-h-0"
                          style={{ background: proj.gradientBorder }}
                        >
                          <div className="rounded-[14px] h-full p-4 flex flex-col justify-between gap-2.5" style={glass}>
                            <div className="flex items-start justify-between">
                              <div className="space-y-1 flex-1">
                                <span
                                  className={`text-[0.55rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${proj.tagColor}`}
                                >
                                  {proj.tag}
                                </span>
                                <h3 className="text-lg font-extrabold text-slate-900 leading-snug block" style={{ fontFamily: "'Sora', sans-serif" }}>
                                  {proj.title}
                                </h3>
                              </div>
                              <a
                                href={proj.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-300 hover:text-blue-500 transition-colors shrink-0 ml-2 mt-0.5"
                              >
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm" />
                              </a>
                            </div>

                            <p className="text-[0.72rem] text-slate-500 leading-relaxed flex-1">{proj.subtitle}</p>

                            <div className="space-y-2">
                              <div className="flex flex-wrap gap-1">
                                {proj.tech.map((t) => (
                                  <span
                                    key={t}
                                    className="text-[9px] font-semibold text-slate-500 px-1.5 py-0.5 rounded-full"
                                    style={{ background: "rgba(255,255,255,0.65)", border: "1px solid rgba(203,213,225,0.45)" }}
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>

                              <a
                                href={proj.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[0.7rem] font-bold text-blue-600 hover:text-blue-700 transition-colors"
                              >
                                View Live <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[9px]" />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div {...fadeUp(0.32)} className="mt-4 flex items-center gap-4">
                  <Button variation="primary">
                    <Link href="/projects">See All Projects</Link>
                  </Button>
                  <span className="text-xs text-slate-400 font-semibold">20+ projects · more on GitHub</span>
                </motion.div>
              </div>
            </section>

            {/* ══════════ EXPERIENCE ══════════ */}
            <section className="section overflow-hidden" data-anchor="experience-section">
              {/* Warm ambient blobs for this section */}
              <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(251,191,36,0.18) 0%, transparent 65%)", filter: "blur(80px)" }} />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(251,146,60,0.14) 0%, transparent 65%)", filter: "blur(70px)" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full"
                  style={{ background: "radial-gradient(ellipse, rgba(253,230,138,0.12) 0%, transparent 70%)", filter: "blur(60px)" }} />
              </div>

              <div className="h-full w-full pl-20 md:pl-36 pr-10 md:pr-20 py-12 max-w-6xl mx-auto flex flex-col justify-center">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">

                  {/* Left — heading + timeline */}
                  <div className="flex flex-col justify-center gap-6">
                    <div>
                      <motion.p {...fadeUp(0)} className="text-xs font-bold tracking-[0.25em] uppercase text-amber-600/70 mb-2">
                        04 / Experience
                      </motion.p>
                      <motion.h1
                        {...fadeUp(0.06)}
                        className="text-5xl md:text-6xl font-extrabold leading-tight"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        <span style={{ background: "linear-gradient(135deg, #92400e 0%, #d97706 50%, #f59e0b 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                          Experience
                        </span>
                      </motion.h1>
                      <motion.div {...fadeUp(0.08)} className="mt-2 mb-0"><Hr /></motion.div>
                    </div>

                    {/* Timeline */}
                    <motion.div {...fadeUp(0.12)} className="relative pl-8" style={{ borderLeft: "2px dashed rgba(217,119,6,0.3)" }}>
                      {/* Timeline dot */}
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full shadow-md"
                        style={{ background: "linear-gradient(135deg, #f59e0b, #f97316)", boxShadow: "0 0 12px rgba(245,158,11,0.5)" }} />

                      <div className="rounded-2xl p-6"
                        style={{
                          background: "rgba(255,251,235,0.7)",
                          backdropFilter: "blur(24px)",
                          WebkitBackdropFilter: "blur(24px)",
                          border: "1px solid rgba(253,230,138,0.6)",
                          boxShadow: "0 8px 32px rgba(245,158,11,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
                        }}>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">In Progress · 2025</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
                          Building towards first role
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed mb-4">
                          Deepening expertise through personal and academic projects spanning GenAI, full-stack architecture,
                          and system design. Open to internships in AI engineering and web development.
                        </p>
                        <a href="#contact-section" className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-700 hover:text-amber-800 transition-colors">
                          Let's connect <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
                        </a>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right — stat cards */}
                  <motion.div {...fadeUp(0.16)} className="grid grid-cols-2 gap-4">
                    {[
                      { emoji: "🏗️", label: "Projects Built", value: "10+", sub: "Personal & academic" },
                      { emoji: "🧠", label: "AI/ML Focus",    value: "GenAI", sub: "RAG · LangChain · OpenAI" },
                      { emoji: "⚡", label: "LeetCode",       value: ratings.leetcode === "…" ? "—" : ratings.leetcode, sub: "Contest rating" },
                      { emoji: "🎓", label: "Expected",       value: "2027", sub: "B.Tech CSE · NIT Patna" },
                    ].map(({ emoji, label, value, sub }, i) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.18 + i * 0.07 }}
                        className="rounded-2xl p-5 flex flex-col gap-2"
                        style={{
                          background: "rgba(255,251,235,0.65)",
                          backdropFilter: "blur(20px)",
                          WebkitBackdropFilter: "blur(20px)",
                          border: "1px solid rgba(253,230,138,0.5)",
                          boxShadow: "0 4px 20px rgba(245,158,11,0.06), inset 0 1px 0 rgba(255,255,255,0.85)",
                        }}
                      >
                        <span className="text-2xl">{emoji}</span>
                        <div>
                          <p className="text-[0.62rem] uppercase tracking-wider text-amber-700/70 font-bold">{label}</p>
                          <p className="text-2xl font-extrabold text-slate-900 mt-0.5" style={{ fontFamily: "'Sora', sans-serif" }}>{value}</p>
                          <p className="text-[0.7rem] text-slate-500 mt-0.5">{sub}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                </div>
              </div>
            </section>

            {/* ══════════ CONTACT ══════════ */}
            <section className="section overflow-hidden" data-anchor="contact-section">
              {/* Warm ambient blobs */}
              <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute -bottom-20 -right-20 w-[560px] h-[560px] rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(251,146,60,0.16) 0%, transparent 65%)", filter: "blur(80px)" }} />
                <div className="absolute top-0 left-0 w-[420px] h-[420px] rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(253,186,116,0.12) 0%, transparent 65%)", filter: "blur(70px)" }} />
                <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(252,211,77,0.1) 0%, transparent 70%)", filter: "blur(60px)" }} />
              </div>

              <div className="h-full w-full pl-20 md:pl-36 pr-10 md:pr-20 py-12 max-w-6xl mx-auto flex flex-col justify-center">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center h-full">

                  {/* Left — heading + CTA */}
                  <div className="flex flex-col justify-center gap-6">
                    <div>
                      <motion.p {...fadeUp(0)} className="text-xs font-bold tracking-[0.25em] uppercase text-orange-600/70 mb-2">
                        05 / Contact
                      </motion.p>
                      <motion.h1
                        {...fadeUp(0.06)}
                        className="text-[clamp(2.8rem,5.5vw,4.6rem)] font-extrabold leading-[1.05] mb-2"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        <span style={{ background: "linear-gradient(135deg, #92400e 0%, #c2410c 45%, #f97316 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                          Let's build
                        </span>
                        <br />
                        <span className="text-slate-900">something great.</span>
                      </motion.h1>
                      <motion.div {...fadeUp(0.08)}><Hr /></motion.div>
                    </div>

                    <motion.p {...fadeUp(0.12)} className="text-[0.9rem] text-slate-500 max-w-sm leading-[1.9]">
                      Open to collaborations, internships, and new opportunities in AI and web development.
                      Drop me a line — I'd love to connect.
                    </motion.p>

                    <motion.a
                      {...fadeUp(0.15)}
                      href="mailto:supritr.ug23.cs@nitp.ac.in"
                      className="inline-flex items-center gap-2 group w-fit"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
                        style={{ background: "rgba(255,237,213,0.8)", border: "1px solid rgba(253,186,116,0.5)" }}>
                        <FontAwesomeIcon icon={faEnvelope} className="text-orange-500 text-sm" />
                      </div>
                      <span className="text-base md:text-xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors"
                        style={{ fontFamily: "'Sora', sans-serif" }}>
                        supritr.ug23.cs@nitp.ac.in
                      </span>
                    </motion.a>

                    {/* Social buttons */}
                    <motion.div {...fadeUp(0.18)} className="flex flex-wrap gap-2.5">
                      {socials.map(({ href, icon, label }, i) => (
                        <motion.a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                          whileHover={{ y: -2, scale: 1.04 }}
                          whileTap={{ scale: 0.97 }}
                          className="flex items-center gap-2 px-4 py-2 rounded-xl text-slate-700 text-sm font-semibold transition-all duration-200 hover:text-white"
                          style={{
                            background: "rgba(255,247,237,0.7)",
                            backdropFilter: "blur(16px)",
                            WebkitBackdropFilter: "blur(16px)",
                            border: "1px solid rgba(253,186,116,0.4)",
                            boxShadow: "0 2px 12px rgba(251,146,60,0.06)",
                          }}
                          onMouseEnter={e => { e.currentTarget.style.background = "#1e293b"; e.currentTarget.style.borderColor = "#1e293b"; }}
                          onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,247,237,0.7)"; e.currentTarget.style.borderColor = "rgba(253,186,116,0.4)"; }}
                        >
                          <FontAwesomeIcon icon={icon} className="text-base" />
                          {label}
                        </motion.a>
                      ))}
                    </motion.div>
                  </div>

                  {/* Right — availability card */}
                  <motion.div {...fadeUp(0.2)} className="flex flex-col gap-4">

                    {/* Big availability card */}
                    <div className="rounded-2xl p-8 flex flex-col gap-4"
                      style={{
                        background: "rgba(255,247,237,0.72)",
                        backdropFilter: "blur(28px)",
                        WebkitBackdropFilter: "blur(28px)",
                        border: "1px solid rgba(253,186,116,0.5)",
                        boxShadow: "0 8px 40px rgba(251,146,60,0.1), inset 0 1px 0 rgba(255,255,255,0.9)",
                      }}>
                      <div className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Available for hire</span>
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>
                        Open to internships &amp; collaborations
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Looking for opportunities in AI engineering, full-stack development, and open-source
                        collaboration. Based in Patna — remote-friendly.
                      </p>

                      {/* Detail rows */}
                      <div className="space-y-2.5 pt-1">
                        {[
                          { label: "Availability", value: "Immediate · Summer 2026" },
                          { label: "Preferred",    value: "Remote / Hybrid"          },
                          { label: "Roles",        value: "SWE Intern · AI Intern"   },
                        ].map(({ label, value }) => (
                          <div key={label} className="flex items-center justify-between text-sm"
                            style={{ borderTop: "1px solid rgba(253,186,116,0.25)", paddingTop: "8px" }}>
                            <span className="text-slate-400 font-semibold text-xs uppercase tracking-wide">{label}</span>
                            <span className="text-slate-800 font-semibold">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick response note */}
                    <div className="rounded-xl px-5 py-3.5 flex items-center gap-3"
                      style={{
                        background: "rgba(255,247,237,0.55)",
                        backdropFilter: "blur(16px)",
                        WebkitBackdropFilter: "blur(16px)",
                        border: "1px solid rgba(253,186,116,0.35)",
                      }}>
                      <span className="text-xl">⚡</span>
                      <p className="text-sm text-slate-600">
                        <span className="font-bold text-slate-800">Quick responder</span> — usually reply within 24 hours.
                      </p>
                    </div>

                  </motion.div>

                </div>
              </div>
            </section>

          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
}