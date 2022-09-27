import { useTranslation } from 'react-i18next';
import { TestBug } from '../../app';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      <TestBug />
      {t('MAIN PAGE')}
    </div>
  );
};

export default MainPage;
