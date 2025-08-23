import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { animate } from 'framer-motion';
import { FiLayout, FiStar, FiTrendingUp } from 'react-icons/fi';

/**
 * AnimatedStat Component
 * 
 * Individual statistic that animates its number from 0 to target value
 * when it enters the viewport. Features smooth counting animation.
 */
const AnimatedStat = ({ to, label, icon: Icon }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      // Animate number counting from 0 to target
      const controls = animate(0, to, {
        duration: 2,
        onUpdate(value) {
          setDisplayValue(Math.round(value));
        }
      });
      return () => controls.stop();
    }
  }, [inView, to]);

  return (
    <div
      ref={ref}
      className="bg-white/50 dark:bg-purple-800/10 p-4 rounded-2xl shadow-lg text-center flex-grow flex flex-col justify-center items-center"
    >
      <h5 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
        <span>{displayValue}</span>+
      </h5>
      <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1 mt-1">
        <Icon />{label}
      </span>
    </div>
  );
};

/**
 * Stats Component
 * 
 * Displays key professional statistics in a 3-column grid layout.
 * Features animated counters that trigger when scrolled into view.
 */
const Stats = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <AnimatedStat to={4} label="Years XP" icon={FiTrendingUp} />
      <AnimatedStat to={9} label="Clients" icon={FiStar} />
      <AnimatedStat to={17} label="Projects" icon={FiLayout} />
    </div>
  );
};

export default Stats;