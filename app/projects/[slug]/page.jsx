"use client";

import { useState, useEffect, use } from "react";
import { motion } from "framer-motion";
import jsonData from "@/json/data.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import NotFound from "@/app/not-found";
import Image from "next/image";
import BlurImage from "@/public/image/placeholder/blur.jpg";
import FixedButton from "@/components/FixedButton";

function ScrollDownButton() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (
      scrollTop <
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight
    ) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
      setIsAtBottom(true);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setIsAtBottom(false);
    }
  };

  return (
    <div className="fixed bottom-5 left-0 right-0 flex justify-center items-center mb-10 z-50">
      <motion.div
        className="h-10 w-10 bg-black text-white rounded-full flex justify-center items-center cursor-pointer shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleScroll}
      >
        <FontAwesomeIcon
          icon={isAtBottom ? faChevronUp : faChevronDown}
          className="text-white text-xl"
        />
      </motion.div>
    </div>
  );
}

export default function Page(props) {
  const params = use(props.params);
  const [data, setData] = useState(null);

  useEffect(() => {
    const selectedData = jsonData.Projects.find(
      (item) => item.slug === params.slug
    );
    if (!selectedData) {
      setData("404");
    } else {
      setData(selectedData);
    }
  }, [params.slug]);

  if (data === "404") return <NotFound />;

  if (!data)
    return (
      <div className="relative min-h-screen w-full flex justify-center items-center flex-col p-10">
        <div className="animate-pulse bg-gray-300 h-8 w-1/3 rounded mb-5"></div>
        <div className="animate-pulse bg-gray-300 h-6 w-2/3 rounded mb-5"></div>
        <div className="animate-pulse bg-gray-300 h-96 w-full rounded"></div>
      </div>
    );

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center p-10 overflow-hidden">
      {/* Back Button */}
      <FixedButton href="/projects">
        <FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
      </FixedButton>

      {/* Scroll Control */}
      <ScrollDownButton />

      {/* Project Header */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 md:mt-32">
        {/* Left Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="flex flex-col space-y-8"
        >
          <div>
            <h2 className="uppercase text-gray-500 text-sm tracking-[8px] mb-2">
              Project
            </h2>
            <h1 className="text-4xl font-bold text-gray-900">{data.title}</h1>
          </div>

          <div>
            <h2 className="uppercase text-gray-500 text-sm tracking-[8px] mb-2">
              Technology
            </h2>
            <p className="text-lg text-gray-800">{data.tech.join(", ")}</p>
          </div>

          <div>
            <h2 className="uppercase text-gray-500 text-sm tracking-[8px] mb-2">
              Year
            </h2>
            <p className="text-lg text-gray-800">{data.year}</p>
          </div>

          {data.preview && (
            <div>
              <h2 className="uppercase text-gray-500 text-sm tracking-[8px] mb-2">
                Live Preview
              </h2>
              <a
                href={data.preview}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-600 hover:underline"
              >
                Visit Project{" "}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="ml-2"
                />
              </a>
            </div>
          )}

          {data.code && (
            <div>
              <h2 className="uppercase text-gray-500 text-sm tracking-[8px] mb-2">
                Source Code
              </h2>
              <a
                href={data.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-900 hover:text-black font-medium flex items-center"
              >
                GitHub Repository
                <FontAwesomeIcon icon={faGithub} className="ml-3" />
              </a>
            </div>
          )}
        </motion.div>

        {/* Right Description Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="flex flex-col"
        >
          <h2 className="uppercase text-gray-500 text-sm tracking-[8px] mb-4">
            Description
          </h2>
          {data.desc.map((desc, index) => (
            <p
              key={index}
              className="text-lg text-gray-600 text-justify leading-relaxed mb-5"
            >
              {desc}
            </p>
          ))}
        </motion.div>
      </div>

      {/* Project Images */}
      <div className="w-full mt-20 md:mt-28 px-6 md:px-20">
        <h2 className="uppercase text-gray-500 text-sm tracking-[8px] mb-6 text-center">
          Gallery
        </h2>
        <div className="flex flex-col justify-center items-center space-y-10">
          {data.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`${data.title} Screenshot ${index + 1}`}
              placeholder="blur"
              blurDataURL={BlurImage.src}
              width={1920}
              height={1080}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              className="rounded-lg shadow-md border border-gray-200 hover:scale-[1.01] transition-transform duration-300 w-full h-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
