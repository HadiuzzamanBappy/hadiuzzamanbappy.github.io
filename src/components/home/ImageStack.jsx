import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsMouse } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

const initialImages = [
  "images/gallery/photo1.jpg",
  "images/gallery/photo2.jpg",
  "images/gallery/photo4.jpg",
  "images/gallery/photo5.jpg",
  "images/gallery/photo3.jpg",
];

/**
 * DragHint Component
 * 
 * Displays an animated mouse icon with bounce effect to indicate
 * drag interaction capability. Auto-fades in after initial delay.
 */
const DragHint = () => (
  <motion.div
    className="absolute inset-0 flex flex-col items-center justify-center text-purple-200/50 pointer-events-none z-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
    exit={{ opacity: 0, transition: { duration: 0.3 } }}
  >
    <motion.div
      animate={{ y: [-10, 10] }}
      transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1, ease: 'easeInOut' }}
    >
      <BsMouse size={32} />
    </motion.div>
    <p className="mt-4 text-xs uppercase tracking-widest">Drag</p>
  </motion.div>
);

// Full-screen image viewer modal
const ImageViewer = ({ imgSrc, onClose }) => {
  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/80 z-[999]"
        onClick={handleClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <div className="fixed inset-0 flex items-center justify-center z-[1000] p-4">
        <motion.img
          src={imgSrc}
          alt="Full-size view"
          className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        />
      </div>
      <motion.button
        className="fixed top-4 right-4 text-white text-3xl z-[1001]"
        onClick={handleClose}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { delay: 0.2 } }}
        exit={{ scale: 0, opacity: 0 }}
      >
        <IoClose />
      </motion.button>
    </>
  );
};

/**
 * Card Component
 * 
 * Individual draggable image card with random positioning and rotation.
 * Supports click to view full-size and drag-to-dismiss interactions.
 */
const Card = ({ imgSrc, index, totalCards, onDismiss }) => {
  const randomRotation = useMemo(() => Math.random() * 20 - 10, []);
  const randomX = useMemo(() => Math.random() * 20 - 10, []);
  const randomY = useMemo(() => Math.random() * 20 - 10, []);

  return (
    <motion.div
      key={imgSrc}
      className="absolute w-full h-full cursor-grab active:cursor-grabbing"
      variants={{
        initial: { scale: 0, y: 100, opacity: 0 },
        animate: {
          scale: 1,
          x: index === totalCards - 1 ? 0 : randomX,
          y: index === totalCards - 1 ? 0 : randomY,
          zIndex: index,
          rotate: index === totalCards - 1 ? 0 : randomRotation,
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

/**
 * ImageStack Component
 * 
 * Interactive photo gallery featuring stackable, draggable cards with random positioning.
 * Supports drag-to-cycle through images and click-to-view full-screen. Includes
 * helpful drag hints for first-time users.
 */
const ImageStack = () => {
  const [images, setImages] = useState(initialImages);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Move dismissed image to bottom of stack for cycling effect
  const handleDismiss = (dismissedImage, direction) => {
    if (!hasInteracted) setHasInteracted(true);
    const remainingImages = images.filter(img => img !== dismissedImage);
    const newImageOrder = [dismissedImage, ...remainingImages];
    setImages(newImageOrder);
  };

  const handleTopCardClick = () => {
    if (!hasInteracted) setHasInteracted(true);
    const topCard = images[images.length - 1];
    setSelectedImage(topCard);
  };

  const handleCloseViewer = () => setSelectedImage(null);

  return (
    <div
      className="relative w-56 h-56 pt-8"
      onClick={handleTopCardClick}
    >
      <AnimatePresence>
        {!hasInteracted && <DragHint />}
      </AnimatePresence>
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
      <AnimatePresence>
        {selectedImage && (
          <ImageViewer imgSrc={selectedImage} onClose={handleCloseViewer} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageStack;
