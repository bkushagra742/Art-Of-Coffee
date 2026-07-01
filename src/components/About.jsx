import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { C } from "../theme";
import { I } from "../data/images";
import { Reveal, Label } from "./Shared";

const PILLARS = [
  ["Premium Coffee", "Single-origin beans"],
  ["Famous Shakes", "Thick and handcrafted"],
  ["Cozy Ambience", "Instagram-worthy space"],
  ["Friendly Staff", "Always welcoming"],
];

export default function About() {
  return (
    <section id="about" style={{ background: C.surface, padding: "96px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div className="grid md:grid-cols-2" style={{ gap: 64, alignItems: "center" }}>
          <Reveal>
            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: "20px 60px 20px 60px", overflow: "hidden", boxShadow: `0 40px 80px ${C.black}80` }}>
                <img src={I.img_exterior} alt="Art of Coffee Ujjain" style={{ width: "100%", height: 440, objectFit: "cover", display: "block" }} />
              </div>
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: "absolute", bottom: -20, right: -16, background: C.card, color: C.cream, borderRadius: 18, padding: "18px 24px", boxShadow: `0 20px 60px ${C.black}70`, border: `1px solid ${C.border}` }}
              >
                <div style={{ fontSize: "1.85rem", fontWeight: 800, color: C.gold, lineHeight: 1 }}>4.7</div>
                <div style={{ display: "flex", gap: 2, margin: "4px 0" }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} color={C.gold} fill={C.gold} />
                  ))}
                </div>
                <div style={{ fontSize: "0.7rem", color: C.muted }}>128+ Google Reviews</div>
              </motion.div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <Label>Our Story</Label>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 style={{ fontFamily: "Georgia, serif", fontStyle: "italic", color: C.cream, fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", lineHeight: 1.18, margin: "10px 0 22px" }}>
                Ujjain's Corner<br />
                of <span style={{ color: C.brown }}>Quiet Luxury</span>
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p style={{ color: C.mutedLight, lineHeight: 1.9, fontSize: "0.97rem", marginBottom: 14 }}>
                Nestled in Triveni Vihar, Art of Coffee was born from a simple conviction — that great coffee
                is not just a beverage, it's a moment. A ritual. An experience you return to again and again.
              </p>
            </Reveal>
            <Reveal delay={0.38}>
              <p style={{ color: C.mutedLight, lineHeight: 1.9, fontSize: "0.97rem", marginBottom: 36 }}>
                From carefully handcrafted espressos to our celebrated signature shakes, every detail on our menu
                carries the same intent: to make your time here feel genuinely special.
              </p>
            </Reveal>
            <div className="grid grid-cols-2" style={{ gap: 12 }}>
              {PILLARS.map(([t, s], i) => (
                <Reveal key={t} delay={0.42 + i * 0.08}>
                  <motion.div whileHover={{ y: -3 }} style={{ background: C.card, borderRadius: 14, padding: "14px 16px", border: `1px solid ${C.border}` }}>
                    <div style={{ color: C.cream, fontWeight: 700, fontSize: "0.87rem", marginBottom: 3 }}>{t}</div>
                    <div style={{ color: C.muted, fontSize: "0.75rem" }}>{s}</div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
