// src/components/CursorFollower.jsx

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// 1. Impor hook 'useCursor'
import { useCursor } from '../context/CursorContext';

const CursorFollower = () => {
  const cursorRef = useRef(null);
  // 2. Dapatkan state kursor saat ini dari konteks
  const { cursorVariant } = useCursor();

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    gsap.set(cursor, { xPercent: -50, yPercent: -50, opacity: 0 });

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      gsap.to(cursor, {
        duration: 0.6,
        x: mouse.x,
        y: mouse.y,
        ease: "power2.out",
      });
      gsap.to(cursor, { opacity: 1, duration: 0.2 });
      requestAnimationFrame(animate);
    };

    const animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // 3. Definisikan varian style
  const baseStyle = "fixed pointer-events-none z-50 transition-all duration-300 ease-out";
  
  const variants = {
    default: "h-24 w-24 rounded-full border-2 border-white backdrop-blur-sm",
      developerImage: "h-32 w-32 rounded-lg border-2 border-neutral-500 overflow-hidden shadow-lg",
      sisusImage: "h-32 w-32 rounded-lg border-2 border-neutral-500 overflow-hidden shadow-lg",
      sanadImage: "h-32 w-32 rounded-lg border-2 border-neutral-500 overflow-hidden shadow-lg",
      arqImage: "h-32 w-32 rounded-lg border-2 border-neutral-500 overflow-hidden shadow-lg",
      
    
    // Anda bisa tambahkan varian lain di sini, misal: 'link', 'text', 'imageHover'
  };

  const currentStyle = variants[cursorVariant] || variants.default;

  return (
    <div
      ref={cursorRef}
      // 4. Terapkan style dinamis berdasarkan state
      className={`${baseStyle} ${currentStyle}`}
    >
      {/* 5. Tampilkan konten di dalam kursor secara kondisional */}
      {cursorVariant === 'developerImage' && (
        <img
          // GANTI DENGAN PATH GAMBAR ANDA
          src="devteam.jpg" // Contoh: taruh gambar di folder /public
          alt="Developer Team"
          className="h-full w-full object-cover"
        />
          )}
          {cursorVariant === 'sanadImage' && (
        <img
          // GANTI DENGAN PATH GAMBAR ANDA
          src="sanad.jpg" // Contoh: taruh gambar di folder /public
          alt="sanad"
          className="h-full w-full object-cover"
        />
          )}
          {cursorVariant === 'arqImage' && (
        <img
          // GANTI DENGAN PATH GAMBAR ANDA
          src="arq.jpg" // Contoh: taruh gambar di folder /public
          alt="arq Team"
          className="h-full w-full object-cover"
        />
          )}
          {cursorVariant === 'sisusImage' && (
        <img
          // GANTI DENGAN PATH GAMBAR ANDA
          src="sisus.jpg" // Contoh: taruh gambar di folder /public
          alt="sisus moment"
          className="h-full w-full object-cover"
        />
      )}
          
    </div>
  );
};

export default CursorFollower;