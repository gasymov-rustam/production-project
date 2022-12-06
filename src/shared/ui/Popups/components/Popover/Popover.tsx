import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';

import { classNames } from '../../../../lib';
import { DropdownDirection } from '../../../../types';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

import cls from './Popover.module.scss';

interface PopoverProps {
  className?: string;
  direction?: DropdownDirection;
  trigger: ReactNode;
  children: ReactNode;
}

export const Popover = (props: PopoverProps) => {
  const { className = '', trigger, direction = 'bottom right', children } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <HPopover className={classNames({ cls: cls.Popover, additional: [className, popupCls.popup] })}>
      <HPopover.Button className={popupCls.trigger}>{trigger}</HPopover.Button>

      <HPopover.Panel className={classNames({ cls: cls.panel, additional: menuClasses })}>{children}</HPopover.Panel>
    </HPopover>
  );
};