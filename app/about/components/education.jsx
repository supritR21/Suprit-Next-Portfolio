"use client";

// ---------------------------------------------------------------------
// Education & Achievements — Suprit Raj (NIT Patna)
// ---------------------------------------------------------------------

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faTrophy,
  faMedal,
  faAward,
  faChevronDown,
  faChevronUp,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Replace with your own images
import Me4 from "@/public/image/me4.jpeg";
import Me5 from "@/public/image/me5.jpg";
import Me6 from "@/public/image/me6.jpg";

// ================= WRAPPER =================
function Wrapper({ children }) {
  return (
    <div className="mx-auto container gap-10 p-10 grid grid-cols-1 my-10">
      <motion.div
        className="flex justify-center items-start flex-col mb-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// ================= COMPONENT =================
export default function Education() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Based on Suprit's resume — updated achievements
  const achievementsByYear = {
    2025: [
      {
        icon: faCode,
        title: "Developer at HackSlash and Web Club (NIT Patna)",
        subtitle:
          "Active contributor in full-stack & AI-powered open-source projects.",
        date: "2025",
        color: "from-blue-500 to-indigo-600",
      },
      {
        icon: faTrophy,
        title: "Built ‘Supplier Lens’ — AI-powered Supplier Risk Detector",
        subtitle:
          "Developed a LangGraph-based GPT-4o assistant with Next.js + FastAPI.",
        date: "2025",
        color: "from-green-500 to-emerald-600",
      },
      {
        icon: faAward,
        title: "Built ‘Vitamap’ — Full-Stack Pharmacy App",
        subtitle:
          "Integrated RAG pipeline, Pinecone, and OpenStreetMap data for search.",
        date: "2025",
        color: "from-cyan-500 to-blue-500",
      },
    ],
    2024: [
      {
        icon: faMedal,
        title: "Competitive Programming Milestone",
        subtitle: "Solved 450+ DSA problems across LeetCode, CodeChef, GFG.",
        date: "2024",
        color: "from-amber-400 to-yellow-500",
      },
      {
        icon: faTrophy,
        title: "CodeChef Global Rank #1038 / #1433 in Div-4",
        subtitle: "Demonstrated strong problem-solving and algorithmic skills.",
        date: "2024",
        color: "from-red-400 to-orange-500",
      },
    ],
    2023: [
      {
        icon: faGraduationCap,
        title: "Joined B.Tech CSE at National Institute of Technology, Patna",
        subtitle:
          "Started journey toward building intelligent, scalable systems.",
        date: "2023",
        color: "from-gray-500 to-gray-700",
      },
    ],
  };

  // Flatten for pagination
  const allAchievements = Object.entries(achievementsByYear)
    .sort(([a], [b]) => parseInt(b) - parseInt(a))
    .flatMap(([year, achievements]) =>
      achievements.map((achievement) => ({ ...achievement, year }))
    );

  const visibleAchievements = isExpanded
    ? allAchievements
    : allAchievements.slice(0, 5);
  const hasMoreAchievements = allAchievements.length > 5;

  return (
    <Wrapper>
      <section className="grid gap-8 md:gap-12">
        {/* Header */}
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Education & Achievements
          </h1>
          <p className="text-gray-600 max-w-[800px] mx-auto text-lg">
            Learn about my academic journey and the milestones I’ve achieved
            along the way.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* ================= EDUCATION ================= */}
          <motion.div
            className="px-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="font-medium text-lg mb-4">2023 – Present</div>
            <div>
              <h2 className="font-semibold text-xl">
                National Institute of Technology, Patna
              </h2>
              <h3 className="text-md font-normal mb-3">
                B.Tech in Computer Science and Engineering
              </h3>

              {/* Campus Photos */}
              <div className="gap-4 mb-5 flex items-stretch md:h-[280px] xl:h-[360px]">
                {[Me5, Me4, Me6].map((img, i) => (
                  <div
                    key={i}
                    className="flex-1 transition-all duration-300 ease-in-out hover:flex-3 group"
                  >
                    <Image
                      src={img}
                      width={400}
                      height={225}
                      alt="NIT Patna Campus"
                      className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                    />
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-700 text-justify text-lg leading-relaxed">
                I’m pursuing my{" "}
                <span className="font-semibold text-black">
                  Bachelor’s in Computer Science and Engineering
                </span>{" "}
                at 
                <span className="font-semibold text-black">
                  NIT Patna
                </span>
                , where I’ve developed strong foundations in{" "}
                <span className="font-semibold text-black">
                  Data Structures, Algorithms, DBMS, OS, and Computer Networks
                </span>
                . My journey blends academic rigor with hands-on experience
                through AI and full-stack projects like{" "}
                <span className="font-semibold text-black">Supplier Lens</span>{" "}
                and{" "}
                <span className="font-semibold text-black">Vitamap</span>.
                <br />
                <br />
                As a{" "}
                <span className="font-semibold text-black">
                  Developer at HackSlash and Web Club (NIT Patna)
                </span>
                , I actively collaborate on open-source initiatives and mentor
                peers in AI and Web Development.
                <br />
                <br />
                My academic performance reflects my dedication to continuous
                learning and problem-solving — currently maintaining a{" "}
                <span className="font-semibold text-black">CPI of 8.39</span>.
              </p>
              <div className="flex flex-wrap gap-2 mt-4 text-sm">
                <div className="bg-gray-300 text-black px-3 py-1 rounded-2xl">
                  CPI: 8.39 / 10
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= ACHIEVEMENTS ================= */}
          <motion.div
            className="flex flex-col justify-start px-5 md:px-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="font-semibold text-xl mt-7 mb-1">
              Achievements & Highlights
            </h2>
            <p className="text-md font-normal mb-5 text-gray-600">
              A few milestones from my academic and developer journey.
            </p>

            <div className="relative">
              <div className="space-y-4">
                <AnimatePresence>
                  {visibleAchievements.map((a, index) => (
                    <motion.div
                      key={`${a.year}-${index}`}
                      className="group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      {/* Year header */}
                      {index === 0 ||
                      visibleAchievements[index - 1]?.year !== a.year ? (
                        <div className="flex items-center gap-3 mb-3 mt-2">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-xs font-bold text-gray-600">
                              {a.year}
                            </span>
                          </div>
                          <div className="flex-1 h-px bg-linear-to-r from-gray-300 to-transparent"></div>
                        </div>
                      ) : null}

                      {/* Card */}
                      <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-lg hover:bg-white/30 transition-all duration-300 hover:shadow-xl grayscale hover:grayscale-0">
                        <div className="flex items-center gap-4">
                          <div
                            className={`aspect-square w-10 rounded-full bg-linear-to-r ${a.color} flex items-center justify-center`}
                          >
                            <FontAwesomeIcon
                              icon={a.icon}
                              className="text-white h-5 w-5"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">
                              {a.title}
                            </h3>
                            <p className="text-sm text-gray-700">
                              {a.subtitle}
                            </p>
                            <div className="text-xs text-gray-500 mt-1">
                              {a.date}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Gradient bottom fade */}
              {!isExpanded && hasMoreAchievements && (
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-gray-200 via-gray-100/60 to-transparent pointer-events-none"></div>
              )}

              {/* Toggle button */}
              {hasMoreAchievements && (
                <motion.div
                  className="flex justify-center mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 px-6 py-3 bg-white/30 backdrop-blur-md border border-white/40 rounded-full hover:bg-white/40 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl"
                  >
                    <span>
                      {isExpanded
                        ? "Show Less"
                        : `Show ${allAchievements.length - 5} More`}
                    </span>
                    <FontAwesomeIcon
                      icon={isExpanded ? faChevronUp : faChevronDown}
                      className="h-3 w-3 transition-transform duration-300"
                    />
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </Wrapper>
  );
}
