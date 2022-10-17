import { memo, useEffect } from 'react';
import { fetchProfileData, ProfileCard, profileReducer } from '../../../entities/Profile';
import { classNames, DynamicModuleLoader, ReducersList, useAppDispatch } from '../../../shared';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames({ additional: [className] })}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
