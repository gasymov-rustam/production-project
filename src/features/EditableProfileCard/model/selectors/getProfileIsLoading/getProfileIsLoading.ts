import { StateSchema } from '../../../../../app';

export const getProfileIsLoading = (state: StateSchema) => state.profile?.isLoading;
