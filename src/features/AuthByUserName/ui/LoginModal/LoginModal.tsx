import { memo } from 'react';
import { classNames, Modal, SuspenseLoader } from '../../../../shared';
import { LoginFormAsync } from '../LoginForm';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = memo(({ className, isOpen, onClose }: LoginModalProps) => (
  <Modal className={classNames({ additional: [className] })} isOpen={isOpen} lazy onClose={onClose}>
    <SuspenseLoader>
      <LoginFormAsync onSuccess={onClose} />
    </SuspenseLoader>
  </Modal>
));
