// src/context/CursorContext.jsx

import React, { createContext, useState, useContext, useEffect } from 'react';

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isDesktop, setIsDesktop] = useState(false); // <-- Tambahan state ini

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    setIsDesktop(mediaQuery.matches);

    const handleResize = (e) => setIsDesktop(e.matches);
    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  // Expose isDesktop ke dalam value
  return (
    <CursorContext.Provider value={{ cursorVariant, setCursorVariant, isDesktop }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);