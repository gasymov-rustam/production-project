import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from '../../../../app';

export const getScrollRestoration = (state: StateSchema) => state.scrollRestoration.scroll;

export const getScrollRestorationByPath = (path: string) =>
  createSelector(getScrollRestoration, (state) => state[path] || 0);
