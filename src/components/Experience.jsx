import { motion } from "framer-motion";
import { C } from "../theme";
import { I } from "../data/images";
import { EXPERIENCE_CARDS } from "../data/content";
import { Reveal, Label, Blob } from "./Shared";

export default function Experience() {
  return (
    <section id="experience" style={{ background: C.black, padding: "96px 0", position: "relative", overflow: "hidden" }}>
      <Blob color={C.green} style={{ width: 550, height: 550, top: "15%", right: "-12%" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <Reveal className="text-center" style={{ marginBottom: 52 }}>
          <Label color={C.green}>The AOC Life</Label>
          <h2 style={{ fontFamily: "Georgia, serif", fontStyle: "italic", color: C.cream, fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}>
            More Than Just <span style={{ color: C.gold }}>Coffee</span>
          </h2>
          <p style={{ color: C.muted, maxWidth: 420, margin: "12px auto 0", lineHeight: 1.78, fontSize: "0.9rem" }}>
            Art of Coffee is your third place — between home and office — where you truly belong.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2" style={{ gap: 16 }}>
          {EXPERIENCE_CARDS.map(({ title, sub, img }, i) => (
            <Reveal key={title} delay={i * 0.12}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                style={{ borderRadius: 20, overflow: "hidden", position: "relative", height: 280, border: `1px solid ${C.border}` }}
              >
                <img src={I[img]} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${C.black}F0 0%, ${C.black}50 50%, transparent 100%)` }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px 24px" }}>
                  <h3 style={{ color: C.cream, fontWeight: 700, fontSize: "1.1rem", marginBottom: 6 }}>{title}</h3>
                  <p style={{ color: `${C.cream}80`, fontSize: "0.84rem", lineHeight: 1.65 }}>{sub}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
