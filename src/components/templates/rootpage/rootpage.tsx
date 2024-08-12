import useMediaQuery from '@mui/material/useMediaQuery';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import AsideNavigation from '@/components/organisms/asideNavigation/asideNavigation';
import HeaderApplication from '@/components/organisms/headerApplication/headerApplication';

const RootPage: React.FC = () => {
  const isLargeScreen = useMediaQuery('(min-width: 1280px)');
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    if (isLargeScreen) {
      setOpenDrawer(true);
    } else {
      setOpenDrawer(false);
    }
  }, [isLargeScreen]);

  console.warn('openDrawer: ', openDrawer);

  return (
    <div className="flex relative h-screen xl">
      <AsideNavigation isOpen={openDrawer} handleClick={() => setOpenDrawer(!openDrawer)} />
      <div
        className={clsx('w-screen', {
          'ml-72': isLargeScreen && openDrawer,
        })}
      >
        <div className="w-full fixed">
          <HeaderApplication
            showMenuIcon={!isLargeScreen || !openDrawer}
            onMenuClick={() => setOpenDrawer(!openDrawer)}
          />
        </div>
        <div className="mt-20 px-6 h-[3000px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootPage;
