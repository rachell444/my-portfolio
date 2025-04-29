"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
//Shows the user button from the second scroll improving accessibility//
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 1.2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onClick={handleClick}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/20 bg-transparent shadow-xl transition-all duration-500 group"
          style={{ boxShadow: "0 4px 24px 0 rgba(37,99,235,0.12)" }}
        >
          <ArrowUp className="w-5 h-5 text-white/60 group-hover:text-white transition-colors duration-500" />
          <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white transition-colors duration-500 pointer-events-none" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
