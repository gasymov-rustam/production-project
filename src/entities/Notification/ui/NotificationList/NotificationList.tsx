import { memo } from 'react';

import { Skeleton, VerticalStack, classNames } from '../../../../shared';
import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem';

import cls from './NotificationList.module.scss';

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className = '' } = props;
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 10000,
  });

  if (isLoading) {
    return (
      <VerticalStack gap="16" max className={classNames({ cls: cls.NotificationList, additional: [className] })}>
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
      </VerticalStack>
    );
  }

  return (
    <VerticalStack
      gap="16"
      max
      wrap="no-wrap"
      className={classNames({ cls: cls.NotificationList, additional: [className] })}
    >
      {data?.map((item) => (
        <NotificationItem key={item.id} item={item} />
      ))}
    </VerticalStack>
  );
});
