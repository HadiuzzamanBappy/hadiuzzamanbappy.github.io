import React, { useContext } from 'react';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';
import Workflow from '../components/home/Workflow';
import SkillsSphere from '../components/home/SkillsSphere';
import SocialLinks from '../components/home/SocialLinks';
import Stats from '../components/home/Stats';
import Projects from '../components/home/Projects';
import ImageStack from '../components/home/ImageStack';
import Services from '../components/home/Services';
import { CursorContext } from '../context/CursorContext';

/**
 * Home Page Component
 * 
 * Main landing page featuring a responsive grid layout with personal information,
 * skills, projects, testimonials, and contact details. Optimized for both desktop
 * and mobile viewing experiences with custom cursor integration.
 */
const Home = () => {
  const { setCursorVariant } = useContext(CursorContext);

  // Reset cursor to default when mouse enters main area
  const handleMouseEnter = () => setCursorVariant('default');

  return (
    <main
      className="container mx-auto max-w-screen-xl p-4"
      style={{ fontFamily: "'Poppins', sans-serif" }}
      onMouseEnter={handleMouseEnter}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 flex">
          <About />
        </div>
        <div className="lg:col-span-4 flex">
          <Testimonials />
        </div>
        <div className="lg:col-span-3 flex">
          <Workflow />
        </div>

        {/* Second Row */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white/50 dark:bg-purple-800/10 backdrop-blur-sm/20 backdrop-blur-sm rounded-2xl shadow-lg p-4 flex flex-col flex-grow min-h-[300px]">
            <SkillsSphere />
          </div>
          <SocialLinks />
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <Stats />
          <div className="flex-grow flex">
            <Projects />
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white/50 dark:bg-purple-800/10 rounded-2xl shadow-lg p-4 flex-grow min-h-[240px] flex flex-col items-center justify-center">
            <ImageStack />
          </div>
          <div className="flex-shrink-0">
            <Services />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
