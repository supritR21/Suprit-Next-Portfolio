"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/image";

// HERO IMAGE
import ProjectAll from "@/public/image/projects.png";

// 🔄 UPDATED — Replace with Smart Meet images
import SmartMeet1 from "@/public/image/projects/web/smartmeet/smartmeet-1.jpg";
import SmartMeet2 from "@/public/image/projects/web/smartmeet/smartmeet-2.jpg";
import SmartMeet3 from "@/public/image/projects/web/smartmeet/smartmeet-3.jpg";

import Hr from "@/components/Hr";
import ProjectCard from "./components/ProjectCard";
import Projects from "@/json/data.json";
import FixedButton from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

// Define categories
const category = {
  1: "Web Development",
  2: "AI & Machine Learning"
};


export default function Page() {
  const [activeCategory, setActiveCategory] = useState("1");
  const projects = Projects.Projects.filter((item) => item.show === true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="overflow-hidden">
      {/* Fixed Back Button */}
      <FixedButton href="/#projects">
        <FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
      </FixedButton>

      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex justify-center items-center mb-20">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.5 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="absolute top-0 right-0 h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 overflow-hidden rounded-xl"
        >
          <Image
            src={ProjectAll}
            alt="Projects Background"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </motion.div>

        {/* Text Content */}
        <div className="relative z-10 text-left px-10 md:px-32">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
            My Projects
          </h1>
          <Hr />
          <p className="text-xl text-gray-700 mt-4 max-w-2xl leading-relaxed">
            A collection of my featured projects — exploring modern web
            technologies, AI systems, and innovative solutions built to solve
            real-world challenges.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() =>
              window.scrollTo({
                top: 1000,
                behavior: "smooth",
              })
            }
            className="mt-6"
          >
            <Button variation="primary">Scroll Down</Button>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PROJECT — SMART MEET */}
      <section className="relative container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-20">
        {/* Images */}
        <div className="relative w-full h-[500px]">
          {/* Image 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute top-24 left-10 w-1/2 aspect-video rounded-xl overflow-hidden shadow-lg grayscale hover:grayscale-0 hover:scale-110 transition-all duration-500"
          >
            <Image
              src={SmartMeet1}
              alt="Smart Meet Screenshot 1"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: -100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute top-5 right-20 w-1/3 aspect-video rounded-xl overflow-hidden shadow-lg grayscale hover:grayscale-0 hover:scale-110 transition-all duration-500"
          >
            <Image
              src={SmartMeet3}
              alt="Smart Meet Screenshot 2"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </motion.div>

          {/* Image 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: -100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-10 right-10 w-1/2 aspect-video rounded-xl overflow-hidden shadow-lg grayscale hover:grayscale-0 hover:scale-110 transition-all duration-500"
          >
            <Image
              src={SmartMeet2}
              alt="Smart Meet Screenshot 3"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </motion.div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Smart Meet
          </h2>
          <p className="text-gray-600 text-justify leading-relaxed mb-6">
            Smart Meet is an AI-powered meeting platform that records,
            transcribes, and summarizes your meetings in real time.
            It features intelligent AI agents for instant summaries,
            action-item extraction, highlights, and deep insights across every
            conversation. Built using Next.js 15, TypeScript, TailwindCSS,
            Drizzle ORM, Neon DB, Stream Video SDK, OpenAI Realtime API,
            tRPC, TanStack Query, and Better Auth.
          </p>

          <div className="flex gap-3">
            <Button variation="primary">
              <Link href="projects/smartmeet">More</Link>
            </Button>

            <Button variation="secondary">
              <a
                href="https://github.com/supritR21/Smart-Meet"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* SECTION HEADER */}
      <section className="mt-20 flex flex-col justify-start items-center md:items-start w-full px-10 md:px-32">
        <Hr variant="long" />
        <motion.h1
          className="text-3xl md:text-4xl font-bold mt-5"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          Other Noteworthy Projects
        </motion.h1>
      </section>

      {/* CATEGORY FILTER */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center gap-3 md:gap-6 my-10"
      >
        {Object.keys(category).map((key) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
              activeCategory === key
                ? "bg-gray-900 text-white shadow-md"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {category[key]}
          </button>
        ))}
      </motion.div>

      {/* PROJECT GRID */}
      <section className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            activeCategory={activeCategory}
          />
        ))}
      </section>

      {/* ARCHIVE BUTTON */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mb-20"
      >
        <Button variation="primary">
          <Link href="projects/archive">View Full Archive</Link>
        </Button>
      </motion.div>
    </main>
  );
}
