import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { animate } from 'framer-motion';
import { FiLayout, FiStar, FiTrendingUp } from 'react-icons/fi';

const AnimatedStat = ({ to, label, icon: Icon }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
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
    <div ref={ref} className="bg-white/50 dark:bg-purple-800/10 p-4 rounded-2xl shadow-lg text-center flex-grow flex flex-col justify-center items-center">
      <h5 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
        <span>{displayValue}</span>+
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1 mt-1">
        <Icon />{label}
      </span>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <AnimatedStat to={3} label="Years XP" icon={FiTrendingUp} />
      <AnimatedStat to={11} label="Clients" icon={FiStar} />
      <AnimatedStat to={17} label="Projects" icon={FiLayout} />
    </div>
  );
};

export default Stats;