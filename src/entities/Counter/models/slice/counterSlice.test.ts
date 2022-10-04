import { CounterSchema } from '../types';
import { countersActions, countersReducer } from './counterSlice';

describe('counterSlice.test', () => {
  test('decrement', () => {
    const state: CounterSchema = { value: 10 };

    expect(countersReducer(state, countersActions.decrement())).toEqual({ value: 9 });
  });
  test('increment', () => {
    const state: CounterSchema = { value: 10 };

    expect(countersReducer(state, countersActions.increment())).toEqual({ value: 11 });
  });

  test('should work with empty state', () => {
    expect(countersReducer(undefined, countersActions.increment())).toEqual({ value: 1 });
  });
});
