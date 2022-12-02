import { loginByUserName } from '../services';
import { LoginSchema } from '../types/loginSchema';

import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  test('test set userName', () => {
    const state: DeepPartial<LoginSchema> = { userName: '123' };

    expect(loginReducer(state as LoginSchema, loginActions.setUserName('123123'))).toEqual({
      userName: '123123',
    });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' };

    expect(loginReducer(state as LoginSchema, loginActions.setPassword('123123'))).toEqual({
      password: '123123',
    });
  });

  test('test set isLoading', () => {
    const state: DeepPartial<LoginSchema> = { isLoading: false, error: undefined };

    expect(loginReducer(state as LoginSchema, loginByUserName.pending)).toEqual({
      isLoading: true,
      error: undefined,
    });
  });
});
