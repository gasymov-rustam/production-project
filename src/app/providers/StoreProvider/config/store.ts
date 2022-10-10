import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { countersReducer, userReducer } from '../../../../entities';
import type { StateSchema } from './StateSchema';

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: countersReducer,
    user: userReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
