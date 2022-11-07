import { CSSProperties, memo, useMemo } from 'react';

import { classNames } from '../../lib';

import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  size?: number;
  src: string;
  alt: string;
}

export const Avatar = memo(({ className = '', size, src, alt }: AvatarProps) => {
  const styles = useMemo<CSSProperties>(
    () => ({
      width: size ?? 100,
      height: size ?? 100,
    }),
    [size],
  );

  return (
    <img src={src} style={styles} alt={alt} className={classNames({ cls: cls.Avatar, additional: [className] })} />
  );
});
