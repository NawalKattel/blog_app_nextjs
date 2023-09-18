"use client";

import { ThemeContext } from '@/context/ThemeContext';
import React, { useContext, ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={theme}>
      {children}
    </div>
  );
}

export default ThemeProvider;
