"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import FixedButton from "@/components/FixedButton";
import Projects from "@/json/data.json";
import Link from "next/link";

export default function Page() {
  const projects = Projects.Projects;

  return (
    <main className="overflow-hidden min-h-screen bg-gray-50 text-gray-900">
      {/* Fixed Back Button */}
      <FixedButton href="/#projects">
        <FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
      </FixedButton>

      {/* Page Header */}
      <section className="w-full flex flex-col justify-center items-center text-center mt-20 md:mt-28 mb-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold bg-linear-to-r from-black to-gray-600 bg-clip-text text-transparent mb-4">
            Project Archive
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            A collection of all the projects I’ve built — from AI-powered tools and fullstack apps to
            experimental prototypes. Each project highlights a unique skill or challenge solved.
          </p>
        </motion.div>
      </section>

      {/* Table Section */}
      <section className="container mx-auto px-4 md:px-10 mb-20">
        <div className="overflow-x-auto rounded-2xl shadow-md border border-gray-200 bg-white/80 backdrop-blur-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100 border-b border-gray-300 text-gray-800 uppercase text-sm font-semibold tracking-wide">
              <tr>
                <th className="px-6 py-4">Year</th>
                <th className="px-6 py-4">Project Title</th>
                <th className="px-6 py-4">Tech Stack</th>
                <th className="px-6 py-4 text-center">Links</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 font-medium text-gray-700">{project.year}</td>

                  <td className="px-6 py-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-gray-900 hover:text-black font-semibold transition-colors duration-200"
                    >
                      {project.title}
                    </Link>
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {project.tech.join(", ")}
                  </td>

                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center items-center space-x-4">
                      {project.code && (
                        <a
                          href={project.code}
                          title="View Source on GitHub"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-black transition-colors"
                        >
                          <FontAwesomeIcon icon={faGithub} className="text-xl" />
                        </a>
                      )}
                      {project.preview && (
                        <a
                          href={project.preview}
                          title="View Live Project"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-black transition-colors"
                        >
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-lg" />
                        </a>
                      )}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
