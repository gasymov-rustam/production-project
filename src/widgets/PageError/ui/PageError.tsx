import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../shared';
import cln from './PageError.module.scss';

interface PageErrorProps {}

export const PageError: FC<PageErrorProps> = () => {
  const { t } = useTranslation();

  const reloadPage = () => window.location.reload();

  return (
    <div className={cln.PageError}>
      <p>{t('AN UNEXPECTED ERROR HAS OCCURRED')}</p>
      <Button onClick={reloadPage}>{t('RELOAD PAGE')}</Button>
    </div>
  );
};
