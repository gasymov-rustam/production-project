import { configureStore } from '@reduxjs/toolkit';
import { counterSlice, countersReducer } from '../../../../entities';
import type { StateSchema } from './StateSchema';

export const createReduxStore = (initialState?: StateSchema) =>
  configureStore<StateSchema>({
    reducer: {
      [counterSlice.name]: countersReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
