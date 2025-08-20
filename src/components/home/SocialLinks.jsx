import React, { useContext } from 'react';
import { CursorContext } from '../../context/CursorContext';
import { socialLinksHome } from '../../data/social';

const SocialLinks = () => {
  // Get cursor variant setter from context
  const { setCursorVariant } = useContext(CursorContext);

  const handleMouseEnter = () => setCursorVariant('link');
  const handleMouseLeave = () => setCursorVariant('default');

  return (
    <div
      className="bg-white/50 dark:bg-purple-800/10 p-4 rounded-2xl shadow-lg flex justify-between items-center group [perspective:800px] transition-transform duration-500 hover:[transform:rotateX(5deg)_rotateY(-5deg)]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="text-gray-600 dark:text-gray-300 font-medium">Follow me</span>
      <div className="flex gap-3">
        {socialLinksHome.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="w-10 h-10 flex items-center justify-center border border-gray-300 dark:border-slate-700 rounded-full text-xl text-gray-700 dark:text-gray-300 transition-all duration-300 group-hover:scale-90 hover:!scale-110 hover:!shadow-lg hover:bg-gray-100 dark:hover:bg-slate-700"
            // Also handle cursor on individual links
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <link.Icon size={20} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
