import { memo, useCallback } from 'react';

import { classNames } from '../../lib';
import { Card, CardTheme } from '../Card';
import { HorizontalStack } from '../Stack';

import cls from './Tab.module.scss';

export interface TabItem<T extends string> {
  value: T;
  content: string;
}

interface TabProps<T extends string> {
  className?: string;
  tabs: TabItem<T>[];
  value: string;
  onTabHandler: (tab: TabItem<T>) => void;
}

const TabWrapped = <T extends string>(props: TabProps<T>) => {
  const { className = '', tabs, value, onTabHandler } = props;

  const onClickHandler = useCallback((tab: TabItem<T>) => () => onTabHandler(tab), [onTabHandler]);

  return (
    <HorizontalStack gap="16" className={classNames({ cls: cls.Tab, additional: [className] })}>
      {tabs?.map((tab) => (
        <Card
          key={tab.value}
          theme={value === tab.value ? CardTheme.OUTLINED : CardTheme.NORMAL}
          className={cls.tab}
          onClick={onClickHandler(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </HorizontalStack>
  );
};

export const Tab = memo(TabWrapped) as typeof TabWrapped;
