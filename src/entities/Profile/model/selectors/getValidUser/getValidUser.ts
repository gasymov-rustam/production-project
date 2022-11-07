import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from '../../../../User';
import { getProfileData } from '../getProfileData/getProfileData';

export const getValidUser = createSelector(
  getUserAuthData,
  getProfileData,
  (user, profile) => user?.id === profile?.id,
);
