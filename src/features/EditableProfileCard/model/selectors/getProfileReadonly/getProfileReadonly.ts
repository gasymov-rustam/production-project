import { StateSchema } from '../../../../../app';

export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly;
