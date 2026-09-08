import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LampContainer } from "./lamp";

export default function Hero({ children }) {
  // Check if the screen is mobile size
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollY } = useScroll();
  
  // If mobile, start at 0vw (center). If desktop, start pushed right (20vw).
  const x = useTransform(scrollY, [0, 400], [isMobile ? "0vw" : "20vw", "0vw"]);

  return (
    <section className="relative w-full h-screen overflow-visible bg-transparent z-10">
      <LampContainer>
        <motion.h1
          style={{ x }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="py-4 text-center tracking-tight leading-tight md:leading-snug flex flex-col items-center justify-center gap-2"
        >
          {children}
        </motion.h1>
      </LampContainer>
    </section>
  );
}