import { StateSchema } from '../../../../../app';

export const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateError;
