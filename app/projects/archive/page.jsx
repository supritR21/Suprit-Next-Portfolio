"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import FixedButton from "@/components/FixedButton";
import Projects from "@/json/data.json";
import Link from "next/link";
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
  border: "1px solid rgba(255,255,255,0.75)",
  boxShadow: "0 4px 24px rgba(0,0,0,0.055), inset 0 1px 0 rgba(255,255,255,0.9)",
};

export default function Page() {
  const projects = Projects.Projects;

  return (
    <main
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
        <div className="absolute bottom-0 left-1/3 w-[460px] h-[460px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(147,197,253,0.35) 0%, transparent 68%)", filter: "blur(72px)" }} />
      </div>

      <FixedButton href="/projects">
        <FontAwesomeIcon icon={faChevronLeft} className="text-slate-700" />
      </FixedButton>

      {/* Header */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 pt-28 pb-10">
        <motion.p {...fadeUp(0)} className="text-xs font-bold tracking-[0.25em] uppercase text-slate-400 mb-2">
          Archive · All Work
        </motion.p>
        <motion.h1
          {...fadeUp(0.06)}
          className="text-[clamp(3rem,7vw,6rem)] font-extrabold leading-[1.02] tracking-[-0.02em] mb-2"
          style={{ ...gradientText, fontFamily: "'Sora', sans-serif" }}
        >
          Project Archive
        </motion.h1>
        <motion.div {...fadeUp(0.08)} className="mb-4"><Hr /></motion.div>
        <motion.p {...fadeUp(0.1)} className="text-[0.9rem] text-slate-500 max-w-xl leading-[1.85]">
          A complete list of everything I've built — AI tools, full-stack apps, Web3 platforms,
          and experimental prototypes. Each project highlights a unique challenge solved.
        </motion.p>
      </section>

      {/* Table */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 pb-24">
        <motion.div
          {...fadeUp(0.14)}
          className="rounded-2xl overflow-hidden p-[1.5px]"
          style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(139,92,246,0.15), rgba(59,130,246,0.2))" }}
        >
          <div className="rounded-[14px] overflow-hidden" style={glass}>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(203,213,225,0.4)" }}>
                  {["Year", "Project", "Tech Stack", "Links"].map((h) => (
                    <th key={h} className="px-6 py-4 text-[0.65rem] font-bold uppercase tracking-widest text-slate-400">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04, duration: 0.4, ease }}
                    className="group transition-colors duration-200"
                    style={{ borderBottom: "1px solid rgba(203,213,225,0.25)" }}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.5)"}
                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                  >
                    <td className="px-6 py-4 text-sm font-bold text-slate-400 whitespace-nowrap">
                      {project.year}
                    </td>

                    <td className="px-6 py-4">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-sm font-extrabold text-slate-900 hover:text-blue-600 transition-colors"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        {project.title}
                      </Link>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 3).map((t, i) => (
                          <span key={i} className="text-[10px] font-semibold text-slate-500 px-2 py-0.5 rounded-full"
                            style={{ background: "rgba(255,255,255,0.72)", border: "1px solid rgba(203,213,225,0.5)" }}>
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="text-[10px] text-slate-400 font-semibold px-1">+{project.tech.length - 3}</span>
                        )}
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        {project.code && (
                          <a href={project.code} target="_blank" rel="noopener noreferrer"
                            className="text-slate-400 hover:text-slate-900 transition-colors">
                            <FontAwesomeIcon icon={faGithub} className="text-lg" />
                          </a>
                        )}
                        {project.preview && (
                          <a href={project.preview} target="_blank" rel="noopener noreferrer"
                            className="text-slate-400 hover:text-blue-500 transition-colors">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-base" />
                          </a>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.p {...fadeUp(0.2)} className="text-xs text-slate-400 text-center mt-6 font-semibold">
          {projects.length} projects total · More on{" "}
          <a href="https://github.com/supritR21" target="_blank" rel="noopener noreferrer"
            className="text-blue-500 hover:underline">
            GitHub
          </a>
        </motion.p>
      </section>

    </main>
  );
}