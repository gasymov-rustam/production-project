import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  ArticleSortField,
  ArticleSortSelector,
  ArticleTypeTabs,
  ArticleView,
  ArticleViewSelector,
} from '../../../../entities/Article';
import { ArticleType } from '../../../../entities/Article/model/types/article';
import { Card, Input, SortOrder, TabItem, classNames, useAppDispatch } from '../../../../shared';
import { useDebounce } from '../../../../shared/lib';
import {
  articlesPageActions,
  fetchArticlesList,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
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
  const typeValue = useSelector(getArticlesPageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFilter = useDebounce(fetchData, 500);

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
      debouncedFilter();
    },
    [debouncedFilter, dispatch],
  );

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder));
      dispatch(articlesPageActions.setPage(1));
      debouncedFilter();
    },
    [debouncedFilter, dispatch],
  );

  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(articlesPageActions.setSearch(search));
      dispatch(articlesPageActions.setPage(1));
      debouncedFilter();
    },
    [debouncedFilter, dispatch],
  );

  const onChangeType = useCallback(
    (tab: TabItem<ArticleType>) => {
      dispatch(articlesPageActions.setType(tab.value));
      dispatch(articlesPageActions.setPage(1));
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

      <ArticleTypeTabs value={typeValue} className={cls.tabs} onChangeType={onChangeType} />
    </div>
  );
});
