import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm'; 
import { Mail, Phone, MapPin } from 'lucide-react'; 

const Contact = () => {
  return (
    // Style Sync: Mengubah ke background gelap (bg-neutral-900)
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen flex-col bg-neutral-900 text-white"
    >
      <Navbar />
      
      {/* Konten Utama */}
      <main className="flex ">
        <div className="mx-auto grid max-w-7xl h-screen grid-cols-1 gap-16 px-6 py-32 md:grid-cols-2">
          
          {/* Kolom Kiri: Info Kontak */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            // Style Sync: Menambahkan card styling (bg-neutral-800, rounded-xl)
            className="rounded-xl bg-neutral-800 p-8 shadow-2xl" 
          >
            <h1 className="mb-6 text-5xl font-bold">Get in Touch</h1>
            {/* Mengubah bahasa dan warna teks agar terlihat di latar belakang gelap */}
            <p className="mb-12 text-lg text-neutral-300"> 
              Got an exciting project or just want to say hello? 
              Feel free to reach out.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:Blackarifin15@gmail.com" className="flex items-center gap-4 group">
                {/* Warna Ikon: Mengubah ke blue-400 */}
                <Mail className="h-6 w-6 text-blue-400" /> 
                <span className="text-lg group-hover:underline">Blackarifin15@gmail.com</span>
              </a>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-blue-400" />
                <span className="text-lg">0895 3830 51277</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-blue-400" />
                <span className="text-lg">Cakung, East Jakarta</span>
              </div>
            </div>
          </motion.div>
          
          {/* Kolom Kanan: Formulir Kontak */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            // Style Sync: Mengubah form ke neutral-800 dan menambahkan border
            className="rounded-xl border border-neutral-700 bg-neutral-800 p-8 shadow-2xl"
          >
            {/* Mengubah bahasa */}
            <h2 className="mb-6 text-3xl font-semibold">Send a Message</h2>
            <ContactForm />
          </motion.div>
          
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Contact;