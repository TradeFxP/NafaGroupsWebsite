import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [currentTheme, setCurrentTheme] = useState('combined');

  const themes = {
    combined: {
      name: 'Combined Theme',
      primary: '#1b2159',
      secondary: '#cb1236',
      accent: '#f7f7f7',
      bg: '#ffffff',
      icon: 'fa-palette'
    },
    default: {
      name: 'Red Theme',
      primary: '#cb1236',
      secondary: '#a00e2b',
      accent: '#d81442',
      bg: '#0a0e11',
      icon: 'fa-fire'
    }
  };

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('siteTheme') || 'combined';
    // Check if saved theme still exists, otherwise use combined (blue theme)
    const validTheme = themes[savedTheme] ? savedTheme : 'combined';
    setCurrentTheme(validTheme);
    applyTheme(validTheme);
  }, []);

  const applyTheme = (themeName) => {
    const theme = themes[themeName];
    
    // Safety check - if theme doesn't exist, use default
    if (!theme) {
      console.warn(`Theme "${themeName}" not found, using default`);
      themeName = 'default';
    }
    
    const root = document.documentElement;

    // Apply CSS variables
    root.style.setProperty('--primary-color', theme.primary);
    root.style.setProperty('--secondary-color', theme.secondary);
    root.style.setProperty('--accent-color', theme.accent);
    root.style.setProperty('--bg-color', theme.bg);

    // Add theme class to body
    document.body.classList.remove('theme-default', 'theme-combined');
    document.body.classList.add(`theme-${themeName}`);

    // Save to localStorage
    localStorage.setItem('siteTheme', themeName);
  };

  const handleThemeChange = (themeName) => {
    setCurrentTheme(themeName);
    applyTheme(themeName);
  };

  return (
    <div className="theme-toggle-container">
      {/* <div className="theme-buttons">
        {Object.keys(themes).map((themeKey) => (
          <button
            key={themeKey}
            className={`theme-button ${currentTheme === themeKey ? 'active' : ''}`}
            onClick={() => handleThemeChange(themeKey)}
            title={themes[themeKey].name}
            style={{
              background: currentTheme === themeKey 
                ? `linear-gradient(135deg, ${themes[themeKey].primary}, ${themes[themeKey].secondary})`
                : 'rgba(255, 255, 255, 0.1)',
              borderColor: themes[themeKey].primary
            }}
          >
            <i className={`fa ${themes[themeKey].icon}`}></i>
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default ThemeToggle;
