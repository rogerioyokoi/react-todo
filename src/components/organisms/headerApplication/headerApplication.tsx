import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { FC } from 'react';

import Header from '@/components/atoms/header';
import IconButton from '@/components/atoms/iconButton/iconButton';

interface HeaderApplicationProps {
  onMenuClick: () => void;
  showMenuIcon: boolean;
}

const HeaderApplication: FC<HeaderApplicationProps> = ({ onMenuClick, showMenuIcon }) => {
  return (
    <Header shadow="md">
      {showMenuIcon && (
        <div>
          <IconButton label="Menu" onClick={onMenuClick}>
            <MenuOutlinedIcon />
          </IconButton>
        </div>
      )}
    </Header>
  );
};

export default HeaderApplication;
