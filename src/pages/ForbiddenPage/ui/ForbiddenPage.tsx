import { useTranslation } from 'react-i18next';

import { PageWrapper } from '../../../widgets';

export const ForbiddenPage = () => {
  const { t } = useTranslation('');

  return <PageWrapper>{t('YOU DON`T HAVE PERMISSIONS')}</PageWrapper>;
};
