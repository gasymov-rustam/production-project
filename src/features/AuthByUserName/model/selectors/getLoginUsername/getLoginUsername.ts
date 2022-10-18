import { StateSchema } from '../../../../../app';

export const getLoginUserName = (state: StateSchema) => state?.loginForm?.userName || '';
