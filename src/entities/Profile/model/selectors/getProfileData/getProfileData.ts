import { StateSchema } from '../../../../../app';

export const getProfileData = (state: StateSchema) => state.profile?.data;
