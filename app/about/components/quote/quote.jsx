"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver } from "./useIntersectionObserver";
import Hr from "@/components/Hr";

const ease = [0.16, 1, 0.3, 1];

const gradientText = {
  background: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 55%, #60a5fa 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const glassBold = {
  background: "rgba(255,255,255,0.68)",
  backdropFilter: "blur(32px)",
  WebkitBackdropFilter: "blur(32px)",
  border: "1px solid rgba(255,255,255,0.85)",
  boxShadow: "0 8px 36px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.95)",
};

export default function Quote() {
  const text1 = '"There are no limits to what you can accomplish'.split(" ");
  const text2 = 'except the limits you place on your own thinking."'.split(" ");
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section className="max-w-4xl mx-auto px-8 md:px-20 py-24 flex flex-col items-center">

      <motion.p
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.55, ease }}
        className="text-xs font-bold tracking-[0.25em] uppercase text-slate-400 mb-8"
      >
        05 / Motto
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
        className="rounded-3xl p-10 md:p-14 text-center w-full"
        style={glassBold}
      >
        {/* Large quote mark */}
        <div
          className="text-[6rem] leading-none font-extrabold mb-4 select-none"
          style={{ ...gradientText, fontFamily: "'Sora', sans-serif", opacity: 0.25 }}
        >
          "
        </div>

        <div ref={ref} className="space-y-3">
          <p className="text-2xl md:text-3xl font-extrabold leading-snug text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>
            {text1.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(6px)", y: 8 }}
                animate={{
                  opacity: isIntersecting ? 1 : 0,
                  filter: isIntersecting ? "blur(0px)" : "blur(6px)",
                  y: isIntersecting ? 0 : 8,
                }}
                transition={{ delay: isIntersecting ? i * 0.08 : 0, duration: 0.5, ease }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </p>

          <p className="text-lg md:text-xl text-slate-500 font-medium">
            {text2.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(6px)", y: 8 }}
                animate={{
                  opacity: isIntersecting ? 1 : 0,
                  filter: isIntersecting ? "blur(0px)" : "blur(6px)",
                  y: isIntersecting ? 0 : 8,
                }}
                transition={{ delay: isIntersecting ? (text1.length + i) * 0.08 : 0, duration: 0.5, ease }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </p>
        </div>

        <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(203,213,225,0.4)" }}>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Brian Tracy</p>
        </div>
      </motion.div>

    </section>
  );
}