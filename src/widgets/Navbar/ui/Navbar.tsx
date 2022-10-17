import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from '../../../entities';
import { LoginModal } from '../../../features';
import { Button, ButtonTheme, classNames, useAppDispatch } from '../../../shared';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const userData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

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
      <div className={classNames({ cls: cls.Navbar, additional: [className] })}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onLogOut}>
          {t('SIGN OUT')}
        </Button>

        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      </div>
    );
  }

  return (
    <div className={classNames({ cls: cls.Navbar, additional: [className] })}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
        {t('SIGN IN')}
      </Button>

      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </div>
  );
});
