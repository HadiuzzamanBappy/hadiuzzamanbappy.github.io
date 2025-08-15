import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// CORRECTED: First image link is now fixed.
const initialImages = [
  "images/gallery/photo1.jpg",
  "images/gallery/photo2.jpg",
  "images/gallery/photo3.jpg",
  "images/gallery/photo4.jpg",
  "images/gallery/photo5.jpg",
];

// Reusable Card component for each image
const Card = ({ imgSrc, index, totalCards, onDismiss }) => {
  // useMemo hook ensures that each card gets a STABLE random value that doesn't change on re-render.
  // This is the key to the "messy pile" look.
  const randomRotation = useMemo(() => Math.random() * 20 - 10, []); // Random rotation between -10 and 10 degrees
  const randomX = useMemo(() => Math.random() * 20 - 10, []);      // Random x-offset between -10 and 10 pixels
  const randomY = useMemo(() => Math.random() * 20 - 10, []);      // Random y-offset between -10 and 10 pixels

  return (
    <motion.div
      key={imgSrc}
      className="absolute w-full h-full cursor-grab active:cursor-grabbing"
      
      // Animation variants for entering, being in the stack, and exiting.
      variants={{
        initial: { scale: 0, y: 100, opacity: 0 },
        animate: {
          scale: 1, // All cards are the same size now for a more realistic stack
          x: index === totalCards - 1 ? 0 : randomX, // Top card is centered, others are offset
          y: index === totalCards - 1 ? 0 : randomY,
          zIndex: index,
          rotate: index === totalCards - 1 ? 0 : randomRotation, // Top card is straight
          opacity: 1,
        },
        exit: (direction) => ({
          y: direction > 0 ? 300 : -300,
          opacity: 0,
          scale: 0.5,
          transition: { duration: 0.3, ease: 'easeIn' },
        }),
      }}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElasticity={0.2}

      onDragEnd={(event, info) => {
        const dragThreshold = 100;
        const velocityThreshold = 500;
        
        if (Math.abs(info.offset.y) > dragThreshold || Math.abs(info.velocity.y) > velocityThreshold) {
          const direction = info.offset.y > 0 ? 1 : -1;
          onDismiss(imgSrc, direction);
        }
      }}
    >
      <img src={imgSrc} alt="card" className="w-full h-auto object-cover rounded-lg shadow-xl pointer-events-none" />
    </motion.div>
  );
};

const ImageStack = () => {
  const [images, setImages] = useState(initialImages);

  const handleDismiss = (dismissedImage) => {
    // Filter out the dismissed image and add it to the beginning of the array (the "bottom" of the deck)
    const remainingImages = images.filter(img => img !== dismissedImage);
    const newImageOrder = [dismissedImage, ...remainingImages];
    setImages(newImageOrder);
  };

  const handleTopCardClick = () => {
    // On click, dismiss the top card (the last one in the array)
    const topCard = images[images.length - 1];
    handleDismiss(topCard);
  };

  return (
    <div 
      className="relative w-56 h-56 pt-8" 
      onClick={handleTopCardClick}
    >
      <AnimatePresence>
        {images.map((img, index) => (
          <Card
            key={img}
            imgSrc={img}
            index={index}
            totalCards={images.length}
            onDismiss={handleDismiss}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ImageStack;