import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../shared';
import cln from './PageError.module.scss';

export const PageError = memo(() => {
  const { t } = useTranslation();

  const reloadPage = () => window.location.reload();

  return (
    <div className={cln.PageError}>
      <p>{t('AN UNEXPECTED ERROR HAS OCCURRED')}</p>
      <Button onClick={reloadPage}>{t('RELOAD PAGE')}</Button>
    </div>
  );
});
