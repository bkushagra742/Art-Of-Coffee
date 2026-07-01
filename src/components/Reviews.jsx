import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { C } from "../theme";
import { I } from "../data/images";
import { REVIEWS } from "../data/content";
import { Reveal, Label, Blob } from "./Shared";

export default function Reviews() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % REVIEWS.length), 5000);
    return () => clearInterval(t);
  }, []);

  const r = REVIEWS[idx];

  return (
    <section id="reviews" style={{ background: C.black, padding: "96px 0", position: "relative", overflow: "hidden" }}>
      <Blob color={C.gold} style={{ width: 450, height: 450, top: "10%", right: "-8%" }} />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <Reveal className="text-center" style={{ marginBottom: 48 }}>
          <Label color={C.gold}>Real Guests &middot; Real Ujjain</Label>
          <h2 style={{ fontFamily: "Georgia, serif", fontStyle: "italic", color: C.cream, fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}>
            What People <span style={{ color: C.gold }}>Are Saying</span>
          </h2>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -22 }}
            transition={{ duration: 0.55 }}
            style={{ background: C.card, borderRadius: 24, border: `1px solid ${C.border}`, overflow: "hidden", marginBottom: 28 }}
          >
            <div className="grid md:grid-cols-2">
              <div style={{ height: 320 }}>
                <img src={I[r.img]} alt="cafe experience" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ padding: "36px 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} size={17} color={C.gold} fill={C.gold} />
                  ))}
                </div>
                <p style={{ color: C.cream, fontSize: "1rem", lineHeight: 1.85, fontStyle: "italic", marginBottom: 24 }}>"{r.text}"</p>
                <div>
                  <div style={{ color: C.gold, fontWeight: 700, fontSize: "0.95rem" }}>{r.name}</div>
                  <div style={{ color: C.muted, fontSize: "0.76rem", marginTop: 3 }}>
                    {r.loc} &middot; {r.date}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 44 }}>
          {REVIEWS.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setIdx(i)}
              animate={{ width: i === idx ? 28 : 8 }}
              style={{ height: 7, borderRadius: 100, background: i === idx ? C.gold : `${C.cream}22`, border: "none", cursor: "pointer", transition: "background 0.4s" }}
            />
          ))}
        </div>

        <Reveal className="text-center">
          <a
            href="https://share.google/3XPvRd1wplLySgX55"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, color: C.muted, fontSize: "0.82rem", textDecoration: "none", border: `1px solid ${C.border}`, padding: "10px 22px", borderRadius: 100, transition: "all 0.2s" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = C.gold;
              e.currentTarget.style.color = C.gold;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = C.border;
              e.currentTarget.style.color = C.muted;
            }}
          >
            <Star size={13} color={C.gold} fill={C.gold} />
            View all Google Reviews
            <ExternalLink size={12} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
