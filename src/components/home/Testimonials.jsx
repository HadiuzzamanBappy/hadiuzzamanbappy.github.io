import React, { useState, useEffect } from 'react';
import { FaStar, FaAward, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/testimonials';

/**
 * StarRating Component
 * 
 * Displays a 5-star rating with filled and empty stars
 * based on the provided rating value.
 */
const StarRating = ({ rating }) => (
  <div className="flex text-xs">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'} />
    ))}
  </div>
);

/**
 * Testimonials Component
 * 
 * Auto-rotating testimonial carousel with swipe support and hover pause.
 * Features smooth transitions and interactive navigation dots.
 */
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance testimonials, pause on hover
  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  // Handle swipe gestures for mobile navigation
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
        {/* Carousel with swipe/drag support */}
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
                {/* Clamp quote to 3 lines */}
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

        {/* Carousel navigation dots */}
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