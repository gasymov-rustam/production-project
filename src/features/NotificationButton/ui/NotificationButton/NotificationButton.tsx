import { memo } from 'react';

import { NotificationList } from '../../../../entities/Notification';
import { NotificationIcon, classNames } from '../../../../shared';
import { Button, ButtonTheme, Icon, Popover } from '../../../../shared/ui';

import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className = '' } = props;

  return (
    <Popover
      className={classNames({ cls: cls.NotificationButton, additional: [className] })}
      direction="bottom left"
      trigger={
        <Button theme={ButtonTheme.CLEAR}>
          <Icon Svg={NotificationIcon} inverted />
        </Button>
      }
    >
      <NotificationList className={cls.notifications} />
    </Popover>
  );
});
