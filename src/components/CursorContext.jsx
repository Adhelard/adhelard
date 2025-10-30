// src/context/CursorContext.jsx

import React, { createContext, useState, useContext } from 'react';

// 1. Buat Context
const CursorContext = createContext();

// 2. Buat Provider (Komponen yang "menyimpan" state)
export const CursorProvider = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState('default');

  const value = { cursorVariant, setCursorVariant };

  return (
    <CursorContext.Provider value={value}>
      {children}
    </CursorContext.Provider>
  );
};

// 3. Buat hook kustom agar mudah digunakan
export const useCursor = () => {
  return useContext(CursorContext);
};