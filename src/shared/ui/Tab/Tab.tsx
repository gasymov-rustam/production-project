import { memo, useCallback } from 'react';

import { classNames } from '../../lib';
import { Card, CardTheme } from '../Card';

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

export const Tab = <T extends string>(props: TabProps<T>) => {
  const { className = '', tabs, value, onTabHandler } = props;

  const onClickHandler = useCallback((tab: TabItem<T>) => () => onTabHandler(tab), [onTabHandler]);

  return (
    <div className={classNames({ cls: cls.Tab, additional: [className] })}>
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
    </div>
  );
};
