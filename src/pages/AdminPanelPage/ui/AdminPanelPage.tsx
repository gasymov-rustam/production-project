import { useTranslation } from 'react-i18next';

import { PageWrapper } from '../../../widgets';

const AdminPanelPage = () => {
  const { t } = useTranslation('about');

  return <PageWrapper>{t('ADMIN PANEL')}</PageWrapper>;
};

export default AdminPanelPage;
