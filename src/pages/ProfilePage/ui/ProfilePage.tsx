import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Country, Currency } from '../../../entities';
import {
  ProfileCard,
  ValidateProfileError,
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  profileReducer,
} from '../../../entities/Profile';
import {
  DynamicModuleLoader,
  PageWrapper,
  ReducersList,
  Text,
  TextTheme,
  classNames,
  useAppDispatch,
  useInitialEffect,
} from '../../../shared';

import { ProfilePageHeader } from './ProfilePageHeader';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo(({ className = '' }: ProfilePageProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('profile');
  const { id } = useParams<{ id: string }>();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorTranslates = useMemo(
    () => ({
      [ValidateProfileError.SERVER_ERROR]: t(ValidateProfileError.SERVER_ERROR),
      [ValidateProfileError.INCORRECT_AGE]: t(ValidateProfileError.INCORRECT_AGE),
      [ValidateProfileError.INCORRECT_CITY]: t(ValidateProfileError.INCORRECT_CITY),
      [ValidateProfileError.INCORRECT_COUNTRY]: t(ValidateProfileError.INCORRECT_COUNTRY),
      [ValidateProfileError.INCORRECT_USER_DATA]: t(ValidateProfileError.INCORRECT_USER_DATA),
      [ValidateProfileError.NO_DATA]: t(ValidateProfileError.NO_DATA),
    }),
    [t],
  );

  const onChangeFirstName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ first: value ?? '' }));
    },
    [dispatch],
  );

  const onChangeLastName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value ?? '' }));
    },
    [dispatch],
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      const numbers = /^[0-9]+$/;

      if (value?.match(numbers)) {
        dispatch(profileActions.updateProfile({ age: Number(value ?? 0) }));
      }
    },
    [dispatch],
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value ?? '' }));
    },
    [dispatch],
  );

  const onChangeUserName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value ?? '' }));
    },
    [dispatch],
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value ?? '' }));
    },
    [dispatch],
  );

  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch],
  );

  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch],
  );

  useInitialEffect(() => id && dispatch(fetchProfileData(id)));

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <PageWrapper className={classNames({ additional: [className] })}>
        <ProfilePageHeader />

        {!!validateErrors?.length &&
          validateErrors.map((err) => <Text key={err} theme={TextTheme.ERROR} text={validateErrorTranslates[err]} />)}

        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUserName={onChangeUserName}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </PageWrapper>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
