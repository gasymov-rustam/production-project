import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  Button,
  classNames,
  DynamicModuleLoader,
  Input,
  Text,
  TextTheme,
  useAppDispatch,
} from '../../../../shared';
import {
  getLoginError,
  getLoginIsLoading,
  getLoginPassword,
  getLoginUsername,
  loginActions,
  loginByUserName,
  loginReducer,
} from '../../model';
import type { ReducersList } from '../../../../shared';

import cls from './LoginForm.module.scss';

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};
export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const userName = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const onChangeUserName = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserName(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUserName({ userName, password }));

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [onSuccess, dispatch, password, userName]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames({ cls: cls.LoginForm, additional: [className] })}>
        <Text title={t('AUTHORIZATION')} />

        {error && <Text text={t('INVALID NAME OR PASSWORD!')} theme={TextTheme.ERROR} />}

        <Input
          autofocus
          placeholder={t('ENTER YOUR USERNAME')}
          type='text'
          value={userName}
          className={cls.input}
          onChange={onChangeUserName}
        />
        <Input
          placeholder={t('ENTER YOUR PASSWORD')}
          type='text'
          value={password}
          className={cls.input}
          onChange={onChangePassword}
        />

        <Button disabled={isLoading} className={cls.loginBtn} onClick={onLoginClick}>
          {t('ENTER')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
