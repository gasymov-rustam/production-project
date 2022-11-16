import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';

import type { ArticleDetailsSchema, CounterSchema, ProfileSchema, UserSchema } from '../../../../entities';
import type { LoginSchema } from '../../../../features';
import { AddCommentFormSchema } from '../../../../features/AddCommentForm';
import { ScrollRestorationSchema } from '../../../../features/ScrollRestoration';
import { ArticleDetailsPageSchema } from '../../../../pages/ArticleDetailsPage';
import { ArticlesPageSchema } from '../../../../pages/ArticlesPage';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  scrollRestoration: ScrollRestorationSchema;

  /** Async Reducers */
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
