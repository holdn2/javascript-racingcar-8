import { REGEX } from '../constant/regex.js';

// 전체 공백 제거
export const removeAllSpaces = (input) => {
  const cleanedString = input.replace(REGEX.ALL_SPACES, '');
  return cleanedString;
};

// 문자열을 "," 기준으로 분리한 후 빈 문자열은 배열에서 제거
export const parseCarNameString = (carNameString) => {
  const carNameArray = carNameString.split(',').filter((name) => name !== '');

  return carNameArray;
};
