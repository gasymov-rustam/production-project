import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ScrollRestorationSchema } from '../types/ScrollRestorationSchema';

const initialState: ScrollRestorationSchema = {
  scroll: {},
};

export const scrollRestorationSlice = createSlice({
  name: 'scrollRestoration',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
      const { path, position } = payload;

      state.scroll[path] = position;
    },
  },
});

export const { actions: scrollRestorationActions, reducer: scrollRestorationReducer } = scrollRestorationSlice;
