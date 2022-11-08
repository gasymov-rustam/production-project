export type { Article, ArticleDetailsSchema } from './model';
export {
  articleDetailsActions,
  articleDetailsReducer,
  articleDetailsName,
  fetchArticleById,
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
  ArticleView,
} from './model';
export { ArticleDetails, ArticleList, ArticleViewSelector } from './ui';
