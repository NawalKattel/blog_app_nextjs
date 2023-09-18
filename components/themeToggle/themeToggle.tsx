"use client";

import React, { useContext } from 'react';
import styles from './themeToggle.module.css';
import Image from 'next/image';
import { ThemeContext } from '@/context/ThemeContext';
import image from '../../public/next.svg'

// Define the expected shape of the context value
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Define the ThemeToggle component with TypeScript
const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useContext<ThemeContextType>(ThemeContext);


  return (
    <div className={styles.container} style={theme === "dark" ? { left: 1, background:"white" } : {
		right: 1,background:  "#0f172a"
	}} onClick={toggleTheme}>
      <Image src={image} alt="moon" height={14} width={14} />
		  <div className={styles.ball} style={theme === "dark" ? { left: 1, background: "#0f172a" } : {
		  right: 1,background: "white"
	  }}>
        <Image src={image}  alt="sun" height={14} width={14} />
      </div>
    </div>
  );
};

export default ThemeToggle;
