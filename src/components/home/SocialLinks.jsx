import React, { useContext } from 'react'; // 1. Import useContext
import { FaLinkedinIn, FaBehance, FaDribbble, FaGithub } from 'react-icons/fa';
import { CursorContext } from '../../context/CursorContext'; // 2. Import the CursorContext

const links = [
  { href: "https://bd.linkedin.com/in/hadiuzzamanbappy", icon: FaLinkedinIn },
  { href: "https://www.behance.net/hbappy79", icon: FaBehance },
  { href: "https://dribbble.com/hadiuzzamanbappy", icon: FaDribbble },
  { href: "https://github.com/HadiuzzamanBappy", icon: FaGithub },
];

const SocialLinks = () => {
  // 3. Get the function to change the cursor's variant
  const { setCursorVariant } = useContext(CursorContext);

  // 4. Create the event handlers
  const handleMouseEnter = () => setCursorVariant('link');
  const handleMouseLeave = () => setCursorVariant('default');

  return (
    <div 
      className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-lg flex justify-between items-center group [perspective:800px] transition-transform duration-500 hover:[transform:rotateX(5deg)_rotateY(-5deg)]"
      // 5. Apply handlers to the main container for a better UX
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="text-gray-600 dark:text-gray-300 font-medium">Follow me</span>
      <div className="flex gap-3">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center border border-gray-300 dark:border-slate-700 rounded-full text-xl text-gray-700 dark:text-gray-300 transition-all duration-300 group-hover:scale-90 hover:!scale-110 hover:!shadow-lg hover:bg-gray-100 dark:hover:bg-slate-700"
            // 5. Apply handlers to each individual link as well
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <link.icon />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;