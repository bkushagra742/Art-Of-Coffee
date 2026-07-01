import { motion, useScroll, useTransform } from "framer-motion";
import { Star, ChevronDown } from "lucide-react";
import { C, ease } from "../theme";
import { Blob, FloatingParticles, goTo } from "./Shared";

export default function Hero() {
  const { scrollY } = useScroll();
  const yP = useTransform(scrollY, [0, 600], [0, 120]);

  return (
    <section
      style={{
        position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        background: `linear-gradient(160deg, #0A0806 0%, ${C.darkBrown} 52%, #0A0806 100%)`,
        overflow: "hidden",
      }}
    >
      <Blob color={C.brown} style={{ width: 700, height: 700, top: "-20%", right: "-12%" }} />
      <Blob color={C.green} style={{ width: 450, height: 450, bottom: "5%", left: "-8%" }} />
      <Blob color={C.gold} style={{ width: 300, height: 300, top: "40%", left: "38%", opacity: 0.07 }} />
      <FloatingParticles />
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 55% 45% at 50% 50%, ${C.brown}1E 0%, transparent 70%)`, pointerEvents: "none" }} />

      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute", top: "28%", left: `calc(50% + ${(i - 1) * 16}px)`,
            width: 2.5, height: 65, borderRadius: 10,
            background: `linear-gradient(to top, ${C.cream}45, transparent)`,
          }}
          animate={{ y: [0, -55], scaleY: [0, 1, 0], opacity: [0, 0.45, 0] }}
          transition={{ duration: 3, delay: i * 0.7, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <motion.div style={{ y: yP, position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px", maxWidth: 820, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ display: "inline-flex", alignItems: "center", gap: 7, background: `${C.gold}16`, border: `1px solid ${C.gold}40`, borderRadius: 100, padding: "6px 18px", marginBottom: 28 }}
        >
          <Star size={12} color={C.gold} fill={C.gold} />
          <span style={{ color: C.gold, fontSize: "0.7rem", letterSpacing: "0.14em", fontWeight: 600 }}>
            4.7 STARS &middot; UJJAIN'S MOST LOVED CAFE &middot; 128+ REVIEWS
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05, delay: 0.35, ease }}
          style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", color: C.cream, lineHeight: 1.12, marginBottom: 22, fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
        >
          Where Every Cup<br />
          <span style={{ color: C.gold }}>Tells A Story</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease }}
          style={{ color: `${C.cream}75`, fontSize: "1.05rem", maxWidth: 420, margin: "0 auto 42px", lineHeight: 1.82 }}
        >
          Premium coffee, legendary shakes and a warm ambience that feels like home — Ujjain, Madhya Pradesh.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.72 }}
          style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}
        >
          <motion.button
            onClick={() => goTo("menu")}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            style={{ background: C.brown, color: C.cream, padding: "14px 34px", borderRadius: 100, fontWeight: 700, fontSize: "0.92rem", border: "none", cursor: "pointer", boxShadow: `0 10px 32px ${C.brown}55` }}
          >
            Explore Menu
          </motion.button>
          <motion.a
            href="tel:07580802323"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            style={{ background: "transparent", color: C.cream, padding: "14px 34px", borderRadius: 100, fontWeight: 600, fontSize: "0.92rem", textDecoration: "none", border: `1.5px solid ${C.cream}38` }}
          >
            Call Now
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          style={{ display: "flex", justifyContent: "center", gap: 44, marginTop: 60, paddingTop: 36, borderTop: `1px solid ${C.border}` }}
        >
          {[["4.7", "Google Rating"], ["128+", "Happy Reviews"], ["Rs.80+", "Starting At"]].map(([v, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ color: C.gold, fontSize: "1.5rem", fontWeight: 700, fontFamily: "Georgia, serif" }}>{v}</div>
              <div style={{ color: `${C.cream}50`, fontSize: "0.65rem", letterSpacing: "0.14em", marginTop: 5 }}>{l.toUpperCase()}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        style={{ position: "absolute", bottom: 26, left: "50%", transform: "translateX(-50%)", zIndex: 10 }}
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        <ChevronDown color={`${C.cream}45`} size={26} />
      </motion.div>
    </section>
  );
}
