import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '../../../entities';
import { LoginModal } from '../../../features';
import { AvatarDropdown } from '../../../features/AvatarDropdown';
import { NotificationButton } from '../../../features/NotificationButton';
import {
  AppLink,
  AppLinkTheme,
  Button,
  ButtonTheme,
  HorizontalStack,
  RoutePath,
  Text,
  TextTheme,
  classNames,
} from '../../../shared';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className = '' }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const userData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  if (userData) {
    return (
      <header className={classNames({ cls: cls.Navbar, additional: [className] })}>
        <Text className={cls.appName} title={t('Rustam App')} theme={TextTheme.INVERTED} />

        <AppLink to={RoutePath.article_create} theme={AppLinkTheme.SECONDARY} className={cls.createBtn}>
          {t('CREATE NEW ARTICLE')}
        </AppLink>

        <HorizontalStack gap="16" className={cls.actions}>
          <NotificationButton />

          <AvatarDropdown />
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
