// src/App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import CursorFollower from './components/CursorFollower';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// 1. Impor Provider baru Anda
import { CursorProvider } from './components/CursorContext'; 

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    // 2. Bungkus Router (atau seluruh return) dengan Provider
    <CursorProvider>
      <Router>
        <CursorFollower />
        <AnimatePresence mode="wait">
          {showSplash ? (
            <SplashScreen key="splash" onComplete={handleSplashComplete} />
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          )}
        </AnimatePresence>
      </Router>
    </CursorProvider>
  );
}

export default App;