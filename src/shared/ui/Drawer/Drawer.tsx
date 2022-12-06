import { ReactNode, memo } from 'react';

import { useTheme } from '../../../app';
import { Mods, classNames } from '../../lib';
import { Overlay } from '../Overlay';
import { Portal } from '../Portal';

import cls from './Drawer.module.scss';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
  const { className = '', children, onClose, isOpen } = props;
  const { theme } = useTheme();

  const mods: Mods = {
    [cls.opened]: isOpen,
  };

  return (
    <Portal>
      <div className={classNames({ cls: cls.Drawer, mods, additional: [className, theme, 'app_drawer'] })}>
        <Overlay onClick={onClose} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
});
