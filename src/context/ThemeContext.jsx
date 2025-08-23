import React, { createContext, useState, useEffect } from 'react';

/**
 * Retrieves initial theme from localStorage or defaults to 'light'
 * Handles SSR compatibility by checking for window availability
 */
const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }
  }
  return 'light';
};

/**
 * ThemeContext
 * 
 * Provides global theme state management with localStorage persistence.
 * Supports light and dark theme modes across the application.
 */
export const ThemeContext = createContext();

/**
 * ThemeProvider Component
 * 
 * Context provider that manages theme state and applies CSS classes to document root.
 * Persists theme preference in localStorage and provides toggle functionality.
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    // Apply theme attribute to HTML element for CSS targeting
    if (theme === 'dark') {
      root.setAttribute('prefers-color-scheme', 'dark');
    } else {
      root.removeAttribute('prefers-color-scheme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
