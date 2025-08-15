import React, { useState, useEffect } from 'react';
import { FaStar, FaAward, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/testimonials'; // Make sure this path is correct

// A small helper component for rendering the star rating
const StarRating = ({ rating }) => {
  return (
    <div className="flex text-xs">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'} />
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Autoplay effect that respects hover state
  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  // Handler for the drag gesture
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    const swipeVelocity = 0.3;

    if (info.offset.x < -swipeThreshold || info.velocity.x < -swipeVelocity) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    } else if (info.offset.x > swipeThreshold || info.velocity.x > swipeVelocity) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }
  };

  return (
    <div
      className="bg-white/50 dark:bg-purple-800/10 p-6 rounded-2xl shadow-lg flex flex-col h-full w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-300">
          <FaAward /><span>Testimonials</span>
        </div>
      </div>

      <div className="relative flex-grow flex flex-col justify-between overflow-hidden">
        
        <motion.div
          className="flex cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex-shrink-0 w-full px-2">
              <div className="flex flex-col items-center text-center">
                
                <FaQuoteLeft className="text-2xl text-gray-200 dark:text-slate-600 mb-2" />
                
                {/* --- THIS IS THE MODIFIED LINE --- */}
                {/* We remove the fixed height (h-28) and add `line-clamp-3` */}
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3">
                  "{testimonial.quote}"
                </p>

                <div className="mt-4 text-center">
                  <p className="font-bold text-sm text-gray-800 dark:text-gray-200">{testimonial.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.title}</p>
                  <div className="mt-1 flex justify-center">
                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </motion.div>

        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="w-8 h-1 rounded-full bg-gray-200 dark:bg-purple-800/30 relative overflow-hidden"
              aria-label={`Go to testimonial ${index + 1}`}
            >
              <motion.div
                className="absolute top-0 left-0 h-full bg-gray-800 dark:bg-gray-200"
                initial={{ width: '0%' }}
                animate={{ width: index === currentIndex ? '100%' : '0%' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;