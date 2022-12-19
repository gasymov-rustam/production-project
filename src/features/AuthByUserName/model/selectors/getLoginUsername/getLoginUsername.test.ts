import { StateSchema } from '../../../../../app';

import { getLoginUserName } from './getLoginUsername';

describe('getLoginUserName.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        userName: '123123',
      },
    };
    expect(getLoginUserName(state as StateSchema)).toEqual('123123');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUserName(state as StateSchema)).toEqual('');
  });
});
