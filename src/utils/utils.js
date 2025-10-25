import { REGEX } from '../constant/regex.js';

export const removeAllSpaces = (input) => {
  const cleanedString = input.replace(REGEX.ALL_SPACES, '');
  return cleanedString;
};

export const parseCarNameString = (carNameString) => {
  const carNameArray = carNameString.split(',').filter((name) => name !== '');

  return carNameArray;
};
