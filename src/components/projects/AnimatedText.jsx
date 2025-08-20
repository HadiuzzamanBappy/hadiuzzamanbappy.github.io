import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedText = () => {
    const roles = [
        "am An UX Designer & Developer",
        "do Frontend Development",
        "do CMS Development",
        "do Full Stack Development"
    ];
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        // Handles typing and deleting animation
        const handleTyping = () => {
            const currentRole = roles[roleIndex];
            const updatedText = isDeleting
                ? currentRole.substring(0, text.length - 1)
                : currentRole.substring(0, text.length + 1);

            setText(updatedText);

            if (!isDeleting && updatedText === currentRole) {
                // Pause before starting to delete
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && updatedText === '') {
                // Move to next role after deleting
                setIsDeleting(false);
                setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
            }
        };

        const typingSpeed = isDeleting ? 75 : 150;
        const timeout = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex, roles]);

    return (
        <div className="text-2xl md:text-3xl font-semibold text-slate-800 dark:text-gray-200 mb-6 h-10">
            <span>I </span>
            <span className="font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                {text}
            </span>
            {/* Blinking cursor */}
            <motion.span
                className="inline-block w-1 h-6 ml-1 bg-slate-800 dark:bg-gray-200"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
            />
        </div>
    );
};

export default AnimatedText;