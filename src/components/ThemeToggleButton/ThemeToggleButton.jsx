import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className='flex justify-end items-center w-full mb-4'>
      <button
        onClick={toggleTheme}
        className={`
          flex items-center gap-2
          px-4 py-2 mt-2 mr-6 xl:mr-2
          rounded-full
          shadow-lg
          border border-[var(--border-color)]
          bg-[var(--content-background)]
          text-[var(--text-primary)]
          transition-all duration-200
          hover:bg-[var(--accent-primary)] hover:text-white
          focus:outline-none
          cursor-pointer
        `}
        aria-label='Toggle dark mode'
      >
        {theme === 'light' ? (
          <span role='img' aria-label='Light mode'>
            🌞
          </span>
        ) : (
          <span role='img' aria-label='Dark mode'>
            🌙
          </span>
        )}
        <span className='hidden md:inline'>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
      </button>
    </div>
  );
};

export default ThemeToggleButton;
