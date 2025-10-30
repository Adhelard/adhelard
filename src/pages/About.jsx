import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar'; // Impor Navbar global
import Footer from '../components/Footer'; // Impor Footer global
import { Briefcase, Award, GraduationCap, Star } from 'lucide-react'; // Ikon

// Varian animasi untuk "fade in from bottom"
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

// Data dari CV Anda (Diterjemahkan ke Bahasa Inggris)
const experiences = [
  {
    icon: <Briefcase />,
    role: 'Internship',
    company: 'PT Al Khawarizmi',
    date: 'August 2025 - Present', // [cite: 9]
  },
  {
    icon: <Briefcase />,
    role: 'Developer Team Member',
    company: 'Official Developer Team Sekolah Impian',
    date: '2024 - Present', // [cite: 10]
  },
];

const achievements = [
  {
    icon: <GraduationCap />,
    title: '30 Juz Quran Memorization',
    desc: 'Completed the Ziyadah (Memorization) of 30 Juz of the Holy Qur\'an.', // [cite: 33]
  },
  {
    icon: <GraduationCap />,
    title: 'Sanad of 5 Juz',
    desc: 'Obtained Sanad (Verified Lineage) for 5 Juz (Juz 26 – 30) from Syaikh Ahmad Ibrahim As-Subhi.', // [cite: 34]
  },
  {
    icon: <Award />,
    title: '1st Winner of ‘Taqwa.i’ Competition',
    desc: 'Winner in the ARQtion and Hakesi 2025 competitions.', // [cite: 38]
  },
  {
    icon: <Star />,
    title: '"Zero to Hero" Award',
    desc: 'Awarded for achievement in Arabic Language at the Language Fest 2024, Sekolah Impian.', // [cite: 40]
  },
];

const About = () => {
  return (
    // Style Sync: Wrapper menggunakan bg-neutral-900 (seperti Hero dan CTA)
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-neutral-900 text-white"
    >
      <Navbar />
      
      <main className="mx-auto max-w-5xl px-6 py-32">
        {/* --- Section 1: Biografi --- */}
        <motion.section
          variants={fadeInFromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-24"
        >
          <h1 className="mb-4 text-5xl font-bold">About Me</h1>
          <p className="text-xl text-neutral-300">
            I am Muhammad Arifin Ali, a passionate Web & App Developer and a dedicated student focused on creating impactful technological solutions. With strong foundational skills in Front-End (Flutter, Tailwind, HTML, CSS) and Back-End (PHP, SQL, Firebase, JS) development [cite: 19, 20], I strive to build applications that not only solve problems but also inspire growth and positive change within communities, such as my work on QCB A.I. and Portal Sekolah Impian[cite: 12, 15]. I combine technical expertise with leadership qualities, aiming to be a future developer and leader who drives real impact.
          </p>
        </motion.section>

        {/* --- Section 2: Pengalaman (Timeline) --- */}
        <motion.section
          variants={fadeInFromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-24"
        >
          <h2 className="mb-12 text-4xl font-bold">Experience</h2>
          {/* Style Sync: Mengubah border timeline ke neutral-700 */}
          <div className="relative border-l-2 border-neutral-700 pl-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeInFromBottom}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="relative mb-12"
              >
                {/* Ikon di timeline */}
                <div className="absolute -left-[42px] top-1 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-500 text-white">
                  {exp.icon}
                </div>
                <span className="text-sm font-semibold uppercase text-neutral-400">
                  {exp.date}
                </span>
                <h3 className="text-2xl font-semibold">{exp.role}</h3>
                <p className="text-lg text-neutral-300">{exp.company}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* --- Section 3: Prestasi (Grid) --- */}
        <motion.section
          variants={fadeInFromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="mb-12 text-4xl font-bold">Achievements & Awards</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {achievements.map((ach, index) => (
              <motion.div
                key={index}
                variants={fadeInFromBottom}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                // Style Sync: Menggunakan card background bg-neutral-800 (seperti FeaturedProjects)
                className="flex gap-4 rounded-lg bg-neutral-800 p-6"
              >
                {/* Warna ikon lebih terang (blue-400) agar menonjol di latar gelap */}
                <div className="flex text-black">{ach.icon}</div>
                <div>
                  <h3 className="mb-1 text-xl font-semibold">{ach.title}</h3>
                  <p className="text-neutral-300">{ach.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default About;