import { EntityState } from '@reduxjs/toolkit';

import { Article } from '../../../../entities';
import { ArticleSortField, ArticleType, ArticleView } from '../../../../entities/Article';
import { SortOrder } from '../../../../shared';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;

  // filters
  view: ArticleView;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType;

  // init reducer or not
  _inited: boolean;
}
