"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import BlurImage from "@/public/image/placeholder/blur.jpg";

export default function ProjectCard({ project, index, activeCategory }) {
  const isVisible = project.category.includes(parseInt(activeCategory));

  if (!isVisible) return null;

  return (
    <Link href={`/projects/${project.slug}`} key={index}>
      <motion.div
        className="
          relative w-full aspect-video rounded-2xl overflow-hidden
          bg-gray-200 shadow-lg group cursor-pointer
          flex items-center justify-center
        "
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 120 }}
      >
        {/* Thumbnail */}
        <Image
          src={project.thumbnail}
          alt={project.title}
          placeholder="blur"
          blurDataURL={BlurImage.src}
          layout="fill"
          objectFit="cover"
          className="
            transition-all duration-500
            opacity-60 scale-105
            group-hover:opacity-100 group-hover:scale-110
          "
        />

        {/* Year Tag */}
        <div
          className="
            absolute top-3 left-3
            bg-black/60 backdrop-blur-md
            text-white px-3 py-1
            rounded-md text-sm font-medium
          "
        >
          {project.year}
        </div>

        {/* Overlay Content */}
        <div
          className="
            absolute inset-0 flex flex-col items-center justify-center text-center
            px-6 transition-all duration-500 z-10
            opacity-100 group-hover:opacity-0
          "
        >
          <h1 className="text-3xl font-bold text-white drop-shadow-md mb-3">
            {project.title}
          </h1>

          <p className="text-white/90 max-w-lg leading-relaxed">
            {project.desc[0].length > 130
              ? `${project.desc[0].slice(0, 130)}...`
              : project.desc[0]}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-row flex-wrap justify-center items-center mt-5 gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="
                  px-3 py-1 bg-white/20 backdrop-blur-md text-white 
                  rounded-full text-sm border border-white/30
                "
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Hover Reveal Content */}
        <div
          className="
            absolute inset-0 opacity-0 group-hover:opacity-100
            transition-all duration-500 p-6
            flex flex-col justify-end bg-black/40 backdrop-blur-sm
          "
        >
          <h2 className="text-2xl font-semibold text-white mb-2">
            {project.title}
          </h2>
          <p className="text-white/90 mb-4">
            {project.desc[0].length > 150
              ? `${project.desc[0].slice(0, 150)}...`
              : project.desc[0]}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="
                  px-3 py-1 bg-white/20 text-white font-medium 
                  text-sm rounded-full backdrop-blur-md border border-white/30
                "
              >
                {t}
              </span>
            ))}
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
