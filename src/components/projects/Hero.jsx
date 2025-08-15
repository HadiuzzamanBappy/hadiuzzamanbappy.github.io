import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaBehance, FaGithub } from 'react-icons/fa';
import { SiVercel, SiNetlify } from 'react-icons/si';
import { FiArrowDown, FiHome } from 'react-icons/fi';

import Galaxy from '../common/Galaxy';
import AnimatedText from '../common/AnimatedText';
import { ThemeToggle } from '../common/ThemeToggle';
import { CursorContext } from '../../context/CursorContext'; // Import the new cursor context

const Hero = ({ scrollToContact, scrollToProjects }) => {
    // Get the function to change the cursor variant from the context
    const { setCursorVariant } = useContext(CursorContext);

    // Create reusable handlers to switch cursor styles
    const handleLinkEnter = () => setCursorVariant('link');
    const handleDefaultEnter = () => setCursorVariant('default');

    // Animation variants (no changes here)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
    };

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            <Galaxy />

            {/* --- Right Side Fixed Buttons --- */}
            <div className="fixed top-6 right-6 z-50 flex flex-col gap-4">
                {/* 
                  Note: For the best effect, your ThemeToggle component should also use these 
                  onMouseEnter/onMouseLeave handlers on its internal button.
                */}

                <Link
                    to="/"
                    onMouseEnter={handleLinkEnter}
                    onMouseLeave={handleDefaultEnter}
                    className="w-12 h-12 flex items-center justify-center rounded-full text-slate-700 dark:text-gray-300 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 backdrop-blur-sm hover:text-blue-500 dark:hover:text-white hover:bg-white/75 dark:hover:bg-slate-700/75 transition-all"
                >
                    <FiHome size={20} />
                </Link>
                <div onMouseEnter={handleLinkEnter} onMouseLeave={handleDefaultEnter}>
                    <ThemeToggle />
                </div>
            </div>

            {/* --- Main Content --- */}
            <motion.div
                className="relative z-10 flex flex-col items-center text-center p-4 max-w-3xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-gray-400">
                    Myself
                </motion.p>
                <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4">
                    Hadiuzzaman Bappy
                </motion.h1>

                <motion.div variants={itemVariants}>
                    <AnimatedText />
                </motion.div>

                <motion.p variants={itemVariants} className="max-w-xl text-slate-600 dark:text-gray-400 mb-8 text-lg">
                    Created awesome and effective various kind of design offline and online. Let's start scrolling and learn more about my projects.
                </motion.p>

                <motion.div variants={itemVariants}>
                    <button
                        onClick={scrollToContact}
                        onMouseEnter={handleLinkEnter}
                        onMouseLeave={handleDefaultEnter}
                        className="px-8 py-3 bg-purple-700 text-white font-semibold rounded-full shadow-lg hover:bg-purple-800 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Let's Connect
                    </button>
                </motion.div>

                <motion.div variants={itemVariants} className="flex gap-4 mt-12">
                    <a href="#" onMouseEnter={handleLinkEnter} onMouseLeave={handleDefaultEnter} aria-label="LinkedIn" className="w-12 h-12 flex items-center justify-center rounded-full text-slate-700 dark:text-gray-300 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 backdrop-blur-sm hover:text-blue-500 dark:hover:text-white hover:bg-white/75 dark:hover:bg-slate-700/75 transition-all transform hover:scale-110"><FaLinkedinIn size={20} /></a>
                    <a href="#" onMouseEnter={handleLinkEnter} onMouseLeave={handleDefaultEnter} aria-label="Behance" className="w-12 h-12 flex items-center justify-center rounded-full text-slate-700 dark:text-gray-300 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 backdrop-blur-sm hover:text-blue-500 dark:hover:text-white hover:bg-white/75 dark:hover:bg-slate-700/75 transition-all transform hover:scale-110"><FaBehance size={20} /></a>
                    <a href="#" onMouseEnter={handleLinkEnter} onMouseLeave={handleDefaultEnter} aria-label="GitHub" className="w-12 h-12 flex items-center justify-center rounded-full text-slate-700 dark:text-gray-300 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 backdrop-blur-sm hover:text-blue-500 dark:hover:text-white hover:bg-white/75 dark:hover:bg-slate-700/75 transition-all transform hover:scale-110"><FaGithub size={20} /></a>
                    <a href="#" onMouseEnter={handleLinkEnter} onMouseLeave={handleDefaultEnter} aria-label="Vercel" className="w-12 h-12 flex items-center justify-center rounded-full text-slate-700 dark:text-gray-300 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 backdrop-blur-sm hover:text-blue-500 dark:hover:text-white hover:bg-white/75 dark:hover:bg-slate-700/75 transition-all transform hover:scale-110"><SiVercel size={20} /></a>
                    <a href="#" onMouseEnter={handleLinkEnter} onMouseLeave={handleDefaultEnter} aria-label="Netlify" className="w-12 h-12 flex items-center justify-center rounded-full text-slate-700 dark:text-gray-300 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 backdrop-blur-sm hover:text-blue-500 dark:hover:text-white hover:bg-white/75 dark:hover:bg-slate-700/75 transition-all transform hover:scale-110"><SiNetlify size={20} /></a>
                </motion.div>
            </motion.div>

            {/* --- Scroll Down Indicator --- */}
            <div
                // THE CHANGE: Added `hidden` and `md:flex`
                // `hidden` - Hides the element by default (on mobile).
                // `md:flex` - Displays the element as flex on medium screens (768px) and wider.
                className="absolute bottom-10 z-20 hidden md:flex"
            >
                <motion.button
                    onClick={scrollToProjects}
                    onMouseEnter={handleLinkEnter}
                    onMouseLeave={handleDefaultEnter}
                    className="relative"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                        <span className="absolute h-10 w-10 rounded-full bg-blue-500/50 dark:bg-purple-500/50 opacity-75 animate-ping"></span>
                        <FiArrowDown size={24} className="relative text-slate-800 dark:text-gray-300" />
                    </div>
                </motion.button>
            </div>
        </section>
    );
};

export default Hero;