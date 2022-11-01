import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '../../../../entities';
import { CommentList } from '../../../../entities/Comment';
import {
  DynamicModuleLoader,
  ReducersList,
  Text,
  classNames,
  useAppDispatch,
  useInitialEffect,
} from '../../../../shared';
import {
  ArticleDetailsCommentsReducer,
  fetchCommentsByArticleId,
  getArticleComments,
  getArticleCommentsIsLoading,
} from '../../model';

import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: ArticleDetailsCommentsReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className = '' } = props;
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return (
      <div className={classNames({ cls: cls.ArticlesPage, additional: [className] })}>
        {t('ARTICLE DETAILS NOT FOUND')}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames({ cls: cls.ArticlesPage, additional: [className] })}>
        {t('ARTICLE DETAILS PAGE')}
        <ArticleDetails id={id} />

        <Text title={t('COMMENTS')} className={cls.commentTitle} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
