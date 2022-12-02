import { Profile } from '../../../../../entities';
import { ValidateProfileError } from '../../consts';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const errors: ValidateProfileError[] = [];
  const { first, lastname, age, city, country } = profile;

  if (!first || first.length < 2 || !lastname || lastname.length < 2) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age) || age < 15) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  if (!city) {
    errors.push(ValidateProfileError.INCORRECT_CITY);
  }

  return errors;
};
