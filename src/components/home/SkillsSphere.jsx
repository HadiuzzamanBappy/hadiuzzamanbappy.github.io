import React, { useMemo, Suspense, useState } from 'react'; // NEW: Import useState
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Preload } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion'; // NEW: Import motion and AnimatePresence
import { TbZoomPan } from "react-icons/tb";

// Icon mapping and Icon component remain exactly the same.
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

const ZoomHint = () => {
  return (
    <motion.div
      // Positioned at the top-right of the container
      className="absolute top-4 right-4 text-purple-500/25 pointer-events-none z-10"
      // Animation for the hint itself
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1, transition: { delay: 0.7, duration: 0.4 } }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
    >
      <TbZoomPan size={24} />
    </motion.div>
  );
};

// The final export that wraps everything
export default function SkillsSphere() {
  return (
    // The parent div must be 'relative' to position the hint
    <div className="w-full h-full relative">

      {/* Conditionally render the hint */}
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