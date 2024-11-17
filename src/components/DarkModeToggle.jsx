// DarkModeToggle.js (No changes here, just ensuring it's wrapped in Router)
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate(); // Initialize navigate hook

  useEffect(() => {
    // Check the current theme in local storage or default to light
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleHomeClick = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Home Button */}
      <button
        onClick={handleHomeClick}
        className="p-2 bg-gray-200 dark:bg-gray-700 text-white rounded-full w-11 focus:outline-none hover:bg-gray-300 dark:hover:bg-gray-800 hover:scale-105 transition duration-300"
      >
        🏠
      </button>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full w-11 focus:outline-none hover:bg-gray-300 dark:hover:bg-gray-800 hover:scale-105 transition duration-300"
      >
        {darkMode ? '☀️' : ' 🌙 '}
      </button>
    </div>
  );
};

export default DarkModeToggle;
