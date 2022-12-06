import { memo } from 'react';

import { Card, CardTheme, Text, classNames } from '../../../../shared';
import { Notification } from '../../model';

import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className = '', item } = props;

  const content = (
    <Card theme={CardTheme.OUTLINED} className={classNames({ cls: cls.NotificationItem, additional: [className] })}>
      <Text title={item.title} text={item.description} />
    </Card>
  );

  if (item.href) {
    return (
      <a className={cls.link} target="_blank" href={item.href} rel="noreferrer">
        {content}
      </a>
    );
  }

  return content;
});
