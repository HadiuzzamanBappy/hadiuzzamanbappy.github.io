import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiTag, FiLink } from 'react-icons/fi';
import { FaGithub, FaBehance, FaDribbble, FaYoutube, FaLinkedin, FaTwitter, FaFacebook, FaSlack, FaMedium } from 'react-icons/fa';
import { SiNetlify, SiVercel, SiFigma, SiNotion, SiDevdotto } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import { projects, archivedProjects } from '../data/projects';
import { CursorContext } from '../context/CursorContext';

const allProjects = [...projects, ...archivedProjects];

// This helper function remains unchanged
const renderIcon = (key) => {
    switch (key) {
        case 'github': return <FaGithub />;
        case 'behance': return <FaBehance />;
        case 'netlify': return <SiNetlify />;
        case 'vercel': return <SiVercel />;
        case 'live': return <FiExternalLink />;
        case 'website': return <FiExternalLink />;
        case 'demo': return <FiExternalLink />;
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
        case 'portfolio': return <FiExternalLink />;
        default: return null;
    }
};

// --- NEW: A reusable component for a link button with a tooltip ---
const LinkButton = ({ href, label, iconKey, onMouseEnter, onMouseLeave }) => (
    <div className="relative group">
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            aria-label={label}
            className="w-12 h-12 flex items-center justify-center rounded-full text-xl text-slate-700 dark:text-gray-300 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 backdrop-blur-sm hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-400 dark:hover:border-purple-500 transition-all transform hover:scale-110"
        >
            {renderIcon(iconKey)}
        </a>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            {label}
            <div className="absolute left-1/2 top-full -translate-x-1/2 -mt-px w-2.5 h-2.5 bg-slate-900 transform rotate-45"></div>
        </div>
    </div>
);


const ProjectDetailPage = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);
    const { setCursorVariant } = useContext(CursorContext);

    useEffect(() => {
        const foundProject = allProjects.find(p => p.id === projectId);
        setProject(foundProject);
        window.scrollTo(0, 0);
    }, [projectId]);

    const handleLinkEnter = () => setCursorVariant('link');
    const handleDefaultEnter = () => setCursorVariant('default');

    const getMainUrlInfo = (urlString) => {
        if (!urlString) return null;
        if (urlString.includes('behance.net')) return { label: 'View on Behance', key: 'behance' };
        if (urlString.includes('dribbble.com')) return { label: 'View on Dribbble', key: 'dribbble' };
        if (urlString.includes('github.com')) return { label: 'View on GitHub', key: 'github' };
        if (urlString.includes('vercel.app')) return { label: 'View Live Site', key: 'vercel' };
        return { label: 'View Project Source', key: 'live' };
    };

    const mainUrlInfo = project ? getMainUrlInfo(project.url) : null;
    const additionalLinks = project?.links ? Object.entries(project.links).filter(([, url]) => url) : [];

    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
    const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.4 } } };

    if (!project) {
        // Error handling page remains the same
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-center">
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">Project Not Found</h2>
                <Link to="/projects" onMouseEnter={handleLinkEnter} onMouseLeave={handleDefaultEnter} className="flex items-center gap-2 px-6 py-3 bg-purple-700 text-white font-semibold rounded-full /* ... */">
                    <FiArrowLeft /> Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <motion.div
            className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20"
            variants={containerVariants} initial="hidden" animate="visible" onMouseEnter={handleDefaultEnter}
        >
            <motion.div variants={itemVariants} className="mb-12">
                <Link to="/projects" onMouseEnter={handleLinkEnter} onMouseLeave={handleDefaultEnter} className="inline-flex items-center gap-2 /* ... */">
                    <FiArrowLeft className="transform group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Projects</span>
                </Link>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                <motion.div variants={itemVariants} className="lg:col-span-2">
                    <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase">{project.category}</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2 mb-6">{project.title}</h1>
                    <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed">{project.description}</p>

                    <div className="mt-8">
                        <h3 className="text-lg font-semibold text-slate-800 dark:text-gray-200 mb-3 flex items-center gap-2"><FiTag /> Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="bg-slate-100 dark:bg-purple-900/50 text-slate-700 dark:text-gray-300 text-sm font-medium px-4 py-1.5 rounded-full">{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* --- THIS IS THE REVISED LINKS SECTION --- */}
                    {(mainUrlInfo || additionalLinks.length > 0) && (
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold text-slate-800 dark:text-gray-200 mb-4 flex items-center gap-2"><FiLink /> Links</h3>
                            <div className="flex flex-wrap gap-3 items-center">
                                {/* Render the main project URL button */}
                                {mainUrlInfo && (
                                    <LinkButton
                                        href={project.url}
                                        label={mainUrlInfo.label}
                                        iconKey={mainUrlInfo.key}
                                        onMouseEnter={handleLinkEnter}
                                        onMouseLeave={handleDefaultEnter}
                                    />
                                )}
                                {/* Render any additional link buttons */}
                                {additionalLinks.map(([key, url]) => (
                                    <LinkButton
                                        key={key}
                                        href={url}
                                        label={key.charAt(0).toUpperCase() + key.slice(1)} // Capitalize key for tooltip
                                        iconKey={key}
                                        onMouseEnter={handleLinkEnter}
                                        onMouseLeave={handleDefaultEnter}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </motion.div>

                <motion.div variants={itemVariants} className="lg:col-span-3">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
                        <img src={project.previewImage} alt={project.title} className="w-full h-auto object-cover" />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ProjectDetailPage;