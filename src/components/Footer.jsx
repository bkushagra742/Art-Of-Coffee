import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import { C } from "../theme";
import { NAV_LINKS } from "../data/content";
import { AOCLogo, goTo } from "./Shared";

export default function Footer() {
  return (
    <footer style={{ background: C.black, padding: "60px 0 28px", borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div className="grid md:grid-cols-3" style={{ gap: 44, marginBottom: 44 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <AOCLogo size={40} />
              <div>
                <div style={{ color: C.cream, fontFamily: "Georgia, serif", fontStyle: "italic", fontWeight: "bold", fontSize: "1rem" }}>Art of Coffee</div>
                <div style={{ color: C.muted, fontSize: "0.56rem", letterSpacing: "0.2em" }}>UJJAIN, MADHYA PRADESH</div>
              </div>
            </div>
            <p style={{ color: C.muted, fontSize: "0.84rem", lineHeight: 1.75, maxWidth: 220, marginBottom: 20 }}>
              Where every cup tells a story. Ujjain's most loved café experience.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {[Instagram, Facebook].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  style={{ width: 36, height: 36, borderRadius: 10, background: C.card, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: C.muted, textDecoration: "none" }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: C.cream, fontWeight: 700, marginBottom: 18, fontSize: "0.82rem", letterSpacing: "0.08em" }}>QUICK LINKS</h4>
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                onClick={() => goTo(l.toLowerCase())}
                style={{ display: "block", background: "none", border: "none", color: C.muted, marginBottom: 10, fontSize: "0.84rem", cursor: "pointer", padding: 0, transition: "color 0.2s", textAlign: "left" }}
                onMouseEnter={(e) => (e.target.style.color = C.cream)}
                onMouseLeave={(e) => (e.target.style.color = C.muted)}
              >
                {l}
              </button>
            ))}
          </div>

          <div>
            <h4 style={{ color: C.cream, fontWeight: 700, marginBottom: 18, fontSize: "0.82rem", letterSpacing: "0.08em" }}>CONTACT</h4>
            <div style={{ color: C.muted, fontSize: "0.84rem", lineHeight: 2.1 }}>
              <div>A21/20 HIG, Triveni Vihar</div>
              <div>Near D-Mart, Pawapuri Colony</div>
              <div>Ujjain, MP 456010</div>
              <div style={{ marginTop: 8 }}>075808 02323</div>
              <div>9:00 AM – 10:30 PM</div>
              <div>Open 7 Days a Week</div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
          <p style={{ color: `${C.muted}80`, fontSize: "0.76rem" }}>© 2024 Art of Coffee, Ujjain. All rights reserved.</p>
          <p style={{ color: `${C.muted}80`, fontSize: "0.76rem" }}>By V. Surana Group</p>
        </div>
      </div>
    </footer>
  );
}
