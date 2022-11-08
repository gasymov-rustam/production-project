import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { ArticleList, ArticleView, ArticleViewSelector } from '../../../../entities/Article';
import { DynamicModuleLoader, ReducersList, classNames, useAppDispatch, useInitialEffect } from '../../../../shared';
import {
  articlesPageActions,
  articlesPageReducer,
  fetchArticlesList,
  getArticles,
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model';

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

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch],
  );

  useInitialEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(articlesPageActions.initialState());
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames({ cls: cls.ArticlesPage, additional: [className] })}>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />

        <ArticleList articles={articles} isLoading={isLoading} view={view} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
