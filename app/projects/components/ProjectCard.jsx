"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import BlurImage from "@/public/image/placeholder/blur.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const glass = {
  background: "rgba(255,255,255,0.55)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.75)",
  boxShadow: "0 4px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
};

// Per-category gradient borders
const categoryGradients = {
  1: "linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa)", // Web Dev — violet
  2: "linear-gradient(135deg, #06b6d4, #3b82f6, #6366f1)", // AI/ML — cyan-blue
};

export default function ProjectCard({ project, index, activeCategory }) {
  const isVisible =
    activeCategory === "all" ||
    project.category.includes(parseInt(activeCategory));

  if (!isVisible) return null;

  const desc = Array.isArray(project.desc)
    ? project.desc[0]
    : project.description || "";

  const grad =
    categoryGradients[project.category?.[0]] ||
    "linear-gradient(135deg, #64748b, #94a3b8)";

  return (
    <Link href={`/projects/${project.slug || ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 90, damping: 18, delay: index * 0.06 }}
        className="group relative rounded-2xl p-[1.5px] cursor-pointer h-full"
        style={{ background: grad }}
      >
        <div
          className="rounded-[14px] overflow-hidden h-full flex flex-col"
          style={glass}
        >
          {/* Thumbnail */}
          <div className="relative w-full aspect-video overflow-hidden">
            <Image
              src={project.thumbnail || BlurImage}
              alt={project.title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-110 transition-all duration-700 ease-out"
              placeholder="blur"
              blurDataURL={BlurImage.src}
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{ background: "linear-gradient(to top, rgba(15,23,42,0.65) 0%, rgba(15,23,42,0.1) 60%, transparent 100%)" }}
            />
            {/* Year pill */}
            <div
              className="absolute top-3 left-3 text-[0.65rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
              style={{
                background: "rgba(255,255,255,0.88)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                color: "#0f172a",
              }}
            >
              {project.year || "2025"}
            </div>
            {/* Category pill */}
            {project.category?.[0] && (
              <div
                className="absolute top-3 right-3 text-[0.65rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white"
                style={{
                  background: project.category[0] === 2
                    ? "rgba(6,182,212,0.75)"
                    : "rgba(99,102,241,0.75)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                {project.category[0] === 2 ? "AI / ML" : "Web Dev"}
              </div>
            )}
          </div>

          {/* Card body */}
          <div className="flex flex-col flex-1 p-5 gap-3">
            <div className="flex items-start justify-between gap-2">
              <h3
                className="text-xl font-extrabold text-slate-900 leading-snug"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {project.title}
              </h3>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-[11px] text-slate-300 group-hover:text-blue-500 transition-colors shrink-0 mt-1"
              />
            </div>

            <p className="text-xs text-slate-500 leading-relaxed flex-1 line-clamp-3">
              {desc.length > 140 ? `${desc.slice(0, 140)}…` : desc}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tech?.map((t, i) => (
                <span
                  key={i}
                  className="text-[10px] font-semibold text-slate-600 px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.72)",
                    border: "1px solid rgba(203,213,225,0.55)",
                  }}
                >
                  {t}
                </span>
              ))}
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
  activeCategory: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};