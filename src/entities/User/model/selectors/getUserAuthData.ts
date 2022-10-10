import { StateSchema } from '../../../../app';

export const getUserAuthData = (state: StateSchema) => state.user.authUser;
