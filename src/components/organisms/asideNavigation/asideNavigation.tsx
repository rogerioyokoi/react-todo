import Drawer from '@components/atoms/drawer/drawer';
import DrawerHeader from '@components/atoms/drawer/drawerHeader';
import { FC } from 'react';

import TodoLogoIcon from '../../../assets/svg/todo.svg';

interface AsideNavigationProps {
  isOpen: boolean;
  handleClick: () => void;
}

const AsideNavigation: FC<AsideNavigationProps> = ({ isOpen, handleClick }) => {
  return (
    <Drawer isOpen={isOpen} variant="permanent" onClickOutside={handleClick}>
      <DrawerHeader onClose={handleClick}>
        <div className="flex items-center gap-4">
          <img src={TodoLogoIcon} alt="Logomarca da aplicação" width={48} height={48} />
          <span className="font-bold tracking-widest">TODO</span>
        </div>
      </DrawerHeader>
    </Drawer>
  );
};

export default AsideNavigation;
