import { Listbox as HListBox } from '@headlessui/react';
import { ReactNode, memo } from 'react';

import { classNames } from '../../lib';
import { Button } from '../Button';
import { HorizontalStack } from '../Stack';

import cls from './ListBox.module.scss';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom';

interface ListBoxProps {
  className?: string;
  items?: ListBoxItem[];
  value?: string;
  label?: string;
  readonly?: boolean;
  defaultValue?: string;
  direction?: DropdownDirection;
  onChange: (value: string) => void;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  bottom: cls.optionsBottom,
  top: cls.optionsTop,
};

export const ListBox = memo((props: ListBoxProps) => {
  const { className = '', items, value, defaultValue, label, readonly = false, direction = 'bottom', onChange } = props;

  const optionsClasses = [mapDirectionClass[direction]];

  return (
    <HorizontalStack gap="8">
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <HListBox
        as="div"
        disabled={readonly}
        className={classNames({ cls: cls.ListBox, mods: { [cls.disabled]: readonly }, additional: [className] })}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button as="div" className={cls.trigger}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListBox.Button>

        <HListBox.Options className={classNames({ cls: cls.options, additional: optionsClasses })}>
          {items?.map((item) => (
            <HListBox.Option key={item.value} className={cls.item} as="div" value={item.value} disabled={item.disabled}>
              {({ active, selected, disabled }) => (
                <li className={classNames({ cls: cls.item, mods: { [cls.active]: active, [cls.disabled]: disabled } })}>
                  {item.content}
                  {selected && '!'}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HorizontalStack>
  );
});
