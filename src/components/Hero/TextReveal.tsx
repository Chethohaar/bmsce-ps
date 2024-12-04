import React from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
  children: React.ReactNode;
}

const TextReveal: React.FC<TextRevealProps> = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 1,
          ease: [0.6, 0.01, -0.05, 0.95],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TextReveal;