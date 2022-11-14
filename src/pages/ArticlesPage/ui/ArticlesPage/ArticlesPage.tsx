import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { ArticleList, ArticleView, ArticleViewSelector } from '../../../../entities/Article';
import { DynamicModuleLoader, ReducersList, classNames, useAppDispatch, useInitialEffect } from '../../../../shared';
import { PageWrapper } from '../../../../widgets';
import {
  articlesPageActions,
  articlesPageReducer,
  fetchNextArticlesPage,
  getArticles,
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model';
import { initArticlesPage } from '../../model/services';
import { ArticlesPageFilters } from '../ArticlesPageFilters';

import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

type OmitMatch<T> = Omit<T, 'id'>;

export const createArticleArray = <T,>(length: number, article: OmitMatch<T>): OmitMatch<T>[] =>
  new Array(length).fill(0).map((_, idx) => ({ ...article, id: String(idx) }));

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className = '' } = props;
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <PageWrapper
        onScrollEnd={onLoadNextPart}
        className={classNames({ cls: cls.ArticlesPage, additional: [className] })}
      >
        <ArticlesPageFilters view={view} />

        <ArticleList articles={articles} isLoading={isLoading} view={view} className={cls.list} />
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
