import { StateSchema } from '../../../../../app';

export const getLoginError = (state: StateSchema) => state?.loginForm?.error;
