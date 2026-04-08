import { motion } from "framer-motion";

export default function PlayingAnimation() {
  return (
    <div className="flex items-end gap-0.5 h-6 shrink-0">
      {[0, -2, -3.7].map((delay, i) => (
        <motion.span
          key={i}
          className="w-1 rounded-full"
          style={{ background: "linear-gradient(to top, #3b82f6, #818cf8)", height: "100%" }}
          animate={{ scaleY: [0.3, 1, 0.5, 0.8, 0.4] }}
          transition={{ duration: 2.2, repeat: Infinity, delay }}
        />
      ))}
    </div>
  );
}