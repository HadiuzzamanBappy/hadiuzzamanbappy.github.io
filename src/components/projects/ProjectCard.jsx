import React, { useContext } from 'react';
import { motion } from 'framer-motion';
// THE CHANGE: Import useNavigate instead of Link
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaBehance } from 'react-icons/fa';
import { SiNetlify, SiVercel } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import { CursorContext } from '../../context/CursorContext';

const ProjectCard = ({ project }) => {
    const { setCursorVariant } = useContext(CursorContext);
    // THE CHANGE: Initialize the navigate function from React Router
    const navigate = useNavigate();

    const handleMouseEnter = () => setCursorVariant('view');
    const handleMouseLeave = () => setCursorVariant('default');

    // THE CHANGE: This function will handle the navigation when the card is clicked
    const handleCardClick = () => {
        navigate(`/projects/${project.id}`);
    };

    const renderIcon = (key) => {
        switch (key) {
            case 'github': return <FaGithub />;
            case 'behance': return <FaBehance />;
            case 'netlify': return <SiNetlify />;
            case 'vercel': return <SiVercel />;
            case 'live': return <FiExternalLink />;
            default: return null;
        }
    };

    return (
        // THE CHANGE: The wrapper is now a motion.div with an onClick handler.
        // It's no longer a <Link> component.
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="group relative mb-8 break-inside-avoid rounded-2xl overflow-hidden cursor-none"
            onClick={handleCardClick} // Navigate when this div is clicked
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* The inner structure remains the same */}
            <img
                src={project.previewImage}
                alt={project.title}
                className="w-full h-auto object-cover transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:brightness-75"
            />
            
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl
                      bg-white/70 dark:bg-black/50 backdrop-blur-lg
                      border border-white/20 dark:border-white/10 shadow-xl
                      transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:bottom-6 group-hover:left-6 group-hover:right-6">
                
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                            <span key={index} className="bg-black/10 dark:bg-white/10 text-gray-800 dark:text-gray-200 text-xs font-semibold px-3 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="max-h-0 group-hover:max-h-48 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] mt-0 group-hover:mt-4">
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                    
                    <div className="flex items-center gap-3">
                        {project.links && Object.entries(project.links).map(([key, url]) => (
                            // These are standard <a> tags and are perfectly valid here
                            <a
                                key={key}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()} // This is still crucial
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-black/10 dark:bg-white/10 text-gray-800 dark:text-gray-200 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110"
                                aria-label={`Link to ${key}`}
                            >
                                {renderIcon(key)}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;