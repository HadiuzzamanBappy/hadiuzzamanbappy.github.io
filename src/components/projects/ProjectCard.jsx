import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaBehance, FaDribbble, FaYoutube, FaLinkedin, FaTwitter, FaFacebook, FaSlack, FaMedium } from 'react-icons/fa';
import { SiNetlify, SiVercel, SiFigma, SiNotion, SiDevdotto } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { CursorContext } from '../../context/CursorContext';

const ProjectCard = ({ project }) => {
    const { setCursorVariant } = useContext(CursorContext);
    const navigate = useNavigate();

    const handleMouseEnter = () => setCursorVariant('view');
    const handleMouseLeave = () => setCursorVariant('default');

    // Handles card click: external links open in new tab, internal navigates
    const handleCardClick = () => {
        if (project.linkType === 'external') {
            window.open(project.url, '_blank', 'noopener,noreferrer');
        } else {
            navigate(`/projects/${project.id}`);
        }
    };

    // Returns appropriate icon for each link type
    const renderIcon = (key) => {
        switch (key) {
            case 'github': return <FaGithub />;
            case 'behance': return <FaBehance />;
            case 'netlify': return <SiNetlify />;
            case 'vercel': return <SiVercel />;
            case 'live':
            case 'website':
            case 'demo':
            case 'portfolio': return <FiExternalLink />;
            case 'code': return <FaGithub />;
            case 'figma': return <SiFigma />;
            case 'dribbble': return <FaDribbble />;
            case 'youtube': return <FaYoutube />;
            case 'linkedin': return <FaLinkedin />;
            case 'twitter': return <FaTwitter />;
            case 'facebook': return <FaFacebook />;
            case 'slack': return <FaSlack />;
            case 'notion': return <SiNotion />;
            case 'medium': return <FaMedium />;
            case 'devto': return <SiDevdotto />;
            case 'discord': return <FaDiscord />;
            case 'email': return <MdEmail />;
            default: return null;
        }
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="group relative mb-8 break-inside-avoid overflow-visible cursor-none"
            onClick={handleCardClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                src={project.previewImage}
                alt={project.title}
                className="w-full h-auto object-cover rounded-2xl overflow-hidden transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:brightness-75"
            />

            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl
                      bg-white/60 dark:bg-purple-900/40 backdrop-blur-lg
                      border border-white/20 dark:border-white/10 shadow-xl
                      transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ">

                <div>
                    <h6 className="font-medium text-gray-900 dark:text-white mb-2">{project.title}</h6>
                </div>

                <div className="max-h-0 group-hover:max-h-48 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] mt-0 group-hover:mt-4 group-hover:overflow-visible">
                    <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.map((tag, index) => (
                            <span key={index} className="bg-black/10 dark:bg-white/10 text-gray-800 dark:text-gray-200 text-xs font-semibold px-3 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">{project.description}</p>
                    <div className="flex items-center gap-3">
                        {/* Individual link icons; stopPropagation prevents card click */}
                        {project.links && Object.entries(project.links).map(([key, url]) => (
                            <a
                                key={key}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-black/10 dark:bg-white/10 text-gray-800 dark:text-gray-200 hover:bg-purple-600 hover:text-white transition-all transform hover:scale-110"
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
