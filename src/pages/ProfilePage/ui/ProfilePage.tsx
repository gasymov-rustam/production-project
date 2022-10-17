import { useTranslation } from 'react-i18next';

interface ProfilePageProps {}

const ProfilePage = () => {
  const { t } = useTranslation('profile');

  return <div>{t('PROFILE PAGE')}</div>;
};

export default ProfilePage;
