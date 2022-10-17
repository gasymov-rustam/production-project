import { StateSchema } from '../../../../../app';

export const getLoginIsLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
