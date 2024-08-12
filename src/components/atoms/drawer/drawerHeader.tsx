import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { FC, PropsWithChildren } from 'react';

import Header from '../header';
import IconButton from '../iconButton/iconButton';

interface DrawerHeaderProps extends PropsWithChildren {
  onClose?: () => void;
}

const DrawerHeader: FC<DrawerHeaderProps> = ({ children, onClose }) => {
  return (
    <Header variant="solo" color="neutral" shadow="md">
      <div>{children}</div>
      <div>
        <IconButton label="Fechar navegação lateral" onClick={() => onClose?.()}>
          <CloseOutlinedIcon className="text-slate-50" />
        </IconButton>
      </div>
    </Header>
  );
};

export default DrawerHeader;
