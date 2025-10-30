// fileName: Contact.jsx (REVISI)

import React, { useState } from 'react'; // Impor useState
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm'; 
import { Mail, Phone, MapPin } from 'lucide-react'; 
import MagneticButton from '../components/MagneticButton'; // Impor MagneticButton

// Varian animasi sederhana
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.7, 
      ease: 'easeOut' 
    } 
  },
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    // Simulate a delay for "sending" (dummy behavior)
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      alert('Message sent successfully! (This is a dummy form - no real email was sent.)');
      setForm({ name: '', email: '', message: '' }); // Reset form
    }, 2000); // 2-second delay
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen flex-col bg-neutral-900 text-white"
    >
      <Navbar />
      
      <main className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
        
        {/* --- Section 1: Header/Info Kontak --- */}
        <section className="mb-24">
          <motion.h1
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mb-6 text-7xl font-bold md:text-8xl text-neutral-200"
          >
            Ready to Build.
          </motion.h1>
          
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mb-16 max-w-2xl text-xl text-neutral-400"
          >
            I'm currently available for new development projects, collaborations, or an engaging technical chat. Let's create something meaningful together.
          </motion.p>
          
          {/* Info Kontak Minimalis */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-4 text-lg"
          >
            <a href="mailto:Blackarifin15@gmail.com" className="flex items-center gap-4 group w-fit">
              <Mail className="h-6 w-6 text-blue-500" />
              <span className="text-neutral-200 group-hover:text-white transition-colors">Blackarifin15@gmail.com</span>
            </a>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-blue-500" />
              <span className="text-neutral-200">0895 3830 51277</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-blue-500" />
              <span className="text-neutral-200">Cakung, East Jakarta</span>
            </div>
          </motion.div>
        </section>

        <div className="w-full h-px bg-neutral-700 my-16"></div> 
        
        {/* --- Section 2: Formulir Pesan --- */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="mb-12 text-5xl font-bold text-white">Send a Message</h2>
          
          {/* Form */}
          <ContactForm 
            onSubmit={handleSubmit} 
            loading={loading} 
            success={success} 
            form={form} 
            setForm={setForm}
          />
          
          {/* Magnetic Button sebagai Tombol Submit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
            className="mt-12"
          >
            <MagneticButton 
              type="submit" 
              onClick={handleSubmit} // Menggunakan onClick untuk memicu handleSubmit
              disabled={loading}
              // Menggunakan class yang lebih spesifik untuk tombol submit
              className={`text-xl px-12 py-5 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Sending...' : 'Send Message →'}
            </MagneticButton>
          </motion.div>
          

        </motion.section>
        
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Contact;