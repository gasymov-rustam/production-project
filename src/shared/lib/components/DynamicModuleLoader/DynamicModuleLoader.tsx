import { Reducer } from '@reduxjs/toolkit';
import { FC, Fragment, createElement, useEffect } from 'react';
import { useStore } from 'react-redux';

import { ReduxStoreManager, StateSchema, StateSchemaKey } from '../../../../app';
import { useAppDispatch } from '../../hooks';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

// type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
  children,
  reducers,
  removeAfterUnmount = true,
}) => {
  const store = useStore() as ReduxStoreManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const mountedReducer = store.reducerManager.getReducerMap();

    Object.entries(reducers).forEach(([name, reducer]) => {
      if (!mountedReducer[name as StateSchemaKey]) {
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createElement(Fragment, null, children);
};
