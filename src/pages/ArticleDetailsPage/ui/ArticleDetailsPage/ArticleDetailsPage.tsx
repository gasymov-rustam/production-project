import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { ArticleDetails } from '../../../../entities';
import { ArticleList } from '../../../../entities/Article';
import { CommentList } from '../../../../entities/Comment';
import { AddCommentForm } from '../../../../features/AddCommentForm';
import {
  DynamicModuleLoader,
  ReducersList,
  Text,
  TextSize,
  classNames,
  useAppDispatch,
  useInitialEffect,
} from '../../../../shared';
import { PageWrapper } from '../../../../widgets';
import {
  addCommentForArticle,
  articleDetailsPageReducer,
  fetchArticleRecommendations,
  fetchCommentsByArticleId,
  getArticleComments,
  getArticleCommentsIsLoading,
  getArticleRecommendations,
  getArticleRecommendationsIsLoading,
} from '../../model';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader';

import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className = '' } = props;
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  if (!id) {
    return (
      <PageWrapper className={classNames({ cls: cls.ArticlesPage, additional: [className] })}>
        {t('ARTICLE DETAILS NOT FOUND')}
      </PageWrapper>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <PageWrapper className={classNames({ cls: cls.ArticlesPage, additional: [className] })}>
        <ArticleDetailsPageHeader />

        <ArticleDetails id={id} />

        <Text size={TextSize.L} className={cls.commentTitle} title={t('RECOMMENDATIONS')} />

        <ArticleList
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          className={cls.recommendations}
          target="_blank"
        />

        <Text title={t('COMMENTS')} className={cls.commentTitle} />
        <AddCommentForm onSendComment={onSendComment} />

        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
