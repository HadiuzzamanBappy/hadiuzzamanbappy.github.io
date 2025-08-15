import React, { useContext } from 'react'; // 1. Import useContext
import { Link } from 'react-router-dom';
import { FiLayout } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { CursorContext } from '../../context/CursorContext'; // 2. Import the CursorContext

// Expanded project data to include titles for the hover captions
const projectData = [
  {
    title: "Mountain Sunrise",
    imgSrc: "/public/images/project/pf1.jpg"
  },
  {
    title: "Lakeside Retreat",
    imgSrc: "/public/images/project/pf2.jpg"
  },
  {
    title: "Coastal Getaway",
    imgSrc: "/public/images/project/pf3.jpg"
  },
  {
    title: "Forest Trail",
    imgSrc: "/public/images/project/pf4.jpg"
  },
];

// MODIFIED: This component now accepts an `index` prop to determine its caption's position.
const ProjectImage = ({ title, imgSrc, index }) => {

  // Determine position and gradient classes based on the image's index in the grid.
  let positionClasses = '';
  let gradientClasses = '';

  switch (index) {
    case 0: // Top-Left
      positionClasses = 'items-start text-left';
      gradientClasses = 'bg-gradient-to-b from-black/60 to-transparent';
      break;
    case 1: // Top-Right
      positionClasses = 'items-start text-right';
      gradientClasses = 'bg-gradient-to-b from-black/60 to-transparent';
      break;
    case 2: // Bottom-Left
      positionClasses = 'items-end text-left';
      gradientClasses = 'bg-gradient-to-t from-black/60 to-transparent';
      break;
    case 3: // Bottom-Right
      positionClasses = 'items-end text-right';
      gradientClasses = 'bg-gradient-to-t from-black/60 to-transparent';
      break;
    default: // A fallback for any additional images
      positionClasses = 'items-end text-left';
      gradientClasses = 'bg-gradient-to-t from-black/60 to-transparent';
  }

  return (
    <motion.div
      className="relative rounded-lg overflow-hidden group"
      whileHover={{ scale: 1.1, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="aspect-[4/3]">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* The caption now uses the dynamic classes for positioning and gradients */}
      <div className={`absolute inset-0 flex p-4 opacity-0 group-hover:opacity-100 transition-opacity ${positionClasses} ${gradientClasses}`}>
        <h3 className="text-white text-sm font-semibold">{title}</h3>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  // 3. Get the function to change the cursor's variant
  const { setCursorVariant } = useContext(CursorContext);

  // 4. Create the event handlers
  const handleMouseEnter = () => setCursorVariant('link');
  const handleMouseLeave = () => setCursorVariant('default');
  return (
    <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-lg flex-grow flex flex-col h-full w-full">
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-300">
          <FiLayout /><span>Projects</span>
        </div>
      </div>
      <div className="relative flex-grow flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4">
          {projectData.map((project, index) => (
            <ProjectImage key={project.title} title={project.title} imgSrc={project.imgSrc} index={index} />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-2xl hover:shadow-xl transition-shadow pointer-events-auto">
            <Link
              to="/projects"
              // 5. Apply handlers to each individual link as well
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative block bg-gray-100 dark:bg-slate-700 py-2 px-5 rounded-lg border border-gray-200 dark:border-slate-600 text-gray-700 dark:text-gray-200 font-semibold transition-transform hover:scale-105"
            >
              <span className="absolute inset-0 scale-105 bg-purple-800/20 rounded-lg blur-md animate-pulse"></span>
              <span className="relative">View Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;