import React, { createContext, useState } from 'react';

/**
 * CursorContext
 * 
 * Provides global state management for custom cursor variants.
 * Supports different cursor states: 'default', 'link', 'view', 'hidden'
 */
export const CursorContext = createContext({
  cursorVariant: 'default',
  setCursorVariant: () => {},
});

/**
 * CursorProvider Component
 * 
 * Context provider that manages cursor variant state across the application.
 * Enables components to trigger cursor appearance changes on hover interactions.
 */
export const CursorProvider = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState('default');

  const value = { cursorVariant, setCursorVariant };

  return (
    <CursorContext.Provider value={value}>
      {children}
    </CursorContext.Provider>
  );
};