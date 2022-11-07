import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { StateSchema } from '../../../../app';
import { Comment } from '../../../../entities/Comment';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

const commentAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

const initialState = commentAdapter.getInitialState<ArticleDetailsCommentsSchema>({
  isLoading: false,
  error: undefined,
  ids: [],
  entities: {},
});

export const getArticleComments = commentAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments ?? commentAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsComments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, { payload }: PayloadAction<Comment[]>) => {
        state.isLoading = false;
        commentAdapter.setAll(state, payload);
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const {
  reducer: ArticleDetailsCommentsReducer,
  actions: ArticleDetailsCommentsActions,
  name: articleDetailsCommentsName,
} = articleDetailsCommentsSlice;
