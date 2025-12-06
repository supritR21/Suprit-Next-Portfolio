"use client";

// ---------------------------------------------------------------------
// About Page — Suprit Raj (NIT Patna)
// Modern, clean layout with motion and proper semantic structure
// ---------------------------------------------------------------------

import Image from "next/image";
import { motion } from "framer-motion";
import Hr from "@/components/Hr";
import Card from "./spotify/card";

// Replace with your actual portrait assets
import Me1 from "@/public/image/me1.jpg";
import Me2 from "@/public/image/me2.jpg";
import Me3 from "@/public/image/me3.jpg";

const fadeIn = (x = 0, delay = 0) => ({
  initial: { opacity: 0, x },
  whileInView: { opacity: 1, x: 0 },
  transition: { delay, type: "spring", stiffness: 80, damping: 15 },
});

function Title() {
  return (
    <div className="mt-10 flex flex-col items-center md:items-start w-full px-10 md:pl-32">
      <div className="flex flex-col items-center md:items-start my-5">
        <Hr variant="long" />
        <h1 className="text-3xl md:text-4xl font-bold mt-3 text-gray-900">
          Who&nbsp;Am&nbsp;I?
        </h1>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <Title />

      <div className="relative container mx-auto px-10 grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* ================== LEFT: IMAGE MOSAIC ================== */}
        <div className="relative flex justify-center items-center w-full aspect-square">
          {/* Image 1 */}
          <motion.div
            {...fadeIn(100, 0)}
            className="absolute top-24 left-10 w-[50%] aspect-square rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 shadow-lg"
          >
            <Image
              src={Me1}
              alt="Suprit Raj portrait"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div
            {...fadeIn(-100, 0.3)}
            className="absolute top-10 right-24 w-[30%] aspect-square rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 shadow-lg"
          >
            <Image
              src={Me2}
              alt="Suprit Raj working setup"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </motion.div>

          {/* Image 3 */}
          <motion.div
            {...fadeIn(-100, 0.5)}
            className="absolute bottom-12 right-16 w-[40%] aspect-square rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 shadow-lg"
          >
            <Image
              src={Me3}
              alt="Suprit Raj casual photo"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </motion.div>
        </div>

        {/* ================== RIGHT: BIOGRAPHY ================== */}
        <motion.div
          {...fadeIn(200, 0.4)}
          className="flex flex-col justify-center items-start md:px-10 space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-gray-900">
            Suprit Raj
          </h2>

          <p className="text-gray-700 text-justify text-lg leading-relaxed">
            Hello there! I’m{" "}
            <span className="font-semibold text-gray-900">Suprit Raj</span>, a{" "}
            <span className="font-semibold text-gray-900">
              B.Tech Computer Science student at NIT Patna
            </span>
            , passionate about building smart and scalable software systems.  
            I specialize in{" "}
            <span className="font-semibold text-gray-900">
              Full Stack and AI Development
            </span>{" "}
            — from creating robust web apps using{" "}
            <span className="font-semibold text-gray-900">
              Next.js &amp; FastAPI
            </span>{" "}
            to designing{" "}
            <span className="font-semibold text-gray-900">
              RAG pipelines and LLM integrations
            </span>{" "}
            that make technology more intelligent and useful.
          </p>

          <p className="text-gray-700 text-justify text-lg leading-relaxed">
            My current projects include{" "}
            <span className="font-semibold text-gray-900">Supplier Lens</span>,{" "}
            <span className="font-semibold text-gray-900">Vitamap</span>, and{" "}
            <span className="font-semibold text-gray-900">BookNest</span> —
            combining AI, data visualization, and full-stack engineering to
            solve real-world problems.  
            I’m also a competitive programmer with 450+ DSA problems solved and
            an active member of the{" "}
            <span className="font-semibold text-gray-900">
              HackSlash &amp; Web Club at NIT Patna
            </span>
            .
          </p>

          <p className="text-gray-700 text-justify text-lg leading-relaxed">
            Beyond coding, I love exploring{" "}
            <span className="font-semibold text-gray-900">Generative AI</span>,
            <span className="font-semibold text-gray-900"> RAG systems</span>, and{" "}
            <span className="font-semibold text-gray-900">Blockchain</span>. I
            believe in lifelong learning and staying at the forefront of
            emerging tech.
          </p>

          <div className="pt-4 w-full">
            <Card />
          </div>
        </motion.div>
      </div>
    </>
  );
}
