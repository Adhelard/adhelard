  import { motion, AnimatePresence } from 'framer-motion';
  import { useState, useEffect } from 'react';

  const texts = ["Halo saya Arifin", "Hello i'm Arifin", "Hola yo soy Arifin", "مَرْحَبًا، أَنَا عَرِيْفٌ"];

  const SplashScreen = ({ onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        if (currentIndex < texts.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          onComplete(); // Trigger fade-out and load Home
        }
      }, 750); // 1s delay per text
      return () => clearTimeout(timer);
    }, [currentIndex, onComplete]);

    return (
      <motion.div
        className="fixed inset-0 bg-black flex items-center justify-center z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <motion.h1
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-white text-4xl font-serif"
        >
          {texts[currentIndex]} 
        </motion.h1>
      </motion.div>
    );
  };

  export default SplashScreen;
  