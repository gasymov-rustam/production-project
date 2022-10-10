import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface MainPageProps {
  children?: ReactNode;
}

const MainPage: FC<MainPageProps> = () => {
  const { t } = useTranslation('main');

  return <div>{t('MAIN PAGE')}</div>;
};

export default MainPage;
