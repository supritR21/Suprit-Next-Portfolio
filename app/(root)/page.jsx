"use client";

import ReactFullpage from "@fullpage/react-fullpage";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Components
import Button from "@/components/Button";
import Hr from "@/components/Hr";

// Images
import Me from "@/public/image/me.jpg";
import MeAbout from "@/public/image/me2.jpg";
import Setup from "@/public/image/setup.jpg";
import ProjectAll from "@/public/image/projects.png";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

const sectionTransition = { type: "spring", stiffness: 80, damping: 15 };

export default function MyPage() {
  const [activeSection, setActiveSection] = useState(1);

  const fullpageOptions = {
    anchors: [
      "home-section",
      "about-section",
      "projects-section",
      "experience-section",
      "contact-section",
    ],
    scrollingSpeed: 1000,
    licenseKey: "gplv3-license",
    scrollOverflow: true,
  };

  return (
    <div>
      {/* Sidebar always in sync */}
      <Sidebar activeSection={activeSection} />

      <ReactFullpage
        {...fullpageOptions}
        afterLoad={(origin, destination) => {
          setActiveSection(destination.index + 1); // sync to Sidebar
        }}
        render={() => (
          <ReactFullpage.Wrapper>
            {/* ========================= HOME ========================= */}
            <section
              className="section bg-white text-gray-800 px-10 md:px-20 pl-20 md:pl-32"
              data-anchor="home-section"
            >
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                {/* LEFT CONTENT */}
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={sectionTransition}
                  className="col-span-2 flex flex-col justify-center text-center md:text-left space-y-6"
                >
                  <h3 className="uppercase text-xl tracking-[.4rem] text-gray-500">
                    Suprit Raj
                  </h3>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black">
                    Full Stack & GenAI Developer
                  </h1>
                  <p className="text-md md:text-lg text-gray-600 leading-relaxed max-w-2xl">
                    I’m Suprit, a B.Tech CSE student at NIT Patna passionate
                    about building intelligent, scalable web applications and
                    AI-driven systems. My interests span GenAI, RAG pipelines,
                    and full-stack development using Next.js, FastAPI, and
                    vector databases.
                  </p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                    <Button variation="primary">
                      <Link
                        href="/docs/Suprit_Raj_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        Download CV
                      </Link>
                    </Button>

                    <Button variation="secondary">
                      <a href="#contact-section">Contact Me</a>
                    </Button>
                  </div>
                </motion.div>
                {/* RIGHT IMAGE */}
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ ...sectionTransition, delay: 0.2 }}
                  className="flex justify-center"
                >
                  <div className="rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 w-64 h-64 md:w-80 md:h-80">
                    <Image
                      src={Me}
                      width={400}
                      height={400}
                      alt="Portrait of Suprit Raj"
                      placeholder="blur"
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                </motion.div>

              </div>
            </section>
            {/* ========================= ABOUT ========================= */}
            <section
              className="section bg-gray-50 px-10 md:px-20 pl-20 md:pl-32"
              data-anchor="about-section"
            >
              <div className="flex flex-col md:flex-row items-center justify-between min-h-screen w-full pt-24 md:pt-28 gap-14">

                {/* LEFT TEXT */}
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={sectionTransition}
                  className="md:w-1/2 space-y-6"
                >
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight text-black">
                    About Me
                  </h1>

                  <Hr />

                  <p className="text-lg text-gray-700 leading-relaxed">
                    I’m a B.Tech CSE student at NIT Patna passionate about building 
                    intelligent, scalable systems at the intersection of full-stack 
                    development and GenAI.
                    <br /><br />
                    I actively practice DSA on multiple platforms to improve algorithmic 
                    thinking, problem-solving speed, and contest strategy.
                  </p>

                  <Button variation="primary">
                    <Link href="/about">Learn More</Link>
                  </Button>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ ...sectionTransition, delay: 0.2 }}
                  className="relative w-4/5 md:w-1/3"
                >
                  <div className="rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all shadow-2xl">
                    <Image
                      src={MeAbout}
                      layout="responsive"
                      alt="Suprit Raj"
                      placeholder="blur"
                      objectFit="cover"
                    />
                  </div>
                </motion.div>

              </div>

              {/* ========================= CP CARDS ========================= */}
              <div className="mt-20 md:mt-24 w-full max-w-6xl mb-10">

                <h2 className="text-3xl md:text-4xl font-bold text-black mb-10 text-center md:text-left">
                  Competitive Programming Profiles
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">

                  {/* Card Component */}
                  {[
                    {
                      title: "LeetCode",
                      rating: "1694",
                      link: "https://leetcode.com/u/Suprit_Raj/",
                      color: "text-yellow-600",
                    },
                    {
                      title: "CodeChef",
                      rating: "1323",
                      link: "https://www.codechef.com/users/suprit_r21",
                      color: "text-orange-600",
                    },
                    {
                      title: "Codeforces",
                      rating: "Unrated",
                      link: "https://codeforces.com/profile/supritr21",
                      color: "text-blue-600",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: i * 0.1 }}
                      className="bg-white p-7 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
                    >
                      <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 mt-2 text-lg">
                        Max Rating: <span className="font-semibold">{item.rating}</span>
                      </p>
                      <a
                        href={item.link}
                        className={`${item.color} underline mt-3 inline-block font-medium`}
                        target="_blank"
                      >
                        View Profile →
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>


            {/* ========================= PROJECTS ========================= */}
            <section
              className="section bg-white px-10 md:px-24 pl-20 md:pl-32"
              data-anchor="projects-section"
            >
              <div className="flex flex-col items-start justify-center h-full w-full pt-10 md:pt-20">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={sectionTransition}
                  className="w-full space-y-8"
                >
                  <h1 className="text-5xl md:text-7xl font-bold text-black text-left">
                    Projects
                  </h1>
                  <Hr />

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {[
                      {
                        title: "Smart Meet",
                        subtitle: "AI-powered meeting platform with real-time transcription, automated summaries, and intelligent action item extraction.",
                        tech: "Next.js • TypeScript • OpenAI • Drizzle ORM • PostgreSQL",
                        link: "https://smart-meet-eight.vercel.app/",
                      },
                      {
                        title: "Vitamap",
                        subtitle: "Pharmacy App",
                        tech: "Next.js • TypeScript • FastAPI • Prisma • PostgreSQL • Leaflet",
                        link: "https://vitamap-tqpy.vercel.app/",
                      },
                      {
                        title: "BookNest",
                        subtitle: "Library Management System",
                        tech: "Node.js • Express • React • MongoDB • Cloudinary • Docker",
                        link: "https://booknest-3-orzs.onrender.com/",
                      },
                    ].map((proj, idx) => (
                      <div
                        key={idx}
                        className="border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 bg-gray-50"
                      >
                        <h3 className="text-2xl font-semibold text-gray-900">
                          {proj.title}
                        </h3>
                        <p className="text-gray-700 mt-1 text-lg">
                          {proj.subtitle}
                        </p>
                        <p className="text-sm text-gray-500 mt-2">{proj.tech}</p>

                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline mt-3 inline-block"
                        >
                          View Live
                        </a>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8">
                    <Button variation="primary">
                      <Link href="/projects">See All Projects</Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* ========================= EXPERIENCE ========================= */}
            <section
              className="section bg-gray-50 px-10 md:px-20 pl-20 md:pl-32"
              data-anchor="experience-section"
            >
              <div className="flex flex-col items-start justify-center h-full space-y-5 pt-10 md:pt-20">
                <h1 className="text-5xl md:text-7xl font-bold text-black">
                  Experience
                </h1>
                <Hr />
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                  I’m currently exploring opportunities and gaining hands-on
                  experience through personal and academic projects. Stay tuned
                  — exciting collaborations are on the way! 🚀
                </p>
              </div>
            </section>

            {/* ========================= CONTACT ========================= */}
            <section
              className="section bg-white px-10 md:px-24 pl-20 md:pl-32"
              data-anchor="contact-section"
            >
              <div className="flex flex-col items-start justify-center h-full w-full pt-10 md:pt-20 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={sectionTransition}
                  className="w-full"
                >
                  <h1 className="text-5xl md:text-7xl font-bold text-black">
                    Get in Touch
                  </h1>
                  <Hr />

                  <p className="text-lg text-gray-600 max-w-3xl leading-relaxed mt-4">
                    I’m always open to collaborations, internships, and new
                    opportunities in AI and web development. Let’s connect!
                  </p>

                  <p className="text-xl text-gray-700 mt-4">
                    <a
                      href="mailto:supritr.ug23.cs@nitp.ac.in"
                      className="underline"
                    >
                      supritr.ug23.cs@nitp.ac.in
                    </a>
                  </p>

                  <div className="flex flex-wrap gap-5 pt-6">
                    <SocialIcon href="mailto:supritr.ug23.cs@nitp.ac.in" icon={faEnvelope} />
                    <SocialIcon href="https://github.com/supritR21" icon={faGithub} />
                    <SocialIcon href="https://www.linkedin.com/in/suprit-raj-04b45932b/" icon={faLinkedin} />
                    <SocialIcon href="#" icon={faInstagram} />
                    <SocialIcon href="https://discord.com/users/1357408252647969121" icon={faDiscord} />
                  </div>
                </motion.div>
              </div>
            </section>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
}

/* --- SOCIAL ICON COMPONENT --- */
function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={href}
      className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-500 transition-all duration-300"
    >
      <FontAwesomeIcon icon={icon} className="text-2xl" />
    </a>
  );
}

