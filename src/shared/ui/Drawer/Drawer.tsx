import { ReactNode, memo } from 'react';

import { useTheme } from '../../../app';
import { Mods, classNames, useModal } from '../../lib';
import { Overlay } from '../Overlay';
import { Portal } from '../Portal';

import cls from './Drawer.module.scss';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Drawer = memo((props: DrawerProps) => {
  const { className = '', children, onClose, isOpen, lazy } = props;
  const { theme } = useTheme();
  const { close, isClosing, isMounted } = useModal({
    animationDelay: 300,
    onClose,
    isOpen,
  });

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames({ cls: cls.Drawer, mods, additional: [className, theme, 'app_drawer'] })}>
        <Overlay onClick={close} />

        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
});
