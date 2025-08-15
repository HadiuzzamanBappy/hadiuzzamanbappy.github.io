import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { CursorContext } from '../../context/CursorContext';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const { cursorVariant } = useContext(CursorContext);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const variants = {
    default: {
      x: position.x - 8,
      y: position.y - 8,
      height: 16,
      width: 16,
      backgroundColor: '#b044ee',
      mixBlendMode: 'difference',
    },
    link: {
      x: position.x - 24,
      y: position.y - 24,
      height: 48,
      width: 48,
      backgroundColor: '#b044ee',
      mixBlendMode: 'difference',
    },
    view: {
      x: position.x - 45,
      y: position.y - 45,
      height: 90,
      width: 90,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      mixBlendMode: 'difference',
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full z-[9999] pointer-events-none flex items-center justify-center"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    >
      {cursorVariant === 'view' && (
        <span className="text-black font-bold text-sm">View</span>
      )}
    </motion.div>
  );
};

export default CustomCursor;