import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, classNames, Input } from '../../../../shared';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames({ cls: cls.LoginForm, additional: [className] })}>
      <Input autofocus placeholder={t('ENTER YOUR USERNAME')} type='text' className={cls.input} />
      <Input placeholder={t('ENTER YOUR PASSWORD')} type='text' className={cls.input} />

      <Button className={cls.loginBtn}>{t('ENTER')}</Button>
    </div>
  );
};
