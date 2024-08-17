import { useThemeContext } from '../useThemeContext/useThemeContext';

export const useTheme = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();
  return { isDarkMode, toggleTheme };
};
