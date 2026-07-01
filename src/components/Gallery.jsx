import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { C } from "../theme";
import { I } from "../data/images";
import { GALLERY } from "../data/content";
import { Reveal, Label } from "./Shared";

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" style={{ background: C.surface, padding: "96px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <Reveal className="text-center" style={{ marginBottom: 48 }}>
          <Label>Visual Journey</Label>
          <h2 style={{ fontFamily: "Georgia, serif", fontStyle: "italic", color: C.cream, fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}>
            The <span style={{ color: C.brown }}>Gallery</span>
          </h2>
        </Reveal>
        <div style={{ columns: "2 200px", gap: 12 }}>
          {GALLERY.map((g, i) => (
            <Reveal key={i} delay={i * 0.07} style={{ marginBottom: 12, breakInside: "avoid" }}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => setLightbox(g)}
                style={{ borderRadius: 16, overflow: "hidden", position: "relative", cursor: "pointer", boxShadow: `0 4px 20px ${C.black}60` }}
              >
                <img src={I[g.img]} alt={g.label} style={{ width: "100%", display: "block", objectFit: "cover" }} />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{ position: "absolute", inset: 0, background: `${C.black}65`, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-end", padding: "20px 18px" }}
                >
                  <span style={{ color: C.cream, fontWeight: 600, fontSize: "0.85rem" }}>{g.label}</span>
                </motion.div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{ position: "fixed", inset: 0, zIndex: 100, background: `${C.black}F0`, backdropFilter: "blur(14px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{ maxWidth: "85vw", maxHeight: "80vh", borderRadius: 20, overflow: "hidden", boxShadow: `0 40px 100px ${C.black}` }}
            >
              <img src={I[lightbox.img]} alt={lightbox.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </motion.div>
            <p style={{ color: `${C.cream}90`, fontSize: "0.88rem", letterSpacing: "0.06em" }}>{lightbox.label}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
