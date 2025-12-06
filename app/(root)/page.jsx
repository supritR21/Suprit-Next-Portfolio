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

const sectionTransition = { type: "spring", stiffness: 80, damping: 15 };

export default function MyPage() {
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
      <ReactFullpage
        {...fullpageOptions}
        afterLoad={(origin, destination) => {
          // Sync sidebar highlight
          const active = destination.anchor;
          const items = document.querySelectorAll("#sidebar li");
          items.forEach((item) => item.classList.remove("bg-gray-500"));
          const activeItem = document.querySelector(
            `[data-menuanchor='${active}']`
          );
          if (activeItem) activeItem.classList.add("bg-gray-500");
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
                    Full Stack & AI Developer
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
                      className="object-cover w-full h-full"
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
              <div className="relative flex flex-col md:flex-row items-center justify-between h-full w-full overflow-hidden pt-10 md:pt-20">
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={sectionTransition}
                  className="z-10 md:w-1/2 space-y-5"
                >
                  <h1 className="text-5xl md:text-7xl font-bold text-black">
                    About Me
                  </h1>
                  <Hr />
                  <p className="text-lg text-gray-600 leading-relaxed">
                    I’m deeply interested in creating intelligent systems that
                    blend AI with modern web technologies. My expertise spans
                    React, Next.js, FastAPI, and vector databases like Pinecone.
                    I aim to build systems that are efficient, reliable, and
                    human-centric.
                  </p>
                  <Button variation="primary">
                    <Link href="/about">Learn More</Link>
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ ...sectionTransition, delay: 0.2 }}
                  className="relative w-4/5 md:w-1/3 h-[400px] md:h-[600px] mt-10 md:mt-0 rounded-xl overflow-hidden grayscale hover:grayscale-0"
                >
                  <Image
                    src={MeAbout}
                    layout="fill"
                    objectFit="cover"
                    alt="Suprit Raj About"
                    placeholder="blur"
                  />
                </motion.div>
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
                        title: "Supplier Lens",
                        subtitle: "AI-Powered Supplier Risk Detector",
                        tech: "Next.js • FastAPI • LangGraph • GPT-4o • Pinecone • PostgreSQL",
                        link: "https://supplier-risk-detector2.vercel.app/",
                      },
                      {
                        title: "Vitamap",
                        subtitle: "Pharmacy App",
                        tech: "Next.js • TypeScript • FastAPI • Prisma • PostgreSQL • Leaflet",
                        link: "https://vitamap-kappa.vercel.app/",
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
                    <SocialIcon href="https://thriving-concha-3ebc04.netlify.app/" icon={faInstagram} />
                    <SocialIcon href="https://discordapp.com/users/" icon={faDiscord} />
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

/* ------------------ SMALL COMPONENT: SOCIAL ICON ------------------ */
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
