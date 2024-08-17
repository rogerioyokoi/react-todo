import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { FC } from 'react';

import Header from '@/components/atoms/header';
import IconButton from '@/components/atoms/iconButton/iconButton';
import { ThemeSwitch } from '@/modules/theme';
import UserProfileMenu from '@/modules/user/organisms/userProfileMenu/userProfileMenu';

interface HeaderApplicationProps {
  onMenuClick: () => void;
  showMenuIcon: boolean;
}

const HeaderApplication: FC<HeaderApplicationProps> = ({ onMenuClick, showMenuIcon }) => {
  return (
    <Header shadow="md">
      <div>
        {showMenuIcon && (
          <IconButton label="Menu" onClick={onMenuClick}>
            <MenuOutlinedIcon />
          </IconButton>
        )}
      </div>
      <div className="flex items-center h-full">
        <div className="border-l px-3 border-gray-300 dark:border-gray-600 h-full flex items-center">
          <ThemeSwitch />
        </div>
        <div className="border-l pl-3 border-gray-300 dark:border-gray-600 h-full flex items-center">
          <UserProfileMenu />
        </div>
      </div>
    </Header>
  );
};

export default HeaderApplication;
