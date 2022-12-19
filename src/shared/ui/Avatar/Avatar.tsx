import { CSSProperties, memo, useMemo } from 'react';

import { UserIcon } from '../../assets';
import { classNames } from '../../lib';
import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  size?: number;
  src: string;
  alt: string;
  fallbackInverted?: boolean;
}

export const Avatar = memo(({ className = '', size = 100, src, alt, fallbackInverted }: AvatarProps) => {
  const styles = useMemo<CSSProperties>(
    () => ({
      width: size ?? 100,
      height: size ?? 100,
    }),
    [size],
  );

  const fallback = <Skeleton width={size} height={size} border="50%" />;
  const errorFallback = <Icon inverted={fallbackInverted} width={size} height={size} Svg={UserIcon} />;

  return (
    <AppImage
      src={src}
      style={styles}
      alt={alt}
      fallback={fallback}
      errorFallback={errorFallback}
      className={classNames({ cls: cls.Avatar, additional: [className] })}
    />
  );
});
