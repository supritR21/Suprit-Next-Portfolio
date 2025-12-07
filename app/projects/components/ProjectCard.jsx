import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import BlurImage from "@/public/image/placeholder/blur.jpg";

export default function ProjectCard({ project, index, activeCategory }) {
  const isVisible =
    activeCategory === "all" ||
    project.category.includes(parseInt(activeCategory));

  if (!isVisible) return null;

  const desc = project.description || ""; // fallback

  return (
    <Link href={`/projects/${project.slug || ""}`} key={index}>
      <motion.div
        className="relative group overflow-hidden rounded-3xl shadow-lg bg-white/10 backdrop-blur-md border border-gray-200/40 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-out"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, delay: index * 0.05 }}
      >
        {/* Thumbnail */}
        <div className="relative w-full aspect-video">
          <Image
            src={project.thumbnail || BlurImage}
            alt={project.title}
            fill
            className="object-cover rounded-3xl grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
            placeholder="blur"
            blurDataURL={BlurImage.src}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-60 transition-all duration-500"></div>

          <div className="absolute top-4 left-4 bg-white/90 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {project.year || "2024"}
          </div>
        </div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end items-start p-6 transition-all duration-500 group-hover:bg-white/90 group-hover:backdrop-blur-xl">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileHover={{ opacity: 0, y: -20 }}
            className="transition-all duration-500 ease-in-out group-hover:opacity-0"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-white group-hover:text-gray-900 transition-colors">
              {project.title}
            </h1>
            <p className="text-gray-200 text-sm md:text-base mt-2 line-clamp-3 group-hover:text-gray-700 transition-colors">
              {desc.length > 130 ? `${desc.slice(0, 130)}...` : desc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="opacity-0 group-hover:opacity-100 transition-all duration-500 w-full"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech?.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  activeCategory: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};
