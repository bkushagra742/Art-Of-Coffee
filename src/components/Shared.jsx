import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { C, ease } from "../theme";

// Smooth-scrolls to a section, offsetting for the fixed header height.
export function goTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 68;
  window.scrollTo({ top, behavior: "smooth" });
}

export function Reveal({ children, delay = 0, y = 36, className = "", style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function Blob({ color, style }) {
  return (
    <motion.div
      style={{
        position: "absolute",
        borderRadius: "60% 40% 70% 30% / 50% 60% 40% 70%",
        background: color,
        filter: "blur(80px)",
        opacity: 0.1,
        pointerEvents: "none",
        ...style,
      }}
      animate={{
        borderRadius: [
          "60% 40% 70% 30% / 50% 60% 40% 70%",
          "40% 60% 30% 70% / 70% 40% 60% 50%",
          "70% 30% 60% 40% / 40% 70% 50% 60%",
          "60% 40% 70% 30% / 50% 60% 40% 70%",
        ],
      }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export function Label({ children, color }) {
  return (
    <p
      style={{
        color: color || C.brown,
        fontSize: "0.7rem",
        letterSpacing: "0.24em",
        textTransform: "uppercase",
        fontWeight: 700,
        marginBottom: 10,
      }}
    >
      {children}
    </p>
  );
}

export function AOCLogo({ size = 48 }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} style={{ flexShrink: 0 }}>
      <circle cx="50" cy="50" r="44" fill="none" stroke={C.cream} strokeWidth="1.8" strokeDasharray="4 3" opacity="0.5" />
      <text
        x="50" y="47" textAnchor="middle" dominantBaseline="middle"
        style={{ fontFamily: "Georgia, serif", fontSize: "27px", fontStyle: "italic", fill: C.cream, fontWeight: "bold" }}
      >
        AOC
      </text>
      <text
        x="50" y="70" textAnchor="middle"
        style={{ fontFamily: "Georgia, serif", fontSize: "8px", fill: C.cream, letterSpacing: "2px", opacity: 0.6 }}
      >
        ART OF COFFEE
      </text>
    </svg>
  );
}

export function FloatingParticles() {
  const ps = useRef(
    Array.from({ length: 14 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      s: Math.random() * 4 + 2,
      delay: Math.random() * 6,
      dur: Math.random() * 7 + 9,
    }))
  ).current;

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {ps.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            bottom: "6%",
            width: p.s,
            height: p.s,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${C.gold}90, ${C.brown}40)`,
          }}
          animate={{ y: [0, -420], opacity: [0, 0.8, 0], scale: [1, 0.3] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}
