import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { C } from "../theme";
import { Reveal, Label } from "./Shared";

const DETAILS = [
  { icon: MapPin, color: C.brown, title: "Location", content: "A21/20 HIG, Triveni Vihar, Near D-Mart, Pawapuri Colony, Ujjain, MP 456010" },
  { icon: Phone, color: C.green, title: "Phone", content: "075808 02323" },
  { icon: Clock, color: C.gold, title: "Hours", content: "Monday to Sunday · 9:00 AM to 10:30 PM" },
];

export default function Visit() {
  return (
    <section id="visit" style={{ background: C.surface, padding: "96px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <Reveal className="text-center" style={{ marginBottom: 56 }}>
          <Label>Find Us</Label>
          <h2 style={{ fontFamily: "Georgia, serif", fontStyle: "italic", color: C.cream, fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}>
            Come <span style={{ color: C.brown }}>Visit Us</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2" style={{ gap: 56, alignItems: "start" }}>
          <div>
            {DETAILS.map(({ icon: Icon, color, title, content }, i) => (
              <Reveal key={title} delay={i * 0.12}>
                <div style={{ display: "flex", gap: 16, marginBottom: 30 }}>
                  <div style={{ width: 50, height: 50, borderRadius: 14, background: `${color}14`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: `1px solid ${color}22` }}>
                    <Icon size={20} color={color} />
                  </div>
                  <div>
                    <div style={{ color: C.muted, fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 5 }}>{title}</div>
                    <div style={{ color: C.cream, fontWeight: 600, lineHeight: 1.65, fontSize: "0.93rem" }}>{content}</div>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.4} style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
              <motion.a
                href="tel:07580802323"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                style={{ background: C.brown, color: C.cream, padding: "13px 26px", borderRadius: 100, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, boxShadow: `0 8px 28px ${C.brown}45`, fontSize: "0.88rem" }}
              >
                <Phone size={14} /> Call Now
              </motion.a>
              <motion.a
                href="https://wa.me/917580802323"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                style={{ background: "#1E7D3A", color: "white", padding: "13px 26px", borderRadius: 100, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, fontSize: "0.88rem" }}
              >
                <MessageCircle size={14} /> WhatsApp
              </motion.a>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: `0 24px 70px ${C.black}80`, border: `1px solid ${C.border}` }}>
              <iframe
                title="Art of Coffee Ujjain"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.9!2d75.7849!3d23.1793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396327d2a9ee12ad%3A0xd3448098e0b2c08!2sArt%20Of%20Coffee!5e0!3m2!1sen!2sin!4v1700000000"
                width="100%"
                height="380"
                style={{ border: "none", display: "block", filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
