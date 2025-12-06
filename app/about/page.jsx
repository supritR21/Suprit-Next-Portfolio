"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/legacy/image";
import FixedButton from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

// Components
import Hr from "@/components/Hr";
import Quote from "./components/quote/quote.jsx";
import Skills from "./components/skills/skills.jsx";
import Experience from "./components/experience.jsx";
import Education from "./components/education.jsx";
import About from "./components/about/about.jsx";

// Images
import Hero from "@/public/image/me2.jpg";

export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="overflow-hidden">
        {/* Back Button */}
        <FixedButton href="/#about">
          <FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
        </FixedButton>

        {/* Hero Section */}
        <section className="relative h-screen gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden">
          {/* Background Image */}
          <div className="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.6 }}
              transition={{ ease: "circOut", duration: 1 }}
              className="bg-gray-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            >
              <Image
                src={Hero}
                alt="Suprit Raj"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                className="rounded-sm"
              />
            </motion.div>
          </div>

          {/* Hero Text */}
          <div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none bg-gray-100 bg-opacity-60 md:bg-transparent md:pt-0">
            <h1 className="text-black text-5xl md:text-8xl font-bold tracking-tight">
              About Me
            </h1>
            <Hr />
            <p className="title text-xl mt-4 tracking-wider text-gray-800 leading-[1.7rem] mb-5 max-w-2xl">
              Hi, I’m <span className="font-semibold text-black">Suprit Raj</span> —
              a passionate{" "}
              <span className="font-semibold text-black">Full Stack & AI Developer</span>{" "}
              from <span className="font-semibold text-black">NIT Patna</span>. I love
              building modern web applications and exploring how AI can power
              real-world products.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              onClick={() =>
                window.scrollTo({
                  top: 1000,
                  behavior: "smooth",
                })
              }
              className="mb-3"
            >
              <Button variation="primary">Scroll Down</Button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Experience />

        {/* Education Section */}
        <Education />

        {/* Quote Section */}
        <Quote />
      </main>
    </>
  );
}
