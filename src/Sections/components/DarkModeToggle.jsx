import React, { useEffect } from 'react';
import { useState } from 'react';
import Sun from '@/assets/Sun';
import Moon from '@/assets/Moon';

export default function DarkModeToggle() {
  
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').setAttribute('data-theme', 'dark');
    } else {
      document.querySelector('html').setAttribute('data-theme', 'light');
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <input
        type='checkbox'
        id='darkMode'
        className='toggle'
        onChange={handleChangeTheme}
      />
      <label htmlFor='darkMode' id='dark-mode-toggle' className='left-buttons' >
        {theme === 'dark' ? <Sun /> : <Moon />}
      </label>
    </>
  );
}
