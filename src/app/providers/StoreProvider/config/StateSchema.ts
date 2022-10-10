import type { CounterSchema, UserSchema } from '../../../../entities';
import type { LoginSchema } from '../../../../features';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  loginForm?: LoginSchema;
}
