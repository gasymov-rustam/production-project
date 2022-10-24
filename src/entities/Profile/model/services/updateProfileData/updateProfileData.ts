import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '../../../../../app/providers';
import { getProfileForm } from '../../selectors';
import { Profile } from '../../types/profile';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const { extra, getState, rejectWithValue } = thunkApi;

    try {
      const formData = getProfileForm(getState());
      const response = await extra.api.put<Profile>('/profile', formData);

      return response?.data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return rejectWithValue('error');
    }
  }
);
