"use client";

// Componente de transição usando Framer Motion
// credits: https://dev.to/joseph42a/nextjs-page-transition-with-framer-motion-33dg

import { motion } from "framer-motion";

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 6, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}
