import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { C } from "../theme";
import { NAV_LINKS } from "../data/content";
import { AOCLogo, goTo } from "./Shared";

export default function Nav({ scrolled, open, setOpen }) {
  return (
    <motion.nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, padding: "14px 24px",
        background: scrolled ? `${C.black}F4` : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.border}` : "none",
        transition: "all 0.4s ease",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <AOCLogo size={42} />
          <div>
            <div style={{ color: C.cream, fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "1rem", fontWeight: "bold", lineHeight: 1 }}>
              Art of Coffee
            </div>
            <div style={{ color: C.muted, fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", marginTop: 2 }}>
              Ujjain, Madhya Pradesh
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 28 }} className="hidden md:flex">
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => goTo(l.toLowerCase())}
              style={{ color: `${C.cream}99`, fontSize: "0.8rem", letterSpacing: "0.03em", background: "none", border: "none", cursor: "pointer", padding: 0, transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.target.style.color = C.gold)}
              onMouseLeave={(e) => (e.target.style.color = `${C.cream}99`)}
            >
              {l}
            </button>
          ))}
          <motion.a
            href="tel:07580802323"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{ background: C.brown, color: C.cream, padding: "9px 22px", borderRadius: 100, fontSize: "0.78rem", textDecoration: "none", fontWeight: 700, boxShadow: `0 4px 18px ${C.brown}50` }}
          >
            Call Now
          </motion.a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          style={{ background: "none", border: "none", color: C.cream, cursor: "pointer", padding: 4 }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: `${C.black}F8`, backdropFilter: "blur(24px)", overflow: "hidden", borderRadius: "0 0 20px 20px", marginTop: 12 }}
          >
            <div style={{ padding: "8px 24px 20px" }}>
              {NAV_LINKS.map((l) => (
                <button
                  key={l}
                  onClick={() => { goTo(l.toLowerCase()); setOpen(false); }}
                  style={{ display: "block", width: "100%", textAlign: "left", color: C.cream, background: "none", border: "none", borderBottom: `1px solid ${C.border}`, padding: "13px 0", fontSize: "1rem", cursor: "pointer" }}
                >
                  {l}
                </button>
              ))}
              <a
                href="tel:07580802323"
                style={{ display: "block", background: C.brown, color: C.cream, textAlign: "center", padding: "13px", borderRadius: 100, marginTop: 16, fontWeight: 700, textDecoration: "none" }}
              >
                075808 02323
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
