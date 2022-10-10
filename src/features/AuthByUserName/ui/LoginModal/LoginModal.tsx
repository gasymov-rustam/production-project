import { FC } from 'react';
import { classNames, Modal } from '../../../../shared';
import { LoginForm } from '../LoginForm';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => (
  <Modal className={classNames({ additional: [className] })} isOpen={isOpen} lazy onClose={onClose}>
    <LoginForm />
  </Modal>
);
