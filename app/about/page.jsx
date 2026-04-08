"use client";

import { useEffect } from "react";
import FixedButton from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import Quote     from "./components/quote/quote.jsx";
import Skills    from "./components/skills/skills.jsx";
import Experience from "./components/experience.jsx";
import Education from "./components/education.jsx";
import About     from "./components/about/about.jsx";

export default function Page() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main
      className="relative min-h-screen overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Fixed ambient background — same as home */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, #eef2ff 0%, #f5f3ff 22%, #fdf4ff 45%, #eff6ff 68%, #f0fdf4 100%)",
        }} />
        <div className="absolute -top-32 right-0 w-[520px] h-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(165,180,252,0.5) 0%, transparent 68%)", filter: "blur(72px)" }} />
        <div className="absolute top-1/2 -left-32 w-[440px] h-[440px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(110,231,183,0.35) 0%, transparent 68%)", filter: "blur(72px)" }} />
        <div className="absolute bottom-0 left-1/3 w-[460px] h-[460px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(147,197,253,0.35) 0%, transparent 68%)", filter: "blur(72px)" }} />
        <div className="absolute top-2/3 right-10 w-[360px] h-[360px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(249,168,212,0.28) 0%, transparent 68%)", filter: "blur(64px)" }} />
      </div>

      <FixedButton href="/#about-section">
        <FontAwesomeIcon icon={faChevronLeft} className="text-slate-700" />
      </FixedButton>

      <About />
      <Skills />
      <Experience />
      <Education />
      <Quote />
    </main>
  );
}