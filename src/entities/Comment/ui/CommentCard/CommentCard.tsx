import { memo } from 'react';

import {
  AppLink,
  Avatar,
  RoutePath,
  Skeleton,
  Text,
  TextAlign,
  TextSize,
  VerticalStack,
  classNames,
} from '../../../../shared';
import type { Comment } from '../../model';

import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className = '', comment, isLoading } = props;

  if (isLoading) {
    return (
      <VerticalStack gap="16" max className={classNames({ additional: [className, cls.loading] })}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton height={16} width={100} className={cls.userName} />
        </div>

        <Skeleton className={cls.text} width="100%" height={50} />
      </VerticalStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VerticalStack gap="16" max className={classNames({ cls: cls.CommentCard, additional: [className] })}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
        {comment?.user.avatar && <Avatar size={30} src={comment.user.avatar} alt={comment.user.userName} />}

        <Text align={TextAlign.LEFT} title={comment.user.userName} className={cls.userName} size={TextSize.S} />
      </AppLink>

      <Text align={TextAlign.LEFT} text={comment.text} className={cls.text} />
    </VerticalStack>
  );
});
