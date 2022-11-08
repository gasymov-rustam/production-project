import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { PageWrapper } from '../../shared';

const AboutPage = memo(() => {
  const { t } = useTranslation('about');

  return <PageWrapper>{t('ABOUT PAGE')}</PageWrapper>;
});

export default AboutPage;
