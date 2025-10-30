import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Mail, Star } from 'lucide-react'; // Menggunakan ikon yang lebih baik

// Daftar navigasi
const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: User },
  { name: 'Contact', path: '/contact', icon: Mail },
];

const Navbar = () => {
  const location = useLocation();
  const [hoveredPath, setHoveredPath] = useState(location.pathname);

  return (
    <nav
      onMouseLeave={() => setHoveredPath(location.pathname)}
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-2 rounded-full border border-white/10 bg-black/50 p-2 backdrop-blur-md"
    >
      {/* 1. Nama Panggilan Anda */}
      <div className="hidden sm:flex items-center gap-2 px-4">
        <span className=" text-lg font-mono font-bold text-white">
          Aleefin
        </span>
      </div>

      {/* 2. Tombol Navigasi dengan Efek "Gooey" */}
      <div className="flex items-center gap-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onMouseEnter={() => setHoveredPath(item.path)}
            className={`relative rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
              location.pathname === item.path
                ? 'text-white'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              <item.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{item.name}</span>
            </span>
            
            {/* Ini adalah "Pulau" atau "Gooey Bubble" yang bergerak */}
            <AnimatePresence>
              {hoveredPath === item.path && (
                <motion.span
                  className="absolute inset-0 z-0 rounded-full bg-neutral-700/50"
                  layoutId="navbar-bubble"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 25 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                />
              )}
            </AnimatePresence>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
