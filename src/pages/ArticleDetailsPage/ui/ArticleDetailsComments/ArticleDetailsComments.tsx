import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { CommentList } from '../../../../entities/Comment';
import { AddCommentForm } from '../../../../features/AddCommentForm';
import { Text, TextSize, VerticalStack, classNames, useInitialEffect } from '../../../../shared';
import {
  addCommentForArticle,
  fetchCommentsByArticleId,
  getArticleComments,
  getArticleCommentsIsLoading,
} from '../../model';

interface ArticleDetailsCommentsProps {
  className?: string;
  id: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
  const { className = '', id } = props;
  const { t } = useTranslation();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const dispatch = useDispatch();

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  return (
    <VerticalStack gap="16" max className={classNames({ additional: [className] })}>
      <Text size={TextSize.L} title={t('COMMENTS')} />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList isLoading={commentsIsLoading} comments={comments} />
    </VerticalStack>
  );
});
