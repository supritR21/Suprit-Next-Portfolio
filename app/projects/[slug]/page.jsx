"use client";

import { useState, useEffect, use } from "react";
import { motion } from "framer-motion";
import jsonData from "@/json/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faChevronLeft, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import NotFound from "@/app/not-found";
import Image from "next/image";
import BlurImage from "@/public/image/placeholder/blur.jpg";
import FixedButton from "@/components/FixedButton";
import Hr from "@/components/Hr";

const ease = [0.16, 1, 0.3, 1];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
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
  background: "rgba(255,255,255,0.55)",
  backdropFilter: "blur(22px)",
  WebkitBackdropFilter: "blur(22px)",
  border: "1px solid rgba(255,255,255,0.78)",
  boxShadow: "0 4px 24px rgba(0,0,0,0.055), inset 0 1px 0 rgba(255,255,255,0.9)",
};

const glassBold = {
  background: "rgba(255,255,255,0.7)",
  backdropFilter: "blur(32px)",
  WebkitBackdropFilter: "blur(32px)",
  border: "1px solid rgba(255,255,255,0.88)",
  boxShadow: "0 8px 36px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.95)",
};

function ScrollButton() {
  const [atBottom, setAtBottom] = useState(false);
  const handle = () => {
    const el = document.documentElement;
    if (el.scrollTop < el.scrollHeight - el.clientHeight - 50) {
      window.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
      setAtBottom(true);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setAtBottom(false);
    }
  };
  return (
    <div className="fixed bottom-8 left-0 right-0 flex justify-center z-50">
      <motion.button
        onClick={handle}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.94 }}
        className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm"
        style={{ background: "linear-gradient(135deg, #1d4ed8, #6366f1)", boxShadow: "0 8px 24px rgba(99,102,241,0.4)" }}
      >
        <FontAwesomeIcon icon={atBottom ? faChevronUp : faChevronDown} />
      </motion.button>
    </div>
  );
}

export default function Page(props) {
  const params = use(props.params);
  const [data, setData] = useState(null);

  useEffect(() => {
    const found = jsonData.Projects.find((item) => item.slug === params.slug);
    setData(found ?? "404");
  }, [params.slug]);

  if (data === "404") return <NotFound />;

  if (!data)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="space-y-4 w-full max-w-2xl px-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse rounded-2xl h-12 bg-slate-200/60" />
          ))}
        </div>
      </div>
    );

  return (
    <div
      className="relative min-h-screen"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Fixed ambient background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, #eef2ff 0%, #f5f3ff 22%, #fdf4ff 45%, #eff6ff 68%, #f0fdf4 100%)",
        }} />
        <div className="absolute -top-32 right-0 w-[520px] h-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(165,180,252,0.5) 0%, transparent 68%)", filter: "blur(72px)" }} />
        <div className="absolute bottom-0 left-1/4 w-[460px] h-[460px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(147,197,253,0.35) 0%, transparent 68%)", filter: "blur(72px)" }} />
      </div>

      <FixedButton href="/projects">
        <FontAwesomeIcon icon={faChevronLeft} className="text-slate-700" />
      </FixedButton>
      <ScrollButton />

      {/* ── HEADER ── */}
      <div className="max-w-6xl mx-auto px-8 md:px-20 pt-28 pb-16">

        <motion.div {...fadeUp(0)} className="mb-3">
          <span className="text-xs font-bold tracking-[0.22em] uppercase text-slate-400">Project Details</span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.06)}
          className="text-[clamp(2.8rem,6vw,5.5rem)] font-extrabold leading-[1.02] tracking-[-0.02em] mb-3"
          style={{ ...gradientText, fontFamily: "'Sora', sans-serif" }}
        >
          {data.title}
        </motion.h1>

        <motion.div {...fadeUp(0.08)} className="mb-12"><Hr /></motion.div>

        {/* ── META GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">

          {/* Left: meta info */}
          <motion.div {...fadeUp(0.1)} className="md:col-span-1 flex flex-col gap-4">

            {/* Year */}
            <div className="rounded-2xl p-5" style={glass}>
              <p className="text-[0.62rem] uppercase tracking-wider text-slate-400 font-bold mb-1">Year</p>
              <p className="text-2xl font-extrabold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>{data.year}</p>
            </div>

            {/* Tech */}
            <div className="rounded-2xl p-5" style={glass}>
              <p className="text-[0.62rem] uppercase tracking-wider text-slate-400 font-bold mb-3">Technology</p>
              <div className="flex flex-wrap gap-1.5">
                {data.tech.map((t, i) => (
                  <span key={i} className="text-[11px] font-semibold text-slate-600 px-2.5 py-0.5 rounded-full"
                    style={{ background: "rgba(255,255,255,0.72)", border: "1px solid rgba(203,213,225,0.55)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="rounded-2xl p-5 flex flex-col gap-3" style={glass}>
              <p className="text-[0.62rem] uppercase tracking-wider text-slate-400 font-bold">Links</p>
              {data.preview && (
                <a href={data.preview} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group">
                  Live Preview
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
              {data.code && (
                <a href={data.code} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-slate-900 transition-colors">
                  <FontAwesomeIcon icon={faGithub} className="text-base" />
                  GitHub Repository
                </a>
              )}
            </div>
          </motion.div>

          {/* Right: description */}
          <motion.div {...fadeUp(0.12)} className="md:col-span-2 rounded-2xl p-8" style={glassBold}>
            <p className="text-[0.62rem] uppercase tracking-wider text-slate-400 font-bold mb-5">Description</p>
            <div className="space-y-4">
              {data.desc.map((d, i) => (
                <p key={i} className="text-[0.92rem] text-slate-600 leading-[1.9]">{d}</p>
              ))}
            </div>
          </motion.div>

        </div>

        {/* ── GALLERY ── */}
        {data.images?.length > 0 && (
          <motion.div {...fadeUp(0.15)}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-slate-300" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-slate-400">Gallery</span>
            </div>

            <div className="space-y-6">
              {data.images.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease, delay: i * 0.08 }}
                  className="rounded-2xl overflow-hidden p-[1.5px]"
                  style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.2), rgba(59,130,246,0.25))" }}
                >
                  <div className="rounded-[14px] overflow-hidden" style={glass}>
                    <Image
                      src={img}
                      alt={`${data.title} Screenshot ${i + 1}`}
                      placeholder="blur"
                      blurDataURL={BlurImage.src}
                      width={1920}
                      height={1080}
                      sizes="(max-width: 768px) 100vw, 90vw"
                      className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}