import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const MouseFollower = () => {
    // THE FIX: Use `matchMedia` to reliably check if the primary input is coarse (touch).
    const [isCoarsePointer, setIsCoarsePointer] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.matchMedia('(pointer: coarse)').matches;
        }
        return false;
    });

    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isMouseInViewport, setIsMouseInViewport] = useState(true); // Default to true
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        // If it's a coarse pointer device (touch), don't run the effect.
        if (isCoarsePointer) return;

        const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
        const handleMouseEnter = () => setIsMouseInViewport(true);
        const handleMouseLeave = () => setIsMouseInViewport(false);

        window.addEventListener('mousemove', handleMouseMove);
        document.documentElement.addEventListener('mouseenter', handleMouseEnter);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isCoarsePointer]);

    const pointerColor = theme === 'dark' ? 'rgba(173, 113, 255, 0.2)' : 'rgba(173, 113, 255, 0.3)';

    // THE FIX: This guard clause now correctly renders nothing only on touch-primary devices.
    if (isCoarsePointer) {
        return null;
    }

    return (
        <div
            style={{
                position: 'fixed',
                top: position.y,
                left: position.x,
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                backgroundColor: pointerColor,
                filter: 'blur(100px)',
                transform: 'translate(-50%, -50%)',
                zIndex: 0,
                pointerEvents: 'none',
                opacity: isMouseInViewport ? 1 : 0,
                transition: 'opacity 0.2s ease-out, background-color 0.3s ease-in-out',
            }}
        />
    );
};

export default MouseFollower;