export { ArticleDetailsPage } from './ui';
export {
  articleDetailsPageReducer,
  getArticleRecommendations,
  ArticleDetailsCommentsActions,
  getArticleComments,
  getArticleCommentsIsLoading,
  getArticleCommentsError,
  getArticleRecommendationsIsLoading,
  getArticleRecommendationsError,
  fetchCommentsByArticleId,
  getCanEditArticle,
} from './model';
export type { ArticleDetailsPageSchema } from './model';
