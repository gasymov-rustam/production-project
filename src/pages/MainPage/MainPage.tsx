import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { TestBug } from '../../app';
import { Counter } from '../../entities';

interface MainPageProps {
  children?: ReactNode;
}

const MainPage: FC<MainPageProps> = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      <TestBug />
      {t('MAIN PAGE')}
      <Counter />
    </div>
  );
};

export default MainPage;
