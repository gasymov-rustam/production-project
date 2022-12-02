import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '../../../../../app/providers';
import { Profile } from '../../../../../entities';
import { ValidateProfileError } from '../../consts';
import { getProfileForm } from '../../selectors';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const { extra, getState, rejectWithValue } = thunkApi;
    const formData = getProfileForm(getState());
    const validateErrors = validateProfileData(formData);

    if (validateErrors.length) {
      return rejectWithValue(validateErrors);
    }

    try {
      const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);

      if (!response.data) {
        throw new Error();
      }

      return response?.data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  },
);
