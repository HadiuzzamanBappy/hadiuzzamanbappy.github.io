import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

/**
 * Main application component that handles routing and layout structure
 * 
 * Features:
 * - React Router setup for SPA navigation
 * - Dotted background pattern for visual appeal
 * - Layered z-index structure for proper element stacking
 * - Responsive full-screen layout with flexbox centering
 * 
 * Routes:
 * - "/" - Home page with portfolio overview
 * - "/projects" - Projects gallery page
 * - "/projects/:projectId" - Individual project detail pages
 * 
 * @returns {JSX.Element} The main application structure with routing
 */
function App() {
  return (
    <div className="bg-transparent min-h-screen flex flex-col justify-center relative z-10">
      {/* Background pattern overlay */}
      <div className="dotted-background"></div>
      
      {/* Main content area with higher z-index */}
      <main className="relative z-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;