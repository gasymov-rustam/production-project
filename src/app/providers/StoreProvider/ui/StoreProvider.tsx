import type { ReducersMapObject } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { StateSchema, createReduxStore } from '../config';

interface StoreProviderProps {
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
  children: ReactNode;
}

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
  const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>);

  return <Provider store={store}>{children}</Provider>;
};
