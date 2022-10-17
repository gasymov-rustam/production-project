import { StateSchema } from '../../../../../app';

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.userName || '';
