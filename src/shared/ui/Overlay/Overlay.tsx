import { memo } from 'react';

import { classNames } from '../../lib';

import cls from './Overlay.module.scss';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

export const Overlay = memo((props: OverlayProps) => {
  const { className = '', onClick } = props;

  return <div onClick={onClick} className={classNames({ cls: cls.Overlay, additional: [className] })} />;
});
