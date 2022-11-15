import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { StateSchema } from '../../../../app';
import { Article } from '../../../../entities';
import { ArticleSortField, ArticleView } from '../../../../entities/Article';
import { ARTICLES_VIEW_LOCAL_STORAGE_KEY, SortOrder } from '../../../../shared';
import { fetchArticlesList } from '../services';
import { ArticlesPageSchema } from '../types/articlesPageSchema';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

const initialState = articlesAdapter.getInitialState<ArticlesPageSchema>({
  isLoading: false,
  error: undefined,
  ids: [],
  entities: {},
  view: ArticleView.SMALL,
  hasMore: true,
  page: 1,
  limit: 9,
  order: 'asc',
  search: '',
  sort: ArticleSortField.CREATED,
  _inited: false,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage ?? articlesAdapter.getInitialState(),
);

export const articlesPageSlice = createSlice({
  name: 'articlesPage',
  initialState,
  reducers: {
    setView: (state, { payload }: PayloadAction<ArticleView>) => {
      state.view = payload;
      localStorage.setItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY, payload);
    },
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    setOrder: (state, { payload }: PayloadAction<SortOrder>) => {
      state.order = payload;
    },
    setSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },
    setSort: (state, { payload }: PayloadAction<ArticleSortField>) => {
      state.sort = payload;
    },
    initialState: (state) => {
      const view = window.localStorage.getItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY) as ArticleView;
      state.view = view;
      state.limit = ArticleView.BIG === view ? 4 : 9;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, { meta }) => {
        state.error = undefined;
        state.isLoading = true;

        if (meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, { meta, payload }) => {
        state.isLoading = false;
        state.error = undefined;
        state.hasMore = payload.length > 0;

        if (meta.arg.replace) {
          articlesAdapter.setAll(state, payload);
        } else {
          articlesAdapter.addMany(state, payload);
        }
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice;
