import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ArticleSortField, ArticleSortSelector, ArticleView, ArticleViewSelector } from '../../../../entities/Article';
import { Card, Input, Select, SortOrder, classNames, useAppDispatch } from '../../../../shared';
import {
  articlesPageActions,
  fetchArticlesList,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
} from '../../model';

import cls from './ArticlesPageFilters.module.scss';

interface ArticlePageFiltersProps {
  className?: string;
  view: ArticleView;
}

export const ArticlesPageFilters = memo((props: ArticlePageFiltersProps) => {
  const { className = '', view } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);
  const search = useSelector(getArticlesPageSearch);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch],
  );

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(newSort));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(articlesPageActions.setSearch(search));
      fetchData();
    },
    [dispatch, fetchData],
  );

  return (
    <div className={classNames({ cls: cls.ArticlePageFilters, additional: [className] })}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector sort={sort} order={order} onChangeOrder={onChangeOrder} onChangeSort={onChangeSort} />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>

      <Card className={cls.search}>
        <Input placeholder={t('SEARCH')} value={search} onChange={onChangeSearch} />
      </Card>
    </div>
  );
});
