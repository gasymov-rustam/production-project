import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '../../../../entities';
import { getProfileData, getProfileReadonly, profileActions } from '../../../../entities/Profile';
import { updateProfileData } from '../../../../entities/Profile/model/services/updateProfileData/updateProfileData';
import { Button, ButtonTheme, Text, classNames, useAppDispatch } from '../../../../shared';

import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className = '' }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  // const isCurrenUser = profileData.

  // console.log(2222, authData);
  // console.log(333333, profileData);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSaveEdit = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames({ cls: cls.ProfilePageHeader, additional: [className] })}>
      <Text title={t('PROFILE')} />

      {readonly ? (
        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onEdit}>
          {t('EDIT')}
        </Button>
      ) : (
        <>
          <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
            {t('CANCEL')}
          </Button>

          <Button className={cls.saveBtn} theme={ButtonTheme.OUTLINE} onClick={onSaveEdit}>
            {t('SAVE')}
          </Button>
        </>
      )}
    </div>
  );
};
