import React, { createContext, useEffect, useState } from 'react';

import { ThemeService } from '../services/themeService';

export interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const initialTheme = ThemeService.defineInitialTheme();
    setIsDarkMode(initialTheme === 'dark');
    ThemeService.setRootTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    ThemeService.persistTheme(newMode ? 'dark' : 'light');
    ThemeService.setRootTheme(newMode ? 'dark' : 'light');
  };

  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>;
};
