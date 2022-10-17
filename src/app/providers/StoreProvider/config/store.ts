import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { countersReducer, userReducer } from '../../../../entities';
import { loginReducer } from '../../../../features';
import { createReducerManager } from './reducerManager';
import type { StateSchema } from './StateSchema';

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: countersReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};
