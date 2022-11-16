import { combineReducers } from '@reduxjs/toolkit';

import { ArticleDetailsPageSchema } from '../types';

import { ArticleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import { articleDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recommendations: articleDetailsPageRecommendationsReducer,
  comments: ArticleDetailsCommentsReducer,
});

export { ArticleDetailsCommentsActions, getArticleComments } from './articleDetailsCommentsSlice';
export { getArticleRecommendations } from './articleDetailsPageRecommendationsSlice';
