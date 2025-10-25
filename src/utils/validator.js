import { ERROR_MESSAGE } from '../constant/error.js';
import { REGEX } from '../constant/regex.js';

export const validateCarNameString = (carNameString) => {
  if (!REGEX.VALID_CAR_NAME_CHARACTER.test(carNameString)) {
    throw new Error(ERROR_MESSAGE.INVALID_CAR_NAME_CHARACTER);
  }
};

export const validateCarNameArray = (carNameArray) => {
  if (!carNameArray.length) {
    throw new Error(ERROR_MESSAGE.EMPTY_CAR_NAME_LIST);
  }

  const uniqueArray = new Set(carNameArray);
  if (uniqueArray.size !== carNameArray.length) {
    throw new Error(ERROR_MESSAGE.DUPLICATE_CAR_NAME);
  }

  const isOverMaxLength = carNameArray.some((name) => name.length > 5);
  if (isOverMaxLength) {
    throw new Error(ERROR_MESSAGE.INVALID_CAR_NAME_LENGTH);
  }
};

export const validateAttemptCount = (attemptCount) => {
  if (!REGEX.VALID_ATTEMPT_COUNT.test(attemptCount)) {
    throw new Error(ERROR_MESSAGE.INVALID_ATTEMPT_COUNT);
  }
};
