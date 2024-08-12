import clsx from 'clsx';

import { colorClassesGenerator, fixedClassGenerator, shadowClassGenerator } from '@/utils/generators';

import { HeaderProps } from './header.types';

export const headerClasses = ({ shadow, color, fixed, justifyContent, variant }: HeaderProps): string =>
  clsx(
    'w-full flex h-16 items-center px-6',
    colorClassesGenerator({ color, variant }),
    shadowClassGenerator(shadow),
    fixedClassGenerator(fixed),
    justifyContent
  );
