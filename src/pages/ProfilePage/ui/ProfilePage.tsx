import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { profileReducer } from '../../../entities/Profile';
import { DynamicModuleLoader, ReducersList } from '../../../shared';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  const { t } = useTranslation('profile');

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div>{t('PROFILE PAGE')}</div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
