import { memo, useCallback } from 'react';

import { classNames } from '../../lib';
import { Card, CardTheme } from '../Card';

import cls from './Tab.module.scss';

export interface TabItem {
  value: string;
  content: string;
}

interface TabProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabHandler: (tab: TabItem) => void;
}

export const Tab = memo((props: TabProps) => {
  const { className = '', tabs, value, onTabHandler } = props;

  const onClickHandler = useCallback((tab: TabItem) => () => onTabHandler(tab), [onTabHandler]);

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
});
