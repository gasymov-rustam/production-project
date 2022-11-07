import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getProfileReadonly, getValidUser, profileActions, updateProfileData } from '../../../../entities/Profile';
import { Button, ButtonTheme, Text, classNames, useAppDispatch } from '../../../../shared';

import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className = '' }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);
  /*   const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = profileData?.id === authData?.id; */
  const isValidUser = useSelector(getValidUser);

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

      {isValidUser && (
        <div className={cls.btnWrapper}>
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
      )}
    </div>
  );
};
