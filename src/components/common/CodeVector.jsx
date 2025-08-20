import React from 'react';
import { motion } from 'framer-motion';

// Stagger the animation of each character/symbol
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Time between each character drawing
      delayChildren: 1, // Initial delay before the animation starts
    },
  },
};

// Define how each character/symbol "draws" itself
const drawVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: 'spring', duration: 1.5, bounce: 0 },
      opacity: { duration: 0.01 },
    },
  },
};

export const CodeVector = () => {
  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 250 200" // Increased width to fit more characters
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="text-purple-400/50 dark:text-purple-500/30"
    >
      {/* Each <motion.path> is a character that will be drawn in sequence */}
      
      {/* Parentheses: () */}
      <motion.path d="M 50 70 A 20 30 0 0 1 50 130" fill="none" stroke="currentColor" strokeWidth="3" variants={drawVariants} />
      <motion.path d="M 80 70 A 20 30 0 0 0 80 130" fill="none" stroke="currentColor" strokeWidth="3" variants={drawVariants} />
      
      {/* Arrow: => */}
      <motion.path d="M 95 100 L 125 100" fill="none" stroke="currentColor" strokeWidth="3" variants={drawVariants} />
      <motion.path d="M 115 90 L 125 100 L 115 110" fill="none" stroke="currentColor" strokeWidth="3" variants={drawVariants} />
      
      {/* Curly Braces: {} */}
      <motion.path d="M 145 60 C 135 80, 135 120, 145 140" fill="none" stroke="currentColor" strokeWidth="3" variants={drawVariants} />
      <motion.path d="M 185 60 C 195 80, 195 120, 185 140" fill="none" stroke="currentColor" strokeWidth="3" variants={drawVariants} />

      {/* Blinking Cursor at the end */}
      <motion.path
        d="M 165 80 L 165 120" // A simple vertical line inside the braces
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }} // Blinking animation
        transition={{
          delay: 2.5, // Start blinking after the code is written
          duration: 1,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
      />
    </motion.svg>
  );
};