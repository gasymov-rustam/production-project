import { FC } from 'react';
import { classNames, Modal, SuspenseLoader } from '../../../../shared';
import { LoginFormAsync } from '../LoginForm';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => (
  <Modal className={classNames({ additional: [className] })} isOpen={isOpen} lazy onClose={onClose}>
    <SuspenseLoader>
      <LoginFormAsync />
    </SuspenseLoader>
  </Modal>
);
