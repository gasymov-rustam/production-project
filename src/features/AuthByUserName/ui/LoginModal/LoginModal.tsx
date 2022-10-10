import { FC } from 'react';
import { classNames, Modal } from '../../../../shared';
import { LoginForm } from '../LoginForm';

import cls from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => (
  <Modal
    className={classNames({ cls: cls.LoginModal, additional: [className] })}
    isOpen={isOpen}
    lazy
    onClose={onClose}
  >
    <LoginForm />
  </Modal>
);
