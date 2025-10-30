import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react'; // Ganti dengan emoji jika perlu

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-950 py-8 text-neutral-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 sm:flex-row">
        {/* Kiri: Teks Anda */}
        <p className="mb-4 sm:mb-0">
          Code by <span className="font-semibold text-white">Aleefin</span>
        </p>
        
        {/* Kanan: Ikon Kontak/Sosmed */}
        <div className="flex space-x-6">
          <a href="https://github.com/Adhelard" className="transition-colors hover:text-white" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-arifin-740588386/" className="transition-colors hover:text-white" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:Blackarifin15@gmail.com" className="transition-colors hover:text-white" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;