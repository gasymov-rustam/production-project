import type { ReducersMapObject } from '@reduxjs/toolkit';
import { FC } from 'react';
import { Provider } from 'react-redux';

import { StateSchema, createReduxStore } from '../config';

interface StoreProviderProps {
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState, asyncReducers }) => {
  const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>);

  return <Provider store={store}>{children}</Provider>;
};
