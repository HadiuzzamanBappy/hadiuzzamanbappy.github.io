import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CursorProvider } from './context/CursorContext';
import App from './App.jsx';
import './index.css';
import CustomCursor from './components/common/CustomCursor';
import MouseFollower from './components/common/MouseFollower.jsx';
import ScrollToTop from './components/common/ScrollToTop.jsx';

/**
 * Application entry point with provider setup and global components
 * 
 * Provider Hierarchy:
 * - BrowserRouter: Enables client-side routing
 * - ThemeProvider: Global theme state management (light/dark mode)
 * - CursorProvider: Custom cursor state and interactions
 * 
 * Global Components:
 * - MouseFollower: Blur effect that follows mouse movement
 * - CustomCursor: Interactive cursor with multiple variants
 * - ScrollToTop: Handles scroll position on route changes
 * 
 * This setup ensures all context providers and global UI elements
 * are available throughout the application lifecycle.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <CursorProvider>
          {/* Global UI components */}
          <MouseFollower />
          <CustomCursor />
          <ScrollToTop />
          <App />
        </CursorProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);