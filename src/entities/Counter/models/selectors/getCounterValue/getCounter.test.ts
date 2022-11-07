import { StateSchema } from '../../../../../app';

import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
  test('getCounterValue.test', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
