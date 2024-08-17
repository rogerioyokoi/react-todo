import clsx from 'clsx';
import { FC } from 'react';

import { Shape, SizeShort } from '@/types';

interface AvatarProps extends Pick<HTMLImageElement, 'src' | 'alt'> {
  shape?: Shape;
  size?: SizeShort;
  className?: string;
}

const Avatar: FC<AvatarProps> = ({ src, alt, shape = 'circular', size }) => {
  const classNames = clsx(
    'inline-block relative object-cover object-center',
    {
      'rounded-full': shape === 'circular',
      'rounded-md': shape === 'rounded',
      'rounded-none': shape === 'square',
    },
    {
      'w-6 h-6': size === 'xs',
      'w-10 h-10': size === 'sm',
      'w-12 h-12': size === 'md',
      'w-16 h-16': size === 'lg',
      'w-20 h-20': size === 'xl',
    },
    'border-2 border-green-500 shadow-md'
  );

  return <img src={src} alt={alt} className={classNames} />;
};

export default Avatar;
