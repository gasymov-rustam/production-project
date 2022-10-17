import { StateSchema } from '../../../../../app';

export const getProfileError = (state: StateSchema) => state.profile?.error;
