import { memo, useCallback, useMemo, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import { NotificationList } from '../../../../entities/Notification';
import { NotificationIcon, classNames } from '../../../../shared';
import { AnimationProvider } from '../../../../shared/lib';
import { Button, ButtonTheme, Drawer, Icon, Popover } from '../../../../shared/ui';

import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className = '' } = props;
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const trigger = useMemo(
    () => (
      <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
        <Icon Svg={NotificationIcon} inverted />
      </Button>
    ),
    [onOpenDrawer],
  );

  return (
    <div>
      <BrowserView>
        <Popover
          className={classNames({ cls: cls.NotificationButton, additional: [className] })}
          direction="bottom left"
          trigger={trigger}
        >
          <NotificationList className={cls.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <AnimationProvider>
          <Drawer isOpen={isOpen} onClose={onOpenDrawer}>
            <NotificationList />
          </Drawer>
        </AnimationProvider>
      </MobileView>
    </div>
  );
});
