import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FiLayout } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { CursorContext } from '../../context/CursorContext';
import { projects, featuredProjects } from '../../data/projects';

// Renders a single project image with overlay title
const ProjectImage = ({ title, imgSrc, index }) => {
  let positionClasses = '';
  let gradientClasses = '';

  switch (index) {
    case 0:
      positionClasses = 'items-start text-left';
      gradientClasses = 'bg-gradient-to-b from-black/60 to-transparent';
      break;
    case 1:
      positionClasses = 'items-start text-right';
      gradientClasses = 'bg-gradient-to-b from-black/60 to-transparent';
      break;
    case 2:
      positionClasses = 'items-end text-left';
      gradientClasses = 'bg-gradient-to-t from-black/60 to-transparent';
      break;
    case 3:
      positionClasses = 'items-end text-right';
      gradientClasses = 'bg-gradient-to-t from-black/60 to-transparent';
      break;
    default:
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
      <div className={`absolute inset-0 flex p-4 opacity-0 group-hover:opacity-100 transition-opacity ${positionClasses} ${gradientClasses}`}>
        {/* Truncate long titles */}
        <h3 className="text-white text-sm font-semibold truncate">{title}</h3>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { setCursorVariant } = useContext(CursorContext);

  const handleMouseEnter = () => setCursorVariant('link');
  const handleMouseLeave = () => setCursorVariant('default');

  // Select first 4 featured projects from main projects array
  const displayedProjects = useMemo(() => {
    const featuredIds = featuredProjects.slice(0, 4).map(p => p.id);
    return featuredIds.map(id => projects.find(p => p.id === id)).filter(Boolean);
  }, []);

  return (
    <div className="bg-white/50 dark:bg-purple-800/10 p-4 rounded-2xl shadow-lg flex-grow flex flex-col h-full w-full">
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-300">
          <FiLayout /><span>Projects</span>
        </div>
      </div>
      <div className="relative flex-grow flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4">
          {displayedProjects.map((project, index) => (
            <ProjectImage 
              key={project.id} 
              title={project.title} 
              imgSrc={project.previewImage}
              index={index} 
            />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white dark:bg-purple-800/20 backdrop-blur-sm p-3 rounded-xl shadow-2xl hover:shadow-xl transition-shadow pointer-events-auto">
            <Link
              to="/projects"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative block bg-gray-100 dark:bg-purple-800/50 py-2 px-5 rounded-lg border border-gray-200 dark:border-slate-600 text-gray-700 dark:text-gray-200 font-semibold transition-transform hover:scale-105"
            >
              <span className="absolute inset-0 scale-105 bg-purple-500/20 dark:bg-purple-900 rounded-lg blur-md animate-pulse"></span>
              <span className="relative">View Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
