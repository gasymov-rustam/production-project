import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchArticleById } from '../services/fetchArticleById';
import { Article } from '../types/article';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArticleById.fulfilled, (state, { payload }: PayloadAction<Article>) => {
        state.isLoading = false;
        state.error = undefined;
        state.data = payload;
      })
      .addCase(fetchArticleById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const {
  actions: articleDetailsActions,
  reducer: articleDetailsReducer,
  name: articleDetailsName,
} = articleDetailsSlice;
