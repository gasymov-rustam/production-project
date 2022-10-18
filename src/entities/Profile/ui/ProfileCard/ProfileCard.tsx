import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme, classNames, Input, Text } from '../../../../shared';
import { getProfileData } from '../../model';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = memo(({ className = '' }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  /*  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError); */

  return (
    <div className={classNames({ cls: cls.ProfileCard, additional: [className] })}>
      <div className={cls.header}>
        <Text title={t('PROFILE')} />
        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
          {t('EDIT')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input value={data?.first} placeholder={t('YOUR FIRST NAME')} className={cls.input} />
        <Input value={data?.lastname} placeholder={t('YOUR LAST NAME')} className={cls.input} />
      </div>
    </div>
  );
});
