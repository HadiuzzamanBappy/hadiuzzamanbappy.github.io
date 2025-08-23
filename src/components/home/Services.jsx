import React from 'react';
import { FiBookmark } from 'react-icons/fi';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const services = [
  {
    name: 'UI/UX Design',
    img: '/public/images/service/ui-ux.jpeg'
  },
  {
    name: 'Frontend Dev',
    img: '/public/images/service/development.jpeg'
  },
  {
    name: 'Product Solution',
    img: '/public/images/service/product-solution.jpeg'
  },
  {
    name: 'Mobile App Design',
    img: '/public/images/service/mobile-app.jpeg'
  },
];

/**
 * Services Component
 * 
 * Displays a horizontally scrolling carousel of service offerings.
 * Features infinite loop scrolling with smooth animations and hover effects.
 */
const Services = () => {
  // Duplicate services for seamless infinite loop
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
