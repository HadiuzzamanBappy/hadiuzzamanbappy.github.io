import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { CursorContext } from '../../context/CursorContext';

/**
 * CustomCursor Component
 * 
 * Provides an animated custom cursor that follows mouse movement and adapts to different
 * interaction states (default, link hover, view mode). Automatically disabled on touch devices.
 */
const CustomCursor = () => {
  // Detect touch devices to disable custom cursor
  const [isCoarsePointer, setIsCoarsePointer] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(pointer: coarse)').matches;
    }
    return false;
  });

  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isMouseInViewport, setIsMouseInViewport] = useState(true);
  const { cursorVariant } = useContext(CursorContext);

  useEffect(() => {
    // Skip cursor tracking on touch devices
    if (isCoarsePointer) return;

    const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const handleMouseEnter = () => setIsMouseInViewport(true);
    const handleMouseLeave = () => setIsMouseInViewport(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isCoarsePointer]);

  // Cursor appearance variants for different interaction states
  const variants = {
    default: { x: position.x - 8, y: position.y - 8, height: 16, width: 16, backgroundColor: '#b044ee' },
    link: { x: position.x - 24, y: position.y - 24, height: 48, width: 48, backgroundColor: '#b044ee4f' },
    view: { x: position.x - 45, y: position.y - 45, height: 90, width: 90, backgroundColor: '#b044ee4f' },
    hidden: { opacity: 0, scale: 0, x: position.x, y: position.y }
  };
  
  // Don't render custom cursor on touch devices
  if (isCoarsePointer) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full z-[9999] pointer-events-none flex items-center justify-center"
      variants={variants}
      animate={isMouseInViewport ? cursorVariant : 'hidden'}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    >
      {cursorVariant === 'view' && (
        <span className="text-purple-200 font-bold text-sm">View</span>
      )}
    </motion.div>
  );
};

export default CustomCursor;