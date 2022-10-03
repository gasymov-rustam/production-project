import { FC } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  elements?: HTMLElement;
}

export const Portal: FC<PortalProps> = (props) => {
  const { children, elements = document.body } = props;

  return createPortal(children, elements);
};
