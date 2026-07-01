import { useState, useEffect } from "react";
import { useScroll } from "framer-motion";
import { C } from "./theme";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Highlights from "./components/Highlights";
import MenuSection from "./components/Menu";
import Experience from "./components/Experience";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const u = scrollY.on("change", (y) => setScrolled(y > 60));
    return u;
  }, [scrollY]);

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", overflowX: "hidden", background: C.black }}>
      <Nav scrolled={scrolled} open={open} setOpen={setOpen} />
      <Hero />
      <About />
      <Highlights />
      <MenuSection />
      <Experience />
      <Gallery />
      <Reviews />
      <Visit />
      <Footer />
      <BackToTop />
    </div>
  );
}
