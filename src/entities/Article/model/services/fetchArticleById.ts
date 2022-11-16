import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '../../../../app/providers';
import { Article } from '../types/article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
  'articleDetails/fetchArticleById',
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<Article>(`/articles/${articleId}`, {
        params: {
          _expand: 'user',
        },
      });

      if (!response?.data) {
        throw new Error();
      }

      return response?.data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      return rejectWithValue('Error');
    }
  },
);
