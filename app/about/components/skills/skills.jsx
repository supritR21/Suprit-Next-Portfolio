"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CodepenIcon, WebhookIcon, ActivityIcon, MobileIcon } from "./icons";
import Hr from "@/components/Hr";

const ease = [0.16, 1, 0.3, 1];

const gradientText = {
  background: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 55%, #60a5fa 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const glass = {
  background: "rgba(255,255,255,0.52)",
  backdropFilter: "blur(22px)",
  WebkitBackdropFilter: "blur(22px)",
  border: "1px solid rgba(255,255,255,0.72)",
  boxShadow: "0 4px 24px rgba(0,0,0,0.055), inset 0 1px 0 rgba(255,255,255,0.9)",
};

const glassBold = {
  background: "rgba(255,255,255,0.68)",
  backdropFilter: "blur(32px)",
  WebkitBackdropFilter: "blur(32px)",
  border: "1px solid rgba(255,255,255,0.85)",
  boxShadow: "0 8px 36px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.95)",
};

const skillCategories = {
  fullstack: {
    title: "Full Stack",
    icon: CodepenIcon,
    color: "from-violet-500 to-indigo-600",
    description: "Scalable, responsive web applications end-to-end.",
    languages: ["JavaScript", "TypeScript", "Python", "Java", "C", "HTML", "CSS", "React", "Next.js", "Node.js", "Express", "FastAPI", "Prisma"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "Docker", "Figma", "Vercel", "Render"],
  },
  ai: {
    title: "AI & Vector",
    icon: ActivityIcon,
    color: "from-cyan-500 to-blue-600",
    description: "LLMs, embeddings, and RAG pipelines at scale.",
    languages: ["Python", "LangChain", "LangGraph", "OpenAI API", "Hugging Face", "Streamlit", "FastAPI"],
    tools: ["Pinecone", "ChromaDB", "FAISS", "Weaviate", "PostgreSQL", "Redis", "Jupyter"],
  },
  backend: {
    title: "Backend & DB",
    icon: WebhookIcon,
    color: "from-emerald-500 to-teal-600",
    description: "Robust APIs and reliable data architectures.",
    languages: ["Node.js", "Express", "FastAPI", "Python", "PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma ORM"],
    tools: ["Docker", "RabbitMQ", "Temporal", "Ray", "Swagger", "Postman"],
  },
  devops: {
    title: "Cloud & DevOps",
    icon: MobileIcon,
    color: "from-amber-500 to-orange-500",
    description: "Deployments, containers, and developer workflows.",
    languages: ["GCP", "Vercel", "Render", "Docker", "Git", "GitHub Actions"],
    tools: ["VS Code", "Figma", "Jupyter", "Hugging Face Hub", "Google Colab"],
  },
};

function Badge({ label, delay = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.82 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25, delay }}
      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-slate-700 cursor-default hover:text-blue-700 transition-colors"
      style={{ background: "rgba(255,255,255,0.72)", border: "1px solid rgba(203,213,225,0.55)" }}
    >
      {label}
    </motion.span>
  );
}

export default function Skills() {
  const [selected, setSelected] = useState("fullstack");
  const skill = skillCategories[selected];

  return (
    <section className="max-w-6xl mx-auto px-8 md:px-20 py-16">

      <motion.p
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.55, ease }}
        className="text-xs font-bold tracking-[0.25em] uppercase text-slate-400 mb-2"
      >
        02 / Skills
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.55, ease, delay: 0.06 }}
        className="text-5xl md:text-6xl font-extrabold mb-2"
        style={{ ...gradientText, fontFamily: "'Sora', sans-serif" }}
      >
        Skills & Expertise
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.08 }}
        className="mb-10"
      >
        <Hr />
      </motion.div>

      {/* Category selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {Object.entries(skillCategories).map(([key, s], i) => {
          const Icon = s.icon;
          const isActive = selected === key;
          return (
            <motion.button
              key={key}
              onClick={() => setSelected(key)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5, ease }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-2xl p-5 flex flex-col items-center gap-3 text-center transition-all duration-200"
              style={
                isActive
                  ? { background: "linear-gradient(135deg, #1d4ed8, #6366f1)", border: "1px solid transparent", boxShadow: "0 8px 28px rgba(99,102,241,0.3)" }
                  : { ...glass }
              }
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={isActive
                  ? { background: "rgba(255,255,255,0.25)" }
                  : { background: "rgba(255,255,255,0.6)", border: "1px solid rgba(203,213,225,0.4)" }
                }
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-slate-600"}`} />
              </div>
              <div>
                <p className={`text-sm font-extrabold ${isActive ? "text-white" : "text-slate-800"}`}
                  style={{ fontFamily: "'Sora', sans-serif" }}>
                  {s.title}
                </p>
                <p className={`text-[0.68rem] leading-relaxed mt-0.5 ${isActive ? "text-white/75" : "text-slate-500"}`}>
                  {s.description}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Detail panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Languages */}
          <div className="rounded-2xl p-6" style={glassBold}>
            <p className="text-[0.62rem] uppercase tracking-widest text-slate-400 font-bold mb-4">
              Languages & Frameworks
            </p>
            <div className="flex flex-wrap gap-2">
              {skill.languages.map((l, i) => <Badge key={l} label={l} delay={i * 0.03} />)}
            </div>
          </div>

          {/* Tools */}
          <div className="rounded-2xl p-6" style={glassBold}>
            <p className="text-[0.62rem] uppercase tracking-widest text-slate-400 font-bold mb-4">
              Tools & Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {skill.tools.map((t, i) => <Badge key={t} label={t} delay={i * 0.03} />)}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

    </section>
  );
}