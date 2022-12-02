import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Avatar,
  HorizontalStack,
  Input,
  Loader,
  Mods,
  Text,
  TextTheme,
  VerticalStack,
  classNames,
} from '../../../../shared';
import { Country, CountrySelect } from '../../../Country';
import { Currency, CurrencySelect } from '../../../Currency';
import { Profile } from '../../model';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUserName?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const {
    className = '',
    data,
    error,
    readonly,
    isLoading,
    onChangeFirstName,
    onChangeLastName,
    onChangeCity,
    onChangeAge,
    onChangeUserName,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation('profile');

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  if (isLoading) {
    return (
      <HorizontalStack
        justify="center"
        className={classNames({ cls: cls.ProfileCard, additional: [className, cls.loading] })}
      >
        <Loader />
      </HorizontalStack>
    );
  }

  if (error) {
    return (
      <HorizontalStack
        justify="center"
        className={classNames({ cls: cls.ProfileCard, additional: [className, cls.error] })}
      >
        <Text
          theme={TextTheme.ERROR}
          title={t('AN ERROR OCCURRED WHILE LOADING THE PROFILE')}
          text={t('TRY REFRESH PAGE')}
        />
      </HorizontalStack>
    );
  }

  return (
    <VerticalStack gap="8" max className={classNames({ cls: cls.ProfileCard, mods, additional: [className] })}>
      {data?.avatar && (
        <HorizontalStack justify="center" className={cls.avatarWrapper}>
          <Avatar src={data?.avatar} alt="" />
        </HorizontalStack>
      )}

      <Input
        value={data?.first}
        readOnly={readonly}
        placeholder={t('YOUR FIRST NAME')}
        className={cls.input}
        onChange={onChangeFirstName}
        data-testid="ProfileCard.firstName"
      />

      <Input
        value={data?.lastname}
        readOnly={readonly}
        placeholder={t('YOUR LAST NAME')}
        className={cls.input}
        onChange={onChangeLastName}
        data-testid="ProfileCard.lastName"
      />

      <Input
        value={data?.age}
        readOnly={readonly}
        placeholder={t('YOUR AGE')}
        className={cls.input}
        onChange={onChangeAge}
      />

      <Input
        value={data?.city}
        readOnly={readonly}
        placeholder={t('YOUR CITY')}
        className={cls.input}
        onChange={onChangeCity}
      />

      <Input
        value={data?.userName}
        readOnly={readonly}
        placeholder={t('YOUR USER NAME')}
        className={cls.input}
        onChange={onChangeUserName}
      />

      <Input
        value={data?.avatar}
        readOnly={readonly}
        placeholder={t('AVATAR LINK')}
        className={cls.input}
        onChange={onChangeAvatar}
      />

      <CurrencySelect className={cls.input} value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />
      <CountrySelect className={cls.input} value={data?.country} onChange={onChangeCountry} readonly={readonly} />
    </VerticalStack>
  );
});
