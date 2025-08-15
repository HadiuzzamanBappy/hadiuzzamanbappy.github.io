import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import MouseFollower from './components/common/MouseFollower'; // Import the new component
import CustomCursor from './components/common/CustomCursor';

function App() {
  return (
    <div className="bg-transparent min-h-screen flex flex-col justify-center relative z-10">
      {/* The mouse follower effect */}
      <MouseFollower />
      <CustomCursor />

      {/* The fixed dotted background */}
      <div className="dotted-background"></div>

      {/* SEO and Font Links */}
      <title>Hadiuzzaman Bappy</title>
      <meta name="description" content="Hadiuzzaman Bappy - A professional portfolio showcasing web development and design." />
      <meta property="og:title" content="Hadiuzzaman Bappy" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* Your Page Routes */}
      <main className="relative z-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;