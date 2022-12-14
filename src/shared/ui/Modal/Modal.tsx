import { ReactNode } from 'react';

import { classNames, useModal, useTheme } from '../../lib';
import type { Mods } from '../../lib';
import { Overlay } from '../Overlay';
import { Portal } from '../Portal';

import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
  children: ReactNode;
}

const ANIMATION_DELAY = 300;

export const Modal = ({ className = '', children, isOpen, onClose, lazy }: ModalProps) => {
  const { theme } = useTheme();
  const { close, isClosing, isMounted } = useModal({
    animationDelay: ANIMATION_DELAY,
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
      <div className={classNames({ cls: cls.Modal, mods, additional: [className, theme, 'app_modal'] })}>
        <Overlay onClick={close} />

        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
