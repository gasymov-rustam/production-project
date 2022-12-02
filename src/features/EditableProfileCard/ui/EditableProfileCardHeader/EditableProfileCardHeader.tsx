import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Button, ButtonTheme, HorizontalStack, Text, classNames, useAppDispatch } from '../../../../shared';
import { getProfileReadonly, getValidUser, profileActions, updateProfileData } from '../../model';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
  const { className = '' } = props;
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

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
    <HorizontalStack justify="between" max className={classNames({ additional: [className] })}>
      <Text title={t('PROFILE')} />

      {isValidUser && (
        <div>
          {readonly ? (
            <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
              {t('EDIT')}
            </Button>
          ) : (
            <HorizontalStack gap="8">
              <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
                {t('CANCEL')}
              </Button>

              <Button theme={ButtonTheme.OUTLINE} onClick={onSaveEdit}>
                {t('SAVE')}
              </Button>
            </HorizontalStack>
          )}
        </div>
      )}
    </HorizontalStack>
  );
});
