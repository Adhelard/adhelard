import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Komponen kursor kustom yang mengikuti mouse dengan animasi GSAP
const CursorFollower = () => {
    // Referensi untuk elemen kursor (lingkaran)
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        // Atur posisi awal kursor ke luar layar
        gsap.set(cursor, { xPercent: -50, yPercent: -50, opacity: 0 });

        // Objek untuk menyimpan posisi mouse saat ini
        const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const mouse = { x: pos.x, y: pos.y };

        // Listener untuk melacak pergerakan mouse
        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Fungsi animasi menggunakan requestAnimationFrame
        const animate = () => {
            // GSAP.to() akan memindahkan kursor ke posisi mouse (mouse.x, mouse.y)
            // Menggunakan durasi dan ease menciptakan efek "ketinggalan" (lagging)
            gsap.to(cursor, {
                duration: 0.6, // Kecepatan kursor mengikuti
                x: mouse.x,
                y: mouse.y,
                ease: "power2.out", // Kurva easing yang bagus
            });

            // Pastikan kursor terlihat setelah mouse bergerak
            gsap.to(cursor, { opacity: 1, duration: 0.3 });
            
            requestAnimationFrame(animate);
        };

        // Mulai loop animasi
        const animationFrameId = requestAnimationFrame(animate);

        // Cleanup: Hapus event listener saat komponen di-unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // Catatan: Kursor bawaan browser disembunyikan di CSS global (di App.jsx)
    return (
        <div 
            ref={cursorRef} 
            className="fixed pointer-events-none z-50 h-8 w-8 rounded-full border-2 border-white backdrop-blur-sm transform -translate-x-1/2 -translate-y-1/2" 
        />
    );
};

export default CursorFollower;
