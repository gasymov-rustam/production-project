import { StateSchema } from '../../../../../app';

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || '';
