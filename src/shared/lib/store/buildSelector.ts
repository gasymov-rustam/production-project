import { shallowEqual, useSelector } from 'react-redux';

import { StateSchema } from '../../../app';

type Selector<T> = (state: StateSchema) => T;
type Result<T> = [() => T, Selector<T>];

export function buildSelector<T>(selector: Selector<T>): Result<T> {
  const useSelectorHook = () => useSelector(selector, shallowEqual);

  return [useSelectorHook, selector];
}

// export function buildSelector1<T>(...selector: Selector<T>[]): Result<T> {
//   if (selector.length === 1) {
//     const useSelectorHook = () => useSelector(selector);

//     return [useSelectorHook, selector];
//   }
// }
