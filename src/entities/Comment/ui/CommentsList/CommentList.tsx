import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Text, classNames } from '../../../../shared';
import type { Comment } from '../../model';
import { CommentCard } from '../CommentCard';

import cls from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const { className = '', comments, isLoading } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames({ additional: [className] })}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard key={comment.id} isLoading={isLoading} comment={comment} className={cls.comment} />
        ))
      ) : (
        <Text text={t('COMMENTS EMPTY')} />
      )}
    </div>
  );
});
