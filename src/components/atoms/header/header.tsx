import { FC } from 'react';

import { headerClasses } from './header.classes';
import { HeaderProps } from './header.types';

const Header: FC<HeaderProps> = ({
  shadow,
  fixed,
  color = 'white',
  variant,
  justifyContent = 'justify-between',
  children,
}) => (
  <header data-testid="header" className={headerClasses({ color, shadow, fixed, justifyContent, variant })}>
    {children}
  </header>
);

export default Header;
