import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Text, VerticalStack, classNames } from '../../../../shared';
import type { Comment } from '../../model';
import { CommentCard } from '../CommentCard';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const { className = '', comments, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VerticalStack gap="16" className={classNames({ additional: [className] })}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VerticalStack>
    );
  }

  return (
    <VerticalStack gap="16" max className={classNames({ additional: [className] })}>
      {comments?.length ? (
        comments.map((comment) => <CommentCard key={comment.id} isLoading={isLoading} comment={comment} />)
      ) : (
        <Text text={t('COMMENTS EMPTY')} />
      )}
    </VerticalStack>
  );
});
