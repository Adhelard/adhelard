// src/pages/About.jsx

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Briefcase, Award, GraduationCap, Star } from 'lucide-react';
// 1. Impor hook 'useCursor'
import { useCursor } from '../context/CursorContext';

// ... (Data 'fadeInFromBottom', 'experiences', 'achievements' tetap sama) ...
const fadeInFromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    } 
  },
};

const experiences = [
  {
    icon: <Briefcase />,
    role: 'Internship',
    company: 'PT Al Khawarizmi',
    date: 'August 2025 - Present', //
    variant: 'default', // Varian kursor standar
  },
  {
    icon: <Briefcase />,
    role: 'Developer Team Member',
    company: 'Official Developer Team Sekolah Impian',
    date: '2024 - Present', //
    variant: 'developerImage', // Varian kursor kustom
  },
];

const achievements = [
  {
    icon: <GraduationCap />,
    title: '30 Juz Quran Memorization',
    desc: 'Completed the Ziyadah (Memorization) of 30 Juz of the Holy Qur\'an.', //
    variant: 'sisusImage',
  },
  {
    icon: <GraduationCap />,
    title: 'Sanad of 5 Juz',
    desc: 'Obtained Sanad (Verified Lineage) for 5 Juz (Juz 26 – 30) from Syaikh Ahmad Ibrahim As-Subhi.', //
    variant: 'sanadImage',
  },
  {
    icon: <Award />,
    title: '1st Winner of ‘Taqwa.i’ Competition',
    desc: 'Winner in the ARQtion and Hakesi 2025 competitions.', //
    variant: 'arqImage',
  },
  {
    icon: <Star />,
    title: '"Zero to Hero" Award',
    desc: 'Awarded for achievement in Arabic Language at the Language Fest 2024, Sekolah Impian.', //
    variant: 'default',
  },
];

const About = () => {
  // 2. Dapatkan fungsi 'setCursorVariant' dari konteks
  const { setCursorVariant } = useCursor();

  return (
    <motion.div
      // ... (props motion.div)
      className="min-h-screen bg-neutral-900 text-white"
    >
      <Navbar />
      
      <main>
        {/* ... (Section 1: Biografi tetap sama) ... */}
        <section className="flex min-h-screen w-full flex-col-reverse items-center bg-neutral-900 p-8 py-32 md:flex-row md:p-24">
          
          {/* Bagian teks kiri (2/3) */}
          <motion.div
            className="flex w-full flex-col justify-center pt-12 md:w-2/3 md:pt-0"
            variants={fadeInFromBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="mb-6 text-5xl font-bold">About Me</h1>
            <p className="mb-6 max-w-2xl text-xl text-neutral-300">
              I am Muhammad Arifin Ali, a passionate Web & App Developer and a dedicated student focused on creating impactful technological solutions. With strong foundational skills in Front-End (Flutter, Tailwind, HTML, CSS) and Back-End (PHP, SQL, Firebase, JS) development, I strive to build applications that not only solve problems but also inspire growth and positive change within communities, such as my work on QCB A.I. and Portal Sekolah Impian.
            </p>
            <p className="max-w-2xl text-lg text-neutral-400">
              I combine technical expertise with leadership qualities, aiming to be a future developer and leader who drives real impact.
            </p>
          </motion.div>

          {/* Bagian gambar kanan (1/3) - ELEMEN BARU */}
          <motion.div
            className="flex w-full items-center justify-center md:w-1/3"
            variants={fadeInFromBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Style Sync: Menggunakan style gambar yang sama persis dari AboutBrief.jsx */}
            <motion.img
              src="keren.jpg" // Ganti dengan fotomu
              alt="Muhammad Arifin Ali"
              className="w-[300px] h-[450px] object-cover rounded-2xl filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out hover:scale-105 shadow-xl"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        </section>

        {/* --- Section 2: Pengalaman (Timeline) --- */}
        <section className="w-full bg-neutral-950 p-8 py-24 md:p-24">
          <motion.div
            className="mx-auto max-w-3xl"
            variants={fadeInFromBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="mb-16  text-4xl font-bold">Experience</h2>
            <div className="relative border-l-2 border-neutral-700 pl-10">
              
              {/* 3. Modifikasi loop 'experiences' */}
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeInFromBottom}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  className="relative mb-12"
                  
                  // 4. Tambahkan event handler di sini
                  onMouseEnter={() => setCursorVariant(exp.variant || 'default')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <div className="absolute -left-[50px] top-0 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800 text-white">
                    {exp.icon}
                  </div>
                  <span className="text-sm font-semibold uppercase text-neutral-400">
                    {exp.date}
                  </span>
                  <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-lg text-neutral-300">{exp.company}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
        
        {/* --- Section 3: Prestasi (Grid) --- */}
        {/* Anda juga bisa menambahkan event handler di sini jika mau */}
        <section className="w-full bg-neutral-900 p-8 py-24 md:p-24">
          <motion.div
            className="mx-auto max-w-5xl"
            variants={fadeInFromBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="mb-12 text-end text-4xl font-bold">Achievements & Awards</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {achievements.map((ach, index) => (
                <motion.div
                  key={index}
                  variants={fadeInFromBottom}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex items-start gap-5 rounded-lg bg-neutral-800 p-6"
                  // Contoh:
                  onMouseEnter={() => setCursorVariant(ach.variant || 'default')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <div className="flex shrink-0 rounded-full bg-neutral-700 p-3 text-neutral-300">
                    {React.cloneElement(ach.icon, { size: 20 })}
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-semibold">{ach.title}</h3>
                    <p className="text-neutral-300">{ach.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default About;