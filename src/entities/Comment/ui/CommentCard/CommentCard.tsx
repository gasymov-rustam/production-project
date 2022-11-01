import { memo } from 'react';

import { Avatar, Text, TextAlign, TextSize, classNames } from '../../../../shared';
import type { Comment } from '../../model';

import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className = '', comment, isLoading } = props;

  return (
    <div className={classNames({ cls: cls.CommentCard, additional: [className] })}>
      <div className={cls.header}>
        {comment?.user.avatar && <Avatar size={30} src={comment.user.avatar} alt={comment.user.userName} />}

        <Text align={TextAlign.LEFT} title={comment.user.userName} className={cls.username} size={TextSize.S} />
      </div>

      <Text align={TextAlign.LEFT} text={comment.text} className={cls.text} />
    </div>
  );
});