import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

function RotatingCards() {
  const cards = [
    {
      platform: "LeetCode",
      rating: "Max Rating: 1694",
      link: "https://leetcode.com/u/Suprit_Raj/",
    },
    {
      platform: "CodeChef",
      rating: "Max Rating: 1323",
      link: "https://www.codechef.com/users/suprit_r21",
    },
    {
      platform: "Codeforces",
      rating: "Max Rating: Unrated",
      link: "https://codeforces.com/profile/supritr21",
    },
  ];

  const [index, setIndex] = useState(0);

  // Smooth auto rotate every 2.2 seconds
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % cards.length),
      2200
    );
    return () => clearInterval(interval);
  }, []);

  const prevCard = () =>
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);

  const nextCard = () => setIndex((prev) => (prev + 1) % cards.length);

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] flex justify-center items-center gap-3">

      {/* LEFT ARROW */}
      <button
        onClick={prevCard}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-200 transition"
      >
        <span className="text-2xl font-bold">‹</span>
      </button>

      {/* CARD SLIDER */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 80 }}      // comes from right
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}        // exits to left
          transition={{ duration: 0.6 }}       // smoother animation
          className="bg-white bg-opacity-90 backdrop-blur-lg shadow-xl rounded-xl p-5 text-center border border-gray-200 w-full"
        >
          <h3 className="text-xl font-semibold text-black">
            {cards[index].platform}
          </h3>

          <p className="text-gray-700 mt-1">
            {cards[index].rating}
          </p>

          <a
            href={cards[index].link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline mt-2 inline-block"
          >
            View Profile
          </a>
        </motion.div>
      </AnimatePresence>

      {/* RIGHT ARROW */}
      <button
        onClick={nextCard}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-200 transition"
      >
        <span className="text-2xl font-bold">›</span>
      </button>

    </div>
  );
}

