import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { v4 } from 'uuid';

import { classNames } from '../../lib';
import { DropdownDirection } from '../../types';
import { AppLink } from '../AppLink/AppLink';

import cls from './DropDownMenu.module.scss';

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

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
  'top right': cls.optionsTopRight,
  'top left': cls.optionsTopLeft,
};

export const DropDownMenu = (props: DropdownProps) => {
  const { className = '', trigger, items, direction = 'bottom right' } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu as="div" className={classNames({ cls: cls.Dropdown, additional: [className] })}>
      <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
      <Menu.Items className={classNames({ cls: cls.menu, additional: menuClasses })}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              key={v4()}
              type="button"
              disabled={item.disabled}
              onClick={item.onClick}
              className={classNames({ cls: cls.item, mods: { [cls.active]: active } })}
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
