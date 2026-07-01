import { motion } from "framer-motion";
import { C } from "../theme";
import { HIGHLIGHTS } from "../data/content";
import { Reveal, Label, Blob } from "./Shared";

export default function Highlights() {
  return (
    <section style={{ background: C.black, padding: "96px 0", position: "relative", overflow: "hidden" }}>
      <Blob color={C.brown} style={{ width: 500, height: 500, top: "-20%", left: "-10%" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <Reveal className="text-center" style={{ marginBottom: 52 }}>
          <Label color={C.gold}>Trust & Excellence</Label>
          <h2 style={{ fontFamily: "Georgia, serif", fontStyle: "italic", color: C.cream, fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}>
            Why Ujjain <span style={{ color: C.gold }}>Loves</span> Art of Coffee
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3" style={{ gap: 16 }}>
          {HIGHLIGHTS.map(({ icon: Icon, label, sub, color }, i) => (
            <Reveal key={label} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -7 }}
                style={{ background: C.card, borderRadius: 20, padding: "28px 22px", border: `1px solid ${C.border}`, cursor: "default", transition: "box-shadow 0.3s" }}
              >
                <div style={{ width: 50, height: 50, borderRadius: 14, background: `${color}1A`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 15 }}>
                  <Icon size={22} color={color} />
                </div>
                <div style={{ color: C.cream, fontWeight: 700, fontSize: "0.97rem", marginBottom: 4 }}>{label}</div>
                <div style={{ color: C.muted, fontSize: "0.8rem" }}>{sub}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
