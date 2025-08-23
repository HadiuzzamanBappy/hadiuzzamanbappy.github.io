import React, { useMemo, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Preload } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { TbZoomPan } from "react-icons/tb";

// Icon name to file mapping for skill visualization
const icons = {
  'CSS': '/icons/css.svg',
  'Figma': '/icons/figma.svg',
  'Git': '/icons/git.svg',
  'GitHub': '/icons/github.svg',
  'HTML5': '/icons/html-5.svg',
  'Illustrator': '/icons/illustrator.png',
  'Java': '/icons/java.svg',
  'JavaScript': '/icons/javascript.png',
  'jQuery': '/icons/jquery.svg',
  'Material Design': '/icons/material-design.svg',
  'Notion': '/icons/notion.svg',
  'Photoshop': '/icons/photoshop.png',
  'PHP': '/icons/php.svg',
  'React': '/icons/react.svg',
  'Sass': '/icons/sass.svg',
  'Slack': '/icons/slack.svg',
  'VS Code': '/icons/visual-studio-code.svg',
  'Wordpress': '/icons/wordpress.svg',
};

/**
 * IconNode Component
 * 
 * Individual skill icon positioned in 3D space with hover tooltip.
 * Displays technology/tool icons with interactive feedback.
 */
function Icon({ position, name, file }) {
  return (
    <Html position={position} center wrapperClass="skills-sphere-html">
      <div className="group relative">
        <img
          src={file}
          alt={name}
          className="w-8 h-8 transition-transform group-hover:scale-125"
        />
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity whitespace-nowrap">
          {name}
        </div>
      </div>
    </Html>
  );
}

// Arranges icons in a sphere using Fibonacci lattice
function IconCloud() {
  const count = Object.keys(icons).length;
  const radius = 4;

  const points = useMemo(() => {
    const temp = [];
    const phi = Math.PI * (3. - Math.sqrt(5.));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
      temp.push(new THREE.Vector3(x, y, z).multiplyScalar(radius));
    }
    return temp;
  }, [count, radius]);

  return (
    <group>
      {Object.entries(icons).map(([name, file], index) => (
        <Icon key={name} position={points[index]} name={name} file={file} />
      ))}
    </group>
  );
}

/**
 * ZoomHint Component
 * 
 * Visual indicator showing users they can interact with the 3D sphere.
 * Displays zoom/pan icon with delayed fade-in animation.
 */
const ZoomHint = () => (
  <motion.div
    className="absolute top-4 right-4 text-purple-500/25 pointer-events-none z-10"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1, transition: { delay: 0.7, duration: 0.4 } }}
    exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
  >
    <TbZoomPan size={32} />
  </motion.div>
);

/**
 * SkillsSphere Component
 * 
 * Interactive 3D visualization of technical skills and tools.
 * Features auto-rotating sphere with zoom/pan controls and hover tooltips.
 * Icons are distributed spherically for optimal viewing angles.
 */
export default function SkillsSphere() {
  return (
    <div className="w-full h-full relative">
      <AnimatePresence>
        <ZoomHint />
      </AnimatePresence>

      <Canvas camera={{ position: [0, 0, 10], fov: 70 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={Math.PI} />
          <IconCloud />
          <Preload all />
        </Suspense>
        <OrbitControls
          enableZoom={true}
          minDistance={8}
          maxDistance={18}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
}