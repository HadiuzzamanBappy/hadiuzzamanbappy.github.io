import React from 'react';
import { FiBookmark } from 'react-icons/fi';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const services = [
  {
    name: 'UI/UX Design',
    img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop&q=80'
  },
  {
    name: 'Frontend Dev',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&q=80'
  },
  {
    name: 'Branding & Identity',
    img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop&q=80'
  },
  {
    name: 'Mobile App Design',
    img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&q=80'
  },
];

const Services = () => {
  // We still duplicate the content for the seamless loop effect
  const duplicatedServices = [...services, ...services];

  // --- Framer Motion Animation Logic ---

  // A motion value to track the drag position.
  const x = useMotionValue(0);

  // We need to know the full width of one set of cards to create the loop.
  // Card width (w-36 = 144px) + margin (mx-2 = 16px) = 160px per card
  const oneSetWidth = services.length * 160;

  // `useTransform` is the key to the infinite loop.
  // It takes the continuously changing `x` value and wraps it between 0 and -oneSetWidth.
  // When x becomes -161, this will output -1. When x is -320, this outputs 0 again.
  const xWrapped = useTransform(x, (latest) => {
    // Ensure the value wraps around using the modulo operator
    return (latest % oneSetWidth);
  });

  // A simple spring transition for a natural feel when dragging
  const transition = {
    type: "spring",
    stiffness: 300,
    damping: 50,
  };

  return (
    <div className="bg-white/50 dark:bg-purple-800/20 p-4 rounded-2xl shadow-lg">
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-300">
          <FiBookmark /><span>Services</span>
        </div>
      </div>

      {/* The main container that handles the infinite scroll and hides the overflow */}
      <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">

        {/* The motion.div is the draggable and animated track */}
        <motion.div
          className="flex gap-4" // Use gap for spacing instead of margin
          style={{ x: xWrapped }} // Apply the wrapped motion value
          drag="x" // Enable horizontal dragging
          // Set constraints so you can't drag past the end of the content
          dragConstraints={{ left: -oneSetWidth, right: 0 }}
          // Animate the base `x` value to create the continuous scroll
          animate={{ x: -oneSetWidth }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "loop" }}
        >
          {duplicatedServices.map((service, index) => (
            <div key={index} className="flex-shrink-0 w-36 h-24 rounded-lg overflow-hidden relative cursor-grab active:cursor-grabbing">
              <img src={service.img} alt={service.name} className="w-full h-full object-cover pointer-events-none" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white font-medium text-center">{service.name}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;