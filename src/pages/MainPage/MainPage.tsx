import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { PageWrapper } from '../../widgets';

const MainPage = memo(() => {
  const { t } = useTranslation('main');

  return <PageWrapper data-testid="MainPage">{t('MAIN PAGE')}</PageWrapper>;
});

export default MainPage;
