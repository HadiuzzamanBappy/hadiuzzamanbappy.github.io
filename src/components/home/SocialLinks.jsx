import React, { useContext } from 'react'; // 1. Import useContext
import { CursorContext } from '../../context/CursorContext'; // 2. Import the CursorContext
import { socialLinksHome } from '../../data/social'; // Adjust the path as necessary

const SocialLinks = () => {
  // 3. Get the function to change the cursor's variant
  const { setCursorVariant } = useContext(CursorContext);

  // 4. Create the event handlers
  const handleMouseEnter = () => setCursorVariant('link');
  const handleMouseLeave = () => setCursorVariant('default');

  return (
    <div
      className="bg-white/50 dark:bg-purple-800/10 p-4 rounded-2xl shadow-lg flex justify-between items-center group [perspective:800px] transition-transform duration-500 hover:[transform:rotateX(5deg)_rotateY(-5deg)]"
      // 5. Apply handlers to the main container for a better UX
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
            // 5. Apply handlers to each individual link as well
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