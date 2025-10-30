import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Ini adalah komponen baru untuk tombol magnetik
const MagneticButton = ({ children, className, ...props }) => {
  const ref = useRef(null);
  
  // Menggunakan useMotionValue untuk melacak posisi mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Menggunakan useSpring untuk animasi yang lebih halus
  const springConfig = { damping: 15, stiffness: 200, mass: 0.1 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Menghitung posisi mouse relatif terhadap tengah tombol
    const moveX = (clientX - (left + width / 2)) * 0.5; // 0.5 untuk mengurangi intensitas
    const moveY = (clientY - (top + height / 2)) * 0.5;
    
    mouseX.set(moveX);
    mouseY.set(moveY);
  };

  const handleMouseLeave = () => {
    // Reset ke posisi 0 saat mouse pergi
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      // Menerapkan nilai spring ke transform (x, y)
      style={{
        x: springX,
        y: springY,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative z-10 rounded-full  px-8 py-4 text-lg font-semibold text-white transition-colors duration-300 border-white border-2 ${className}`}
      {...props}
    >
      {/* Teks di dalam tombol juga bergerak, tapi lebih sedikit, untuk efek 3D */}
      <motion.span
        style={{
          x: useSpring(mouseX, { ...springConfig, damping: 20, stiffness: 150 }),
          y: useSpring(mouseY, { ...springConfig, damping: 20, stiffness: 150 }),
        }}
        className="block"
      >
        {children}
      </motion.span>
    </motion.button>
  );
};

export default MagneticButton;

