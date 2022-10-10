import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button, classNames, Input, Text, TextTheme } from '../../../../shared';
import { getLoginState, loginActions, loginByUserName } from '../../model';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { userName, password, isLoading, error } = useSelector(getLoginState);
  const { t } = useTranslation();
  const dispatch = useDispatch();

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

  const onLoginClick = useCallback(() => {
    dispatch(loginByUserName({ password, userName }));
  }, [dispatch, password, userName]);

  return (
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
  );
});
