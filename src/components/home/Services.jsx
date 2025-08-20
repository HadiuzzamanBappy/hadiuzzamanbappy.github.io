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
  // Duplicate services for seamless loop
  const duplicatedServices = [...services, ...services];

  const x = useMotionValue(0);
  const oneSetWidth = services.length * 160;

  // Wrap x value for infinite scroll effect
  const xWrapped = useTransform(x, (latest) => (latest % oneSetWidth));

  return (
    <div className="bg-white/50 dark:bg-purple-800/20 p-4 rounded-2xl shadow-lg">
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-300">
          <FiBookmark /><span>Services</span>
        </div>
      </div>
      <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        {/* Draggable and animated track */}
        <motion.div
          className="flex gap-4"
          style={{ x: xWrapped }}
          drag="x"
          dragConstraints={{ left: -oneSetWidth, right: 0 }}
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
