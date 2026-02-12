"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AsciiPlasma } from "@/components/ascii-plasma";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9997] flex flex-col items-center justify-center bg-background"
        >
          <div className="mb-6 overflow-hidden opacity-40">
            <AsciiPlasma color="#c8ff00" size={10} width={50} height={14} />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs font-medium uppercase tracking-[0.4em] text-text-tertiary"
          >
            Mack Grissom
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
