import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function FloatingLogo() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollY } = useScroll();

  // If mobile, keep it strictly in its final Navbar position from the start
  const x = useTransform(scrollY, [0, 400], [isMobile ? "0vw" : "8vw", "0vw"]);
  const y = useTransform(scrollY, [0, 400], [isMobile ? "0vh" : "46vh", "0vh"]);
  const scale = useTransform(scrollY, [0, 400], [isMobile ? 1 : 2.2, 1]);

  return (
    <motion.div 
      style={{ x, y, scale, transformOrigin: "top left" }}
      className="fixed top-6 left-4 md:left-8 z-50 flex items-center h-[46px]"
    >
      <motion.img 
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        src="/logos/ACM.png" 
        alt="ACM NITK Logo" 
        className="w-32 md:w-48 h-auto object-contain cursor-pointer brightness-0 dark:invert transition-all duration-300"
      />
    </motion.div>
  );
}