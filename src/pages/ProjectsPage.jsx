import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects as allProjects } from '../data/projects';
import ProjectCard from '../components/projects/ProjectCard';
import Hero from '../components/projects/Hero';
import ContactForm from '../components/projects/ContactForm';

// Added "E-commerce" and "Branding" to match the new data
const categories = ["All", "Web Development", "UI/UX Design", "Branding"];

const ProjectsPage = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [filteredProjects, setFilteredProjects] = useState(allProjects);

    useEffect(() => {
        if (activeFilter === "All") {
            setFilteredProjects(allProjects);
        } else {
            const filtered = allProjects.filter(p => p.category === activeFilter);
            setFilteredProjects(filtered);
        }
    }, [activeFilter]);

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

                {/* --- MASONRY GRID --- */}
                <motion.div
                    layout
                    // THE CHANGE: Added `lg:columns-3` for better layout on large screens.
                    // This improves the masonry effect.
                    className="columns-1 md:columns-2 lg:columns-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </main>

            <footer id="contact-section" className="pt-20">
                <ContactForm />

                {/* --- NEW: Copyright Section --- */}
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