import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUserName } from '../services';
import { LoginSchema } from '../types';

const initialState: LoginSchema = {
  userName: '',
  password: '',
  isLoading: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserName: (state, { payload }: PayloadAction<string>) => {
      state.userName = payload;
    },
    setPassword: (state, { payload }: PayloadAction<string>) => {
      state.password = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUserName.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(loginByUserName.fulfilled, (state) => {
        state.isLoading = false;
        state.error = undefined;
        // state.userName = payload.username;
      })
      .addCase(loginByUserName.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
