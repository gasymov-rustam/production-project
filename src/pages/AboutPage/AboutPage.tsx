import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface AboutPageProps {
  children?: ReactNode;
}

const AboutPage: FC<AboutPageProps> = () => {
  const { t } = useTranslation('about');

  return <div>{t('ABOUT PAGE')}</div>;
};

export default AboutPage;
