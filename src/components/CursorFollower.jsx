// src/components/CursorFollower.jsx

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useCursor } from '../context/CursorContext';

const CursorFollower = () => {
  const cursorRef = useRef(null);
  
  // 1. Ambil state cursorVariant DAN isDesktop dari Context
  const { cursorVariant, isDesktop } = useCursor();

  useEffect(() => {
    // Pengaman ganda: Jika di HP/Mobile, jangan pernah jalankan GSAP
    if (!isDesktop) return;

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
  }, [isDesktop]); // <-- Masukkan isDesktop ke dependency array

  // 2. SAKLAR KUNCI: Jika di mobile, kembalikan 'null' (Jangan render kode HTML di bawah ke layar)
  if (!isDesktop) return null;

  const baseStyle = "fixed pointer-events-none z-50 transition-all duration-300 ease-out";
  
  const variants = {
    default: "h-24 w-24 rounded-full border-2 border-white backdrop-blur-sm",
    developerImage: "h-64 w-82 rounded-lg border-2 border-neutral-500 overflow-hidden shadow-lg",
    sisusImage: "h-64 w-82 rounded-lg border-2 border-neutral-500 overflow-hidden shadow-lg",
    sanadImage: "h-64 w-82 rounded-lg border-2 border-neutral-500 overflow-hidden shadow-lg",
    arqImage: "h-64 w-82 rounded-lg border-2 border-neutral-500 overflow-hidden shadow-lg",
  };

  const currentStyle = variants[cursorVariant] || variants.default;

  return (
    <div
      ref={cursorRef}
      className={`${baseStyle} ${currentStyle}`}
    >
      {cursorVariant === 'developerImage' && (
        <img
          src="devteam.jpg" 
          alt="Developer Team"
          className="h-full w-full object-cover"
        />
      )}
      {cursorVariant === 'sanadImage' && (
        <img
          src="sanad.jpg" 
          alt="sanad"
          className="h-full w-full object-cover"
        />
      )}
      {cursorVariant === 'arqImage' && (
        <img
          src="arq.jpg" 
          alt="arq Team"
          className="h-full w-full object-cover"
        />
      )}
      {cursorVariant === 'sisusImage' && (
        <img
          src="sisus.jpg" 
          alt="sisus moment"
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
};

export default CursorFollower;