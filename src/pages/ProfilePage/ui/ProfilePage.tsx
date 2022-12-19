import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { EditableProfileCard } from '../../../features/EditableProfileCard';
import { Text, VerticalStack, classNames } from '../../../shared';
import { PageWrapper } from '../../../widgets';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo(({ className = '' }: ProfilePageProps) => {
  const { t } = useTranslation('profile');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Text text={t('PROFILE IS NOT DEFINED')} />;
  }

  return (
    <PageWrapper data-testid="ProfilePage" className={classNames({ additional: [className] })}>
      <VerticalStack gap="16" max>
        <EditableProfileCard id={id} />
      </VerticalStack>
    </PageWrapper>
  );
});

export default ProfilePage;
