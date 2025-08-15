import React, { createContext, useState, useEffect } from 'react';

// This helper function remains the same. It correctly gets the initial theme.
const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }
  }
  return 'dark'; // Default to light if no preference is saved
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  // This effect is now modified to set the data-theme attribute.
  useEffect(() => {
    const root = window.document.documentElement; // The <html> tag
    
    // Clean up any old classes just in case
    root.classList.remove('light', 'dark');

    // THE FIX:
    if (theme === 'dark') {
      // If the theme is dark, set the attribute.
      root.setAttribute('prefers-color-scheme', 'dark');
    } else {
      // If the theme is light, remove the attribute.
      root.removeAttribute('prefers-color-scheme');
    }
    
    // Save the preference to localStorage as before.
    localStorage.setItem('theme', theme);
  }, [theme]); // Rerun this effect whenever the theme changes.

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};