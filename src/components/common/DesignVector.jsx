import React from 'react';
import { motion } from 'framer-motion';

export const DesignVector = () => {
  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 200 200"
      initial="initial"
      animate="animate"
      className="text-purple-400/50 dark:text-purple-500/30"
    >
      {/* Base static paths (the faint lines in the background) */}
      <path d="M 40 40 L 100 100 L 40 160" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <path d="M 100 100 L 160 100" fill="none" stroke="currentColor" strokeWidth="0.5" />

      {/* --- THE FIX: The Animating Pulse --- */}
      {/* This is a small segment of the path that will travel back and forth */}
      <motion.path
        d="M 40 40 L 100 100 L 40 160" // The same path as the background line
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round" // Makes the ends of the pulse soft
        
        // Define the segment that will be visible
        // This creates a "dash" that is 20 units long.
        strokeDasharray="20 230" // 20 visible, 230 invisible (total path length is ~250)
        
        // Animate the pathOffset to move the visible segment
        animate={{
          pathOffset: [0, 1], // Go from start (0) to end (1)
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse', // This is the key: it makes the animation go back and forth
          ease: 'easeInOut',
        }}
      />
      
      {/* Breathing nodes (these are already looping correctly) */}
      <motion.circle 
        cx="40" cy="40" r="4" fill="currentColor" 
        animate={{ scale: [1, 1.2, 1] }} 
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.circle 
        cx="40" cy="160" r="4" fill="currentColor" 
        animate={{ scale: [1, 1.2, 1] }} 
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      <motion.rect 
        x="95" y="95" width="10" height="10" rx="2" fill="currentColor" 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
       <motion.rect 
        x="155" y="95" width="10" height="10" rx="2" fill="currentColor" 
        animate={{ scale: [1, 1.2, 1] }} 
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />
    </motion.svg>
  );
};