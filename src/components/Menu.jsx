import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { C } from "../theme";
import { MENU_CATS, MENU_ITEMS } from "../data/content";
import { Reveal, Label } from "./Shared";

export default function MenuSection() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? MENU_ITEMS : MENU_ITEMS.filter((i) => i.cat === active);

  return (
    <section id="menu" style={{ background: C.surface, padding: "96px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <Reveal className="text-center" style={{ marginBottom: 44 }}>
          <Label>Our Offerings</Label>
          <h2 style={{ fontFamily: "Georgia, serif", fontStyle: "italic", color: C.cream, fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}>
            The <span style={{ color: C.brown }}>Menu</span>
          </h2>
          <p style={{ color: C.muted, marginTop: 10, fontSize: "0.88rem" }}>Everything from Rs.80 — quality that punches above every price point</p>
        </Reveal>

        <Reveal delay={0.1} style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
          {MENU_CATS.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileTap={{ scale: 0.93 }}
              style={{
                padding: "8px 20px", borderRadius: 100, cursor: "pointer",
                border: `1px solid ${active === cat ? C.brown : C.border}`,
                fontWeight: active === cat ? 700 : 500, fontSize: "0.8rem",
                background: active === cat ? C.brown : "transparent",
                color: active === cat ? C.cream : C.muted,
                transition: "all 0.3s ease",
              }}
            >
              {cat}
            </motion.button>
          ))}
        </Reveal>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 16 }}>
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.25) }}
                whileHover={{ y: -5 }}
                style={{ background: C.card, borderRadius: 18, padding: "24px", border: `1px solid ${C.border}`, position: "relative", cursor: "default" }}
              >
                {item.popular && (
                  <span style={{ position: "absolute", top: 14, right: 14, background: C.gold, color: "#0A0806", fontSize: "0.58rem", fontWeight: 800, padding: "3px 10px", borderRadius: 100, letterSpacing: "0.1em" }}>
                    POPULAR
                  </span>
                )}
                <h3 style={{ color: C.cream, fontWeight: 700, fontSize: "1rem", marginBottom: 7, marginTop: 4 }}>{item.name}</h3>
                <p style={{ color: C.muted, fontSize: "0.8rem", lineHeight: 1.65, marginBottom: 18 }}>{item.desc}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ color: C.gold, fontWeight: 800, fontSize: "1.15rem", fontFamily: "Georgia, serif" }}>Rs. {item.price}</div>
                  <div style={{ color: C.muted, fontSize: "0.7rem", background: `${C.border}80`, padding: "3px 10px", borderRadius: 100 }}>{item.cat}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal delay={0.15} className="text-center" style={{ marginTop: 32 }}>
          <p style={{ color: C.muted, fontSize: "0.8rem" }}>Menu subject to seasonal updates &middot; All prices inclusive</p>
        </Reveal>
      </div>
    </section>
  );
}
