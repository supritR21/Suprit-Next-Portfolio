"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const categoryThemes = {
  1: {
    label: "WEB DEV",
    pill: "bg-blue-600/90",
    border: "rgba(59,130,246,.25)",
    gradient:
      "linear-gradient(135deg,#eff6ff 0%,#dbeafe 40%,#e0e7ff 100%)",
    orb: "rgba(59,130,246,.25)",
  },

  2: {
    label: "AI / ML",
    pill: "bg-violet-600/90",
    border: "rgba(168,85,247,.25)",
    gradient:
      "linear-gradient(135deg,#faf5ff 0%,#ede9fe 45%,#f5f3ff 100%)",
    orb: "rgba(168,85,247,.25)",
  },
};

export default function ProjectCard({
  project,
  index,
  activeCategory,
}) {
  const visible =
    activeCategory === "all" ||
    project.category.includes(Number(activeCategory));

  if (!visible) return null;

  const theme =
    categoryThemes[project.category?.[0]] ||
    categoryThemes[1];

  const desc =
    project.description?.trim() ||
    "A modern software project focused on performance, scalability and developer experience.";

  return (
    <Link
      href={project.github || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.45,
          delay: index * 0.04,
        }}
        className="group h-full"
      >
        <div
          className="relative overflow-hidden rounded-3xl border h-full flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          style={{
            borderColor: theme.border,
            background: "rgba(255,255,255,.72)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* HERO AREA */}
          <div
            className="relative h-52 overflow-hidden"
            style={{
              background: theme.gradient,
            }}
          >
            {/* Orb 1 */}
            <div
              className="absolute -top-16 -left-10 w-40 h-40 rounded-full blur-3xl"
              style={{
                background: theme.orb,
              }}
            />

            {/* Orb 2 */}
            <div
              className="absolute bottom-0 right-0 w-48 h-48 rounded-full blur-3xl"
              style={{
                background: theme.orb,
              }}
            />

            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(#000 1px, transparent 1px),linear-gradient(90deg,#000 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800">
                {project.year || "2025"}
              </span>
            </div>

            <div className="absolute top-4 right-4">
              <span
                className={`text-white text-[11px] px-3 py-1 rounded-full font-bold tracking-wide ${theme.pill}`}
              >
                {theme.label}
              </span>
            </div>

            {/* Project Name Inside Hero */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3
                className="text-3xl font-extrabold text-slate-900 leading-tight"
                style={{
                  fontFamily: "'Sora', sans-serif",
                }}
              >
                {project.title}
              </h3>
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col flex-1 p-6">
            <p className="text-sm text-slate-600 leading-7 flex-1">
              {desc.length > 180
                ? desc.substring(0, 180) + "..."
                : desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {project.tech?.slice(0, 6).map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white border border-slate-200 text-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                View Repository
              </span>

              <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="text-xs"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  activeCategory: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};