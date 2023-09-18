"use client";
import React, { createContext, useState, ReactNode, useEffect } from 'react';

// Define the shape of the context value
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({ theme: 'light', toggleTheme: () => {} });

const getFromLocalStorage = (): string => {
  if (typeof window !== 'undefined') {
    const theme = localStorage.getItem('theme');
    return theme ? theme : 'light';
  }
  return 'light';
};

interface ThemeContextProviderProps {
  children: ReactNode;
}

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(() => getFromLocalStorage());

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  }

  // Store the theme in local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
