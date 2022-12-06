import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { v4 } from 'uuid';

import { classNames } from '../../../../lib';
import { DropdownDirection } from '../../../../types';
import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

import cls from './Dropdown.module.scss';

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  direction?: DropdownDirection;
  trigger: ReactNode;
}

export const Dropdown = (props: DropdownProps) => {
  const { className = '', trigger, items, direction = 'bottom right' } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu as="div" className={classNames({ cls: cls.Dropdown, additional: [className, popupCls.popup] })}>
      <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={classNames({ cls: cls.menu, additional: menuClasses })}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              disabled={item.disabled}
              onClick={item.onClick}
              className={classNames({ cls: cls.item, mods: { [popupCls.active]: active } })}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item key={v4()} as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item key={v4()} as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
