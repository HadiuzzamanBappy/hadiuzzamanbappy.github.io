import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects as allProjects } from '../data/projects';
import ProjectCard from '../components/projects/ProjectCard';
import Hero from '../components/projects/Hero';
import ContactForm from '../components/projects/ContactForm';

/**
 * ProjectsPage Component
 * 
 * Displays a filterable grid of projects with category-based filtering,
 * pagination (load more), and animated transitions. Features hero section
 * and integrated contact form for seamless user engagement.
 */

const categories = ["All", "UI/UX Design", "Web Development", "Others"];
const INITIAL_LOAD = 9;
const LOAD_MORE_COUNT = 3;

const ProjectsPage = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [filteredProjects, setFilteredProjects] = useState(allProjects);
    const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);

    // Filter projects when category changes
    useEffect(() => {
        const newFiltered = activeFilter === "All"
            ? allProjects
            : allProjects.filter(p => p.category === activeFilter);

        setFilteredProjects(newFiltered);
        setVisibleCount(INITIAL_LOAD);
    }, [activeFilter]);

    // Projects to render with pagination
    const projectsToShow = filteredProjects.slice(0, visibleCount);

    // Load more projects
    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + LOAD_MORE_COUNT);
    };

    // Scroll helpers
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects-list');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen">
            <Hero
                scrollToContact={scrollToContact}
                scrollToProjects={scrollToProjects}
            />

            <main id="projects-list" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Category filter buttons */}
                <div className="flex justify-center flex-wrap gap-3 mb-12">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-5 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${activeFilter === category
                                ? 'bg-purple-800 dark:bg-purple-600 text-white shadow-md'
                                : 'bg-white dark:bg-purple-500/10 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-purple-500/30'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects grid */}
                <motion.div
                    layout
                    className="columns-1 md:columns-2 lg:columns-3 gap-8"
                >
                    <AnimatePresence>
                        {projectsToShow.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Load More button */}
                {visibleCount < filteredProjects.length && (
                    <div className="flex justify-center mt-12">
                        <motion.button
                            onClick={handleLoadMore}
                            className="px-8 py-3 bg-purple-700 text-white font-semibold rounded-full shadow-lg hover:bg-purple-800 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Load More
                        </motion.button>
                    </div>
                )}
            </main>

            <footer id="contact-section" className="pt-20">
                <ContactForm />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 py-8 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-center text-sm text-slate-500 dark:text-gray-400">
                        © {new Date().getFullYear()} Hadiuzzaman Bappy. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default ProjectsPage;
