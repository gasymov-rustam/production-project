import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { DynamicModuleLoader, ReducersList, classNames, useAppDispatch, useInitialEffect } from '../../../../shared';
import { PageWrapper } from '../../../../widgets';
import { articlesPageReducer, fetchNextArticlesPage, getArticlesPageView } from '../../model';
import { initArticlesPage } from '../../model/services';
import { ArticleInfiniteList } from '../ArticleInfiniteList';
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
  const view = useSelector(getArticlesPageView);
  const [searchParams] = useSearchParams();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <PageWrapper
        data-testid="ArticlesPage"
        onScrollEnd={onLoadNextPart}
        className={classNames({ cls: cls.ArticlesPage, additional: [className] })}
      >
        <ArticlesPageFilters view={view} />

        <ArticleInfiniteList className={cls.list} />
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
