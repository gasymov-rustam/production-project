import { StateSchema } from '../../../../../app';

export const getProfileForm = (state: StateSchema) => state.profile?.form;
