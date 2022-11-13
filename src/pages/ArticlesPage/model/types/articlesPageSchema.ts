import { EntityState } from '@reduxjs/toolkit';

import { Article } from '../../../../entities';
import { ArticleView } from '../../../../entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;

  view: ArticleView;
  // pagination
  page: number;
  limit?: number;
  hasMore: boolean;

  // init reducer or not
  _inited: boolean;
}
