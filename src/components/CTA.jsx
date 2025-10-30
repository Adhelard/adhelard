import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MagneticButton from './MagneticButton'; // Impor tombol baru
import { Github, Linkedin, Instagram } from 'lucide-react'; // Ikon

const CTA = () => (
  <section className="relative flex h-screen w-full p-12 flex-col items-center justify-center overflow-hidden bg-neutral-900 text-white">
    {/* Efek latar belakang */}
    <div className="absolute inset-0 z-0 bg-gradient from-neutral-700/20 via-neutral-900/0 to-neutral-900"></div>

    <div className="z-10 flex bg-neutral-600 w-auto border justify-evenly rounded-4xl p-12 items-center">
      

      {/* Ikon Sosial Media */}
      <motion.div
        className="mb-12 flex flex-col  space-x-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 class="mb-8 text-center text-5xl font-bold md:text-7xl">
          Let's work together
        </h2>
        <div className="flex space-x-5 justify-start">
          <motion.img
            src="foto.jpg" // Ganti dengan fotomu
            alt="About Illustration"
            className="w-[200px] h-[200px] object-cover rounded-2xl filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out hover:scale-105 shadow-xl"
            whileHover={{ scale: 1.05 }}
          />
          <div className="p-2">
            <h2 class="mb-8 text-center text-lg font-medium md:text-2xl">
            Alee is available for any job!
           </h2>
            <div className="flex gap-5">

            <a href="https://github.com/Adhelard" className="text-neutral-400 transition-colors hover:text-white">
            <Github className="h-8 w-8" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-arifin-740588386/" className="text-neutral-400 transition-colors hover:text-white">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="https://www.instagram.com/alefinn_?igsh=Zm81Z2luOWx4bno0" className="text-neutral-400 transition-colors hover:text-white">
              <Instagram className="h-8 w-8" />
            </a>
            </div>
          
        </div>
        </div>
        
        
      </motion.div>
      
      {/* Tombol Magnetik */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.4 }}
      >
        <Link to="/contact">
          <MagneticButton className=" px-10 py-10 text-xl">
            Get in Touch
          </MagneticButton>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default CTA;
