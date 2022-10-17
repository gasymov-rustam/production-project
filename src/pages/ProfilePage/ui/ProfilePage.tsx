import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ProfilePage = memo(() => {
  const { t } = useTranslation('profile');

  return <div>{t('PROFILE PAGE')}</div>;
});

export default ProfilePage;
