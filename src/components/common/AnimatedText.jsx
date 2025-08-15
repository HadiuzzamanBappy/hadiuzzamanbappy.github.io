import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedText = () => {
    const roles = ["UI/UX Designing", "Frontend Development","CMS Development", "Vibe Coding"];
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[roleIndex];
            const updatedText = isDeleting
                ? currentRole.substring(0, text.length - 1)
                : currentRole.substring(0, text.length + 1);

            setText(updatedText);

            // Logic for switching between typing, pausing, and deleting
            if (!isDeleting && updatedText === currentRole) {
                // Pause at the end of typing
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && updatedText === '') {
                // Finished deleting, move to the next role
                setIsDeleting(false);
                setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
            }
        };

        // Set the speed of typing/deleting
        const typingSpeed = isDeleting ? 75 : 150;
        const timeout = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex, roles]);

    return (
        // The container for the whole animated line
        <div className="text-2xl md:text-3xl font-semibold text-slate-800 dark:text-gray-200 mb-6 h-10">
            <span>I do </span>
            <span className="font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                {text}
            </span>
            {/* Blinking Cursor */}
            {/* <motion.span
                className="inline-block w-1 h-8 ml-1 bg-slate-800 dark:bg-gray-200"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
            /> */}
        </div>
    );
};

export default AnimatedText;