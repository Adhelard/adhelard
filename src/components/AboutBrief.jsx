import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MagneticButton from './MagneticButton'; // Impor tombol baru

const AboutBrief = () => (
  <section className="flex min-h-screen w-full flex-col bg-neutral-950 p-8 text-white md:flex-row">
    
    {/* Bagian teks kiri */}
    <motion.div
      className="flex w-full flex-col justify-center p-8 md:w-2/3"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <p className="mb-8 max-w-2xl text-3xl text-neutral-300">
        I am passionate about developing strong leadership and technical skills by contributing to meaningful technology projects. I aim to become a developer and future leader who creates solutions that inspire growth, collaboration, and positive change.
      </p>
      <p className="mb-8 max-w-2xl text-xl text-neutral-400">
        Through continuous learning and teamwork, I strive to build technology that empowers communities and drives real impact.
      </p>
      <Link to="/about">
        <MagneticButton>
          Still curious? →
        </MagneticButton>
      </Link>
    </motion.div>

    {/* Bagian gambar kanan */}
    <motion.div
      className="flex w-full items-center justify-center p-8 md:w-1/3"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <motion.img
        src="foto.jpg" // Ganti dengan fotomu
        alt="About Illustration"
        className="w-[400px] h-[600px] object-cover rounded-2xl filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out hover:scale-105 shadow-xl"
        whileHover={{ scale: 1.05 }}
      />
    </motion.div>

  </section>
);

export default AboutBrief;
