import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext'; // Adjust path if necessary

const MouseFollower = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Define colors based on the theme
    const pointerColor = theme === 'dark' ? 'rgba(173, 113, 255, 0.2)' : 'rgba(173, 113, 255, 0.3)';

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
                pointerEvents: 'none', // Allows clicking through the element
                transition: 'background-color 0.3s ease-in-out', // Smooth transition for theme changes
            }}
        />
    );
};

export default MouseFollower;