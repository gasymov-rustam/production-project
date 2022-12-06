import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '../../../entities';
import { LoginModal } from '../../../features';
import {
  AppLink,
  AppLinkTheme,
  Avatar,
  Button,
  ButtonTheme,
  Dropdown,
  HorizontalStack,
  Icon,
  NotificationIcon,
  RoutePath,
  Text,
  TextTheme,
  classNames,
  useAppDispatch,
} from '../../../shared';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className = '' }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const userData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const dispatch = useAppDispatch();
  const isAdminPanelAvailable = isAdmin || isManager;

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogOut = useCallback(() => {
    dispatch(userActions.logOut());
  }, [dispatch]);

  if (userData) {
    return (
      <header className={classNames({ cls: cls.Navbar, additional: [className] })}>
        <Text className={cls.appName} title={t('Rustam App')} theme={TextTheme.INVERTED} />

        <AppLink to={RoutePath.article_create} theme={AppLinkTheme.SECONDARY} className={cls.createBtn}>
          {t('CREATE NEW ARTICLE')}
        </AppLink>

        <HorizontalStack gap="16" max>
          <Button theme={ButtonTheme.CLEAR} className={cls.actions}>
            <Icon Svg={NotificationIcon} inverted />
          </Button>

          <Dropdown
            direction="bottom left"
            className={cls.dropdown}
            items={[
              ...(isAdminPanelAvailable
                ? [
                    {
                      content: t('ADMIN'),
                      href: RoutePath.admin_panel,
                    },
                  ]
                : []),
              {
                content: t('PROFILE'),
                href: RoutePath.profile + userData.id,
              },
              {
                content: t('SIGN OUT'),
                onClick: onLogOut,
              },
            ]}
            trigger={<Avatar size={30} src={userData?.avatar ?? ''} alt="Error" />}
          />
        </HorizontalStack>

        {/* <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onLogOut}>
          {t('SIGN OUT')}
        </Button> */}
      </header>
    );
  }

  return (
    <header className={classNames({ cls: cls.Navbar, additional: [className] })}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
        {t('SIGN IN')}
      </Button>

      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </header>
  );
});
