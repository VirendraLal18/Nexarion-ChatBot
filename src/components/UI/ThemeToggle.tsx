// components/UI/ThemeToggle.tsx
import React from 'react';

interface ThemeToggleProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <button 
    
      onClick={toggleDarkMode} 
      className="p-2 ml-4 rounded transition"
    >
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
