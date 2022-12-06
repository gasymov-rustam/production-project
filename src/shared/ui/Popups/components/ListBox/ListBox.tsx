import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import { classNames } from '../../../../lib';
import { DropdownDirection } from '../../../../types';
import { Button } from '../../../Button/Button';
import { HorizontalStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

import cls from './ListBox.module.scss';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

export const ListBox = (props: ListBoxProps) => {
  const { className = '', items, value, defaultValue, onChange, readonly, direction = 'bottom right', label } = props;

  const optionsClasses = [mapDirectionClass[direction]];

  return (
    <HorizontalStack gap="4">
      {label && <span>{`${label}>`}</span>}
      <HListBox
        disabled={readonly}
        as="div"
        className={classNames({ cls: cls.ListBox, additional: [className, popupCls.popup] })}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button disabled={readonly} className={cls.trigger}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListBox.Button>
        <HListBox.Options className={classNames({ cls: cls.options, additional: optionsClasses })}>
          {items?.map((item) => (
            <HListBox.Option key={item.value} value={item.value} disabled={item.disabled} as={Fragment}>
              {({ active, selected }) => (
                <li
                  className={classNames({
                    cls: cls.item,
                    mods: {
                      [popupCls.active]: active,
                      [popupCls.disabled]: item.disabled,
                    },
                  })}
                >
                  {selected && '!!!'}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HorizontalStack>
  );
};
