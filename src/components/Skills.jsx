import React, { useEffect, useRef } from 'react';
// Impor GSAP dari CDN yang lebih kompatibel (esm.sh) untuk mengatasi error build
import { gsap } from 'https://esm.sh/gsap'; 
import { motion } from 'framer-motion';

// Daftar skill dari CV Anda
const skillsRow1 = [
  'Flutter', 'Tailwind', 'HTML', 'CSS', 'PHP', 'SQL',
];
const skillsRow2 = [
  'Firebase', 'JS', 'Arduino', 'Machine Learning', 'Graphic Design', 'Video Editing'
];

// Komponen untuk satu bubble
const SkillBubble = ({ skill }) => {
  return (
    <motion.div
      className="holographic-bubble cursor-pointer rounded-full bg-neutral-700 py-3 min-w-[200px] 
                 text-lg font-medium text-white shadow-md text-center text-nowrap justify-center items-center"
      whileHover={{
        backgroundColor: '#111', // warna dasar jadi lebih gelap agar efek hologram lebih jelas
        scale: 1.05,
      }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      {skill}
    </motion.div>
  );
};


// Komponen Marquee (Pita Berjalan)
const Marquee = ({ children, direction = 'left' }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Menggandakan elemen di dalamnya agar animasinya mulus
    const content = marquee.innerHTML;
    marquee.innerHTML += content;

    const distance = direction === 'left' ? '-50%' : '0%';
    const startPos = direction === 'left' ? '0%' : '-50%';

    // Animasi GSAP untuk marquee tak terbatas
    gsap.fromTo(
      marquee,
      { x: startPos },
      {
        x: distance,
        duration: 20, // Durasi lebih lama agar lambat
        repeat: -1,
        ease: 'none',
      }
    );
  }, [direction]);

  return (
    <div className="flex w-full space-x-6" ref={marqueeRef}>
      {children}
    </div>
  );
};

const Skills = () => {
  return (
    <section className="overflow-hidden bg-black py-24 sm:py-48">
      <div className="mx-auto w-full ">
        <h2 className="mb-16 text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Skills You maybe need from me!
        </h2>
        
        {/* Wrapper untuk Marquee */}
        <div className="flex flex-col gap-6">
          {/* Baris 1: Bergerak ke kiri */}
          <div className="overflow-hidden">
            <Marquee direction="left">
              {skillsRow1.map((skill) => (
                <SkillBubble key={skill} skill={skill} />
              ))}
            </Marquee>
          </div>
          
          {/* Baris 2: Bergerak ke kanan */}
          <div className="overflow-hidden">
            <Marquee direction="right">
              {skillsRow2.map((skill) => (
                <SkillBubble key={skill} skill={skill} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

