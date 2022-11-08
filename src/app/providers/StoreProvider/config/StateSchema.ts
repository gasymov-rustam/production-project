import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';

import type {
  ArticleDetailsSchema,
  CounterSchema,
  ProfileSchema,
  UserSchema,
  articleDetailsName,
} from '../../../../entities';
import type { LoginSchema } from '../../../../features';
import { AddCommentFormSchema, addCommentFormName } from '../../../../features/AddCommentForm';
import { ArticleDetailsCommentsSchema } from '../../../../pages/ArticleDetailsPage';
import { ArticlesPageSchema } from '../../../../pages/ArticlesPage';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  /** Async Reducers */
  profile?: ProfileSchema;
  loginForm?: LoginSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  articlesPage?: ArticlesPageSchema;
  [articleDetailsName]?: ArticleDetailsSchema;
  [addCommentFormName]?: AddCommentFormSchema;
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
