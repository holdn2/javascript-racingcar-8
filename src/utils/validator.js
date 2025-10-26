import { ERROR_MESSAGE } from '../constant/error.js';
import { REGEX } from '../constant/regex.js';

// 원본 문자열에 대해 허용된 문자만 사용했는지 검증.
export const validateCarNameString = (carNameString) => {
  if (!REGEX.VALID_CAR_NAME_CHARACTER.test(carNameString)) {
    throw new Error(ERROR_MESSAGE.INVALID_CAR_NAME_CHARACTER);
  }
};

// 파싱된 배열에 대한 예외처리
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

// 시도할 횟수 입력값에 대한 검증
export const validateAttemptCount = (attemptCount) => {
  if (!REGEX.VALID_ATTEMPT_COUNT.test(attemptCount)) {
    throw new Error(ERROR_MESSAGE.INVALID_ATTEMPT_COUNT);
  }
};
