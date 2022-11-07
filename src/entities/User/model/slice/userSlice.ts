import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { USER_LOCAL_STORAGE_KEY } from '../../../../shared';
import { User, UserSchema } from '../types';

const initialState: UserSchema = {
  _inited: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, { payload }: PayloadAction<User>) => {
      state.authUser = payload;
    },
    initAuthData: (state) => {
      const currentUser = window.localStorage.getItem(USER_LOCAL_STORAGE_KEY);

      if (currentUser) {
        state.authUser = JSON.parse(currentUser);
      }

      state._inited = true;
    },
    logOut: (state) => {
      window.localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
      state.authUser = undefined;
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
