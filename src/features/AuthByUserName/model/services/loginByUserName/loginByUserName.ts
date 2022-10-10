import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from '../../../../../entities';
import { USER_LOCAL_STORAGE_KEY } from '../../../../../shared';

interface LoginByUserProps {
  userName: string;
  password: string;
}

export enum ErrorsRespond {
  SERVER_ERROR = 500,
  AUTH_ERROR = 403,
}

export const loginByUserName = createAsyncThunk<User, LoginByUserProps, { rejectValue: string }>(
  'login/loginByUserName',
  async (authData, thunkApi) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);

      if (!response.data) {
        throw new Error();
      }

      window.localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
      thunkApi.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error.message);
      /* switch (error.status) {
        case ErrorsRespond.AUTH_ERROR: {
          return thunkApi.rejectWithValue('INVALID NAME OR PASSWORD!');
        }
        default: {
          return thunkApi.rejectWithValue('INVALID NAME OR PASSWORD!');
        }
      }
      // return thunkApi.rejectWithValue(i18n.t('INVALID NAME OR PASSWORD!')); */
      return thunkApi.rejectWithValue('error');
    }
  }
);
