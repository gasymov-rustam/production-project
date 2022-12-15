import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '../../../../entities';
import { Avatar, Dropdown } from '../../../../shared';
import { routeCreator } from '../../../../shared/constants';

export const AvatarDropdown = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const userData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const onLogOut = useCallback(() => {
    dispatch(userActions.logOut());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!userData) {
    return null;
  }

  return (
    <Dropdown
      direction="bottom left"
      items={[
        ...(isAdminPanelAvailable
          ? [
              {
                content: t('ADMIN'),
                href: routeCreator.getRouteAdmin(),
              },
            ]
          : []),
        {
          content: t('PROFILE'),
          href: routeCreator.getRouteProfile(userData.id),
        },
        {
          content: t('SIGN OUT'),
          onClick: onLogOut,
        },
      ]}
      trigger={<Avatar size={30} src={userData?.avatar ?? ''} alt="Error" />}
    />
  );
});
