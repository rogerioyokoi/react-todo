import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

import { useTheme } from '@/modules/theme/hooks/useTheme/useTheme';

const ThemeSwitch: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div>
      <label htmlFor="themeSwitch" className={`flex items-center cursor-pointer`}>
        <input type="checkbox" id="themeSwitch" className="hidden" checked={isDarkMode} onChange={toggleTheme} />
        <div className={`w-12 h-6 bg-gray-300 rounded-full relative`} title={isDarkMode ? 'Modo Escuro' : 'Modo Claro'}>
          <div
            className={`w-6 h-6 bg-white rounded-full shadow-md flex justify-center transform transition-transform duration-300 ${isDarkMode ? 'translate-x-full' : 'translate-x-0'}`}
          >
            {isDarkMode ? (
              <DarkModeOutlinedIcon className="text-gray-600 text-lg opacity-100" />
            ) : (
              <LightModeOutlinedIcon className="text-yellow-500 text-lg opacity-100" />
            )}
          </div>
        </div>
      </label>
    </div>
  );
};

export default ThemeSwitch;
