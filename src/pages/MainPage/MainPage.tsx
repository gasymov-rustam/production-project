import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { PageWrapper } from '../../shared';

const MainPage = memo(() => {
  const { t } = useTranslation('main');

  return <PageWrapper>{t('MAIN PAGE')}</PageWrapper>;
});

export default MainPage;
