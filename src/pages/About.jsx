import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar'; // Impor Navbar global
import Footer from '../components/Footer'; // Impor Footer global
import { Briefcase, Award, GraduationCap, Star } from 'lucide-react'; // Ikon

// Varian animasi "fade in from bottom" (Tetap sama, sudah bagus)
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

// Data CV (Tetap sama)
const experiences = [
  {
    icon: <Briefcase />,
    role: 'Internship',
    company: 'PT Al Khawarizmi',
    date: 'August 2025 - Present', //
  },
  {
    icon: <Briefcase />,
    role: 'Developer Team Member',
    company: 'Official Developer Team Sekolah Impian',
    date: '2024 - Present', //
  },
];

const achievements = [
  {
    icon: <GraduationCap />,
    title: '30 Juz Quran Memorization',
    desc: 'Completed the Ziyadah (Memorization) of 30 Juz of the Holy Qur\'an.', //
  },
  {
    icon: <GraduationCap />,
    title: 'Sanad of 5 Juz',
    desc: 'Obtained Sanad (Verified Lineage) for 5 Juz (Juz 26 – 30) from Syaikh Ahmad Ibrahim As-Subhi.', //
  },
  {
    icon: <Award />,
    title: '1st Winner of ‘Taqwa.i’ Competition',
    desc: 'Winner in the ARQtion and Hakesi 2025 competitions.', //
  },
  {
    icon: <Star />,
    title: '"Zero to Hero" Award',
    desc: 'Awarded for achievement in Arabic Language at the Language Fest 2024, Sekolah Impian.', //
  },
];

const About = () => {
  return (
    // Style Sync: Wrapper utama tetap bg-neutral-900
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-neutral-900 text-white"
    >
      <Navbar />
      
      <main>
        {/* --- Section 1: Biografi ---
          Refactor: Menggunakan layout 2/3 + 1/3 seperti di AboutBrief.jsx
          untuk menambahkan elemen visual dan membuatnya lebih seimbang.
        */}
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
              src="foto.jpg" // Ganti dengan fotomu
              alt="Muhammad Arifin Ali"
              className="w-[300px] h-[450px] object-cover rounded-2xl filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out hover:scale-105 shadow-xl"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        </section>

        {/* --- Section 2: Pengalaman (Timeline) ---
          Refactor: Dibuat full-width dengan background kontras (neutral-950)
          dan konten di tengah (max-w-3xl) agar lebih fokus.
          Style Sync: Ikon timeline diubah agar konsisten dengan design system.
        */}
        <section className="w-full bg-neutral-950 p-8 py-24 md:p-24">
          <motion.div
            className="mx-auto max-w-3xl" // Konten di tengah
            variants={fadeInFromBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="mb-16 text-center text-4xl font-bold">Experience</h2>
            <div className="relative border-l-2 border-neutral-700 pl-10">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeInFromBottom}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  className="relative mb-12"
                >
                  {/* Ikon di timeline (Style Sync Ditingkatkan) */}
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
        
        {/* --- Section 3: Prestasi (Grid) ---
          Refactor: Dibuat full-width, padding konsisten.
          Style Sync: Ikon di dalam card diubah agar lebih elegan
          dan konsisten, memperbaiki bug 'text-black'.
        */}
        <section className="w-full bg-neutral-900 p-8 py-24 md:p-24">
          <motion.div
            className="mx-auto max-w-5xl"
            variants={fadeInFromBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="mb-12 text-center text-4xl font-bold">Achievements & Awards</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {achievements.map((ach, index) => (
                <motion.div
                  key={index}
                  variants={fadeInFromBottom}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  // Style Sync: Card bg-neutral-800 (sudah benar)
                  className="flex items-start gap-5 rounded-lg bg-neutral-800 p-6"
                >
                  {/* Ikon (Style Sync Ditingkatkan) */}
                  <div className="flex shrink-0 rounded-full bg-neutral-700 p-3 text-neutral-300">
                    {/* Menggunakan cloneElement untuk mengatur size ikon */}
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